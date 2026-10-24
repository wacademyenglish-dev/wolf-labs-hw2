/* HE WOULDN’T BE HERE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: mixed conditionals. Filme: falas originais, no mundo da aula, sem violência. B2: nenhum português. Sem luto: so escolhas do dia a dia. */
window.HW2 = {
  "id": "he-wouldnt-be-here",
  "titulo": "He Wouldn’t Be Here",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/83bc64d85c47/he-wouldnt-be-here/img/live-capa.webp",
  "alvo": "mixed conditionals: if + had + past participle, would + base verb (a past choice, a result now); if + past simple, would have + past participle (a present fact, a past result); never would after if, never if + simple past for a past choice",
  "abrir": "What would your life be like now if you had chosen a different job or school?",
  "fecho": "<b>If + had + past participle, would + verb</b> = a past choice, a result now: <i>If I hadn't taken the job, I wouldn't be here.</i> <b>If + past, would have + past participle</b> = how you are now, and what it changed: <i>If I weren't so shy, I would have spoken.</i> Never <i>If I would have</i>.",
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
      "sub": "Mia and Leo talk about their jobs in a big company. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/83bc64d85c47/he-wouldnt-be-here/img/live-torre.webp",
      "leg": "A tall company tower at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, why are you working in this tower? You used to hate big companies."
        },
        {
          "quem": "mia",
          "t": "I did. But if I hadn't taken this job, I wouldn't be earning enough to rent my flat."
        },
        {
          "quem": "leo",
          "t": "And if you hadn't moved here, you wouldn't know me."
        },
        {
          "quem": "mia",
          "t": "True. If I hadn't met you, I would still be eating lunch alone."
        },
        {
          "quem": "leo",
          "t": "I'm still here because I'm not brave. If I were braver, I would have left last year."
        },
        {
          "quem": "mia",
          "t": "If you were braver, you would have started your own studio already."
        },
        {
          "quem": "leo",
          "t": "Maybe. If I had started it, I wouldn't be so tired now."
        },
        {
          "quem": "mia",
          "t": "And if you weren't so tired, you would have come to the show with me last night."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia work in the tower?",
          "op": [
            "She needs the money for her flat",
            "She loves big companies",
            "Leo asked her to"
          ],
          "a": 0,
          "por": "If I hadn't taken this job, I wouldn't be earning enough to rent my flat."
        },
        {
          "q": "What would Mia be doing if she hadn't met Leo?",
          "op": [
            "Eating lunch alone",
            "Working in another city",
            "Starting a studio"
          ],
          "a": 0,
          "por": "If I hadn't met you, I would still be eating lunch alone."
        },
        {
          "q": "Why didn't Leo leave last year?",
          "op": [
            "He isn't brave enough",
            "He loves the tower",
            "He moved to a new city"
          ],
          "a": 0,
          "por": "If I were braver, I would have left last year."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about choices and results. Hear it, then say it.",
      "frases": [
        {
          "t": "If I hadn't taken the job, I wouldn't be here.",
          "img": "https://wolf-labs.pages.dev/p/83bc64d85c47/he-wouldnt-be-here/img/live-torre.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "If we hadn't met, I would be alone now.",
          "img": "https://wolf-labs.pages.dev/p/83bc64d85c47/he-wouldnt-be-here/img/live-bar.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If I weren't so shy, I would have sung on stage.",
          "img": "https://wolf-labs.pages.dev/p/83bc64d85c47/he-wouldnt-be-here/img/live-palco.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past choice, result now. Four quick ones.",
      "regra": "<b>if + had + participle, would + verb</b> (past → now) · <b>if + past, would have + participle</b> (now → past) · never <i>if I would have</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I hadn't moved, I wouldn't know you.",
          "aceita": [],
          "d": "Hint: <b>if + had + participle</b>, then <b>would</b> + plain verb (the result is now)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I would have studied, I would be a doctor now.",
          "r": "If I had studied, I would be a doctor now.",
          "aceita": [],
          "d": "Hint: no <b>would</b> after <i>if</i>. For a past choice, use <b>had</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If I didn't take that job, I wouldn't be here.",
          "r": "If I hadn't taken that job, I wouldn't be here.",
          "aceita": [],
          "d": "Hint: the choice is in the past, so use <b>hadn't</b> + past participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If she had studied more, she will be a doctor now.",
          "r": "If she had studied more, she would be a doctor now.",
          "aceita": [],
          "d": "Hint: after an unreal <i>if</i>, the result needs <b>would</b>, not <i>will</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/83bc64d85c47/he-wouldnt-be-here/img/live-palco.webp",
      "leg": "An empty stage with warm lights",
      "pede": "Look at the picture: an empty stage with warm lights. Write 2 or 3 sentences about how one past choice changed your life now. Use <b>If + had + participle, would + verb</b>.",
      "ph": "If I hadn't …, I wouldn't …",
      "ex": "If I hadn't joined the course, I wouldn't have this job. If I hadn't moved, I would still live with my parents."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What past choice explains where you are now?",
          "ph": "If I hadn't …, I wouldn't …",
          "ex": "If I hadn't started English classes, I wouldn't be working abroad."
        },
        {
          "q": "How are you now, and what did it change in the past?",
          "ph": "If I were more …, I would have …",
          "ex": "If I were more patient, I would have waited for the sale."
        }
      ]
    }
  }
};
