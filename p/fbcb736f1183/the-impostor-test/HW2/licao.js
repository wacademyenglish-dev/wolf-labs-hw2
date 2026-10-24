/* THE IMPOSTOR TEST · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: question tags. B1: nenhum português. */
window.HW2 = {
  "id": "the-impostor-test",
  "titulo": "The Impostor Test",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fbcb736f1183/the-impostor-test/img/live-cracha.webp",
  "alvo": "question tags: the auxiliary + the person, with the sign flipped (You did it, didn't you?); falling voice confirms, rising voice asks; aren't I? · shall we? · isn't there? · nobody ... did they?",
  "abrir": "What is something you did well this week?",
  "fecho": "<b>Tag</b> = the auxiliary + the person, with the sign flipped: <i>You did the work, didn't you?</i> A positive sentence takes a negative tag, a negative sentence takes a positive one. Voice down: you are telling. Voice up: you are asking. Special ones: <i>aren't I? · shall we? · isn't there?</i>",
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
      "sub": "Mia and Leo at a conference. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fbcb736f1183/the-impostor-test/img/live-corredor.webp",
      "leg": "A quiet corridor after the talk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "You gave the talk this morning, didn't you?"
        },
        {
          "quem": "leo",
          "t": "I did. But I think it went badly. It wasn't very good, was it?"
        },
        {
          "quem": "mia",
          "t": "It was great, wasn't it? Everybody clapped."
        },
        {
          "quem": "leo",
          "t": "You're just being kind, aren't you?"
        },
        {
          "quem": "mia",
          "t": "No. You can do this, can't you? You did the work."
        },
        {
          "quem": "leo",
          "t": "I suppose so. They chose me, didn't they?"
        },
        {
          "quem": "mia",
          "t": "Of course they did. You haven't made a single mistake yet, have you?"
        },
        {
          "quem": "leo",
          "t": "Not one that I know of. Let's get some coffee, shall we?"
        },
        {
          "quem": "mia",
          "t": "Good idea. It's been a long morning, hasn't it?"
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo do this morning?",
          "op": [
            "He gave a talk",
            "He ran a workshop",
            "He met a client"
          ],
          "a": 0,
          "por": "You gave the talk this morning, didn't you?"
        },
        {
          "q": "What does Mia think of the talk?",
          "op": [
            "It was great",
            "It was too long",
            "It was boring"
          ],
          "a": 0,
          "por": "It was great, wasn't it? Everybody clapped."
        },
        {
          "q": "What does Leo suggest at the end?",
          "op": [
            "Getting some coffee",
            "Going home",
            "Giving another talk"
          ],
          "a": 0,
          "por": "Let's get some coffee, shall we?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences with a tag. Hear it, then say it.",
      "frases": [
        {
          "t": "You did the work, didn't you?",
          "img": "https://wolf-labs.pages.dev/p/fbcb736f1183/the-impostor-test/img/live-cracha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It wasn't luck, was it?",
          "img": "https://wolf-labs.pages.dev/p/fbcb736f1183/the-impostor-test/img/live-corredor.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let's take a break, shall we?",
          "img": "https://wolf-labs.pages.dev/p/fbcb736f1183/the-impostor-test/img/live-saida.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Choose the right tag. Four quick ones.",
      "regra": "<b>auxiliary + person</b>, sign flipped · <b>aren't I?</b> · <b>shall we?</b> · <b>nobody ... did they?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is your manager, isn't she?",
          "aceita": [],
          "d": "Hint: <b>is</b> in the sentence, so <b>isn't she</b> in the tag."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the tag is wrong.",
          "mostra": "You like coffee, isn't it?",
          "r": "You like coffee, don't you?",
          "aceita": [
            "You like coffee, do you?"
          ],
          "d": "Hint: present simple with <b>you</b>: <b>don't you?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the special one.",
          "mostra": "I'm late, amn't I?",
          "r": "I'm late, aren't I?",
          "aceita": [
            "I am late, aren't I?"
          ],
          "d": "Hint: after <b>I am</b>, the tag is <b>aren't I?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: nobody is already negative.",
          "mostra": "Nobody called, didn't they?",
          "r": "Nobody called, did they?",
          "aceita": [],
          "d": "Hint: <b>nobody</b> is negative, so the tag is positive."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fbcb736f1183/the-impostor-test/img/live-cadeiras.webp",
      "leg": "An empty table with two chairs",
      "pede": "Look at the picture: an empty table with two chairs. Write 2 or 3 sentences with question tags: one that confirms something you know, and one that asks something you are not sure about.",
      "ph": "You came early, didn't you? …",
      "ex": "You came early, didn't you? You haven't met Sam, have you? It's a quiet room, isn't it?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Confirm something about your day with a tag. What do you say?",
          "ph": "It's been a … day, hasn't it?",
          "ex": "It's been a long day, hasn't it?"
        },
        {
          "q": "You are not sure a coworker has seen the report. Ask with a tag.",
          "ph": "You haven't …, have you?",
          "ex": "You haven't seen the report, have you?"
        }
      ]
    }
  }
};
