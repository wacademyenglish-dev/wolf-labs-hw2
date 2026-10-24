/* THRILLER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: the present simple to tell a fun story. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "thriller",
  "titulo": "Thriller",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6b1fc5791cd3/thriller/img/live-casa.webp",
  "alvo": "the present simple to tell a fun story (you hear, the door opens, they don't stop, Does she open it?): -s for he, she, it; first, then, suddenly; no is + verb; doesn't + plain verb",
  "abrir": "Do you like Halloween? What do people do?",
  "fecho": "To tell a story now, use the present simple. <b>He / she / it</b> + <b>-s</b>: <i>The door opens.</i> Plural: no -s: <i>The lights go out.</i> No: <i>doesn't / don't</i> + plain verb. Order words: <b>first</b>, <b>then</b>, <b>suddenly</b>.",
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
      "sub": "Mia tells Leo a funny Halloween story. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/6b1fc5791cd3/thriller/img/live-cinema.webp",
      "leg": "A dark cinema with red seats",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading a Halloween story. It's fun!"
        },
        {
          "quem": "leo",
          "t": "Tell me! What happens?"
        },
        {
          "quem": "mia",
          "t": "First, a girl walks to a big old house. The house is dark."
        },
        {
          "quem": "leo",
          "t": "Then what? Does she open the door?"
        },
        {
          "quem": "mia",
          "t": "Yes, she does. The door opens slowly and the lights go out."
        },
        {
          "quem": "leo",
          "t": "Oh no! What does she hear?"
        },
        {
          "quem": "mia",
          "t": "She hears music! Suddenly everybody dances, and the girl dances too."
        },
        {
          "quem": "leo",
          "t": "Ha! It's a party, not a scary story."
        },
        {
          "quem": "mia",
          "t": "Yes! The ending is funny. The dancers don't stop until morning."
        }
      ],
      "perguntas": [
        {
          "q": "Where does the girl walk?",
          "op": [
            "To a big old house",
            "To a school",
            "To the cinema"
          ],
          "a": 0,
          "por": "A girl walks to a big old house."
        },
        {
          "q": "What does she hear?",
          "op": [
            "Music",
            "A dog",
            "Rain"
          ],
          "a": 0,
          "por": "She hears music!"
        },
        {
          "q": "How does the story end?",
          "op": [
            "With a funny party",
            "With a long sleep",
            "With a storm"
          ],
          "a": 0,
          "por": "The ending is funny. The dancers don't stop until morning."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a fun Halloween story. Hear it, then say it.",
      "frases": [
        {
          "t": "The door opens slowly and the lights go out.",
          "img": "https://wolf-labs.pages.dev/p/6b1fc5791cd3/thriller/img/live-casa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Suddenly she hears music, and everybody dances.",
          "img": "https://wolf-labs.pages.dev/p/6b1fc5791cd3/thriller/img/live-tv.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The dancers don't stop until the morning.",
          "img": "https://wolf-labs.pages.dev/p/6b1fc5791cd3/thriller/img/live-cinema.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-s or no -s? Four quick ones.",
      "regra": "<b>he / she / it</b> + <b>-s</b> · <b>they / the lights</b>: no -s · <b>doesn't / don't</b> + plain verb",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Then the old door opens very slowly.",
          "aceita": [],
          "d": "Dica: <b>door</b> é ele/ela/it: o verbo leva -s (opens)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The door open slowly at midnight.",
          "r": "The door opens slowly at midnight.",
          "aceita": [
            "The door opens slowly at midnight."
          ],
          "d": "Dica: o verbo de <b>the door</b> leva -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The lights goes out.",
          "r": "The lights go out.",
          "aceita": [],
          "d": "Dica: <b>the lights</b> é plural, então o verbo não leva -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She don't hear the music.",
          "r": "She doesn't hear the music.",
          "aceita": [
            "She does not hear the music."
          ],
          "d": "Dica: com <b>she</b>, a negativa é <b>doesn't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6b1fc5791cd3/thriller/img/live-casa.webp",
      "leg": "A big old house under a full moon",
      "pede": "Look at the picture: a big old house under a full moon. Write 2 or 3 sentences to tell a fun Halloween story. Tell it now. Use <b>first</b>, <b>then</b>, <b>suddenly</b>.",
      "ph": "First a girl … Then she … Suddenly …",
      "ex": "First a girl walks to the old house. Then she opens the door and hears music. Suddenly everybody dances."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do people do at a Halloween party in your town?",
          "ph": "People … Children …",
          "ex": "People wear costumes and dance. Children ask for candy."
        },
        {
          "q": "Tell a short fun story: what happens first, then, suddenly?",
          "ph": "First … Then … Suddenly …",
          "ex": "First my friend calls me. Then we go to a party. Suddenly we dance all night."
        }
      ]
    }
  }
};
