/* THE LONG ANSWER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: segurar a vez numa call (frases fixas). B1: nenhum português. */
window.HW2 = {
  "id": "the-long-answer",
  "titulo": "The Long Answer",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d82e5c14b7a6/the-long-answer/img/live-fone.webp",
  "alvo": "keeping your turn on a call: an open ending (There are three reasons. The first is ...), parking a question (Good question, I'll come to that later), holding the turn politely (If I could just finish), the bridge back (Coming back to ...), a deliberate close (That's everything from me)",
  "abrir": "When do people cut in on you? What do you do?",
  "fecho": "A long answer needs moves. Open it: <b>There are three reasons. The first is ...</b> Park a question: <b>Good question, I'll come to that later.</b> Keep your turn: <b>If I could just finish ...</b> Bridge back: <b>Coming back to ...</b> Close it on purpose: <b>That's everything from me.</b>",
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
      "sub": "Mia and Leo on a video call with a client. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d82e5c14b7a6/the-long-answer/img/live-bg-mesa-longa.webp",
      "leg": "A long meeting table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "There are three reasons the rollout is late. The first is the supplier, who sent the servers two weeks late."
        },
        {
          "quem": "mia",
          "t": "Leo, sorry, quick question. How much will this cost us?"
        },
        {
          "quem": "leo",
          "t": "Good question. I'll come to that in a minute. The second reason is the test, which failed twice."
        },
        {
          "quem": "mia",
          "t": "But the client is waiting for the price."
        },
        {
          "quem": "leo",
          "t": "If I could just finish, I'll cover the price in one minute. The third reason is the new date, the fourteenth of October."
        },
        {
          "quem": "mia",
          "t": "OK, go on."
        },
        {
          "quem": "leo",
          "t": "Coming back to the price: it is the same as last month, so nothing changes for you."
        },
        {
          "quem": "mia",
          "t": "Good. Is that everything?"
        },
        {
          "quem": "leo",
          "t": "Yes. That's everything from me."
        },
        {
          "quem": "mia",
          "t": "Thank you, Leo. That was very clear."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say when Mia asks about the cost?",
          "op": [
            "Good question, I'll come to that",
            "I don't know",
            "Let me start again"
          ],
          "a": 0,
          "por": "Good question. I'll come to that in a minute."
        },
        {
          "q": "How does Leo keep his turn the second time?",
          "op": [
            "If I could just finish",
            "Sorry, go ahead",
            "That's everything from me"
          ],
          "a": 0,
          "por": "If I could just finish, I'll cover the price in one minute."
        },
        {
          "q": "How does Leo end his answer?",
          "op": [
            "That's everything from me",
            "And that's it",
            "Let me start again"
          ],
          "a": 0,
          "por": "Yes. That's everything from me."
        }
      ]
    },
    "out": {
      "sub": "Three moves for a long answer. Hear it, then say it.",
      "frases": [
        {
          "t": "Good question, I'll come to that in a minute.",
          "img": "https://wolf-labs.pages.dev/p/d82e5c14b7a6/the-long-answer/img/live-fone.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I could just finish, I'll cover that next.",
          "img": "https://wolf-labs.pages.dev/p/d82e5c14b7a6/the-long-answer/img/live-bg-mesa-longa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Coming back to the price, it is the same as last month.",
          "img": "https://wolf-labs.pages.dev/p/d82e5c14b7a6/the-long-answer/img/live-fone.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Park it, hold it, bridge back. Four quick ones.",
      "regra": "<b>Good question, I'll come to that</b> · <b>If I could just finish</b> · <b>Coming back to ...</b> · <b>That's everything from me</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I could just finish my point first.",
          "aceita": [],
          "d": "Hint: <b>If I could just finish</b> keeps your turn politely."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Good question, I will answer that after.",
          "r": "Good question, I'll come to that later.",
          "aceita": [
            "Good question, I will come to that later.",
            "Good question, I'll come to that in a moment."
          ],
          "d": "Hint: to park a question, say <b>I'll come to that later</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Coming back for the budget, we agreed on March.",
          "r": "Coming back to the budget, we agreed on March.",
          "aceita": [],
          "d": "Hint: the bridge is <b>Coming back to</b>, with <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Let me to finish my point, please.",
          "r": "Let me finish my point, please.",
          "aceita": [
            "Please let me finish my point."
          ],
          "d": "Hint: after <b>let me</b>, the verb has no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d82e5c14b7a6/the-long-answer/img/live-bg-mesa-longa.webp",
      "leg": "A long, empty meeting table",
      "pede": "Look at the picture: a long meeting table under one lamp. Answer a real question from your work or school in parts. Open with <b>There are two reasons. The first is ...</b> and close with <b>That's everything from me.</b>",
      "ph": "There are two reasons. The first is …",
      "ex": "There are two reasons I was late. The first is the traffic. The second is my phone, which stopped. That's everything from me."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who cuts in on you when you talk? What can you say?",
          "ph": "If I could just finish, …",
          "ex": "My brother cuts in a lot, so I say, if I could just finish, I'll answer you."
        },
        {
          "q": "Give me two reasons to learn English. Start with: There are two reasons.",
          "ph": "There are two reasons. The first is …",
          "ex": "There are two reasons. The first is my job. The second is travel."
        }
      ]
    }
  }
};
