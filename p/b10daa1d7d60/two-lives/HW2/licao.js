/* TWO LIVES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: as ... as, not as ... as, twice / half as, the same as, different from. A2: dicas em português só nas notas (d). Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "two-lives",
  "titulo": "Two Lives",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b10daa1d7d60/two-lives/img/live-cidade.webp",
  "alvo": "as ... as (equal) · not as ... as (less, without saying worse) · just as ... as · twice / half as ... as · the same as · different from; if AS opens it, AS closes it: never as ... than, the same that, different of",
  "abrir": "How is your life now different from five years ago?",
  "fecho": "<b>as … as</b> = equal: <i>as cold as</i>. <b>not as … as</b> = less: <i>not as loud as</i>. A number in front: <b>twice / half as … as</b>. <b>The same as</b> · <b>different from</b>. If AS opens it, AS closes it: never <i>as big than</i>.",
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
      "sub": "Mia and Leo talk about her move to a small town. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/b10daa1d7d60/two-lives/img/live-cidade.webp",
      "leg": "A city window at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how is the new town? Is it as busy as the city?"
        },
        {
          "quem": "mia",
          "t": "No, it's not as busy as the city. It's much quieter."
        },
        {
          "quem": "leo",
          "t": "And the rent? Is it cheaper?"
        },
        {
          "quem": "mia",
          "t": "Yes! My rent is half as expensive as before. But my internet is not as fast as the old one."
        },
        {
          "quem": "leo",
          "t": "That sounds bad for your work."
        },
        {
          "quem": "mia",
          "t": "A little. But my job is the same as before, and my boss is just as kind."
        },
        {
          "quem": "leo",
          "t": "What about the people? Are they friendly?"
        },
        {
          "quem": "mia",
          "t": "They are just as friendly as people in the city. But my old friends are far away."
        },
        {
          "quem": "leo",
          "t": "So your life is very different from before."
        },
        {
          "quem": "mia",
          "t": "Very different. My days are twice as long now, because I don't need a bus."
        },
        {
          "quem": "leo",
          "t": "Twice as long? I want that life!"
        }
      ],
      "perguntas": [
        {
          "q": "What is half as expensive?",
          "op": [
            "Mia's rent",
            "Mia's internet",
            "Mia's bus"
          ],
          "a": 0,
          "por": "My rent is half as expensive as before."
        },
        {
          "q": "How is the internet in the new town?",
          "op": [
            "Not as fast as the old one",
            "Just as fast as the old one",
            "Twice as fast"
          ],
          "a": 0,
          "por": "My internet is not as fast as the old one."
        },
        {
          "q": "Why are Mia's days twice as long now?",
          "op": [
            "She doesn't need a bus",
            "She works less",
            "She wakes up late"
          ],
          "a": 0,
          "por": "My days are twice as long now, because I don't need a bus."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a new place. Hear it, then say it.",
      "frases": [
        {
          "t": "This street is not as loud as my old street.",
          "img": "https://wolf-labs.pages.dev/p/b10daa1d7d60/two-lives/img/live-cidade.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The coffee here is just as good as at home.",
          "img": "https://wolf-labs.pages.dev/p/b10daa1d7d60/two-lives/img/live-campo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The rent here is half as expensive as in the city.",
          "img": "https://wolf-labs.pages.dev/p/b10daa1d7d60/two-lives/img/live-fundo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "as ... as, not as ... as, twice. Four quick ones.",
      "regra": "<b>as … as</b> · <b>not as … as</b> · <b>twice / half as … as</b> · <b>the same as</b> · <b>different from</b> · never <i>as … than</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The new town is not as noisy as the city.",
          "aceita": [],
          "d": "Dica: <b>not as</b> + adjetivo + <b>as</b>: o AS abre e o AS fecha."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This town is different of the city.",
          "r": "This town is different from the city.",
          "aceita": [],
          "d": "Dica: o certo é <b>different from</b>, nunca 'different of'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The coffee here is as good than at home.",
          "r": "The coffee here is as good as at home.",
          "aceita": [
            "The coffee here is just as good as at home."
          ],
          "d": "Dica: se o AS abre, o AS fecha: <b>as good as</b>, não 'as good than'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The rent in the city is twice more expensive than here.",
          "r": "The rent in the city is twice as expensive as here.",
          "aceita": [],
          "d": "Dica: número na frente pede <b>twice as ... as</b>, nunca 'twice more ... than'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b10daa1d7d60/two-lives/img/live-fundo.webp",
      "leg": "Boxes in an empty room",
      "pede": "Look at the picture: moving boxes in an empty room. Write 2 or 3 sentences about a place you moved to, or a place you know. Use <b>not as … as</b>, <b>just as … as</b> or <b>different from</b>.",
      "ph": "My new place is not as … as …",
      "ex": "My new flat is not as big as my old one. The street is just as noisy. My life is different from before."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is your life now the same as five years ago? What is different?",
          "ph": "My life now is different from …",
          "ex": "My life now is different from five years ago. I work from home, and my days are not as busy."
        },
        {
          "q": "Think of two places you know. How are they different?",
          "ph": "… is not as … as …",
          "ex": "The beach is not as crowded as the city. The food is just as good."
        }
      ]
    }
  }
};
