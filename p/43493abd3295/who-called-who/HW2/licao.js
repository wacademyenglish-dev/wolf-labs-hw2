/* WHO CALLED WHO · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: perguntas Who/What de sujeito (sem did) x de objeto (did + verbo limpo). A2: dicas em português só nas notas (d). Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "who-called-who",
  "titulo": "Who Called Who",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/43493abd3295/who-called-who/img/live-mesa.webp",
  "alvo": "questions with Who and What: the doer needs no did (Who called Caio? What happened?); the other one needs did + the plain verb (Who did Marina call? What did you eat?); never both: no Who did call, no did ... called",
  "abrir": "Think of your last dinner with friends. Who paid?",
  "fecho": "<b>Who</b> is the doer: the sentence is already the question, no <b>did</b>: <i>Who called Caio? What happened?</i> <b>Who</b> is the other one: <b>did</b> comes in and the verb stays plain: <i>Who did Marina call? What did you eat?</i> Never both: no <i>Who did call</i>, no <i>did … called</i>.",
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
      "sub": "Mia and Leo plan a party. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/43493abd3295/who-called-who/img/live-tela.webp",
      "leg": "A phone with a group chat",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, who called you last night? Your phone rang three times."
        },
        {
          "quem": "mia",
          "t": "Ana called me. She wants to come to the party on Saturday."
        },
        {
          "quem": "leo",
          "t": "Good. Who did you invite?"
        },
        {
          "quem": "mia",
          "t": "I invited Ana, Beto and Carla. And who did you invite?"
        },
        {
          "quem": "leo",
          "t": "I invited my brother. Who paid for the cake?"
        },
        {
          "quem": "mia",
          "t": "Beto paid for it. He is a good friend."
        },
        {
          "quem": "leo",
          "t": "Oh no. What happened to the cake? It has a big hole."
        },
        {
          "quem": "mia",
          "t": "The dog happened! He ate a big piece."
        },
        {
          "quem": "leo",
          "t": "What did he eat before that?"
        },
        {
          "quem": "mia",
          "t": "Carla's sandwich. Poor Carla!"
        }
      ],
      "perguntas": [
        {
          "q": "Who called Mia last night?",
          "op": [
            "Ana",
            "Beto",
            "Carla"
          ],
          "a": 0,
          "por": "Ana called me."
        },
        {
          "q": "Who did Mia invite?",
          "op": [
            "Ana, Beto and Carla",
            "Only Leo's brother",
            "Nobody"
          ],
          "a": 0,
          "por": "I invited Ana, Beto and Carla."
        },
        {
          "q": "What happened to the cake?",
          "op": [
            "The dog ate a piece",
            "Beto dropped it",
            "Mia forgot it"
          ],
          "a": 0,
          "por": "The dog happened! He ate a big piece."
        }
      ]
    },
    "out": {
      "sub": "Three questions about a dinner with friends. Hear it, then say it.",
      "frases": [
        {
          "t": "Who paid for the dinner on Friday?",
          "img": "https://wolf-labs.pages.dev/p/43493abd3295/who-called-who/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Who did you sit next to at the table?",
          "img": "https://wolf-labs.pages.dev/p/43493abd3295/who-called-who/img/live-tela.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What happened after the dinner?",
          "img": "https://wolf-labs.pages.dev/p/43493abd3295/who-called-who/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Who called? Who did you call? Four quick ones.",
      "regra": "the doer: <b>Who called</b> Caio? · the other one: <b>Who did</b> Marina <b>call</b>? · never both · <b>What happened</b>?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Who did you call on Monday?",
          "aceita": [],
          "d": "Dica: <b>Who</b> é a outra pessoa: <b>did</b> + you + verbo limpo (call)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Who did call you last night?",
          "r": "Who called you last night?",
          "aceita": [],
          "d": "Dica: <b>Who</b> é quem faz: sem <b>did</b>. A frase já é a pergunta."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Who did Iuri texted at midnight?",
          "r": "Who did Iuri text at midnight?",
          "aceita": [],
          "d": "Dica: com <b>did</b>, o verbo fica limpo: text, não texted."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What did happen on Friday?",
          "r": "What happened on Friday?",
          "aceita": [],
          "d": "Dica: <b>What</b> é quem faz: sem <b>did</b>. Use <b>happened</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/43493abd3295/who-called-who/img/live-mesa.webp",
      "leg": "A table after dinner",
      "pede": "Look at the picture: a table after a dinner with friends. Write 2 or 3 questions about that night. Ask about the doer (<b>Who paid …?</b>), the other person (<b>Who did you …?</b>) or use <b>What</b>.",
      "ph": "Who paid …? Who did you …?",
      "ex": "Who paid for the dinner? Who did you sit next to? What happened after dinner?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of the last time you went out with friends. Who chose the place? Who did you talk to the most?",
          "ph": "… chose the place. I talked to …",
          "ex": "My friend Ana chose the place. I talked to my cousin the most."
        },
        {
          "q": "Who called you last? And who did you call?",
          "ph": "… called me. I called …",
          "ex": "My mother called me last. I called my sister."
        }
      ]
    }
  }
};
