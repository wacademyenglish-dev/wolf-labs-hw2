/* DEAR HOST FAMILY · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Curso Au Pair (A2+). Alvo: and / because / so na carta. A2: dicas em português só nas notas (d). Pessoa fictícia, nenhum dado real. */
window.HW2 = {
  "id": "aupair-dear-host-family",
  "titulo": "Dear Host Family",
  "nivel": "A2",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "writing the letter to the host family: and adds, because gives a reason, so gives a result; a comma before so; never because of + subject",
  "abrir": "What is one special thing about you?",
  "fecho": "<b>and</b> adds · <b>because</b> + the reason · <b>so</b> + the result, with a comma: <i>My cousins are small, so I babysit them.</i> After <b>because</b>, a full idea: <i>because I am patient</i>, never <i>because of I am</i>.",
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
      "leg": "The kitchen table, ready to write",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, is your letter ready?"
        },
        {
          "quem": "mia",
          "t": "Almost. I wrote: Dear Host Family, I love children and I love outdoor games."
        },
        {
          "quem": "leo",
          "t": "Nice. Why do you want to come to the USA?"
        },
        {
          "quem": "mia",
          "t": "Because I want to learn English and know a new culture."
        },
        {
          "quem": "leo",
          "t": "What is special about you?"
        },
        {
          "quem": "mia",
          "t": "I can braid hair in ten ways, and I make a great chocolate cake."
        },
        {
          "quem": "leo",
          "t": "Do you have experience with kids?"
        },
        {
          "quem": "mia",
          "t": "Yes. My cousins are little, so I babysit them every weekend."
        },
        {
          "quem": "leo",
          "t": "Perfect. End with a warm line."
        },
        {
          "quem": "mia",
          "t": "I can't wait to meet you!"
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia want to come to the USA?",
          "op": [
            "To learn English and know a new culture",
            "To work in a school",
            "To meet Leo"
          ],
          "a": 0,
          "por": "Because I want to learn English and know a new culture."
        },
        {
          "q": "What is special about Mia?",
          "op": [
            "She can braid hair in ten ways",
            "She can drive a truck",
            "She can sing in four languages"
          ],
          "a": 0,
          "por": "I can braid hair in ten ways."
        },
        {
          "q": "Why does Mia babysit every weekend?",
          "op": [
            "Her cousins are little",
            "She needs money",
            "Leo asked her"
          ],
          "a": 0,
          "por": "My cousins are little, so I babysit them every weekend."
        }
      ],
      "img": "../img/live-conversa.webp"
    },
    "out": {
      "sub": "Three lines for your letter. Hear it, then say it.",
      "frases": [
        {
          "t": "I love children, and I love outdoor games.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I want to come because I want to learn English.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "My cousins are small, so I play with them every weekend.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "and, because or so? Four quick ones.",
      "regra": "<b>and</b> adds · <b>because</b> + the reason · <b>so</b> + the result (comma before) · never <b>because of</b> + subject.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I want to be an au pair because I love children.",
          "aceita": [],
          "d": "Dica: <b>because</b> + o motivo (I love children)."
        },
        {
          "tipo": "escreve",
          "t": "Join them with <em>so</em>.",
          "mostra": "It is raining. We play inside.",
          "r": "It is raining, so we play inside.",
          "aceita": [],
          "d": "Dica: vírgula + <b>so</b> + o resultado."
        },
        {
          "tipo": "escreve",
          "t": "Join them with <em>because</em>.",
          "mostra": "I love kids. I want to be an au pair.",
          "r": "I want to be an au pair because I love kids.",
          "aceita": [
            "Because I love kids, I want to be an au pair."
          ],
          "d": "Dica: <b>because</b> + o motivo, no fim."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I love kids because of I am patient.",
          "r": "I love kids because I am patient.",
          "aceita": [
            "I love kids because I'm patient."
          ],
          "d": "Dica: antes de uma frase inteira, só <b>because</b>, sem <b>of</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a kitchen table with pencils and a cup. Write 2 or 3 lines for your letter. Use <b>and</b>, <b>because</b> or <b>so</b>.",
      "ph": "Dear Host Family, I love …",
      "ex": "Dear Host Family, I love children and I make a great cake. I want to come because I want to learn English.",
      "img": "../img/live-conversa.webp",
      "leg": "The kitchen table"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Why do you want to be an au pair?",
          "ph": "I want to be an au pair because …",
          "ex": "I want to be an au pair because I love children and I want to travel."
        },
        {
          "q": "What is something special about you? What happens because of it?",
          "ph": "I can … so …",
          "ex": "I can bake cookies, so the kids love afternoons with me."
        }
      ]
    }
  }
};
