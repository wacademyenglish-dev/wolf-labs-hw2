/* INSIDE THE WALLS · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: can / can't / could / couldn't / allowed to. A2: dicas em português só nas notas (d). Falas originais, sem cena do filme. Só imagens live-* escuras. */
window.HW2 = {
  "id": "inside-the-walls",
  "titulo": "Inside the Walls",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8bdc24bf4257/inside-the-walls/img/live-capa.webp",
  "alvo": "can / can't (now) and could / couldn't (past); be allowed to / not allowed to; plain verb after them; never don't can, can to, allowed + verb without to, can't for the past",
  "abrir": "What aren't you allowed to do at home?",
  "fecho": "<b>can / can't</b> + plain verb, now: <i>We can read.</i> <b>could / couldn't</b>, the past: <i>I couldn't go out.</i> <b>Allowed to</b> = the rule says yes: <i>We are allowed to walk.</i> <i>We aren't allowed to climb.</i> Never <i>don't can, allowed climb</i>.",
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
      "sub": "Mia and Leo stand at the gate of an old walled city. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/8bdc24bf4257/inside-the-walls/img/live-portao.webp",
      "leg": "The big gate of the city",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the big gate. Can people go outside the city?"
        },
        {
          "quem": "mia",
          "t": "No, they can't. Only the guards are allowed to go out."
        },
        {
          "quem": "leo",
          "t": "Could people go out in the past?"
        },
        {
          "quem": "mia",
          "t": "Yes, they could, a long time ago. Now there is a new rule."
        },
        {
          "quem": "leo",
          "t": "What are we allowed to do inside the walls?"
        },
        {
          "quem": "mia",
          "t": "We can walk in the market, and we can read in the library."
        },
        {
          "quem": "leo",
          "t": "Can we climb the wall?"
        },
        {
          "quem": "mia",
          "t": "No, we aren't allowed to. It's too high."
        },
        {
          "quem": "leo",
          "t": "And at night? Can we stay in the street?"
        },
        {
          "quem": "mia",
          "t": "No, we can't. Everybody has to go home at nine."
        }
      ],
      "perguntas": [
        {
          "q": "Who is allowed to go outside?",
          "op": [
            "The guards",
            "Everybody",
            "Nobody"
          ],
          "a": 0,
          "por": "Only the guards are allowed to go out."
        },
        {
          "q": "Could people go out a long time ago?",
          "op": [
            "Yes, they could",
            "No, they couldn't",
            "Only at night"
          ],
          "a": 0,
          "por": "Yes, they could, a long time ago."
        },
        {
          "q": "What can people do in the city?",
          "op": [
            "Walk in the market and read in the library",
            "Climb the wall",
            "Stay in the street at night"
          ],
          "a": 0,
          "por": "We can walk in the market, and we can read in the library."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about rules. Hear it, then say it.",
      "frases": [
        {
          "t": "Only the guards are allowed to go out.",
          "img": "https://wolf-labs.pages.dev/p/8bdc24bf4257/inside-the-walls/img/live-portao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We can read in the library.",
          "img": "https://wolf-labs.pages.dev/p/8bdc24bf4257/inside-the-walls/img/live-livro.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We can't stay in the street at night.",
          "img": "https://wolf-labs.pages.dev/p/8bdc24bf4257/inside-the-walls/img/live-cidade.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "can, can't, could, allowed to. Four quick ones.",
      "regra": "<b>can / can't</b> + plain verb · <b>could / couldn't</b> (past) · <b>allowed to</b> + verb · <b>not allowed to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "People could go out a long time ago.",
          "aceita": [],
          "d": "Dica: <b>could</b> é o passado de <b>can</b>, e o verbo fica no básico."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We don't can climb the wall.",
          "r": "We can't climb the wall.",
          "aceita": [
            "We cannot climb the wall."
          ],
          "d": "Dica: <b>can</b> não usa <b>don't</b>: o negativo é <b>can't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "We are not allowed climb the wall.",
          "r": "We are not allowed to climb the wall.",
          "aceita": [
            "We aren't allowed to climb the wall."
          ],
          "d": "Dica: <b>allowed</b> pede <b>to</b> antes do verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Yesterday I can't go out.",
          "r": "Yesterday I couldn't go out.",
          "aceita": [
            "Yesterday I could not go out."
          ],
          "d": "Dica: <b>yesterday</b> é passado, então <b>couldn't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8bdc24bf4257/inside-the-walls/img/live-cidade.webp",
      "leg": "A narrow street in an old city",
      "pede": "Look at the picture: a narrow street in an old city. Write 2 or 3 sentences about rules in a place you know (school, work, home). Use <b>can</b>, <b>can't</b> or <b>allowed to</b>.",
      "ph": "At my school, we can … We aren't allowed to …",
      "ex": "At my school, we can use the phone at lunch. We aren't allowed to eat in class. As a child, I couldn't stay out late."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can't you do at work or at school? What are you allowed to do?",
          "ph": "I can't … I am allowed to …",
          "ex": "I can't use my phone in class. I am allowed to drink coffee at my desk."
        },
        {
          "q": "What could you do as a child that you can't do now?",
          "ph": "As a child, I could … Now I can't …",
          "ex": "As a child, I could sleep all day. Now I can't."
        }
      ]
    }
  }
};
