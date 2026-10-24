/* SIXTY SECONDS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: and / but / so / because / after that. A2: dicas em portugues so nas notas (d). So imagens live-* escuras */
window.HW2 = {
  "id": "sixty-seconds",
  "titulo": "Sixty Seconds",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/3073205bbde5/sixty-seconds/img/live-elevador.webp",
  "alvo": "connectors in a short answer: and (one more thing), but (the surprise), so (the result), because (the reason), after that (the next step); so x because: cause, SO, result / result, BECAUSE, cause; never loose short sentences",
  "abrir": "How would you answer: tell me about yourself?",
  "fecho": "<b>and</b> = one more thing · <b>but</b> = the surprise · <b>so</b> = the result · <b>because</b> = the reason · <b>after that</b> = the next step. <i>I liked numbers, so I studied economics.</i> <i>I moved because my company opened an office here.</i>",
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
      "sub": "Mia gets ready for a job interview. Leo helps her. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/3073205bbde5/sixty-seconds/img/live-janela.webp",
      "leg": "A city window at dusk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the interview is tomorrow. Tell me about yourself in one minute."
        },
        {
          "quem": "mia",
          "t": "OK. I work in a shop. I like it. I have a cat."
        },
        {
          "quem": "leo",
          "t": "Hmm. Those are loose sentences. Use some glue. Try again."
        },
        {
          "quem": "mia",
          "t": "I work in a shop and I study design at night."
        },
        {
          "quem": "leo",
          "t": "Better! Why do you study design?"
        },
        {
          "quem": "mia",
          "t": "I like drawing, so I decided to learn it. I started because a friend showed me a course."
        },
        {
          "quem": "leo",
          "t": "Good. Now the next step. What happened after that?"
        },
        {
          "quem": "mia",
          "t": "After that, I got a small job. It is not my dream job, but I learn a lot."
        },
        {
          "quem": "leo",
          "t": "And what do you want next?"
        },
        {
          "quem": "mia",
          "t": "I want to work in a studio, so I am making a portfolio."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia study design?",
          "op": [
            "She likes drawing",
            "Her boss asked her",
            "She hates the shop"
          ],
          "a": 0,
          "por": "I like drawing, so I decided to learn it."
        },
        {
          "q": "Why did she start the course?",
          "op": [
            "A friend showed it to her",
            "It was free",
            "Leo told her"
          ],
          "a": 0,
          "por": "I started because a friend showed me a course."
        },
        {
          "q": "What is Mia doing for her next step?",
          "op": [
            "She is making a portfolio",
            "She is buying a computer",
            "She is quitting her job"
          ],
          "a": 0,
          "por": "I want to work in a studio, so I am making a portfolio."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with glue words. Hear it, then say it.",
      "frases": [
        {
          "t": "I work in an office and I study English at night.",
          "img": "https://wolf-labs.pages.dev/p/3073205bbde5/sixty-seconds/img/live-janela.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I liked numbers, so I studied economics.",
          "img": "https://wolf-labs.pages.dev/p/3073205bbde5/sixty-seconds/img/live-elevador.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I moved here because my company opened an office.",
          "img": "https://wolf-labs.pages.dev/p/3073205bbde5/sixty-seconds/img/live-janela.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "and, but, so or because? Four quick ones.",
      "regra": "<b>and</b> = one more thing · <b>but</b> = the surprise · <b>so</b> = result · <b>because</b> = reason · <b>after that</b> = next step.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I finished school and after that I moved to the city.",
          "aceita": [],
          "d": "Dica: dois passos no tempo: <b>and after that</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use the right glue word.",
          "mostra": "I like the team, because I stayed six years.",
          "r": "I like the team, so I stayed six years.",
          "aceita": [
            "I liked the team, so I stayed six years."
          ],
          "d": "Dica: o time causou a decisão: causa, <b>so</b>, resultado."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "I went to bed early so I was tired.",
          "r": "I went to bed early because I was tired.",
          "aceita": [
            "I went to bed early, because I was tired."
          ],
          "d": "Dica: o cansaço é o motivo: resultado, <b>because</b>, causa."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the surprise needs a word.",
          "mostra": "I studied law, so I never worked as a lawyer.",
          "r": "I studied law, but I never worked as a lawyer.",
          "aceita": [],
          "d": "Dica: a segunda parte surpreende: <b>but</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/3073205bbde5/sixty-seconds/img/live-elevador.webp",
      "leg": "An elevator going up",
      "pede": "Look at the picture: an elevator going up, one floor at a time. Write 2 or 3 sentences about you. Use <b>and</b>, <b>but</b>, <b>so</b> or <b>because</b>.",
      "ph": "I work in … and …",
      "ex": "I work in a bank and I study English at night. I like my job, but it is very busy. I started because I like numbers."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about yourself in two sentences with and or but.",
          "ph": "I am … and I …",
          "ex": "I am a shop assistant, but I want to teach. I live in a small city and I study at night."
        },
        {
          "q": "Why did you start your job? Use so or because.",
          "ph": "I started because …",
          "ex": "I started because I needed money, so I took the first job."
        }
      ]
    }
  }
};
