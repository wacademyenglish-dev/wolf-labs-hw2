/* EXPENSIVE BUT FAST · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: opposite adjectives, but / and, adjective before noun. A1: dicas em português só nas notas (d). Imagens live-* (o motor escurece); onibus e bike claras ficaram de fora. */
window.HW2 = {
  "id": "expensive-but-fast",
  "titulo": "Expensive but Fast",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f59c197ae893/expensive-but-fast/img/live-estacao.webp",
  "alvo": "opposite adjectives (expensive / cheap, fast / slow); but joins a good side and a bad side, and joins two good sides; the adjective goes before the noun (a cheap train)",
  "abrir": "How do you go to work or school? Is it fast or slow?",
  "fecho": "<b>Expensive / cheap</b>, <b>fast / slow</b>. Good side + bad side: <b>but</b> (<i>It is fast, but it is expensive.</i>). Two good sides: <b>and</b> (<i>It is cheap and healthy.</i>). The adjective goes before the noun: <i>a cheap train</i>.",
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
      "sub": "Mia and Leo plan a trip to Edinburgh. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f59c197ae893/expensive-but-fast/img/live-trem.webp",
      "leg": "An empty train",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, how do we go to Edinburgh? The train is fast."
        },
        {
          "quem": "mia",
          "t": "Yes, but the train is expensive."
        },
        {
          "quem": "leo",
          "t": "And the bus?"
        },
        {
          "quem": "mia",
          "t": "The bus is cheap, but it is slow."
        },
        {
          "quem": "leo",
          "t": "What about a bike?"
        },
        {
          "quem": "mia",
          "t": "A bike is cheap and healthy, but it is very slow."
        },
        {
          "quem": "leo",
          "t": "So the train is fast, the bus is cheap, and the bike is healthy."
        },
        {
          "quem": "mia",
          "t": "Yes. I want a cheap and fast train. But there is no cheap and fast train."
        },
        {
          "quem": "leo",
          "t": "Then I choose the bus. I have only one hundred pounds."
        },
        {
          "quem": "mia",
          "t": "OK. A slow bus is fine."
        }
      ],
      "perguntas": [
        {
          "q": "What is good and bad about the train?",
          "op": [
            "It is fast, but expensive",
            "It is cheap, but slow",
            "It is slow and cold"
          ],
          "a": 0,
          "por": "Yes, but the train is expensive."
        },
        {
          "q": "What is the bus like?",
          "op": [
            "Cheap, but slow",
            "Fast, but expensive",
            "Cheap and fast"
          ],
          "a": 0,
          "por": "The bus is cheap, but it is slow."
        },
        {
          "q": "What does Leo choose?",
          "op": [
            "The bus",
            "The train",
            "The bike"
          ],
          "a": 0,
          "por": "Then I choose the bus. I have only one hundred pounds."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about ways to go. Hear it, then say it.",
      "frases": [
        {
          "t": "The train is fast, but it is expensive.",
          "img": "https://wolf-labs.pages.dev/p/f59c197ae893/expensive-but-fast/img/live-estacao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The bus is cheap, but it is slow.",
          "img": "https://wolf-labs.pages.dev/p/f59c197ae893/expensive-but-fast/img/live-trem.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I want a cheap and fast train.",
          "img": "https://wolf-labs.pages.dev/p/f59c197ae893/expensive-but-fast/img/live-capa.jpg",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "but, and, and the adjective first. Four quick ones.",
      "regra": "<b>good + bad = but</b> · <b>good + good = and</b> · adjective <b>before</b> the noun: a cheap train.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The bus is cheap, but it is slow.",
          "aceita": [],
          "d": "Dica: coisa boa + <b>but</b> + coisa ruim. Lados diferentes pedem <b>but</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The bus is cheap and it is slow.",
          "r": "The bus is cheap, but it is slow.",
          "aceita": [],
          "d": "Dica: barato é bom e lento é ruim: lados diferentes pedem <b>but</b>, não 'and'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "I want a train cheap.",
          "r": "I want a cheap train.",
          "aceita": [],
          "d": "Dica: o adjetivo vem <b>antes</b> do nome: <i>a cheap train</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "The bike is cheap, but it is healthy.",
          "r": "The bike is cheap and healthy.",
          "aceita": [
            "The bike is cheap, and it is healthy."
          ],
          "d": "Dica: barato e saudável são duas coisas boas: o mesmo lado pede <b>and</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f59c197ae893/expensive-but-fast/img/live-trem.webp",
      "leg": "An empty train",
      "pede": "Look at the picture: a train with empty seats. Write 2 or 3 sentences about how you go to work or school. Use <b>cheap</b>, <b>expensive</b>, <b>fast</b> or <b>slow</b>, and <b>but</b> or <b>and</b>.",
      "ph": "I go by bus. It is cheap, but …",
      "ex": "I go by bus. It is cheap, but it is slow. I want a fast bus."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How do you go to work or school? Is it fast or slow?",
          "ph": "I go by … It is …",
          "ex": "I go by bus. It is cheap, but it is slow."
        },
        {
          "q": "What is an expensive thing you want?",
          "ph": "I want a … It is expensive, but …",
          "ex": "I want a new phone. It is expensive, but it is fast."
        }
      ]
    }
  }
};
