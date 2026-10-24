/* HEALTH ENGLISH · LET’S SORT THIS OUT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais (Mia e Leo).
   Alvo: I can see you're frustrated / sorry you've had to wait / Here's what I can do / in ten minutes
   B1+ (B1 na plataforma): nenhum português. Tom calmo, cenas administrativas, nada grave. live-conversa (balcão) e live-capa (sala de espera vazia), escuras. */
window.HW2 = {
  "id": "health-lets-sort-this-out",
  "titulo": "Let’s Sort This Out",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ff26763f810e/health-lets-sort-this-out/img/live-conversa.webp",
  "alvo": "calm a frustrated patient without saying calm down: name the feeling (I can see you're frustrated), sorry for the experience (I'm sorry you've had to wait so long), what I can do with a time (Here's what I can do: statement order; in ten minutes); never waited so much, Here's what can I do, after ten minutes",
  "abrir": "What makes you lose your patience at a reception desk?",
  "fecho": "Never <i>calm down</i>. Name it: <b>I can see you're frustrated.</b> Sorry for the experience: <b>I'm sorry you've had to wait so long.</b> An option and a time: <b>Here's what I can do</b> (not <i>what can I do</i>), <b>in ten minutes</b>. And together: <b>Let's sort this out.</b>",
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
      "sub": "Leo at the clinic reception, Mia helps. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/ff26763f810e/health-lets-sort-this-out/img/live-conversa.webp",
      "leg": "The reception desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Excuse me. This is the second time this month. My appointment was cancelled by text, and nobody called me."
        },
        {
          "quem": "mia",
          "t": "I can see you're really frustrated. Tell me what happened."
        },
        {
          "quem": "leo",
          "t": "I took a bus for forty minutes to get here, and now I hear the doctor isn't in today."
        },
        {
          "quem": "mia",
          "t": "I'm sorry you've had such a difficult morning. You're right, somebody should have called you."
        },
        {
          "quem": "leo",
          "t": "And there's another problem. You charged me twice for last month's visit."
        },
        {
          "quem": "mia",
          "t": "Let me look. Yes, I can see two payments here. I'm sorry about that."
        },
        {
          "quem": "leo",
          "t": "So what happens now?"
        },
        {
          "quem": "mia",
          "t": "Here's what I can do. I'll send the money back today, and you'll see it in three days."
        },
        {
          "quem": "leo",
          "t": "And my appointment?"
        },
        {
          "quem": "mia",
          "t": "Doctor Costa has a free time on Thursday at nine. I'll book it now and call you tomorrow to confirm."
        },
        {
          "quem": "leo",
          "t": "OK. Thank you. And sorry, I was a bit loud."
        },
        {
          "quem": "mia",
          "t": "No problem at all. Let's sort this out together."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Leo frustrated?",
          "op": [
            "His appointment was cancelled by text",
            "He lost his bus ticket",
            "The doctor was late"
          ],
          "a": 0,
          "por": "My appointment was cancelled by text, and nobody called me."
        },
        {
          "q": "What other problem does Leo have?",
          "op": [
            "The clinic charged him twice",
            "His name is wrong",
            "His card didn't work"
          ],
          "a": 0,
          "por": "You charged me twice for last month's visit."
        },
        {
          "q": "When is Leo's new appointment?",
          "op": [
            "Thursday at nine",
            "Tomorrow at nine",
            "Friday at three"
          ],
          "a": 0,
          "por": "Doctor Costa has a free time on Thursday at nine."
        }
      ]
    },
    "out": {
      "sub": "Three calm sentences at the desk. Hear it, then say it.",
      "frases": [
        {
          "t": "I can see you're really frustrated. Tell me what happened.",
          "img": "https://wolf-labs.pages.dev/p/ff26763f810e/health-lets-sort-this-out/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm sorry you've had to wait so long.",
          "img": "https://wolf-labs.pages.dev/p/ff26763f810e/health-lets-sort-this-out/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Here's what I can do. I'll call you back in fifteen minutes.",
          "img": "",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Name it, sorry, an option with a time. Four quick ones.",
      "regra": "<b>I can see you're</b> + feeling · <b>I'm sorry you've had to wait so long</b> · <b>Here's what I can do</b> · <b>in</b> ten minutes.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'm sorry you've had such a difficult morning.",
          "aceita": [],
          "d": "Hint: say sorry for the <b>experience</b>: <i>I'm sorry you've had…</i>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm sorry you've waited so much.",
          "r": "I'm sorry you've waited so long.",
          "aceita": [
            "I'm sorry you've had to wait so long."
          ],
          "d": "Hint: for time, use <b>so long</b>, not <i>so much</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Here's what can I do.",
          "r": "Here's what I can do.",
          "aceita": [],
          "d": "Hint: inside a sentence, no question order: <b>what I can do</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'll call you back after ten minutes.",
          "r": "I'll call you back in ten minutes.",
          "aceita": [],
          "d": "Hint: from now to the future, use <b>in</b>: <i>in ten minutes</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ff26763f810e/health-lets-sort-this-out/img/live-capa.webp",
      "leg": "An empty waiting room",
      "pede": "Look at the picture: an empty waiting room at the end of the day. A patient's appointment was cancelled and nobody called. Write 2 or 3 sentences: name the feeling, say sorry for the experience, and say what you can do, with a time.",
      "ph": "I can see you're … I'm sorry …",
      "ex": "I can see you're really frustrated. I'm sorry nobody called you. Here's what I can do: I'll book you a new time today."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When were you frustrated with a company or a clinic? What did they say?",
          "ph": "I was frustrated when … They said …",
          "ex": "I was frustrated when my internet stopped for a week. They said sorry and gave me a discount."
        },
        {
          "q": "A patient says: I've been waiting for an hour! What do you say?",
          "ph": "I can see … I'm sorry … Here's what I can do …",
          "ex": "I can see you're frustrated, and I'm sorry for the wait. I'll check the list and come back in five minutes."
        }
      ]
    }
  }
};
