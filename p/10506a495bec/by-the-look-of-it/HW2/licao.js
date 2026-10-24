/* BY THE LOOK OF IT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: looks/sounds/seems (+ like). B1: nenhum português na lição. Falas originais, nada do filme. */
window.HW2 = {
  "id": "by-the-look-of-it",
  "titulo": "By the Look of It",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/10506a495bec/by-the-look-of-it/img/live-capa.webp",
  "alvo": "looks / sounds / seems + adjective (looks expensive) vs looks / sounds / seems like + noun or full sentence (looks like a trap, sounds like it's raining); by the look of it",
  "abrir": "What does your neighborhood sound like at night?",
  "fecho": "<b>Looks / sounds / seems + adjective</b>: <i>It looks expensive.</i> Add <b>like</b> for a noun or a full sentence: <i>It looks like a trap. It sounds like it's raining.</i> <b>By the look of it</b> = judging by what I can see.",
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
      "sub": "Mia and Leo at a quiet dinner. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/10506a495bec/by-the-look-of-it/img/live-mesa.webp",
      "leg": "A dark restaurant",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, close your eyes. What can you hear?"
        },
        {
          "quem": "leo",
          "t": "It sounds like rain. No, wait. It sounds like somebody frying onions."
        },
        {
          "quem": "mia",
          "t": "Good ear. And I can see the room. It looks expensive."
        },
        {
          "quem": "leo",
          "t": "I believe you. The voices sound calm and polite."
        },
        {
          "quem": "mia",
          "t": "The waiter seems nervous, though."
        },
        {
          "quem": "leo",
          "t": "Nervous? It seems like he is hiding something."
        },
        {
          "quem": "mia",
          "t": "Or maybe he only seems nervous because the manager is watching him."
        },
        {
          "quem": "leo",
          "t": "The manager looks like a very serious man."
        },
        {
          "quem": "mia",
          "t": "By the look of it, yes. But his voice sounds like a friendly uncle."
        },
        {
          "quem": "leo",
          "t": "Then don't judge him too fast. The soup looks like tomato, and it smells great."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo hear first?",
          "op": [
            "Somebody frying onions",
            "Rain",
            "A phone"
          ],
          "a": 0,
          "por": "It sounds like somebody frying onions."
        },
        {
          "q": "What does the room look like, according to Mia?",
          "op": [
            "Expensive",
            "Cheap",
            "Empty"
          ],
          "a": 0,
          "por": "I can see the room. It looks expensive."
        },
        {
          "q": "How does the waiter seem?",
          "op": [
            "Nervous",
            "Angry",
            "Bored"
          ],
          "a": 0,
          "por": "The waiter seems nervous, though."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "It sounds like rain, but it looks like a clear night.",
          "img": "https://wolf-labs.pages.dev/p/10506a495bec/by-the-look-of-it/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The room looks expensive, and the waiter seems nervous.",
          "img": "https://wolf-labs.pages.dev/p/10506a495bec/by-the-look-of-it/img/live-bairro.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It seems like he is hiding something.",
          "img": "https://wolf-labs.pages.dev/p/10506a495bec/by-the-look-of-it/img/live-igreja.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "With like or without? Four quick ones.",
      "regra": "<b>looks / sounds / seems</b> + adjective, no like · <b>like</b> + a noun · <b>like</b> + a full sentence · he <b>looks</b>, she <b>sounds</b>, it <b>seems</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It sounds like somebody is frying onions.",
          "aceita": [],
          "d": "Hint: <b>sounds like</b> + a full sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The room looks like expensive.",
          "r": "The room looks expensive.",
          "aceita": [],
          "d": "Hint: before an adjective there is no <b>like</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "It sounds somebody is cooking.",
          "r": "It sounds like somebody is cooking.",
          "aceita": [
            "It sounds like somebody's cooking."
          ],
          "d": "Hint: before a full sentence, <b>like</b> is needed: <b>sounds like</b> + sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The manager seem very serious.",
          "r": "The manager seems very serious.",
          "aceita": [],
          "d": "Hint: he, she, it, the manager: <b>seems</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/10506a495bec/by-the-look-of-it/img/live-igreja.webp",
      "leg": "A quiet room, late",
      "pede": "Look at the picture: a room in the dark. Write 2 or 3 sentences: what it looks like, what it sounds like, how the people seem. Use <b>looks / sounds / seems</b> with or without <b>like</b>.",
      "ph": "The room looks … It sounds like …",
      "ex": "The room looks quiet and old. It sounds like somebody is whispering, and it seems like nobody wants to leave."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How can you tell when a friend is upset?",
          "ph": "She looks … / Her voice sounds …",
          "ex": "She looks tired, and her voice sounds flat. It seems like something is wrong."
        },
        {
          "q": "Look at your street from the window. What does it look and sound like?",
          "ph": "It looks … It sounds like …",
          "ex": "It looks empty, and it sounds like a motorcycle far away. By the look of it, it's going to rain."
        }
      ]
    }
  }
};
