/* THE WELL OF THE NORNS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: wish / if only (three threads). B2: nenhum portugues. Jogo: falas originais, sem violencia. So imagens live-* escuras (<50). */
window.HW2 = {
  "id": "the-well-of-the-norns",
  "titulo": "The Well of the Norns",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/990226ccfd91/the-well-of-the-norns/img/live-poco.webp",
  "alvo": "wish and if only: wish + past for a present unreal (I wish I knew; I wish I were braver); wish + had + participle for a regret about the past (I wish I had asked); wish + would for someone else's behavior (I wish he would stop); never wish + would for yourself, never wish + would have",
  "abrir": "What do you wish you had more of?",
  "fecho": "Three threads. <b>Now</b>: <b>wish + past</b>: <i>I wish I knew. I wish I were braver.</i> <b>The past</b>: <b>wish + had + participle</b>: <i>I wish I had asked her sooner.</i> <b>Someone else</b>: <b>wish + would</b>: <i>I wish the thread would stop moving.</i> <b>If only</b> is the stronger one: <i>If only we had come yesterday.</i>",
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
  "rate": "-12%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo at an old stone well. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/990226ccfd91/the-well-of-the-norns/img/live-poco.webp",
      "leg": "The well among the roots",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, we are at the well. The weavers say they will answer one question each."
        },
        {
          "quem": "leo",
          "t": "Only one? I wish I had brought a longer list."
        },
        {
          "quem": "mia",
          "t": "I wish I knew what to ask. I wish the thread would tell me which road to take."
        },
        {
          "quem": "leo",
          "t": "Well, I wish it would stop moving. Look, it changes colour every minute."
        },
        {
          "quem": "mia",
          "t": "If only we had come yesterday. The weaver wasn't so busy then."
        },
        {
          "quem": "leo",
          "t": "I wish I had listened to you. You said we should leave early."
        },
        {
          "quem": "mia",
          "t": "Don't worry. I wish I were braver, too. I am nervous."
        },
        {
          "quem": "leo",
          "t": "Then ask your question. I wish I could hear the answer with you."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo wish about his list?",
          "op": [
            "He wishes he had brought a longer one",
            "He wishes it were shorter",
            "He wishes he knew it by heart"
          ],
          "a": 0,
          "por": "Only one? I wish I had brought a longer list."
        },
        {
          "q": "What does Leo wish the thread would do?",
          "op": [
            "Stop moving",
            "Change colour faster",
            "Tell him the road"
          ],
          "a": 0,
          "por": "I wish it would stop moving."
        },
        {
          "q": "Why does Mia say, 'If only we had come yesterday'?",
          "op": [
            "The weaver was less busy then",
            "The well was closed today",
            "It rained today"
          ],
          "a": 0,
          "por": "If only we had come yesterday. The weaver wasn't so busy then."
        }
      ]
    },
    "out": {
      "sub": "Three wishes at the well. Hear it, then say it.",
      "frases": [
        {
          "t": "I wish I knew what to ask the weaver.",
          "img": "https://wolf-labs.pages.dev/p/990226ccfd91/the-well-of-the-norns/img/live-poco.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I wish the thread would stop moving.",
          "img": "https://wolf-labs.pages.dev/p/990226ccfd91/the-well-of-the-norns/img/live-tear.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If only we had come yesterday.",
          "img": "https://wolf-labs.pages.dev/p/990226ccfd91/the-well-of-the-norns/img/live-pedras.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Wish and if only. Four quick ones.",
      "regra": "<b>wish + past</b> = now · <b>wish + had + participle</b> = the past · <b>wish + would</b> = someone else · <b>if only</b> = stronger.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I wish I had asked the weaver sooner.",
          "aceita": [],
          "d": "Hint: a regret about the past: <b>wish + had + participle</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I wish I would know the answer.",
          "r": "I wish I knew the answer.",
          "aceita": [],
          "d": "Hint: for now, use <b>wish + past</b>, never <i>wish I would</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I wish I would have asked her sooner.",
          "r": "I wish I had asked her sooner.",
          "aceita": [],
          "d": "Hint: for the past, use <b>wish + had + participle</b>, not <i>would have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I wish the weaver stops talking about fate.",
          "r": "I wish the weaver would stop talking about fate.",
          "aceita": [],
          "d": "Hint: someone else's behavior: <b>wish + would</b> + plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/990226ccfd91/the-well-of-the-norns/img/live-poco.webp",
      "leg": "A stone well among old roots",
      "pede": "Look at the picture: a stone well among old roots. Write 2 or 3 wishes. One about now (<b>wish + past</b>), one about the past (<b>wish + had + participle</b>), one about someone else (<b>wish + would</b>).",
      "ph": "I wish I … I wish I had … I wish he would …",
      "ex": "I wish I had more time. I wish I had called my friend yesterday. I wish my neighbour would turn the music down."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you wish you had more of?",
          "ph": "I wish I had more …",
          "ex": "I wish I had more free time."
        },
        {
          "q": "What do you wish you had done last year?",
          "ph": "I wish I had …",
          "ex": "I wish I had started the gym earlier."
        }
      ]
    }
  }
};
