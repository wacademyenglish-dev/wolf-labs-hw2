/* BLINDING LIGHTS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: presente contínuo. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "blinding-lights",
  "titulo": "Blinding Lights",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a226bfa05405/blinding-lights/img/live-capa.webp",
  "alvo": "present continuous: am / is / are + -ing for what is happening now, the negative (isn't / aren't / I'm not), the question (Are you ...?), and now versus every day",
  "abrir": "What is happening outside your window right now?",
  "fecho": "<b>am / is / are + -ing</b> for what is happening <b>now</b>: <i>A car is flashing its lights.</i> No: <i>It isn't raining. I'm not hurrying.</i> A question: <i>Are you listening to music?</i> Every day = one piece (<i>She listens</i>); right now = two pieces (<i>She is listening</i>).",
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
      "sub": "Mia talks to Leo on the phone. He is in a car, at one in the morning. A new scene, about 50 seconds.",
      "img": "https://wolf-labs.pages.dev/p/a226bfa05405/blinding-lights/img/live-tunel.webp",
      "leg": "A road at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, where are you? It's one in the morning."
        },
        {
          "quem": "leo",
          "t": "I'm in the car. I'm driving home from the airport."
        },
        {
          "quem": "mia",
          "t": "Are you listening to music?"
        },
        {
          "quem": "leo",
          "t": "Yes, I am. The radio is playing an old song, and I'm singing very badly."
        },
        {
          "quem": "mia",
          "t": "What's outside? Is it raining?"
        },
        {
          "quem": "leo",
          "t": "No, it isn't. A truck is passing me, and a man is waiting at the gas station."
        },
        {
          "quem": "mia",
          "t": "And the road? Is it empty?"
        },
        {
          "quem": "leo",
          "t": "Not really. Two cars are going slowly, and a dog is crossing the street."
        },
        {
          "quem": "mia",
          "t": "Be careful! Are you wearing your seat belt?"
        },
        {
          "quem": "leo",
          "t": "Yes, I am. I'm not hurrying. I'm coming home."
        }
      ],
      "perguntas": [
        {
          "q": "Where is Leo?",
          "op": [
            "In his car",
            "At the airport",
            "At home"
          ],
          "a": 0,
          "por": "I'm in the car. I'm driving home from the airport."
        },
        {
          "q": "What is the dog doing?",
          "op": [
            "Crossing the street",
            "Waiting at the gas station",
            "Sleeping in the car"
          ],
          "a": 0,
          "por": "A dog is crossing the street."
        },
        {
          "q": "What is Leo not doing?",
          "op": [
            "Hurrying",
            "Singing",
            "Listening to the radio"
          ],
          "a": 0,
          "por": "I'm not hurrying."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a night road. Hear it, then say it.",
      "frases": [
        {
          "t": "A truck is passing the gas station.",
          "img": "https://wolf-labs.pages.dev/p/a226bfa05405/blinding-lights/img/live-posto.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Two cars are crossing the bridge.",
          "img": "https://wolf-labs.pages.dev/p/a226bfa05405/blinding-lights/img/live-ponte.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She is listening to the radio, but she isn't singing.",
          "img": "https://wolf-labs.pages.dev/p/a226bfa05405/blinding-lights/img/live-tunel.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "am, is or are? Four quick ones.",
      "regra": "<b>am / is / are</b> + <b>-ing</b> = now · <b>isn't / aren't</b> = no · <b>Are you ...?</b> = question.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The truck is going through the tunnel.",
          "aceita": [],
          "d": "Dica: agora tem dois pedaços: <b>is</b> + <b>going</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "A car flashing its lights.",
          "r": "A car is flashing its lights.",
          "aceita": [
            "A car's flashing its lights."
          ],
          "d": "Dica: faltou o <b>is</b> antes do verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Look! It rains now.",
          "r": "Look! It is raining now.",
          "aceita": [
            "Look! It's raining now."
          ],
          "d": "Dica: agora = <b>is</b> + <b>raining</b>, não 'rains'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They is waiting at the bridge.",
          "r": "They are waiting at the bridge.",
          "aceita": [
            "They're waiting at the bridge."
          ],
          "d": "Dica: com <b>they</b> o certo é <b>are</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/a226bfa05405/blinding-lights/img/live-tunel.webp",
      "leg": "A road at night",
      "pede": "Look at the picture: a road at night, with lights on the walls. Write 2 or 3 sentences: what is happening outside <b>right now</b>, and one thing you <b>are not</b> doing.",
      "ph": "Right now a car is … I am not …",
      "ex": "Right now a truck is passing the tunnel, and its lights are flashing. I am sitting in the car, and I am not hurrying."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing right now? What is happening outside your window?",
          "ph": "Right now I am … Outside, …",
          "ex": "Right now I am sitting on my bed. Outside, a neighbor is washing his car."
        },
        {
          "q": "What is your best friend doing right now? What do you think?",
          "ph": "I think he / she is …",
          "ex": "I think my best friend is working. She isn't sleeping, because it is two o'clock in the afternoon."
        }
      ]
    }
  }
};
