/* WHOSE IS THIS? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: 's, whose, mine/yours/his/hers. A1: dicas em português só nas notas (d). Alvo = possessivos: HW2_ARTIGO_CONTA. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "whose-is-this",
  "titulo": "Whose Is This?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d5cfe6e3a34b/whose-is-this/img/live-bg-drawer.webp",
  "alvo": "possession: owner + 's (Ana's umbrella), the Lees' for a plural owner, Whose ...?; mine, yours, his, hers, ours, theirs alone, and my, your, his, her, our, their before a thing",
  "abrir": "What is in your bag? Whose is it?",
  "fecho": "<b>Owner + 's</b> + thing: <i>Ana's umbrella.</i> Alone: <b>mine, yours, his, hers, ours, theirs</b>. Before a thing: <b>my, your, her</b> ... Ask: <b>Whose</b> notebook is this?",
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
      "sub": "Mia and Leo with a drawer of lost things at the office. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/d5cfe6e3a34b/whose-is-this/img/live-bg-drawer.webp",
      "leg": "The drawer of lost things",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, whose umbrella is this?"
        },
        {
          "quem": "leo",
          "t": "It's Ana's umbrella. It's black."
        },
        {
          "quem": "mia",
          "t": "And these keys? Are they yours?"
        },
        {
          "quem": "leo",
          "t": "No, they aren't mine. They're Paulo's."
        },
        {
          "quem": "mia",
          "t": "Whose notebook is this?"
        },
        {
          "quem": "leo",
          "t": "It's mine! My name is inside."
        },
        {
          "quem": "mia",
          "t": "Good. And this mug?"
        },
        {
          "quem": "leo",
          "t": "It's hers. Sonia's. Look, it says SONIA."
        },
        {
          "quem": "mia",
          "t": "The two cups on the shelf are the Lees'."
        },
        {
          "quem": "leo",
          "t": "Yes, they're theirs. Put them in the Lees' box."
        }
      ],
      "perguntas": [
        {
          "q": "Whose umbrella is it?",
          "op": [
            "Ana's",
            "Paulo's",
            "Leo's"
          ],
          "a": 0,
          "por": "It's Ana's umbrella."
        },
        {
          "q": "Whose keys are they?",
          "op": [
            "Paulo's",
            "Leo's",
            "Sonia's"
          ],
          "a": 0,
          "por": "They're Paulo's."
        },
        {
          "q": "Whose mug is it?",
          "op": [
            "Sonia's",
            "Ana's",
            "The Lees'"
          ],
          "a": 0,
          "por": "It's hers. Sonia's."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about things. Hear it, then say it.",
      "frases": [
        {
          "t": "It's Ana's umbrella.",
          "img": "https://wolf-labs.pages.dev/p/d5cfe6e3a34b/whose-is-this/img/live-bg-drawer.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The keys are his.",
          "img": "https://wolf-labs.pages.dev/p/d5cfe6e3a34b/whose-is-this/img/live-desk2.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The notebook is mine.",
          "img": "https://wolf-labs.pages.dev/p/d5cfe6e3a34b/whose-is-this/img/live-desk1.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "'s, whose, mine, hers. Four quick ones.",
      "regra": "<b>Owner + 's</b> + thing · <b>mine, yours, his, hers, ours, theirs</b> stand alone · <b>Whose</b> notebook is this?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Whose notebook is this?",
          "aceita": [],
          "d": "Dica: pergunta: <b>Whose</b> + a coisa + is this?"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It's Ana umbrella.",
          "r": "It's Ana's umbrella.",
          "aceita": [
            "It is Ana's umbrella."
          ],
          "d": "Dica: o dono vem com <b>'s</b>: <b>Ana's</b> umbrella."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Is this Paulo's pen? Yes, it's him.",
          "r": "Is this Paulo's pen? Yes, it's his.",
          "aceita": [
            "Is this Paulo's pen? Yes, it is his."
          ],
          "d": "Dica: resposta curta sobre dono: <b>his</b>, não 'him'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "These keys are my.",
          "r": "These keys are mine.",
          "aceita": [
            "These keys are mine."
          ],
          "d": "Dica: sem a coisa depois, é <b>mine</b>. <b>My</b> precisa de uma coisa: my keys."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d5cfe6e3a34b/whose-is-this/img/live-bg-drawer.webp",
      "leg": "A drawer of lost things",
      "pede": "Look at the picture: a drawer of lost things. Write 2 or 3 sentences: three things and whose they are. Use <b>'s</b> and <b>mine, his, hers</b>.",
      "ph": "The umbrella is …",
      "ex": "The umbrella is Ana's. The keys are his. The notebook is mine."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in your bag today? Is everything yours?",
          "ph": "In my bag I have my … and my …'s …",
          "ex": "I have my phone, my keys and my sister's umbrella. The umbrella is hers."
        },
        {
          "q": "Whose room is the biggest in your home?",
          "ph": "The biggest room is …",
          "ex": "My parents' room is the biggest. Mine is small."
        }
      ]
    }
  }
};
