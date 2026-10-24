/* THE GHOST OF YOU · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: was / were and there was / there were. Linha de música: NENHUM verso aqui; o listening é diálogo original. A2: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-ghost-of-you",
  "titulo": "The Ghost of You",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e0e5ebb0f719/the-ghost-of-you/img/live-salao.webp",
  "alvo": "was / were and there was / there were: was = I, he, she, it; were = you, we, they; there was + one thing, there were + many things; Were you ...? Was she ...?; never did you were, never they was",
  "abrir": "Who was your best friend at school?",
  "fecho": "<b>was / were</b> = past of am / is / are: <i>I was, he was, they were.</i> <b>There was</b> + one thing, <b>there were</b> + many: <i>There was a tree. There were two benches.</i> Question: <i>Were you there?</i> Never <i>did you were</i>.",
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
      "sub": "Mia and Leo look at an old school photo. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/e0e5ebb0f719/the-ghost-of-you/img/live-cartas.webp",
      "leg": "Old letters tied with string",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this old photo. It was my class in 2015."
        },
        {
          "quem": "mia",
          "t": "Nice! Who was this boy next to you?"
        },
        {
          "quem": "leo",
          "t": "That was Davi. He was my best friend. He was in my class for five years."
        },
        {
          "quem": "mia",
          "t": "Where is he now?"
        },
        {
          "quem": "leo",
          "t": "He lives in another city. His family moved away. We were sad, but we talk on the phone."
        },
        {
          "quem": "mia",
          "t": "Were there many students in your class?"
        },
        {
          "quem": "leo",
          "t": "Yes, there were thirty students. There was a big tree in the yard, and there were two old benches."
        },
        {
          "quem": "mia",
          "t": "Was your teacher kind?"
        },
        {
          "quem": "leo",
          "t": "Yes, she was. We weren't late, because she was always there at seven."
        },
        {
          "quem": "mia",
          "t": "Call Davi today. He was your friend, and he is still your friend."
        }
      ],
      "perguntas": [
        {
          "q": "Where is Davi now?",
          "op": [
            "He lives in another city",
            "He is in Leo's class",
            "He is in the photo today"
          ],
          "a": 0,
          "por": "He lives in another city."
        },
        {
          "q": "How many students were there in the class?",
          "op": [
            "Thirty",
            "Three",
            "Fifteen"
          ],
          "a": 0,
          "por": "There were thirty students."
        },
        {
          "q": "Who was always there at seven?",
          "op": [
            "The teacher",
            "Davi",
            "Mia"
          ],
          "a": 0,
          "por": "She was always there at seven."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the past. Hear it, then say it.",
      "frases": [
        {
          "t": "There were many chairs in the old hall.",
          "img": "https://wolf-labs.pages.dev/p/e0e5ebb0f719/the-ghost-of-you/img/live-salao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The station was quiet last night.",
          "img": "https://wolf-labs.pages.dev/p/e0e5ebb0f719/the-ghost-of-you/img/live-estacao.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "There was a letter from my old friend.",
          "img": "https://wolf-labs.pages.dev/p/e0e5ebb0f719/the-ghost-of-you/img/live-cartas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "was, were, there was, there were. Four quick ones.",
      "regra": "<b>was</b> = I, he, she, it · <b>were</b> = you, we, they · <b>there was</b> + one · <b>there were</b> + many · question: <b>Were you ...?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There were two old benches in the yard.",
          "aceita": [],
          "d": "Dica: <b>benches</b> são duas, então <b>there were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "There was three students in the room.",
          "r": "There were three students in the room.",
          "aceita": [],
          "d": "Dica: três alunos = muitos, então <b>there were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "They was in my class.",
          "r": "They were in my class.",
          "aceita": [],
          "d": "Dica: com <b>they</b>, o passado de to be é <b>were</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make the question correct.",
          "mostra": "Did you were at home yesterday?",
          "r": "Were you at home yesterday?",
          "aceita": [],
          "d": "Dica: pergunta com to be não usa <b>did</b>: <b>Were you ...?</b>"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e0e5ebb0f719/the-ghost-of-you/img/live-cartas.webp",
      "leg": "Old letters tied with string",
      "pede": "Look at the picture: a bundle of old letters. Write 2 or 3 sentences about an old friend or a place from your past. Use <b>was</b>, <b>were</b>, <b>there was</b> or <b>there were</b>.",
      "ph": "My old friend was … There were …",
      "ex": "My old friend Rui was very funny. There were two of us in the same class. There was a big garden near his house."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Where were you last night? Was it a good night?",
          "ph": "I was … It was …",
          "ex": "I was at home. Yes, it was quiet and nice."
        },
        {
          "q": "Think of your school. Was there a library? What were your teachers like?",
          "ph": "There was … My teachers were …",
          "ex": "Yes, there was a small library. My teachers were kind."
        }
      ]
    }
  }
};
