/* I HAVE A HEADACHE · LIÇÃO DE CASA 2.0 (lote 25, 23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: I have a + small problem (a headache, a cold) · I feel + how (tired) · my ... hurts · you should + plain verb: no to, no -s */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "i-have-a-headache",
  "titulo": "I Have a Headache",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/24d73e66291a/i-have-a-headache/img/remedios.webp",
  "alvo": "I have a + small problem (a headache, a cold) · I feel + how (tired) · my ... hurts · you should + plain verb: no to, no -s",
  "abrir": "How do you feel today?",
  "fecho": "<b>I have a</b> cold. <b>I feel</b> tired. <b>My</b> head <b>hurts</b>. <b>You should</b> + the plain verb: <i>you should drink water</i>.",
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
      "sub": "Mia and Leo talk about a bad morning. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/24d73e66291a/i-have-a-headache/img/remedios.webp",
      "leg": "A small cupboard at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi, Mia. I have a headache today."
        },
        {
          "quem": "mia",
          "t": "Oh no. Do you feel tired?"
        },
        {
          "quem": "leo",
          "t": "Yes, I feel very tired. I only sleep five hours at night."
        },
        {
          "quem": "mia",
          "t": "That's not good. You should sleep more, and you should drink water."
        },
        {
          "quem": "leo",
          "t": "I drink too much coffee. Now my stomach hurts too."
        },
        {
          "quem": "mia",
          "t": "Coffee is the problem! You should have tea and a snack."
        },
        {
          "quem": "leo",
          "t": "Good idea. I also have a cold. My nose is red."
        },
        {
          "quem": "mia",
          "t": "Then you should go to the pharmacy and ask for advice."
        },
        {
          "quem": "leo",
          "t": "Okay. Can you come with me?"
        },
        {
          "quem": "mia",
          "t": "Sure. We can buy some tea on the way!"
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo have today?",
          "op": [
            "A headache",
            "A sore throat",
            "A broken pen"
          ],
          "a": 0,
          "por": "Hi, Mia. I have a headache today."
        },
        {
          "q": "What should Leo have instead of coffee?",
          "op": [
            "Tea and a snack",
            "More coffee",
            "Nothing"
          ],
          "a": 0,
          "por": "You should have tea and a snack."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the story. Hear it, then say it.",
      "frases": [
        {
          "t": "I have a headache, so I drink some water.",
          "img": "https://wolf-labs.pages.dev/p/24d73e66291a/i-have-a-headache/img/cha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "My stomach hurts, but I feel better with tea.",
          "img": "https://wolf-labs.pages.dev/p/24d73e66291a/i-have-a-headache/img/cha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You should go to the pharmacy and ask for advice.",
          "img": "https://wolf-labs.pages.dev/p/24d73e66291a/i-have-a-headache/img/remedios.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Four quick ones.",
      "regra": "<b>I have a</b> + problem · <b>I feel</b> + how · <b>my … hurts</b> · <b>you should</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You should drink water and sleep more.",
          "aceita": [],
          "d": "Dica: <b>should</b> + verbo sem to e sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am with a headache.",
          "r": "I have a headache.",
          "aceita": [
            "I have a bad headache.",
            "I have a headache today."
          ],
          "d": "Dica: em inglês a gente TEM a dor: <b>I have a</b> headache."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She should to drink water.",
          "r": "She should drink water.",
          "aceita": [],
          "d": "Dica: depois de <b>should</b>, só o verbo: sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I feel tiring today.",
          "r": "I feel tired today.",
          "aceita": [
            "I feel very tired today."
          ],
          "d": "Dica: como você se sente: <b>tired</b>, com -ed."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/24d73e66291a/i-have-a-headache/img/cha.webp",
      "leg": "Tea and honey at night",
      "pede": "Look at the picture: tea and honey on a cold night. Write 2 or 3 sentences: what you have, how you feel, and one piece of advice. Use <b>I have a</b>, <b>I feel</b> or <b>you should</b>.",
      "ph": "I have a cold. I feel …",
      "ex": "I have a cold. I feel tired, and my head hurts. You should drink tea."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do when you have a headache?",
          "ph": "When I have a headache, I …",
          "ex": "When I have a headache, I drink water and I sleep."
        },
        {
          "q": "What should a tired friend do?",
          "ph": "He should …",
          "ex": "He should sleep early and drink water."
        }
      ]
    }
  }
};
