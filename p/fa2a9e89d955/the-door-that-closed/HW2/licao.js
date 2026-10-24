/* THE OTHER TRACK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: third conditional (if + had + particípio, would have + particípio). B1: nenhum português. Só live-* (já escuras). */
window.HW2 = {
  "id": "the-door-that-closed",
  "titulo": "The Other Track",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fa2a9e89d955/the-door-that-closed/img/live-estacao.webp",
  "alvo": "third conditional: if + had + past participle, would have + past participle; both halves go back in time; never if + would have; an open door (still possible) is second conditional, not third",
  "abrir": "What is one choice that changed your life?",
  "fecho": "A past that did not happen: both halves go back. <b>If + had + third form</b>, <b>would have + third form</b>: <i>If I had left earlier, I would have caught the train.</i> Never <i>if I would have</i>. Still possible now? That is the second conditional: <i>If I had time, I would help.</i>",
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
      "sub": "Mia and Leo talk about choices. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fa2a9e89d955/the-door-that-closed/img/live-estacao.webp",
      "leg": "A station at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you look thoughtful. What's on your mind?"
        },
        {
          "quem": "mia",
          "t": "I missed the last train on Friday. If I had left ten minutes earlier, I would have caught it."
        },
        {
          "quem": "leo",
          "t": "So how did you get home?"
        },
        {
          "quem": "mia",
          "t": "I walked, and that's how I met Carlos. He was walking too. If I hadn't missed the train, I wouldn't have met him."
        },
        {
          "quem": "leo",
          "t": "So the train you missed changed your life."
        },
        {
          "quem": "mia",
          "t": "Funny, right? Otherwise I would have been home by nine, and I wouldn't have talked to anyone."
        },
        {
          "quem": "leo",
          "t": "I know the feeling. If I had taken the job in Berlin, I would have moved there last year."
        },
        {
          "quem": "mia",
          "t": "Why didn't you take it?"
        },
        {
          "quem": "leo",
          "t": "I didn't speak German. If I had spoken German, I would have gone."
        },
        {
          "quem": "mia",
          "t": "Do you regret it?"
        },
        {
          "quem": "leo",
          "t": "Not really. If I had gone, I wouldn't have met my wife."
        }
      ],
      "perguntas": [
        {
          "q": "Why did Mia walk home?",
          "op": [
            "She missed the last train",
            "She likes walking",
            "Her phone died"
          ],
          "a": 0,
          "por": "I missed the last train on Friday."
        },
        {
          "q": "What would have happened if Mia had caught the train?",
          "op": [
            "She would have been home by nine",
            "She would have met Carlos",
            "She would have walked home"
          ],
          "a": 0,
          "por": "I would have been home by nine, and I wouldn't have talked to anyone."
        },
        {
          "q": "Why didn't Leo take the job in Berlin?",
          "op": [
            "He didn't speak German",
            "He didn't like the job",
            "He missed the train"
          ],
          "a": 0,
          "por": "I didn't speak German."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the other track. Hear it, then say it.",
      "frases": [
        {
          "t": "If I had left earlier, I would have caught the train.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/fa2a9e89d955/the-door-that-closed/img/live-estacao.webp"
        },
        {
          "t": "If she hadn't taken that job, she wouldn't have met him.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If he had pulled the lever, the train would have taken the other track.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/fa2a9e89d955/the-door-that-closed/img/live-alavanca.webp"
        }
      ]
    },
    "focus": {
      "sub": "If + had, would have. Four quick ones.",
      "regra": "<b>if + had + third form</b>, <b>would have + third form</b> · both halves go back · never <b>if I would have</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If I had known, I would have told you.",
          "aceita": [],
          "d": "Hint: <b>if + had + third form</b>, then <b>would have</b> + third form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If I would have known, I would have called you.",
          "r": "If I had known, I would have called you.",
          "aceita": [
            "If I'd known, I would have called you."
          ],
          "d": "Hint: no <b>would</b> in the if-part: <b>had</b> known."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She would have went if she had had time.",
          "r": "She would have gone if she had had time.",
          "aceita": [
            "She'd have gone if she'd had time."
          ],
          "d": "Hint: go, went, <b>gone</b>. After <b>would have</b>, use the third form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If we had left at six, we would have make it.",
          "r": "If we had left at six, we would have made it.",
          "aceita": [
            "If we'd left at six, we would have made it."
          ],
          "d": "Hint: after <b>would have</b>, the third form: <b>made</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fa2a9e89d955/the-door-that-closed/img/live-agulha.webp",
      "leg": "Two tracks at night, one train",
      "pede": "Look at the picture: two tracks at night, and one train choosing a way. Write 2 or 3 sentences about a choice you made, and the other track. Use <b>if + had</b> and <b>would have</b>.",
      "ph": "If I had …, I would have …",
      "ex": "In 2019 I chose to move to a new city. If I had stayed, I wouldn't have met my best friend. I would have kept the same job."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a chance you did not take, or a train you missed. What would have happened if you had taken it?",
          "ph": "If I had …, I would have …",
          "ex": "If I had taken that job in São Paulo, I would have moved last year."
        },
        {
          "q": "What would you have done differently last week?",
          "ph": "If I had …, I would have …",
          "ex": "If I had slept earlier, I would have felt better this morning."
        }
      ]
    }
  }
};
