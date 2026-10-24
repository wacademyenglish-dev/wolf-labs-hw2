/* MORNING ROUTINE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: imperativos gentis, Let's, Don't e ordem (first, then, after that). Curso Au Pair. A2: dicas em português só nas notas (d). Só live-*, já escuras. */
window.HW2 = {
  "id": "morning-routine",
  "titulo": "Morning Routine",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ff2a495ea32b/aupair-morning-routine/img/live-capa.webp",
  "alvo": "kind imperatives and Let's with please (Shoes on, please. Let's eat.), Don't + verb, and order words first, then, after that; never no run, never Let's to go",
  "abrir": "What do you do first every morning?",
  "fecho": "<b>Please</b> makes it kind: <i>Shoes on, please.</i> <b>Let's</b> + verb: <i>Let's eat together.</i> No: <b>Don't</b> + verb: <i>Don't run inside.</i> Order: <b>first, then, after that</b>.",
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
      "sub": "Mia and Leo before school. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ff2a495ea32b/aupair-morning-routine/img/live-capa.webp",
      "leg": "A backpack and fruit in the kitchen",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Good morning, Emma! Let's eat breakfast together."
        },
        {
          "quem": "leo",
          "t": "Thanks, Mia. I'm leaving for work now. What's the plan for the morning?"
        },
        {
          "quem": "mia",
          "t": "First we eat. Then we brush our teeth. After that, shoes on, please."
        },
        {
          "quem": "leo",
          "t": "And the bus?"
        },
        {
          "quem": "mia",
          "t": "The bus comes at eight ten. We walk to the bus stop at eight."
        },
        {
          "quem": "leo",
          "t": "Do the kids have their backpacks?"
        },
        {
          "quem": "mia",
          "t": "Not yet. Emma, backpack on, please! And don't run inside, please."
        },
        {
          "quem": "leo",
          "t": "Good. Short and kind."
        },
        {
          "quem": "mia",
          "t": "Yes. One thing at a time."
        },
        {
          "quem": "leo",
          "t": "Have a nice day!"
        }
      ],
      "perguntas": [
        {
          "q": "What do they do first?",
          "op": [
            "They eat breakfast",
            "They brush their teeth",
            "They walk to the bus"
          ],
          "a": 0,
          "por": "First we eat."
        },
        {
          "q": "What time does the bus come?",
          "op": [
            "At eight ten",
            "At eight",
            "At seven"
          ],
          "a": 0,
          "por": "The bus comes at eight ten."
        },
        {
          "q": "What must the kids not do inside?",
          "op": [
            "Run",
            "Eat",
            "Sing"
          ],
          "a": 0,
          "por": "Don't run inside, please."
        }
      ]
    },
    "out": {
      "sub": "Three kind sentences for the kids. Hear it, then say it.",
      "frases": [
        {
          "t": "Let's eat breakfast together.",
          "img": "https://wolf-labs.pages.dev/p/ff2a495ea32b/aupair-morning-routine/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "First we eat, then we brush our teeth.",
          "img": "https://wolf-labs.pages.dev/p/ff2a495ea32b/aupair-morning-routine/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Don't run inside, please.",
          "img": "https://wolf-labs.pages.dev/p/ff2a495ea32b/aupair-morning-routine/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Please, Let's or Don't? Four quick ones.",
      "regra": "<b>please</b> = kind · <b>Let's</b> + verb · <b>Don't</b> + verb = no · <b>first, then, after that</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Put your shoes on, please.",
          "aceita": [],
          "d": "Dica: o pedido gentil termina com <b>please</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "No run inside, please.",
          "r": "Don't run inside, please.",
          "aceita": [
            "Do not run inside, please."
          ],
          "d": "Dica: para dizer não, use <b>Don't</b> + verbo. Nunca 'no run'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Let's to brush our teeth.",
          "r": "Let's brush our teeth.",
          "aceita": [],
          "d": "Dica: depois de <b>Let's</b>, o verbo fica limpo, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "First we eat, after we go.",
          "r": "First we eat, then we go.",
          "aceita": [
            "First we eat, after that we go.",
            "First we eat, and then we go."
          ],
          "d": "Dica: para a ordem, use <b>then</b> ou <b>after that</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ff2a495ea32b/aupair-morning-routine/img/live-capa.webp",
      "leg": "A backpack and fruit in a kitchen",
      "pede": "Look at the picture: a backpack and fruit in a warm kitchen. Write 2 or 3 sentences to a child before school. Use <b>Let's</b>, <b>please</b> or <b>Don't</b>.",
      "ph": "Let's … Backpack on, please.",
      "ex": "Let's eat an orange. Backpack on, please. Don't run to the door."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you do first every morning? What do you do after that?",
          "ph": "First I … Then I …",
          "ex": "First I drink coffee. Then I brush my teeth."
        },
        {
          "q": "What do you say to a child who runs inside?",
          "ph": "Don't … , please.",
          "ex": "Walking feet, please. Don't run inside."
        }
      ]
    }
  }
};
