/* THE WEAKEST WORD · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: condições (provided that, as long as, unless, supposing). B2: nenhum português na lição. */
window.HW2 = {
  "id": "the-weakest-word",
  "titulo": "The Weakest Word",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/958cde458f5a/the-weakest-word/img/live-caneta.webp",
  "alvo": "conditions in a deal: provided that / on condition that (the gate), as long as (the clock), unless (if not, no second not), supposing (a what-if that obliges nobody); present tense after all of them, never will",
  "abrir": "Think of a deal in your life: a rent, a job, a favor. What was the condition?",
  "fecho": "Four small words decide who is on the hook. <b>provided that / on condition that</b>: a gate, something has to happen first. <b>as long as</b>: a clock, something has to stay true. <b>unless</b>: if not, so never a second not. <b>supposing</b>: a what-if that obliges nobody. After all of them, the future goes in the present: <i>provided that you sign</i>, never <i>you will sign</i>.",
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
      "sub": "Mia and Leo close a lease. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/958cde458f5a/the-weakest-word/img/live-papel.webp",
      "leg": "The contract on the table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, here are the conditions for the lease. Number one: we will sign provided that the roof is repaired in May."
        },
        {
          "quem": "leo",
          "t": "Fine. The roofer starts next week. What else?"
        },
        {
          "quem": "mia",
          "t": "The rent stays the same as long as the warehouse stays open six days a week."
        },
        {
          "quem": "leo",
          "t": "That is normal for us. Six days is fine."
        },
        {
          "quem": "mia",
          "t": "Number three. We won't pay the deposit unless the inspector approves the electrics."
        },
        {
          "quem": "leo",
          "t": "Understood. And if the inspector finds a problem?"
        },
        {
          "quem": "mia",
          "t": "Supposing he finds a problem, would you fix it at your own cost?"
        },
        {
          "quem": "leo",
          "t": "Supposing is not a promise, Mia. But yes, I would probably fix it."
        },
        {
          "quem": "mia",
          "t": "I want a promise on paper. Write it in: on condition that you pay for any electrical repair."
        },
        {
          "quem": "leo",
          "t": "All right. I will agree on condition that you extend the lease to three years."
        },
        {
          "quem": "mia",
          "t": "Done. Three years, provided that the rent stays the same."
        }
      ],
      "perguntas": [
        {
          "q": "When will Mia sign?",
          "op": [
            "When the roof is repaired",
            "When the inspector arrives",
            "After three years"
          ],
          "a": 0,
          "por": "We will sign provided that the roof is repaired in May."
        },
        {
          "q": "What does Mia say about the deposit?",
          "op": [
            "She won't pay it unless the inspector approves the electrics",
            "She will pay it today",
            "She wants no deposit"
          ],
          "a": 0,
          "por": "We won't pay the deposit unless the inspector approves the electrics."
        },
        {
          "q": "Which word does Leo say is not a promise?",
          "op": [
            "Supposing",
            "Unless",
            "As long as"
          ],
          "a": 0,
          "por": "Supposing is not a promise, Mia."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the call. Hear it, then say it.",
      "frases": [
        {
          "t": "We will sign provided that the roof is repaired in May.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/958cde458f5a/the-weakest-word/img/live-papel.webp"
        },
        {
          "t": "The rent stays the same as long as the warehouse stays open six days a week.",
          "au": "audio/say2.mp3",
          "img": "https://wolf-labs.pages.dev/p/958cde458f5a/the-weakest-word/img/live-caneta.webp"
        },
        {
          "t": "We won't pay the deposit unless the inspector approves the electrics.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/958cde458f5a/the-weakest-word/img/live-papel.webp"
        }
      ]
    },
    "focus": {
      "sub": "Gate, clock, not, empty. Four quick ones.",
      "regra": "<b>provided that</b> = a gate · <b>as long as</b> = a clock · <b>unless</b> = if not (no second not) · <b>supposing</b> = a what-if · after them: present tense, never <i>will</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will stay as long as my team stays with me.",
          "aceita": [],
          "d": "Hint: after <b>as long as</b> use the present: <b>stays</b>, not <i>will stay</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We sign provided that you will pay the deposit.",
          "r": "We sign provided that you pay the deposit.",
          "aceita": [
            "We sign provided you pay the deposit.",
            "We sign on condition that you pay the deposit."
          ],
          "d": "Hint: after <b>provided that</b> the future goes in the present: <b>pay</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: unless already means if not.",
          "mostra": "We cancel unless you don't confirm today.",
          "r": "We cancel unless you confirm today.",
          "aceita": [
            "We will cancel unless you confirm today."
          ],
          "d": "Hint: <b>unless</b> already says <i>not</i>. No second not."
        },
        {
          "tipo": "escreve",
          "t": "Write it with the clock word.",
          "mostra": "The price is fixed. Condition: the revenue stays above two million. (as long as)",
          "r": "The price holds as long as the revenue stays above two million.",
          "aceita": [
            "The price is fixed as long as the revenue stays above two million.",
            "The price stays the same as long as the revenue stays above two million."
          ],
          "d": "Hint: <b>as long as</b> + something that has to stay true. Present tense: <b>stays</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/958cde458f5a/the-weakest-word/img/live-papel.webp",
      "leg": "A term sheet on the table",
      "pede": "Look at the picture: a paper on a dark table, ready to sign. Write 2 or 3 conditions for a real agreement in your life. Use <b>provided that, as long as, unless</b> or <b>supposing</b>.",
      "ph": "I will agree provided that …",
      "ex": "I will lend my car provided that you fill the tank. You can stay as long as you keep the room clean. I won't sign unless I read every page."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Would you lend your car to a friend? On what condition?",
          "ph": "Provided that …",
          "ex": "Yes, provided that they fill the tank and call me when they arrive."
        },
        {
          "q": "What would make you leave your job, or keep it?",
          "ph": "I will stay as long as …",
          "ex": "I will stay as long as I can work from home on Fridays."
        }
      ]
    }
  }
};
