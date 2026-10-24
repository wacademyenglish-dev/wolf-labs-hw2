/* AS SOON AS I WAKE UP · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: as soon as / until / before + present. A2: dicas em português só nas notas (d). Sem imagens (fotofobia). */
window.HW2 = {
  "id": "as-soon-as-i-wake-up",
  "titulo": "As Soon As I Wake Up",
  "nivel": "A2",
  "minutos": 10,
  "alvo": "time clauses about the future: as soon as / until / before / after / when / by the time + PRESENT, and will in the other half; never when I will arrive",
  "abrir": "What do you do as soon as you wake up?",
  "fecho": "Talking about tomorrow? The time half stays in the <b>present</b>: <i>I'll call you when I arrive. As soon as I wake up, I'll drink water.</i> <b>Until</b> = all the time up to that moment. Never <i>when I will arrive</i>.",
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
      "sub": "Mia and Leo the night before an early train. A new scene, about 45 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I have an early train tomorrow. I'll call you as soon as I arrive."
        },
        {
          "quem": "mia",
          "t": "OK. What time do you wake up?"
        },
        {
          "quem": "leo",
          "t": "At five. As soon as I wake up, I'll drink some water."
        },
        {
          "quem": "mia",
          "t": "And before you leave, check your ticket."
        },
        {
          "quem": "leo",
          "t": "I will. I'll wait at the station until the train comes."
        },
        {
          "quem": "mia",
          "t": "Good. By the time you get there, I'll be at work."
        },
        {
          "quem": "leo",
          "t": "So I'll text you when I get on the train."
        },
        {
          "quem": "mia",
          "t": "And after you arrive, send me a photo."
        },
        {
          "quem": "leo",
          "t": "I promise. When I see the sea, I'll send ten!"
        },
        {
          "quem": "mia",
          "t": "Ha! I'll be waiting."
        }
      ],
      "perguntas": [
        {
          "q": "What will Leo do as soon as he wakes up?",
          "op": [
            "Drink some water",
            "Call Mia",
            "Check his phone"
          ],
          "a": 0,
          "por": "As soon as I wake up, I'll drink some water."
        },
        {
          "q": "How long will Leo wait at the station?",
          "op": [
            "Until the train comes",
            "For an hour",
            "Until Mia calls"
          ],
          "a": 0,
          "por": "I'll wait at the station until the train comes."
        },
        {
          "q": "When will Leo text Mia?",
          "op": [
            "When he gets on the train",
            "When he wakes up",
            "After he sends the photo"
          ],
          "a": 0,
          "por": "I'll text you when I get on the train."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about tomorrow morning. Hear it, then say it.",
      "frases": [
        {
          "t": "I'll call you as soon as I arrive.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'll wait here until the train comes.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Check your ticket before you leave.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Present or will? Four quick ones.",
      "regra": "<b>as soon as · until · before · after · when</b> + <b>present</b> · the plan half has <b>will</b> · never <b>when I will arrive</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I'll text you when I get home.",
          "aceita": [],
          "d": "Dica: depois de <b>when</b>, presente: <b>I get</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the time half is present.",
          "mostra": "I'll call you when I will arrive.",
          "r": "I'll call you when I arrive.",
          "aceita": [
            "I will call you when I arrive."
          ],
          "d": "Dica: a parte do tempo fica no presente: <b>when I arrive</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the time half is present.",
          "mostra": "Wait here until I will come back.",
          "r": "Wait here until I come back.",
          "aceita": [],
          "d": "Dica: depois de <b>until</b>, presente: <b>I come back</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: before needs a full sentence.",
          "mostra": "Before to leave, check the door.",
          "r": "Before you leave, check the door.",
          "aceita": [
            "Before I leave, check the door.",
            "Before we leave, check the door."
          ],
          "d": "Dica: <b>before</b> + frase completa: <b>before you leave</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about your real tomorrow morning. Use <b>as soon as</b>, <b>before</b> or <b>until</b>. The time half stays in the present.",
      "ph": "As soon as I wake up, I'll …",
      "ex": "As soon as I wake up, I'll make coffee. Before I leave, I'll check my bag. I'll wait for the bus until it comes."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you do as soon as you wake up tomorrow?",
          "ph": "As soon as I wake up, I'll …",
          "ex": "As soon as I wake up, I'll drink water."
        },
        {
          "q": "A friend asks: when will you call me? Answer with when or after.",
          "ph": "I'll call you …",
          "ex": "I'll call you after I finish work."
        }
      ]
    }
  }
};
