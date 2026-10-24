/* INTERACTIVE READING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: reading signposts: however, as a result, in other words, no longer. B1: nenhum português. Só as imagens live-* da própria aula (todas escuras). */
window.HW2 = {
  "id": "det-interactive-reading",
  "titulo": "Interactive Reading",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/0bc2791c0b68/det-interactive-reading/img/live-capa.webp",
  "alvo": "reading signposts (however, as a result, in other words, no longer, on the other hand) to complete a text, choose the missing sentence and the title",
  "abrir": "Think of a place near you that changed. What is different now?",
  "fecho": "Signposts tell you what comes next: <b>however</b> = contrast, <b>as a result</b> = consequence, <b>in other words</b> = the same idea again, <b>no longer</b> = a change. Use them to find the missing sentence, and choose a title that covers the whole text.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo practice a reading task. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/0bc2791c0b68/det-interactive-reading/img/live-capa.webp",
      "leg": "A reading nook at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I practiced a reading task today. The text was about a small town and its river."
        },
        {
          "quem": "leo",
          "t": "Was it hard?"
        },
        {
          "quem": "mia",
          "t": "At first, yes. The town used to ignore the river. However, ten years ago it started a clean-up project."
        },
        {
          "quem": "leo",
          "t": "However. So something changes there."
        },
        {
          "quem": "mia",
          "t": "Exactly. As a result, fish came back, and now families have picnics on the bank. In other words, the river became the heart of the town."
        },
        {
          "quem": "leo",
          "t": "And what was the task?"
        },
        {
          "quem": "mia",
          "t": "I had to choose the missing sentence. The gap came right after: Nobody wanted to walk there."
        },
        {
          "quem": "leo",
          "t": "Then the answer starts with a contrast, I think. Like: Now, however, the path is full of people."
        },
        {
          "quem": "mia",
          "t": "Yes! The word however gave it away. I also chose a title: A River Comes Back."
        },
        {
          "quem": "leo",
          "t": "Nice. Not How to Catch Fish, because that is only a detail."
        },
        {
          "quem": "mia",
          "t": "Right. A good title covers the whole text."
        }
      ],
      "perguntas": [
        {
          "q": "What happened ten years ago?",
          "op": [
            "The town started a clean-up project",
            "The fish left the river",
            "Families moved away"
          ],
          "a": 0,
          "por": "However, ten years ago it started a clean-up project."
        },
        {
          "q": "What helped Mia choose the missing sentence?",
          "op": [
            "The word however",
            "The length of the text",
            "A picture"
          ],
          "a": 0,
          "por": "The word however gave it away."
        },
        {
          "q": "Why is How to Catch Fish a bad title?",
          "op": [
            "It is only a detail, not the whole text",
            "It is too long",
            "It has a question"
          ],
          "a": 0,
          "por": "A good title covers the whole text."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with signposts. Hear it, then say it.",
      "frases": [
        {
          "t": "Nobody wanted to walk there. However, the path is full of people now.",
          "img": "https://wolf-labs.pages.dev/p/0bc2791c0b68/det-interactive-reading/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The river is clean again. As a result, fish came back to the town.",
          "img": "https://wolf-labs.pages.dev/p/0bc2791c0b68/det-interactive-reading/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "In other words, the river became the heart of the town.",
          "img": "https://wolf-labs.pages.dev/p/0bc2791c0b68/det-interactive-reading/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Signposts and small errors. Four quick ones.",
      "regra": "<b>however</b> = contrast · <b>as a result</b> = consequence · <b>in other words</b> = same idea · <b>no longer</b> = a change · <b>on the other hand</b> · <b>despite</b> + noun.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "As a result, the fish came back to the river.",
          "aceita": [],
          "d": "Hint: <b>as a result</b> opens the sentence and shows a consequence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "In the other hand, it is cheap.",
          "r": "On the other hand, it is cheap.",
          "aceita": [
            "On the other hand it is cheap."
          ],
          "d": "Hint: the fixed phrase is <b>on the other hand</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It is no more a quiet place.",
          "r": "It is no longer a quiet place.",
          "aceita": [],
          "d": "Hint: for a change, use <b>no longer</b>, not <i>no more</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Despite of the rain, they came.",
          "r": "Despite the rain, they came.",
          "aceita": [],
          "d": "Hint: <b>despite</b> never takes <i>of</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/0bc2791c0b68/det-interactive-reading/img/live-capa.webp",
      "leg": "A reading nook",
      "pede": "Look at the picture: a quiet reading nook. Write 2 or 3 sentences about a place that changed (a street, a shop, a park). Use <b>however</b>, <b>as a result</b> or <b>in other words</b>.",
      "ph": "My street used to be quiet. However, …",
      "ex": "My street used to be quiet. However, now there is a new bakery. As a result, many people walk there in the morning."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a place near you that changed. What is different now?",
          "ph": "… used to be …, but now …",
          "ex": "The old cinema near my house closed, but now there is a bakery."
        },
        {
          "q": "In one minute, what was the main idea of the last article or video you read or watched?",
          "ph": "The main idea was …",
          "ex": "The main idea was that sleeping well helps you learn."
        }
      ]
    }
  }
};
