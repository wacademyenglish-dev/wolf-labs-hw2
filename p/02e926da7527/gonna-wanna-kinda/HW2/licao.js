/* GONNA, WANNA, KINDA · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: gonna / wanna / gotta / kinda (fala x escrita). C1: nenhum português. */
window.HW2 = {
  "id": "gonna-wanna-kinda",
  "titulo": "Gonna, Wanna, Kinda",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/02e926da7527/gonna-wanna-kinda/img/live-conversa.webp",
  "alvo": "spoken English versus written English: gonna, wanna, gotta, kinda, sorta, dunno, lemme, 'cause, y'know; understand them in series and films, use them only with friends, never in a work email; never gonna to, gotta to, or wanna you to",
  "abrir": "What do you hear in English series that you never saw in your textbooks?",
  "fecho": "Understand all of it, use some of it. <b>gonna = going to · wanna = want to · gotta = have got to · kinda = kind of · dunno = I don't know · lemme = let me</b>. They already contain <b>to</b>: never <i>gonna to</i>. With a person it is <b>want you to</b>, never <i>wanna you to</i>. With friends, fine. In a work email or an exam, never.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Leo sends Mia a voice message about a concert. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/02e926da7527/gonna-wanna-kinda/img/live-conversa.webp",
      "leg": "A record player in a dark room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hey Mia! So, uh, the band's playing on Saturday, and I kinda wanna go. You wanna come?"
        },
        {
          "quem": "mia",
          "t": "Which band? I dunno, I gotta check my week first."
        },
        {
          "quem": "leo",
          "t": "The one from that film, y'know? Tickets are sorta expensive, 'cause it's a big venue."
        },
        {
          "quem": "mia",
          "t": "How expensive? Lemme guess, a hundred?"
        },
        {
          "quem": "leo",
          "t": "Close. But I gotta see them live. I'm gonna buy two tonight, 'cause they're gonna sell out."
        },
        {
          "quem": "mia",
          "t": "Okay, okay. Sounds good. Count me in. Wait, what time?"
        },
        {
          "quem": "leo",
          "t": "Dunno. Nine, I think? Lemme check. Yeah, nine."
        },
        {
          "quem": "mia",
          "t": "Nine's kinda late for a Saturday."
        },
        {
          "quem": "leo",
          "t": "Said no one who's ever seen them live. Coming?"
        },
        {
          "quem": "mia",
          "t": "Fine, I'm in. But I'm not gonna dance."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo want to do on Saturday?",
          "op": [
            "See a band live",
            "Watch a film",
            "Stay home"
          ],
          "a": 0,
          "por": "The band's playing on Saturday, and I kinda wanna go."
        },
        {
          "q": "Why will Leo buy the tickets tonight?",
          "op": [
            "Because they are going to sell out",
            "Because they are cheap tonight",
            "Because Mia asked him to"
          ],
          "a": 0,
          "por": "I'm gonna buy two tonight, 'cause they're gonna sell out."
        },
        {
          "q": "What does Mia think about the time?",
          "op": [
            "Nine is a bit late for a Saturday",
            "Nine is too early",
            "Nine is perfect"
          ],
          "a": 0,
          "por": "Nine's kinda late for a Saturday."
        }
      ]
    },
    "out": {
      "sub": "Real, relaxed English. Hear it, then say it.",
      "frases": [
        {
          "t": "I kinda wanna go, but I gotta check my week first.",
          "img": "https://wolf-labs.pages.dev/p/02e926da7527/gonna-wanna-kinda/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm gonna buy two tonight, 'cause they're gonna sell out.",
          "img": "https://wolf-labs.pages.dev/p/02e926da7527/gonna-wanna-kinda/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I dunno the time. Lemme check.",
          "img": "https://wolf-labs.pages.dev/p/02e926da7527/gonna-wanna-kinda/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Spoken or written? Four quick ones.",
      "regra": "<b>gonna / wanna / gotta</b> already contain <b>to</b> · <b>want you to</b>, never wanna you to · never in a work email",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am gonna buy two tickets tonight.",
          "aceita": [],
          "d": "Hint: <b>gonna</b> = going to, so no extra <b>to</b> after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word too many.",
          "mostra": "I'm gonna to call you later.",
          "r": "I'm gonna call you later.",
          "aceita": [
            "I'm going to call you later."
          ],
          "d": "Hint: <b>gonna</b> already means <i>going to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I wanna you to come with me.",
          "r": "I want you to come with me.",
          "aceita": [
            "I want you to come with us."
          ],
          "d": "Hint: with a person, use <b>want you to</b>. <i>Wanna</i> only replaces <i>want to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: this is an email to a client.",
          "mostra": "I'm gonna send the report today.",
          "r": "I am going to send the report today.",
          "aceita": [
            "I will send the report today.",
            "I'll send the report today."
          ],
          "d": "Hint: <b>gonna</b> is for speech and friends, not for a client."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/02e926da7527/gonna-wanna-kinda/img/live-conversa.webp",
      "leg": "A record player in a dark room",
      "pede": "Look at the picture: a record player in a dark room. Write 2 or 3 sentences as a relaxed voice message to a friend about a gig or a night out. Use <b>gonna</b>, <b>wanna</b>, <b>gotta</b> or <b>kinda</b>.",
      "ph": "Hey! I'm gonna …",
      "ex": "Hey! I'm gonna go to a gig on Friday, and I kinda wanna take you. You wanna come? I gotta buy the tickets tonight."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you gonna do this weekend? Answer like a friend.",
          "ph": "I'm gonna … and I kinda wanna …",
          "ex": "I'm gonna sleep a lot, and I kinda wanna see a film."
        },
        {
          "q": "Now say the same plan to a client, in formal English.",
          "ph": "I am going to … and I would like to …",
          "ex": "I am going to visit my family, and I would like to rest."
        }
      ]
    }
  }
};
