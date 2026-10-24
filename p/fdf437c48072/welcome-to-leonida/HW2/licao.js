/* WELCOME TO LEONIDA · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect: just / already / yet / still. B1: nenhum português. Jogo: falas originais; viagem e cidade, sem crime (GTA VI não aparece). Só live-* escuras (lum < 45). */
window.HW2 = {
  "id": "welcome-to-leonida",
  "titulo": "Welcome to Leonida",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fdf437c48072/welcome-to-leonida/img/live-skyline.webp",
  "alvo": "present perfect with just / already / yet / still: already = sooner than expected, yet = questions and negatives, at the end; still = it continues, before the verb or before haven't; has / have + the third form (seen, paid, eaten), never the simple past",
  "abrir": "Think of a trip you are planning. What have you already done, and what haven't you done yet?",
  "fecho": "<b>Already</b> = done, sooner than expected: <i>I've already booked it.</i> <b>Yet</b> = questions and negatives, at the end: <i>Have you booked it yet?</i> <b>Still</b> = it continues: <i>I still haven't booked it</i> (never <i>haven't still</i>). <b>Just</b> = a moment ago. After have / has, the third form: <i>seen, paid, eaten</i>.",
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
      "sub": "Mia and Leo plan a trip by the sea. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fdf437c48072/welcome-to-leonida/img/live-bridge.webp",
      "leg": "A long bridge over the sea at sunset",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm on the long bridge right now. Have you booked the hotel yet?"
        },
        {
          "quem": "leo",
          "t": "Not yet. I still haven't found a good one near the beach."
        },
        {
          "quem": "mia",
          "t": "Hurry up! I've already bought the tickets for the boat tour."
        },
        {
          "quem": "leo",
          "t": "Already? That was fast. Have you eaten yet?"
        },
        {
          "quem": "mia",
          "t": "Yes, I've just finished a sandwich at the diner. The coffee here is great."
        },
        {
          "quem": "leo",
          "t": "Lucky you. I haven't had breakfast yet. I'm still packing."
        },
        {
          "quem": "mia",
          "t": "Still packing? Our bus leaves at nine!"
        },
        {
          "quem": "leo",
          "t": "Relax. I've already put my passport in my bag. I just need my charger."
        },
        {
          "quem": "mia",
          "t": "Good. Have you seen the skyline at night yet? It's beautiful."
        },
        {
          "quem": "leo",
          "t": "Not yet. I'll see it tomorrow, with you."
        }
      ],
      "perguntas": [
        {
          "q": "Has Leo booked the hotel?",
          "op": [
            "Not yet",
            "Yes, a long time ago",
            "He just did it"
          ],
          "a": 0,
          "por": "Not yet. I still haven't found a good one near the beach."
        },
        {
          "q": "What has Mia already bought?",
          "op": [
            "Tickets for the boat tour",
            "A new bag",
            "Two coffees"
          ],
          "a": 0,
          "por": "I've already bought the tickets for the boat tour."
        },
        {
          "q": "What is Leo still doing?",
          "op": [
            "Packing",
            "Eating breakfast",
            "Driving"
          ],
          "a": 0,
          "por": "I'm still packing."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a trip. Hear it, then say it.",
      "frases": [
        {
          "t": "Have you crossed the long bridge yet?",
          "img": "https://wolf-labs.pages.dev/p/fdf437c48072/welcome-to-leonida/img/live-bridge.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I've already bought the tickets for the boat tour.",
          "img": "https://wolf-labs.pages.dev/p/fdf437c48072/welcome-to-leonida/img/live-swamp.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I still haven't tried the coffee at that diner.",
          "img": "https://wolf-labs.pages.dev/p/fdf437c48072/welcome-to-leonida/img/live-diner.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "already, yet, still. Four quick ones.",
      "regra": "<b>already</b> = done · <b>yet</b> = questions and negatives, at the end · <b>still haven't</b> (not <i>haven't still</i>) · have / has + third form.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Have you booked the hotel yet?",
          "aceita": [],
          "d": "Hint: in a question, <b>yet</b> goes at the end."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is in the wrong place.",
          "mostra": "I haven't still booked the hotel.",
          "r": "I still haven't booked the hotel.",
          "aceita": [
            "I haven't booked the hotel yet."
          ],
          "d": "Hint: <b>still</b> goes before <b>haven't</b>, never after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Have you saw the bridge yet?",
          "r": "Have you seen the bridge yet?",
          "aceita": [],
          "d": "Hint: after <b>have</b>, use the third form: <b>seen</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He has already pay the bill.",
          "r": "He has already paid the bill.",
          "aceita": [
            "He's already paid the bill.",
            "He has paid the bill already."
          ],
          "d": "Hint: after <b>has</b>, use the third form: <b>paid</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fdf437c48072/welcome-to-leonida/img/live-skyline.webp",
      "leg": "A city skyline across the water at night",
      "pede": "Look at the picture: a city skyline across the water at night. Write 2 or 3 sentences about a trip you are planning. Say what you have <b>already</b> done and what you haven't done <b>yet</b>. Use <b>still</b> once.",
      "ph": "I've already … but I haven't … yet.",
      "ex": "I've already booked the hotel. I haven't bought the tickets yet. I still haven't packed my bag."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What have you already done today?",
          "ph": "I've already …",
          "ex": "I've already had breakfast and answered two messages."
        },
        {
          "q": "What haven't you done yet this week, but you want to do?",
          "ph": "I haven't … yet.",
          "ex": "I haven't called my cousin yet. I still haven't started my book."
        }
      ]
    }
  }
};
