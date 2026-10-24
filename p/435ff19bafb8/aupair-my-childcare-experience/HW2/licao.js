/* MY CHILDCARE EXPERIENCE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Curso Au Pair (A2+). Alvo: past simple (histórias com crianças). A2: dicas em português só nas notas (d). Pessoa fictícia, nenhum dado real. */
window.HW2 = {
  "id": "aupair-my-childcare-experience",
  "titulo": "My Childcare Experience",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/435ff19bafb8/aupair-my-childcare-experience/img/live-conversa.webp",
  "alvo": "telling stories with children in the past simple: regular -ed, irregular verbs (took, made, read, sang, built), didn't + base verb, never took / readed / didn't wanted",
  "abrir": "What is a day with a child that you remember?",
  "fecho": "Past simple, one day: <b>-ed</b> (<i>we played</i>) or irregular (<i>took, made, sang, built</i>). No: <b>didn't</b> + plain verb: <i>He didn't want to sleep.</i> Never <i>readed</i> or <i>didn't wanted</i>.",
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
      "sub": "Mia and Leo, a short scene of about 40 seconds.",
      "leg": "A tent with lights in the playroom",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, tell me about a day with a child."
        },
        {
          "quem": "mia",
          "t": "Last summer I took care of my cousins for a week."
        },
        {
          "quem": "leo",
          "t": "What happened?"
        },
        {
          "quem": "mia",
          "t": "One day it rained all day, so we built a tent with chairs and a sheet."
        },
        {
          "quem": "leo",
          "t": "Nice! Did the little one sleep?"
        },
        {
          "quem": "mia",
          "t": "No, he didn't want to go to bed. So I sang a song and read two stories."
        },
        {
          "quem": "leo",
          "t": "How did it end?"
        },
        {
          "quem": "mia",
          "t": "In the end, he slept, and I was very proud."
        }
      ],
      "perguntas": [
        {
          "q": "What did they build?",
          "op": [
            "A tent with chairs and a sheet",
            "A house with blocks",
            "A boat"
          ],
          "a": 0,
          "por": "We built a tent with chairs and a sheet."
        },
        {
          "q": "What did Mia do when he didn't want to go to bed?",
          "op": [
            "She sang a song and read two stories",
            "She turned on the TV",
            "She called his mom"
          ],
          "a": 0,
          "por": "I sang a song and read two stories."
        },
        {
          "q": "How did the story end?",
          "op": [
            "He slept",
            "He cried",
            "They went to the park"
          ],
          "a": 0,
          "por": "In the end, he slept."
        }
      ],
      "img": "https://wolf-labs.pages.dev/p/435ff19bafb8/aupair-my-childcare-experience/img/live-conversa.webp"
    },
    "out": {
      "sub": "Three lines from a story. Hear it, then say it.",
      "frases": [
        {
          "t": "I took my cousins to the park.",
          "img": "https://wolf-labs.pages.dev/p/435ff19bafb8/aupair-my-childcare-experience/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We built a tent with chairs and a sheet.",
          "img": "https://wolf-labs.pages.dev/p/435ff19bafb8/aupair-my-childcare-experience/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I sang a song, and he fell asleep.",
          "img": "https://wolf-labs.pages.dev/p/435ff19bafb8/aupair-my-childcare-experience/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past simple stories. Four quick ones.",
      "regra": "regular <b>-ed</b> · irregular (<b>took, made, read, sang</b>) · <b>didn't</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We made a tent with blankets and lights.",
          "aceita": [],
          "d": "Dica: make no passado é <b>made</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Last summer I take care of my cousins.",
          "r": "Last summer I took care of my cousins.",
          "aceita": [],
          "d": "Dica: <b>last summer</b> pede passado: took."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He didn't wanted to sleep.",
          "r": "He didn't want to sleep.",
          "aceita": [],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica limpo: want."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I readed him a story.",
          "r": "I read him a story.",
          "aceita": [],
          "d": "Dica: read é irregular e fica <b>read</b> no passado."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a tent with lights in a playroom. Write 2 or 3 sentences about a day with a child, real or imagined. Use the past simple.",
      "ph": "Last year I … with …",
      "ex": "Last year I took my cousin to the park. We played with a ball, and then we ate ice cream.",
      "img": "https://wolf-labs.pages.dev/p/435ff19bafb8/aupair-my-childcare-experience/img/live-conversa.webp",
      "leg": "A tent with lights"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do the last time you were with a child?",
          "ph": "I … with …",
          "ex": "I played a board game with my little cousin, and I helped him with his homework."
        },
        {
          "q": "What did you teach a child?",
          "ph": "I taught …",
          "ex": "I taught my cousin to ride a bike."
        }
      ]
    }
  }
};
