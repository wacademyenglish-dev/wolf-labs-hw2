/* HER DOG · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: his / her / their / its (o dono escolhe a palavra). A1: dicas em português só nas notas (d). window.HW2_ARTIGO_CONTA = true (alvo = possessivos). Só live-* escuras. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "her-dog",
  "titulo": "Her Dog",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f6f206640a44/her-dog/img/live-porta.webp",
  "alvo": "his / her / their / its: the OWNER chooses the word, never the thing; no S on the word (her books); its has no apostrophe; Whose ... is this? when you do not know the owner",
  "abrir": "Think of a woman you know. What is her name?",
  "fecho": "The owner chooses: <b>his</b> (a man), <b>her</b> (a woman), <b>their</b> (two or more), <b>its</b> (an animal, a place). <i>Rita has a dog. It is her dog. Its name is Max.</i> No S: <i>her books</i>. <b>Its</b> has no apostrophe. Don't know the owner? <i>Whose dog is this?</i>",
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
  "rate": "-16%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo in a waiting room. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f6f206640a44/her-dog/img/live-sala.webp",
      "leg": "A waiting room, a dog on the floor",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at that big dog in the waiting room. Whose dog is it?"
        },
        {
          "quem": "leo",
          "t": "It's Rita's dog. Her dog is called Max."
        },
        {
          "quem": "mia",
          "t": "And the two kids with the cat?"
        },
        {
          "quem": "leo",
          "t": "Their cat is called Luna. It is their cat, not Rita's."
        },
        {
          "quem": "mia",
          "t": "Max has a red collar. Its collar is new."
        },
        {
          "quem": "leo",
          "t": "Yes. And its tag has Rita's phone number on it."
        },
        {
          "quem": "mia",
          "t": "Good. And whose bag is this?"
        },
        {
          "quem": "leo",
          "t": "It's Tom's bag. Look, his name is on it."
        },
        {
          "quem": "mia",
          "t": "Oh, there is Tom. Tom! Is this your bag?"
        },
        {
          "quem": "leo",
          "t": "He says yes. Everybody has the right owner now."
        }
      ],
      "perguntas": [
        {
          "q": "Whose dog is Max?",
          "op": [
            "Rita's dog",
            "Tom's dog",
            "The kids' dog"
          ],
          "a": 0,
          "por": "Her dog is called Max."
        },
        {
          "q": "Whose cat is Luna?",
          "op": [
            "The kids' cat",
            "Rita's cat",
            "Leo's cat"
          ],
          "a": 0,
          "por": "Their cat is called Luna."
        },
        {
          "q": "What is new?",
          "op": [
            "Max's collar",
            "Tom's bag",
            "Rita's phone"
          ],
          "a": 0,
          "por": "Its collar is new."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about owners. Hear it, then say it.",
      "frases": [
        {
          "t": "Its name is on the tag.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/f6f206640a44/her-dog/img/live-tag.webp"
        },
        {
          "t": "The dog is quiet. Its leash is on the floor.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/f6f206640a44/her-dog/img/live-sala.webp"
        },
        {
          "t": "Their cat is in her bag.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "his, her, their or its? Four quick ones.",
      "regra": "the OWNER chooses · <b>his</b> (man) · <b>her</b> (woman) · <b>their</b> (two or more) · <b>its</b> (animal, place) · no S · <b>its</b> has no apostrophe.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It is their rabbit.",
          "aceita": [],
          "d": "Dica: dois donos, uma palavra só: <b>their</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong. (Marta has a dog.)",
          "mostra": "It is his dog.",
          "r": "It is her dog.",
          "aceita": [],
          "d": "Dica: quem manda é a dona, a Marta: <b>her</b>. O cachorro não decide."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The dog is old. It's name is Max.",
          "r": "The dog is old. Its name is Max.",
          "aceita": [],
          "d": "Dica: <b>its</b> (de um animal) não leva apóstrofo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong. (Ana has two brothers.)",
          "mostra": "They are hers brothers.",
          "r": "They are her brothers.",
          "aceita": [],
          "d": "Dica: a palavra nunca leva S: <b>her</b> brothers, mesmo com vários irmãos."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f6f206640a44/her-dog/img/live-porta.webp",
      "leg": "A dark door, a leash on the floor",
      "pede": "Look at the picture: a dark door and a leash on the floor. Write 2 or 3 sentences about a dog and its owner. Use <b>his</b>, <b>her</b>, <b>their</b> or <b>its</b>.",
      "ph": "It is Rita's dog. Her dog is …",
      "ex": "It is Rita's dog. Her dog is old and quiet. Its leash is on the floor."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a woman you know well. What is her name? What is her job?",
          "ph": "Her name is … Her job is …",
          "ex": "Her name is Ana. Her job is teacher."
        },
        {
          "q": "Do you, or a neighbor, have a pet? What is its name?",
          "ph": "My neighbor has a … Its name is …",
          "ex": "My neighbor has a cat. Its name is Pipoca."
        }
      ]
    }
  }
};
