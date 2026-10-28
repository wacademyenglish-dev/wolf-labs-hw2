/* FILL IN THE BLANKS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: completing a word from the clue around the gap: can/could + base verb, is/was + -ed, a lot. B1: nenhum português. */
window.HW2 = {
  "id": "det-fill-in-the-blanks",
  "titulo": "Fill in the Blanks",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "completing a word from the clue around the gap: can/could + base verb, is/was + -ed, a lot of + noun, how? = adverb -ly, look forward to + -ing",
  "abrir": "What do you do when you forget a word in English?",
  "fecho": "The clue is <b>around</b> the gap. <b>Could you</b> + base verb · <b>is / was</b> + -ed (closed, delayed) · <b>a lot of</b> + noun · <b>how?</b> → -ly (clearly) · <b>look forward to</b> + -ing.",
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
      "sub": "Mia and Leo practice in a quiet cafe. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A candle and a cup on a dark table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, try this one. The shop is clo, and the rest of the word is missing."
        },
        {
          "quem": "leo",
          "t": "Hmm. The shop is... after is, I think a verb in ed. Closed."
        },
        {
          "quem": "mia",
          "t": "Right. How did you know?"
        },
        {
          "quem": "leo",
          "t": "The words around the gap. Is, then ed. That's the clue."
        },
        {
          "quem": "mia",
          "t": "Now this one. She explained it very cl, blank."
        },
        {
          "quem": "leo",
          "t": "Explained how? That's an adverb. Clearly."
        },
        {
          "quem": "mia",
          "t": "Great. And the last one: I'm looking forward to see, blank, you."
        },
        {
          "quem": "leo",
          "t": "Look forward to, then ing. Seeing."
        },
        {
          "quem": "mia",
          "t": "Perfect. Always ask: what kind of word goes here?"
        },
        {
          "quem": "leo",
          "t": "And I have twenty seconds, so I read the whole sentence first."
        }
      ],
      "perguntas": [
        {
          "q": "What kind of word goes after the shop is?",
          "op": [
            "A verb in -ed",
            "A noun",
            "An adverb"
          ],
          "a": 0,
          "por": "Is, then -ed: closed."
        },
        {
          "q": "Why is the answer clearly?",
          "op": [
            "It is a noun",
            "She explained it how?",
            "It is a name"
          ],
          "a": 1,
          "por": "Explained how? That is an adverb."
        },
        {
          "q": "What comes after look forward to?",
          "op": [
            "The base verb",
            "A verb in -ing",
            "A verb in -ed"
          ],
          "a": 1,
          "por": "Look forward to, then ing: seeing."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "The clue is always around the gap.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could you remind me to call the bank?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She explained the plan very clearly.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The clue around the gap. Four quick ones.",
      "regra": "<b>can / could</b> + base verb · <b>is / was</b> + -ed · <b>how?</b> → adverb -ly · <b>interested in</b> + -ing",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The shop is closed on Sundays.",
          "aceita": [],
          "d": "Hint: <b>is</b> + -ed form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Can you to open the window?",
          "r": "Can you open the window?",
          "aceita": [
            "Could you open the window?"
          ],
          "d": "Hint: <b>can</b> + base verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He explained it very clear.",
          "r": "He explained it very clearly.",
          "aceita": [],
          "d": "Hint: explained <b>how</b>? Use the adverb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm interested in learn English.",
          "r": "I'm interested in learning English.",
          "aceita": [
            "I am interested in learning English."
          ],
          "d": "Hint: after <b>in</b>, use -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "A candle and a cup on a dark table",
      "pede": "Look at the picture: a candle and a cup on a table in a quiet cafe. Write 2 or 3 sentences about it. Use at least one word in <b>-ed</b> (like <i>closed</i>), one adverb in <b>-ly</b> and <b>a lot of</b> + noun.",
      "ph": "The cafe is quiet …",
      "ex": "The cafe is closed, but a candle is still burning. A man is sitting very quietly with a cup of tea. He has a lot of time to think."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you looking forward to this month?",
          "ph": "I'm looking forward to …",
          "ex": "I'm looking forward to seeing my cousins at the weekend."
        },
        {
          "q": "What do you do very carefully in your day?",
          "ph": "I … very carefully.",
          "ex": "I check my emails very carefully before I send them."
        }
      ]
    }
  }
};
