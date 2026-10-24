/* WHAT HAPPENED IN THE VILLAGE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple (didn't + verbo limpo, Did you + verbo limpo, irregulares). Jogo: falas originais, misterio leve (balde fora do lugar), sem ataque. A2: dicas em portugues so nas notas (d). */
window.HW2 = {
  "id": "what-happened-in-the-village",
  "titulo": "What Happened in the Village",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/51fc2018f491/what-happened-in-the-village/img/live-bridge.webp",
  "alvo": "past simple: regular -ed and irregular verbs (went, saw, found, heard); didn't + plain verb; Did you + plain verb?; never didn't saw, did you saw, goed",
  "abrir": "What did you do last night?",
  "fecho": "Past simple: <i>I walked. I went. I found.</i> No: <b>didn't</b> + plain verb (<i>I didn't see</i>). Question: <b>Did</b> + plain verb (<i>Did you see it?</i>). Never <i>didn't saw</i>, <i>did you saw</i> or <i>goed</i>.",
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
      "sub": "Mia and Leo talk about a small mystery. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/51fc2018f491/what-happened-in-the-village/img/live-well.webp",
      "leg": "The old well at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what happened in the village last night?"
        },
        {
          "quem": "mia",
          "t": "Something strange. I walked to the well at nine, and the old bucket wasn't there."
        },
        {
          "quem": "leo",
          "t": "Did you see anyone?"
        },
        {
          "quem": "mia",
          "t": "No, I didn't see anyone. But I heard a small bell."
        },
        {
          "quem": "leo",
          "t": "A bell? Where?"
        },
        {
          "quem": "mia",
          "t": "Near the bridge. I went there and found the bucket on the bridge."
        },
        {
          "quem": "leo",
          "t": "Did the wind move it?"
        },
        {
          "quem": "mia",
          "t": "I don't think so. The rope was tied. Someone carried it there."
        },
        {
          "quem": "leo",
          "t": "Maybe a child played a joke. Did you ask the neighbors?"
        },
        {
          "quem": "mia",
          "t": "Yes, I knocked on three doors, but nobody answered. I didn't find the answer."
        },
        {
          "quem": "leo",
          "t": "Let's look together tomorrow."
        }
      ],
      "perguntas": [
        {
          "q": "Where did Mia find the bucket?",
          "op": [
            "On the bridge",
            "At the well",
            "In a house"
          ],
          "a": 0,
          "por": "I went there and found the bucket on the bridge."
        },
        {
          "q": "What did Mia hear?",
          "op": [
            "A small bell",
            "A loud voice",
            "A dog"
          ],
          "a": 0,
          "por": "I heard a small bell."
        },
        {
          "q": "What did Mia do about the neighbors?",
          "op": [
            "She knocked on three doors",
            "She called them",
            "She wrote a note"
          ],
          "a": 0,
          "por": "I knocked on three doors, but nobody answered."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about last night. Hear it, then say it.",
      "frases": [
        {
          "t": "I walked to the old well at nine.",
          "img": "https://wolf-labs.pages.dev/p/51fc2018f491/what-happened-in-the-village/img/live-well.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I didn't see anyone near the bridge.",
          "img": "https://wolf-labs.pages.dev/p/51fc2018f491/what-happened-in-the-village/img/live-bridge.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Did you find the lantern at the gate?",
          "img": "https://wolf-labs.pages.dev/p/51fc2018f491/what-happened-in-the-village/img/live-gate.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past simple. Four quick ones.",
      "regra": "<b>went / saw / found</b> = past · <b>didn't</b> + plain verb · <b>Did you</b> + plain verb · never <b>goed</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Mia didn't see anyone at the gate.",
          "aceita": [],
          "d": "Dica: depois de <b>didn't</b>, o verbo fica limpo: <b>see</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: after didn't, the plain verb.",
          "mostra": "I didn't saw anyone at the well.",
          "r": "I didn't see anyone at the well.",
          "aceita": [
            "I did not see anyone at the well."
          ],
          "d": "Dica: <b>didn't</b> já leva o passado, então o verbo fica limpo: <b>see</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Did you saw the bucket on the bridge?",
          "r": "Did you see the bucket on the bridge?",
          "aceita": [],
          "d": "Dica: depois de <b>Did you</b>, o verbo fica limpo: <b>see</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We goed to the gate at nine.",
          "r": "We went to the gate at nine.",
          "aceita": [],
          "d": "Dica: <b>go</b> é irregular: o passado é <b>went</b>, nunca <i>goed</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/51fc2018f491/what-happened-in-the-village/img/live-gate.webp",
      "leg": "A village gate at night",
      "pede": "Look at the picture: a village gate at night. Write 2 or 3 sentences about what happened there last night. Use the past simple, and one sentence with <b>didn't</b>.",
      "ph": "Last night I …",
      "ex": "Last night I walked to the gate. It was open, but I didn't see anyone. I heard a small bell."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last night?",
          "ph": "Last night I …",
          "ex": "Last night I watched a movie and cooked dinner."
        },
        {
          "q": "Did you go out yesterday? Where?",
          "ph": "Yes, I went to … / No, I didn't …",
          "ex": "No, I didn't go out. I stayed at home."
        }
      ]
    }
  }
};
