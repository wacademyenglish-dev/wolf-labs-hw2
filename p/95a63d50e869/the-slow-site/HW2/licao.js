/* THE SLOW SITE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: causa e efeito com numeros: due to / caused / led to / resulted in. B2: nenhum portugues. So live-capa (lum 36). */
window.HW2 = {
  "id": "the-slow-site",
  "titulo": "The Slow Site",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/95a63d50e869/the-slow-site/img/live-capa.webp",
  "alvo": "cause and effect with numbers: due to · caused · led to · resulted in · three times slower · 98% lighter · from 15 seconds to under 1; never due the, caused that, three times more slow",
  "abrir": "How many seconds do you wait for a page before you give up?",
  "fecho": "<b>Due to</b> + noun: <i>due to the images</i>. <b>Caused</b> / <b>led to</b> / <b>resulted in</b> + noun: <i>It led to a high bounce rate.</i> Numbers: <b>three times slower</b>, <b>98% lighter</b>, <b>from 15 seconds to under 1</b>. Never <i>due the</i>, never <i>it caused that</i>, never <i>three times more slow</i>.",
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
      "sub": "Mia and Leo report on the bakery website. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/95a63d50e869/the-slow-site/img/live-capa.webp",
      "leg": "Paper bags and a small snail on a counter",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, did you find out why Sarah's site is so slow on phones?"
        },
        {
          "quem": "mia",
          "t": "Yes. The photos are PNG files of two thousand pixels, and they all load at once. The page is twelve megabytes."
        },
        {
          "quem": "leo",
          "t": "That's heavy. What did it cause?"
        },
        {
          "quem": "mia",
          "t": "It caused a load time of fifteen seconds, and that led to a lot of people leaving. The bounce rate went up to seventy percent."
        },
        {
          "quem": "leo",
          "t": "So the slowness is due to the images, not the server."
        },
        {
          "quem": "mia",
          "t": "Exactly. Her nephew wants a bigger server, but that wouldn't help. The problem is the page weight."
        },
        {
          "quem": "leo",
          "t": "What did you change?"
        },
        {
          "quem": "mia",
          "t": "I compressed the photos and turned on lazy loading. The page is now ninety-eight percent lighter, and it loads in under one second."
        },
        {
          "quem": "leo",
          "t": "From fifteen seconds to under one. That resulted in more orders, right?"
        },
        {
          "quem": "mia",
          "t": "Yes. Orders have gone up, and the site is fifteen times faster."
        }
      ],
      "perguntas": [
        {
          "q": "What is the main cause of the slow site?",
          "op": [
            "Large photos that load all at once",
            "A small server",
            "A broken phone"
          ],
          "a": 0,
          "por": "The photos are PNG files of two thousand pixels, and they all load at once."
        },
        {
          "q": "What did the fifteen-second load time lead to?",
          "op": [
            "A lot of people left the site",
            "More orders",
            "A bigger server"
          ],
          "a": 0,
          "por": "It caused a load time of fifteen seconds, and that led to a lot of people leaving."
        },
        {
          "q": "What is the result of the changes?",
          "op": [
            "The page loads in under one second",
            "The page is twelve megabytes",
            "The bounce rate is seventy percent"
          ],
          "a": 0,
          "por": "The page is now ninety-eight percent lighter, and it loads in under one second."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the report. Hear it, then say it.",
      "frases": [
        {
          "t": "The slow load is due to the images, not the server.",
          "img": "https://wolf-labs.pages.dev/p/95a63d50e869/the-slow-site/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The fifteen-second load time led to a high bounce rate.",
          "img": "https://wolf-labs.pages.dev/p/95a63d50e869/the-slow-site/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The page is ninety-eight percent lighter and loads in under one second.",
          "img": "https://wolf-labs.pages.dev/p/95a63d50e869/the-slow-site/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Cause, result and numbers. Four quick ones.",
      "regra": "<b>due to</b> + noun · <b>caused / led to / resulted in</b> + noun · <b>three times slower</b> · <b>from 15 seconds to under 1</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The slowness is due to the images.",
          "aceita": [],
          "d": "Hint: <b>due to</b> + the cause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The slowness is due the images.",
          "r": "The slowness is due to the images.",
          "aceita": [],
          "d": "Hint: the pair is <b>due to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It caused that the site was slow.",
          "r": "It made the site slow.",
          "aceita": [
            "It caused the site to be slow.",
            "It caused the site to load slowly."
          ],
          "d": "Hint: after <b>caused</b>, don't use <b>that</b>. Say <b>made the site slow</b> or <b>caused the site to be slow</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The old page was three times more slow.",
          "r": "The old page was three times slower.",
          "aceita": [
            "The old page was three times as slow."
          ],
          "d": "Hint: the number goes with the short comparative: <b>three times slower</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/95a63d50e869/the-slow-site/img/live-capa.webp",
      "leg": "Paper bags and a small snail",
      "pede": "Look at the picture: paper bags in a row and a small snail on the counter. Write 2 or 3 sentences about something slow (a site, an app, a queue). Give the cause and the result with numbers. Use <b>due to</b>, <b>caused</b>, <b>led to</b> or <b>resulted in</b>.",
      "ph": "It is slow due to … It led to …",
      "ex": "My phone is slow due to old photos. They caused a full memory, and that led to crashes. After I deleted them, it became twice as fast."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do when a page takes too long to open? How many seconds do you wait?",
          "ph": "I wait about … seconds …",
          "ex": "I wait about five seconds. If the page is still blank, I close it and try another site."
        },
        {
          "q": "Think of a problem you had recently. What was the cause, and what did it lead to?",
          "ph": "The problem was due to … It led to …",
          "ex": "The problem was due to a bad connection. It led to a late delivery."
        }
      ]
    }
  }
};
