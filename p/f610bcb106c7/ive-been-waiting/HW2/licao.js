/* I'VE BEEN WAITING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect continuous (for / since). B1: nenhum português. */
window.HW2 = {
  "id": "ive-been-waiting",
  "titulo": "I've Been Waiting",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f610bcb106c7/ive-been-waiting/img/live-capa.webp",
  "alvo": "present perfect continuous: have / has been + -ing for something that started in the past and is still going; for + a length of time, since + a starting point; How long have you been ...?; state verbs (know, have, want) stay simple",
  "abrir": "What is the longest you have ever waited at an airport or a station?",
  "fecho": "<b>have / has been + -ing</b> for something still going: <i>We've been waiting since nine.</i> <b>For</b> + a length (<i>for four hours</i>), <b>since</b> + the start (<i>since midnight</i>). Know, have and want skip the -ing: <i>I've known her for years.</i>",
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
      "sub": "Mia and Leo at a departure gate, late at night. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f610bcb106c7/ive-been-waiting/img/live-conversa.webp",
      "leg": "A paper cup and a suitcase at the gate",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, we've been sitting in this lounge since nine o'clock. How long has the flight been delayed?"
        },
        {
          "quem": "leo",
          "t": "For four hours now. They've been saying thirty more minutes all night."
        },
        {
          "quem": "mia",
          "t": "And I've been drinking coffee the whole time. I've had five cups."
        },
        {
          "quem": "leo",
          "t": "Five! No wonder you haven't been sleeping."
        },
        {
          "quem": "mia",
          "t": "I know. What have you been doing all this time?"
        },
        {
          "quem": "leo",
          "t": "I've been reading the same page of this book since midnight. Honestly, I've been watching the board more than reading."
        },
        {
          "quem": "mia",
          "t": "Look at the man by the window. He has been sleeping on his suitcase for hours."
        },
        {
          "quem": "leo",
          "t": "Lucky man. Wait, the board is changing. Gate fourteen, boarding at ten past two!"
        },
        {
          "quem": "mia",
          "t": "Finally! I've been waiting for this moment since the first delay."
        },
        {
          "quem": "leo",
          "t": "Let's go before they change their minds."
        }
      ],
      "perguntas": [
        {
          "q": "How long has the flight been delayed?",
          "op": [
            "For four hours",
            "Since midnight",
            "For five days"
          ],
          "a": 0,
          "por": "For four hours now."
        },
        {
          "q": "What has Leo been doing since midnight?",
          "op": [
            "Reading the same page of a book",
            "Drinking coffee",
            "Sleeping on his suitcase"
          ],
          "a": 0,
          "por": "I've been reading the same page of this book since midnight."
        },
        {
          "q": "Who has been sleeping on a suitcase for hours?",
          "op": [
            "A man by the window",
            "Leo",
            "Mia"
          ],
          "a": 0,
          "por": "He has been sleeping on his suitcase for hours."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about waiting. Hear it, then say it.",
      "frases": [
        {
          "t": "We've been waiting at this gate since nine o'clock.",
          "img": "https://wolf-labs.pages.dev/p/f610bcb106c7/ive-been-waiting/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The man has been sleeping on his suitcase for hours.",
          "img": "https://wolf-labs.pages.dev/p/f610bcb106c7/ive-been-waiting/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How long have you been sitting in this lounge?",
          "img": "https://wolf-labs.pages.dev/p/f610bcb106c7/ive-been-waiting/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have been + -ing, for and since, and state verbs. Four quick ones.",
      "regra": "<b>have / has been + -ing</b> · <b>for</b> + a length (for six hours) · <b>since</b> + a start (since nine) · know / have / want: no -ing",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She has been reading the same page since midnight.",
          "aceita": [],
          "d": "Hint: <b>has been</b> + verb-ing, then <b>since</b> + a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tense is wrong.",
          "mostra": "We are waiting at this gate since nine.",
          "r": "We've been waiting at this gate since nine.",
          "aceita": [
            "We have been waiting at this gate since nine.",
            "We've been waiting at this gate since nine o'clock."
          ],
          "d": "Hint: it started at nine and it is still going: <b>have been waiting</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He has been sleeping here since six hours.",
          "r": "He has been sleeping here for six hours.",
          "aceita": [
            "He's been sleeping here for six hours."
          ],
          "d": "Hint: six hours is a length of time, so <b>for</b>. <i>Since</i> needs a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: this verb does not take -ing.",
          "mostra": "I've been knowing this airline for years.",
          "r": "I've known this airline for years.",
          "aceita": [
            "I have known this airline for years."
          ],
          "d": "Hint: <b>know</b> is a state verb, so use <b>have known</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f610bcb106c7/ive-been-waiting/img/live-conversa.webp",
      "leg": "A paper cup of coffee beside a suitcase",
      "pede": "Look at the picture: a paper cup of coffee next to a suitcase in a quiet airport lounge. Write 2 or 3 sentences: how long this person has been waiting, and what they have been doing. Use <b>have been + -ing</b>, <b>for</b> and <b>since</b>.",
      "ph": "The traveler has been waiting since …",
      "ex": "The traveler has been waiting for three hours. He has been drinking coffee since midnight, and he has been watching the board."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you been waiting for lately? How long?",
          "ph": "I've been waiting for … for / since …",
          "ex": "I've been waiting for an answer from my landlord for two weeks."
        },
        {
          "q": "What have you been doing a lot this month? Since when?",
          "ph": "I've been … a lot since …",
          "ex": "I've been cooking a lot since I bought a new pan."
        }
      ]
    }
  }
};
