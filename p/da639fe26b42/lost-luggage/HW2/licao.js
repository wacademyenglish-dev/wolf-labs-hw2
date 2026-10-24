/* LOST LUGGAGE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: made of / has e mine / yours / his / hers. A2: dicas em portugues so nas notas (d). So live-* escuras (lum < 50). Possessivo e alvo: HW2_ARTIGO_CONTA ligado. */
window.HW2 = {
  "id": "lost-luggage",
  "titulo": "Lost Luggage",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/da639fe26b42/lost-luggage/img/live-b-ribbon.webp",
  "alvo": "describing a bag: It's + adjective, made of + material, it has + feature; possessive pronouns mine / yours / his / hers (Is this yours? No, it isn't mine. Mine has a red ribbon.); never It's of leather, never It have, never Is this your",
  "abrir": "What does your suitcase look like?",
  "fecho": "<b>It's</b> big and dark blue. <b>It's made of</b> plastic. <b>It has</b> four wheels. <b>Mine</b> · <b>yours</b> · <b>his</b> · <b>hers</b> stand alone: <i>Is this yours? No, it isn't mine.</i> With a noun: <i>my bag</i>, <i>your bag</i>.",
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
      "sub": "Mia at the baggage desk at Heathrow. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/da639fe26b42/lost-luggage/img/live-capa.webp",
      "leg": "The baggage belt, empty",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Excuse me. My bag didn't arrive."
        },
        {
          "quem": "leo",
          "t": "I'm sorry. What does it look like?"
        },
        {
          "quem": "mia",
          "t": "It's a big suitcase. It's dark blue, and it has four wheels."
        },
        {
          "quem": "leo",
          "t": "Is it made of plastic or fabric?"
        },
        {
          "quem": "mia",
          "t": "It's made of plastic. It has a red ribbon on the handle."
        },
        {
          "quem": "leo",
          "t": "A red ribbon. Good. Wait a moment... Is this yours?"
        },
        {
          "quem": "mia",
          "t": "No, it isn't mine. Mine has a ribbon."
        },
        {
          "quem": "leo",
          "t": "This one is black. Maybe it's his."
        },
        {
          "quem": "mia",
          "t": "Yes, it's probably his. Is mine on the next flight?"
        },
        {
          "quem": "leo",
          "t": "Yes. We'll bring it to your hotel tomorrow morning."
        }
      ],
      "perguntas": [
        {
          "q": "What colour is Mia's suitcase?",
          "op": [
            "Dark blue",
            "Black",
            "Red"
          ],
          "a": 0,
          "por": "It's dark blue, and it has four wheels."
        },
        {
          "q": "What is on the handle?",
          "op": [
            "A red ribbon",
            "A name tag",
            "Stickers"
          ],
          "a": 0,
          "por": "It has a red ribbon on the handle."
        },
        {
          "q": "Why isn't the black bag Mia's?",
          "op": [
            "It has no ribbon",
            "It is too small",
            "It is made of leather"
          ],
          "a": 0,
          "por": "No, it isn't mine. Mine has a ribbon."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about bags. Hear it, then say it.",
      "frases": [
        {
          "t": "It's made of leather, and it has two handles.",
          "img": "https://wolf-labs.pages.dev/p/da639fe26b42/lost-luggage/img/live-b-leather.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Is this yours? No, it isn't mine.",
          "img": "https://wolf-labs.pages.dev/p/da639fe26b42/lost-luggage/img/live-b-hard.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Mine has a red ribbon on the handle.",
          "img": "https://wolf-labs.pages.dev/p/da639fe26b42/lost-luggage/img/live-b-ribbon.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "made of, has, mine and yours. Four quick ones.",
      "regra": "<b>It's made of</b> + material · <b>it has</b> + feature · <b>mine / yours / his / hers</b> stand alone · never <i>It's of leather</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Mine has a red ribbon on the handle.",
          "aceita": [],
          "d": "Dica: <b>Mine</b> sozinho, sem substantivo depois, e <b>has</b> com it/mine."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "It's of leather.",
          "r": "It's made of leather.",
          "aceita": [
            "It is made of leather."
          ],
          "d": "Dica: material pede <b>made of</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "It have four wheels.",
          "r": "It has four wheels.",
          "aceita": [],
          "d": "Dica: com <b>it</b>, o verbo é <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Is this your?",
          "r": "Is this yours?",
          "aceita": [],
          "d": "Dica: sem substantivo depois, use <b>yours</b>, não 'your'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/da639fe26b42/lost-luggage/img/live-a.webp",
      "leg": "A dark blue suitcase with a ribbon",
      "pede": "Look at the picture: a suitcase with a red ribbon. Write 2 or 3 sentences about your own suitcase or bag: colour, material, one special thing. Use <b>It's made of</b>, <b>It has</b> or <b>Mine has</b>.",
      "ph": "My bag is … It's made of …",
      "ex": "My suitcase is dark blue. It's made of plastic. It has a red ribbon on the handle."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What does your bag look like?",
          "ph": "My bag is … It has …",
          "ex": "My bag is black and made of fabric. It has two pockets."
        },
        {
          "q": "A man holds a bag. You don't know whose it is. What do you ask?",
          "ph": "Is this …?",
          "ex": "Is this yours? Is it his?"
        }
      ]
    }
  }
};
