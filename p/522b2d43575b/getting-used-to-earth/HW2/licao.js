/* GETTING USED TO EARTH · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: used to / be used to / get used to. Filme: falas originais, no mundo da aula, sem violência. B2: nenhum português. */
window.HW2 = {
  "id": "getting-used-to-earth",
  "titulo": "Getting Used to Earth",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/522b2d43575b/getting-used-to-earth/img/live-capa.webp",
  "alvo": "used to + verb (a finished past habit; didn't use to; Did you use to ...?) · be used to + -ing / noun (it is normal for you now) · get used to + -ing / noun (it is becoming normal); never used to + -ing, never be used to + plain verb, never didn't used to",
  "abrir": "What are you not used to yet at work or at school?",
  "fecho": "<b>used to</b> + verb = a past habit that stopped: <i>She used to live by the sea.</i> Negative: <b>didn't use to</b>. <b>be used to</b> + -ing = normal for you now: <i>I'm used to waking up early.</i> <b>get used to</b> + -ing = becoming normal: <i>I'm getting used to the noise.</i> Never <i>used to living</i>.",
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
      "sub": "Mia tells Leo about a new neighbor. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/522b2d43575b/getting-used-to-earth/img/live-janela.webp",
      "leg": "A dog bed by a window at dawn",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you have a new neighbor. She just arrived from far away, right?"
        },
        {
          "quem": "mia",
          "t": "Yes, Kara. She used to live in a floating city, under a red sun."
        },
        {
          "quem": "leo",
          "t": "Wow. Is she used to our city yet?"
        },
        {
          "quem": "mia",
          "t": "Not really. She isn't used to the noise, and she isn't used to waking up so early."
        },
        {
          "quem": "leo",
          "t": "And her dog? Is he getting used to it?"
        },
        {
          "quem": "mia",
          "t": "Krypto is getting used to the park. He used to run in a huge empty field, and now he walks on a lead."
        },
        {
          "quem": "leo",
          "t": "And the food? Did she use to eat pizza?"
        },
        {
          "quem": "mia",
          "t": "No, she didn't use to eat pizza at all. Now she eats it every Friday."
        },
        {
          "quem": "leo",
          "t": "She will get used to everything soon."
        },
        {
          "quem": "mia",
          "t": "I think so. In a month, it will feel normal."
        }
      ],
      "perguntas": [
        {
          "q": "Where did Kara use to live?",
          "op": [
            "In a floating city",
            "By the sea",
            "In a small town"
          ],
          "a": 0,
          "por": "She used to live in a floating city, under a red sun."
        },
        {
          "q": "What isn't Kara used to?",
          "op": [
            "The noise and waking up early",
            "Eating pizza",
            "Walking a dog"
          ],
          "a": 0,
          "por": "She isn't used to the noise, and she isn't used to waking up so early."
        },
        {
          "q": "What is Krypto getting used to?",
          "op": [
            "Walking on a lead in the park",
            "Living in a floating city",
            "Eating pizza"
          ],
          "a": 0,
          "por": "Krypto is getting used to the park. He used to run in a huge empty field, and now he walks on a lead."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a new life. Hear it, then say it.",
      "frases": [
        {
          "t": "She used to live under a red sun.",
          "img": "https://wolf-labs.pages.dev/p/522b2d43575b/getting-used-to-earth/img/live-argo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm not used to waking up this early.",
          "img": "https://wolf-labs.pages.dev/p/522b2d43575b/getting-used-to-earth/img/live-janela.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It takes a month to get used to a new city.",
          "img": "https://wolf-labs.pages.dev/p/522b2d43575b/getting-used-to-earth/img/live-cidade.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "used to, be used to, get used to. Four quick ones.",
      "regra": "<b>used to</b> + verb · <b>be / get used to</b> + -ing · negative: <b>didn't use to</b> · never <i>used to living</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is getting used to the noise.",
          "aceita": [],
          "d": "Hint: <b>get used to</b> = it is becoming normal."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm not used to wake up early.",
          "r": "I'm not used to waking up early.",
          "aceita": [],
          "d": "Hint: after <b>be used to</b>, use -ing: <i>waking</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She used to living by the sea.",
          "r": "She used to live by the sea.",
          "aceita": [],
          "d": "Hint: <b>used to</b> for a past habit is followed by the plain verb: <i>live</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I didn't used to like coffee.",
          "r": "I didn't use to like coffee.",
          "aceita": [],
          "d": "Hint: after <b>didn't</b>, the verb is plain: <b>didn't use to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/522b2d43575b/getting-used-to-earth/img/live-cidade.webp",
      "leg": "A big city at night, from above",
      "pede": "Look at the picture: a big city at night, seen from above. Write 2 or 3 sentences about a place that is new for someone (maybe you). Use <b>used to</b>, <b>be used to</b> or <b>get used to</b>.",
      "ph": "I used to … I'm getting used to … I'm not used to …",
      "ex": "I used to live in a small town. Now I'm getting used to the traffic. I'm not used to the noise yet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you use to do as a child that you don't do now?",
          "ph": "I used to …",
          "ex": "I used to climb trees every afternoon."
        },
        {
          "q": "What are you getting used to these days?",
          "ph": "I'm getting used to …",
          "ex": "I'm getting used to working from home."
        }
      ]
    }
  }
};
