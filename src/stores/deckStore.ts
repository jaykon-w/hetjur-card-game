import { create } from "zustand";
import { CardDataType, data } from "../data";

type Store = {
  deck: CardDataType;
  battlefield: CardDataType;
  cemetery: CardDataType;
  activeZoom: CardDataType[0]["id"] | null;
  moveFromTo: (
    id: CardDataType[0]["id"],
    from: "deck" | "battlefield" | "cemetery",
    to: "deck" | "battlefield" | "cemetery",
    start?: boolean
  ) => void;
  clone: (id: CardDataType[0]["id"]) => void;
  shuffleDeck: () => void;
  setActiveZoom: (id: CardDataType[0]["id"] | null) => void;
};

export const useDeck = create<Store>()((set) => ({
  deck: data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value),
  battlefield: [],
  cemetery: [],
  activeZoom: null,

  moveFromTo: (
    id: CardDataType[0]["id"],
    from: "deck" | "battlefield" | "cemetery",
    to: "deck" | "battlefield" | "cemetery",
    start?: boolean
  ) =>
    set((state) => {
      const cardMap = new Map(state[from].map((e) => [e.id, e]));
      const cardToMove = cardMap.get(id)!;

      cardMap.delete(id);

      return {
        [from]: [...cardMap.values()],
        [to]: start ? [cardToMove, ...state[to]] : [...state[to], cardToMove],
      };
    }),

  clone: (id: CardDataType[0]["id"]) =>
    set((state) => {
      const cardMap = new Map(state.battlefield.map((e) => [e.id, e]));
      const cardToClone = { ...cardMap.get(id)! };
      cardToClone.id = crypto.randomUUID();

      return {
        battlefield: [...state.battlefield, cardToClone],
      };
    }),

  shuffleDeck: () =>
    set((state) => ({
      deck: state.deck
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value),
    })),

  setActiveZoom: (id: CardDataType[0]["id"] | null) =>
    set(() => ({ activeZoom: id })),
}));
