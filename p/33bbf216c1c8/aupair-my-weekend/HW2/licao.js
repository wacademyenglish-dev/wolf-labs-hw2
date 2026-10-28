/* MY WEEKEND · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: past simple (fim de semana) + going to. A2+: dicas em português só nas notas (d). Imagens live-* do curso. */
window.HW2 = {
  "id": "aupair-my-weekend",
  "titulo": "My Weekend",
  "nivel": "A2",
  "minutos": 10,
  "capa": "../img/live-capa.webp",
  "alvo": "telling the weekend in the past simple (went, ate, took, visited, walked) · next weekend with going to / will; never I go ... last Saturday, never eated / goed, never going to + past",
  "abrir": "What did you do last weekend?",
  "fecho": "<b>Last weekend</b> = past: <i>I went, we ate, I took</i> (some verbs change: go-went, eat-ate) and <i>-ed</i> for the others (visited, walked). <b>Next weekend</b> = <i>I'm going to</i> + plain verb: <i>I'm going to rest.</i>",
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
      "sub": "Mia tells Leo about her weekend. A new scene, about 40 seconds.",
      "img": "../img/live-capa.webp",
      "leg": "A city skyline at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi Mia! How was your weekend?"
        },
        {
          "quem": "mia",
          "t": "It was great! I went to Chicago with two au pair friends."
        },
        {
          "quem": "leo",
          "t": "Nice! How did you go?"
        },
        {
          "quem": "mia",
          "t": "We took the train on Saturday morning. We visited a museum and ate pizza."
        },
        {
          "quem": "leo",
          "t": "Did you stay the night?"
        },
        {
          "quem": "mia",
          "t": "Yes, we stayed in a small hotel. On Sunday, we walked by the lake."
        },
        {
          "quem": "leo",
          "t": "Did you take photos?"
        },
        {
          "quem": "mia",
          "t": "Of course! Next weekend I'm going to stay home and rest. And you?"
        },
        {
          "quem": "leo",
          "t": "I'm going to visit my cousin. We will probably watch a movie."
        }
      ],
      "perguntas": [
        {
          "q": "How did Mia and her friends go to Chicago?",
          "op": [
            "By train",
            "By car",
            "By plane"
          ],
          "a": 0,
          "por": "We took the train on Saturday morning."
        },
        {
          "q": "What did they do on Sunday?",
          "op": [
            "They walked by the lake",
            "They ate pizza",
            "They visited a museum"
          ],
          "a": 0,
          "por": "On Sunday, we walked by the lake."
        },
        {
          "q": "What is Mia going to do next weekend?",
          "op": [
            "Stay home and rest",
            "Visit her cousin",
            "Go to Chicago"
          ],
          "a": 0,
          "por": "Next weekend I'm going to stay home and rest."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about a weekend. Hear it, then say it.",
      "frases": [
        {
          "t": "On Saturday, I took the train downtown.",
          "img": "../img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "We visited a museum and ate pizza.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Next weekend, I'm going to rest.",
          "img": "../img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past or next weekend? Four quick ones.",
      "regra": "<b>last weekend</b> = past (went, ate, took, visited) · <b>next weekend</b> = <b>going to</b> + plain verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "On Sunday we walked by the lake.",
          "aceita": [],
          "d": "Dica: passado: <b>walked</b> (verbo + -ed)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Last Saturday I go to the city.",
          "r": "Last Saturday I went to the city.",
          "aceita": [],
          "d": "Dica: <b>Last Saturday</b> é passado: <b>went</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We eated pizza on Saturday.",
          "r": "We ate pizza on Saturday.",
          "aceita": [],
          "d": "Dica: o passado de <b>eat</b> é <b>ate</b>, não 'eated'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm going to visited my cousin next weekend.",
          "r": "I'm going to visit my cousin next weekend.",
          "aceita": [
            "I am going to visit my cousin next weekend."
          ],
          "d": "Dica: depois de <b>going to</b>, o verbo fica limpo: visit."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "A diner at night, two milkshakes",
      "pede": "Look at the picture: a diner at night with two milkshakes. Write 2 or 3 sentences: what you did last weekend (past) and what you are going to do next weekend.",
      "ph": "Last weekend I … Next weekend I'm going to …",
      "ex": "Last weekend I visited my cousin and we ate pizza. Next weekend I'm going to rest."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do last weekend?",
          "ph": "Last weekend I …",
          "ex": "Last weekend I went to the beach with my friends. We ate ice cream."
        },
        {
          "q": "What are you going to do next weekend?",
          "ph": "Next weekend I'm going to …",
          "ex": "Next weekend I'm going to visit my parents. Maybe we will go to the cinema."
        }
      ]
    }
  }
};
