/* CARD DECLINED · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: should / shouldn't / Why don't you. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "card-declined",
  "titulo": "Card Declined",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/09f83de9c5e7/card-declined/img/live-a.webp",
  "alvo": "advice: should / shouldn't + verb, Why don't you + verb?, Should I ...?; never 'should to', 'don't should', 'Why you don't ...?'",
  "abrir": "What do you do when your card doesn't work?",
  "fecho": "Advice: <b>You should</b> + verb · <b>You shouldn't</b> + verb · <b>Why don't you</b> + verb? · <b>Should I</b> + verb? Never <i>should to</i>, <i>don't should</i> or <i>Why you don't</i>.",
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
  "rate": "-14%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo at a café in Boston. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/09f83de9c5e7/card-declined/img/live-a.webp",
      "leg": "The card machine on the counter",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, my card was declined! And there's a long line behind me."
        },
        {
          "quem": "leo",
          "t": "Don't panic. Why don't you try another card?"
        },
        {
          "quem": "mia",
          "t": "I only have this one. Should I pay in cash?"
        },
        {
          "quem": "leo",
          "t": "You should try your phone first. It's faster."
        },
        {
          "quem": "mia",
          "t": "It's declined too. What should I do?"
        },
        {
          "quem": "leo",
          "t": "You should call your bank. Maybe they blocked it because you're travelling."
        },
        {
          "quem": "mia",
          "t": "That's possible. I shouldn't use the card again, right?"
        },
        {
          "quem": "leo",
          "t": "Right. I'll pay for lunch today, and you should call the bank now."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say first?",
          "op": [
            "Try another card",
            "Call the manager",
            "Go home"
          ],
          "a": 0,
          "por": "Why don't you try another card?"
        },
        {
          "q": "Why did the bank maybe block the card?",
          "op": [
            "Mia is travelling",
            "Mia has no money",
            "The machine is old"
          ],
          "a": 0,
          "por": "Maybe they blocked it because you're travelling."
        },
        {
          "q": "What should Mia do now?",
          "op": [
            "Call her bank",
            "Wait one week",
            "Buy a new phone"
          ],
          "a": 0,
          "por": "You should call your bank."
        }
      ]
    },
    "out": {
      "sub": "Three pieces of advice. Hear it, then say it.",
      "frases": [
        {
          "t": "You should call your bank.",
          "img": "https://wolf-labs.pages.dev/p/09f83de9c5e7/card-declined/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Should I pay in cash?",
          "img": "https://wolf-labs.pages.dev/p/09f83de9c5e7/card-declined/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Why don't you try another card?",
          "img": "https://wolf-labs.pages.dev/p/09f83de9c5e7/card-declined/img/live-a.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Advice for a friend. Four quick ones.",
      "regra": "<b>You should</b> + verb · <b>You shouldn't</b> + verb · <b>Why don't you</b> + verb? · never <b>should to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Why don't you pay with your phone?",
          "aceita": [],
          "d": "Dica: sugestão: <b>Why don't you</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after should.",
          "mostra": "You should to call the bank.",
          "r": "You should call the bank.",
          "aceita": [],
          "d": "Dica: depois de <b>should</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You don't should use that machine.",
          "r": "You shouldn't use that machine.",
          "aceita": [
            "You should not use that machine."
          ],
          "d": "Dica: o negativo de <b>should</b> é <b>shouldn't</b>, sem <b>don't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question is wrong.",
          "mostra": "Why you don't call your bank?",
          "r": "Why don't you call your bank?",
          "aceita": [],
          "d": "Dica: na pergunta, <b>don't</b> vem antes de <b>you</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/09f83de9c5e7/card-declined/img/live-b.webp",
      "leg": "A wallet and some coins",
      "pede": "Look at the picture: a wallet and some coins. Write 2 or 3 sentences of advice for a friend with a money problem abroad. Use <b>should</b>, <b>shouldn't</b> or <b>Why don't you</b>.",
      "ph": "You should …",
      "ex": "You should call your bank. You shouldn't use that ATM. Why don't you pay with cash?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A friend is going abroad. What should he bring?",
          "ph": "He should bring …",
          "ex": "He should bring two cards and some cash."
        },
        {
          "q": "Your card doesn't work in a shop. What should you do?",
          "ph": "I should …",
          "ex": "I should call my bank."
        }
      ]
    }
  }
};
