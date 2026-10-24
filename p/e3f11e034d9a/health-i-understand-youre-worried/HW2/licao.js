/* HEALTH ENGLISH · I UNDERSTAND YOU’RE WORRIED · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais (Mia e Leo).
   Alvo: I can see / understandable / Thank you for + -ing / as soon as + presente
   B1+ (B1 na plataforma): nenhum português. Tom calmo, cenas administrativas, nada grave. Só live-conversa (janela com chuva, escura). */
window.HW2 = {
  "id": "health-i-understand-youre-worried",
  "titulo": "I Understand You’re Worried",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e3f11e034d9a/health-i-understand-youre-worried/img/live-conversa.webp",
  "alvo": "name the feeling and validate it (I can see you're worried. That's completely understandable.), thank (Thank you for telling me: for + -ing), then a concrete action with a time (I'll let you know as soon as the doctor is free: present after as soon as); never thank you for tell me, as soon as ... will be, is normal without it",
  "abrir": "What do you say to a friend who is worried?",
  "fecho": "Name it: <b>I can see you're worried.</b> Validate it: <b>That's completely understandable.</b> Thank them: <b>Thank you for telling me</b> (for + -ing). Then a concrete action and a time: <b>I'll let you know as soon as the doctor is free</b> (present after <i>as soon as</i>).",
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
      "sub": "Mia, a nurse, and Leo in the waiting room. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e3f11e034d9a/health-i-understand-youre-worried/img/live-conversa.webp",
      "leg": "Rain on the waiting-room window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo? Hi, I'm Mia, the nurse today. You look a bit worried."
        },
        {
          "quem": "leo",
          "t": "I am. I've been here for fifty minutes, and I have to be at work at twelve."
        },
        {
          "quem": "mia",
          "t": "I can see you're worried, and that's completely understandable. Fifty minutes is a long time."
        },
        {
          "quem": "leo",
          "t": "Is something wrong? Why is it so slow today?"
        },
        {
          "quem": "mia",
          "t": "Nothing is wrong. One of our doctors is on holiday this week, so we're a little slow."
        },
        {
          "quem": "leo",
          "t": "OK. And there's one more thing. My new allergy tablets make me really sleepy."
        },
        {
          "quem": "mia",
          "t": "Thank you for telling me. That's really helpful to know. It's a common side effect, and the doctor can change the time you take them."
        },
        {
          "quem": "leo",
          "t": "Oh, good. I was a bit worried about it."
        },
        {
          "quem": "mia",
          "t": "That's normal. Here's what I'll do. I'll let you know as soon as the doctor is free. It should be about ten minutes."
        },
        {
          "quem": "leo",
          "t": "Thanks. That helps a lot."
        },
        {
          "quem": "mia",
          "t": "You're welcome. And if you need to leave before twelve, just tell me, and we'll find you another time."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Leo worried about the time?",
          "op": [
            "He has to be at work at twelve",
            "He has a train at twelve",
            "He has a class at twelve"
          ],
          "a": 0,
          "por": "I have to be at work at twelve."
        },
        {
          "q": "What does Leo tell Mia about his new tablets?",
          "op": [
            "They make him sleepy",
            "They are too expensive",
            "He forgot them at home"
          ],
          "a": 0,
          "por": "My new allergy tablets make me really sleepy."
        },
        {
          "q": "What will Mia do?",
          "op": [
            "Tell Leo as soon as the doctor is free",
            "Send Leo home",
            "Call Leo's boss"
          ],
          "a": 0,
          "por": "I'll let you know as soon as the doctor is free."
        }
      ]
    },
    "out": {
      "sub": "Three kind sentences for a worried patient. Hear it, then say it.",
      "frases": [
        {
          "t": "I can see you're worried, and that's completely understandable.",
          "img": "https://wolf-labs.pages.dev/p/e3f11e034d9a/health-i-understand-youre-worried/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Thank you for telling me. That's really helpful to know.",
          "img": "",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'll let you know as soon as the doctor is free.",
          "img": "",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Name it, thank them, give a time. Four quick ones.",
      "regra": "<b>I can see you're</b> + feeling · <b>Thank you for</b> + -ing · <b>as soon as</b> + present (no <i>will</i>) · <b>it's</b> normal, never <i>is normal</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'm sorry you've had such a long wait.",
          "aceita": [],
          "d": "Hint: <b>I'm sorry</b> + a sentence about their experience."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Thank you for tell me.",
          "r": "Thank you for telling me.",
          "aceita": [],
          "d": "Hint: after <b>for</b>, use -ing: <i>telling</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'll call you as soon as the doctor will be free.",
          "r": "I'll call you as soon as the doctor is free.",
          "aceita": [],
          "d": "Hint: after <b>as soon as</b>, use the present: <i>is free</i>, not <i>will be free</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Don't worry, is very common.",
          "r": "Don't worry, it's very common.",
          "aceita": [],
          "d": "Hint: English needs a subject: <b>it's</b> very common."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e3f11e034d9a/health-i-understand-youre-worried/img/live-conversa.webp",
      "leg": "Rain on the waiting-room window",
      "pede": "Look at the picture: rain on the window of a waiting room. A patient has waited forty minutes and is worried about the time. Write 2 or 3 sentences: name the feeling, say it's understandable, and give a concrete action with a time.",
      "ph": "I can see you're …",
      "ex": "I can see you're worried, and that's completely understandable. I'm sorry for the wait. I'll let you know as soon as the doctor is free."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When were you worried while you waited for something? What did someone say that helped?",
          "ph": "I was worried when … Someone said …",
          "ex": "I was worried when my flight was late. The agent said: I'll let you know as soon as we have news."
        },
        {
          "q": "A patient says: I'm worried I'll be late for work. What do you say?",
          "ph": "I can see …",
          "ex": "I can see you're worried. Let me check, and I'll come back in five minutes."
        }
      ]
    }
  }
};
