/* THIRTY-EIGHT YEARS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect continuous (for / since). Bíblia WEB: John 5:8 e 5:9 (Out loud), John 5:11 (Listen), 5:8 (Você). Tema leve, sem doença. B1: nenhum português. */
window.HW2 = {
  "id": "thirty-eight-years",
  "titulo": "Thirty-Eight Years",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/9e8be6899633/thirty-eight-years/img/live-betesda.webp",
  "alvo": "present perfect continuous: have / has been + -ing for something that started and continues; for + a piece of time, since + a starting point; How long have you been ...?",
  "abrir": "What have you been doing a lot lately?",
  "fecho": "<b>have / has been + -ing</b> for something that started and is still going: <i>I've been waiting.</i> <b>For</b> + a length (<i>for two hours</i>); <b>since</b> + a starting point (<i>since Monday</i>). The question: <i>How long have you been living here?</i>",
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
      "sub": "Mia and Leo at the kitchen table. Leo quotes John 5:11. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/9e8be6899633/thirty-eight-years/img/live-betesda.webp",
      "leg": "A quiet stone walkway by the water",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you've been staring at that page for ten minutes. What are you reading?"
        },
        {
          "quem": "leo",
          "t": "John, chapter five. A man had been waiting beside a pool for thirty-eight years. Imagine that."
        },
        {
          "quem": "mia",
          "t": "Thirty-eight years! How long have you been reading this chapter?"
        },
        {
          "quem": "leo",
          "t": "Since breakfast. I've been trying to understand why he waited for so long."
        },
        {
          "quem": "mia",
          "t": "Did anyone help him?"
        },
        {
          "quem": "leo",
          "t": "Jesus did, and the man got up that same day. Later he said, in John 5:11, “He who made me well said to me, ‘Take up your mat and walk.’”"
        },
        {
          "quem": "mia",
          "t": "What a beautiful story. I've been walking every morning since January, and I feel stronger."
        },
        {
          "quem": "leo",
          "t": "How long have you been doing that?"
        },
        {
          "quem": "mia",
          "t": "Since January, so for ten months now. Walk with me tomorrow!"
        }
      ],
      "perguntas": [
        {
          "q": "How long has Leo been reading the chapter?",
          "op": [
            "Since breakfast",
            "For thirty-eight years",
            "Since January"
          ],
          "a": 0,
          "por": "Since breakfast. I've been trying to understand why he waited for so long."
        },
        {
          "q": "Since when has Mia been walking every morning?",
          "op": [
            "Since January",
            "Since breakfast",
            "For ten minutes"
          ],
          "a": 0,
          "por": "I've been walking every morning since January."
        },
        {
          "q": "How long had the man been waiting beside the pool?",
          "op": [
            "For thirty-eight years",
            "For ten months",
            "Since breakfast"
          ],
          "a": 0,
          "por": "A man had been waiting beside a pool for thirty-eight years."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The second and third are from the Bible: John 5:8 and John 5:9 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "The mat has been by the water since morning.",
          "img": "https://wolf-labs.pages.dev/p/9e8be6899633/thirty-eight-years/img/live-esteira.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Arise, take up your mat, and walk.",
          "img": "https://wolf-labs.pages.dev/p/9e8be6899633/thirty-eight-years/img/live-betesda.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Immediately, the man was made well, and took up his mat and walked.",
          "img": "https://wolf-labs.pages.dev/p/9e8be6899633/thirty-eight-years/img/live-capa2.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have been + -ing, for and since. Four quick ones.",
      "regra": "<b>have / has been + -ing</b> · <b>for</b> + a length (for two weeks) · <b>since</b> + a starting point (since Monday) · <b>How long have you been ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "They have been waiting for the bus since noon.",
          "aceita": [],
          "d": "Hint: <b>have been</b> + verb-ing, then <b>since</b> + a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm living here since 2019.",
          "r": "I've been living here since 2019.",
          "aceita": [
            "I have been living here since 2019.",
            "I've lived here since 2019.",
            "I have lived here since 2019."
          ],
          "d": "Hint: it started in 2019 and it is still going, so <b>have been living</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We have been waiting since two hours.",
          "r": "We have been waiting for two hours.",
          "aceita": [
            "We've been waiting for two hours."
          ],
          "d": "Hint: two hours is a length of time, so <b>for</b>. <i>Since</i> needs a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "How long time have you been learning English?",
          "r": "How long have you been learning English?",
          "aceita": [
            "How long have you learned English?"
          ],
          "d": "Hint: just <b>How long</b>, never <i>how long time</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/9e8be6899633/thirty-eight-years/img/live-esteira.webp",
      "leg": "A mat beside still water",
      "pede": "Look at the picture: a mat beside still water. Write 2 or 3 sentences about something you have been doing for a long time (a habit, a hobby, a job). Use <b>have been + -ing</b>, <b>for</b> and <b>since</b>.",
      "ph": "I've been … for / since …",
      "ex": "I've been learning English for two years. I've been running every morning since March."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In John 5:8 Jesus said to him, “Arise, take up your mat, and walk.” What is something you have been putting off? Since when?",
          "ph": "I've been putting off … since …",
          "ex": "I've been putting off cleaning my room for a week."
        },
        {
          "q": "How long have you been learning English? Why did you start?",
          "ph": "I've been learning English for / since …",
          "ex": "I've been learning English for three years, because I want a better job."
        }
      ]
    }
  }
};
