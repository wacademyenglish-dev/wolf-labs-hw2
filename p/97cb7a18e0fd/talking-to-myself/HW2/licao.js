/* TALKING TO MYSELF · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: questions with a question word + do/does. Linha de música: NENHUM verso aqui; o listening é diálogo original. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "talking-to-myself",
  "titulo": "Talking to Myself",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/97cb7a18e0fd/talking-to-myself/img/live-telefone.webp",
  "alvo": "questions with a question word + do/does (Where do you live? What does she want?) and with be (Why are you late?): helper before the person, plain verb, never -s after does",
  "abrir": "Who do you talk to every day?",
  "fecho": "A question needs a helper: <b>do / does</b> + person + plain verb: <i>Where do you live? What does she want?</i> With <b>be</b>, the order changes: <i>Why are you late?</i> After <b>does</b>, the verb never takes -s.",
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
      "sub": "Mia has a new job. She talks with Leo on the phone. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/97cb7a18e0fd/talking-to-myself/img/live-telefone.webp",
      "leg": "A phone on a table at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have a new job!"
        },
        {
          "quem": "leo",
          "t": "Great! Where do you work now?"
        },
        {
          "quem": "mia",
          "t": "In a small shop near my house."
        },
        {
          "quem": "leo",
          "t": "What do you do there?"
        },
        {
          "quem": "mia",
          "t": "I sell phones. I talk to people all day."
        },
        {
          "quem": "leo",
          "t": "When does the shop open?"
        },
        {
          "quem": "mia",
          "t": "It opens at nine. Why do you ask?"
        },
        {
          "quem": "leo",
          "t": "Because I want a new phone!"
        },
        {
          "quem": "mia",
          "t": "Then come tomorrow. What time do you want to come?"
        },
        {
          "quem": "leo",
          "t": "At ten. See you!"
        }
      ],
      "perguntas": [
        {
          "q": "Where does Mia work?",
          "op": [
            "In a small shop",
            "At a school",
            "At home"
          ],
          "a": 0,
          "por": "In a small shop near my house."
        },
        {
          "q": "What does Mia sell?",
          "op": [
            "Phones",
            "Books",
            "Food"
          ],
          "a": 0,
          "por": "I sell phones."
        },
        {
          "q": "When does the shop open?",
          "op": [
            "At nine",
            "At ten",
            "At six"
          ],
          "a": 0,
          "por": "It opens at nine."
        }
      ]
    },
    "out": {
      "sub": "Three questions. Hear it, then say it.",
      "frases": [
        {
          "t": "Where do you live, and what do you do?",
          "img": "https://wolf-labs.pages.dev/p/97cb7a18e0fd/talking-to-myself/img/live-telefone.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "When does the shop open, and who works there?",
          "img": "https://wolf-labs.pages.dev/p/97cb7a18e0fd/talking-to-myself/img/live-garagem.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What does your sister do on Sundays?",
          "img": "https://wolf-labs.pages.dev/p/97cb7a18e0fd/talking-to-myself/img/live-banco.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where, what, when, who or why? Four quick ones.",
      "regra": "<b>question word</b> + <b>do / does</b> + person + plain verb · with <b>be</b>: <b>Why are you late?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Where does your brother work",
          "aceita": [],
          "d": "Dica: palavra de pergunta + <b>does</b> + pessoa + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Where you live?",
          "r": "Where do you live?",
          "aceita": [
            "Where do you live"
          ],
          "d": "Dica: falta o ajudante <b>do</b> depois de <b>Where</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What does he wants?",
          "r": "What does he want?",
          "aceita": [
            "What does he want"
          ],
          "d": "Dica: depois de <b>does</b>, o verbo não leva -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "Why you are late?",
          "r": "Why are you late?",
          "aceita": [
            "Why are you late"
          ],
          "d": "Dica: com <b>be</b>, o <b>are</b> vai antes da pessoa."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/97cb7a18e0fd/talking-to-myself/img/live-telefone.webp",
      "leg": "A phone on a table at night",
      "pede": "Look at the picture: a phone on a table. Imagine you can text a new friend. Write 3 questions for him or her. Use <b>where</b>, <b>what</b>, <b>when</b>, <b>who</b> or <b>why</b>.",
      "ph": "Where do you …? What does …?",
      "ex": "Where do you live? What do you do on Sundays? Who does your brother call?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you talk to every day? What do you talk about?",
          "ph": "I talk to … We talk about …",
          "ex": "I talk to my sister every day. We talk about music."
        },
        {
          "q": "Where do you like to go on Sundays? Why?",
          "ph": "On Sundays I go to … because …",
          "ex": "On Sundays I go to the park because it is quiet."
        }
      ]
    }
  }
};
