/* THE MONSTER MAKER · LIÇÃO DE CASA 2.0 (lote 25, 23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: has / has got to describe (It has two small yellow eyes) · hasn't got / doesn't have · Has it got...? · order: number + size + color + thing; never It have, never two eyes yellow */
window.HW2 = {
  "id": "the-monster-maker",
  "titulo": "The Monster Maker",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8b1cc58466ca/the-monster-maker/img/live-abobora.webp",
  "alvo": "has / has got to describe (It has two small yellow eyes) · hasn't got / doesn't have · Has it got...? · order: number + size + color + thing; never It have, never two eyes yellow",
  "abrir": "Do you wear a costume at Halloween?",
  "fecho": "<b>It has</b> / <b>It's got</b> two small yellow eyes. <b>It hasn't got</b> a nose. <b>Has it got</b> a tail? Order: number, size, color, thing.",
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
      "sub": "Mia and Leo look at a drawing for a film. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/8b1cc58466ca/the-monster-maker/img/live-abobora.webp",
      "leg": "Two glowing pumpkins",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at my drawing. This is my monster."
        },
        {
          "quem": "mia",
          "t": "Wow! Has it got big eyes?"
        },
        {
          "quem": "leo",
          "t": "Yes, it has. It's got two small yellow eyes."
        },
        {
          "quem": "mia",
          "t": "And has it got a nose?"
        },
        {
          "quem": "leo",
          "t": "No, it hasn't got a nose. But it has a very big mouth."
        },
        {
          "quem": "mia",
          "t": "Does it have hair?"
        },
        {
          "quem": "leo",
          "t": "Yes, it does. It has long green hair."
        },
        {
          "quem": "mia",
          "t": "Cool. Has it got legs?"
        },
        {
          "quem": "leo",
          "t": "It's got four short legs, and it's got a tail too."
        },
        {
          "quem": "mia",
          "t": "I love it! It's a friendly monster."
        }
      ],
      "perguntas": [
        {
          "q": "What color are the monster's eyes?",
          "op": [
            "Yellow",
            "Green",
            "Red"
          ],
          "a": 0,
          "por": "It's got two small yellow eyes."
        },
        {
          "q": "Has the monster got a nose?",
          "op": [
            "No, it hasn't",
            "Yes, it has",
            "Only a small one"
          ],
          "a": 0,
          "por": "No, it hasn't got a nose."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "It has two small yellow eyes.",
          "img": "https://wolf-labs.pages.dev/p/8b1cc58466ca/the-monster-maker/img/live-abobora.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It hasn't got a nose, but it has a big mouth.",
          "img": "https://wolf-labs.pages.dev/p/8b1cc58466ca/the-monster-maker/img/live-abobora.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Has your monster got long green hair?",
          "img": "https://wolf-labs.pages.dev/p/8b1cc58466ca/the-monster-maker/img/live-abobora.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Four quick ones.",
      "regra": "<b>has / has got</b> · <b>hasn't got</b> · <b>Has it got…?</b> · number, size, color, thing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It has two small yellow eyes.",
          "aceita": [],
          "d": "Dica: número + tamanho + cor + coisa: <b>two small yellow eyes</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It have four legs.",
          "r": "It has four legs.",
          "aceita": [
            "It has got four legs."
          ],
          "d": "Dica: it / he / she pede <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "It has two eyes yellow.",
          "r": "It has two yellow eyes.",
          "aceita": [
            "It has got two yellow eyes."
          ],
          "d": "Dica: a cor vem ANTES da coisa: <b>yellow eyes</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have it got a tail?",
          "r": "Has it got a tail?",
          "aceita": [
            "Does it have a tail?"
          ],
          "d": "Dica: com <b>it</b> a pergunta começa com <b>Has</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8b1cc58466ca/the-monster-maker/img/live-abobora.webp",
      "leg": "Two glowing pumpkins",
      "pede": "Look at the picture: two glowing pumpkins. Write 2 or 3 sentences about your own friendly monster. Use <b>has</b> or <b>has got</b>, and a color word.",
      "ph": "My monster has …",
      "ex": "My monster has a big round head. It has three small blue eyes. It hasn't got a tail."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Describe a pet or a toy you have.",
          "ph": "I have a … It has …",
          "ex": "I have a dog. It has short brown hair and a long tail."
        },
        {
          "q": "What does your best friend look like?",
          "ph": "He / She has …",
          "ex": "She has long black hair and brown eyes."
        }
      ]
    }
  }
};
