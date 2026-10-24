/* ONE LETTER AWAY (A2) · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: -ed × -ing. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "one-letter-away-a2",
  "titulo": "One Letter Away",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2163e06a45d6/one-letter-away-a2/img/sofa.webp",
  "alvo": "-ed for the person who feels (bored, tired, interested, surprised) and -ing for the thing that causes it (boring, tiring, interesting, surprising)",
  "abrir": "What was boring or interesting this week?",
  "fecho": "<b>-ed</b> is the person who feels it: <i>I was bored.</i> <b>-ing</b> is the thing that causes it: <i>The film was boring.</i> One letter changes the meaning.",
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
      "sub": "Mia and Leo after a long Sunday. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/2163e06a45d6/one-letter-away-a2/img/sofa.webp",
      "leg": "Sunday night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how was your Sunday?"
        },
        {
          "quem": "leo",
          "t": "Long. I watched a film for three hours. It was so boring."
        },
        {
          "quem": "mia",
          "t": "Were you bored the whole time?"
        },
        {
          "quem": "leo",
          "t": "Yes, but the end was surprising. I was really surprised!"
        },
        {
          "quem": "mia",
          "t": "I am never surprised by films. I fall asleep."
        },
        {
          "quem": "leo",
          "t": "Today I am tired too. The bus trip home was tiring."
        },
        {
          "quem": "mia",
          "t": "Tiring? Why?"
        },
        {
          "quem": "leo",
          "t": "It took six hours. I was tired and hungry."
        },
        {
          "quem": "mia",
          "t": "Next Sunday, let's choose an interesting film. Then we will be interested the whole time."
        },
        {
          "quem": "leo",
          "t": "Deal. No more boring films, please!"
        }
      ],
      "perguntas": [
        {
          "q": "How was the film?",
          "op": [
            "Boring",
            "Bored",
            "Surprised"
          ],
          "a": 0,
          "por": "It was so boring."
        },
        {
          "q": "How did Leo feel at the end of the film?",
          "op": [
            "Surprised",
            "Surprising",
            "Tired"
          ],
          "a": 0,
          "por": "I was really surprised!"
        },
        {
          "q": "Why does Mia want an interesting film?",
          "op": [
            "So they are interested the whole time",
            "So they can sleep",
            "Because it is short"
          ],
          "a": 0,
          "por": "Then we will be interested the whole time."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "The film was boring, so I was bored.",
          "img": "https://wolf-labs.pages.dev/p/2163e06a45d6/one-letter-away-a2/img/sofa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The end was surprising, and I was surprised.",
          "img": "https://wolf-labs.pages.dev/p/2163e06a45d6/one-letter-away-a2/img/sofa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The trip was tiring, so we were tired.",
          "img": "https://wolf-labs.pages.dev/p/2163e06a45d6/one-letter-away-a2/img/onibus.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ed or -ing? Four quick ones.",
      "regra": "<b>-ed</b> = how I feel (bored, tired) · <b>-ing</b> = what causes it (boring, tiring) · the verb <b>be</b> never changes.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The film was boring so we stopped it.",
          "aceita": [],
          "d": "Dica: o filme <b>causa</b> o sentimento, então <b>boring</b> (-ing)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am very boring in this class.",
          "r": "I am very bored in this class.",
          "aceita": [],
          "d": "Dica: você <b>sente</b>, então <b>bored</b> (-ed). <i>Boring</i> descreve quem faz os outros se entediarem."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The trip was very tired.",
          "r": "The trip was very tiring.",
          "aceita": [],
          "d": "Dica: a viagem <b>causa</b> o cansaço, então <b>tiring</b> (-ing). Uma viagem não sente cansaço."
        },
        {
          "tipo": "escreve",
          "t": "Join them with <em>so</em>.",
          "mostra": "The end was surprising. Nobody moved.",
          "r": "The end was surprising, so nobody moved.",
          "aceita": [
            "The end was surprising so nobody moved."
          ],
          "d": "Dica: uma frase só: vírgula + <b>so</b> + o resultado."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2163e06a45d6/one-letter-away-a2/img/onibus.webp",
      "leg": "The long ride home",
      "pede": "Look at the picture. Write 2 or 3 sentences about a trip or a long day. Say what was <b>-ing</b> and how you felt (<b>-ed</b>).",
      "ph": "The trip was … so I was …",
      "ex": "The trip was long and tiring, so I was tired. The sunset was beautiful, but I was too sleepy to enjoy it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was boring or interesting this week?",
          "ph": "… was boring / interesting.",
          "ex": "My Monday meeting was boring. A podcast about the ocean was very interesting."
        },
        {
          "q": "What is tiring in your week? How do you feel?",
          "ph": "… is tiring, so I feel …",
          "ex": "Work on Thursday is tiring, so I feel tired and a little bored by night."
        }
      ]
    }
  }
};
