/* NUMB · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "numb",
  "titulo": "Numb",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fae43a2c1e4a/numb/img/live-caderno.webp",
  "alvo": "present perfect (no time: I have drawn) versus past simple (with a time: I drew it yesterday); have / has + past participle; never the present perfect with yesterday, last week, in 2020; Did you ... yesterday?",
  "abrir": "Have you ever drawn something you liked?",
  "fecho": "<b>have / has + past participle</b> = no time, it counts now: <i>I have drawn a stairway.</i> A time word (yesterday, last week, in 2020) = past simple: <i>I drew it yesterday.</i> Never <i>have</i> + a finished time.",
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
      "sub": "Mia and Leo talk about a sketchbook. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/fae43a2c1e4a/numb/img/live-caderno.webp",
      "leg": "An open sketchbook with a stairway",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, have you ever drawn a person?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have. I drew my brother last week."
        },
        {
          "quem": "leo",
          "t": "Have you ever shown your sketchbook to a teacher?"
        },
        {
          "quem": "mia",
          "t": "No, I haven't. But I showed it to my friend yesterday."
        },
        {
          "quem": "leo",
          "t": "Did she like it?"
        },
        {
          "quem": "mia",
          "t": "Yes! She has seen many drawings, and she said mine was good."
        },
        {
          "quem": "leo",
          "t": "I have never finished a drawing. I started a stairway two days ago."
        },
        {
          "quem": "mia",
          "t": "Have you finished the stairs?"
        },
        {
          "quem": "leo",
          "t": "Not yet. I have drawn one window, and I drew the floor last night."
        },
        {
          "quem": "mia",
          "t": "Show me tomorrow. I have a new pencil for you."
        }
      ],
      "perguntas": [
        {
          "q": "When did Mia draw her brother?",
          "op": [
            "Last week",
            "Yesterday",
            "Never"
          ],
          "a": 0,
          "por": "I drew my brother last week."
        },
        {
          "q": "Has Mia ever shown her sketchbook to a teacher?",
          "op": [
            "No, she hasn't",
            "Yes, she has",
            "Yes, yesterday"
          ],
          "a": 0,
          "por": "No, I haven't."
        },
        {
          "q": "What has Leo never done?",
          "op": [
            "Finished a drawing",
            "Drawn a window",
            "Used a pencil"
          ],
          "a": 0,
          "por": "I have never finished a drawing."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about drawing. Hear it, then say it.",
      "frases": [
        {
          "t": "I have never drawn a river.",
          "img": "https://wolf-labs.pages.dev/p/fae43a2c1e4a/numb/img/live-caderno.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I drew a window last night.",
          "img": "https://wolf-labs.pages.dev/p/fae43a2c1e4a/numb/img/live-escada.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Have you ever walked down a long hall?",
          "img": "https://wolf-labs.pages.dev/p/fae43a2c1e4a/numb/img/live-corredor.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have done or did? Four quick ones.",
      "regra": "<b>have / has + done</b> = no time · <b>did / past verb</b> = with a time (yesterday, last week) · <b>not ... yet</b> = <b>haven't</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She has never shown her sketchbook to anyone.",
          "aceita": [],
          "d": "Dica: <b>has never</b> + o verbo no particípio (shown)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have seen that movie last week.",
          "r": "I saw that movie last week.",
          "aceita": [],
          "d": "Dica: com <b>last week</b> é passado simples: <b>saw</b>, não 'have seen'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I didn't finish my drawing yet.",
          "r": "I haven't finished my drawing yet.",
          "aceita": [
            "I have not finished my drawing yet."
          ],
          "d": "Dica: com <b>yet</b> (ainda não) usamos <b>haven't</b> + particípio."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Have you finished your homework yesterday?",
          "r": "Did you finish your homework yesterday?",
          "aceita": [],
          "d": "Dica: <b>yesterday</b> pede <b>Did you ...?</b>, nunca 'Have you ... yesterday'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fae43a2c1e4a/numb/img/live-caderno.webp",
      "leg": "A sketchbook with a stairway",
      "pede": "Look at the picture: an open sketchbook with a drawing of a stairway. Write 2 or 3 sentences. Use one with <b>have / has</b> (no time) and one with a past verb and a time word (<b>yesterday</b>, <b>last week</b>).",
      "ph": "I have never … but I … last week.",
      "ex": "I have never drawn a face. But I drew a tree last week. I have tried a new pencil, and it is great."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever drawn or painted something? When did you do it last?",
          "ph": "I have … I … last …",
          "ex": "I have drawn a few houses. I drew one last weekend."
        },
        {
          "q": "What is one thing you have never done? What did you do last weekend?",
          "ph": "I have never … Last weekend I …",
          "ex": "I have never traveled by plane. Last weekend I visited my aunt."
        }
      ]
    }
  }
};
