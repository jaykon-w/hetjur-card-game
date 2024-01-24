import { CardProps } from "./components/Card";

export type CardDataType = CardProps[];

export const hero: CardProps = {
  id: crypto.randomUUID(),
  type: "hero",
  name: "Adira Puro Sol",
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
  image: "maga.jpg",
  effects: [
    {
      title: "Convocar a Tropa",
      description:
        "#name tem a habilidade de invocar mais #l1[1] #l3[2] goblins por turno",
    },
  ],
  citation:
    "Malditos humanos, malditos orcs, malditos gigantes malditos goblins",
};

export const data: CardDataType = [
  {
    id: crypto.randomUUID(),
    type: "enemy",
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
    image: "malditos-goblins.jpg",
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
    type: "enemy",
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
    image: "gigante-ninja.jpg",
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
    type: "enemy",
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
    image: "kobold-sentinela.jpg",
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
    type: "enemy",
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
    image: "gigante-estrategista.jpg",
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
    type: "enemy",
    name: "Recruta Meio Orc",
    statistics: {
      atk: [2, 2, 3, 3],
      def: [1, 1, 2, 2],
      spd: [2, 3, 4, 5],
      hp: [5, 5, 6, 6],
    },
    rewards: {
      gold: [1, 1, 2, 2],
      xp: [2, 2, 3, 3],
    },
    image: "https://placehold.co/500x400",
    effects: [
      {
        description:
          "Caso sobreviva ao primeiro golpe, #name atordoa o herói, fazendo com que ele só consiga atacar rodada sim, rodada não",
      },
    ],
    citation: "Ahhh!! É, agora eu vou ser promovido!",
  },

  {
    id: crypto.randomUUID(),
    type: "enemy",
    name: "Meio Orc Guerreiro",
    statistics: {
      atk: [3, 3, 4, 4],
      def: [1, 1, 2, 2],
      spd: [6, 6, 7, 8],
      hp: [6, 7, 7, 8],
    },
    rewards: {
      gold: [1, 1, 2, 2],
      xp: [1, 1, 1, 2],
    },
    image: "https://placehold.co/500x400",
    effects: [
      {
        description: "Nenhuma habilidade",
      },
    ],
    citation:
      "Tá, eu vivo seis anos ao todo, virei guerreiro com três, precisa-se de quatro anos de serviço para virar Orc Campal, é... deve dar!",
  },
  {
    id: crypto.randomUUID(),
    type: "enemy",
    name: "Organ Batoph, Patriarca da Ninhada",
    statistics: {
      atk: [4, 5, 6, 6],
      def: [5, 6, 6, 6],
      spd: [3, 3, 4, 4],
      hp: [9, 9, 10, 12],
    },
    rewards: {
      gold: [10, 11, 13, 16],
      xp: [3, 4, 5, 6],
    },
    image: "https://placehold.co/500x400",
    effects: [
      {
        title: "Protetor",
        description:
          "#name tem escamas excepcionais cujo nem mesmo a habilidade fender pode dissipá-la.",
      },
    ],
    citation: "A minha vida pela minha prole!",
  },
  {
    id: crypto.randomUUID(),
    type: "enemy",
    name: "Ogro Mago",
    statistics: {
      atk: [4, 4, 5, 3],
      def: [2, 2, 2, 3],
      spd: [4, 4, 5, 5],
      hp: [7, 8, 8, 9],
    },
    rewards: {
      gold: [10, 14, 18, 22],
      xp: [1, 2, 2, 3],
    },
    image: "https://placehold.co/500x400",
    effects: [
      {
        title: "Bola de Fogo",
        description:
          "Se sobreviver a primeira rodada causa #l1[3] #l4[4] pontos de dano direto a vida de todos heróis do grupo. Essa habilidade também atinge alvos que estiverem voando",
      },
    ],
    citation: "Foguinho!",
  },

  {
    id: crypto.randomUUID(),
    type: "enemy",
    name: "Gigante Sábio",
    statistics: {
      atk: [0, 0, 0, 0],
      def: [1, 2, 2, 2],
      spd: [3, 3, 4, 5],
      hp: [9, 10, 10, 11],
    },
    rewards: {
      gold: [0, 0, 1, 2],
      xp: [4, 5, 6, 7],
    },
    image: "https://placehold.co/500x400",
    effects: [
      {
        title: "Sabedoria desbalanceada",
        description:
          "Caso sobreviva a três rodadas, o Herói é persuadido a entender como é dura a vida de um gigante, ficando duas rodadas sem jogar, tentado a seguir vivendo como um gigante. #name volta para o baralho",
      },
    ],
    citation: "Pensa bem, se você vier conosco, nós temos bolo!!!",
  },
  {
    id: crypto.randomUUID(),
    type: "enemy",
    name: "Tal Orc",
    statistics: {
      atk: [2, 2, 3, 5],
      def: [1, 1, 2, 2],
      spd: [8, 9, 10, 11],
      hp: [6, 7, 7, 9],
    },
    rewards: {
      gold: [2, 5, 7, 9],
      xp: [1, 2, 2, 3],
    },
    image: "gigante-ninja.jpg",
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
    type: "enemy",
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
    image: "kobold-sentinela.jpg",
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
    type: "enemy",
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
    image: "gigante-estrategista.jpg",
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
