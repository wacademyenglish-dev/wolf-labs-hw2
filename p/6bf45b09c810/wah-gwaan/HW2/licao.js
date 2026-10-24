/* WAH GWAAN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: modais de dedução (must / might / can't + have). B2: nenhum português. Só live-capa (escura). */
window.HW2 = {
  "id": "wah-gwaan",
  "titulo": "Wah Gwaan",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6bf45b09c810/wah-gwaan/img/live-capa.webp",
  "alvo": "modal verbs of deduction, present and past: must be (sure), might / could be (maybe), can't be (impossible); must have / might have / can't have + participle; never must to, mustn't for impossible, must took, might has",
  "abrir": "Something you left on the table is gone. Who do you think took it?",
  "fecho": "<b>must</b> = I'm sure · <b>might / could</b> = maybe · <b>can't</b> = impossible (not <i>mustn't</i>). In the past: <b>must have taken</b>, <b>might have been</b>, <b>can't have seen</b>. Always the plain verb or <b>have</b> + participle: never <i>must to</i>, never <i>might has</i>.",
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
      "sub": "Mia and Leo at a guesthouse in Kingston. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6bf45b09c810/wah-gwaan/img/live-capa.webp",
      "leg": "A Kingston street at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the bag of mangoes on the porch is empty. Somebody must have taken them."
        },
        {
          "quem": "leo",
          "t": "It can't have been Miss Pearl. She was at the market all morning."
        },
        {
          "quem": "mia",
          "t": "Then it might have been Kemar. He was here when I left."
        },
        {
          "quem": "leo",
          "t": "Kemar can't have eaten ten mangoes. He doesn't even like them."
        },
        {
          "quem": "mia",
          "t": "Look at the step. There are big paw prints, and they're still wet."
        },
        {
          "quem": "leo",
          "t": "So it must have been an animal. It might have been Bingy."
        },
        {
          "quem": "mia",
          "t": "Bingy is too small. These prints must belong to a bigger dog."
        },
        {
          "quem": "leo",
          "t": "Then it could have been the neighbor's dog. I saw him by the gate."
        },
        {
          "quem": "mia",
          "t": "That must be it. I'll tell Miss Pearl, and we'll buy more mangoes."
        }
      ],
      "perguntas": [
        {
          "q": "Why can't it have been Miss Pearl?",
          "op": [
            "She was at the market all morning",
            "She doesn't like mangoes",
            "She was asleep"
          ],
          "a": 0,
          "por": "It can't have been Miss Pearl. She was at the market all morning."
        },
        {
          "q": "Why can't it have been Kemar?",
          "op": [
            "He doesn't even like mangoes",
            "He was at the market",
            "He is too small"
          ],
          "a": 0,
          "por": "Kemar can't have eaten ten mangoes. He doesn't even like them."
        },
        {
          "q": "What do the wet paw prints suggest?",
          "op": [
            "It must have been an animal",
            "It was definitely Miss Pearl",
            "Nobody was there"
          ],
          "a": 0,
          "por": "So it must have been an animal."
        }
      ]
    },
    "out": {
      "sub": "Three deductions from the porch. Hear it, then say it.",
      "frases": [
        {
          "t": "Somebody must have taken the mangoes.",
          "img": "https://wolf-labs.pages.dev/p/6bf45b09c810/wah-gwaan/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It can't have been Miss Pearl, because she was at the market.",
          "img": "https://wolf-labs.pages.dev/p/6bf45b09c810/wah-gwaan/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It might have been the neighbor's dog.",
          "img": "https://wolf-labs.pages.dev/p/6bf45b09c810/wah-gwaan/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Sure, maybe or impossible? Four quick ones.",
      "regra": "<b>must have</b> = sure · <b>might / could have</b> = maybe · <b>can't have</b> = impossible · modal + <b>have</b> + participle.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She can't have eaten all the mangoes.",
          "aceita": [],
          "d": "Hint: <b>can't have</b> + participle = impossible in the past."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: sure, or impossible?",
          "mostra": "It mustn't be Kemar, he was away.",
          "r": "It can't be Kemar, he was away.",
          "aceita": [
            "It cannot be Kemar, he was away."
          ],
          "d": "Hint: when it is impossible, use <b>can't</b>, not <b>mustn't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She must took the mangoes.",
          "r": "She must have taken the mangoes.",
          "aceita": [],
          "d": "Hint: past deduction: <b>must have</b> + participle."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He might has forgotten the key.",
          "r": "He might have forgotten the key.",
          "aceita": [],
          "d": "Hint: after a modal, use <b>have</b>, never <b>has</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6bf45b09c810/wah-gwaan/img/live-capa.webp",
      "leg": "A Kingston street at night",
      "pede": "Look at the picture: a Kingston street at night. Something is going on. Write 2 or 3 sentences with <b>must be</b>, <b>might be</b>, <b>can't be</b> or <b>must have</b>, <b>might have</b>, <b>can't have</b>.",
      "ph": "It must be …",
      "ex": "The music is very loud, so it must be a party. It might be a wedding. It can't be a normal night, because the street is full."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Your friend is late and doesn't answer. What do you think happened?",
          "ph": "He might have … / He must have …",
          "ex": "He might have missed the bus. He must have forgotten his phone."
        },
        {
          "q": "Your keys are not in your bag. Where could they be?",
          "ph": "I might have left them …",
          "ex": "I might have left them at the café. They can't be at home; I checked."
        }
      ]
    }
  }
};
