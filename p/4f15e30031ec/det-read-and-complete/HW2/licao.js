/* READ AND COMPLETE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: completing a paragraph with a method: read first, think grammar (-s, -ed, -ing, plural, co. B1: nenhum português. */
window.HW2 = {
  "id": "det-read-and-complete",
  "titulo": "Read and Complete",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "completing a paragraph with a method: read first, think grammar (-s, -ed, -ing, plural, comparative -er), easy gaps first, check the American spelling (color, center)",
  "abrir": "When you read a long text, do you start at the first word or look at the whole page first?",
  "fecho": "A method for three minutes: <b>1</b> read the whole paragraph · <b>2</b> think grammar (-s, -ed, -ing, plural) · <b>3</b> easy gaps first · <b>4</b> check the spelling. In the test: <b>color</b>, <b>center</b>, <b>organize</b>.",
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
      "sub": "Mia coaches Leo before the paragraph task. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A long, dark hallway with warm lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I have three minutes for a whole paragraph. I'm scared."
        },
        {
          "quem": "mia",
          "t": "Don't start with the first gap. Read the whole paragraph first."
        },
        {
          "quem": "leo",
          "t": "Why? It takes time."
        },
        {
          "quem": "mia",
          "t": "Twenty seconds. Then you know the topic, and the missing words are easier."
        },
        {
          "quem": "mia",
          "t": "Next, think grammar. Is it a verb? Does it need an s, an e d, or an i n g?"
        },
        {
          "quem": "leo",
          "t": "And the easy gaps?"
        },
        {
          "quem": "mia",
          "t": "Do them first. Small words like each, also and this are free points."
        },
        {
          "quem": "leo",
          "t": "What do I do at the end?"
        },
        {
          "quem": "mia",
          "t": "Check your spelling. One wrong letter, and the gap is wrong."
        },
        {
          "quem": "leo",
          "t": "And the test uses American spelling, like color and center, right?"
        },
        {
          "quem": "mia",
          "t": "Exactly."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo do first?",
          "op": [
            "He types the first gap",
            "He reads the whole paragraph",
            "He checks the spelling"
          ],
          "a": 1,
          "por": "Read the whole paragraph first."
        },
        {
          "q": "Which gaps are free points?",
          "op": [
            "Small words like each and also",
            "The longest words",
            "The last gap"
          ],
          "a": 0,
          "por": "Small words like each, also and this are free points."
        },
        {
          "q": "Which spelling does the test use?",
          "op": [
            "British, like colour",
            "American, like color",
            "Any spelling"
          ],
          "a": 1,
          "por": "The test uses American spelling, like color and center."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "First, I read the whole paragraph.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Small words like each and also are free points.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I check the spelling in the last thirty seconds.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Grammar and spelling inside a paragraph. Four quick ones.",
      "regra": "<b>people</b> (no s) · <b>easier</b> (short adjective + -er) · <b>scientists say</b> (plural, no s) · <b>color</b> (American spelling)",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I read the whole paragraph before the first gap.",
          "aceita": [],
          "d": "Hint: start with <b>I read</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Many peoples sleep less than before.",
          "r": "Many people sleep less than before.",
          "aceita": [],
          "d": "Hint: <b>people</b> is already plural."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It is more easy to focus after a good night.",
          "r": "It is easier to focus after a good night.",
          "aceita": [],
          "d": "Hint: short adjective: <b>easy → easier</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Scientists says that sleep helps the brain.",
          "r": "Scientists say that sleep helps the brain.",
          "aceita": [],
          "d": "Hint: <b>scientists</b> is plural, so no -s on the verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "An open notebook and reading glasses",
      "pede": "Look at the picture: an open notebook and glasses. Write a short paragraph of 3 sentences about your study routine. Make the first sentence complete, then use <b>each</b>, <b>also</b> and one American spelling (<b>color</b>, <b>center</b> or <b>organize</b>).",
      "ph": "I study English …",
      "ex": "I study English every evening at my desk. Each night I organize my notes with a blue color. I also read one short text before bed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you organize your study time?",
          "ph": "I organize my time by …",
          "ex": "I organize my time by studying a little every morning, before work."
        },
        {
          "q": "What small words do you often forget in English?",
          "ph": "I often forget …",
          "ex": "I often forget words like each and also, so I write them on my notes."
        }
      ]
    }
  }
};
