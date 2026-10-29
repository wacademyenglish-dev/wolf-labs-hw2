/* IT’S TOO EXPENSIVE · SELLING SERVICES LESSON 19 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: answering objections with but / because / so; too expensive. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-too-expensive",
  "titulo": "It’s Too Expensive",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "answering objections with but / because / so; too expensive",
  "abrir": "A client says: “It’s too expensive.” What is your first sentence?",
  "fecho": "No “sorry” for the price: <b>I understand, but…</b> · <b>… because …</b> · <b>…, so …</b>",
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
      "sub": "A client has two objections. Mia answers. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A proposal and a calculator on a meeting table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the proposal is good, but it’s too expensive."
        },
        {
          "quem": "mia",
          "t": "I understand, but it includes the Oracle integration."
        },
        {
          "quem": "leo",
          "t": "Hmm. Another company is 20% cheaper."
        },
        {
          "quem": "mia",
          "t": "Is the integration in their price?"
        },
        {
          "quem": "leo",
          "t": "No, it isn’t."
        },
        {
          "quem": "mia",
          "t": "So their real price is higher."
        },
        {
          "quem": "leo",
          "t": "OK. But we don’t have time for training."
        },
        {
          "quem": "mia",
          "t": "That’s no problem, because the training is online, so your team can do it at home."
        },
        {
          "quem": "leo",
          "t": "Good. Can you send me a new proposal?"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia’s price include?",
          "op": [
            "The Oracle integration",
            "A free month",
            "A new team"
          ],
          "a": 0,
          "por": "It includes the Oracle integration."
        },
        {
          "q": "Why is the other company not really cheaper?",
          "op": [
            "Their price doesn’t include the integration",
            "They are slow",
            "They don’t have training"
          ],
          "a": 0,
          "por": "Is the integration in their price? No, it isn’t."
        },
        {
          "q": "Why is time not a problem for the training?",
          "op": [
            "It’s online, so the team can do it at home",
            "It’s very short",
            "It’s free"
          ],
          "a": 0,
          "por": "The training is online, so your team can do it at home."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "I understand, but the price includes training.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It’s a good price because our team does the work.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It’s automatic, so you save time.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "<b>but</b> (another side) · <b>because</b> (the reason) · <b>so</b> (the result) · <b>too expensive</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I understand, but it includes training.",
          "aceita": [],
          "d": "Dica: comece calmo: <b>I understand, but…</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It’s too much expensive.",
          "r": "It’s too expensive.",
          "aceita": [
            "It is too expensive."
          ],
          "d": "Dica: <b>too</b> + adjetivo, sem “much”."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It’s automatic, then you save time.",
          "r": "It’s automatic, so you save time.",
          "aceita": [
            "It is automatic, so you save time."
          ],
          "d": "Dica: “então” (resultado) = <b>so</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I understand, but is a good price.",
          "r": "I understand, but it’s a good price.",
          "aceita": [
            "I understand, but it is a good price."
          ],
          "d": "Dica: a frase precisa de sujeito: <b>it’s</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A notebook with three objections written on it",
      "pede": "A client says “It’s too expensive.” Write your answer with but, because and so.",
      "ph": "I understand, but … because … so …",
      "ex": "I understand, but the price includes training because your team is new to SAP, so there are no surprises."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is the most common objection from your clients?",
          "ph": "They say … because …",
          "ex": "They say it’s too expensive because they compare us with small companies."
        },
        {
          "q": "Do you give discounts? Why or why not?",
          "ph": "Yes, I do, because … · No, I don’t, because …",
          "ex": "No, I don’t, because our price is already good."
        }
      ]
    }
  }
};
