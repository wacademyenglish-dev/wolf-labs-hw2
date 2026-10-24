/* NOW NOW · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: going to e o presente continuo para planos. A2: dicas em portugues so nas notas (d). Sem imagem (as da aula sao claras). */
window.HW2 = {
  "id": "now-now",
  "titulo": "Now Now",
  "nivel": "A2",
  "minutos": 10,
  "capa": "",
  "alvo": "plans: going to + verb (I'm going to visit...) and the present continuous for a fixed plan with a time (I'm meeting Leo at six); questions What are you doing tonight?; never I going to, never What you are doing",
  "abrir": "What are you going to do this weekend?",
  "fecho": "<b>I'm going to</b> + verb = a plan: <i>I'm going to visit the mountain.</i> <b>I'm meeting</b> + a time = a fixed plan: <i>I'm meeting Leo at six.</i> The question: <i>What are you doing tonight?</i> Never <i>I going to</i>: don't forget <b>am / is / are</b>.",
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
      "sub": "Mia and Leo in Cape Town. A new scene, about 45 seconds.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, welcome to Cape Town! What are you going to do today?"
        },
        {
          "quem": "mia",
          "t": "I'm going to visit Table Mountain. I'm leaving at two."
        },
        {
          "quem": "leo",
          "t": "Great. Are you going to take a taxi?"
        },
        {
          "quem": "mia",
          "t": "Yes. I'm going to call one now."
        },
        {
          "quem": "leo",
          "t": "Wait. There is a power cut tonight. At six, all the lights go off."
        },
        {
          "quem": "mia",
          "t": "Oh! So I'm not going to cook dinner tonight."
        },
        {
          "quem": "leo",
          "t": "No. I'm meeting my sister at six. Why don't you come with us?"
        },
        {
          "quem": "mia",
          "t": "Thanks! What are you going to eat?"
        },
        {
          "quem": "leo",
          "t": "We're going to eat in a small café with candles."
        },
        {
          "quem": "mia",
          "t": "Lovely. I'm going to bring a torch, just in case."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia going to visit?",
          "op": [
            "Table Mountain",
            "A small café",
            "Leo's sister"
          ],
          "a": 0,
          "por": "I'm going to visit Table Mountain."
        },
        {
          "q": "Why isn't Mia going to cook tonight?",
          "op": [
            "There is a power cut",
            "She is tired",
            "She is going to sleep"
          ],
          "a": 0,
          "por": "There is a power cut tonight."
        },
        {
          "q": "Who is Leo meeting at six?",
          "op": [
            "His sister",
            "A taxi driver",
            "Mia"
          ],
          "a": 0,
          "por": "I'm meeting my sister at six."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about plans. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm going to visit the mountain at two.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Tonight I'm meeting Leo at six.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "What are you going to do tomorrow?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "going to and fixed plans. Four quick ones.",
      "regra": "<b>I'm going to</b> + verb = a plan · <b>I'm meeting</b> + time = a fixed plan · <b>What are you doing tonight?</b> · never <i>I going to</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What are you going to do tonight?",
          "aceita": [],
          "d": "Dica: <b>are you going to</b> + verbo, no meio da pergunta."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I going to visit the mountain.",
          "r": "I'm going to visit the mountain.",
          "aceita": [
            "I am going to visit the mountain."
          ],
          "d": "Dica: não esqueça o <b>am</b>: <b>I'm going to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the question is wrong.",
          "mostra": "What you are doing tonight?",
          "r": "What are you doing tonight?",
          "aceita": [
            "What are you going to do tonight?"
          ],
          "d": "Dica: na pergunta, <b>are</b> vem antes de <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is a plan.",
          "mostra": "Tomorrow I go to the beach.",
          "r": "Tomorrow I'm going to go to the beach.",
          "aceita": [
            "Tomorrow I am going to go to the beach.",
            "Tomorrow I'm going to the beach.",
            "Tomorrow I am going to the beach."
          ],
          "d": "Dica: plano para amanhã pede <b>going to</b>, não o presente simples."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about your plans for today or tomorrow. Use <b>I'm going to</b> for a plan and <b>I'm meeting</b> for a fixed plan with a time.",
      "ph": "Today I'm going to …",
      "ex": "Today I'm going to visit a museum. I'm meeting my friend at six. We're going to eat pizza."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you going to do this weekend?",
          "ph": "This weekend I'm going to …",
          "ex": "This weekend I'm going to visit my parents."
        },
        {
          "q": "Who are you meeting this week? When?",
          "ph": "I'm meeting … on … at …",
          "ex": "I'm meeting my cousin on Thursday at seven."
        }
      ]
    }
  }
};
