/* I'M NOT AN ASTRONAUT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: somebody/anybody/nobody, uma negação por frase. A2: dicas em português só nas notas (d). Falas originais, nada do filme. */
window.HW2 = {
  "id": "not-an-astronaut",
  "titulo": "I'm Not an Astronaut",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6176b216a5b0/not-an-astronaut/img/live-controle.webp",
  "alvo": "somebody / anybody / nobody and something / anything / nothing: one negative per sentence",
  "abrir": "Who do you call when you have a problem?",
  "fecho": "<b>One no is enough:</b> <i>I didn't see anybody</i> or <i>I saw nobody</i>, never <i>I didn't see nobody</i>. In yes sentences: <b>somebody, something</b>. In questions and after not: <b>anybody, anything</b>.",
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
      "sub": "Mia and Leo in Mission Control. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/6176b216a5b0/not-an-astronaut/img/live-controle.webp",
      "leg": "Ship scan, room by room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Control, I'm in the lab. Nobody is here."
        },
        {
          "quem": "mia",
          "t": "Is there anything on the screens?"
        },
        {
          "quem": "leo",
          "t": "Nothing. But somebody left a cup on the table."
        },
        {
          "quem": "mia",
          "t": "So somebody was here. Check the galley."
        },
        {
          "quem": "leo",
          "t": "There isn't anybody in the galley. Wait, there is something on the floor."
        },
        {
          "quem": "mia",
          "t": "What is it?"
        },
        {
          "quem": "leo",
          "t": "A notebook. Somebody wrote a long list."
        },
        {
          "quem": "mia",
          "t": "Read me the first line."
        },
        {
          "quem": "leo",
          "t": "It says: I didn't find anything strange today."
        },
        {
          "quem": "mia",
          "t": "Good. Is anybody on the bridge?"
        },
        {
          "quem": "leo",
          "t": "I can't see anybody. The seat is empty, but the light is on."
        },
        {
          "quem": "mia",
          "t": "Somebody turned it on. Stay calm. We are not alone."
        }
      ],
      "perguntas": [
        {
          "q": "Who is in the lab?",
          "op": [
            "Nobody",
            "Somebody",
            "Mia"
          ],
          "a": 0,
          "por": "Nobody is here."
        },
        {
          "q": "What did somebody leave on the table?",
          "op": [
            "A cup",
            "A notebook",
            "A key"
          ],
          "a": 0,
          "por": "Somebody left a cup on the table."
        },
        {
          "q": "What is on the galley floor?",
          "op": [
            "A notebook",
            "A cup",
            "Nothing"
          ],
          "a": 0,
          "por": "There is something on the floor. A notebook."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "Nobody is in the lab, but somebody left a cup.",
          "img": "https://wolf-labs.pages.dev/p/6176b216a5b0/not-an-astronaut/img/live-escotilha.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I can't see anybody on the bridge.",
          "img": "https://wolf-labs.pages.dev/p/6176b216a5b0/not-an-astronaut/img/live-ponte.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There isn't anything on the screens.",
          "img": "https://wolf-labs.pages.dev/p/6176b216a5b0/not-an-astronaut/img/live-controle.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "One no per sentence. Four quick ones.",
      "regra": "<b>nobody / nothing</b> already say no · <b>not … anybody / anything</b> · <b>somebody / something</b> in yes sentences.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Nobody is in the engine room.",
          "aceita": [],
          "d": "Dica: <b>nobody</b> já diz não. O verbo fica positivo: nobody <b>is</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one no is enough.",
          "mostra": "I didn't see nobody in the lab.",
          "r": "I didn't see anybody in the lab.",
          "aceita": [
            "I saw nobody in the lab.",
            "I did not see anybody in the lab.",
            "I didn't see anyone in the lab.",
            "I saw no one in the lab."
          ],
          "d": "Dica: um não só: <b>didn't … anybody</b> ou <b>saw nobody</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one no is enough.",
          "mostra": "Nobody didn't open the door.",
          "r": "Nobody opened the door.",
          "aceita": [
            "No one opened the door."
          ],
          "d": "Dica: <b>nobody</b> já diz não, então o verbo é positivo: <b>opened</b>."
        },
        {
          "tipo": "escreve",
          "t": "Write it with nobody or anybody.",
          "mostra": "Room 3 is empty. (zero people)",
          "r": "Nobody is in room 3.",
          "aceita": [
            "There isn't anybody in room 3.",
            "There is nobody in room 3.",
            "I can't see anybody in room 3.",
            "I don't see anybody in room 3.",
            "No one is in room 3.",
            "There isn't anyone in room 3."
          ],
          "d": "Dica: <b>Nobody is</b> …, ou <b>There isn't anybody</b> … Só um não."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6176b216a5b0/not-an-astronaut/img/live-estrelas.webp",
      "leg": "Far from home",
      "pede": "Look at the picture. Write 3 short lines for Earth: who is on the ship, who isn't, and one strange thing. Use <b>somebody, nobody, something</b> or <b>nothing</b>.",
      "ph": "Nobody is in … but somebody …",
      "ex": "Nobody is on the bridge, but somebody turned on the light. There isn't anybody in the galley. Something is moving on the screen."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you call when you have a problem? Why?",
          "ph": "I call … because …",
          "ex": "I call my sister because she always answers. I never call anybody after midnight."
        },
        {
          "q": "What is something nobody knows about you?",
          "ph": "Nobody knows that I …",
          "ex": "Nobody knows that I sing in the shower. I always sing when nobody is home."
        }
      ]
    }
  }
};
