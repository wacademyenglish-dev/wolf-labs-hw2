/* ONLY THEN DID I SEE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: only + expression + inversion for the turning point of a story. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "only-then-did-i-see",
  "titulo": "Only Then Did I See",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/68193e656d46/only-then-did-i-see/img/live-capa.webp",
  "alvo": "only + expression + inversion for the turning point of a story: Only then did I see ...; Only later did I realize ...; Only after the show did I relax; Only by practising did I improve; Only when the lights went down did I ...; the inversion goes in the main clause",
  "abrir": "Tell me about a moment when you finally understood something.",
  "fecho": "Every story has a turning point. Mark it with <b>only</b>: <b>Only then did I see ...</b>, <b>Only later did I realize ...</b>, <b>Only by practising did I improve.</b> The auxiliary comes before the subject, in the main clause: <b>Only when the lights went down did I relax.</b>",
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
      "sub": "Mia and Leo, after a big presentation. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/68193e656d46/only-then-did-i-see/img/live-conversa.webp",
      "leg": "An empty theatre with rows of red seats",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "How did the talk go? You looked terrified at the start."
        },
        {
          "quem": "leo",
          "t": "I was. Only when the first slide appeared did I stop shaking."
        },
        {
          "quem": "mia",
          "t": "Really? From the third row, you looked completely calm."
        },
        {
          "quem": "leo",
          "t": "Only after the first joke did I realise the room was on my side."
        },
        {
          "quem": "mia",
          "t": "And before that?"
        },
        {
          "quem": "leo",
          "t": "I'd rehearsed for weeks, but only by speaking out loud did I find the right pace."
        },
        {
          "quem": "mia",
          "t": "Smart. So only then did you start to sound natural."
        },
        {
          "quem": "leo",
          "t": "Exactly. Only later did I notice I'd skipped a whole page."
        },
        {
          "quem": "mia",
          "t": "Nobody noticed, believe me."
        },
        {
          "quem": "leo",
          "t": "Only you would say that. Thanks, you're a good friend."
        }
      ],
      "perguntas": [
        {
          "q": "When did Leo stop shaking?",
          "op": [
            "When the first slide appeared",
            "After the last question",
            "Before he went on stage"
          ],
          "a": 0,
          "por": "Only when the first slide appeared did I stop shaking."
        },
        {
          "q": "How did Leo find the right pace?",
          "op": [
            "By speaking out loud",
            "By cutting the slides",
            "By asking Mia for help"
          ],
          "a": 0,
          "por": "Only by speaking out loud did I find the right pace."
        },
        {
          "q": "What did Leo notice later?",
          "op": [
            "He had skipped a page",
            "He had lost his notes",
            "He had forgotten the joke"
          ],
          "a": 0,
          "por": "Only later did I notice I'd skipped a whole page."
        }
      ]
    },
    "out": {
      "sub": "Three turning points, told with only. Hear it, then say it.",
      "frases": [
        {
          "t": "Only then did I understand how much the job meant to me.",
          "img": "https://wolf-labs.pages.dev/p/68193e656d46/only-then-did-i-see/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Only after the lights went down did the audience go quiet.",
          "img": "https://wolf-labs.pages.dev/p/68193e656d46/only-then-did-i-see/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Only by making mistakes did she learn to trust her voice.",
          "img": "https://wolf-labs.pages.dev/p/68193e656d46/only-then-did-i-see/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Only then, only when, only after. Four quick ones.",
      "regra": "<b>Only then did I see ...</b> · <b>Only when the lights went down did I relax.</b> · <b>Only by practising did I improve.</b> · inversion in the main clause, base verb after <b>did</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Only later did I understand what she meant.",
          "aceita": [],
          "d": "Hint: <b>Only later</b> + <b>did</b> + subject + base verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Only then I saw the truth.",
          "r": "Only then did I see the truth.",
          "aceita": [],
          "d": "Hint: after <b>only then</b>, the auxiliary comes first."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "Only when did the lights go down I relaxed.",
          "r": "Only when the lights went down did I relax.",
          "aceita": [],
          "d": "Hint: the inversion goes in the <b>main</b> clause, not after <b>when</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Only after the show did I realized it.",
          "r": "Only after the show did I realize it.",
          "aceita": [],
          "d": "Hint: after <b>did</b>, the verb goes back to the base form."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/68193e656d46/only-then-did-i-see/img/live-capa.webp",
      "leg": "A dressing-room mirror with warm bulbs",
      "pede": "Look at the picture: a dressing-room mirror lit by warm bulbs, just before a performance. Write 2 or 3 sentences about a turning point in your life, using <b>Only then did I ...</b>, <b>Only later did I ...</b> or <b>Only by ...ing did I ...</b>.",
      "ph": "Only then did I …",
      "ex": "Only when I stepped on stage did my fear disappear. Only later did I realise how much I had enjoyed it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When did you finally understand something that confused you for a long time?",
          "ph": "Only when … did I …",
          "ex": "Only when I moved abroad did I really understand the grammar I had studied for years."
        },
        {
          "q": "What is one skill you improved only by practising?",
          "ph": "Only by …ing did I …",
          "ex": "Only by speaking every day did I learn to relax in English."
        }
      ]
    }
  }
};
