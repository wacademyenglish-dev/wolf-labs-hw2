/* THE PRESS CONFERENCE · LIÇÃO DE CASA 2.0 (23/10/2026) · revisão B1. Motor: hw2.js. JSON puro depois do "=". B1: nenhum português. */
window.HW2 = {
  "id": "b1-review-the-press-conference",
  "titulo": "The Press Conference",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/6c20bdb37b19/b1-review-the-press-conference/img/live-conversa.webp",
  "alvo": "Unit 9 review: question tags (you're tired, aren't you?); indirect questions (Could you tell me where the bank is?); reported speech (she said she was, he told me he would, she asked if)",
  "abrir": "What would you ask a famous person?",
  "fecho": "<b>Tags</b>: <i>You're tired, aren't you?</i> · <b>Indirect questions</b>: <i>Could you tell me where the station is?</i> (normal order, no do / does) · <b>Reported speech</b>: <i>She said she was tired. He told me he would come.</i>",
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
      "sub": "Mia and Leo after a press conference. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/6c20bdb37b19/b1-review-the-press-conference/img/live-conversa.webp",
      "leg": "A TV studio with a sofa",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, you were great at the press conference, weren't you?"
        },
        {
          "quem": "mia",
          "t": "I was nervous! Could you tell me what the coach said at the end?"
        },
        {
          "quem": "leo",
          "t": "He said he was proud of the team. He told us they would train harder."
        },
        {
          "quem": "mia",
          "t": "And what did the pop star say?"
        },
        {
          "quem": "leo",
          "t": "She said she had written a new song. She told me she would sing it next month."
        },
        {
          "quem": "mia",
          "t": "Nice. You didn't ask about the tour, did you?"
        },
        {
          "quem": "leo",
          "t": "I did! I asked if she was going to Rio. She said she didn't know yet."
        },
        {
          "quem": "mia",
          "t": "Do you know where the studio is? I left my notebook there."
        },
        {
          "quem": "leo",
          "t": "It's on the second floor. Let's go and get it."
        },
        {
          "quem": "mia",
          "t": "Thanks. You're a good friend, aren't you?"
        }
      ],
      "perguntas": [
        {
          "q": "What did the coach tell them?",
          "op": [
            "The team would train harder",
            "He was leaving",
            "He had lost his job"
          ],
          "a": 0,
          "por": "He told us they would train harder."
        },
        {
          "q": "What did the pop star say she had done?",
          "op": [
            "Written a new song",
            "Found a notebook",
            "Visited Rio"
          ],
          "a": 0,
          "por": "She said she had written a new song."
        },
        {
          "q": "What does Mia want to find?",
          "op": [
            "Her notebook",
            "Her phone",
            "Her coat"
          ],
          "a": 0,
          "por": "I left my notebook there."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about asking and reporting. Hear it, then say it.",
      "frases": [
        {
          "t": "You're very tired today, aren't you?",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could you tell me where the studio is?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She told me she would sing it next month.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Tags, indirect questions, reported speech. Four quick ones.",
      "regra": "<b>Tags</b> flip the verb · <b>Could you tell me where it is?</b> (normal order) · <b>said / told me + one step back</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you tell me where the station is?",
          "aceita": [],
          "d": "Hint: after <b>Could you tell me</b>, use normal order: where + subject + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She said me that she was tired.",
          "r": "She told me that she was tired.",
          "aceita": [
            "She said that she was tired."
          ],
          "d": "Hint: <b>told me</b>, or just <b>said that</b>. Never <i>said me</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "They went home, don't they?",
          "r": "They went home, didn't they?",
          "aceita": [],
          "d": "Hint: the tag matches the past: <b>didn't they</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Do you know where is the bank?",
          "r": "Do you know where the bank is?",
          "aceita": [],
          "d": "Hint: indirect question: <b>where the bank is</b>, not <i>where is the bank</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/6c20bdb37b19/b1-review-the-press-conference/img/live-conversa.webp",
      "leg": "A studio with a sofa and lights",
      "pede": "Look at the picture: a TV studio with a sofa. Imagine a guest. Write 2 or 3 sentences: what the guest said, and one polite question you would ask. Use <b>said / told me</b> and <b>Could you tell me …?</b>",
      "ph": "The guest said that …",
      "ex": "The guest said that she was a little tired. She told me she would travel tomorrow. Could you tell me where you are going next?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did someone tell you this week? Report it.",
          "ph": "My friend told me that …",
          "ex": "My boss told me that I was doing a great job."
        },
        {
          "q": "Ask me a polite question about my day, then check with a tag.",
          "ph": "Could you tell me …? / You …, don't you?",
          "ex": "Could you tell me what you did today? You like your job, don't you?"
        }
      ]
    }
  }
};
