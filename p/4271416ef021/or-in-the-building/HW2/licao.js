window.HW2_ARTIGO_CONTA = true; /* aula de artigos: a/an/the contam */
/* OR IN THE BUILDING · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: artigo com lugares. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "or-in-the-building",
  "titulo": "Or in the Building",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/4271416ef021/or-in-the-building/img/corredor.webp",
  "alvo": "articles with places: at school (student) vs at the school (visitor) · in bed vs in the bed · at work, at home, go home, by bus (no the)",
  "abrir": "Where are you on Monday at 8 AM, and how do you get there?",
  "fecho": "<b>The person decides.</b> A student is <i>at school</i>, a parent is <i>at the school</i>. Sick? <i>in bed</i>. Never THE with <i>at work, at home, go home, by bus</i>.",
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
      "sub": "Mia and Leo send voice messages. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/4271416ef021/or-in-the-building/img/live-mapa.webp",
      "leg": "The map of the day",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm at the school. I'm waiting by the gate."
        },
        {
          "quem": "leo",
          "t": "Is Ben still at school?"
        },
        {
          "quem": "mia",
          "t": "Yes, he's in class until four. I'm only at the building."
        },
        {
          "quem": "leo",
          "t": "I'm at work until six. Call me after that."
        },
        {
          "quem": "mia",
          "t": "OK. Dad is in bed today. He isn't well."
        },
        {
          "quem": "leo",
          "t": "Then go home early. Take the bus 40, it's fast."
        },
        {
          "quem": "mia",
          "t": "Good idea. I usually go home by train, but the train is late today."
        },
        {
          "quem": "leo",
          "t": "Did you find your keys?"
        },
        {
          "quem": "mia",
          "t": "No. Wait, they are in the bed! I read there last night."
        },
        {
          "quem": "leo",
          "t": "Great. Now go home, and say hello to your dad."
        }
      ],
      "perguntas": [
        {
          "q": "Why is Mia at the school?",
          "op": [
            "She is waiting by the gate",
            "She is a student",
            "She works there"
          ],
          "a": 0,
          "por": "I'm at the school. I'm waiting by the gate."
        },
        {
          "q": "Where is Dad?",
          "op": [
            "In bed, sick",
            "At work",
            "At the school"
          ],
          "a": 0,
          "por": "Dad is in bed today. He isn't well."
        },
        {
          "q": "Where are Mia's keys?",
          "op": [
            "In the bed",
            "At work",
            "On the bus"
          ],
          "a": 0,
          "por": "They are in the bed!"
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm at the school, but Ben is at school.",
          "img": "https://wolf-labs.pages.dev/p/4271416ef021/or-in-the-building/img/corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Dad is in bed because he is sick.",
          "img": "https://wolf-labs.pages.dev/p/4271416ef021/or-in-the-building/img/mensagem.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I go to work by bus, and I go home by train.",
          "img": "https://wolf-labs.pages.dev/p/4271416ef021/or-in-the-building/img/live-mapa2.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Which article? Four quick ones.",
      "regra": "<b>at school</b> = a student · <b>at the school</b> = a visitor · <b>in bed</b> = resting · <b>at work, at home, by bus</b> = never THE.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is at school until four.",
          "aceita": [],
          "d": "Dica: ela é aluna, então <b>at school</b>, sem the."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm at the work until six.",
          "r": "I'm at work until six.",
          "aceita": [],
          "d": "Dica: <b>at work</b>, nunca <i>at the work</i>."
        },
        {
          "tipo": "escreve",
          "t": "Write the whole sentence.",
          "mostra": "Visitors wait at ___ school gate.",
          "r": "Visitors wait at the school gate.",
          "aceita": [],
          "d": "Dica: visitante está só no prédio, então <b>at the school</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He goes to work with the bus.",
          "r": "He goes to work by bus.",
          "aceita": [
            "He goes to work by the bus."
          ],
          "d": "Dica: meio de transporte: <b>by bus</b>, sem the."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/4271416ef021/or-in-the-building/img/mensagem.webp",
      "leg": "A quiet morning, a message",
      "pede": "Look at the picture. Write 3 short lines about your week: where you are in the morning, how you go there, and where you rest. Use <b>at work / at school / at home / by bus / in bed</b>.",
      "ph": "On Monday I am at … I go by …",
      "ex": "On Monday I am at work at eight. I go by bus. In the evening I am at home, and I read in bed."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where are you on Monday at 8 AM, and how do you get there?",
          "ph": "I'm at … I go by …",
          "ex": "I'm at work. I go by car, and it takes forty minutes."
        },
        {
          "q": "Who in your family is at school or at work now?",
          "ph": "My … is at …",
          "ex": "My daughter is at school. My husband is at work until six."
        }
      ]
    }
  }
};
