/* READ AND SELECT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: spotting real English words: y changes to i (happiness, beautiful), prefixes un- / im- / d. B1: nenhum português. */
window.HW2 = {
  "id": "det-read-and-select",
  "titulo": "Read and Select",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "spotting real English words: y changes to i (happiness, beautiful), prefixes un- / im- / dis-, endings -ful / -ness / -ion, and common spelling traps (receive, knowledge)",
  "abrir": "Which English word is hard for you to spell?",
  "fecho": "<b>y → i</b>: happy → <b>happiness</b>, beauty → <b>beautiful</b>. Prefix: <b>un</b>happy, <b>im</b>possible. Ending: decide → decis<b>ion</b>. Spelling: <b>rec<u>ei</u>ve</b>, <b>knowle<u>dg</u>e</b>. Not sure? Leave it.",
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
      "sub": "Mia and Leo play a game with words. About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A long library, dark and quiet",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, let's play. I say a word, you tell me: real or fake."
        },
        {
          "quem": "leo",
          "t": "Okay. Go."
        },
        {
          "quem": "mia",
          "t": "Happiness."
        },
        {
          "quem": "leo",
          "t": "Real. Happy, then y changes to i, then ness."
        },
        {
          "quem": "mia",
          "t": "Good. Now, unpossible."
        },
        {
          "quem": "leo",
          "t": "Fake. The real word is impossible, with im."
        },
        {
          "quem": "mia",
          "t": "Nice. What about knowledge?"
        },
        {
          "quem": "leo",
          "t": "Real, but I always forget the d. It's k, n, o, w, l, e, d, g, e."
        },
        {
          "quem": "mia",
          "t": "Perfect. And if you are not sure about a word?"
        },
        {
          "quem": "leo",
          "t": "I leave it. A fake word that I tap costs more points."
        }
      ],
      "perguntas": [
        {
          "q": "Why is happiness spelled with an i?",
          "op": [
            "The y changes to i before ness",
            "It is a fake word",
            "It has a silent letter"
          ],
          "a": 0,
          "por": "Happy, then y changes to i, then ness."
        },
        {
          "q": "What is the real word for unpossible?",
          "op": [
            "Dispossible",
            "Impossible",
            "Inpossible"
          ],
          "a": 1,
          "por": "The real word is impossible, with im."
        },
        {
          "q": "What does Leo do when he is not sure?",
          "op": [
            "He taps it anyway",
            "He asks for more time",
            "He leaves it"
          ],
          "a": 2,
          "por": "I leave it. A fake word that I tap costs more points."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "Happy changes to happiness, with an i.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The real word is impossible, not unpossible.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "When I am not sure about a word, I leave it.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Spot the fake word and fix it. Four quick ones.",
      "regra": "<b>y → i</b> (happiness) · <b>im-</b> before p · <b>-ion</b> for decide · <b>ei</b> in receive · the letters of <b>knowledge</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Fake words use real pieces in the wrong place.",
          "aceita": [],
          "d": "Hint: start with <b>Fake words</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is not real English.",
          "mostra": "I want more happyness in my life.",
          "r": "I want more happiness in my life.",
          "aceita": [],
          "d": "Hint: <b>y → i</b> before -ness."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is not real English.",
          "mostra": "I recieve many emails every day.",
          "r": "I receive many emails every day.",
          "aceita": [],
          "d": "Hint: <b>receive</b>: the e comes before the i."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is not real English.",
          "mostra": "She has a lot of knowlege about plants.",
          "r": "She has a lot of knowledge about plants.",
          "aceita": [],
          "d": "Hint: know-le-<b>dg</b>-e: do not forget the d."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-capa.webp",
      "leg": "Reading glasses on a dark desk, next to a lamp",
      "pede": "Look at the picture: reading glasses on a dark desk. Write 2 or 3 sentences with real words from the lesson: <b>happiness</b>, <b>knowledge</b>, <b>impossible</b>, <b>receive</b> or <b>beautiful</b>. Check every letter.",
      "ph": "Reading gives me …",
      "ex": "Reading gives me a lot of knowledge. A quiet evening with a good book is real happiness for me, and it is impossible to be bored."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which word families do you know? Say one, like happy and happiness.",
          "ph": "…, and the noun is …",
          "ex": "Decide, and the noun is decision."
        },
        {
          "q": "What is your trick for spelling a hard word?",
          "ph": "My trick is to …",
          "ex": "My trick is to say the word slowly, letter by letter, in my head."
        }
      ]
    }
  }
};
