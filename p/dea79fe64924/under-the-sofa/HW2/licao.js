/* UNDER THE SOFA · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unit 4: in/on/under/next to/behind/between, is/are. A1: dicas em português só nas notas (d). Só imagens live-* escuras. */
window.HW2 = {
  "id": "under-the-sofa",
  "titulo": "Under the Sofa",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/dea79fe64924/under-the-sofa/img/live-capa.webp",
  "alvo": "in / on / under / next to / behind / between + Where is ...? / Where are ...?; in = inside a room or box, on = a surface; next to (two words); is / are",
  "abrir": "Where is your phone right now?",
  "fecho": "<b>in</b> = inside (in the kitchen) · <b>on</b> = a surface (on the shelf) · <b>under</b> · <b>next to</b> · <b>behind</b> · <b>between</b>. One thing: <b>is</b>. Two or more: <b>are</b>.",
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
      "sub": "Mia looks for a lost cat. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/dea79fe64924/under-the-sofa/img/live-conversa.webp",
      "leg": "A plant and keys on a shelf",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I can't find Mochi. Where is the cat?"
        },
        {
          "quem": "leo",
          "t": "Is he in the kitchen?"
        },
        {
          "quem": "mia",
          "t": "No. His food is in the kitchen, under the sink, but Mochi is not there."
        },
        {
          "quem": "leo",
          "t": "Look in the living room. Is he on the sofa?"
        },
        {
          "quem": "mia",
          "t": "No, he is not on the sofa. Wait! I see a tail. He is under the sofa!"
        },
        {
          "quem": "leo",
          "t": "Is he next to a cushion?"
        },
        {
          "quem": "mia",
          "t": "Yes, he is next to a cushion. He is sleeping."
        },
        {
          "quem": "leo",
          "t": "And where are the keys?"
        },
        {
          "quem": "mia",
          "t": "On the shelf, next to the plant. Thank you, Mochi!"
        }
      ],
      "perguntas": [
        {
          "q": "Where is Mochi?",
          "op": [
            "Under the sofa",
            "On the sofa",
            "In the kitchen"
          ],
          "a": 0,
          "por": "He is under the sofa!"
        },
        {
          "q": "Where is Mochi's food?",
          "op": [
            "In the kitchen, under the sink",
            "On the shelf",
            "Behind the TV"
          ],
          "a": 0,
          "por": "His food is in the kitchen, under the sink."
        },
        {
          "q": "Where are the keys?",
          "op": [
            "On the shelf, next to the plant",
            "In the fruit bowl",
            "Under the sofa"
          ],
          "a": 0,
          "por": "On the shelf, next to the plant."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about where things are. Hear it, then say it.",
      "frases": [
        {
          "t": "The cat is under the sofa.",
          "img": "https://wolf-labs.pages.dev/p/dea79fe64924/under-the-sofa/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The keys are on the shelf, next to the plant.",
          "img": "https://wolf-labs.pages.dev/p/dea79fe64924/under-the-sofa/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My phone is in the bathroom, behind the door.",
          "img": "https://wolf-labs.pages.dev/p/dea79fe64924/under-the-sofa/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "in, on or next to? Four quick ones.",
      "regra": "<b>in</b> = inside · <b>on</b> = a surface · <b>next to</b> · <b>under</b> · <b>behind</b> · <b>between</b> · one thing <b>is</b>, two things <b>are</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The keys are next to the plant.",
          "aceita": [],
          "d": "Dica: duas palavras: <b>next to</b>. Chaves: <b>are</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The food is on the kitchen.",
          "r": "The food is in the kitchen.",
          "aceita": [],
          "d": "Dica: um cômodo é uma caixa: <b>in</b> the kitchen."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The cat is next the door.",
          "r": "The cat is next to the door.",
          "aceita": [],
          "d": "Dica: são duas palavras: <b>next to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The keys is on the shelf.",
          "r": "The keys are on the shelf.",
          "aceita": [],
          "d": "Dica: mais de uma coisa: <b>are</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/dea79fe64924/under-the-sofa/img/live-capa.webp",
      "leg": "A sofa in a dark room",
      "pede": "Look at the picture: a sofa in a dark living room. Write 2 or 3 sentences about where things are. Use <b>in, on, under, next to, behind</b> or <b>between</b>.",
      "ph": "The sofa is in the … The lamp is …",
      "ex": "The sofa is in the living room. A cushion is on the sofa. The lamp is next to the sofa."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where is your phone now?",
          "ph": "It is in / on …",
          "ex": "It is on the table, next to my coffee."
        },
        {
          "q": "What is next to your bed?",
          "ph": "Next to my bed there is …",
          "ex": "Next to my bed there is a lamp and a glass of water."
        }
      ]
    }
  }
};
