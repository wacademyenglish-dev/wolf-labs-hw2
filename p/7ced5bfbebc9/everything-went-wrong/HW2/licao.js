/* EVERYTHING WENT WRONG · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ended up + -ing / turned out to be / in the end. B2: nenhum português. Só desastres de viagem (mala, trem, chuva). live-a de fora (clara). */
window.HW2 = {
  "id": "everything-went-wrong",
  "titulo": "Everything Went Wrong",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7ced5bfbebc9/everything-went-wrong/img/live-capa.webp",
  "alvo": "telling a trip that went wrong, and laughing about it: ended up + -ing · turned out to be / it turned out (that) · in the end (finally) · at first; never ended up to + verb, turned out be, at the end for finally, it was turn out",
  "abrir": "What is your best story of a trip that went wrong?",
  "fecho": "<b>Ended up</b> + -ing: what really happened: <i>We ended up sleeping in the car.</i> <b>Turned out to be</b>: the surprise: <i>The shortcut turned out to be a gravel road.</i> <b>In the end</b> = finally: <i>In the end, we saw the lights.</i> Never <i>ended up to sleep</i>, never <i>turned out be</i>, never <i>at the end</i> for finally.",
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
      "sub": "Mia tells Leo about a trip where everything went wrong. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/7ced5bfbebc9/everything-went-wrong/img/live-b.webp",
      "leg": "A muddy boot and a broken umbrella",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how was your weekend trip? You look tired."
        },
        {
          "quem": "mia",
          "t": "A disaster, but a funny one. First, the airline lost my bag."
        },
        {
          "quem": "leo",
          "t": "No way! What did you do?"
        },
        {
          "quem": "mia",
          "t": "I ended up buying a toothbrush and a raincoat at the airport. Then the rain started."
        },
        {
          "quem": "leo",
          "t": "And the hotel?"
        },
        {
          "quem": "mia",
          "t": "The hotel near the beach turned out to be a small room above a bakery, ten kilometres from the sea."
        },
        {
          "quem": "leo",
          "t": "Ha! And the train to the city?"
        },
        {
          "quem": "mia",
          "t": "I missed it by one minute, so I ended up waiting two hours at the station."
        },
        {
          "quem": "leo",
          "t": "That sounds awful."
        },
        {
          "quem": "mia",
          "t": "At first it was. But in the end, the bakery sold the best bread I ever tasted, and my bag arrived on Sunday."
        }
      ],
      "perguntas": [
        {
          "q": "What did Mia end up buying at the airport?",
          "op": [
            "A toothbrush and a raincoat",
            "A train ticket",
            "A new bag"
          ],
          "a": 0,
          "por": "I ended up buying a toothbrush and a raincoat at the airport."
        },
        {
          "q": "What did the hotel turn out to be?",
          "op": [
            "A small room above a bakery",
            "A big beach resort",
            "A flat near the station"
          ],
          "a": 0,
          "por": "The hotel turned out to be a small room above a bakery."
        },
        {
          "q": "What was good in the end?",
          "op": [
            "The bread from the bakery",
            "The weather",
            "The train"
          ],
          "a": 0,
          "por": "In the end, the bakery sold the best bread I ever tasted."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a trip gone wrong. Hear it, then say it.",
      "frases": [
        {
          "t": "We missed the train, so we ended up waiting two hours.",
          "img": "https://wolf-labs.pages.dev/p/7ced5bfbebc9/everything-went-wrong/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The shortcut turned out to be a gravel road.",
          "img": "https://wolf-labs.pages.dev/p/7ced5bfbebc9/everything-went-wrong/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "At first it was a nightmare, but in the end it was funny.",
          "img": "https://wolf-labs.pages.dev/p/7ced5bfbebc9/everything-went-wrong/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Ended up, turned out, in the end. Four quick ones.",
      "regra": "<b>ended up</b> + -ing · <b>turned out to be</b> · <b>in the end</b> = finally · <b>at first</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "It turned out to be a tiny room.",
          "aceita": [],
          "d": "Hint: the surprise: <b>turned out to be</b> + a noun."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We ended up to wait at the station.",
          "r": "We ended up waiting at the station.",
          "aceita": [],
          "d": "Hint: after <b>ended up</b>, use -ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "The road turned out be closed.",
          "r": "The road turned out to be closed.",
          "aceita": [],
          "d": "Hint: <b>turned out to be</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "At the end, we saw the lights.",
          "r": "In the end, we saw the lights.",
          "aceita": [
            "In the end we saw the lights."
          ],
          "d": "Hint: to say <i>finally</i>, use <b>in the end</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7ced5bfbebc9/everything-went-wrong/img/live-b.webp",
      "leg": "A muddy boot and a broken umbrella",
      "pede": "Look at the picture: a muddy boot and a broken umbrella. Write 2 or 3 sentences about a trip where things went wrong (a lost bag, a missed train, rain). Use <b>ended up + -ing</b>, <b>turned out to be</b> or <b>in the end</b>.",
      "ph": "We missed the train, so we ended up …",
      "ex": "We missed the train, so we ended up waiting at the station. The hotel turned out to be very small. In the end, it was a great story."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a trip or a plan where something went wrong. What did you end up doing?",
          "ph": "We ended up …",
          "ex": "It rained all day, so we ended up playing cards in the hotel."
        },
        {
          "q": "What turned out better than you expected, on a trip or in a plan?",
          "ph": "… turned out to be …",
          "ex": "The small café turned out to be the best place in town."
        }
      ]
    }
  }
};
