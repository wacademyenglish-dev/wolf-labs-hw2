/* HAVE YOU EVER SEEN THE RAIN? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect da experiência. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "have-you-ever-seen-the-rain",
  "titulo": "Have You Ever Seen the Rain?",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/5b56cd229b31/have-you-ever-seen-the-rain/img/live-capa.webp",
  "alvo": "present perfect for experience: Have you ever + participle? I have never + participle; Yes, I have / No, I haven't; he / she has; no date with it, but with a date (in 2019, last year, yesterday) the past simple",
  "abrir": "What is one place you have never been to?",
  "fecho": "<b>have / has + participle</b> = your experience, no date: <i>I have been to Chile. Have you ever seen snow? No, I haven't.</i> <b>never</b> goes after <b>have</b>: <i>I have never flown.</i> With a date, the past: <i>I saw snow in 2019.</i>",
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
      "sub": "Mia and Leo plan a trip. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/5b56cd229b31/have-you-ever-seen-the-rain/img/live-mapa.webp",
      "leg": "A map and a setting sun",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I'm planning a trip. Have you ever been to the mountains?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have. I've been there twice. Have you?"
        },
        {
          "quem": "leo",
          "t": "No, I haven't. I've never seen snow."
        },
        {
          "quem": "mia",
          "t": "Never? I saw snow for the first time in 2019."
        },
        {
          "quem": "leo",
          "t": "Have you ever flown in a small plane?"
        },
        {
          "quem": "mia",
          "t": "No, I haven't, but my brother has. He flew to an island last year."
        },
        {
          "quem": "leo",
          "t": "Has he ever lost his bag?"
        },
        {
          "quem": "mia",
          "t": "Yes, he has! It happened last summer."
        },
        {
          "quem": "leo",
          "t": "I have never lost a bag. I've lost my keys many times, though."
        },
        {
          "quem": "mia",
          "t": "Then we need a plan. I've already bought two tickets."
        }
      ],
      "perguntas": [
        {
          "q": "How many times has Mia been to the mountains?",
          "op": [
            "Twice",
            "Never",
            "Once"
          ],
          "a": 0,
          "por": "I've been there twice."
        },
        {
          "q": "What has Leo never seen?",
          "op": [
            "Snow",
            "The sea",
            "A plane"
          ],
          "a": 0,
          "por": "I've never seen snow."
        },
        {
          "q": "What has Mia already bought?",
          "op": [
            "Two tickets",
            "A small plane",
            "A new bag"
          ],
          "a": 0,
          "por": "I've already bought two tickets."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about experience. Hear it, then say it.",
      "frases": [
        {
          "t": "Have you ever been to the mountains?",
          "img": "https://wolf-labs.pages.dev/p/5b56cd229b31/have-you-ever-seen-the-rain/img/live-mapa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I have never played the guitar, but my brother has.",
          "img": "https://wolf-labs.pages.dev/p/5b56cd229b31/have-you-ever-seen-the-rain/img/live-garagem.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I saw snow in 2019, but I have never seen the sea.",
          "img": "https://wolf-labs.pages.dev/p/5b56cd229b31/have-you-ever-seen-the-rain/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have + participle, or the past? Four quick ones.",
      "regra": "<b>have / has</b> + participle (seen, been, eaten) · <b>never</b> after have · with a date (in 2019, last year): the past.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you ever been to an island",
          "aceita": [],
          "d": "Dica: pergunta: <b>have</b> + you + <b>ever</b> + particípio (been)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have saw that movie twice.",
          "r": "I have seen that movie twice.",
          "aceita": [],
          "d": "Dica: depois de <b>have</b>, o particípio de see é <b>seen</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have visited Chile in 2019.",
          "r": "I visited Chile in 2019.",
          "aceita": [],
          "d": "Dica: com data (in 2019), use o passado simples."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He have never seen snow.",
          "r": "He has never seen snow.",
          "aceita": [
            "He's never seen snow."
          ],
          "d": "Dica: com <b>he</b>, é <b>has</b>, não 'have'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/5b56cd229b31/have-you-ever-seen-the-rain/img/live-garagem.webp",
      "leg": "A garage with guitars and drums",
      "pede": "Look at the picture: a garage with guitars and drums, and rain on the window. Write 2 or 3 sentences about things you <b>have done</b> and things you <b>have never done</b>.",
      "ph": "I have … I have never …",
      "ex": "I have played the guitar twice. I have never played the drums. I have never been to a concert."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one place you have been to? What is one place you have never been to?",
          "ph": "I have been to … I have never been to …",
          "ex": "I have been to the beach many times. I have never been to Japan."
        },
        {
          "q": "Have you ever eaten something very strange? What was it?",
          "ph": "Yes, I have. I ate … / No, I haven't.",
          "ex": "Yes, I have. I ate a very hot pepper last year."
        }
      ]
    }
  }
};
