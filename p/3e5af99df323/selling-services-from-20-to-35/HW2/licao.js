/* FROM 20% TO 35% · SELLING SERVICES LESSON 22 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: numbers on a slide: increase / decrease / go up / go down + from … to … + by …; decimals with a point. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-from-20-to-35",
  "titulo": "From 20% to 35%",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "numbers on a slide: increase / decrease / go up / go down + from … to … + by …; decimals with a point",
  "abrir": "Your costs were 100 and now they are 80. How do you say it?",
  "fecho": "Three numbers, said slowly: <b>from … to …</b> (start → end) · <b>by …%</b> (the difference) · <b>1.5 = one point five</b>.",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia presents three numbers to a client. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A slide with three big numbers on a screen",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "This slide shows our results at Pike Hotels."
        },
        {
          "quem": "mia",
          "t": "Their closing time decreased from ten days to four days."
        },
        {
          "quem": "leo",
          "t": "In how many months?"
        },
        {
          "quem": "mia",
          "t": "In five months. And their invoice errors went down by 70%."
        },
        {
          "quem": "leo",
          "t": "Seventy percent? That’s a lot."
        },
        {
          "quem": "mia",
          "t": "Yes. And their costs went down by 12%."
        },
        {
          "quem": "leo",
          "t": "What about the team?"
        },
        {
          "quem": "mia",
          "t": "Their free time increased from 15% to 30%."
        },
        {
          "quem": "leo",
          "t": "Very good. Can I have this slide?"
        }
      ],
      "perguntas": [
        {
          "q": "What happened to the closing time?",
          "op": [
            "It decreased from ten days to four",
            "It increased from four days to ten",
            "It went down by 70%"
          ],
          "a": 0,
          "por": "Their closing time decreased from ten days to four days."
        },
        {
          "q": "By how much did the costs go down?",
          "op": [
            "By 12%",
            "By 70%",
            "By 30%"
          ],
          "a": 0,
          "por": "Their costs went down by 12%."
        },
        {
          "q": "What happened to the team’s free time?",
          "op": [
            "It went from 15% to 30%",
            "It went from 30% to 15%",
            "It went down by 15%"
          ],
          "a": 0,
          "por": "Their free time increased from 15% to 30%."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Our costs went down by 15%.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Errors decreased from 300 to 60 a month.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Free time increased from 20% to 35%.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>from … to …</b> (start → end) · <b>by …</b> (the difference) · 1.5 = <b>one point five</b> · numbers <b>grow by</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Our costs went down by 15%.",
          "aceita": [],
          "d": "Dica: a diferença vem com <b>by</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Sales increased in 20%.",
          "r": "Sales increased by 20%.",
          "aceita": [
            "Sales went up by 20%."
          ],
          "d": "Dica: a diferença: <b>by</b> 20%."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It went from 20% for 35%.",
          "r": "It went from 20% to 35%.",
          "aceita": [
            "It went up from 20% to 35%.",
            "It increased from 20% to 35%."
          ],
          "d": "Dica: início e fim: <b>from … to …</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Our revenue is two millions.",
          "r": "Our revenue is two million.",
          "aceita": [
            "Our revenue is 2 million."
          ],
          "d": "Dica: com número antes, <b>million</b> não leva s: two million."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A slide with three big numbers on a screen",
      "pede": "Write three results from your company or a client: one up, one down, one with from… to….",
      "ph": "… went down by …% · … increased from … to …",
      "ex": "Our clients’ errors went down by 60%. Closing time decreased from 10 days to 6 days. New clients increased from 8 to 12 this year."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What number would you like to change in your job?",
          "ph": "I’d like to increase / decrease …",
          "ex": "I’d like to increase my new clients from 5 to 8 a month."
        },
        {
          "q": "Did your company grow this year?",
          "ph": "Yes, it grew by … · No, it didn’t.",
          "ex": "Yes, it grew by about 10%."
        }
      ]
    }
  }
};
