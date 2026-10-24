/* REVIEW: THE STYLE GUIDE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unit 9: register, spoken vs written, contract language, understatement, opinion idioms. C1: nenhum português. Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "c1-review-the-style-guide",
  "titulo": "Review: The Style Guide",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/08d132ad6873/c1-review-the-style-guide/img/live-capa.webp",
  "alvo": "Unit 9 review (register and style): formal and friendly voices, spoken and written forms (look into / investigate, gonna / going to), contract language (shall, prior to, subject to), understatement (not exactly memorable), opinion idioms (I'm all for it, I couldn't care less)",
  "abrir": "Who do you write to in a formal way? And who in a friendly way?",
  "fecho": "<b>Same message, different voice.</b> Spoken: <i>we'll look into it</i>. Written: <i>we will investigate</i>. Contracts: <i>shall</i>, <i>prior to</i>, <i>subject to</i>. Understatement: <i>not exactly memorable</i>. Opinions: <i>I'm all for it</i>, <i>I couldn't care less</i>. Formal closing: <i>I look forward to hearing from you.</i>",
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
      "sub": "Mia and Leo, two editors, check an email before it goes out. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/08d132ad6873/c1-review-the-style-guide/img/live-conversa.webp",
      "leg": "A reading nook with a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I read your email to Ms. Reed. You opened with Hey and closed with Cheers."
        },
        {
          "quem": "leo",
          "t": "Is that a problem? In meetings I say we'll look into it, and everyone is happy."
        },
        {
          "quem": "mia",
          "t": "In meetings, fine. In writing, say we will investigate. And never use gonna in an email to an author."
        },
        {
          "quem": "leo",
          "t": "Got it. What about the contract? It says the author shall deliver the manuscript prior to the first of May."
        },
        {
          "quem": "mia",
          "t": "In plain English: you must send it before May."
        },
        {
          "quem": "leo",
          "t": "And my review of her last book? I wrote that the ending was terrible."
        },
        {
          "quem": "mia",
          "t": "Say it was not exactly memorable. Honest, but kind."
        },
        {
          "quem": "leo",
          "t": "Fine. Though I couldn't care less about long words."
        },
        {
          "quem": "mia",
          "t": "That is an opinion for your blog, not for the style guide."
        },
        {
          "quem": "leo",
          "t": "Understood. I'm all for clear writing, anyway."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say about gonna in an email to an author?",
          "op": [
            "Never use it in writing",
            "It is always fine",
            "Use it only at the end"
          ],
          "a": 0,
          "por": "Never use gonna in an email to an author."
        },
        {
          "q": "What does prior to the first of May mean in plain English?",
          "op": [
            "Before May",
            "After May",
            "During May"
          ],
          "a": 0,
          "por": "In plain English: you must send it before May."
        },
        {
          "q": "How should Leo say the ending was terrible?",
          "op": [
            "It was not exactly memorable",
            "It was a disaster",
            "It was very long"
          ],
          "a": 0,
          "por": "Say it was not exactly memorable."
        }
      ]
    },
    "out": {
      "sub": "Three sentences in different voices. Hear it, then say it.",
      "frases": [
        {
          "t": "In a meeting, I would say we'll look into it.",
          "img": "https://wolf-labs.pages.dev/p/08d132ad6873/c1-review-the-style-guide/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Prior to the first of May, the author shall deliver the manuscript.",
          "img": "https://wolf-labs.pages.dev/p/08d132ad6873/c1-review-the-style-guide/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The ending is not exactly memorable, but the characters are lovely.",
          "img": "https://wolf-labs.pages.dev/p/08d132ad6873/c1-review-the-style-guide/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Formal, friendly, spoken, written. Four quick ones.",
      "regra": "<b>shall</b> · <b>prior to</b> · <b>subject to</b> · <b>I look forward to hearing from you</b> · <b>I couldn't care less</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The Author shall deliver the manuscript prior to May.",
          "aceita": [],
          "d": "Hint: contract language: <b>shall</b> after the subject, <b>prior to</b> before the date."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The payment is subject of clause four.",
          "r": "The payment is subject to clause four.",
          "aceita": [],
          "d": "Hint: in contracts, the fixed phrase is <b>subject to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I look forward to hear from you.",
          "r": "I look forward to hearing from you.",
          "aceita": [],
          "d": "Hint: after <b>look forward to</b>, use verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I could care less about celebrity news.",
          "r": "I couldn't care less about celebrity news.",
          "aceita": [
            "I could not care less about celebrity news."
          ],
          "d": "Hint: the idiom means you do not care at all: <b>couldn't care less</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/08d132ad6873/c1-review-the-style-guide/img/live-capa.webp",
      "leg": "A quill, a candle and a page on an editor's desk",
      "pede": "Look at the picture: an editor's desk with a quill and a candle. Write 2 or 3 sentences: say one piece of news in a friendly voice, then in a formal voice. Use <b>look into / investigate</b>, <b>gonna / going to</b> or <b>not exactly</b>.",
      "ph": "Friendly: We'll look into it. Formal: …",
      "ex": "Friendly: Just a heads-up, we'll look into it tomorrow. Formal: Dear Ms. Reed, we will investigate the matter prior to Friday. The draft is not exactly perfect, but it is a good start."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you write formal messages to? And friendly messages?",
          "ph": "I write formal emails to … and friendly messages to …",
          "ex": "I write formal emails to my manager and friendly messages to my team."
        },
        {
          "q": "What are you all for, and what couldn't you care less about?",
          "ph": "I'm all for … but I couldn't care less about …",
          "ex": "I'm all for working from home, but I couldn't care less about office parties."
        }
      ]
    }
  }
};
