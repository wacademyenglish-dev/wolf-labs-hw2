/* WHO AM I? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Curso Au Pair (A2+). Alvo: apresentar-se (I am 22, can + verbo, -s, love + -ing). A2: dicas em português só nas notas (d). Pessoa fictícia, nenhum dado real. */
window.HW2 = {
  "id": "aupair-who-am-i",
  "titulo": "Who Am I?",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/91a0ef4534d4/aupair-who-am-i/img/live-capa.webp",
  "alvo": "introducing yourself to a host family: I am 22 (years old), never I have 22 years; can + plain verb, no to; he / she / it + -s; love + -ing",
  "abrir": "How do you say who you are in three short lines?",
  "fecho": "Age: <b>I am</b> 22 years old. After <b>can</b>, the plain verb: <i>I can drive.</i> He, she, it: <b>-s</b>: <i>She loves kids.</i> <b>Love</b> + <b>-ing</b>: <i>I love playing.</i>",
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
      "sub": "Mia and Leo, a short scene of about 40 seconds.",
      "leg": "A family living room, toys on the floor",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi Mia! Thanks for the video call. Tell us a little about you."
        },
        {
          "quem": "mia",
          "t": "Hi! I am twenty-two years old, and I am from Brazil."
        },
        {
          "quem": "leo",
          "t": "Who do you live with?"
        },
        {
          "quem": "mia",
          "t": "I live with my parents. My sister lives in another city, and she loves kids too."
        },
        {
          "quem": "leo",
          "t": "What do you love doing?"
        },
        {
          "quem": "mia",
          "t": "I love playing with kids, and I love cooking."
        },
        {
          "quem": "leo",
          "t": "Can you drive?"
        },
        {
          "quem": "mia",
          "t": "Yes, I can drive. I can swim too, but not very well."
        },
        {
          "quem": "leo",
          "t": "That's fine! Our kids love the pool."
        }
      ],
      "perguntas": [
        {
          "q": "How old is Mia?",
          "op": [
            "Twenty-two",
            "Twenty",
            "Twenty-five"
          ],
          "a": 0,
          "por": "I am twenty-two years old."
        },
        {
          "q": "What does Mia love doing?",
          "op": [
            "Playing with kids and cooking",
            "Driving and swimming",
            "Reading and dancing"
          ],
          "a": 0,
          "por": "I love playing with kids, and I love cooking."
        },
        {
          "q": "Can Mia swim well?",
          "op": [
            "Not very well",
            "Yes, very well",
            "No, she can't swim"
          ],
          "a": 0,
          "por": "I can swim too, but not very well."
        }
      ],
      "img": "https://wolf-labs.pages.dev/p/91a0ef4534d4/aupair-who-am-i/img/live-conversa.webp"
    },
    "out": {
      "sub": "Three lines to say to a family. Hear it, then say it.",
      "frases": [
        {
          "t": "Hi! I am Ana, and I am twenty-two years old.",
          "img": "https://wolf-labs.pages.dev/p/91a0ef4534d4/aupair-who-am-i/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I love playing with kids, and I can cook.",
          "img": "https://wolf-labs.pages.dev/p/91a0ef4534d4/aupair-who-am-i/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I live with my parents and my little brother.",
          "img": "https://wolf-labs.pages.dev/p/91a0ef4534d4/aupair-who-am-i/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Age, can, -s, love + -ing. Four quick ones.",
      "regra": "<b>I am</b> 22 · <b>can</b> + plain verb · he / she + <b>-s</b> · <b>love</b> + <b>-ing</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I love playing with the kids on weekends.",
          "aceita": [],
          "d": "Dica: <b>love</b> + verbo com <b>-ing</b>: love playing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: how do you say your age?",
          "mostra": "I have twenty-two years.",
          "r": "I am twenty-two years old.",
          "aceita": [
            "I am twenty-two.",
            "I'm twenty-two years old.",
            "I'm twenty-two."
          ],
          "d": "Dica: em inglês a gente <b>é</b> (am), não tem anos."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I can to drive a car.",
          "r": "I can drive a car.",
          "aceita": [],
          "d": "Dica: depois de <b>can</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My sister love kids.",
          "r": "My sister loves kids.",
          "aceita": [],
          "d": "Dica: com <b>she</b>, o verbo ganha <b>-s</b>: loves."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: a living room, like your host family's. Write 2 or 3 sentences to introduce yourself: your age, what you love doing and what you can do.",
      "ph": "I am … years old. I love …ing.",
      "ex": "I am twenty-two years old. I love cooking with kids, and I can drive.",
      "img": "https://wolf-labs.pages.dev/p/91a0ef4534d4/aupair-who-am-i/img/live-conversa.webp",
      "leg": "A family living room"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who do you live with? What do you love doing?",
          "ph": "I live with … I love …ing.",
          "ex": "I live with my parents. I love reading stories to my little brother."
        },
        {
          "q": "What can you do that a host family will like?",
          "ph": "I can …",
          "ex": "I can cook, drive and play the guitar."
        }
      ]
    }
  }
};
