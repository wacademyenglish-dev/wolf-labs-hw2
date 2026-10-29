/* WHAT’S INCLUDED? · SELLING SERVICES LESSON 28 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: it includes / it doesn’t include / Does it include…? + it and them after a verb; never “the price include”, “it don’t include”, “I’ll send to you”, “check they”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-whats-included",
  "titulo": "What’s Included?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "it includes / it doesn’t include / Does it include…? + it and them after a verb; never “the price include”, “it don’t include”, “I’ll send to you”, “check they”",
  "abrir": "A client asks: “What’s included in the price?” What do you say?",
  "fecho": "<b>It includes… · It doesn’t include… · Does it include…?</b> And the object: <i>I’ll send it. We check them.</i>",
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
      "sub": "Mia, a seller, answers a client’s questions about a proposal. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A one-page proposal on a desk at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I’m reading your proposal. Does the price include training?"
        },
        {
          "quem": "mia",
          "t": "Yes, it does. Three days for your team."
        },
        {
          "quem": "leo",
          "t": "And the tax reports?"
        },
        {
          "quem": "mia",
          "t": "They’re included. We prepare them and send them by day 10."
        },
        {
          "quem": "leo",
          "t": "What about travel to our stores?"
        },
        {
          "quem": "mia",
          "t": "Travel isn’t included. We charge it separately."
        },
        {
          "quem": "leo",
          "t": "OK. Can you send me the travel price?"
        },
        {
          "quem": "mia",
          "t": "Sure, I’ll send it tomorrow morning."
        },
        {
          "quem": "leo",
          "t": "Great. And the contract?"
        },
        {
          "quem": "mia",
          "t": "I’ll send it with the price."
        }
      ],
      "perguntas": [
        {
          "q": "Does the price include training?",
          "op": [
            "Yes, three days.",
            "No, it doesn’t.",
            "Yes, one day."
          ],
          "a": 0,
          "por": "Yes, it does. Three days for your team."
        },
        {
          "q": "When do they send the tax reports?",
          "op": [
            "By day 10",
            "By day 5",
            "Every Friday"
          ],
          "a": 0,
          "por": "We prepare them and send them by day 10."
        },
        {
          "q": "Is travel included?",
          "op": [
            "No. They charge it separately.",
            "Yes, it’s free.",
            "Only in the first month."
          ],
          "a": 0,
          "por": "Travel isn’t included. We charge it separately."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "The price includes training.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It doesn’t include travel.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I’ll send it to you today.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>It includes · It doesn’t include · Does it include…?</b> · after a verb: <i>it / them</i> (send it, check them).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The price doesn’t include travel.",
          "aceita": [],
          "d": "Dica: the price = it → <b>doesn’t include</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The price include training.",
          "r": "The price includes training.",
          "aceita": [],
          "d": "Dica: the price = it → include<b>s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I’ll send to you today.",
          "r": "I’ll send it to you today.",
          "aceita": [
            "I will send it to you today."
          ],
          "d": "Dica: em inglês o objeto aparece: send <b>it</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We check they every month.",
          "r": "We check them every month.",
          "aceita": [],
          "d": "Dica: depois do verbo: <b>them</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A one-page proposal on a desk at night",
      "pede": "A client asks: “What’s included?” Write 3 short sentences: one thing included, one thing not included, and the next step with it or them.",
      "ph": "It includes … It doesn’t include … I’ll send it …",
      "ex": "It includes the tax reports and training. It doesn’t include travel. I’ll send you the travel price today."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What does your salary include? Lunch? A car? A phone?",
          "ph": "It includes … It doesn’t include …",
          "ex": "It includes a phone and lunch. It doesn’t include a car."
        },
        {
          "q": "Do you read contracts before you sign them?",
          "ph": "Yes, I read them … / No, I …",
          "ex": "Yes, I always read them. Twice!"
        }
      ]
    }
  }
};
