/* DUOLINGO ENGLISH TEST PREP · MOCK TEST 1 · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (kit/hw2). JSON puro depois do "=".
   Alvo: talking about a practice test: ran out of time, made (not did) a mistake, didn't + base verb (didn't have), should have + past participle. B1: nenhum português na lição. */
window.HW2 = {
  "id": "det-mock-test-1",
  "titulo": "Mock Test 1",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/34fec063cab7/det-mock-test-1/img/live-capa.webp",
  "alvo": "talking about a practice test: ran out of time, made (not did) a mistake, didn't + base verb (didn't have), should have + past participle",
  "abrir": "Think of the last test you took. What went well, and what went wrong?",
  "fecho": "After a practice test, name the problem and make a plan. You <b>ran out of time</b>. You <b>made</b> a mistake, you don't <i>do</i> one. After <b>didn't</b>, the verb stays short: <i>didn't have</i>, not <i>didn't had</i>. And for the next time: <b>should have + past participle</b>: <i>I should have checked my answers</i>. One problem, one plan, for each part.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo after Mock Test 1. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/34fec063cab7/det-mock-test-1/img/live-conversa.webp",
      "leg": "The exam hall",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I just finished Mock Test 1. My head is tired, but I learned a lot."
        },
        {
          "quem": "leo",
          "t": "Me too. How was the first part, with the real words?"
        },
        {
          "quem": "mia",
          "t": "Easy. But the paragraph was hard. I ran out of time before the last gap."
        },
        {
          "quem": "leo",
          "t": "Same problem. I spent too long on the second gap, and I didn't have enough time for the rest."
        },
        {
          "quem": "mia",
          "t": "What about the dictation?"
        },
        {
          "quem": "leo",
          "t": "I made two mistakes. I missed the end of a word. I should have listened more carefully."
        },
        {
          "quem": "mia",
          "t": "I missed the little words too. Next time, I will play it three times and type everything."
        },
        {
          "quem": "leo",
          "t": "And the writing? I wrote about the photo for the whole minute."
        },
        {
          "quem": "mia",
          "t": "I wrote two sentences, and then I stopped. I should have kept writing until the clock ended."
        },
        {
          "quem": "leo",
          "t": "Okay. For Mock Test 2, here is the plan: the paragraph first, the little words in the dictation, and writing to the last second."
        },
        {
          "quem": "mia",
          "t": "Deal. One problem, one plan, for each part."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Mia run out of time?",
          "op": [
            "The paragraph was hard and she reached the last gap too late",
            "She forgot to start the test",
            "The photo was too dark"
          ],
          "a": 0,
          "por": "I ran out of time before the last gap."
        },
        {
          "q": "What mistake did Leo make in the dictation?",
          "op": [
            "He missed the end of a word",
            "He typed nothing",
            "He wrote about the wrong photo"
          ],
          "a": 0,
          "por": "I missed the end of a word."
        },
        {
          "q": "What is the plan for Mock Test 2?",
          "op": [
            "Little words in the dictation, and writing to the last second",
            "Skip the paragraph",
            "Stop writing early"
          ],
          "a": 0,
          "por": "The little words in the dictation, and writing to the last second."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the debrief. Hear it, then say it.",
      "frases": [
        {
          "t": "I ran out of time before the last gap.",
          "img": "https://wolf-labs.pages.dev/p/34fec063cab7/det-mock-test-1/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I made two mistakes in the dictation.",
          "img": "https://wolf-labs.pages.dev/p/34fec063cab7/det-mock-test-1/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I should have checked my answers.",
          "img": "https://wolf-labs.pages.dev/p/34fec063cab7/det-mock-test-1/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Verb, form, plan. Four quick ones.",
      "regra": "<b>ran out of time</b> · <b>make</b> a mistake · <b>didn't</b> + short verb (<i>have</i>) · <b>should have</b> + past participle (<i>checked</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I ran out of time before the last gap.",
          "aceita": [],
          "d": "Hint: <b>ran out of time</b> = the time ended before you finished."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one verb is wrong.",
          "mostra": "I did two mistakes in the dictation.",
          "r": "I made two mistakes in the dictation.",
          "aceita": [],
          "d": "Hint: you <b>make</b> a mistake. You don't <i>do</i> one."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: after didn't, the verb stays short.",
          "mostra": "I didn't had enough time to finish.",
          "r": "I didn't have enough time to finish.",
          "aceita": [
            "I did not have enough time to finish."
          ],
          "d": "Hint: <b>didn't</b> already shows the past. The verb is short: <b>have</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: should have needs the past participle.",
          "mostra": "I should have check my answers.",
          "r": "I should have checked my answers.",
          "aceita": [],
          "d": "Hint: <b>should have</b> + the third form: <b>checked</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/34fec063cab7/det-mock-test-1/img/live-foto-bicicletas.webp",
      "leg": "A photo task, like in the test",
      "pede": "Look at the picture. Write one rich sentence about it, like in the test: the place, two details, and <b>where</b> or <b>which</b>. Then add one sentence about your last practice: what went wrong, or what you <b>should have</b> done.",
      "ph": "This is a street by a canal at night, where …",
      "ex": "This is a quiet street by a canal at night, where the warm lights reflect on the water. In my last practice, I ran out of time, and I should have started the paragraph earlier."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which part of a test is the hardest for you? Why?",
          "ph": "The hardest part is …",
          "ex": "The hardest part is the dictation, because I miss the small words."
        },
        {
          "q": "What should you have done differently the last time you studied for a test?",
          "ph": "I should have …",
          "ex": "I should have started earlier and slept more."
        }
      ]
    }
  }
};
