/* THE CORPS HAS RULES · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must / mustn't / have to / don't have to. Filme: falas originais, sem violência. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-corps-has-rules",
  "titulo": "The Corps Has Rules",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/aad312dbaec8/the-corps-has-rules/img/live-capa.webp",
  "alvo": "must / mustn't (a rule, a ban) and have to / don't have to (a need, no need); plain verb after them, no to after must; doesn't have to with he / she; mustn't is not the same as don't have to",
  "abrir": "What must you do every day?",
  "fecho": "<b>must</b> = a rule: <i>You must light the lanterns.</i> <b>mustn't</b> = it is forbidden: <i>You mustn't walk alone.</i> <b>have to</b> = a need; <b>don't have to</b> = it is not needed, but it is OK. After <b>must</b>, the plain verb, never <i>to</i>.",
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
      "sub": "Mia is new in a night guide group. Leo tells her the rules. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/aad312dbaec8/the-corps-has-rules/img/live-capa.webp",
      "leg": "A mountain road with lanterns",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, welcome to the Corps. First, the rules."
        },
        {
          "quem": "mia",
          "t": "OK. What must I do every night?"
        },
        {
          "quem": "leo",
          "t": "You must light the lanterns on the road. You must be there before dark."
        },
        {
          "quem": "mia",
          "t": "Do I have to carry a big bag?"
        },
        {
          "quem": "leo",
          "t": "No, you don't have to. Just a small lamp."
        },
        {
          "quem": "mia",
          "t": "And what mustn't I do?"
        },
        {
          "quem": "leo",
          "t": "You mustn't walk alone in the forest. And you mustn't touch the old gate."
        },
        {
          "quem": "mia",
          "t": "Do I have to wake up early every day?"
        },
        {
          "quem": "leo",
          "t": "No, you don't have to. You only have to be here at night."
        },
        {
          "quem": "mia",
          "t": "Easy. I must remember all the rules!"
        }
      ],
      "perguntas": [
        {
          "q": "What must Mia do every night?",
          "op": [
            "Light the lanterns on the road",
            "Carry a big bag",
            "Wake up early"
          ],
          "a": 0,
          "por": "You must light the lanterns on the road."
        },
        {
          "q": "What mustn't Mia do?",
          "op": [
            "Walk alone in the forest",
            "Carry a small lamp",
            "Be there before dark"
          ],
          "a": 0,
          "por": "You mustn't walk alone in the forest."
        },
        {
          "q": "Does Mia have to wake up early?",
          "op": [
            "No, she doesn't have to",
            "Yes, she must",
            "Yes, she has to"
          ],
          "a": 0,
          "por": "No, you don't have to. You only have to be here at night."
        }
      ]
    },
    "out": {
      "sub": "Three rules of the Corps. Hear it, then say it.",
      "frases": [
        {
          "t": "You must light the lanterns before dark.",
          "img": "https://wolf-labs.pages.dev/p/aad312dbaec8/the-corps-has-rules/img/live-glicinias.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You mustn't walk alone in the forest.",
          "img": "https://wolf-labs.pages.dev/p/aad312dbaec8/the-corps-has-rules/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She doesn't have to carry a big bag.",
          "img": "https://wolf-labs.pages.dev/p/aad312dbaec8/the-corps-has-rules/img/live-glicinias.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "must, mustn't, have to? Four quick ones.",
      "regra": "<b>must</b> = a rule · <b>mustn't</b> = forbidden · <b>have to</b> = a need · <b>don't have to</b> = not needed · plain verb, no <b>to</b> after must.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You must be home before midnight.",
          "aceita": [],
          "d": "Dica: <b>must</b> + o verbo limpo (be)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She must to wear a coat.",
          "r": "She must wear a coat.",
          "aceita": [],
          "d": "Dica: depois de <b>must</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He don't have to wake up early.",
          "r": "He doesn't have to wake up early.",
          "aceita": [
            "He does not have to wake up early."
          ],
          "d": "Dica: com he, use <b>doesn't have to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You don't must run on the wet road.",
          "r": "You mustn't run on the wet road.",
          "aceita": [
            "You must not run on the wet road."
          ],
          "d": "Dica: o não de must é <b>mustn't</b>, nunca 'don't must'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/aad312dbaec8/the-corps-has-rules/img/live-glicinias.webp",
      "leg": "A road with lanterns",
      "pede": "Look at the picture: a road with lanterns at night. Write 2 or 3 sentences about the rules of your home or your work. Use <b>must</b>, <b>mustn't</b> and <b>don't have to</b>.",
      "ph": "At home you must … You mustn't … You don't have to …",
      "ex": "At home you must take off your shoes. You mustn't use your phone at dinner. You don't have to wash the dishes."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What must you do every day?",
          "ph": "I must … I have to …",
          "ex": "I must take my keys. I have to go to work by bus."
        },
        {
          "q": "What mustn't you do at work or at school? What don't you have to do?",
          "ph": "I mustn't … I don't have to …",
          "ex": "I mustn't use my phone in class. I don't have to wear a uniform."
        }
      ]
    }
  }
};
