/* THE MISSING YEARS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple was/were, irregulares, didn't, Did. A2: dicas em português só nas notas (d). Falas originais, sem violência. */
window.HW2 = {
  "id": "the-missing-years",
  "titulo": "The Missing Years",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/20bac56f120e/the-missing-years/img/live-mar.webp",
  "alvo": "past simple of a journey: was / were (one thing, many things), irregular verbs (took, ate, forgot, came), didn't + plain verb, Did he ...? Yes, he did.",
  "abrir": "What was your longest trip? How long was it?",
  "fecho": "<b>was</b> (I, he, she, it) · <b>were</b> (you, we, they, many things). Irregular: <b>took, ate, forgot, came</b>. No: <b>didn't</b> + plain verb. Question: <b>Did</b> he + plain verb?",
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
      "sub": "Mia and Leo talk about a film trailer about a long way home. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/20bac56f120e/the-missing-years/img/live-mar.webp",
      "leg": "A dark sea",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, did you watch the trailer last night?"
        },
        {
          "quem": "mia",
          "t": "Yes, I did. The sea was dark and the storm was huge."
        },
        {
          "quem": "leo",
          "t": "The king was away for twenty years. Did he forget his home?"
        },
        {
          "quem": "mia",
          "t": "No, he didn't. He remembered his wife and his son."
        },
        {
          "quem": "leo",
          "t": "And what did they do at home?"
        },
        {
          "quem": "mia",
          "t": "His wife waited every day. His son took the old bow from the wall."
        },
        {
          "quem": "leo",
          "t": "Where were the ships after the storm?"
        },
        {
          "quem": "mia",
          "t": "They were near a quiet island. The men ate and slept there."
        },
        {
          "quem": "leo",
          "t": "Did the king come home in the end?"
        },
        {
          "quem": "mia",
          "t": "Yes, he came home. But his town was very different."
        }
      ],
      "perguntas": [
        {
          "q": "How long was the king away?",
          "op": [
            "Twenty years",
            "Two years",
            "Ten days"
          ],
          "a": 0,
          "por": "The king was away for twenty years."
        },
        {
          "q": "What did the king remember?",
          "op": [
            "His wife and his son",
            "His ships",
            "His old bow"
          ],
          "a": 0,
          "por": "He remembered his wife and his son."
        },
        {
          "q": "What did the son take from the wall?",
          "op": [
            "The old bow",
            "A letter",
            "A ship"
          ],
          "a": 0,
          "por": "His son took the old bow from the wall."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the trip. Hear it, then say it.",
      "frases": [
        {
          "t": "The sea was dark and the storm was huge.",
          "img": "https://wolf-labs.pages.dev/p/20bac56f120e/the-missing-years/img/live-mar.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The king didn't forget his home.",
          "img": "https://wolf-labs.pages.dev/p/20bac56f120e/the-missing-years/img/live-ilha.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Did the men eat on the island? Yes, they did.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was, were, didn't, Did. Four quick ones.",
      "regra": "<b>was</b> (one) · <b>were</b> (many) · irregular: <b>took, ate, forgot, came</b> · <b>didn't</b> + plain verb · <b>Did</b> he + plain verb?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Did he forget his home?",
          "aceita": [],
          "d": "Dica: <b>Did</b> + pessoa + verbo base (forget)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The men was tired.",
          "r": "The men were tired.",
          "aceita": [],
          "d": "Dica: os homens são muitos: <b>were</b>, não 'was'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She taked the old bow.",
          "r": "She took the old bow.",
          "aceita": [],
          "d": "Dica: take é irregular: o passado é <b>took</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He didn't saw the island.",
          "r": "He didn't see the island.",
          "aceita": [
            "He did not see the island."
          ],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica no base: <b>see</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/20bac56f120e/the-missing-years/img/live-mar.webp",
      "leg": "A dark sea under a storm",
      "pede": "Look at the picture: a dark sea. Write 2 or 3 sentences about a trip you remember: where you <b>were</b>, what you <b>ate</b> or <b>took</b>, and one thing you <b>didn't</b> do.",
      "ph": "On my last trip I was …",
      "ex": "On my last trip I was in Salvador. I took many photos and I ate fish. I didn't swim because the sea was cold."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What was your longest trip? How long was it?",
          "ph": "My longest trip was to … It was …",
          "ex": "My longest trip was to Salvador. It was ten hours by bus."
        },
        {
          "q": "Did you take photos on your last trip? What did you eat there?",
          "ph": "Yes, I did. I took … and I ate …",
          "ex": "Yes, I did. I took photos of the sea and I ate fish."
        }
      ]
    }
  }
};
