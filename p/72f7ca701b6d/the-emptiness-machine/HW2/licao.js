/* THE EMPTINESS MACHINE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: voz passiva no presente e no passado (+ by). Linha de música: NENHUM verso aqui; o listening é diálogo original. Cena neutra (regra 9: nada de morte, luto, doença). B1: nenhum português. Cena: visita a uma fábrica de caixas de som. */
window.HW2 = {
  "id": "the-emptiness-machine",
  "titulo": "The Emptiness Machine",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/72f7ca701b6d/the-emptiness-machine/img/live-esteira.webp",
  "alvo": "the passive in the present and the past: is / are + third form (it is made), was / were + third form (it was built), + by for who did it; never drop be (it made in China), never for in place of by",
  "abrir": "What do you use every day that was made in another country?",
  "fecho": "The passive tells what is done <b>to</b> something: <b>is / are</b> + third form (<i>it is made here</i>), <b>was / were</b> + third form (<i>it was built in 1985</i>). Who did it comes after <b>by</b>, never <i>for</i>. Don't drop the <b>be</b>: <i>it is made in China</i>.",
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
      "sub": "Leo shows Mia around a speaker factory. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/72f7ca701b6d/the-emptiness-machine/img/live-esteira.webp",
      "leg": "Boxes on the belt",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Welcome to the factory, Mia. Every speaker in this shop is made in this building."
        },
        {
          "quem": "mia",
          "t": "Really? Are the boxes made here too?"
        },
        {
          "quem": "leo",
          "t": "No, the boxes are brought in by truck every Monday."
        },
        {
          "quem": "mia",
          "t": "And what happens on this belt?"
        },
        {
          "quem": "leo",
          "t": "Each speaker is tested by a machine, and then it is stamped with a number."
        },
        {
          "quem": "mia",
          "t": "Who was this place built by?"
        },
        {
          "quem": "leo",
          "t": "It was built by two brothers in 1985. At first, everything was done by hand."
        },
        {
          "quem": "mia",
          "t": "And now? Are the speakers still checked by people?"
        },
        {
          "quem": "leo",
          "t": "Yes. The last test is always done by a person. A machine can't hear everything."
        },
        {
          "quem": "mia",
          "t": "I like that. Where are they sent after the test?"
        },
        {
          "quem": "leo",
          "t": "They are packed in the warehouse and sent to music shops all over the country."
        }
      ],
      "perguntas": [
        {
          "q": "How are the boxes brought to the factory?",
          "op": [
            "By truck, every Monday",
            "By train, every day",
            "They are made in the building"
          ],
          "a": 0,
          "por": "No, the boxes are brought in by truck every Monday."
        },
        {
          "q": "Who was the factory built by?",
          "op": [
            "Two brothers, in 1985",
            "A big company, in 2005",
            "A team of engineers, last year"
          ],
          "a": 0,
          "por": "It was built by two brothers in 1985."
        },
        {
          "q": "What is always done by a person?",
          "op": [
            "The last test",
            "The packing",
            "The stamping"
          ],
          "a": 0,
          "por": "The last test is always done by a person."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the factory tour. Hear it, then say it.",
      "frases": [
        {
          "t": "Every speaker is tested by a machine before it leaves.",
          "img": "https://wolf-labs.pages.dev/p/72f7ca701b6d/the-emptiness-machine/img/live-esteira.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "This factory was built by two brothers in 1985.",
          "img": "https://wolf-labs.pages.dev/p/72f7ca701b6d/the-emptiness-machine/img/live-fabrica.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The boxes are packed in the warehouse and sent to shops.",
          "img": "https://wolf-labs.pages.dev/p/72f7ca701b6d/the-emptiness-machine/img/live-armazem.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "is made, was built, by. Four quick ones.",
      "regra": "<b>is / are</b> + third form (now, always) · <b>was / were</b> + third form (past) · <b>by</b> + who did it · never drop the <b>be</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The first guitars were made by hand in a small room.",
          "aceita": [],
          "d": "Hint: <b>were</b> + third form (<i>made</i>), then <b>by hand</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "This phone made in China.",
          "r": "This phone is made in China.",
          "aceita": [
            "This phone was made in China."
          ],
          "d": "Hint: the passive needs <b>be</b>: <i>is made</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The bridge was build in 1990.",
          "r": "The bridge was built in 1990.",
          "aceita": [],
          "d": "Hint: after <b>was</b>, use the third form: <i>built</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The Mona Lisa was painted for Leonardo da Vinci.",
          "r": "The Mona Lisa was painted by Leonardo da Vinci.",
          "aceita": [],
          "d": "Hint: the person who did it comes after <b>by</b>, not <i>for</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/72f7ca701b6d/the-emptiness-machine/img/live-armazem.webp",
      "leg": "A long warehouse full of boxes",
      "pede": "Look at the picture: a long warehouse full of boxes. Choose something you use every day (a phone, a shirt, a guitar). Write 2 or 3 sentences: where it <b>is made</b>, how it <b>was made</b>, and who it <b>was made by</b>.",
      "ph": "My … was made in …",
      "ex": "My sneakers were made in Vietnam. They were designed in the USA and sent to Brazil by ship."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is made or grown in your city or region?",
          "ph": "In my region, … is made / grown …",
          "ex": "In my region, shoes are made in small factories, and a lot of coffee is grown."
        },
        {
          "q": "Think of a famous building, song or book. Who was it made by?",
          "ph": "… was built / written / designed by …",
          "ex": "The Cathedral of Brasília was designed by Oscar Niemeyer."
        }
      ]
    }
  }
};
