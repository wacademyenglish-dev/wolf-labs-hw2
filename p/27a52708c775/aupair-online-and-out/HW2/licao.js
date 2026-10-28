/* ONLINE AND OUT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: pedir permissão e preferência com educação (Could I / Would you mind if I / I'd rather). Curso Au Pair. B1: nenhum português. Só live-conversa (a capa é clara demais). */
window.HW2 = {
  "id": "online-and-out",
  "titulo": "Online and Out",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "polite permission and preference: Could I + plain verb, Would you mind if I + past simple, I'd rather (not) + plain verb; Just so you know + plan; never could I to, never I'd rather to, never would you mind if I will",
  "abrir": "What do you always ask before you post a photo of someone?",
  "fecho": "<b>Could I + plain verb</b>: <i>Could I share this photo?</i> <b>Would you mind if I + past</b>: <i>Would you mind if I shared it?</i> <b>I'd rather + plain verb</b>: <i>I'd rather not post it.</i> No <i>to</i> after could or rather.",
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
      "sub": "Mia asks the host dad before she posts, and tells him her plan for Saturday. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A wet city street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Excuse me, Leo. Could I ask you something?"
        },
        {
          "quem": "leo",
          "t": "Sure. What is it?"
        },
        {
          "quem": "mia",
          "t": "Emma made a lovely drawing at school. Could I share a photo of it online, or would you prefer I didn't?"
        },
        {
          "quem": "leo",
          "t": "Thanks for asking. Would you mind if we kept the kids off social media? You can post the drawing, but without her name or the school."
        },
        {
          "quem": "mia",
          "t": "Of course. I'll turn the location off on my camera, too."
        },
        {
          "quem": "leo",
          "t": "Good idea. Are you going out this weekend?"
        },
        {
          "quem": "mia",
          "t": "Yes. Just so you know, I'm meeting two friends downtown on Saturday. I'll be back by eleven."
        },
        {
          "quem": "leo",
          "t": "Great. How will you get there?"
        },
        {
          "quem": "mia",
          "t": "By ride-share. I'd rather take a car than walk home at night. I'll check the plate and the driver's name before I get in."
        },
        {
          "quem": "leo",
          "t": "Perfect. Please keep your phone charged, and call us if the plan changes."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia ask before she posts the drawing?",
          "op": [
            "If she can share a photo of it",
            "If she can use Leo's phone",
            "If she can buy a new camera"
          ],
          "a": 0,
          "por": "Could I share a photo of it online, or would you prefer I didn't?"
        },
        {
          "q": "What should the post NOT show?",
          "op": [
            "Emma's name and the school",
            "The drawing",
            "The color of the paper"
          ],
          "a": 0,
          "por": "You can post the drawing, but without her name or the school."
        },
        {
          "q": "What will Mia check before she gets in the ride-share car?",
          "op": [
            "The plate and the driver's name",
            "The price and the music",
            "The weather and the time"
          ],
          "a": 0,
          "por": "I'll check the plate and the driver's name before I get in."
        }
      ]
    },
    "out": {
      "sub": "Three polite sentences, online and out. Hear it, then say it.",
      "frases": [
        {
          "t": "Could I share this photo, or would you prefer I didn't?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Just so you know, I'm going downtown on Saturday.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'd rather not post a photo of the kids.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Could I, would you mind or I'd rather? Four quick ones.",
      "regra": "<b>Could I</b> + plain verb · <b>Would you mind if I</b> + past simple · <b>I'd rather (not)</b> + plain verb · never <b>to</b> after could or rather.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Would you mind if I shared this photo?",
          "aceita": [],
          "d": "Hint: <b>Would you mind if I</b> + a past verb (shared)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could I to take a photo of the drawing?",
          "r": "Could I take a photo of the drawing?",
          "aceita": [],
          "d": "Hint: after <b>could</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'd rather to stay home tonight.",
          "r": "I'd rather stay home tonight.",
          "aceita": [
            "I would rather stay home tonight."
          ],
          "d": "Hint: after <b>I'd rather</b>, the plain verb. No <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Would you mind if I will share it?",
          "r": "Would you mind if I shared it?",
          "aceita": [
            "Would you mind if I share it?"
          ],
          "d": "Hint: after <b>Would you mind if I</b>, no <i>will</i>. Use a past verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "A wet city street at night",
      "pede": "Look at the picture: a wet city street at night. Write 2 or 3 sentences to your host family about a night out. Use <b>Just so you know</b>, <b>I'd rather</b> or <b>Could I</b>.",
      "ph": "Just so you know, I'm going …",
      "ex": "Just so you know, I'm going downtown tonight. I'd rather take a ride-share. Could I borrow a charger?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you ask your host family before you post a photo of the kids?",
          "ph": "Could I … ?",
          "ex": "Could I post this photo, or would you prefer I didn't?"
        },
        {
          "q": "On a night off, would you rather stay home or go out? Why?",
          "ph": "I'd rather … because …",
          "ex": "I'd rather go out with friends because I love live music."
        }
      ]
    }
  }
};
