/* THE VIDEO CALL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: problemas na videochamada: on mute, hear well, share with. B1: nenhum português. live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "hired-the-video-call",
  "titulo": "The Video Call",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e18d003356d8/hired-the-video-call/img/live-capa.webp",
  "alvo": "fixing problems on a video interview in calm, natural English: You're on mute / You're breaking up / I lost you; Sorry about that. Can you hear me now? Let me ...; on mute, hear you well, share with, Could you repeat (no to)",
  "abrir": "What can go wrong in an online interview, and what would you say?",
  "fecho": "A technical problem is not a disaster: <b>name it, fix it, apologize once, continue</b>. <i>Sorry about that. Can you hear me now?</i> <i>Let me move closer to the router.</i> It is <b>on mute</b>, you <b>hear someone well</b>, you <b>share</b> your screen <b>with</b> someone.",
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
      "sub": "Mia and Leo do a test call before her interview. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e18d003356d8/hired-the-video-call/img/live-conversa.webp",
      "leg": "A small desk with a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, your video interview is tomorrow. Let's do a test call. Hello, can you hear me?"
        },
        {
          "quem": "mia",
          "t": "Hi! Yes, I can hear you. Can you hear me okay?"
        },
        {
          "quem": "leo",
          "t": "Now I can't. I think you're on mute."
        },
        {
          "quem": "mia",
          "t": "Sorry about that. Can you hear me now?"
        },
        {
          "quem": "leo",
          "t": "Yes! Now the picture is frozen. Mia? I lost you."
        },
        {
          "quem": "mia",
          "t": "Sorry, my internet is slow today. Let me move closer to the router. Is that better?"
        },
        {
          "quem": "leo",
          "t": "Much better. Now a new problem: your dog is barking."
        },
        {
          "quem": "mia",
          "t": "Excuse me for one second. I will mute myself. Sorry about that."
        },
        {
          "quem": "leo",
          "t": "Good. You stayed calm. Where is your light?"
        },
        {
          "quem": "mia",
          "t": "In front of me. And the camera is a little above my eyes."
        },
        {
          "quem": "leo",
          "t": "Perfect. At the end, look into the camera and say thank you."
        }
      ],
      "perguntas": [
        {
          "q": "What is the first problem?",
          "op": [
            "Mia is on mute",
            "The picture is frozen",
            "The dog is barking"
          ],
          "a": 0,
          "por": "I think you're on mute."
        },
        {
          "q": "What does Mia do about the slow internet?",
          "op": [
            "She moves closer to the router",
            "She turns off the light",
            "She ends the call"
          ],
          "a": 0,
          "por": "Let me move closer to the router."
        },
        {
          "q": "Where is Mia's light?",
          "op": [
            "In front of her",
            "Behind her",
            "Next to the dog"
          ],
          "a": 0,
          "por": "In front of me. And the camera is a little above my eyes."
        }
      ]
    },
    "out": {
      "sub": "Three lines to fix a bad call. Hear it, then say it.",
      "frases": [
        {
          "t": "Sorry about that, can you hear me now?",
          "img": "https://wolf-labs.pages.dev/p/e18d003356d8/hired-the-video-call/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Let me move closer to the router.",
          "img": "https://wolf-labs.pages.dev/p/e18d003356d8/hired-the-video-call/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Excuse me for one second, I will mute myself.",
          "img": "https://wolf-labs.pages.dev/p/e18d003356d8/hired-the-video-call/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Calm fixes for a bad call. Four quick ones.",
      "regra": "<b>on mute</b> · <b>hear you well</b> · <b>share my screen with you</b> · <b>Could you repeat ...</b> (no <i>to</i>) · name it, fix it, apologize once.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Sorry about that, can you hear me now?",
          "aceita": [],
          "d": "Hint: a short apology first, then check the sound."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I think you are in mute.",
          "r": "I think you are on mute.",
          "aceita": [
            "I think you're on mute."
          ],
          "d": "Hint: the microphone is <b>on mute</b>, not <i>in mute</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I can't hear you good.",
          "r": "I can't hear you well.",
          "aceita": [
            "I cannot hear you well."
          ],
          "d": "Hint: after <b>hear</b>, use the adverb <b>well</b>, not <i>good</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will share my screen to you.",
          "r": "I will share my screen with you.",
          "aceita": [
            "I'll share my screen with you."
          ],
          "d": "Hint: you share something <b>with</b> someone."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e18d003356d8/hired-the-video-call/img/live-capa.webp",
      "leg": "A laptop and headphones on a desk",
      "pede": "Look at the picture: a laptop and headphones on a desk, ready for a call. Write 2 or 3 sentences: how you prepare your space, and what you say if the sound fails. Use <b>Sorry about that</b> or <b>Let me ...</b>.",
      "ph": "I sit in front of ... Sorry about that, ...",
      "ex": "I sit in front of a window, so the light is on my face. If the sound fails, I say, sorry about that, can you hear me now?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where do you sit for an online call? Where is the light?",
          "ph": "I sit ... and the light is ...",
          "ex": "I sit at my desk, and the light is in front of me."
        },
        {
          "q": "What do you say if your video freezes?",
          "ph": "Sorry about that, ...",
          "ex": "Sorry about that, my video froze. Should I repeat my last answer?"
        }
      ]
    }
  }
};
