/* I WAS WONDERING WHETHER WE MIGHT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: linguagem diplomática (I'm afraid / I was wondering whether we might / What we could do is / Would it be possible to). C1: nenhum português. Imagens do próprio live-* (escuras). */
window.HW2 = {
  "id": "i-was-wondering-whether-we-might",
  "titulo": "I Was Wondering Whether We Might",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f71b88112fe1/i-was-wondering-whether-we-might/img/live-luva.webp",
  "alvo": "diplomatic distance: I was wondering whether we might ... · We were hoping to ... · I'm afraid (that) + clause · understatement (a little tight, not entirely convinced) · What we could do is ... · Would it be possible to + verb · I'd like you to + verb; never 'I would like that you send', never 'afraid of we can't', never 'wondering that'",
  "abrir": "When did you last say no to someone without hurting the relationship?",
  "fecho": "Make the no softer and the door wider. <b>I'm afraid</b> + clause (never <i>afraid of</i>). <b>A little tight</b>, <b>not entirely convinced</b>: say less than you mean. <b>I was wondering whether we might …</b>, <b>We were hoping to …</b>: the past tense keeps distance. Offer something: <b>What we could do is …</b>. Ask: <b>Would it be possible to</b> + verb. Ask a person: <b>I'd like you to</b> + verb, never <i>that you</i>.",
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
      "sub": "Mia and Leo plan how to answer an impossible client request. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f71b88112fe1/i-was-wondering-whether-we-might/img/live-abertura.webp",
      "leg": "The glass meeting room at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the client has asked for the whole campaign by Friday. Our team can't do it."
        },
        {
          "quem": "leo",
          "t": "Then we don't say 'that's impossible'. We say, I'm afraid Friday is a little tight for us."
        },
        {
          "quem": "mia",
          "t": "And if she insists?"
        },
        {
          "quem": "leo",
          "t": "I was wondering whether we might deliver the first half on Friday and the rest on Tuesday."
        },
        {
          "quem": "mia",
          "t": "I like that. Can I add, we were hoping to test the film with real guests first?"
        },
        {
          "quem": "leo",
          "t": "Yes, that gives a reason. And what we could do is send her a short preview by Thursday."
        },
        {
          "quem": "mia",
          "t": "She may still say no. Then what?"
        },
        {
          "quem": "leo",
          "t": "Then I'd say, I'm not entirely convinced that Friday gives us the quality we both want."
        },
        {
          "quem": "mia",
          "t": "Good. And a request to her? Would it be possible to move the review meeting to Monday?"
        },
        {
          "quem": "leo",
          "t": "Yes. 'Would it be possible to' plus a verb, never 'that you move'. And I'd like you to see the draft first, too."
        },
        {
          "quem": "mia",
          "t": "Perfect. Polite, clear, and we keep the account."
        }
      ],
      "perguntas": [
        {
          "q": "How does Leo suggest saying that Friday is impossible?",
          "op": [
            "Friday is a little tight for us",
            "That's impossible",
            "No, we can't"
          ],
          "a": 0,
          "por": "We say, I'm afraid Friday is a little tight for us."
        },
        {
          "q": "What alternative does Leo propose to the client?",
          "op": [
            "The first half on Friday, the rest on Tuesday",
            "The whole campaign on Monday",
            "A different agency"
          ],
          "a": 0,
          "por": "I was wondering whether we might deliver the first half on Friday and the rest on Tuesday."
        },
        {
          "q": "What follows 'Would it be possible to'?",
          "op": [
            "A plain verb",
            "That you + verb",
            "An -ing form"
          ],
          "a": 0,
          "por": "'Would it be possible to' plus a verb, never 'that you move'."
        }
      ]
    },
    "out": {
      "sub": "Three polite ways to say no. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm afraid Friday is a little tight for us.",
          "img": "https://wolf-labs.pages.dev/p/f71b88112fe1/i-was-wondering-whether-we-might/img/live-abertura.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I was wondering whether we might deliver the first half on Friday.",
          "img": "https://wolf-labs.pages.dev/p/f71b88112fe1/i-was-wondering-whether-we-might/img/live-elevador.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What we could do is send her a short preview by Thursday.",
          "img": "https://wolf-labs.pages.dev/p/f71b88112fe1/i-was-wondering-whether-we-might/img/live-corredor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Soften it, keep the account. Four quick ones.",
      "regra": "<b>I'm afraid</b> + clause · <b>I was wondering whether we might</b> · <b>What we could do is</b> · <b>Would it be possible to</b> + verb · <b>I'd like you to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Would it be possible to move the review to Monday?",
          "aceita": [],
          "d": "Hint: <b>Would it be possible to</b> + plain verb, then the request."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I would like that you send the draft first.",
          "r": "I would like you to send the draft first.",
          "aceita": [
            "I'd like you to send the draft first."
          ],
          "d": "Hint: <b>like</b> + person + <b>to</b> + verb, never <i>that you</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too many.",
          "mostra": "I'm afraid of we can't finish by Friday.",
          "r": "I'm afraid we can't finish by Friday.",
          "aceita": [
            "I'm afraid that we can't finish by Friday."
          ],
          "d": "Hint: <b>I'm afraid</b> is followed directly by a clause, with no <i>of</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was wondering that we might move it.",
          "r": "I was wondering whether we might move it.",
          "aceita": [
            "I was wondering if we might move it."
          ],
          "d": "Hint: <b>wondering whether</b> (or <i>if</i>), never <i>that</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f71b88112fe1/i-was-wondering-whether-we-might/img/live-corredor.webp",
      "leg": "A glass corridor at night, offices behind the glass",
      "pede": "Look at the picture: a long glass corridor at night. Write 2 or 3 sentences saying no, diplomatically, to a real request from a boss, a client or a friend. Use <b>I'm afraid …</b>, <b>I was wondering whether we might …</b>, <b>What I could do is …</b> or <b>Would it be possible to …</b>.",
      "ph": "I'm afraid …",
      "ex": "I'm afraid Friday is a little tight for me. What I could do is send you a draft on Thursday. Would it be possible to meet on Monday instead?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Someone asks you to stay late tomorrow, but you can't. What do you say?",
          "ph": "I'm afraid …",
          "ex": "I'm afraid tomorrow is a little difficult for me. What I could do is stay late on Thursday."
        },
        {
          "q": "What would you like a colleague or a friend to do for you this week?",
          "ph": "I'd like you to …",
          "ex": "I'd like you to read my report before Friday."
        }
      ]
    }
  }
};
