/* DIE WITH A SMILE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will / might / won't. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "die-with-a-smile",
  "titulo": "Die With a Smile",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fbf6b5b61d4d/die-with-a-smile/img/live-capa.webp",
  "alvo": "will / might / won't for the future: will = sure, might = maybe, won't = sure it's no; I think ... will; probably; always the plain verb after them, never to",
  "abrir": "What will you do tonight?",
  "fecho": "<b>will</b> = sure · <b>might</b> = maybe · <b>won't</b> = sure it is no: <i>I will go. I might go. I won't go.</i> After them, the plain verb, never <i>to</i>. <i>Probably</i> goes after <i>will</i>: <i>I will probably stay.</i>",
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
      "sub": "Mia and Leo watch the sky from the window. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/fbf6b5b61d4d/die-with-a-smile/img/live-tempestade.webp",
      "leg": "A storm on the way",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the sky. I think it will rain tonight."
        },
        {
          "quem": "mia",
          "t": "Maybe. The forecast says it might rain, but it might not."
        },
        {
          "quem": "leo",
          "t": "Will you stay home, then?"
        },
        {
          "quem": "mia",
          "t": "Yes, I will. I'll watch an old movie on TV."
        },
        {
          "quem": "leo",
          "t": "Which one? Will you watch a comedy?"
        },
        {
          "quem": "mia",
          "t": "I will probably watch a comedy. I won't watch a sad one tonight."
        },
        {
          "quem": "leo",
          "t": "I think the storm will be strong. The power might go out."
        },
        {
          "quem": "mia",
          "t": "Then we won't see the movie. We might play cards by a candle."
        },
        {
          "quem": "leo",
          "t": "Good plan. I'll bring the snacks."
        }
      ],
      "perguntas": [
        {
          "q": "What does the forecast say?",
          "op": [
            "It might rain, but it might not",
            "It will rain all night",
            "It won't rain"
          ],
          "a": 0,
          "por": "The forecast says it might rain, but it might not."
        },
        {
          "q": "What will Mia do tonight?",
          "op": [
            "Watch an old movie",
            "Go to a party",
            "Visit Leo"
          ],
          "a": 0,
          "por": "I'll watch an old movie on TV."
        },
        {
          "q": "What might happen in the storm?",
          "op": [
            "The power might go out",
            "The TV will break",
            "The phone will ring"
          ],
          "a": 0,
          "por": "The power might go out."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about tomorrow. Hear it, then say it.",
      "frases": [
        {
          "t": "Tomorrow will be sunny in the morning.",
          "img": "https://wolf-labs.pages.dev/p/fbf6b5b61d4d/die-with-a-smile/img/live-estudio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It might rain in the afternoon, but it might not.",
          "img": "https://wolf-labs.pages.dev/p/fbf6b5b61d4d/die-with-a-smile/img/live-tempestade.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I won't go out tonight, so I will watch TV.",
          "img": "https://wolf-labs.pages.dev/p/fbf6b5b61d4d/die-with-a-smile/img/live-sofa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will, might or won't? Four quick ones.",
      "regra": "<b>will</b> = sure · <b>might</b> = maybe · <b>won't</b> = sure it's no · plain verb after them, no <b>to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She will probably stay at home tonight.",
          "aceita": [],
          "d": "Dica: <b>will</b> + <b>probably</b> + o verbo limpo (stay)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It might to rain this afternoon.",
          "r": "It might rain this afternoon.",
          "aceita": [
            "It might rain this afternoon."
          ],
          "d": "Dica: depois de <b>might</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He will goes to school tomorrow.",
          "r": "He will go to school tomorrow.",
          "aceita": [
            "He'll go to school tomorrow."
          ],
          "d": "Dica: depois de <b>will</b>, o verbo não leva -s: will go."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't will see him tomorrow.",
          "r": "I won't see him tomorrow.",
          "aceita": [
            "I will not see him tomorrow."
          ],
          "d": "Dica: o não de will é <b>won't</b>, nunca 'don't will'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fbf6b5b61d4d/die-with-a-smile/img/live-sofa.webp",
      "leg": "An old sofa, a small TV",
      "pede": "Look at the picture: an old sofa in front of a small TV. Write 2 or 3 sentences about tonight. What <b>will</b> you do? What <b>might</b> happen?",
      "ph": "Tonight I will … and I might …",
      "ex": "Tonight I will sit on the sofa and watch TV. I might call my mother. I won't go out because it is cold."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do this weekend? What might you do?",
          "ph": "This weekend I will … I might …",
          "ex": "This weekend I will visit my parents. I might go to the cinema."
        },
        {
          "q": "What do you think will happen next year?",
          "ph": "I think … will … I might …",
          "ex": "I think I will travel more next year. I might change my job."
        }
      ]
    }
  }
};
