/* The Second Mile · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: if + present, imperative. Bíblia (WEB, conferida em ebible.org): versículos só no Listen e no Out loud, nunca no Focus, nunca marcados errados. A1/A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-second-mile",
  "titulo": "The Second Mile",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2ded22e222db/the-second-mile/img/live-estrada.webp",
  "alvo": "if + present, imperative: If someone asks, help him. If you are tired, rest. No will after if, -s after he/she in the if part, no 'you' or 'to' in the command, if + be (If you are tired)",
  "abrir": "What do you do if a person asks you for help on the road?",
  "fecho": "<b>If</b> + present, then a command: <i>If someone asks, help him.</i> The <b>if</b> part stays in the present, no <i>will</i>: <i>If he asks</i> (with <b>-s</b>). The command is the plain verb, no <i>you</i>, no <i>to</i>. And <i>If you are tired</i> needs <b>are</b>.",
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
      "sub": "Mia and Leo talk about a story about a road. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/2ded22e222db/the-second-mile/img/live-estrada.webp",
      "leg": "An old stone road at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what are you reading?"
        },
        {
          "quem": "mia",
          "t": "A story about a road. If someone asks you for help, you help."
        },
        {
          "quem": "leo",
          "t": "Always? What if the person is a stranger?"
        },
        {
          "quem": "mia",
          "t": "Yes. In Matthew 5:42, Jesus says: Give to him who asks you, and don’t turn away him who desires to borrow from you."
        },
        {
          "quem": "leo",
          "t": "That is hard. If a person asks me, I think first."
        },
        {
          "quem": "mia",
          "t": "Me too. But if you help, you feel good, and the other person feels good too."
        },
        {
          "quem": "leo",
          "t": "OK. If I see a man with a heavy bag, I will carry it for him."
        },
        {
          "quem": "mia",
          "t": "Good. And if the road is long, walk with him a little more."
        },
        {
          "quem": "leo",
          "t": "Maybe I will. If it is not raining!"
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia reading about?",
          "op": [
            "A road and helping people",
            "A new hotel",
            "A school lesson"
          ],
          "a": 0,
          "por": "A story about a road. If someone asks you for help, you help."
        },
        {
          "q": "What will Leo do if he sees a man with a heavy bag?",
          "op": [
            "He will carry it",
            "He will walk away",
            "He will call a taxi"
          ],
          "a": 0,
          "por": "If I see a man with a heavy bag, I will carry it for him."
        },
        {
          "q": "What does Mia say about a long road?",
          "op": [
            "Walk with him a little more",
            "Go home fast",
            "Take a bus"
          ],
          "a": 0,
          "por": "If the road is long, walk with him a little more."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about helping. The second one is Matthew 5:41, World English Bible. Hear it, then say it.",
      "frases": [
        {
          "t": "If someone asks, help him.",
          "img": "https://wolf-labs.pages.dev/p/2ded22e222db/the-second-mile/img/live-estrada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Whoever compels you to go one mile, go with him two.",
          "img": "https://wolf-labs.pages.dev/p/2ded22e222db/the-second-mile/img/live-marco.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If you are tired, sit down and rest.",
          "img": "https://wolf-labs.pages.dev/p/2ded22e222db/the-second-mile/img/live-bagagem.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If + present, then a command. Four quick ones.",
      "regra": "<b>If</b> + present, then the plain verb: <i>If he asks, help him.</i> · no <i>will</i> after if · <b>-s</b> for he / she · <i>If you are tired</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If someone asks you for water give him some",
          "aceita": [],
          "d": "Dica: <b>if</b> + presente, depois a ordem com o verbo limpo (give)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If he will ask, help him.",
          "r": "If he asks, help him.",
          "aceita": [],
          "d": "Dica: depois de <b>if</b>, nada de <b>will</b>: presente (he asks)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If a friend need help, go with him.",
          "r": "If a friend needs help, go with him.",
          "aceita": [],
          "d": "Dica: com <b>a friend</b> (he / she), o verbo leva <b>-s</b>: needs."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "If you tired, take a rest.",
          "r": "If you are tired, take a rest.",
          "aceita": [
            "If you're tired, take a rest."
          ],
          "d": "Dica: em inglês precisa do verbo: <b>if you are tired</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2ded22e222db/the-second-mile/img/live-estrada.webp",
      "leg": "An old stone road at sunset",
      "pede": "Look at the picture: an old stone road at sunset. Write 2 or 3 sentences with <b>if</b>: what do you do if a person on the road asks for help? Use <b>if</b> + present, then a command or <b>I</b> + verb.",
      "ph": "If a tired man asks for … , I …",
      "ex": "If a tired man asks for water, I give him a bottle. If someone is lost, I show him the way."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Matthew 5:41 says: “Whoever compels you to go one mile, go with him two.” What can you do for a person today? Start with If.",
          "ph": "If a friend needs …, I …",
          "ex": "If a friend needs a ride, I take him home. If a neighbor needs help, I carry his bags."
        },
        {
          "q": "If a stranger asks you for help, what do you do? Why?",
          "ph": "If a stranger asks me for help, I …",
          "ex": "If a stranger asks me for help, I listen first. If I can, I help him, because I want people to help me too."
        }
      ]
    }
  }
};
