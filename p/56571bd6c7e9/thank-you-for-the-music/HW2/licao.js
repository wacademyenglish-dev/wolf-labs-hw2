/* THANK YOU FOR THE MUSIC · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: second conditional. B1: nenhum português. Linha de música: NENHUM verso aqui; o listening é diálogo original. Só live-* (todas escuras). */
window.HW2 = {
  "id": "thank-you-for-the-music",
  "titulo": "Thank You for the Music",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/56571bd6c7e9/thank-you-for-the-music/img/live-capa.webp",
  "alvo": "second conditional: if + past simple, would + plain verb (If I had more time, I would learn the piano); If I were you; never would in the if part, never present after if with would, never would + past",
  "abrir": "If you could meet any singer, what would you ask?",
  "fecho": "<b>If + past simple, would + plain verb</b>: <i>If I had a guitar, I would play every day.</i> It is about something imagined, not real. Never <i>would</i> in the if part (<i>If I would have</i>), never a present after if (<i>If I have … I would</i>), never <i>would</i> + past (<i>would sang</i>). <i>If I were you, I would …</i> gives advice.",
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
      "sub": "Mia and Leo on the bus, with headphones. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/56571bd6c7e9/thank-you-for-the-music/img/live-cortina.webp",
      "leg": "An empty stage and a single rose",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what would you do if you didn't have music?"
        },
        {
          "quem": "mia",
          "t": "If I didn't have music, I would be so bored. I listen to it all day."
        },
        {
          "quem": "leo",
          "t": "Really? I would just watch more series. If I had no headphones, I would hear nothing on this bus."
        },
        {
          "quem": "mia",
          "t": "If I were you, I would try a playlist. Music makes the bus ride much faster."
        },
        {
          "quem": "leo",
          "t": "Maybe. If I had more free time, I would learn the piano."
        },
        {
          "quem": "mia",
          "t": "You could learn online. If you practiced every day, you would play a song in a month."
        },
        {
          "quem": "leo",
          "t": "A month? If I played that well, I would be very proud."
        },
        {
          "quem": "mia",
          "t": "I would clap the loudest. What would you play first?"
        },
        {
          "quem": "leo",
          "t": "If I could choose, I would play something slow and happy."
        },
        {
          "quem": "mia",
          "t": "Then I would sing along, even if I sang badly."
        }
      ],
      "perguntas": [
        {
          "q": "What would Mia do if she didn't have music?",
          "op": [
            "She would be bored",
            "She would learn the piano",
            "She would take the bus"
          ],
          "a": 0,
          "por": "If I didn't have music, I would be so bored."
        },
        {
          "q": "What would Leo learn if he had more free time?",
          "op": [
            "The piano",
            "The guitar",
            "A new language"
          ],
          "a": 0,
          "por": "If I had more free time, I would learn the piano."
        },
        {
          "q": "What would Mia do if Leo played a slow, happy song?",
          "op": [
            "She would sing along",
            "She would leave",
            "She would film it"
          ],
          "a": 0,
          "por": "Then I would sing along, even if I sang badly."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about imagined things. Hear it, then say it.",
      "frases": [
        {
          "t": "If I didn't have music, my day would be very quiet.",
          "img": "https://wolf-labs.pages.dev/p/56571bd6c7e9/thank-you-for-the-music/img/live-vitrola.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If I were you, I would learn the piano.",
          "img": "https://wolf-labs.pages.dev/p/56571bd6c7e9/thank-you-for-the-music/img/live-teclas.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What would you do if you had one hour on a stage?",
          "img": "https://wolf-labs.pages.dev/p/56571bd6c7e9/thank-you-for-the-music/img/live-palco.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + past, would + verb. Four quick ones.",
      "regra": "<b>if</b> + past simple, <b>would</b> + plain verb · no <b>would</b> in the if part · <b>If I were you</b>, I would …",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I won a prize, I would buy a guitar.",
          "aceita": [],
          "d": "Hint: <b>if</b> + past simple, then <b>would</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have a guitar, I would play.",
          "r": "If I had a guitar, I would play.",
          "aceita": [
            "If I had a guitar, I'd play."
          ],
          "d": "Hint: no <i>would</i> in the if part. Use the past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I have more money, I would buy a piano.",
          "r": "If I had more money, I would buy a piano.",
          "aceita": [
            "If I had more money, I'd buy a piano."
          ],
          "d": "Hint: with <i>would</i> in the second half, the if part is past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If he knew the song, he would sang it.",
          "r": "If he knew the song, he would sing it.",
          "aceita": [
            "If he knew the song, he'd sing it."
          ],
          "d": "Hint: after <i>would</i>, the plain verb. Never the past."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/56571bd6c7e9/thank-you-for-the-music/img/live-ilha.webp",
      "leg": "A record player on a quiet beach",
      "pede": "Look at the picture: a record player on a quiet beach at night. Write 2 or 3 sentences about what you <b>would</b> do if you had a day with no phone and only music. Use <b>If + past, would + verb</b>.",
      "ph": "If I had a day with only music, I would …",
      "ex": "If I had a day with only music, I would sit on the beach and listen to old songs. I would not check my phone. I would feel very calm."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "If you could play any instrument, which one would you choose?",
          "ph": "If I could play any instrument, I would choose …",
          "ex": "If I could play any instrument, I would choose the piano, because it sounds beautiful."
        },
        {
          "q": "What would your week be like if you didn't have music?",
          "ph": "If I didn't have music, my week would be …",
          "ex": "If I didn't have music, my week would be much slower, and I would be less motivated."
        }
      ]
    }
  }
};
