/* YOU'RE SUPPOSED TO BRING A GIFT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: be supposed to / not supposed to / was supposed to / be expected to. B1: nenhum português. Só imagens live-* (escuras). Sem hospital/luto. */
window.HW2 = {
  "id": "youre-supposed-to-bring-a-gift",
  "titulo": "You're Supposed to Bring a Gift",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0784b21b4fb0/youre-supposed-to-bring-a-gift/img/live-capa.webp",
  "alvo": "be supposed to: the rule or the plan (we're supposed to reply) · be expected to (more formal) · not supposed to = the etiquette says no (not the same as don't have to) · was / were supposed to = the plan that did not happen; never Is to, We supposed to, supposed bring, suppose to",
  "abrir": "What are you supposed to do at a party, and what are you not supposed to do?",
  "fecho": "<b>A person + BE + supposed to + plain verb</b>: <i>We're supposed to reply by Friday.</i> <b>Not supposed to</b> = the rule says no: <i>Guests aren't supposed to wear white.</i> <b>Was / were supposed to</b> = the plan that did not happen. Never <i>We supposed to</i>, never <i>supposed bring</i>.",
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
      "sub": "Mia and Leo talk about a wedding in Kyoto. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0784b21b4fb0/youre-supposed-to-bring-a-gift/img/live-envelope.webp",
      "leg": "A black envelope with a ribbon",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I have a wedding in Kyoto next month, and I don't know the rules. What am I supposed to bring?"
        },
        {
          "quem": "mia",
          "t": "Don't bring a big box. At a Japanese wedding, guests are expected to bring money in an envelope."
        },
        {
          "quem": "leo",
          "t": "Money? I was going to buy a coffee machine."
        },
        {
          "quem": "mia",
          "t": "Please don't. And the bills are supposed to be new. Old ones aren't supposed to go in the envelope."
        },
        {
          "quem": "leo",
          "t": "Wow. What time are we supposed to arrive?"
        },
        {
          "quem": "mia",
          "t": "Before the ceremony. At Emma's wedding, we were supposed to be there at one thirty, and I arrived at two."
        },
        {
          "quem": "leo",
          "t": "Were you in trouble?"
        },
        {
          "quem": "mia",
          "t": "No, but I wasn't supposed to sit at the first table. My seat was on the chart, far away."
        },
        {
          "quem": "leo",
          "t": "And my phone? Can I take photos?"
        },
        {
          "quem": "mia",
          "t": "Not during the ceremony. Guests aren't supposed to use their phones."
        },
        {
          "quem": "leo",
          "t": "Thanks. I'm supposed to reply by Friday, so I'll do it tonight."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo supposed to bring to the wedding?",
          "op": [
            "Money in an envelope",
            "A big box",
            "A coffee machine"
          ],
          "a": 0,
          "por": "Guests are expected to bring money in an envelope."
        },
        {
          "q": "What time was Mia supposed to be at Emma's wedding?",
          "op": [
            "At one thirty",
            "At two",
            "Before noon"
          ],
          "a": 0,
          "por": "We were supposed to be there at one thirty, and I arrived at two."
        },
        {
          "q": "What aren't guests supposed to do during the ceremony?",
          "op": [
            "Use their phones",
            "Find their seats",
            "Bring money"
          ],
          "a": 0,
          "por": "Guests aren't supposed to use their phones."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about rules and plans. Hear it, then say it.",
      "frases": [
        {
          "t": "We're supposed to reply to the invitation by Friday.",
          "img": "https://wolf-labs.pages.dev/p/0784b21b4fb0/youre-supposed-to-bring-a-gift/img/live-convite.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Guests aren't supposed to sit at the wrong table.",
          "img": "https://wolf-labs.pages.dev/p/0784b21b4fb0/youre-supposed-to-bring-a-gift/img/live-mesas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I was supposed to bring a gift, but I forgot it.",
          "img": "https://wolf-labs.pages.dev/p/0784b21b4fb0/youre-supposed-to-bring-a-gift/img/live-presente.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "supposed to, not supposed to, was supposed to. Four quick ones.",
      "regra": "a person + <b>BE</b> + <b>supposed to</b> + plain verb · <b>not supposed to</b> = please don't · <b>was supposed to</b> = the plan failed.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Guests are supposed to arrive before the ceremony.",
          "aceita": [],
          "d": "Hint: a person, then <b>are</b>, then <b>supposed to</b>, then the plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "We supposed to reply by Friday.",
          "r": "We're supposed to reply by Friday.",
          "aceita": [
            "We are supposed to reply by Friday."
          ],
          "d": "Hint: it needs BE: <b>we're supposed to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the rule says no.",
          "mostra": "You don't have to use your phone.",
          "r": "You aren't supposed to use your phone.",
          "aceita": [
            "You're not supposed to use your phone.",
            "You are not supposed to use your phone."
          ],
          "d": "Hint: <b>don't have to</b> = you can choose. When the rule says no: <b>not supposed to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the plan did not happen.",
          "mostra": "I am supposed to call her yesterday.",
          "r": "I was supposed to call her yesterday.",
          "aceita": [],
          "d": "Hint: it is over and it did not happen: <b>was supposed to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0784b21b4fb0/youre-supposed-to-bring-a-gift/img/live-bolo.webp",
      "leg": "A black cake with golden candles",
      "pede": "Look at the picture: a cake at a party. Write 2 or 3 sentences about the rules at a party in your country. Use <b>supposed to</b>, <b>not supposed to</b> or <b>expected to</b>.",
      "ph": "At a party, guests are supposed to …",
      "ex": "At a party, guests are supposed to bring a small gift. Guests aren't supposed to arrive too early. The host is expected to serve food."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you supposed to do at work or at school every day? What aren't you supposed to do?",
          "ph": "I'm supposed to … I'm not supposed to …",
          "ex": "I'm supposed to arrive by nine. I'm not supposed to use my phone in class."
        },
        {
          "q": "Think of a plan that did not happen this week. What were you supposed to do?",
          "ph": "I was supposed to … but …",
          "ex": "I was supposed to call my aunt, but I forgot."
        }
      ]
    }
  }
};
