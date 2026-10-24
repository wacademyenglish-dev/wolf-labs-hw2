/* IT'S NOT WORKING · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present continuous for problems + Could you / Is it possible to. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "its-not-working",
  "titulo": "It's Not Working",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/939387c1a1e6/its-not-working/img/live-capa.webp",
  "alvo": "present continuous for a problem happening now (isn't working, are shouting, is leaking) + polite requests: Could you send someone? Is it possible to ...?; never 'the neighbours shouting' or 'Can you to send'",
  "abrir": "What is happening in your street right now?",
  "fecho": "A problem happening now: <b>is / isn't / are + -ing</b> (<i>The air conditioning isn't working. The neighbours are shouting.</i>). Ask politely: <b>Could you</b> + verb, <b>Is it possible to</b> + verb. Never <i>Can you to send</i>.",
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
      "sub": "Mia calls the front desk, Leo answers. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/939387c1a1e6/its-not-working/img/live-capa.webp",
      "leg": "A hot room at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Front desk, this is Leo. How can I help you?"
        },
        {
          "quem": "mia",
          "t": "Hi, this is room 514. The air conditioning isn't working."
        },
        {
          "quem": "leo",
          "t": "I'm sorry about that. Is it hot in the room?"
        },
        {
          "quem": "mia",
          "t": "Very hot. And the neighbours are playing loud music."
        },
        {
          "quem": "leo",
          "t": "Is the music on right now?"
        },
        {
          "quem": "mia",
          "t": "Yes, they're singing and shouting. I can't sleep."
        },
        {
          "quem": "leo",
          "t": "I'll call them now. Is there anything else?"
        },
        {
          "quem": "mia",
          "t": "The tap in the bathroom is leaking. Could you send someone to fix it?"
        },
        {
          "quem": "leo",
          "t": "A technician is coming in ten minutes."
        },
        {
          "quem": "mia",
          "t": "Thank you. Is it possible to get a fan too?"
        },
        {
          "quem": "leo",
          "t": "Of course. I'm bringing one now."
        }
      ],
      "perguntas": [
        {
          "q": "What is wrong with the air conditioning?",
          "op": [
            "It isn't working",
            "It is too cold",
            "It is too loud"
          ],
          "a": 0,
          "por": "The air conditioning isn't working."
        },
        {
          "q": "What are the neighbours doing?",
          "op": [
            "Singing and shouting",
            "Sleeping",
            "Cooking dinner"
          ],
          "a": 0,
          "por": "They're singing and shouting."
        },
        {
          "q": "What is Leo bringing?",
          "op": [
            "A fan",
            "A new room key",
            "A bottle of water"
          ],
          "a": 0,
          "por": "I'm bringing one now."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the call. Hear it, then say it.",
      "frases": [
        {
          "t": "The air conditioning isn't working. It's very hot.",
          "img": "https://wolf-labs.pages.dev/p/939387c1a1e6/its-not-working/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The neighbours are shouting in the corridor.",
          "img": "https://wolf-labs.pages.dev/p/939387c1a1e6/its-not-working/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The tap is leaking. Could you send someone?",
          "img": "https://wolf-labs.pages.dev/p/939387c1a1e6/its-not-working/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "What is happening? Four quick ones.",
      "regra": "<b>is / are + -ing</b> for a problem now · <b>Could you</b> + verb · never <b>Can you to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The neighbours are playing loud music.",
          "aceita": [],
          "d": "Dica: problema agora = <b>are</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The neighbours shouting in the hall.",
          "r": "The neighbours are shouting in the hall.",
          "aceita": [],
          "d": "Dica: no inglês não dá para pular o <b>are</b>: <b>are</b> + <b>shouting</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is a problem now.",
          "mostra": "The air conditioning don't work.",
          "r": "The air conditioning isn't working.",
          "aceita": [
            "The air conditioning is not working.",
            "The air conditioning doesn't work.",
            "The air conditioning does not work."
          ],
          "d": "Dica: o ar-condicionado é uma coisa só: <b>isn't working</b> (ou <b>doesn't work</b>)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to here.",
          "mostra": "Can you to send someone, please?",
          "r": "Can you send someone, please?",
          "aceita": [
            "Could you send someone, please?"
          ],
          "d": "Dica: depois de <b>can</b> e <b>could</b>, o verbo vem direto, sem <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/939387c1a1e6/its-not-working/img/live-b.webp",
      "leg": "A tap dripping in the dark",
      "pede": "Look at the picture: a dripping tap. Write 2 or 3 sentences to the front desk: one problem happening now (<b>is / isn't + -ing</b>) and one polite request with <b>Could you</b> or <b>Is it possible to</b>.",
      "ph": "The tap is …",
      "ex": "The tap is leaking and the water isn't stopping. Could you send someone to fix it?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Is something not working at your house today? What?",
          "ph": "The … isn't working.",
          "ex": "The Wi-Fi isn't working today."
        },
        {
          "q": "You are in a hotel and your room is too hot. What do you ask the front desk?",
          "ph": "Could you …?",
          "ex": "Could you send someone to fix the air conditioning?"
        }
      ]
    }
  }
};
