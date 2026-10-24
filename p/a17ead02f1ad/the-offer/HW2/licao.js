/* THE OFFER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: negociar com elegância (I was hoping for, If you could..., I'd need). C1: nenhum português. */
window.HW2 = {
  "id": "the-offer",
  "titulo": "The Offer",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a17ead02f1ad/the-offer/img/live-a.webp",
  "alvo": "negotiating with elegance: softened requests (I was hoping for... / Would there be any flexibility on...?), conditional trades (If you could..., I'd be happy to...), a clear limit (I'd need... to make this work); negotiate + the thing, no about",
  "abrir": "What matters most to you in a job offer, apart from the salary?",
  "fecho": "Same number, softer tone: <b>I was hoping for</b> something closer to… · <b>Would there be any flexibility on</b>…? · <b>If you could</b>…, <b>I'd be happy to</b>… · <b>I'd need</b>… <b>to make this work</b>. And: <i>negotiate the salary</i>, never <i>negotiate about</i>.",
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
      "sub": "Mia and Leo prepare her reply to a job offer. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a17ead02f1ad/the-offer/img/live-a.webp",
      "leg": "Gold coins and a pair of scales",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the recruiter called. They offered me five thousand dollars a month, remote, as a contractor."
        },
        {
          "quem": "leo",
          "t": "That sounds decent. What did you say?"
        },
        {
          "quem": "mia",
          "t": "I panicked and said, OK, thanks. Now I think I should have asked for more."
        },
        {
          "quem": "leo",
          "t": "You can still reply by e-mail. Don't say, I want 5,800. It sounds too blunt."
        },
        {
          "quem": "mia",
          "t": "So what do I say?"
        },
        {
          "quem": "leo",
          "t": "Say, I was hoping for something closer to 5,800. Then ask, Would there be any flexibility on the base salary?"
        },
        {
          "quem": "mia",
          "t": "And if they say the budget is fixed?"
        },
        {
          "quem": "leo",
          "t": "Make a trade. If you could go to 5,600, I'd be happy to sign this week."
        },
        {
          "quem": "mia",
          "t": "The vacation is low too. Fifteen days."
        },
        {
          "quem": "leo",
          "t": "Same idea. Say, I'd need twenty days of PTO to make this work. It is firm, but it is friendly."
        },
        {
          "quem": "mia",
          "t": "I like it. I am not asking for a favour. I am discussing a package."
        }
      ],
      "perguntas": [
        {
          "q": "Why shouldn't Mia say, I want 5,800?",
          "op": [
            "It sounds too blunt",
            "The number is too low",
            "Recruiters never read e-mail"
          ],
          "a": 0,
          "por": "Don't say, I want 5,800. It sounds too blunt."
        },
        {
          "q": "What can Mia ask about the base salary?",
          "op": [
            "Whether there is any flexibility",
            "Whether the job is remote",
            "Whether the team is large"
          ],
          "a": 0,
          "por": "Would there be any flexibility on the base salary?"
        },
        {
          "q": "What does Mia need to make the offer work?",
          "op": [
            "Twenty days of PTO",
            "A signing bonus",
            "A shorter notice period"
          ],
          "a": 0,
          "por": "I'd need twenty days of PTO to make this work."
        }
      ]
    },
    "out": {
      "sub": "Three negotiating sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "I was hoping for something closer to 5,800.",
          "img": "https://wolf-labs.pages.dev/p/a17ead02f1ad/the-offer/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Would there be any flexibility on the start date?",
          "img": "https://wolf-labs.pages.dev/p/a17ead02f1ad/the-offer/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If you could add five days of PTO, I'd be happy to sign.",
          "img": "https://wolf-labs.pages.dev/p/a17ead02f1ad/the-offer/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Soft, clear, open. Four quick ones.",
      "regra": "<b>I was hoping for</b>… · <b>If you could</b>…, <b>I'd be happy to</b>… · <b>I'd need</b>… <b>to make this work</b> · negotiate + the thing, no <i>about</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'd need twenty days of PTO to make this work.",
          "aceita": [],
          "d": "Hint: <b>I'd need</b> + what you need + <b>to make this work</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'd like to negotiate about the salary.",
          "r": "I'd like to negotiate the salary.",
          "aceita": [
            "I would like to negotiate the salary."
          ],
          "d": "Hint: <b>negotiate</b> takes the thing directly, no <i>about</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If you would go to 5,600, I'd sign.",
          "r": "If you could go to 5,600, I'd sign.",
          "aceita": [
            "If you could go to 5,600, I would sign.",
            "If you could go to 5,600, I'd be happy to sign."
          ],
          "d": "Hint: <b>If you could</b>…, not <i>if you would</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it softer.",
          "mostra": "I want something closer to 5,800.",
          "r": "I was hoping for something closer to 5,800.",
          "aceita": [
            "I'm hoping for something closer to 5,800."
          ],
          "d": "Hint: <b>I was hoping for</b> sounds softer than <i>I want</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a17ead02f1ad/the-offer/img/live-a.webp",
      "leg": "Gold coins and a pair of scales",
      "pede": "Look at the picture: gold coins and a pair of scales. You got a job offer and you want a better package. Write two or three sentences to the recruiter. Use <b>I was hoping for</b>, <b>Would there be any flexibility on</b> or <b>If you could…, I'd be happy to…</b>",
      "ph": "Thank you for the offer. I was hoping for …",
      "ex": "Thank you for the offer. I was hoping for something closer to 5,800. If you could add five days of PTO, I'd be happy to sign this week."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your salary review is next month. How would you ask for a raise politely?",
          "ph": "I was hoping for …",
          "ex": "I was hoping for a raise, given the projects I have led this year."
        },
        {
          "q": "What would you need to make a new job work for you?",
          "ph": "I'd need … to make this work.",
          "ex": "I'd need remote work two days a week to make this work."
        }
      ]
    }
  }
};
