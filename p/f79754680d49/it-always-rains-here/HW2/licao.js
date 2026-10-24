/* IT ALWAYS RAINS HERE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present simple (todo dia) x present continuous (agora). Jogo: falas originais, um mercado sob a chuva. A2: dicas em portugues so nas notas (d). Imagens live-* escuras. */
window.HW2 = {
  "id": "it-always-rains-here",
  "titulo": "It Always Rains Here",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f79754680d49/it-always-rains-here/img/live-chuva.webp",
  "alvo": "present simple (what happens every day: he makes, he listens; he / she / it + -s) x present continuous (right now: am / is / are + -ing); never she cooking, I am wanting",
  "abrir": "What are you doing right now? And what do you do every day?",
  "fecho": "<b>Every day</b> = present simple: <i>He makes soup.</i> (he, she, it + <b>-s</b>). <b>Right now</b> = <b>am / is / are + -ing</b>: <i>He is making soup.</i> Verbs like <b>want</b> and <b>like</b> do not take -ing.",
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
      "sub": "Mia calls Leo, who walks through a rainy night market. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f79754680d49/it-always-rains-here/img/live-chuva.webp",
      "leg": "A rainy night market",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, where are you? What are you doing?"
        },
        {
          "quem": "leo",
          "t": "I'm at the night market. It's raining again. It always rains here."
        },
        {
          "quem": "mia",
          "t": "What is the cook doing?"
        },
        {
          "quem": "leo",
          "t": "He's making soup right now. He makes soup every night."
        },
        {
          "quem": "mia",
          "t": "And the old man with the radio?"
        },
        {
          "quem": "leo",
          "t": "He's listening to the news. He listens to the radio every evening."
        },
        {
          "quem": "mia",
          "t": "And you? What are you doing now?"
        },
        {
          "quem": "leo",
          "t": "I'm holding an umbrella, and I'm eating an orange. I like oranges, but I don't eat them every day."
        },
        {
          "quem": "mia",
          "t": "Good. Stay dry!"
        }
      ],
      "perguntas": [
        {
          "q": "What is the cook doing right now?",
          "op": [
            "He is making soup",
            "He is selling fruit",
            "He is fixing a bike"
          ],
          "a": 0,
          "por": "He's making soup right now."
        },
        {
          "q": "What does the old man do every evening?",
          "op": [
            "He listens to the radio",
            "He sells umbrellas",
            "He cooks soup"
          ],
          "a": 0,
          "por": "He listens to the radio every evening."
        },
        {
          "q": "What is Leo eating?",
          "op": [
            "An orange",
            "Soup",
            "Nothing"
          ],
          "a": 0,
          "por": "I'm eating an orange."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a rainy market. Hear it, then say it.",
      "frases": [
        {
          "t": "The cook is making soup right now.",
          "img": "https://wolf-labs.pages.dev/p/f79754680d49/it-always-rains-here/img/live-p1-sopa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He listens to the radio every evening.",
          "img": "https://wolf-labs.pages.dev/p/f79754680d49/it-always-rains-here/img/live-p2-radio.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I don't eat oranges every day.",
          "img": "https://wolf-labs.pages.dev/p/f79754680d49/it-always-rains-here/img/live-p3-frutas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Every day or right now? Four quick ones.",
      "regra": "<b>every day</b> = present simple (he <b>makes</b>) · <b>right now</b> = <b>is / are + -ing</b> · no -ing with <b>want</b>, <b>like</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The old man listens to the radio every evening.",
          "aceita": [],
          "d": "Dica: todo dia = presente simples; com <b>he / she</b>, o verbo leva <b>-s</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He make soup every night.",
          "r": "He makes soup every night.",
          "aceita": [],
          "d": "Dica: com <b>he / she / it</b>, o verbo leva <b>-s</b>: <b>makes</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She cooking dinner right now.",
          "r": "She is cooking dinner right now.",
          "aceita": [],
          "d": "Dica: agora = <b>is</b> + -ing. Sem o <b>is</b>, a frase fica incompleta."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I am wanting a coffee right now.",
          "r": "I want a coffee right now.",
          "aceita": [
            "I want coffee right now."
          ],
          "d": "Dica: <b>want</b> é verbo de estado: sem -ing, mesmo com <b>right now</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f79754680d49/it-always-rains-here/img/live-p4-guardachuvas.webp",
      "leg": "Umbrellas at a rainy market",
      "pede": "Look at the picture: umbrellas at a rainy market. Write 2 or 3 sentences: one about what usually happens in a place you know, and one about what is happening right now.",
      "ph": "In my street, people usually … Right now, I am …",
      "ex": "In my street, people usually walk to work. Right now, I am sitting at my desk, and it is raining."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you usually do after dinner?",
          "ph": "After dinner, I usually …",
          "ex": "After dinner, I usually wash the dishes and watch TV."
        },
        {
          "q": "What is happening around you right now?",
          "ph": "Right now, … is …",
          "ex": "Right now, my dog is sleeping and my brother is playing a game."
        }
      ]
    }
  }
};
