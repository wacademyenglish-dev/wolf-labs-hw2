/* THE FRIDGE DOOR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: already / still / not ... yet. A1: dicas em português só nas notas (d). Só live-*. */
window.HW2 = {
  "id": "the-fridge-door",
  "titulo": "The Fridge Door",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/de6ed7700e64/the-fridge-door/img/live-cozinha.webp",
  "alvo": "already (yes, done, and early) · not ... yet (no, not done, but coming) · still (nothing changed): Is it here yet? / It is already here / It is still here",
  "abrir": "What is already finished in your house today?",
  "fecho": "<b>Already</b> = it is done (and early): <i>The milk is already finished.</i> <b>Not ... yet</b> = not done, but it is coming: <i>The bread is not here yet.</i> <b>Still</b> = nothing changed: <i>The soup is still hot.</i> A yes takes <b>already</b>; a no or a question takes <b>yet</b>.",
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
      "sub": "Mia and Leo in the kitchen. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/de6ed7700e64/the-fridge-door/img/live-mesa.webp",
      "leg": "A kitchen table in the evening",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, look at the fridge. The milk is already finished."
        },
        {
          "quem": "leo",
          "t": "Already? I bought it on Monday."
        },
        {
          "quem": "mia",
          "t": "I know. And the bread is not here yet. The delivery is late."
        },
        {
          "quem": "leo",
          "t": "Is it coming today?"
        },
        {
          "quem": "mia",
          "t": "I think so. I am still waiting for the message."
        },
        {
          "quem": "leo",
          "t": "Is the rice still in the cupboard?"
        },
        {
          "quem": "mia",
          "t": "Yes, it is still there. And the eggs are still good."
        },
        {
          "quem": "leo",
          "t": "Is dinner ready yet?"
        },
        {
          "quem": "mia",
          "t": "Not yet. The soup is still hot, so wait."
        },
        {
          "quem": "leo",
          "t": "OK. I am not hungry yet. I can wait."
        }
      ],
      "perguntas": [
        {
          "q": "What is already finished?",
          "op": [
            "The milk",
            "The rice",
            "The eggs"
          ],
          "a": 0,
          "por": "The milk is already finished."
        },
        {
          "q": "Is the bread here?",
          "op": [
            "Not yet",
            "Yes, already",
            "It is still hot"
          ],
          "a": 0,
          "por": "And the bread is not here yet."
        },
        {
          "q": "Why does Leo wait?",
          "op": [
            "The soup is still hot",
            "The rice is finished",
            "The bread is here"
          ],
          "a": 0,
          "por": "The soup is still hot, so wait."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a kitchen. Hear it, then say it.",
      "frases": [
        {
          "t": "The milk is already finished.",
          "img": "https://wolf-labs.pages.dev/p/de6ed7700e64/the-fridge-door/img/live-cozinha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The bread is not here yet.",
          "img": "https://wolf-labs.pages.dev/p/de6ed7700e64/the-fridge-door/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The soup is still hot.",
          "img": "https://wolf-labs.pages.dev/p/de6ed7700e64/the-fridge-door/img/live-sala.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "already, still or yet? Four quick ones.",
      "regra": "<b>already</b> = done · <b>not ... yet</b> = not done, but coming · <b>still</b> = nothing changed · <b>still</b> goes in the middle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My dinner is not ready yet.",
          "aceita": [],
          "d": "Dica: <b>not ... yet</b>: o <b>yet</b> fica no fim."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The soup is not ready already.",
          "r": "The soup is not ready yet.",
          "aceita": [
            "The soup isn't ready yet."
          ],
          "d": "Dica: um não pede <b>yet</b>, nunca <b>already</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The milk is yet finished.",
          "r": "The milk is already finished.",
          "aceita": [],
          "d": "Dica: um sim, e cedo, pede <b>already</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word is in the wrong place.",
          "mostra": "She is here still.",
          "r": "She is still here.",
          "aceita": [
            "She's still here."
          ],
          "d": "Dica: <b>still</b> fica no meio, depois do <b>is</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/de6ed7700e64/the-fridge-door/img/live-cozinha.webp",
      "leg": "A kitchen at night",
      "pede": "Look at the picture: a kitchen at night, with dishes in the sink. Write 2 or 3 sentences. Use <b>already</b>, <b>still</b> and <b>not ... yet</b>.",
      "ph": "The dishes are still … The coffee is already …",
      "ex": "The dishes are still in the sink. The coffee is already cold. The kitchen is not clean yet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you still waiting for?",
          "ph": "I am still waiting for …",
          "ex": "I am still waiting for my new phone."
        },
        {
          "q": "What is not ready yet in your week? And what is already finished?",
          "ph": "… is not ready yet. … is already …",
          "ex": "My homework is not ready yet. The shopping is already done."
        }
      ]
    }
  }
};
