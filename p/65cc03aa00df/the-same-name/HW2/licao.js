/* THE SAME NAME · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: 's do dono, Whose, mine / yours / his / hers. A1: dicas em português só nas notas (d). Alvo é possessivo: HW2_ARTIGO_CONTA. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "the-same-name",
  "titulo": "The Same Name",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/65cc03aa00df/the-same-name/img/live-balcao.webp",
  "alvo": "possessive 's (the owner first: Pedro's jacket) · Whose ...? · mine / yours / his / hers; never the jacket of Pedro, Pedro jacket",
  "abrir": "Whose is the bag near you?",
  "fecho": "The owner comes first, then a small <b>'s</b>, then the thing: <b>Pedro's jacket</b>. Never <i>the jacket of Pedro</i>, never <i>Pedro jacket</i>. <b>Whose</b> bag is this? It is <b>mine</b> · <b>yours</b> · <b>his</b> · <b>hers</b>.",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-AU-WilliamMultilingualNeural",
      "cor": "#f0b866"
    }
  },
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo at the school lost and found. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/65cc03aa00df/the-same-name/img/live-balcao.webp",
      "leg": "The lost and found window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi Mia. Welcome to the lost and found."
        },
        {
          "quem": "mia",
          "t": "Hi Leo. I want Pedro's jacket. He plays soccer."
        },
        {
          "quem": "leo",
          "t": "Is this it? It has a soccer ball on the back."
        },
        {
          "quem": "mia",
          "t": "Yes, it's his. Thank you. And Alice's notebook? Is it here?"
        },
        {
          "quem": "leo",
          "t": "Yes, here it is. Whose glove is this? Only one glove."
        },
        {
          "quem": "mia",
          "t": "It's Otto's glove. He is always cold."
        },
        {
          "quem": "leo",
          "t": "And this bottle? It smells like the pool."
        },
        {
          "quem": "mia",
          "t": "That's Bruno's. He swims every day."
        },
        {
          "quem": "leo",
          "t": "Last one. Is this your cap?"
        },
        {
          "quem": "mia",
          "t": "No, it's not mine. It's Marta's cap. It's hers."
        }
      ],
      "perguntas": [
        {
          "q": "Whose jacket does Mia want?",
          "op": [
            "Pedro's",
            "Otto's",
            "Alice's"
          ],
          "a": 0,
          "por": "I want Pedro's jacket."
        },
        {
          "q": "Who is always cold?",
          "op": [
            "Otto",
            "Bruno",
            "Marta"
          ],
          "a": 0,
          "por": "It's Otto's glove. He is always cold."
        },
        {
          "q": "Whose bottle smells like the pool?",
          "op": [
            "Bruno's",
            "Pedro's",
            "Marta's"
          ],
          "a": 0,
          "por": "That's Bruno's. He swims every day."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about things and their owners. Hear it, then say it.",
      "frases": [
        {
          "t": "This is Pedro's jacket.",
          "img": "https://wolf-labs.pages.dev/p/65cc03aa00df/the-same-name/img/live-bancada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "That bottle is Bruno's.",
          "img": "https://wolf-labs.pages.dev/p/65cc03aa00df/the-same-name/img/live-caixa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The cap is not mine. It is Marta's.",
          "img": "https://wolf-labs.pages.dev/p/65cc03aa00df/the-same-name/img/live-balcao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The owner first. Four quick ones.",
      "regra": "the owner first + <b>'s</b> + the thing · <b>Whose</b> ...? · <b>mine</b> · <b>yours</b> · <b>his</b> · <b>hers</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "That is Alice's notebook.",
          "aceita": [],
          "d": "Dica: o dono primeiro: <b>Alice's</b>, depois a coisa."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say it the short way.",
          "mostra": "The jacket of Pedro is on the chair.",
          "r": "Pedro's jacket is on the chair.",
          "aceita": [],
          "d": "Dica: em inglês o dono vem primeiro, com <b>'s</b>: Pedro's jacket."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "This is Marta cap.",
          "r": "This is Marta's cap.",
          "aceita": [],
          "d": "Dica: o dono leva um <b>'s</b> pequeno: Marta's."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That glove is not my. It is Otto's.",
          "r": "That glove is not mine. It is Otto's.",
          "aceita": [
            "That glove is not mine. It's Otto's."
          ],
          "d": "Dica: sozinho, sem a coisa: <b>mine</b>, não 'my'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/65cc03aa00df/the-same-name/img/live-bancada.webp",
      "leg": "Lost things on a table",
      "pede": "Look at the picture: a jacket, a bottle, a glove, a cap and glasses on a table. Write 2 or 3 sentences about whose they are. Use <b>'s</b> (Pedro's jacket) or <b>mine / his / hers</b>.",
      "ph": "The jacket is Pedro's …",
      "ex": "The jacket is Pedro's. The bottle is Bruno's. The cap is hers, not mine."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Whose car do you use? Or whose house do you like?",
          "ph": "I use my …'s car.",
          "ex": "I use my mother's car. I like my grandmother's house."
        },
        {
          "q": "Is there something at home that is not yours? Whose is it?",
          "ph": "The … is my …'s. It is his / hers.",
          "ex": "The big TV is my brother's. It is his."
        }
      ]
    }
  }
};
