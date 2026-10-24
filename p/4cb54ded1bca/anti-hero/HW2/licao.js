/* ANTI-HERO · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: advérbios de frequência. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "anti-hero",
  "titulo": "Anti-Hero",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4cb54ded1bca/anti-hero/img/live-capa.webp",
  "alvo": "adverbs of frequency: always, usually, often, sometimes, hardly ever, never; before the main verb (I always check), after be (I am always late); never alone, no don't never; How often do you ...?",
  "abrir": "How often do you check your phone?",
  "fecho": "<b>always · usually · often · sometimes · hardly ever · never</b> go before the main verb: <i>I always check my phone.</i> After <b>be</b>: <i>I am never late.</i> <b>never</b> is already no: <i>I never drink coffee</i>, not <i>I don't never</i>. Ask: <i>How often do you …?</i>",
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
      "sub": "Mia and Leo talk about their daily habits. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4cb54ded1bca/anti-hero/img/live-mesa.webp",
      "leg": "A notebook, a lamp and a cup",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how often do you check your phone at work?"
        },
        {
          "quem": "mia",
          "t": "I usually check it every hour. And you?"
        },
        {
          "quem": "leo",
          "t": "I always check it in the morning, but I hardly ever check it at night."
        },
        {
          "quem": "mia",
          "t": "Really? I'm often on my phone at night. I'm never in bed before midnight."
        },
        {
          "quem": "leo",
          "t": "Do you sometimes arrive late?"
        },
        {
          "quem": "mia",
          "t": "Yes, I sometimes arrive late. I'm always the last person in the office."
        },
        {
          "quem": "leo",
          "t": "I'm never late. I always take the early bus, and I never drink coffee after lunch."
        },
        {
          "quem": "mia",
          "t": "Never? I always drink two cups!"
        }
      ],
      "perguntas": [
        {
          "q": "How often does Mia check her phone at work?",
          "op": [
            "Usually every hour",
            "Hardly ever",
            "Only at night"
          ],
          "a": 0,
          "por": "I usually check it every hour."
        },
        {
          "q": "When does Leo hardly ever check his phone?",
          "op": [
            "At night",
            "In the morning",
            "At work"
          ],
          "a": 0,
          "por": "I hardly ever check it at night."
        },
        {
          "q": "Who is always the last person in the office?",
          "op": [
            "Mia",
            "Leo",
            "Their boss"
          ],
          "a": 0,
          "por": "I'm always the last person in the office."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about habits. Hear it, then say it.",
      "frases": [
        {
          "t": "I usually read a book before bed.",
          "img": "https://wolf-labs.pages.dev/p/4cb54ded1bca/anti-hero/img/live-quarto.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "How often do you play the guitar?",
          "img": "https://wolf-labs.pages.dev/p/4cb54ded1bca/anti-hero/img/live-nashville.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I always write in my notebook at night.",
          "img": "https://wolf-labs.pages.dev/p/4cb54ded1bca/anti-hero/img/live-mesa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Where does the word go? Four quick ones.",
      "regra": "<b>always · usually · often · sometimes · hardly ever · never</b> + main verb · <b>be</b> + adverb · never = already no.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is always the first person in the office",
          "aceita": [],
          "d": "Dica: depois do <b>be</b> (is) vem o advérbio: is <b>always</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "I check always my phone.",
          "r": "I always check my phone.",
          "aceita": [],
          "d": "Dica: o advérbio vem antes do verbo: <b>always check</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the word order is wrong.",
          "mostra": "He always is late for work.",
          "r": "He is always late for work.",
          "aceita": [
            "He's always late for work."
          ],
          "d": "Dica: com o verbo <b>be</b>, o advérbio vem depois: is <b>always</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I don't never drink coffee.",
          "r": "I never drink coffee.",
          "aceita": [
            "I don't ever drink coffee."
          ],
          "d": "Dica: <b>never</b> já é negativo: nada de 'don't never'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4cb54ded1bca/anti-hero/img/live-mesa.webp",
      "leg": "A notebook, a lamp and a cup",
      "pede": "Look at the picture: a notebook, a lamp and a cup on a desk. Write 2 or 3 sentences about your habits at night. Use <b>always</b>, <b>usually</b>, <b>often</b>, <b>sometimes</b>, <b>hardly ever</b> or <b>never</b>.",
      "ph": "At night I usually …",
      "ex": "At night I usually read a book. I sometimes write in a notebook. I never drink coffee."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How often do you check your phone? When?",
          "ph": "I … check my phone …",
          "ex": "I check my phone every hour. I never use it at dinner."
        },
        {
          "q": "What do you always do in the morning? What do you never do?",
          "ph": "I always … I never …",
          "ex": "I always drink water. I never skip breakfast."
        }
      ]
    }
  }
};
