/* A1 REVIEW: THE LOST AND FOUND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unidade 2 (a/an, adjetivo, this/these, plurais). A1: dicas em português só nas notas (d). Alvo inclui a/an: HW2_ARTIGO_CONTA. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "a1-review-the-lost-and-found",
  "titulo": "A1 Review: The Lost and Found",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e92bc279366b/a1-review-the-lost-and-found/img/live-capa.webp",
  "alvo": "Unit 2 review: a / an by the sound; the adjective before the thing (a small black bag); this / that / these / those; plurals (keys, boxes, children, people); and / but",
  "abrir": "What is in your bag right now?",
  "fecho": "<b>A / an</b> by the sound: <i>an umbrella</i>. The adjective comes first: <i>a small black bag</i>. <b>This / that</b> = one, <b>these / those</b> = many: <i>These keys are small.</i>",
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
      "sub": "Mia and Leo at the lost and found desk. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e92bc279366b/a1-review-the-lost-and-found/img/live-conversa.webp",
      "leg": "The waiting room at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, a woman is at the desk. She lost her things."
        },
        {
          "quem": "mia",
          "t": "What did she lose? An umbrella?"
        },
        {
          "quem": "leo",
          "t": "Yes, an old black umbrella. And two keys."
        },
        {
          "quem": "mia",
          "t": "Are these the keys? They are small and silver."
        },
        {
          "quem": "leo",
          "t": "Yes, those are her keys. She is very happy."
        },
        {
          "quem": "mia",
          "t": "Now two children are at the desk. They lost a red hat."
        },
        {
          "quem": "leo",
          "t": "A red hat? Is this it? It is big and old, but it is warm."
        },
        {
          "quem": "mia",
          "t": "Yes! That is their hat. Here you are!"
        }
      ],
      "perguntas": [
        {
          "q": "What did the woman lose?",
          "op": [
            "An old black umbrella and two keys",
            "A new red hat",
            "A big blue suitcase"
          ],
          "a": 0,
          "por": "Yes, an old black umbrella. And two keys."
        },
        {
          "q": "What are the keys like?",
          "op": [
            "Small and silver",
            "Big and gold",
            "New and red"
          ],
          "a": 0,
          "por": "They are small and silver."
        },
        {
          "q": "Who lost the red hat?",
          "op": [
            "Two children",
            "The woman",
            "Leo"
          ],
          "a": 0,
          "por": "Now two children are at the desk. They lost a red hat."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the desk. Hear it, then say it.",
      "frases": [
        {
          "t": "This is an old black umbrella.",
          "img": "https://wolf-labs.pages.dev/p/e92bc279366b/a1-review-the-lost-and-found/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "These are my two small keys.",
          "img": "https://wolf-labs.pages.dev/p/e92bc279366b/a1-review-the-lost-and-found/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Two people are in the waiting room.",
          "img": "https://wolf-labs.pages.dev/p/e92bc279366b/a1-review-the-lost-and-found/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "a / an, plurals and these. Four quick ones.",
      "regra": "<b>a / an</b> by the sound · adjective first · <b>these</b> = many · <b>children, people</b>: no extra -s.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "These are two small silver keys.",
          "aceita": [],
          "d": "Dica: vários = <b>these are</b>; tamanho (small) antes da cor (silver)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I lost a umbrella.",
          "r": "I lost an umbrella.",
          "aceita": [],
          "d": "Dica: <b>umbrella</b> começa com som de vogal, então <b>an</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Two childrens are here.",
          "r": "Two children are here.",
          "aceita": [],
          "d": "Dica: <b>children</b> já é plural. Sem -s no final."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "This keys are small.",
          "r": "These keys are small.",
          "aceita": [
            "Those keys are small."
          ],
          "d": "Dica: vários = <b>these</b> (perto) ou <b>those</b> (longe)."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e92bc279366b/a1-review-the-lost-and-found/img/live-conversa.webp",
      "leg": "An empty waiting room at night",
      "pede": "Look at the picture: an empty waiting room at night. Write 2 or 3 sentences about what you see. Use <b>a / an</b>, a size or a color, and <b>and / but</b>.",
      "ph": "I see a big … and …",
      "ex": "I see a big clock and two long brown benches. The room is empty, but it is quiet."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is in your bag right now?",
          "ph": "In my bag there is a … and an …",
          "ex": "In my bag there is a black pen and an apple."
        },
        {
          "q": "Describe your favorite thing. Size, color, new or old?",
          "ph": "My favorite thing is a … It is …",
          "ex": "My favorite thing is a big blue sofa. It is old, but it is very soft."
        }
      ]
    }
  }
};
