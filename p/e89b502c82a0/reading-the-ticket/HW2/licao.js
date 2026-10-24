/* READING THE TICKET · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must / should / can + verbo limpo; What should happen if...?. A2: dicas em português só nas notas (d). Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "reading-the-ticket",
  "titulo": "Reading the Ticket",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e89b502c82a0/reading-the-ticket/img/live-capa.webp",
  "alvo": "the English of a ticket and questions to make it clear: Users must / The link should / Users can + plain verb (no -s, no to); What should happen if ...?; Does it need to ...?; explain something to me",
  "abrir": "Someone gives you a vague task. What do you ask?",
  "fecho": "<b>must / should / can</b> + plain verb: <i>The link must work. Users can try again.</i> No <b>-s</b>, no <b>to</b>. A clear question: <i>What should happen if the link expires?</i> <i>Does it need to work on phones?</i> And: <i>Can you explain the ticket <b>to me</b>?</i>",
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
      "sub": "Mia and Leo read a ticket together. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e89b502c82a0/reading-the-ticket/img/live-capa.webp",
      "leg": "Notes and a magnifying glass",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading ticket PACK-318. Users must reset their password."
        },
        {
          "quem": "leo",
          "t": "OK. What should happen if the link expires?"
        },
        {
          "quem": "mia",
          "t": "Good question. I don't know. The ticket says the link should expire after one hour."
        },
        {
          "quem": "leo",
          "t": "And the e-mail? When must the user receive it?"
        },
        {
          "quem": "mia",
          "t": "In one minute. It must work on phones, too."
        },
        {
          "quem": "leo",
          "t": "Does it need a new page?"
        },
        {
          "quem": "mia",
          "t": "No. It can use the standard design."
        },
        {
          "quem": "leo",
          "t": "Let's ask Lucía. She is the product manager."
        },
        {
          "quem": "mia",
          "t": "Good idea. I will write three questions."
        }
      ],
      "perguntas": [
        {
          "q": "What must users do?",
          "op": [
            "Reset their password",
            "Send an e-mail",
            "Open a new account"
          ],
          "a": 0,
          "por": "Users must reset their password."
        },
        {
          "q": "When does the link expire?",
          "op": [
            "After one hour",
            "After one minute",
            "After one day"
          ],
          "a": 0,
          "por": "The link should expire after one hour."
        },
        {
          "q": "Does the page need a new design?",
          "op": [
            "No, it can use the standard design",
            "Yes, a new one",
            "Yes, a dark one"
          ],
          "a": 0,
          "por": "No. It can use the standard design."
        }
      ]
    },
    "out": {
      "sub": "Three lines about a ticket. Hear it, then say it.",
      "frases": [
        {
          "t": "Users must receive an e-mail in one minute.",
          "img": "https://wolf-labs.pages.dev/p/e89b502c82a0/reading-the-ticket/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What should happen if the link expires?",
          "img": "https://wolf-labs.pages.dev/p/e89b502c82a0/reading-the-ticket/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Does it need to work on phones?",
          "img": "https://wolf-labs.pages.dev/p/e89b502c82a0/reading-the-ticket/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must, should, does it need. Four quick ones.",
      "regra": "<b>must / should / can</b> + plain verb · <b>What should happen if ...?</b> · <b>Does it need</b> ...? · explain <b>to me</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Does it need to work on phones?",
          "aceita": [],
          "d": "Dica: <b>does it need to</b> + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "What should to happen?",
          "r": "What should happen?",
          "aceita": [
            "What should happen if it fails?"
          ],
          "d": "Dica: depois de <b>should</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The link must works on phones.",
          "r": "The link must work on phones.",
          "aceita": [],
          "d": "Dica: depois de <b>must</b>, sem -s: must work."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Can you explain me the ticket?",
          "r": "Can you explain the ticket to me?",
          "aceita": [
            "Can you explain it to me?"
          ],
          "d": "Dica: explicar algo <b>to</b> alguém: explain the ticket <b>to me</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e89b502c82a0/reading-the-ticket/img/live-capa.webp",
      "leg": "A magnifying glass on a pile of notes",
      "pede": "Look at the picture: a magnifying glass on a pile of notes. Imagine a ticket: Users must reset their password. Write 2 or 3 questions to make it clear.",
      "ph": "What should happen if …?",
      "ex": "What should happen if the link expires? Does it need to work on phones? How long is the link valid?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a task you have. What is not clear? Ask one question.",
          "ph": "What should happen if …?",
          "ex": "What should happen if I forget my password?"
        },
        {
          "q": "What must a good app do? What should it never do?",
          "ph": "A good app must … It should never …",
          "ex": "A good app must work fast. It should never stop."
        }
      ]
    }
  }
};
