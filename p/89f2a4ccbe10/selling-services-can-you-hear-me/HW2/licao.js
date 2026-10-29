/* CAN YOU HEAR ME? · SELLING SERVICES LESSON 26 · LIÇÃO DE CASA 2.0 (27/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous on video calls (You’re breaking up · I’m sharing my screen · It isn’t working) + Can you hear me?; never “You breaking up”, “I’m share”, “Are you hearing me?”. A1: português só nas dicas (d). Empresas fictícias. */
window.HW2 = {
  "id": "selling-services-can-you-hear-me",
  "titulo": "Can You Hear Me?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "present continuous on video calls (You’re breaking up · I’m sharing my screen · It isn’t working) + Can you hear me?; never “You breaking up”, “I’m share”, “Are you hearing me?”",
  "abrir": "A video call starts. The client says nothing. What do you say?",
  "fecho": "On the call, now: <b>am / is / are + -ing</b>: <i>You’re breaking up. I’m sharing my screen. My camera isn’t working.</i> But: <b>Can you hear me? Can you see it?</b>",
  "elenco": {
    "mia": {
      "nome": "Mia",
      "voz": "en-US-AvaNeural",
      "cor": "#86c9f0"
    },
    "leo": {
      "nome": "Leo",
      "voz": "en-US-GuyNeural",
      "cor": "#7fd1b9"
    }
  },
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia, a seller, has a video call with a client. Problems! About one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "A laptop with a frozen video call at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi Leo! Can you hear me?"
        },
        {
          "quem": "leo",
          "t": "Yes, I can. But I can’t see you."
        },
        {
          "quem": "mia",
          "t": "Sorry, my camera isn’t working. One second."
        },
        {
          "quem": "leo",
          "t": "Now I can see you. Hi, Mia!"
        },
        {
          "quem": "mia",
          "t": "Great. I’m sharing my screen now. Can you see the slides?"
        },
        {
          "quem": "leo",
          "t": "Yes. Wait… sorry, you’re breaking up."
        },
        {
          "quem": "mia",
          "t": "I’m moving to another room. Is it better now?"
        },
        {
          "quem": "leo",
          "t": "Yes, perfect. Someone is drilling in my building, sorry!"
        },
        {
          "quem": "mia",
          "t": "No problem. Let’s look at the price."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia’s first problem?",
          "op": [
            "Her camera isn’t working.",
            "Her microphone is off.",
            "Her internet is slow."
          ],
          "a": 0,
          "por": "Sorry, my camera isn’t working. One second."
        },
        {
          "q": "What does Mia do when she breaks up?",
          "op": [
            "She moves to another room.",
            "She stops the call.",
            "She turns off the camera."
          ],
          "a": 0,
          "por": "I’m moving to another room. Is it better now?"
        },
        {
          "q": "What is happening in Leo’s building?",
          "op": [
            "Someone is drilling.",
            "A dog is barking.",
            "People are having a party."
          ],
          "a": 0,
          "por": "Someone is drilling in my building, sorry!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from your job. Hear it, then say it.",
      "frases": [
        {
          "t": "Sorry, you’re breaking up.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I’m sharing my screen now.",
          "img": "../img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can you hear me now?",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Your own mistakes, fixed. Four quick ones.",
      "regra": "Now, on the call: <b>am / is / are + verb-ing</b> · no: <i>isn’t / aren’t + -ing</i> · but: <b>Can you hear me? Can you see it?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I’m sharing my screen now.",
          "aceita": [],
          "d": "Dica: agora = <b>I’m</b> + verbo-<b>ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You breaking up.",
          "r": "You’re breaking up.",
          "aceita": [
            "You are breaking up."
          ],
          "d": "Dica: não esqueça o <b>are</b>: you’re."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Are you hearing me?",
          "r": "Can you hear me?",
          "aceita": [],
          "d": "Dica: na chamada: <b>Can you hear me?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "My camera don’t working.",
          "r": "My camera isn’t working.",
          "aceita": [
            "My camera is not working."
          ],
          "d": "Dica: negativa = <b>isn’t</b> + -ing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-mesa.webp",
      "leg": "A laptop with a frozen video call at night",
      "pede": "Write a short message to a client after a bad video call: what happened, and the next step.",
      "ph": "Hi …, sorry about the call. My … isn’t … I’m sending you …",
      "ex": "Hi Mark, sorry about the call today. My internet isn’t working well this week. I’m sending you the slides now."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing this week at work?",
          "ph": "This week, I’m …",
          "ex": "This week, I’m preparing a big proposal."
        },
        {
          "q": "What’s happening around you right now?",
          "ph": "Right now, …",
          "ex": "Right now, my neighbor is playing the piano!"
        }
      ]
    }
  }
};
