/* THE WALK-IN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: dores de viagem (hurts / have), ago e should. A2: dicas em portugues so nas notas (d). Sem imagem; sem doenca (regra 9): dores de voo e caminhada. */
window.HW2 = {
  "id": "walk-in",
  "titulo": "The Walk-In",
  "nivel": "A2",
  "minutos": 10,
  "capa": "",
  "alvo": "saying what hurts after a trip (My back hurts · My feet hurt · I have sore feet), how long (two days ago) and advice with should / shouldn't + plain verb; never I am with, never should to, never since two days",
  "abrir": "What hurts after a long day of walking?",
  "fecho": "<b>I have</b> sore feet. <b>My back hurts.</b> <b>My feet hurt.</b> Not <i>I am with</i>. <b>Two days ago</b> = it started two days before now. Advice: <b>You should</b> rest. <b>You shouldn't</b> walk a lot. No <i>to</i> after should.",
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
      "sub": "Mia at a walk-in desk in Vancouver after a long trip. A new scene, about 45 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi, can I have a walk-in appointment? My back hurts."
        },
        {
          "quem": "leo",
          "t": "Of course. Why does it hurt?"
        },
        {
          "quem": "mia",
          "t": "I sat on a plane for ten hours. And my feet hurt too."
        },
        {
          "quem": "leo",
          "t": "Did you walk a lot yesterday?"
        },
        {
          "quem": "mia",
          "t": "Yes. I walked in the park for hours."
        },
        {
          "quem": "leo",
          "t": "And how long does it hurt?"
        },
        {
          "quem": "mia",
          "t": "It started two days ago."
        },
        {
          "quem": "leo",
          "t": "I see. You should rest your feet and drink some water."
        },
        {
          "quem": "mia",
          "t": "Should I walk today?"
        },
        {
          "quem": "leo",
          "t": "No, you shouldn't walk a lot. You should sit by the sea and relax."
        }
      ],
      "perguntas": [
        {
          "q": "What hurts?",
          "op": [
            "Mia's back and feet",
            "Mia's head",
            "Mia's arm"
          ],
          "a": 0,
          "por": "My back hurts. And my feet hurt too."
        },
        {
          "q": "When did it start?",
          "op": [
            "Two days ago",
            "Yesterday",
            "Last month"
          ],
          "a": 0,
          "por": "It started two days ago."
        },
        {
          "q": "What should Mia do today?",
          "op": [
            "Sit by the sea and relax",
            "Walk in the park",
            "Take a long flight"
          ],
          "a": 0,
          "por": "You should sit by the sea and relax."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a long trip. Hear it, then say it.",
      "frases": [
        {
          "t": "My back hurts after the long flight.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You should rest and drink some water.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You shouldn't walk a lot today.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "What hurts? What should you do? Four quick ones.",
      "regra": "<b>I have</b> sore feet · <b>My back hurts</b> · <b>two days ago</b> · <b>You should</b> + plain verb · <b>You shouldn't</b> · never <i>should to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You should rest your feet today.",
          "aceita": [],
          "d": "Dica: <b>should</b> + verbo limpo (rest)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am with sore feet today.",
          "r": "I have sore feet today.",
          "aceita": [],
          "d": "Dica: em inglês é <b>have</b>, não 'be with'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after should.",
          "mostra": "You should to rest your back.",
          "r": "You should rest your back.",
          "aceita": [],
          "d": "Dica: depois de <b>should</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "It started since two days.",
          "r": "It started two days ago.",
          "aceita": [],
          "d": "Dica: 'há dois dias' é <b>two days ago</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "After a long trip, your back and feet hurt. Write 2 or 3 sentences: what hurts, since when, and one piece of advice with <b>should</b> or <b>shouldn't</b>.",
      "ph": "My … hurts. I should …",
      "ex": "My feet hurt. It started two days ago. I should rest and I shouldn't walk a lot."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What hurts after a long day of walking?",
          "ph": "After a long walk, my … hurt.",
          "ex": "After a long walk, my feet hurt."
        },
        {
          "q": "A friend is very tired after a long flight. What should they do?",
          "ph": "You should …",
          "ex": "You should rest and drink some water."
        }
      ]
    }
  }
};
