/* CASTLE ON THE HILL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past continuous x past simple. Linha de música: NENHUM verso aqui; o listening é diálogo original. B1: nenhum português. */
window.HW2 = {
  "id": "castle-on-the-hill",
  "titulo": "Castle on the Hill",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a50e673fd05a/castle-on-the-hill/img/live-keyart.webp",
  "alvo": "past continuous x past simple: the long background (was riding, were playing) and the short event that cuts in (fell, came out); when / while; What were you doing when ...?; was / were + -ing, never we was, never was run",
  "abrir": "Where did you grow up? What did you do after school?",
  "fecho": "<b>Was / were + -ing</b> = the long background. <b>Past simple</b> = the short event: <i>I was riding my bike when I fell.</i> <b>While</b> + long action. The question: <i>What were you doing when it happened?</i> Never <i>we was</i>, never <i>was run</i>.",
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
      "sub": "Mia and Leo look at old photos. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a50e673fd05a/castle-on-the-hill/img/live-quarto.webp",
      "leg": "A warm room with string lights",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I was looking at old photos when I found one of your street."
        },
        {
          "quem": "leo",
          "t": "Ha! What were we doing in it?"
        },
        {
          "quem": "mia",
          "t": "You were riding a bike, and your brother was running behind you."
        },
        {
          "quem": "leo",
          "t": "I remember. I was riding fast when I hit a puddle and fell."
        },
        {
          "quem": "mia",
          "t": "Were you crying?"
        },
        {
          "quem": "leo",
          "t": "No, I was laughing when my mother came out of the house."
        },
        {
          "quem": "mia",
          "t": "What were you doing when you got your first guitar?"
        },
        {
          "quem": "leo",
          "t": "I was washing cars with my uncle while the sun was going down. He gave it to me then."
        },
        {
          "quem": "mia",
          "t": "While you were washing cars, I was studying for exams."
        },
        {
          "quem": "leo",
          "t": "Right! And when I called you that night, you didn't answer."
        }
      ],
      "perguntas": [
        {
          "q": "What was Leo's brother doing in the photo?",
          "op": [
            "He was running behind Leo",
            "He was riding a bike",
            "He was washing cars"
          ],
          "a": 0,
          "por": "Your brother was running behind you."
        },
        {
          "q": "What was Leo doing when his mother came out?",
          "op": [
            "He was laughing",
            "He was crying",
            "He was sleeping"
          ],
          "a": 0,
          "por": "I was laughing when my mother came out of the house."
        },
        {
          "q": "What was Leo doing when he got his first guitar?",
          "op": [
            "He was washing cars with his uncle",
            "He was studying for exams",
            "He was riding a bike"
          ],
          "a": 0,
          "por": "I was washing cars with my uncle while the sun was going down."
        }
      ]
    },
    "out": {
      "sub": "Three small memories. Hear it, then say it.",
      "frases": [
        {
          "t": "I was walking home when it started to rain.",
          "img": "https://wolf-labs.pages.dev/p/a50e673fd05a/castle-on-the-hill/img/live-estrada.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We were watching the stars when the fire went out.",
          "img": "https://wolf-labs.pages.dev/p/a50e673fd05a/castle-on-the-hill/img/live-fogueira.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What were you doing when you moved here?",
          "img": "https://wolf-labs.pages.dev/p/a50e673fd05a/castle-on-the-hill/img/live-quarto.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Was doing, did. Four quick ones.",
      "regra": "<b>was / were + -ing</b> = background · <b>past simple</b> = short event · <b>when / while</b> · <b>What were you doing when ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I was walking home when it started to rain.",
          "aceita": [],
          "d": "Hint: the long action is <b>was walking</b>; the short event is <i>started</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We was playing outside when it got dark.",
          "r": "We were playing outside when it got dark.",
          "aceita": [],
          "d": "Hint: with <b>we</b>, use <b>were</b>, not <i>was</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I was walk to school when I met him.",
          "r": "I was walking to school when I met him.",
          "aceita": [],
          "d": "Hint: after <b>was</b>, the verb needs <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "What you were doing when she called?",
          "r": "What were you doing when she called?",
          "aceita": [
            "What were you doing when she phoned?"
          ],
          "d": "Hint: in a question, <b>were</b> goes before <i>you</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a50e673fd05a/castle-on-the-hill/img/live-keyart.webp",
      "leg": "An old tower on a green hill, a road below",
      "pede": "Look at the picture: an old tower on a hill with a road below. Write 2 or 3 sentences about a memory from the place you grew up. Use <b>was / were + -ing</b> for the background and the past simple for the short event.",
      "ph": "I was … when …",
      "ex": "I was walking home from school when I met my best friend. It was raining while we were talking. We were laughing when the bus came."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing when you got your first phone?",
          "ph": "I was … when …",
          "ex": "I was doing my homework when my father gave me my first phone."
        },
        {
          "q": "What were you doing this time yesterday?",
          "ph": "At this time yesterday, I was …",
          "ex": "At this time yesterday, I was cooking dinner while my son was watching a cartoon."
        }
      ]
    }
  }
};
