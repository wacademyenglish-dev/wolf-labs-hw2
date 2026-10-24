/* HEALTH ENGLISH · WE MADE A MISTAKE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Falas originais (Mia e Leo).
   Alvo: We made a mistake / I'm sorry this happened / prevent from + -ing
   B1+ (B1 na plataforma): nenhum português. Tom calmo, cenas administrativas, nada grave. Sem imagem (corredor e porta fechada da aula ficam de fora). */
window.HW2 = {
  "id": "health-we-made-a-mistake",
  "titulo": "We Made a Mistake",
  "nivel": "B1",
  "minutos": 10,
  "capa": "",
  "alvo": "explain an admin mistake honestly: say who did it in the active voice (We made a mistake: make, never do), apologise (I'm really sorry this happened: sorry + a sentence, no for), what you've already done (We've already…), what will change (prevent this from happening again); never we did a mistake, sorry for this happened, prevent this to happen",
  "abrir": "What's the best way to say sorry for a mistake at work?",
  "fecho": "Say who did it: <b>We made a mistake</b> (make, never <i>do</i>). Say sorry: <b>I'm really sorry this happened.</b> Say what you've done: <b>We've already…</b> And what will change: <b>to prevent this from happening again.</b>",
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
      "sub": "Mia at the clinic reception, Leo comes for a physio appointment. A new scene, about one minute.",
      "img": "",
      "leg": "",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi, Mia. I'm here for my nine o'clock appointment with the physio."
        },
        {
          "quem": "mia",
          "t": "Good morning, Leo. Can I see your letter? Oh, I see. I need to tell you something. We made a mistake."
        },
        {
          "quem": "leo",
          "t": "A mistake? What happened?"
        },
        {
          "quem": "mia",
          "t": "We sent you a letter with the wrong time. Your appointment is at two this afternoon, not at nine."
        },
        {
          "quem": "leo",
          "t": "Oh no. I took the morning off work for this."
        },
        {
          "quem": "mia",
          "t": "I'm really sorry this happened. It was our mistake, not yours."
        },
        {
          "quem": "leo",
          "t": "OK. So what can we do now?"
        },
        {
          "quem": "mia",
          "t": "I've already spoken to the physio. She can see you at half past nine, after her first patient."
        },
        {
          "quem": "leo",
          "t": "That's great. Thank you."
        },
        {
          "quem": "mia",
          "t": "And we've checked all the letters from this week, to prevent this from happening again."
        },
        {
          "quem": "leo",
          "t": "Good idea. Oh, one more thing. My name is wrong on this form. It's Leo Moura, not Leo Moore."
        },
        {
          "quem": "mia",
          "t": "You're right. I'm sorry about that. I'll change it now."
        }
      ],
      "perguntas": [
        {
          "q": "What was wrong with Leo's letter?",
          "op": [
            "The time was wrong",
            "The date was wrong",
            "The address was wrong"
          ],
          "a": 0,
          "por": "We sent you a letter with the wrong time."
        },
        {
          "q": "What has Mia already done?",
          "op": [
            "She has spoken to the physio",
            "She has called Leo's boss",
            "She has cancelled the appointment"
          ],
          "a": 0,
          "por": "I've already spoken to the physio."
        },
        {
          "q": "What else is wrong?",
          "op": [
            "Leo's name on the form",
            "Leo's phone number",
            "Leo's birthday"
          ],
          "a": 0,
          "por": "My name is wrong on this form."
        }
      ]
    },
    "out": {
      "sub": "Three honest sentences about a mistake. Hear it, then say it.",
      "frases": [
        {
          "t": "We made a mistake with the time of your appointment.",
          "img": "",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm really sorry this happened. It was our mistake, not yours.",
          "img": "",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We've changed how we check letters, to prevent this from happening again.",
          "img": "",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Say who, say sorry, say what changes. Four quick ones.",
      "regra": "<b>We made</b> a mistake (never <i>did</i>) · <b>I'm sorry</b> + a sentence · <b>We've already</b> + past participle · <b>prevent this from</b> + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We sent your referral letter to the wrong clinic.",
          "aceita": [],
          "d": "Hint: say who did it: <b>We</b> + a past verb. No hiding."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We did a mistake with your form.",
          "r": "We made a mistake with your form.",
          "aceita": [],
          "d": "Hint: in English you <b>make</b> a mistake, never <i>do</i> a mistake."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "I'm really sorry for this happened.",
          "r": "I'm really sorry this happened.",
          "aceita": [
            "I'm really sorry that this happened.",
            "I'm really sorry for what happened."
          ],
          "d": "Hint: <b>I'm sorry</b> + a sentence, no <i>for</i>. Or: <i>I'm sorry for the mistake.</i>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "We want to prevent this to happen again.",
          "r": "We want to prevent this from happening again.",
          "aceita": [],
          "d": "Hint: <b>prevent</b> + something + <b>from</b> + -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "",
      "leg": "",
      "pede": "Imagine a patient's referral letter went to the wrong clinic. Write 2 or 3 sentences: say what happened (<b>We made a mistake…</b>), apologise, and say what you've already done or what will change.",
      "ph": "We made a mistake with …",
      "ex": "We made a mistake with your referral letter. I'm really sorry this happened. We've already sent it to the right clinic."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a small mistake a shop, a bank or a clinic made with you. What did they say?",
          "ph": "Once, … made a mistake with my …",
          "ex": "Once, my bank made a mistake with my name. They said sorry and changed it the same day."
        },
        {
          "q": "You gave a patient the wrong appointment time. What do you say first?",
          "ph": "I'm really sorry. We made a mistake …",
          "ex": "I'm really sorry. We made a mistake with your appointment time."
        }
      ]
    }
  }
};
