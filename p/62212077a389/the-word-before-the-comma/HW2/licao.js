/* THE WORD BEFORE THE COMMA · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: first conditional (if + presente, will). B1: nenhum português. */
window.HW2 = {
  "id": "the-word-before-the-comma",
  "titulo": "The Word Before the Comma",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/62212077a389/the-word-before-the-comma/img/live-palco.webp",
  "alvo": "first conditional: if + present, will + plain verb; no will after if / when / unless / as soon as / until / in case; unless = if not; when = sure, if = maybe",
  "abrir": "What will you do this weekend if the weather is bad?",
  "fecho": "<b>If + present</b>, <b>will + plain verb</b>: <i>If it rains, we'll stay home.</i> No <b>will</b> after <b>if, when, unless, as soon as, until, in case</b>. <b>Unless</b> = if not: <i>We'll go unless it rains.</i> <b>When</b> is sure, <b>if</b> is maybe.",
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
      "sub": "Mia and Leo plan a concert in the park. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/62212077a389/the-word-before-the-comma/img/live-porta.webp",
      "leg": "A coat and an umbrella by the door",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the concert is on Saturday. The radar says it might rain."
        },
        {
          "quem": "mia",
          "t": "If it rains, we'll move the show inside."
        },
        {
          "quem": "leo",
          "t": "And what if the stage gets wet? Will the band play?"
        },
        {
          "quem": "mia",
          "t": "They won't play unless the stage is dry. That's their rule."
        },
        {
          "quem": "leo",
          "t": "When the doors open at six, I'll check the sound."
        },
        {
          "quem": "mia",
          "t": "Good. As soon as you finish, call me."
        },
        {
          "quem": "leo",
          "t": "I'll bring umbrellas in case it rains early."
        },
        {
          "quem": "mia",
          "t": "Great. If people arrive late, we'll wait until seven."
        },
        {
          "quem": "leo",
          "t": "And if it gets cold, I'll hand out blankets."
        },
        {
          "quem": "mia",
          "t": "Perfect. Sam will be happy if we have a plan B."
        }
      ],
      "perguntas": [
        {
          "q": "What will they do if it rains?",
          "op": [
            "Move the show inside",
            "Cancel the concert",
            "Wait until Sunday"
          ],
          "a": 0,
          "por": "If it rains, we'll move the show inside."
        },
        {
          "q": "When will the band play?",
          "op": [
            "When the stage is dry",
            "Even if the stage is wet",
            "Only when it rains"
          ],
          "a": 0,
          "por": "They won't play unless the stage is dry."
        },
        {
          "q": "Why will Leo bring umbrellas?",
          "op": [
            "In case it rains early",
            "Because the band asked",
            "Because it is cold"
          ],
          "a": 0,
          "por": "I'll bring umbrellas in case it rains early."
        }
      ]
    },
    "out": {
      "sub": "Three plans for Saturday. Hear it, then say it.",
      "frases": [
        {
          "t": "If it rains tomorrow, I'll stay home.",
          "img": "https://wolf-labs.pages.dev/p/62212077a389/the-word-before-the-comma/img/live-porta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We won't start unless everyone is here.",
          "img": "https://wolf-labs.pages.dev/p/62212077a389/the-word-before-the-comma/img/live-palco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Take a coat in case it gets cold.",
          "img": "https://wolf-labs.pages.dev/p/62212077a389/the-word-before-the-comma/img/live-prisma.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + present, will + plain verb. Four quick ones.",
      "regra": "<b>If + present</b>, <b>will + plain verb</b> · no <b>will</b> after if, when, unless, as soon as, until, in case · <b>unless</b> = if not.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If it rains, we will stay at home.",
          "aceita": [],
          "d": "Hint: after <b>if</b>, the present: <b>it rains</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If it will rain, I'll take an umbrella.",
          "r": "If it rains, I'll take an umbrella.",
          "aceita": [
            "If it rains, I will take an umbrella."
          ],
          "d": "Hint: no <b>will</b> right after <b>if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'll call you when I will arrive.",
          "r": "I'll call you when I arrive.",
          "aceita": [
            "I'll call you as soon as I arrive."
          ],
          "d": "Hint: no <b>will</b> after <b>when</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We'll go out unless it doesn't rain.",
          "r": "We'll go out unless it rains.",
          "aceita": [
            "We will go out unless it rains."
          ],
          "d": "Hint: <b>unless</b> already means <b>if not</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/62212077a389/the-word-before-the-comma/img/live-porta.webp",
      "leg": "A red coat and an umbrella by the door",
      "pede": "Look at the picture: a coat and an umbrella by the door. Write your plan B for the weekend in 2 or 3 sentences. Use <b>if</b>, <b>in case</b> or <b>unless</b>.",
      "ph": "If it rains, I'll …",
      "ex": "If it rains, I'll stay home and read. I'll take an umbrella in case it starts early. We'll go to the park unless it is too cold."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do this weekend if the weather is bad?",
          "ph": "If it …, I'll …",
          "ex": "If it rains, I'll invite my friends over and cook."
        },
        {
          "q": "What do you take with you in case something goes wrong?",
          "ph": "I take … in case …",
          "ex": "I always take a charger in case my phone dies."
        }
      ]
    }
  }
};
