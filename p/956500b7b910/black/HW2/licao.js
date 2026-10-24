/* BLACK · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: wish / if only / hope. Linha de música: NENHUM verso aqui; o listening é diálogo original, cena neutra. B2: nenhum português. Só imagens live-* escuras (lum < 50); sem cenas de perda (regra 9). */
window.HW2 = {
  "id": "black",
  "titulo": "Black",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/956500b7b910/black/img/live-capa.webp",
  "alvo": "wish / if only: wish + past for now (I wish I had time), wish + had + participle for the past (I wish I had started), wish + person + would for someone else's habit; hope (not wish) for real possibilities (I hope you have a good trip)",
  "abrir": "What is one small thing you wish were different in your week?",
  "fecho": "<b>I wish</b> + past = I want <i>now</i> to be different: <i>I wish I had more time.</i> <b>I wish I had</b> + participle = the past: <i>I wish I had started years ago.</i> <b>I wish you would</b> = you want someone else to change. For something that can really happen, <b>hope</b>: <i>I hope you have a good trip</i> (never <i>I wish you have</i>).",
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
      "sub": "Mia and Leo talk about Leo's first painting class. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/956500b7b910/black/img/live-janela.webp",
      "leg": "Afternoon light in the studio",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how was your first painting class?"
        },
        {
          "quem": "leo",
          "t": "Fun, but my painting looks like a potato. I wish I were better at drawing."
        },
        {
          "quem": "mia",
          "t": "Everybody starts like that. I wish I had started classes years ago."
        },
        {
          "quem": "leo",
          "t": "Why didn't you?"
        },
        {
          "quem": "mia",
          "t": "I was always busy. If only I had more free time now!"
        },
        {
          "quem": "leo",
          "t": "The teacher is great, but I wish she would talk a little slower."
        },
        {
          "quem": "mia",
          "t": "Ask her. And I wish you would stop calling your painting a potato!"
        },
        {
          "quem": "leo",
          "t": "OK, OK. Are you coming next week?"
        },
        {
          "quem": "mia",
          "t": "I hope I can. I have a meeting on Thursday, but I hope it finishes early."
        },
        {
          "quem": "leo",
          "t": "I hope so too. And I wish I had bought better brushes."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo wish about himself?",
          "op": [
            "That he were better at drawing",
            "That he had more time",
            "That the class were longer"
          ],
          "a": 0,
          "por": "I wish I were better at drawing."
        },
        {
          "q": "What does Leo wish the teacher would do?",
          "op": [
            "Talk a little slower",
            "Give less homework",
            "Start earlier"
          ],
          "a": 0,
          "por": "I wish she would talk a little slower."
        },
        {
          "q": "What does Mia hope?",
          "op": [
            "That her meeting finishes early",
            "That the class is cancelled",
            "That Leo buys new brushes"
          ],
          "a": 0,
          "por": "I have a meeting on Thursday, but I hope it finishes early."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about wishes and hopes. Hear it, then say it.",
      "frases": [
        {
          "t": "I wish I had more time to paint.",
          "img": "https://wolf-labs.pages.dev/p/956500b7b910/black/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I wish I had started these classes years ago.",
          "img": "https://wolf-labs.pages.dev/p/956500b7b910/black/img/live-janela.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I hope you have a lovely weekend.",
          "img": "https://wolf-labs.pages.dev/p/956500b7b910/black/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "wish or hope? Four quick ones.",
      "regra": "<b>wish</b> + past = now · <b>wish</b> + <b>had</b> + participle = before · <b>wish</b> + person + <b>would</b> · <b>hope</b> for what can really happen.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I wish I were better at drawing.",
          "aceita": [],
          "d": "Hint: <b>wish</b> + past for now: <i>I were</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I wish I have more free time.",
          "r": "I wish I had more free time.",
          "aceita": [],
          "d": "Hint: <b>wish</b> about now takes the past: <i>had</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I wish you have a good trip.",
          "r": "I hope you have a good trip.",
          "aceita": [],
          "d": "Hint: a real possibility for someone is <b>hope</b>, not <i>wish</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I wish I studied art when I was young.",
          "r": "I wish I had studied art when I was young.",
          "aceita": [
            "I wish I'd studied art when I was young."
          ],
          "d": "Hint: a wish about the past takes <b>had</b> + participle: <i>had studied</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/956500b7b910/black/img/live-janela.webp",
      "leg": "Late afternoon light through a window",
      "pede": "Look at the picture: late afternoon light through a window. Write 2 or 3 sentences about your daily life: something you wish were different now, something you wish you had done, or something you hope for. Use <b>I wish …</b>, <b>If only …</b> or <b>I hope …</b>.",
      "ph": "I wish I … I wish I had … I hope …",
      "ex": "I wish I lived closer to the beach. I wish I had learned to play the piano. I hope I can travel next year."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you wish you could do better? Why?",
          "ph": "I wish I could …",
          "ex": "I wish I could cook better. My rice is always too wet."
        },
        {
          "q": "What do you wish someone at home or at work would stop doing?",
          "ph": "I wish my … would …",
          "ex": "I wish my colleague would stop eating at his desk. The office smells like garlic all afternoon."
        }
      ]
    }
  }
};
