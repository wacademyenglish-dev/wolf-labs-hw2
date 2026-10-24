/* SHE HAS A SON · LIÇÃO DE CASA 2.0 (lote 25, 23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: he / she HAS, I / you / we / they HAVE · family words (brother, sister, son, daughter) · 's for owners (Clara's dog) · plural -s (two brothers); never she have, never the brother of Mia */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "she-has-a-son",
  "titulo": "She Has a Son",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/de9b7ad5c43d/she-has-a-son/img/live-prox.jpg",
  "alvo": "he / she HAS, I / you / we / they HAVE · family words (brother, sister, son, daughter) · 's for owners (Clara's dog) · plural -s (two brothers); never she have, never the brother of Mia",
  "abrir": "Do you have brothers or sisters?",
  "fecho": "<b>She has</b> a son. <b>I have</b> a sister. <b>Clara's</b> dog = the dog of Clara. Two brother<b>s</b>: plural with -s.",
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
      "sub": "Mia shows Leo a family photo. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/de9b7ad5c43d/she-has-a-son/img/live-prox.jpg",
      "leg": "A quiet street in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at this photo. This is my family."
        },
        {
          "quem": "leo",
          "t": "Who is the man next to you?"
        },
        {
          "quem": "mia",
          "t": "That's my brother, Daniel. He has two sons."
        },
        {
          "quem": "leo",
          "t": "Nice! What are their names?"
        },
        {
          "quem": "mia",
          "t": "Daniel's sons are Tom and Max. Tom is six and Max is four."
        },
        {
          "quem": "leo",
          "t": "And who is the woman with the dog?"
        },
        {
          "quem": "mia",
          "t": "That's my sister, Clara. She has a daughter."
        },
        {
          "quem": "leo",
          "t": "Does Clara's daughter have a dog too?"
        },
        {
          "quem": "mia",
          "t": "Yes, she does! Clara's dog is very big."
        },
        {
          "quem": "leo",
          "t": "I have only one brother. I want a big family like yours!"
        }
      ],
      "perguntas": [
        {
          "q": "How many sons does Mia's brother have?",
          "op": [
            "Two",
            "One",
            "Four"
          ],
          "a": 0,
          "por": "He has two sons."
        },
        {
          "q": "Whose dog is very big?",
          "op": [
            "Clara's",
            "Daniel's",
            "Leo's"
          ],
          "a": 0,
          "por": "Clara's dog is very big."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "She has a son and a daughter.",
          "img": "https://wolf-labs.pages.dev/p/de9b7ad5c43d/she-has-a-son/img/live-prox.jpg",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Daniel's sons are Tom and Max.",
          "img": "https://wolf-labs.pages.dev/p/de9b7ad5c43d/she-has-a-son/img/live-prox.jpg",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I have two brothers and one sister.",
          "img": "https://wolf-labs.pages.dev/p/de9b7ad5c43d/she-has-a-son/img/live-prox.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Four quick ones.",
      "regra": "he / she <b>has</b> · I / you / we / they <b>have</b> · <b>Clara's</b> dog · two brother<b>s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Clara's daughter has a big dog.",
          "aceita": [],
          "d": "Dica: <b>Clara's</b> daughter = a filha da Clara; she + <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She have a son.",
          "r": "She has a son.",
          "aceita": [],
          "d": "Dica: he / she pede <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: say it with 's.",
          "mostra": "The brother of Mia is tall.",
          "r": "Mia's brother is tall.",
          "aceita": [],
          "d": "Dica: pessoa + <b>'s</b> + coisa: Mia's brother."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have two brother.",
          "r": "I have two brothers.",
          "aceita": [],
          "d": "Dica: dois ou mais: <b>-s</b> no fim."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/de9b7ad5c43d/she-has-a-son/img/live-prox.jpg",
      "leg": "A quiet street in the evening",
      "pede": "Look at the picture: a quiet street in the evening. Write 2 or 3 sentences about people in your family. Use <b>has</b>, <b>have</b> or <b>'s</b>.",
      "ph": "My sister has …",
      "ex": "My sister has a son. My brother's wife is a teacher. I have two cousins."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Do you have brothers or sisters? Tell me about one.",
          "ph": "I have … My … has …",
          "ex": "I have one sister. She has a small dog."
        },
        {
          "q": "Who in your family has a pet?",
          "ph": "My … has …",
          "ex": "My uncle has a big black dog."
        }
      ]
    }
  }
};
