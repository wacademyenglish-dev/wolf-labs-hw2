/* THE INSURANCE CALL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: first conditional (if + present, will). B1: nenhum portugues. So live-capa (as outras passam de 50). Pedido de celular, nada de saude. */
window.HW2 = {
  "id": "the-insurance-call",
  "titulo": "The Insurance Call",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f218e107fecd/the-insurance-call/img/live-capa.webp",
  "alvo": "first conditional to agree on next steps: If you send the form, we will start today; If you don't have the receipt, what will happen?; We won't pay unless ...; never 'If you will send', 'we don't pay' for the future or 'when I will arrive'",
  "abrir": "What will you do this weekend if the weather is bad?",
  "fecho": "<b>If + present simple, will + verb</b>: <i>If you send the form, we'll start today.</i> Never <b>will</b> after <b>if</b> or <b>when</b>: not <i>If you will send</i>, not <i>when I will arrive</i>. For a no: <i>If you don't send it, we <u>won't</u> pay.</i>",
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
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia calls her travel insurance about a phone that fell into the sea. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f218e107fecd/the-insurance-call/img/live-capa.webp",
      "leg": "Sydney by night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "WolfCover, Tom speaking. How can I help?"
        },
        {
          "quem": "mia",
          "t": "Hi, Tom. My phone fell into the sea at Bondi, and I'd like to make a claim."
        },
        {
          "quem": "leo",
          "t": "I'm sorry to hear that. If you send me the claim form, we'll start today."
        },
        {
          "quem": "mia",
          "t": "OK. What else do I need? If I don't have the receipt, what will happen?"
        },
        {
          "quem": "leo",
          "t": "If you don't have it, send your bank statement. We won't pay unless we see the price."
        },
        {
          "quem": "mia",
          "t": "I have a photo of the broken phone. Will that help?"
        },
        {
          "quem": "leo",
          "t": "Yes. If you send the photo too, we'll know it's damaged."
        },
        {
          "quem": "mia",
          "t": "How long will it take?"
        },
        {
          "quem": "leo",
          "t": "If everything is correct, we'll pay in ten days. If something is missing, we'll call you."
        },
        {
          "quem": "mia",
          "t": "Great. I'll send everything tonight."
        }
      ],
      "perguntas": [
        {
          "q": "What happened to Mia's phone?",
          "op": [
            "It fell into the sea",
            "It was stolen",
            "It was lost at the airport"
          ],
          "a": 0,
          "por": "My phone fell into the sea at Bondi."
        },
        {
          "q": "What can Mia send if she doesn't have the receipt?",
          "op": [
            "A bank statement",
            "A police report",
            "A new phone"
          ],
          "a": 0,
          "por": "If you don't have it, send your bank statement."
        },
        {
          "q": "When will they pay if everything is correct?",
          "op": [
            "In ten days",
            "Tomorrow",
            "In a month"
          ],
          "a": 0,
          "por": "If everything is correct, we'll pay in ten days."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about next steps. Hear it, then say it.",
      "frases": [
        {
          "t": "If you send the claim form, we will start today.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I don't have the receipt, what will happen?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If everything is correct, we will pay in ten days.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + present, will + verb. Four quick ones.",
      "regra": "<b>If + present simple, will + verb</b> · no <i>will</i> after <b>if</b> or <b>when</b> · <b>won't</b> for a no.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If you send the receipt, we will pay.",
          "aceita": [],
          "d": "Hint: <b>If</b> + present simple, then <b>we will</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If you will send the form, we will start.",
          "r": "If you send the form, we will start.",
          "aceita": [
            "If you send the form, we'll start."
          ],
          "d": "Hint: no <b>will</b> right after <b>if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If you don't send it, we don't pay.",
          "r": "If you don't send it, we won't pay.",
          "aceita": [],
          "d": "Hint: the result is in the future, so <b>won't</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I will send it when I will arrive home.",
          "r": "I will send it when I arrive home.",
          "aceita": [
            "I'll send it when I arrive home.",
            "I will send it when I get home."
          ],
          "d": "Hint: no <b>will</b> after <b>when</b> either."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Imagine your phone or your suitcase is damaged on a trip, and you have travel insurance. Write 2 or 3 sentences to the company: what you will send, and what you hope will happen. Use <b>If … will</b>.",
      "ph": "If I send …, will you …?",
      "ex": "If I send the photos tonight, will you start the claim tomorrow? If the receipt is missing, I will send my bank statement."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "If you lose your phone on a trip, what will you do first?",
          "ph": "If I lose my phone, I will …",
          "ex": "If I lose my phone, I will call my bank first, and then I will go to the police."
        },
        {
          "q": "What will you do this weekend if the weather is bad?",
          "ph": "If it rains, I will …",
          "ex": "If it rains, I will stay at home and watch a series."
        }
      ]
    }
  }
};
