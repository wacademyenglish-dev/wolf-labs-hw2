/* THE FIFTH SEAT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: he is / she is, a / an + profissao, Is she ...?. A1: dicas em português só nas notas (d). Só as imagens live-* (já escuras). Alvo de artigo/possessivo: HW2_ARTIGO_CONTA ligado. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "fifth-seat",
  "titulo": "The Fifth Seat",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e97632d27645/fifth-seat/img/live-navio.webp",
  "alvo": "he is / she is · a / an + a job (a doctor, an engineer) · a country takes no little word (from Egypt) · Is she a doctor? Yes, she is. / No, he isn't · the verb jumps to the front, it is not copied",
  "abrir": "What is your job? And someone in your family?",
  "fecho": "A job takes a little word: <b>She is a doctor. He is an engineer.</b> A country takes none: <b>from Egypt</b>. To ask, the verb jumps to the front: <b>Is she a doctor? Yes, she is. / No, he isn't.</b>",
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
      "sub": "Mia and Leo choose a person for the ship. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e97632d27645/fifth-seat/img/live-navio.webp",
      "leg": "The ship at the ice",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the ship has one empty seat. Who is the candidate?"
        },
        {
          "quem": "leo",
          "t": "Her name is Nadia. She is a doctor."
        },
        {
          "quem": "mia",
          "t": "Is she from Egypt?"
        },
        {
          "quem": "leo",
          "t": "Yes, she is. The next one is Ivo. He is an engineer."
        },
        {
          "quem": "mia",
          "t": "Is he from Croatia?"
        },
        {
          "quem": "leo",
          "t": "No, he isn't. He is from Spain."
        },
        {
          "quem": "mia",
          "t": "Is he really an engineer?"
        },
        {
          "quem": "leo",
          "t": "No, he isn't. He is a cook!"
        },
        {
          "quem": "mia",
          "t": "Then Nadia is the fifth person on the ship."
        },
        {
          "quem": "leo",
          "t": "Yes! The doctor goes to the Arctic."
        }
      ],
      "perguntas": [
        {
          "q": "What is Nadia?",
          "op": [
            "A doctor",
            "A cook",
            "An engineer"
          ],
          "a": 0,
          "por": "Her name is Nadia. She is a doctor."
        },
        {
          "q": "What is Ivo?",
          "op": [
            "A cook",
            "An engineer",
            "A doctor"
          ],
          "a": 0,
          "por": "No, he isn't. He is a cook!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the candidates. Hear it, then say it.",
      "frases": [
        {
          "t": "She is a doctor, and she is from Egypt.",
          "img": "https://wolf-labs.pages.dev/p/e97632d27645/fifth-seat/img/live-navio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Is he an engineer? No, he isn't.",
          "img": "https://wolf-labs.pages.dev/p/e97632d27645/fifth-seat/img/live-base.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "He isn't an engineer. He is a cook.",
          "img": "https://wolf-labs.pages.dev/p/e97632d27645/fifth-seat/img/live-navio.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A or an? Is he or he is? Four quick ones.",
      "regra": "<b>a / an</b> + job · a country: no little word · <b>Is she ...?</b> the verb jumps to the front · <b>isn't</b> = no.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Is she a doctor from Egypt?",
          "aceita": [],
          "d": "Dica: o verbo vem na frente: <b>Is</b> she. País sem artigo: from Egypt."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She is doctor.",
          "r": "She is a doctor.",
          "aceita": [
            "She's a doctor."
          ],
          "d": "Dica: profissão leva <b>a</b> ou <b>an</b>: <b>a doctor</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a or an?",
          "mostra": "He is a engineer.",
          "r": "He is an engineer.",
          "aceita": [
            "He's an engineer."
          ],
          "d": "Dica: <b>engineer</b> começa com som de vogal: <b>an</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is too much.",
          "mostra": "Is he is a pilot?",
          "r": "Is he a pilot?",
          "aceita": [],
          "d": "Dica: o verbo pula para a frente, não se copia: <b>Is he</b> a pilot?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e97632d27645/fifth-seat/img/live-base.webp",
      "leg": "A small base in the snow",
      "pede": "Look at the picture: a small base in the snow. Write 2 or 3 sentences about a person in your family: name, job (<b>a / an</b>) and country.",
      "ph": "My … is a / an … He / She is from …",
      "ex": "My sister is an engineer. She is from Brazil."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Someone in your family: what is their job?",
          "ph": "My … is a / an …",
          "ex": "My father is a driver."
        },
        {
          "q": "Ask about a friend's job. Start with Is he or Is she.",
          "ph": "Is your friend a / an …?",
          "ex": "Is your friend a teacher? No, he isn't. He is a nurse."
        }
      ]
    }
  }
};
