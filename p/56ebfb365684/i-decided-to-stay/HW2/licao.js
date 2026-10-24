/* I DECIDED TO STAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: want/hope/decide + to x enjoy/finish/mind + -ing. A2: dicas em português só nas notas (d). Sem imagens (fotofobia). */
window.HW2 = {
  "id": "i-decided-to-stay",
  "titulo": "I Decided to Stay",
  "nivel": "A2",
  "minutos": 10,
  "alvo": "verb patterns: want / need / plan / hope / decide + to + verb; enjoy / avoid / finish / mind / keep + -ing; never to + -ing",
  "abrir": "Where do you want to travel one day?",
  "fecho": "<b>want, need, plan, hope, decide + TO + verb</b>: <i>I decided to stay.</i> <b>enjoy, avoid, finish, mind, keep + -ING</b>: <i>I enjoy walking.</i> Never <i>to</i> and <i>-ing</i> together.",
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
      "sub": "Mia and Leo on a video call. A new scene, about 45 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I have news. I decided to stay in Galway for another year."
        },
        {
          "quem": "mia",
          "t": "Really? I thought you needed to come home in June."
        },
        {
          "quem": "leo",
          "t": "I did, but I enjoy living here. And I don't mind working early."
        },
        {
          "quem": "mia",
          "t": "What do you do there?"
        },
        {
          "quem": "leo",
          "t": "I work in a coffee shop. I finished cleaning the floor at six this morning."
        },
        {
          "quem": "mia",
          "t": "Wow. Do you avoid going out at night?"
        },
        {
          "quem": "leo",
          "t": "No, but I keep saying no to the late buses. And I hope to learn Irish by December."
        },
        {
          "quem": "mia",
          "t": "That's a big plan. Do you want to come back one day?"
        },
        {
          "quem": "leo",
          "t": "Yes. I plan to visit in the summer."
        },
        {
          "quem": "mia",
          "t": "Good. I'll keep sending you photos."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo decide to do?",
          "op": [
            "Stay in Galway",
            "Come home in June",
            "Learn Irish in June"
          ],
          "a": 0,
          "por": "I decided to stay in Galway for another year."
        },
        {
          "q": "What did Leo finish doing this morning?",
          "op": [
            "Cleaning the floor",
            "Learning Irish",
            "Taking photos"
          ],
          "a": 0,
          "por": "I finished cleaning the floor at six this morning."
        },
        {
          "q": "What does Leo hope to do?",
          "op": [
            "Learn Irish by December",
            "Visit Mia in June",
            "Work at night"
          ],
          "a": 0,
          "por": "I hope to learn Irish by December."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a new life. Hear it, then say it.",
      "frases": [
        {
          "t": "I decided to stay another year.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I enjoy living by the sea.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I finished packing at ten.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "To or -ing? Four quick ones.",
      "regra": "<b>want · need · plan · hope · decide + to + verb</b> · <b>enjoy · avoid · finish · mind · keep + -ing</b> · never to + -ing.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I don't mind waking up early.",
          "aceita": [],
          "d": "Dica: <b>mind</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: enjoy needs -ing.",
          "mostra": "I enjoy to travel.",
          "r": "I enjoy traveling.",
          "aceita": [
            "I enjoy travelling."
          ],
          "d": "Dica: <b>enjoy</b> + <b>-ing</b>, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: want needs to.",
          "mostra": "We want going home.",
          "r": "We want to go home.",
          "aceita": [],
          "d": "Dica: <b>want to</b> + verbo simples."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: after to, the simple verb.",
          "mostra": "She decided to staying here.",
          "r": "She decided to stay here.",
          "aceita": [],
          "d": "Dica: depois de <b>to</b>, o verbo fica simples: <b>stay</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about a place where you want to stay or visit: one with <b>want / hope / plan + to</b> and one with <b>enjoy / avoid / finish / mind / keep + -ing</b>.",
      "ph": "I hope to …",
      "ex": "I want to live near the sea. I enjoy walking on the beach. I plan to visit my cousin in July."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you enjoy doing on weekends?",
          "ph": "I enjoy …",
          "ex": "I enjoy cooking with my family."
        },
        {
          "q": "What do you want to do next year?",
          "ph": "Next year I want to …",
          "ex": "Next year I want to travel to Canada."
        }
      ]
    }
  }
};
