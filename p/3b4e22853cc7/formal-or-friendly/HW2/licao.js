/* FORMAL OR FRIENDLY? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: registro formal x informal. C1: nenhum português. */
window.HW2 = {
  "id": "formal-or-friendly",
  "titulo": "Formal or Friendly?",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3b4e22853cc7/formal-or-friendly/img/live-capa.webp",
  "alvo": "switching register without changing the message: Dear Ms. Reed / Hi Jo; Kind regards / Talk soon; I am writing to let you know / Just a heads-up; Would it be possible to postpone ...? / Can we put it off?; I apologise for any inconvenience / So sorry!; inform + person + that; never mix registers in one message",
  "abrir": "Do you write to your boss and to your best friend in the same way?",
  "fecho": "Same message, two voices. Formal: <b>Dear Ms. Reed · I am writing to let you know · Would it be possible to postpone ...? · Kind regards</b>. Friendly: <b>Hi Jo · Just a heads-up · Can we put it off? · Talk soon</b>. <b>Inform</b> needs a person: <i>inform you that</i>. And never mix voices: <i>Dear Ms. Reed ... Cheers</i> is a mistake.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia helps Leo with two messages. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/3b4e22853cc7/formal-or-friendly/img/live-capa.webp",
      "leg": "A formal jacket, a denim jacket",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I need a second pair of eyes. My train has been cancelled, and I have to message two people."
        },
        {
          "quem": "mia",
          "t": "Who? Let's do the formal one first."
        },
        {
          "quem": "leo",
          "t": "My director, Ms. Reed. Dear Ms. Reed, I am writing to let you know that I will be unable to attend this morning's meeting."
        },
        {
          "quem": "mia",
          "t": "Good. Now ask for a new date. Would it be possible to postpone it?"
        },
        {
          "quem": "leo",
          "t": "Right. Would it be possible to postpone it until Thursday? I apologise for any inconvenience. Kind regards, Leo."
        },
        {
          "quem": "mia",
          "t": "Perfect. Nobody could object to that. And the other one?"
        },
        {
          "quem": "leo",
          "t": "Jo, my oldest friend. Hi Jo! Just a heads-up: my train's cancelled, so I can't make it tonight. So sorry! Can we put it off till Friday? Talk soon."
        },
        {
          "quem": "mia",
          "t": "That one is warm and natural. But whatever you do, don't send Jo the first one."
        },
        {
          "quem": "leo",
          "t": "Why not? It's polite."
        },
        {
          "quem": "mia",
          "t": "Because I regret to inform you, to a friend, sounds like you're angry with her."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Leo need to write two messages?",
          "op": [
            "His train has been cancelled",
            "He is ill",
            "He lost his phone"
          ],
          "a": 0,
          "por": "My train has been cancelled, and I have to message two people."
        },
        {
          "q": "What does Leo ask Ms. Reed?",
          "op": [
            "To postpone the meeting until Thursday",
            "To cancel the meeting",
            "To send him the report"
          ],
          "a": 0,
          "por": "Would it be possible to postpone it until Thursday?"
        },
        {
          "q": "Why shouldn't Leo send the formal message to Jo?",
          "op": [
            "It would sound as if he were angry with her",
            "It is too short",
            "It does not say sorry"
          ],
          "a": 0,
          "por": "I regret to inform you, to a friend, sounds like you're angry with her."
        }
      ]
    },
    "out": {
      "sub": "Same problem, two voices. Hear it, then say it.",
      "frases": [
        {
          "t": "I am writing to let you know that I will be unable to attend.",
          "img": "https://wolf-labs.pages.dev/p/3b4e22853cc7/formal-or-friendly/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Just a heads-up: my train's cancelled, so I can't make it tonight.",
          "img": "https://wolf-labs.pages.dev/p/3b4e22853cc7/formal-or-friendly/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Would it be possible to postpone it until Thursday?",
          "img": "https://wolf-labs.pages.dev/p/3b4e22853cc7/formal-or-friendly/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Pick the right voice. Four quick ones.",
      "regra": "<b>Dear ... / Kind regards</b> with the director · <b>Hi ... / Talk soon</b> with a friend · <b>inform you that</b> · one voice per message",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am writing to let you know that the flight is late.",
          "aceita": [],
          "d": "Hint: the formal way to announce news: <b>I am writing to let you know that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: this goes to your director.",
          "mostra": "Can we put off the meeting?",
          "r": "Would it be possible to postpone the meeting?",
          "aceita": [
            "Would it be possible to postpone our meeting?",
            "Would it be possible to postpone this meeting?"
          ],
          "d": "Hint: an indirect question and a Latin-origin verb: <b>Would it be possible to postpone ...?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I regret to inform that I cannot attend.",
          "r": "I regret to inform you that I cannot attend.",
          "aceita": [
            "I regret to inform you that I am unable to attend."
          ],
          "d": "Hint: <b>inform</b> always needs a person: <b>inform you that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the closing breaks the register.",
          "mostra": "Dear Ms. Reed, thank you. Cheers, Paula",
          "r": "Dear Ms. Reed, thank you. Kind regards, Paula",
          "aceita": [
            "Dear Ms. Reed, thank you. Best regards, Paula",
            "Dear Ms. Reed, thank you. Yours sincerely, Paula"
          ],
          "d": "Hint: a formal opening needs a formal closing."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3b4e22853cc7/formal-or-friendly/img/live-capa.webp",
      "leg": "A formal jacket next to a denim one",
      "pede": "Look at the picture: a formal jacket and a denim jacket. Write two short messages about the same problem: one to your boss, one to a friend. Use <b>Dear / Hi</b>, <b>Would it be possible to / Can we</b>, <b>Kind regards / Talk soon</b>.",
      "ph": "Dear Mr. Lima, I am writing to … / Hi Bia! Just a heads-up: …",
      "ex": "Dear Mr. Lima, I am writing to let you know that I will be unable to attend today. Would it be possible to meet on Monday? Kind regards, Ana. Hi Bia! Just a heads-up: I can't make it tonight. Can we do Saturday?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell your boss you will be late. Say it formally.",
          "ph": "I am writing to let you know …",
          "ex": "I am writing to let you know that I will be thirty minutes late. I apologise for any inconvenience."
        },
        {
          "q": "Now tell a close friend the same thing.",
          "ph": "Just a heads-up: …",
          "ex": "Just a heads-up: I'm running late. Start without me! So sorry!"
        }
      ]
    }
  }
};
