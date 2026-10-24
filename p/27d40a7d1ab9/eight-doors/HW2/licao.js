/* THE EIGHT DOORS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: good at / quite good at / not very good at / haven't ... yet. B1: nenhum português. Só imagens live-* escuras. */
window.HW2 = {
  "id": "eight-doors",
  "titulo": "The Eight Doors",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/27d40a7d1ab9/eight-doors/img/live-corredor.webp",
  "alvo": "talking about your own abilities: good at / better at / not very good at (always AT, never in); soften a claim with I'd say I'm quite...; be honest with to be honest and although; can't (a real limit) versus haven't ... yet (still open)",
  "abrir": "What are you good at, and how do you know?",
  "fecho": "Ability takes <b>at</b>: <i>good at, better at, not very good at</i>. Soften a claim: <b>I’d say I’m quite…</b>. Be honest: <b>to be honest, although</b>. <b>Can’t</b> closes a door; <b>haven’t … yet</b> leaves it open.",
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
      "sub": "Mia and Leo fill in a volunteer form. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/27d40a7d1ab9/eight-doors/img/live-porta.webp",
      "leg": "An open door in a dark room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the community center wants volunteers. The form asks what I'm good at, and I have no idea what to write."
        },
        {
          "quem": "mia",
          "t": "Start with something real. What do people ask you for help with?"
        },
        {
          "quem": "leo",
          "t": "Directions, I guess. To be honest, I'd say I'm quite good at finding my way in new cities."
        },
        {
          "quem": "mia",
          "t": "Then write that. It sounds better than saying you're the best in the world."
        },
        {
          "quem": "leo",
          "t": "Fair. What about you? Are you good at cooking?"
        },
        {
          "quem": "mia",
          "t": "Not very good at it, although I'm getting better. I haven't made bread yet, because I haven't tried the new oven yet."
        },
        {
          "quem": "leo",
          "t": "So it's a not yet, not a can't."
        },
        {
          "quem": "mia",
          "t": "Exactly. A real can't is something like flying. And I'm terrible at drawing, but I'm better at it than last year."
        },
        {
          "quem": "leo",
          "t": "Better at it? What changed?"
        },
        {
          "quem": "mia",
          "t": "I practiced ten minutes every day. To be honest, I didn't expect it to work."
        },
        {
          "quem": "leo",
          "t": "OK, I'll write quite good at directions, and I haven't learned the guitar yet."
        },
        {
          "quem": "mia",
          "t": "Perfect. Honest, and still open."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo say he is quite good at?",
          "op": [
            "Finding his way in new cities",
            "Cooking for many people",
            "Playing the guitar"
          ],
          "a": 0,
          "por": "I'd say I'm quite good at finding my way in new cities."
        },
        {
          "q": "What has Mia not done yet?",
          "op": [
            "Tried the new oven",
            "Practiced drawing",
            "Written the form"
          ],
          "a": 0,
          "por": "I haven't tried the new oven yet."
        },
        {
          "q": "Why is Mia better at drawing than last year?",
          "op": [
            "She practiced ten minutes every day",
            "She bought new pencils",
            "She took a long course"
          ],
          "a": 0,
          "por": "I practiced ten minutes every day."
        }
      ]
    },
    "out": {
      "sub": "Three honest sentences about ability. Hear it, then say it.",
      "frases": [
        {
          "t": "I'd say I'm quite good at planning trips.",
          "img": "https://wolf-labs.pages.dev/p/27d40a7d1ab9/eight-doors/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "To be honest, I'm not very good at singing, although I like it.",
          "img": "https://wolf-labs.pages.dev/p/27d40a7d1ab9/eight-doors/img/live-porta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I haven't learned to play the guitar yet.",
          "img": "https://wolf-labs.pages.dev/p/27d40a7d1ab9/eight-doors/img/live-corredor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "good at, quite good at, haven't ... yet. Four quick ones.",
      "regra": "<b>good at</b> (never <i>good in</i>) · <b>I’d say I’m quite…</b> · <b>to be honest</b> · <b>haven’t … yet</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "To be honest, I'm not very good at drawing.",
          "aceita": [],
          "d": "Hint: ability takes <b>at</b>: <i>not very good at</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She is very good in math.",
          "r": "She is very good at math.",
          "aceita": [],
          "d": "Hint: ability takes <b>at</b>, never <i>in</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I didn't try the guitar yet.",
          "r": "I haven't tried the guitar yet.",
          "aceita": [
            "I have not tried the guitar yet."
          ],
          "d": "Hint: <b>yet</b> goes with <b>have / has</b> and the past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: soften the claim.",
          "mostra": "I am the best at cooking.",
          "r": "I'd say I'm quite good at cooking.",
          "aceita": [
            "I would say I am quite good at cooking."
          ],
          "d": "Hint: a careful claim: <b>I’d say I’m quite good at…</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/27d40a7d1ab9/eight-doors/img/live-corredor.webp",
      "leg": "A long corridor with many doors",
      "pede": "Look at the picture: a corridor with many doors. Imagine each door is a skill. Write 2 or 3 sentences: one thing you are good at and one thing you haven't tried yet. Use <b>good at</b>, <b>I'd say I'm quite…</b> or <b>haven't … yet</b>.",
      "ph": "I'd say I'm quite good at …",
      "ex": "I'd say I'm quite good at organizing things. To be honest, I'm not very good at singing, although I like it. I haven't tried painting yet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you good at at school? Are you still good at it?",
          "ph": "At school I was good at …",
          "ex": "At school I was good at history. I'd say I'm still quite good at it."
        },
        {
          "q": "What is one thing you can't do, but you haven't really tried yet?",
          "ph": "I haven't … yet.",
          "ex": "I haven't tried to cook Japanese food yet. To be honest, I'm a little afraid."
        }
      ]
    }
  }
};
