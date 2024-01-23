import { CardProps } from "./components/Card";

export type CardDataType = CardProps[];

export const data: CardDataType = [
  {
    id: crypto.randomUUID(),
    name: "Malditos Goblins",
    statistics: {
      atk: [1, 1, 1, 2],
      def: [1, 1, 2, 2],
      spd: [3, 3, 4, 6],
      hp: [2, 3, 3, 4],
    },
    rewards: {
      gold: [1, 1, 2, 2],
      xp: [1, 1, 1, 2],
    },
    image: "malditos-goblins.png",
    effects: [
      {
        title: "Convocar a Tropa",
        description:
          "#name tem a habilidade de invocar mais #l1[1] #l3[2] goblins por turno",
      },
    ],
    citation:
      "Malditos humanos, malditos orcs, malditos gigantes malditos goblins",
  },
  {
    id: crypto.randomUUID(),
    name: "Gigante Ninja",
    statistics: {
      atk: [2, 2, 3, 4],
      def: [1, 1, 2, 2],
      spd: [8, 9, 10, 11],
      hp: [6, 7, 7, 8],
    },
    rewards: {
      gold: [2, 5, 7, 9],
      xp: [1, 2, 2, 3],
    },
    image: "gigante-ninja.png",
    effects: [
      {
        title: "Veloz",
        description:
          "No primeiro turno do combate #name ganha #l1[2] #l3[4] em SPD",
      },
      {
        title: "Ninjutsu",
        description:
          "Se sobreviver 2 rodadas, #name rouba um item do herói e volta para o baralho",
      },
    ],
    citation:
      "Eu sou a sombra, eu sou a escuridão, eu sou invisível, um mestre na arte da ofuscação",
  },
  {
    id: crypto.randomUUID(),
    name: "Kobold Sentinela",
    statistics: {
      atk: [1, 1, 2, 2],
      def: [0, 1, 1, 2],
      spd: [5, 5, 6, 6],
      hp: [3, 5, 7, 8],
    },
    rewards: {
      gold: [1, 1, 1, 2],
      xp: [1, 1, 2, 2],
    },
    image: "kobold-sentinela.png",
    effects: [
      {
        title: "Veloz",
        description:
          "No primeiro turno do combate #name ganha #l1[2] #l3[4] em SPD",
      },
      {
        title: "Fender",
        description:
          "Os ataques de #name são tão precisos que ignoram o valor de DEF dos heróis",
      },
    ],
    citation: "Dentu du oio!!",
  },
  {
    id: crypto.randomUUID(),
    name: "Gigante Estrategista",
    statistics: {
      atk: [4, 4, 5, 5],
      def: [2, 2, 2, 3],
      spd: [3, 4, 4, 5],
      hp: [7, 7, 8, 8],
    },
    rewards: {
      gold: [10, 14, 18, 22],
      xp: [1, 2, 2, 3],
    },
    image: "gigante-estrategista.png",
    effects: [
      {
        description:
          "Caso sobreviva a 2 rodadas, #name evoca um Goblin Vigia, e mais outro a cada 2 rodadas subsequentes até que seja derrotado",
      },
    ],
    citation:
      "Leve isso até o Goblin Intérprete e ordene a ele que os Goblins vigias conduzam uma investigação",
  },

  // repetição

  {
    id: crypto.randomUUID(),
    name: "Malditos Goblins",
    statistics: {
      atk: [1, 1, 1, 2],
      def: [1, 1, 2, 2],
      spd: [3, 3, 4, 6],
      hp: [2, 3, 3, 4],
    },
    rewards: {
      gold: [1, 1, 2, 2],
      xp: [1, 1, 1, 2],
    },
    image: "malditos-goblins.png",
    effects: [
      {
        title: "Convocar a Tropa",
        description:
          "#name tem a habilidade de invocar mais #l1[1] #l3[2] goblins por turno",
      },
    ],
    citation:
      "Malditos humanos, malditos orcs, malditos gigantes malditos goblins",
  },
  {
    id: crypto.randomUUID(),
    name: "Gigante Ninja",
    statistics: {
      atk: [2, 2, 3, 4],
      def: [1, 1, 2, 2],
      spd: [8, 9, 10, 11],
      hp: [6, 7, 7, 8],
    },
    rewards: {
      gold: [2, 5, 7, 9],
      xp: [1, 2, 2, 3],
    },
    image: "gigante-ninja.png",
    effects: [
      {
        title: "Veloz",
        description:
          "No primeiro turno do combate #name ganha #l1[2] #l3[4] em SPD",
      },
      {
        title: "Ninjutsu",
        description:
          "Se sobreviver 2 rodadas, #name rouba um item do herói e volta para o baralho",
      },
    ],
    citation:
      "Eu sou a sombra, eu sou a escuridão, eu sou invisível, um mestre na arte da ofuscação",
  },
  {
    id: crypto.randomUUID(),
    name: "Kobold Sentinela",
    statistics: {
      atk: [1, 1, 2, 2],
      def: [0, 1, 1, 2],
      spd: [5, 5, 6, 6],
      hp: [3, 5, 7, 8],
    },
    rewards: {
      gold: [1, 1, 1, 2],
      xp: [1, 1, 2, 2],
    },
    image: "kobold-sentinela.png",
    effects: [
      {
        title: "Veloz",
        description:
          "No primeiro turno do combate #name ganha #l1[2] #l3[4] em SPD",
      },
      {
        title: "Fender",
        description:
          "Os ataques de #name são tão precisos que ignoram o valor de DEF dos heróis",
      },
    ],
    citation: "Dentu du oio!!",
  },
  {
    id: crypto.randomUUID(),
    name: "Gigante Estrategista",
    statistics: {
      atk: [4, 4, 5, 5],
      def: [2, 2, 2, 3],
      spd: [3, 4, 4, 5],
      hp: [7, 7, 8, 8],
    },
    rewards: {
      gold: [10, 14, 18, 22],
      xp: [1, 2, 2, 3],
    },
    image: "gigante-estrategista.png",
    effects: [
      {
        description:
          "Caso sobreviva a 2 rodadas, #name evoca um Goblin Vigia, e mais outro a cada 2 rodadas subsequentes até que seja derrotado",
      },
    ],
    citation:
      "Leve isso até o Goblin Intérprete e ordene a ele que os Goblins vigias conduzam uma investigação",
  },

  {
    id: crypto.randomUUID(),
    name: "Malditos Goblins",
    statistics: {
      atk: [1, 1, 1, 2],
      def: [1, 1, 2, 2],
      spd: [3, 3, 4, 6],
      hp: [2, 3, 3, 4],
    },
    rewards: {
      gold: [1, 1, 2, 2],
      xp: [1, 1, 1, 2],
    },
    image: "malditos-goblins.png",
    effects: [
      {
        title: "Convocar a Tropa",
        description:
          "#name tem a habilidade de invocar mais #l1[1] #l3[2] goblins por turno",
      },
    ],
    citation:
      "Malditos humanos, malditos orcs, malditos gigantes malditos goblins",
  },
  {
    id: crypto.randomUUID(),
    name: "Gigante Ninja",
    statistics: {
      atk: [2, 2, 3, 4],
      def: [1, 1, 2, 2],
      spd: [8, 9, 10, 11],
      hp: [6, 7, 7, 8],
    },
    rewards: {
      gold: [2, 5, 7, 9],
      xp: [1, 2, 2, 3],
    },
    image: "gigante-ninja.png",
    effects: [
      {
        title: "Veloz",
        description:
          "No primeiro turno do combate #name ganha #l1[2] #l3[4] em SPD",
      },
      {
        title: "Ninjutsu",
        description:
          "Se sobreviver 2 rodadas, #name rouba um item do herói e volta para o baralho",
      },
    ],
    citation:
      "Eu sou a sombra, eu sou a escuridão, eu sou invisível, um mestre na arte da ofuscação",
  },
  {
    id: crypto.randomUUID(),
    name: "Kobold Sentinela",
    statistics: {
      atk: [1, 1, 2, 2],
      def: [0, 1, 1, 2],
      spd: [5, 5, 6, 6],
      hp: [3, 5, 7, 8],
    },
    rewards: {
      gold: [1, 1, 1, 2],
      xp: [1, 1, 2, 2],
    },
    image: "kobold-sentinela.png",
    effects: [
      {
        title: "Veloz",
        description:
          "No primeiro turno do combate #name ganha #l1[2] #l3[4] em SPD",
      },
      {
        title: "Fender",
        description:
          "Os ataques de #name são tão precisos que ignoram o valor de DEF dos heróis",
      },
    ],
    citation: "Dentu du oio!!",
  },
  {
    id: crypto.randomUUID(),
    name: "Gigante Estrategista",
    statistics: {
      atk: [4, 4, 5, 5],
      def: [2, 2, 2, 3],
      spd: [3, 4, 4, 5],
      hp: [7, 7, 8, 8],
    },
    rewards: {
      gold: [10, 14, 18, 22],
      xp: [1, 2, 2, 3],
    },
    image: "gigante-estrategista.png",
    effects: [
      {
        description:
          "Caso sobreviva a 2 rodadas, #name evoca um Goblin Vigia, e mais outro a cada 2 rodadas subsequentes até que seja derrotado",
      },
    ],
    citation:
      "Leve isso até o Goblin Intérprete e ordene a ele que os Goblins vigias conduzam uma investigação",
  },
];
