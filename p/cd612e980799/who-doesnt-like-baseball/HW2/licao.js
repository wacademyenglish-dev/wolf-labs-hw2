/* WHO DOESN'T LIKE BASEBALL? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: like / love / hate + -ing. A1: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "who-doesnt-like-baseball",
  "titulo": "Who Doesn't Like Baseball?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/cd612e980799/who-doesnt-like-baseball/img/live-capa.webp",
  "alvo": "like / love / hate + verb-ing; he / she likes, loves, hates (-s); doesn't like + -ing; Do you like ...ing? Does he like ...ing?; never likes to writing, doesn't likes",
  "abrir": "What do you love doing on the weekend?",
  "fecho": "<b>like / love / hate</b> + verb-<b>ing</b>: <i>I love playing baseball.</i> With he / she: <b>-s</b>: <i>He likes reading.</i> No: <b>doesn't like</b>: <i>She doesn't like cooking.</i> Question: <i>Do you like reading? Does he like it?</i>",
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
      "sub": "Mia and Leo look at a family fridge. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/cd612e980799/who-doesnt-like-baseball/img/live-geladeira.webp",
      "leg": "A family fridge door",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the fridge. What does Jonathan like?"
        },
        {
          "quem": "mia",
          "t": "He loves playing baseball. He hates doing homework."
        },
        {
          "quem": "leo",
          "t": "And his brother? Does he like playing baseball?"
        },
        {
          "quem": "mia",
          "t": "No, he doesn't like playing sports. He likes reading books."
        },
        {
          "quem": "leo",
          "t": "Do you like reading?"
        },
        {
          "quem": "mia",
          "t": "Yes, I do. I love reading at night. But I hate waking up early."
        },
        {
          "quem": "leo",
          "t": "Does their mother like cooking?"
        },
        {
          "quem": "mia",
          "t": "She likes cooking, but she doesn't like washing the dishes."
        },
        {
          "quem": "leo",
          "t": "Me too! I hate washing dishes."
        },
        {
          "quem": "mia",
          "t": "Then let's order pizza."
        }
      ],
      "perguntas": [
        {
          "q": "What does Jonathan love?",
          "op": [
            "Playing baseball",
            "Doing homework",
            "Reading books"
          ],
          "a": 0,
          "por": "He loves playing baseball."
        },
        {
          "q": "Does his brother like playing sports?",
          "op": [
            "No, he doesn't",
            "Yes, he does",
            "Yes, he loves it"
          ],
          "a": 0,
          "por": "No, he doesn't like playing sports."
        },
        {
          "q": "What doesn't their mother like?",
          "op": [
            "Washing the dishes",
            "Cooking",
            "Reading"
          ],
          "a": 0,
          "por": "She doesn't like washing the dishes."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a family. Hear it, then say it.",
      "frases": [
        {
          "t": "He loves playing baseball.",
          "img": "https://wolf-labs.pages.dev/p/cd612e980799/who-doesnt-like-baseball/img/live-cena4-estadio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "She doesn't like washing the dishes.",
          "img": "https://wolf-labs.pages.dev/p/cd612e980799/who-doesnt-like-baseball/img/live-geladeira.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Do you like reading at night?",
          "img": "https://wolf-labs.pages.dev/p/cd612e980799/who-doesnt-like-baseball/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "like, love or hate + -ing. Four quick ones.",
      "regra": "<b>like / love / hate</b> + <b>-ing</b> · he / she + <b>-s</b> · <b>doesn't like</b> + -ing · <b>Do / Does</b> ... like ...ing?",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My brother hates waking up early.",
          "aceita": [],
          "d": "Dica: <b>hates</b> (com -s) + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He love playing baseball.",
          "r": "He loves playing baseball.",
          "aceita": [],
          "d": "Dica: com <b>he</b>, o verbo leva <b>-s</b>: loves."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I like play baseball.",
          "r": "I like playing baseball.",
          "aceita": [
            "I like to play baseball."
          ],
          "d": "Dica: depois de <b>like</b>, o verbo leva <b>-ing</b>: playing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She doesn't likes cooking.",
          "r": "She doesn't like cooking.",
          "aceita": [],
          "d": "Dica: depois de <b>doesn't</b>, o verbo fica sem -s: like."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/cd612e980799/who-doesnt-like-baseball/img/live-geladeira.webp",
      "leg": "A family fridge door",
      "pede": "Look at the picture: a fridge door with notes and photos. Write 2 or 3 sentences about a person in your family. Use <b>likes</b>, <b>loves</b> or <b>hates</b> + -ing.",
      "ph": "My brother likes … He hates …",
      "ex": "My brother loves playing video games. He doesn't like cleaning his room."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you love doing on the weekend?",
          "ph": "I love …ing.",
          "ex": "I love sleeping late and watching movies."
        },
        {
          "q": "What do you hate doing? Does someone in your family hate it too?",
          "ph": "I hate …ing. My … hates it too.",
          "ex": "I hate washing dishes. My sister hates it too."
        }
      ]
    }
  }
};
