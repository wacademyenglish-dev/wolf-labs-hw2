/* I HEARD SOMETHING MOVING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: hear / see + pessoa + -ing ou verbo puro. B1: nenhum português. */
window.HW2 = {
  "id": "i-heard-something-moving",
  "titulo": "I Heard Something Moving",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/15b72f4206d6/i-heard-something-moving/img/live-capa.webp",
  "alvo": "hear / see / watch / feel + someone + -ing (a part of the action) or the plain verb (the whole action); him / her / them, never he / she; no to, no -s, no -ed after the person; listen needs to",
  "abrir": "What do you hear from your window at night?",
  "fecho": "<b>hear / see / watch / feel + someone + -ing</b> = a part of it: <i>I heard someone walking.</i> <b>+ plain verb</b> = all of it: <i>I saw him close the door.</i> <i>him, her, them</i>, never <i>he, she</i>. No <b>to</b>, no <b>-s</b>, no <b>-ed</b>. <i>Listen</i> needs <b>to</b>.",
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
      "sub": "Night Calls, a late radio show. Mia is the host and Leo calls in. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/15b72f4206d6/i-heard-something-moving/img/live-casa.webp",
      "leg": "A porch with pumpkins at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Welcome to Night Calls. You are on the air. What did you hear tonight?"
        },
        {
          "quem": "leo",
          "t": "Hi, Mia. I heard something moving on my porch around midnight."
        },
        {
          "quem": "mia",
          "t": "Ooh. Did you see anything?"
        },
        {
          "quem": "leo",
          "t": "I saw a shadow crossing the yard, and I felt the wind blowing through the door."
        },
        {
          "quem": "mia",
          "t": "Were you scared?"
        },
        {
          "quem": "leo",
          "t": "A little. Then I heard something fall, and I watched a pumpkin roll off the step."
        },
        {
          "quem": "mia",
          "t": "So what was it?"
        },
        {
          "quem": "leo",
          "t": "I turned on the light and saw my cat run away with a sock."
        },
        {
          "quem": "mia",
          "t": "A cat! So you heard a cat knock over a pumpkin."
        },
        {
          "quem": "leo",
          "t": "Yes! I heard it jump, and I heard it purr. Now I'm laughing."
        },
        {
          "quem": "mia",
          "t": "Thanks for calling, Leo. Sleep well."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo hear on his porch?",
          "op": [
            "Something moving",
            "Someone singing",
            "A phone ringing"
          ],
          "a": 0,
          "por": "I heard something moving on my porch around midnight."
        },
        {
          "q": "What did he watch the pumpkin do?",
          "op": [
            "Roll off the step",
            "Light up",
            "Fly away"
          ],
          "a": 0,
          "por": "I watched a pumpkin roll off the step."
        },
        {
          "q": "What was it in the end?",
          "op": [
            "His cat",
            "The wind",
            "A neighbor"
          ],
          "a": 0,
          "por": "I saw my cat run away with a sock."
        }
      ]
    },
    "out": {
      "sub": "Three sounds in the night. Hear it, then say it.",
      "frases": [
        {
          "t": "I heard someone walking on the road.",
          "img": "https://wolf-labs.pages.dev/p/15b72f4206d6/i-heard-something-moving/img/live-estrada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I watched the fog roll over the hill.",
          "img": "https://wolf-labs.pages.dev/p/15b72f4206d6/i-heard-something-moving/img/live-fogueira.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I heard the radio turn on by itself.",
          "img": "https://wolf-labs.pages.dev/p/15b72f4206d6/i-heard-something-moving/img/live-estudio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "hear + person + -ing or plain verb. Four quick ones.",
      "regra": "<b>hear / see / watch / feel + someone + -ing</b> (a part) or <b>plain verb</b> (all of it) · <b>him / her / them</b> · no <b>to</b>, no <b>-s</b>, no <b>-ed</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I heard someone walking in the garden.",
          "aceita": [],
          "d": "Hint: <b>heard</b> + someone + <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I heard someone to walk outside.",
          "r": "I heard someone walk outside.",
          "aceita": [
            "I heard someone walking outside."
          ],
          "d": "Hint: no <b>to</b> after the person."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I saw he closing the door.",
          "r": "I saw him closing the door.",
          "aceita": [
            "I saw him close the door."
          ],
          "d": "Hint: after <b>saw</b>, use <b>him</b>, not <b>he</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We heard the dog barked.",
          "r": "We heard the dog bark.",
          "aceita": [
            "We heard the dog barking."
          ],
          "d": "Hint: after the person, no <b>-ed</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/15b72f4206d6/i-heard-something-moving/img/live-fogueira.webp",
      "leg": "A lantern on a foggy hill",
      "pede": "Look at the picture: a small lantern on a foggy hill. Write 2 or 3 sentences about a sound or a sight at night. Use <b>heard</b>, <b>saw</b> or <b>felt</b> + a person or thing + <b>-ing</b> or the plain verb.",
      "ph": "I heard … I saw …",
      "ex": "I heard the wind blowing in the trees. I saw a light moving on the hill. I felt the fog touch my face."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you hear from your window at night?",
          "ph": "I hear … -ing",
          "ex": "I hear cars passing and a neighbor playing the guitar."
        },
        {
          "q": "Have you ever seen someone do something funny? What?",
          "ph": "I saw … do …",
          "ex": "I once saw a man dance with his dog in the street."
        }
      ]
    }
  }
};
