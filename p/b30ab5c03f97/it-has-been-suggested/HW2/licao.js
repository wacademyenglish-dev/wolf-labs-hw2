/* IT HAS BEEN SUGGESTED · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: relato impessoal de memorando (it has been suggested that, it was agreed that, it has come to our attention). C1: nenhum português. Imagens live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "it-has-been-suggested",
  "titulo": "It Has Been Suggested",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b30ab5c03f97/it-has-been-suggested/img/live-capa.webp",
  "alvo": "impersonal reporting in memos and minutes: It has been suggested / proposed that ... · It was agreed / decided that ... · It has come to our attention that ... · It is widely believed / hoped that ... · There is thought to be ...; suggest + that (or -ing), never suggest + to or suggest someone to; formal base form (that the meeting be moved); should + plain verb, never should to",
  "abrir": "Have you ever read a memo or an official email that never says who decided anything?",
  "fecho": "A memo hides the person and keeps the idea: <b>It has been suggested that</b> …, <b>It was agreed that</b> …, <b>It has come to our attention that</b> … (a problem found), <b>It is widely believed / hoped that</b> …, <b>There is thought to be</b> …. After <b>suggest</b>: <b>that</b> + clause, never <i>to</i>. The formal voice uses the base form: <i>that the meeting be moved</i>.",
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
      "sub": "Mia and Leo read a memo in the office kitchen. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b30ab5c03f97/it-has-been-suggested/img/live-conversa.webp",
      "leg": "The office kitchen at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, have you read the board's memo? It has been suggested that the Friday meeting be moved to Thursday."
        },
        {
          "quem": "leo",
          "t": "Suggested by whom? Memos never say. It's always 'it has been suggested', never 'Paulo thinks'."
        },
        {
          "quem": "mia",
          "t": "That's the point: nobody's name, nobody's fault. It was agreed that the new rota starts in March, too."
        },
        {
          "quem": "leo",
          "t": "And this one: 'It has come to our attention that several mugs are being left in the sink.' Brutal."
        },
        {
          "quem": "mia",
          "t": "Very formal, very serious. Someone has been caught. Then it softens: it is hoped that everyone will pitch in."
        },
        {
          "quem": "leo",
          "t": "Hoped, not promised. I do love the careful wording."
        },
        {
          "quem": "mia",
          "t": "And there is thought to be a dishwasher on the way. Notice the verb after suggested, though: 'that the meeting be moved', not 'is moved'."
        },
        {
          "quem": "leo",
          "t": "The formal subjunctive. It sounds odd, but it's the proper memo voice."
        },
        {
          "quem": "mia",
          "t": "Right. It should be noted that I'm already using it at home: 'It has been suggested that the dishes be done.'"
        },
        {
          "quem": "leo",
          "t": "Ha! Suggested by whom?"
        }
      ],
      "perguntas": [
        {
          "q": "Why do memos say 'it has been suggested' and not 'Paulo thinks'?",
          "op": [
            "No name is attached, so nobody is exposed",
            "Paulo wrote the memo himself",
            "It is simply a shorter way to write"
          ],
          "a": 0,
          "por": "That's the point: nobody's name, nobody's fault."
        },
        {
          "q": "What does 'It has come to our attention that ...' signal here?",
          "op": [
            "That someone has been caught doing something wrong",
            "That good news is on the way",
            "That the board is asking a question"
          ],
          "a": 0,
          "por": "Very formal, very serious. Someone has been caught."
        },
        {
          "q": "Which form follows 'suggested that' in the formal memo voice?",
          "op": [
            "The base form: 'the meeting be moved'",
            "The -s form: 'the meeting is moved'",
            "The infinitive: 'to move the meeting'"
          ],
          "a": 0,
          "por": "Notice the verb after suggested, though: 'that the meeting be moved', not 'is moved'."
        }
      ]
    },
    "out": {
      "sub": "Three lines from a memo. Hear it, then say it.",
      "frases": [
        {
          "t": "It has been suggested that the Friday meeting be moved to Thursday.",
          "img": "https://wolf-labs.pages.dev/p/b30ab5c03f97/it-has-been-suggested/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It has come to our attention that several mugs are being left in the sink.",
          "img": "https://wolf-labs.pages.dev/p/b30ab5c03f97/it-has-been-suggested/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There is thought to be a dishwasher on the way, and it is hoped that everyone will help.",
          "img": "https://wolf-labs.pages.dev/p/b30ab5c03f97/it-has-been-suggested/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The careful voice of memos. Four quick ones.",
      "regra": "<b>It has been suggested that</b> + clause · <b>It was agreed that</b> · <b>It has come to our attention that</b> · <b>suggest that</b>, never <i>suggest to</i> · <b>should</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It has been suggested that the meeting be moved.",
          "aceita": [],
          "d": "Hint: after <b>suggested that</b>, the formal voice uses the base form: <b>be moved</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It was suggested to start in March.",
          "r": "It was suggested that we start in March.",
          "aceita": [
            "It was suggested that we should start in March.",
            "It was suggested starting in March."
          ],
          "d": "Hint: <b>suggest</b> takes <b>that</b> + clause (or -ing), never <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She suggested me to wait until Friday.",
          "r": "She suggested that I wait until Friday.",
          "aceita": [
            "She suggested I wait until Friday.",
            "She suggested that I should wait until Friday.",
            "She suggested waiting until Friday."
          ],
          "d": "Hint: never <i>suggest someone to</i> do something. Use <b>suggested that I wait</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was agreed that we should to wait.",
          "r": "It was agreed that we should wait.",
          "aceita": [],
          "d": "Hint: <b>should</b> is followed by the plain verb, with no <i>to</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b30ab5c03f97/it-has-been-suggested/img/live-conversa.webp",
      "leg": "An office kitchen at night, one mug on the counter",
      "pede": "Look at the picture: an office kitchen at night, one mug on the counter. Write 2 or 3 sentences of a short memo to your team, your family or your building. No names! Use <b>It has been suggested that …</b>, <b>It was agreed that …</b> or <b>It has come to our attention that …</b>.",
      "ph": "It has been suggested that …",
      "ex": "It has been suggested that the Friday meeting be moved to Thursday. It has come to our attention that some mugs are left in the sink. It is hoped that everyone will help."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What rule would you like to change at home, at work or at school? Say it like a memo.",
          "ph": "It has been suggested that …",
          "ex": "It has been suggested that the Sunday lunch start an hour later."
        },
        {
          "q": "What is widely believed, or hoped, in your family or team about the future?",
          "ph": "It is widely believed that … / It is hoped that …",
          "ex": "It is widely believed that our team will win the next match. It is hoped that we will all go out afterwards."
        }
      ]
    }
  }
};
