/* HOW WILL IT CHANGE US? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will / won't. A2: dicas em português só nas notas (d). Falas originais, sem cena do filme. Só imagens live-* escuras. */
window.HW2 = {
  "id": "how-will-it-change-us",
  "titulo": "How Will It Change Us?",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1ad4f64ab43e/how-will-it-change-us/img/live-capa.webp",
  "alvo": "will / won't + plain verb for predictions; Will they ...? + Yes, they will / No, they won't; I think ... will / I don't think ... will; never will to, will goes, They will come?",
  "abrir": "What will you do tomorrow?",
  "fecho": "<b>will / won't</b> + the plain verb: <i>People will stay home. Schools won't open.</i> Question: <b>Will</b> + person + verb: <i>Will they come?</i> <b>I think … will</b> · <b>I don't think … will</b>. Never <i>will to, will goes</i>.",
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
      "sub": "Mia and Leo look at the night sky near the big antennas. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/1ad4f64ab43e/how-will-it-change-us/img/live-ceu.webp",
      "leg": "Big antennas under the stars",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the sky. The big antennas are listening tonight."
        },
        {
          "quem": "mia",
          "t": "I think they will hear something soon."
        },
        {
          "quem": "leo",
          "t": "Will people be afraid?"
        },
        {
          "quem": "mia",
          "t": "Some will be afraid, but I don't think everyone will be."
        },
        {
          "quem": "leo",
          "t": "What will the news say tomorrow?"
        },
        {
          "quem": "mia",
          "t": "The news will talk about it all day. Schools won't open."
        },
        {
          "quem": "leo",
          "t": "Won't they? Will the internet work?"
        },
        {
          "quem": "mia",
          "t": "Yes, it will. But it will be very slow."
        },
        {
          "quem": "leo",
          "t": "And what will you do?"
        },
        {
          "quem": "mia",
          "t": "I'll stay home, and I won't go to work. Will you call me?"
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia think will happen soon?",
          "op": [
            "The antennas will hear something",
            "The sky will fall",
            "It will rain"
          ],
          "a": 0,
          "por": "I think they will hear something soon."
        },
        {
          "q": "What won't happen tomorrow?",
          "op": [
            "Schools won't open",
            "The news won't talk",
            "The internet won't work"
          ],
          "a": 0,
          "por": "The news will talk about it all day. Schools won't open."
        },
        {
          "q": "Will the internet work?",
          "op": [
            "Yes, but it will be slow",
            "No, it won't",
            "Yes, and it will be very fast"
          ],
          "a": 0,
          "por": "Yes, it will. But it will be very slow."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about tomorrow. Hear it, then say it.",
      "frases": [
        {
          "t": "I think they will hear something soon.",
          "img": "https://wolf-labs.pages.dev/p/1ad4f64ab43e/how-will-it-change-us/img/live-ceu.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The news will talk about it all day.",
          "img": "https://wolf-labs.pages.dev/p/1ad4f64ab43e/how-will-it-change-us/img/live-estudio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I won't go to work tomorrow.",
          "img": "https://wolf-labs.pages.dev/p/1ad4f64ab43e/how-will-it-change-us/img/live-deserto.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will, won't, Will they? Four quick ones.",
      "regra": "<b>will / won't</b> + plain verb · <b>Will</b> + person + verb? · <b>I think … will</b> · <b>I don't think … will</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I don't think everyone will be afraid.",
          "aceita": [],
          "d": "Dica: <b>I don't think</b> + sujeito + <b>will</b>: o não vem antes."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will to call you tomorrow.",
          "r": "I will call you tomorrow.",
          "aceita": [],
          "d": "Dica: depois de <b>will</b>, o verbo vem sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She will goes to the party.",
          "r": "She will go to the party.",
          "aceita": [],
          "d": "Dica: depois de <b>will</b>, o verbo fica no básico, sem -s: <b>go</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "They will come tomorrow?",
          "r": "Will they come tomorrow?",
          "aceita": [],
          "d": "Dica: pergunta com will começa com <b>Will</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1ad4f64ab43e/how-will-it-change-us/img/live-mapa.webp",
      "leg": "A glowing world map",
      "pede": "Look at the picture: a glowing world map. Write 2 or 3 sentences: after big news, what will happen in your city? Use <b>will</b> and <b>won't</b>.",
      "ph": "People will … Schools won't …",
      "ex": "People will stay home and talk to their families. The internet will be slow. I think the shops won't open."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do tomorrow? What won't you do?",
          "ph": "I will … I won't …",
          "ex": "I will study English after work. I won't watch TV."
        },
        {
          "q": "Do you think people will live on another planet one day? Why?",
          "ph": "I think people will … / I don't think …",
          "ex": "I think people will live on the Moon one day. I don't think it will be soon."
        }
      ]
    }
  }
};
