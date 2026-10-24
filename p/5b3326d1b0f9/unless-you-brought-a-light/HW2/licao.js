/* UNLESS YOU BROUGHT A LIGHT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: unless / in case. Jogo: falas originais, tuneis e tocha, sem violencia. B1: nenhum portugues. */
window.HW2 = {
  "id": "unless-you-brought-a-light",
  "titulo": "Unless You Brought a Light",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5b3326d1b0f9/unless-you-brought-a-light/img/live-porta.webp",
  "alvo": "unless (the one exception, already negative) and in case (a precaution before it happens); never unless ... don't, in case ... will, in case of + clause",
  "abrir": "What do you always carry in case you need it?",
  "fecho": "<b>unless</b> = <i>if not</i>, the one exception: <i>I won't go unless you come.</i> No second negative. <b>in case</b> = a precaution, before it happens: <i>Take a coat in case it rains.</i> After both, present simple, never <i>will</i>.",
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
      "sub": "Mia and Leo get ready to explore old tunnels. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/5b3326d1b0f9/unless-you-brought-a-light/img/live-corredor.webp",
      "leg": "An old stone hallway",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, we're going down into the old tunnels. Did you bring a light?"
        },
        {
          "quem": "leo",
          "t": "Yes. I'm taking two torches in case one goes out."
        },
        {
          "quem": "mia",
          "t": "Good thinking. The gate won't open unless you say the password."
        },
        {
          "quem": "leo",
          "t": "I know it. And I won't tell it to anyone unless they're on our team."
        },
        {
          "quem": "mia",
          "t": "Take the rope too, in case the bridge is broken."
        },
        {
          "quem": "leo",
          "t": "I'll carry it. Should we take a map?"
        },
        {
          "quem": "mia",
          "t": "We won't find the exit unless we have a map."
        },
        {
          "quem": "leo",
          "t": "Then I'm packing two: one in case I lose the first."
        },
        {
          "quem": "mia",
          "t": "Smart. Let's go, unless you want to wait until tomorrow."
        },
        {
          "quem": "leo",
          "t": "No way. Unless it starts to rain, we go tonight."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Leo taking two torches?",
          "op": [
            "In case one goes out",
            "Because it is cold",
            "Because Mia asked"
          ],
          "a": 0,
          "por": "I'm taking two torches in case one goes out."
        },
        {
          "q": "When will the gate open?",
          "op": [
            "When someone says the password",
            "When someone brings a map",
            "When it rains"
          ],
          "a": 0,
          "por": "The gate won't open unless you say the password."
        },
        {
          "q": "Why does Mia want the rope?",
          "op": [
            "In case the bridge is broken",
            "To open the gate",
            "To carry the torches"
          ],
          "a": 0,
          "por": "Take the rope too, in case the bridge is broken."
        }
      ]
    },
    "out": {
      "sub": "Three sentences before the tunnels. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm taking two torches in case one goes out.",
          "img": "https://wolf-labs.pages.dev/p/5b3326d1b0f9/unless-you-brought-a-light/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The gate won't open unless you say the password.",
          "img": "https://wolf-labs.pages.dev/p/5b3326d1b0f9/unless-you-brought-a-light/img/live-porta.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Take a rope in case the bridge is broken.",
          "img": "https://wolf-labs.pages.dev/p/5b3326d1b0f9/unless-you-brought-a-light/img/live-abismo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "unless or in case? Four quick ones.",
      "regra": "<b>unless</b> = the one exception (already negative) · <b>in case</b> = a precaution before it happens · present simple after both.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We won't go in unless we have a light.",
          "aceita": [],
          "d": "Hint: <b>unless</b> + a positive verb. It already means <i>if not</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: unless is already negative.",
          "mostra": "I won't go unless you don't come.",
          "r": "I won't go unless you come.",
          "aceita": [
            "I will not go unless you come."
          ],
          "d": "Hint: <b>unless</b> already means <i>if not</i>, so no second negative."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Take a coat in case it will rain.",
          "r": "Take a coat in case it rains.",
          "aceita": [],
          "d": "Hint: after <b>in case</b>, present simple, never <b>will</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Take a rope in case of the bridge breaks.",
          "r": "Take a rope in case the bridge breaks.",
          "aceita": [],
          "d": "Hint: <b>in case</b> + a full clause. <b>In case of</b> needs a noun."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5b3326d1b0f9/unless-you-brought-a-light/img/live-camp.webp",
      "leg": "A camp at night",
      "pede": "Look at the picture: a camp at night. Write 2 or 3 sentences about what you take on a night trip. Use <b>in case</b> and <b>unless</b>.",
      "ph": "I'm taking … in case … I won't … unless …",
      "ex": "I'm taking a jacket in case it gets cold. I won't leave the camp unless I have a light."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you always carry in your bag in case you need it?",
          "ph": "I always carry … in case …",
          "ex": "I always carry a charger in case my phone dies."
        },
        {
          "q": "What won't you do unless someone asks you?",
          "ph": "I won't … unless …",
          "ex": "I won't call him unless he calls me first."
        }
      ]
    }
  }
};
