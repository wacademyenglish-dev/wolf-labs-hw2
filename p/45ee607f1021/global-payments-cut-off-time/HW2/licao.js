/* CUT-OFF TIME · GLOBAL PAYMENTS ENGLISH LESSON 7 · LIÇÃO DE CASA 2.0 (03/11/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: telling the time + at / before / after + today / tomorrow. A1 com cara de A0: português só nas dicas (d). Bancos e empresas fictícios. */
window.HW2 = {
  "id": "global-payments-cut-off-time",
  "titulo": "Cut-off Time",
  "nivel": "A1",
  "minutos": 12,
  "capa": "../img/live-capa.webp",
  "alvo": "telling the time + at / before / after + today / tomorrow",
  "abrir": "It’s 4:30 p.m. A client wants a dollar payment today. What do you say?",
  "fecho": "The time: <b>It’s three forty</b>. Cut-off <b>at</b> four p.m. <b>Before</b> it: today. <b>After</b> it: tomorrow.",
  "elenco": {
    "tom": {
      "nome": "Tom",
      "voz": "en-US-BrianNeural",
      "cor": "#86c9f0"
    },
    "ana": {
      "nome": "Ana",
      "voz": "en-US-AvaNeural",
      "cor": "#b9a6e8"
    }
  },
  "rate": "-15%",
  "rodadas": {
    "listen": {
      "sub": "Tom calls late in the day. About 30 seconds.",
      "img": "../img/live-conversa.webp",
      "leg": "A wall clock at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "tom",
          "t": "Hi Ana. Can you send the pound payment today?"
        },
        {
          "quem": "ana",
          "t": "What time is it? Oh, it’s two o’clock."
        },
        {
          "quem": "ana",
          "t": "Sorry, Tom. The cut-off for pounds is at one thirty. It’s after the cut-off."
        },
        {
          "quem": "tom",
          "t": "OK. When can you send it?"
        },
        {
          "quem": "ana",
          "t": "Tomorrow morning, before ten."
        }
      ],
      "perguntas": [
        {
          "q": "What time is the cut-off for pounds?",
          "op": [
            "At one thirty p.m.",
            "At four p.m.",
            "At noon"
          ],
          "a": 0,
          "por": "The cut-off for pounds is at one thirty."
        },
        {
          "q": "What time is it?",
          "op": [
            "Two o’clock",
            "One o’clock",
            "Ten o’clock"
          ],
          "a": 0,
          "por": "Oh, it’s two o’clock."
        },
        {
          "q": "When can Ana send it?",
          "op": [
            "Tomorrow morning",
            "Today",
            "On Monday"
          ],
          "a": 0,
          "por": "Tomorrow morning, before ten."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it three times.",
      "frases": [
        {
          "t": "What time is the cut-off for euros?",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The cut-off is at four p.m.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I can’t send it today. It’s after the cut-off.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "The time: <b>It’s</b> three forty · <b>at</b> four p.m. · <b>before / after</b> the cut-off (no “of”).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What time is the cut-off for euros?",
          "aceita": [],
          "d": "Dica: What time + is + the cut-off …?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Are four hours.",
          "r": "It’s four o’clock.",
          "aceita": [
            "It is four o’clock.",
            "It’s four."
          ],
          "d": "Dica: a hora começa com <b>It’s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The cut-off is in four p.m.",
          "r": "The cut-off is at four p.m.",
          "aceita": [],
          "d": "Dica: hora com <b>at</b>, não “in”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It’s after of the cut-off.",
          "r": "It’s after the cut-off.",
          "aceita": [],
          "d": "Dica: after sem “of”."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A wristwatch on a dark desk",
      "pede": "Write two sentences: one payment goes today, one goes tomorrow, and why.",
      "ph": "I can send … today, before … I can’t send … It’s after …",
      "ex": "I can send the dollar payment today, before four p.m. I can’t send the euro payment: it’s after the cut-off."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you finish work?",
          "ph": "I finish at …",
          "ex": "I finish at six p.m."
        },
        {
          "q": "What time is the busiest time of your day?",
          "ph": "It’s at … / before …",
          "ex": "It’s before the cut-off, at three p.m."
        }
      ]
    }
  }
};
