/* HELP! · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: presente contínuo (agora) + imperativos; pedir ajuda (sem emergência). B1: nenhum português. Só live-* escuras. */
window.HW2 = {
  "id": "help",
  "titulo": "Help!",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7721835a5ff4/help/img/live-capa.webp",
  "alvo": "present continuous for what is happening right now (am / is / are + -ing, isn't + -ing) and imperatives to guide someone (Stay..., Go..., Don't + verb); never He not looking, He is stand, Don't to walk",
  "abrir": "Have you ever been lost in a new place? What did you do?",
  "fecho": "<b>Right now</b> = <b>am / is / are + -ing</b>: <i>She's showing me the map.</i> Negative: <b>isn't / aren't + -ing</b>. To guide someone: <b>Stay</b> here. <b>Go</b> down the stairs. <b>Don't</b> + plain verb: <i>Don't walk to the exit.</i> Never <i>Don't to walk</i>.",
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
      "sub": "Mia helps Leo find his way by phone. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/7721835a5ff4/help/img/live-b.webp",
      "leg": "A phone almost out of battery",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I need help. I'm standing in the train station, but I can't find my platform."
        },
        {
          "quem": "mia",
          "t": "OK. What are you looking at right now?"
        },
        {
          "quem": "leo",
          "t": "I'm looking at a big board. My phone is almost dead, so please be quick."
        },
        {
          "quem": "mia",
          "t": "Stay where you are. Don't walk to the exit. Ask the woman in the orange vest."
        },
        {
          "quem": "leo",
          "t": "She's helping another traveler. She's pointing at a screen."
        },
        {
          "quem": "mia",
          "t": "Good. Go to the desk and say: Excuse me, could you help me, please? I'm looking for platform B."
        },
        {
          "quem": "leo",
          "t": "OK. She's smiling now. She's showing me the map. Platform B is downstairs."
        },
        {
          "quem": "mia",
          "t": "Great. Go down the stairs. Turn left. Don't run, you have time."
        },
        {
          "quem": "leo",
          "t": "I'm going down now. I can see the train! It isn't leaving yet."
        },
        {
          "quem": "mia",
          "t": "Perfect. Get on, and send me a message."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo looking for?",
          "op": [
            "Platform B",
            "A taxi",
            "His bag"
          ],
          "a": 0,
          "por": "I'm looking for platform B."
        },
        {
          "q": "What does Mia tell him not to do?",
          "op": [
            "Walk to the exit",
            "Ask for help",
            "Look at the board"
          ],
          "a": 0,
          "por": "Don't walk to the exit."
        },
        {
          "q": "What is the woman doing at the end?",
          "op": [
            "Showing him the map",
            "Leaving the desk",
            "Calling a taxi"
          ],
          "a": 0,
          "por": "She's showing me the map."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the station. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm looking for platform B, and my phone is almost dead.",
          "img": "https://wolf-labs.pages.dev/p/7721835a5ff4/help/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Stay here. Don't walk to the exit.",
          "img": "https://wolf-labs.pages.dev/p/7721835a5ff4/help/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She's showing me the map, and I'm going downstairs.",
          "img": "https://wolf-labs.pages.dev/p/7721835a5ff4/help/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Now, or an instruction? Four quick ones.",
      "regra": "<b>am / is / are + -ing</b> = now · <b>isn't + -ing</b> = not now · <b>Stay · Go · Don't + verb</b> = instructions, no <b>to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is showing me the map now.",
          "aceita": [],
          "d": "Hint: <b>is</b> + verb with <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She not helping me right now.",
          "r": "She isn't helping me right now.",
          "aceita": [
            "She is not helping me right now."
          ],
          "d": "Hint: <b>isn't</b> + verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He is stand near the door.",
          "r": "He is standing near the door.",
          "aceita": [
            "He's standing near the door."
          ],
          "d": "Hint: <b>is</b> needs a verb with <b>-ing</b>: <b>standing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Don't to walk to the exit.",
          "r": "Don't walk to the exit.",
          "aceita": [],
          "d": "Hint: after <b>Don't</b>, use the plain verb, without <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7721835a5ff4/help/img/live-b.webp",
      "leg": "A phone with a low battery",
      "pede": "Look at the picture: a phone almost out of battery. Imagine you are lost in a new city. Write 2 or 3 sentences: what you are doing <b>right now</b>, and one instruction for a friend with <b>Stay</b> or <b>Don't</b>.",
      "ph": "I'm standing …",
      "ex": "I'm standing near a bus stop, and my phone is dying. I'm looking for the station. Stay here, and don't leave."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Look around you. What is happening right now?",
          "ph": "Right now I'm … and …",
          "ex": "Right now I'm sitting at my desk, and my dog is sleeping."
        },
        {
          "q": "A friend is lost and calls you. Give two instructions.",
          "ph": "Stay …, don't …",
          "ex": "Stay at the bus stop. Don't walk to the bridge."
        }
      ]
    }
  }
};
