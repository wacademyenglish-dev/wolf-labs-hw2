/* RED FLAGS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should / shouldn't, if + presente, I agree. B1: nenhum português. Só imagens live-* escuras. Tom calmo, sem detalhes de abuso. */
window.HW2 = {
  "id": "aupair-red-flags",
  "titulo": "Red Flags",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3db8790eb304/aupair-red-flags/img/live-capa.webp",
  "alvo": "advice with should / shouldn't + plain verb (never should to); if + present simple for a general situation (If a family asks for money, say no); I agree (never I am agree); calm steps for warning signs",
  "abrir": "What is a warning sign that something is not right?",
  "fecho": "<b>Should</b> / <b>shouldn't</b> + plain verb: <i>You should talk to your agency.</i> <b>If</b> + present, an instruction: <i>If a family asks for money, say no.</i> He, she, it: <b>asks</b>. <i>I agree</i>, never <i>I am agree</i>. A red flag is a reason to talk to someone, not to panic.",
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
      "sub": "Mia asks Leo about a strange message. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3db8790eb304/aupair-red-flags/img/live-capa.webp",
      "leg": "A small red flag on a desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I got a strange message today. A family wants to talk by private email."
        },
        {
          "quem": "leo",
          "t": "Outside the agency platform? That is a red flag."
        },
        {
          "quem": "mia",
          "t": "There is more. They said, don't tell the agency, and send us money for the visa."
        },
        {
          "quem": "leo",
          "t": "Mia, stop there. Real families don't ask for money, and they don't ask for secrets."
        },
        {
          "quem": "mia",
          "t": "I didn't answer. I wanted to check with someone first."
        },
        {
          "quem": "leo",
          "t": "Good. You should show the message to your agency."
        },
        {
          "quem": "mia",
          "t": "Should I block them?"
        },
        {
          "quem": "leo",
          "t": "Yes, after you tell the agency. And you shouldn't ever send a photo of your passport."
        },
        {
          "quem": "mia",
          "t": "OK. Red flag, no answer, tell the agency."
        },
        {
          "quem": "leo",
          "t": "Exactly. You did the right thing, and you stayed calm."
        }
      ],
      "perguntas": [
        {
          "q": "Why was the message a red flag?",
          "op": [
            "It asked for money and for a secret",
            "It was too long",
            "It came on a Monday"
          ],
          "a": 0,
          "por": "They said, don't tell the agency, and send us money for the visa."
        },
        {
          "q": "What should Mia do first?",
          "op": [
            "Show the message to her agency",
            "Send the money",
            "Answer the family"
          ],
          "a": 0,
          "por": "You should show the message to your agency."
        },
        {
          "q": "What should Mia never send?",
          "op": [
            "A photo of her passport",
            "A thank-you note",
            "A question"
          ],
          "a": 0,
          "por": "You shouldn't ever send a photo of your passport."
        }
      ]
    },
    "out": {
      "sub": "Three pieces of advice. Hear it, then say it.",
      "frases": [
        {
          "t": "Real families work with the agency.",
          "img": "https://wolf-labs.pages.dev/p/3db8790eb304/aupair-red-flags/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You should never send money to a family.",
          "img": "https://wolf-labs.pages.dev/p/3db8790eb304/aupair-red-flags/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "A red flag is a reason to ask for help.",
          "img": "https://wolf-labs.pages.dev/p/3db8790eb304/aupair-red-flags/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "should, shouldn't and if. Four quick ones.",
      "regra": "<b>should</b> / <b>shouldn't</b> + plain verb · <b>if</b> + present simple · he / she / it + <b>-s</b> · <b>I agree</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You should talk to your coordinator early.",
          "aceita": [],
          "d": "Hint: <b>should</b> + the plain verb: <i>talk</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You shouldn't to send money to a family.",
          "r": "You shouldn't send money to a family.",
          "aceita": [
            "You should not send money to a family."
          ],
          "d": "Hint: after <b>should</b> and <b>shouldn't</b>, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If a family ask for money, say no.",
          "r": "If a family asks for money, say no.",
          "aceita": [],
          "d": "Hint: <b>a family</b> = it, so the verb takes <b>-s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I am agree with this rule.",
          "r": "I agree with this rule.",
          "aceita": [],
          "d": "Hint: <b>agree</b> is already a verb. No <i>am</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3db8790eb304/aupair-red-flags/img/live-capa.webp",
      "leg": "A small red flag on a desk",
      "pede": "Look at the picture: a small red flag. Write 2 or 3 sentences of advice for a new au pair about warning signs. Use <b>should</b>, <b>shouldn't</b> or <b>if</b>.",
      "ph": "You should …",
      "ex": "You should keep your first contact on the agency platform. You shouldn't send money to a family. If something feels wrong, talk to your coordinator."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What should you do if a message feels strange?",
          "ph": "I should …",
          "ex": "I should show it to my agency and not answer."
        },
        {
          "q": "Who can you talk to when you feel unsure? Why?",
          "ph": "I can talk to … because …",
          "ex": "I can talk to my coordinator, because she knows the program and she can help."
        }
      ]
    }
  }
};
