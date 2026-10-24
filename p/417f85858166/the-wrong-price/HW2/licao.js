/* THE WRONG PRICE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: might / could / must / can't be (dedução no presente). B1: nenhum português. Imagens live-capa e live-a (escuras). */
window.HW2 = {
  "id": "the-wrong-price",
  "titulo": "The Wrong Price",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/417f85858166/the-wrong-price/img/live-capa.webp",
  "alvo": "probability in the present to investigate a problem: might be / could be (maybe) · must be (sure it is) · can't be (sure it isn't); the plain verb be after them, never must to be, might is, maybe it must be; mustn't is not 'impossible'",
  "abrir": "Something stops working on your phone. What do you think the problem is?",
  "fecho": "<b>It might be / could be …</b> = maybe. <b>It must be …</b> = I'm almost sure. <b>It can't be …</b> = I'm almost sure it isn't. After them, the plain <b>be</b>: never <i>must to be</i>, never <i>might is</i>. And <b>mustn't</b> is for rules, not for impossible: <i>It can't be a hacker.</i>",
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
      "sub": "Mia and Leo look for the reason behind a wrong price. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/417f85858166/the-wrong-price/img/live-capa.webp",
      "leg": "The bakery website",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the bakery says its croissants cost thirty-five cents on the website. What do you think happened?"
        },
        {
          "quem": "leo",
          "t": "It might be a hacker."
        },
        {
          "quem": "mia",
          "t": "It can't be a hacker. Nobody logged in from outside, and the passwords didn't change."
        },
        {
          "quem": "leo",
          "t": "Then it might be the cache, or a discount code."
        },
        {
          "quem": "mia",
          "t": "It can't be the discount code. The prices are ninety percent lower, even with no code."
        },
        {
          "quem": "leo",
          "t": "Look at this: only the prices with cents are wrong. Three fifty became thirty-five cents."
        },
        {
          "quem": "mia",
          "t": "So it must be something with the cents. And the bug started on Monday."
        },
        {
          "quem": "leo",
          "t": "Then it must be Monday's update. The code divides the price by one thousand, not one hundred."
        },
        {
          "quem": "mia",
          "t": "That's it! Let's fix it and write to the client."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't it be a hacker?",
          "op": [
            "Nobody logged in from outside",
            "The passwords were old",
            "The site was offline"
          ],
          "a": 0,
          "por": "Nobody logged in from outside, and the passwords didn't change."
        },
        {
          "q": "Which prices are wrong?",
          "op": [
            "Only the prices with cents",
            "All the prices",
            "Only the cheap bread"
          ],
          "a": 0,
          "por": "Only the prices with cents are wrong."
        },
        {
          "q": "What must the cause be?",
          "op": [
            "Monday's update",
            "The discount code",
            "The cache"
          ],
          "a": 0,
          "por": "Then it must be Monday's update."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a mystery. Hear it, then say it.",
      "frases": [
        {
          "t": "It can't be a hacker, because nobody logged in.",
          "img": "https://wolf-labs.pages.dev/p/417f85858166/the-wrong-price/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It might be the cache, but I'm not sure.",
          "img": "https://wolf-labs.pages.dev/p/417f85858166/the-wrong-price/img/live-a.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It must be the update, because the bug started on Monday.",
          "img": "https://wolf-labs.pages.dev/p/417f85858166/the-wrong-price/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Might, must or can't? Four quick ones.",
      "regra": "<b>might / could be</b> = maybe · <b>must be</b> = sure it is · <b>can't be</b> = sure it isn't · plain <b>be</b>, no <b>to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It might be a problem with the cents.",
          "aceita": [],
          "d": "Hint: <b>might be</b> + the problem."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It must to be something with the cents.",
          "r": "It must be something with the cents.",
          "aceita": [],
          "d": "Hint: after <b>must</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Maybe it must be the cache.",
          "r": "It might be the cache.",
          "aceita": [
            "Maybe it is the cache.",
            "It could be the cache.",
            "Maybe it's the cache."
          ],
          "d": "Hint: <b>maybe</b> and <b>must</b> do not go together. For a maybe, use <b>might</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It mustn't be a hacker.",
          "r": "It can't be a hacker.",
          "aceita": [
            "It couldn't be a hacker."
          ],
          "d": "Hint: for something impossible, use <b>can't be</b>. <b>Mustn't</b> is for rules."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/417f85858166/the-wrong-price/img/live-a.webp",
      "leg": "A cupcake and a few coins",
      "pede": "Look at the picture: a cupcake and a few coins. A shop's website shows the wrong price for it. Write 2 or 3 sentences about the reason. Use <b>might be</b>, <b>can't be</b> and <b>must be</b>.",
      "ph": "It might be … It can't be …",
      "ex": "It might be the cache. It can't be a hacker, because nobody logged in. It must be the update from Monday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your phone suddenly stops working. What might be the problem?",
          "ph": "It might be …",
          "ex": "It might be the battery, or it could be the charger."
        },
        {
          "q": "A friend doesn't answer your messages all day. What might be the reason? What can't it be?",
          "ph": "She might be … It can't be …",
          "ex": "She might be busy at work. It can't be a problem with her phone, because she posted a photo."
        }
      ]
    }
  }
};
