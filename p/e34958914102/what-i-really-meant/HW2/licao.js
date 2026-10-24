/* WHAT I REALLY MEANT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: clefts to correct a misunderstanding. C1: nenhum português. Só as imagens live-* (já escuras). */
window.HW2 = {
  "id": "what-i-really-meant",
  "titulo": "What I Really Meant",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e34958914102/what-i-really-meant/img/live-capa.webp",
  "alvo": "cleft sentences to correct a misunderstanding: It wasn't X that / who…, it was Y; What I meant was…; All I said was…; The thing I regret is…; It's not that…, it's that…",
  "abrir": "Has anyone ever misunderstood something you said? What did they think?",
  "fecho": "<b>Put the spotlight where you want it.</b> <i>It wasn't the coffee that I criticized; it was the price.</i> <i>It wasn't Leo who wrote the post.</i> <i>What I meant was…</i> <i>All I said was…</i> <i>The thing I regret is…</i> <i>It's not that I dislike her; it's that I can't afford it.</i> Never <i>What I meant it was</i>, never <i>All what I said</i>.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo talk about a comment that went viral. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e34958914102/what-i-really-meant/img/live-conversa.webp",
      "leg": "A laptop and a coffee in a quiet booth",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, your comment about the new cafe went viral. People think you hate coffee!"
        },
        {
          "quem": "leo",
          "t": "I don't hate coffee. It wasn't the coffee that I criticized. It was the price."
        },
        {
          "quem": "mia",
          "t": "Then say what you meant."
        },
        {
          "quem": "leo",
          "t": "What I meant was that a small cup should not cost ten dollars."
        },
        {
          "quem": "mia",
          "t": "People also say you insulted the owner."
        },
        {
          "quem": "leo",
          "t": "All I did was ask for a smaller bill. It's not that I dislike her; it's that I can't afford it every day."
        },
        {
          "quem": "mia",
          "t": "And is there anything you regret?"
        },
        {
          "quem": "leo",
          "t": "The thing I regret is the word ridiculous. That was unfair."
        },
        {
          "quem": "mia",
          "t": "And who wrote the post that started it all?"
        },
        {
          "quem": "leo",
          "t": "It wasn't me who wrote it. It was my cousin."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo criticize?",
          "op": [
            "The price",
            "The coffee",
            "The owner"
          ],
          "a": 0,
          "por": "It wasn't the coffee that I criticized. It was the price."
        },
        {
          "q": "What did Leo ask the owner for?",
          "op": [
            "A smaller bill",
            "A free coffee",
            "A new cup"
          ],
          "a": 0,
          "por": "All I did was ask for a smaller bill."
        },
        {
          "q": "What does Leo regret?",
          "op": [
            "Using the word ridiculous",
            "Visiting the cafe",
            "Writing the post"
          ],
          "a": 0,
          "por": "The thing I regret is the word ridiculous."
        }
      ]
    },
    "out": {
      "sub": "Three sentences to set the record straight. Hear it, then say it.",
      "frases": [
        {
          "t": "It wasn't the coffee that I criticized; it was the price.",
          "img": "https://wolf-labs.pages.dev/p/e34958914102/what-i-really-meant/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What I meant was that a small cup should cost less.",
          "img": "https://wolf-labs.pages.dev/p/e34958914102/what-i-really-meant/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The thing I regret is the word ridiculous.",
          "img": "https://wolf-labs.pages.dev/p/e34958914102/what-i-really-meant/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Clefts to correct a misunderstanding. Four quick ones.",
      "regra": "<b>What I meant was…</b> · <b>All I said was…</b> · <b>It was X who / that…</b> · <b>The thing I regret is…</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The thing I regret is the title of the episode.",
          "aceita": [],
          "d": "Hint: <b>The thing I regret is</b> + the noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "What I meant it was that the cup is too small.",
          "r": "What I meant was that the cup is too small.",
          "aceita": [],
          "d": "Hint: no extra <b>it</b> after the what-clause."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It was my cousin which wrote the post.",
          "r": "It was my cousin who wrote the post.",
          "aceita": [
            "It was my cousin that wrote the post."
          ],
          "d": "Hint: for a person, use <b>who</b> (or <b>that</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "All what I said was one sentence.",
          "r": "All I said was one sentence.",
          "aceita": [],
          "d": "Hint: after <b>all</b>, no <i>what</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e34958914102/what-i-really-meant/img/live-conversa.webp",
      "leg": "A laptop and a coffee in a quiet booth",
      "pede": "Look at the picture: a laptop and a coffee in a quiet booth. Someone misunderstood something you said. Write 2 or 3 sentences to set the record straight. Use <b>It wasn't … that…</b>, <b>What I meant was…</b> or <b>All I said was…</b>",
      "ph": "What I meant was …",
      "ex": "What I meant was that I need more time. All I said was one sentence. It's not that I dislike the project; it's that I'm tired."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Has anyone misunderstood you? What did they think, and what did you really mean?",
          "ph": "They thought …, but what I meant was …",
          "ex": "My friend thought I was angry, but all I said was that I was busy."
        },
        {
          "q": "Correct this: 'You never help at home.'",
          "ph": "It's not that I … it's that …",
          "ex": "It's not that I never help; it's that I help at different times."
        }
      ]
    }
  }
};
