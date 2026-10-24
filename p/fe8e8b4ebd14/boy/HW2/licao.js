/* BOY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: used to / be used to / get used to. Jogo: falas originais; pai e filho na montanha (escalar, cruzar rio, acampar). Regra 9: nada de mae, perda, luto. B1: nenhum portugues. */
window.HW2 = {
  "id": "boy",
  "titulo": "Boy",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/fe8e8b4ebd14/boy/img/live-peak.webp",
  "alvo": "used to + verb (a past habit that stopped), be used to + -ing (it is normal for me now), get used to + -ing (it is becoming normal); didn't use to / Did you use to ... (no -d); never I use to, used to living, I'm used to live",
  "abrir": "What did you use to do that you don't do anymore?",
  "fecho": "<b>used to</b> + verb = a past habit that stopped: <i>He used to climb every winter.</i> <b>be used to</b> + -ing = normal now: <i>I'm used to waking up early.</i> <b>get used to</b> + -ing = becoming normal: <i>I'm getting used to the cold.</i> After <i>did / didn't</i>: <b>use to</b>, no -d.",
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
      "sub": "Mia and Leo talk about a story. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/fe8e8b4ebd14/boy/img/live-cabin.webp",
      "leg": "A cabin in the snow",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reading a story about a father and his teenage son crossing the mountains."
        },
        {
          "quem": "leo",
          "t": "Are they used to this kind of trip?"
        },
        {
          "quem": "mia",
          "t": "The father is. He used to climb these peaks every winter, so the cold doesn't bother him."
        },
        {
          "quem": "leo",
          "t": "And the son?"
        },
        {
          "quem": "mia",
          "t": "Not yet. He used to stay in a warm cabin and read all day. Now he's getting used to sleeping in a tent."
        },
        {
          "quem": "leo",
          "t": "Does he complain?"
        },
        {
          "quem": "mia",
          "t": "He used to complain a lot, but now he's getting used to carrying his own bag."
        },
        {
          "quem": "leo",
          "t": "Did he use to like the cold?"
        },
        {
          "quem": "mia",
          "t": "No, he didn't use to like it, but now he doesn't mind. Yesterday he crossed a freezing river without a word."
        },
        {
          "quem": "leo",
          "t": "And who cooks at camp?"
        },
        {
          "quem": "mia",
          "t": "The father used to cook everything. Now they take turns, and the boy is used to making soup over the fire."
        }
      ],
      "perguntas": [
        {
          "q": "What did the son use to do?",
          "op": [
            "He used to stay in a warm cabin and read",
            "He used to climb every winter",
            "He used to cook for the family"
          ],
          "a": 0,
          "por": "He used to stay in a warm cabin and read all day."
        },
        {
          "q": "What is the son getting used to?",
          "op": [
            "Sleeping in a tent",
            "Reading all day",
            "Staying in a cabin"
          ],
          "a": 0,
          "por": "Now he's getting used to sleeping in a tent."
        },
        {
          "q": "Who is used to the cold?",
          "op": [
            "The father",
            "The son",
            "Nobody"
          ],
          "a": 0,
          "por": "The father is. He used to climb these peaks every winter."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the trip. Hear it, then say it.",
      "frases": [
        {
          "t": "He used to climb these peaks every winter.",
          "img": "https://wolf-labs.pages.dev/p/fe8e8b4ebd14/boy/img/live-peak.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The boy is getting used to sleeping in a tent.",
          "img": "https://wolf-labs.pages.dev/p/fe8e8b4ebd14/boy/img/live-fire.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Did you use to read all day in a warm cabin?",
          "img": "https://wolf-labs.pages.dev/p/fe8e8b4ebd14/boy/img/live-cabin.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "used to, be used to, get used to. Four quick ones.",
      "regra": "<b>used to</b> + verb = past habit · <b>be / get used to</b> + -ing · after <b>did / didn't</b>: <b>use to</b> (no -d).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He is getting used to sleeping in a tent.",
          "aceita": [],
          "d": "Hint: <b>getting used to</b> + verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm not used to wake up early.",
          "r": "I'm not used to waking up early.",
          "aceita": [
            "I am not used to waking up early."
          ],
          "d": "Hint: after <b>used to</b> (normal now), the verb takes <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I use to climb mountains every winter.",
          "r": "I used to climb mountains every winter.",
          "aceita": [],
          "d": "Hint: a past habit is <b>used to</b>, with <b>-d</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Did you used to live near a river?",
          "r": "Did you use to live near a river?",
          "aceita": [],
          "d": "Hint: after <b>Did</b>, it is <b>use to</b>, with no <b>-d</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/fe8e8b4ebd14/boy/img/live-peak.webp",
      "leg": "A mountain peak above the clouds",
      "pede": "Look at the picture: a mountain peak above the clouds. Write 2 or 3 sentences: something you <b>used to</b> do, and something you are <b>getting used to</b>.",
      "ph": "I used to … but now I'm getting used to …",
      "ex": "I used to wake up late, but now I'm getting used to waking up at six. I'm not used to the cold yet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you use to do as a child that you don't do now?",
          "ph": "I used to …",
          "ex": "I used to play outside until the sun went down."
        },
        {
          "q": "What are you getting used to these days?",
          "ph": "I'm getting used to …",
          "ex": "I'm getting used to working from home."
        }
      ]
    }
  }
};
