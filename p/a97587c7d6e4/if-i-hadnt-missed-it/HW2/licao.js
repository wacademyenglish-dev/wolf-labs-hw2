/* IF I HADN'T MISSED IT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: third / mixed conditional. B2: nenhum português. Imagens: live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "if-i-hadnt-missed-it",
  "titulo": "If I Hadn't Missed It",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a97587c7d6e4/if-i-hadnt-missed-it/img/live-capa.webp",
  "alvo": "third conditional (if + had + participle, would have + participle) for a chain of past events, and mixed conditional (past cause, present result: if I hadn't missed it, I wouldn't be here now); never would after if",
  "abrir": "Think of a small accident that changed something in your life. What would be different now?",
  "fecho": "<b>If + had + participle, would have + participle</b>: the past that did not happen. Never <i>would</i> after <i>if</i>. A past cause with a result now: <b>If I hadn't moved here, I wouldn't have this job now</b>. The two parts can swap places: <i>I wouldn't have met her if I hadn't missed it.</i>",
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
      "sub": "Mia and Leo at the station café. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a97587c7d6e4/if-i-hadnt-missed-it/img/live-conversa.webp",
      "leg": "The platform clock",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, how did you get your job at the radio station?"
        },
        {
          "quem": "leo",
          "t": "By accident. If I hadn't missed the bus that morning, I wouldn't have walked past the studio."
        },
        {
          "quem": "mia",
          "t": "You walked past it?"
        },
        {
          "quem": "leo",
          "t": "Yes. It was raining, so I went inside to wait. If it hadn't rained, I wouldn't have gone in."
        },
        {
          "quem": "mia",
          "t": "And then?"
        },
        {
          "quem": "leo",
          "t": "The receptionist needed a voice for a short advert. If she hadn't heard me ask for the time, she wouldn't have asked me to try."
        },
        {
          "quem": "mia",
          "t": "Incredible. So if you hadn't missed that bus, you wouldn't be working there now."
        },
        {
          "quem": "leo",
          "t": "Exactly. I would probably be in an office somewhere, doing something dull."
        },
        {
          "quem": "mia",
          "t": "And if you were less shy, you would have asked for the job years ago."
        },
        {
          "quem": "leo",
          "t": "True! If I were braver, I would have knocked on their door much earlier."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Leo go into the studio?",
          "op": [
            "It was raining",
            "He had an interview",
            "He wanted a coffee"
          ],
          "a": 0,
          "por": "It was raining, so I went inside to wait."
        },
        {
          "q": "What would have happened if the receptionist hadn't heard him?",
          "op": [
            "She wouldn't have asked him to try",
            "She would have hired someone else",
            "She would have called a taxi"
          ],
          "a": 0,
          "por": "If she hadn't heard me ask for the time, she wouldn't have asked me to try."
        },
        {
          "q": "Where would Leo be now without the missed bus?",
          "op": [
            "In a dull office",
            "On a radio show",
            "On a train"
          ],
          "a": 0,
          "por": "I would probably be in an office somewhere, doing something dull."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what did not happen. Hear it, then say it.",
      "frases": [
        {
          "t": "If I hadn't missed the bus, I wouldn't have met her.",
          "img": "https://wolf-labs.pages.dev/p/a97587c7d6e4/if-i-hadnt-missed-it/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If it hadn't rained, I wouldn't have gone inside.",
          "img": "https://wolf-labs.pages.dev/p/a97587c7d6e4/if-i-hadnt-missed-it/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I hadn't missed it, I wouldn't be here now.",
          "img": "https://wolf-labs.pages.dev/p/a97587c7d6e4/if-i-hadnt-missed-it/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Third and mixed conditionals. Four quick ones.",
      "regra": "<b>if + had + participle</b>, <b>would have + participle</b> · past cause, result now: <b>would + plain verb</b> · never <i>would</i> after <i>if</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If she had left earlier, she would have caught the train.",
          "aceita": [],
          "d": "Hint: <b>if + had left</b>, then <b>would have caught</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have known, I would have called.",
          "r": "If I had known, I would have called.",
          "aceita": [],
          "d": "Hint: no <i>would</i> after <b>if</b>: use <b>had known</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the result is about now.",
          "mostra": "If I hadn't moved here, I wouldn't have had a job now.",
          "r": "If I hadn't moved here, I wouldn't have a job now.",
          "aceita": [],
          "d": "Hint: <b>now</b> in the result, so <b>wouldn't have</b> (plain), not <i>wouldn't have had</i>."
        },
        {
          "tipo": "escreve",
          "t": "Make a third conditional.",
          "mostra": "He missed the bus. He was late.",
          "r": "If he hadn't missed the bus, he wouldn't have been late.",
          "aceita": [
            "He wouldn't have been late if he hadn't missed the bus."
          ],
          "d": "Hint: <b>If he hadn't…, he wouldn't have been…</b>"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a97587c7d6e4/if-i-hadnt-missed-it/img/live-capa.webp",
      "leg": "A train at the platform, at night",
      "pede": "Look at the picture: a train at a night platform. Write 2 or 3 sentences about a small moment that changed your life. Use <b>If I hadn't …, I wouldn't have …</b> and one sentence about now.",
      "ph": "If I hadn't …, I wouldn't have …",
      "ex": "If I hadn't missed that train, I wouldn't have met my friend. If I hadn't met her, I wouldn't have changed jobs. I wouldn't be here now."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What small thing changed your life? What would be different?",
          "ph": "If I hadn't …, I wouldn't …",
          "ex": "If I hadn't joined that course, I wouldn't have found my job."
        },
        {
          "q": "Is there something you would have done differently?",
          "ph": "If I had …, I would have …",
          "ex": "If I had studied more, I would have passed the first time."
        }
      ]
    }
  }
};
