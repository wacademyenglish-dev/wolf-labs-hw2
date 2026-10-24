/* THE WITNESS ROOM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: past continuous x past simple, past simple x present perfect, experience. B1: nenhum português. */
window.HW2 = {
  "id": "the-witness-room",
  "titulo": "The Witness Room",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8c19169199ac/b1-review-the-witness-room/img/live-capa.webp",
  "alvo": "Unit 1 review: past continuous x past simple (when / while); past simple (finished time) x present perfect (result now); present perfect for experience (ever / never)",
  "abrir": "What were you doing at this time yesterday?",
  "fecho": "<b>was / were + -ing</b> for the long action, <b>past simple</b> for the short one: <i>I was cooking when the phone rang.</i> Finished time (<i>last year</i>) = <b>past simple</b>. Result now or experience = <b>present perfect</b>: <i>I've lost my keys. I've never been to Japan.</i>",
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
      "sub": "Mia and Leo talk about a mystery at the town baking contest. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/8c19169199ac/b1-review-the-witness-room/img/live-capa.webp",
      "leg": "A lamp and a mug in a dark room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, did you hear? The winning cake disappeared last night!"
        },
        {
          "quem": "leo",
          "t": "No way! Where was it?"
        },
        {
          "quem": "mia",
          "t": "In the contest hall. The guard was checking the doors when he heard a crash."
        },
        {
          "quem": "leo",
          "t": "And what did he see?"
        },
        {
          "quem": "mia",
          "t": "A small shadow. It was running to the kitchen while he was walking in."
        },
        {
          "quem": "leo",
          "t": "Has anyone found the cake yet?"
        },
        {
          "quem": "mia",
          "t": "Not yet. But the judge has found his dog, and the dog has cream on its nose!"
        },
        {
          "quem": "leo",
          "t": "Ha! Has the dog ever done this before?"
        },
        {
          "quem": "mia",
          "t": "Never. The judge has never lost him in ten years. The dog ran away at ten last night."
        },
        {
          "quem": "leo",
          "t": "Then case closed! Let's go and buy a new cake."
        }
      ],
      "perguntas": [
        {
          "q": "What was the guard doing when he heard a crash?",
          "op": [
            "Checking the doors",
            "Cooking in the kitchen",
            "Walking the dog"
          ],
          "a": 0,
          "por": "The guard was checking the doors when he heard a crash."
        },
        {
          "q": "What has the judge found?",
          "op": [
            "His dog",
            "The cake",
            "The small shadow"
          ],
          "a": 0,
          "por": "The judge has found his dog."
        },
        {
          "q": "Has the dog ever run away before?",
          "op": [
            "No, never",
            "Yes, many times",
            "Yes, last year"
          ],
          "a": 0,
          "por": "The judge has never lost him in ten years."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what happened. Hear it, then say it.",
      "frases": [
        {
          "t": "I was making coffee when the lights went out.",
          "img": "https://wolf-labs.pages.dev/p/8c19169199ac/b1-review-the-witness-room/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I've never been to Japan, but I went to Chile in 2019.",
          "img": "https://wolf-labs.pages.dev/p/8c19169199ac/b1-review-the-witness-room/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "While we were walking home, it started to rain.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Past continuous, past simple, present perfect. Four quick ones.",
      "regra": "<b>was + -ing</b> (long) + <b>past simple</b> (short) · <b>when</b> / <b>while</b> · finished time = past simple · result or experience = present perfect",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "While she was cooking, the phone rang.",
          "aceita": [],
          "d": "Hint: <b>while</b> + <b>was cooking</b> (long action), then the short action in the past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I was cooking when my phone was ringing.",
          "r": "I was cooking when my phone rang.",
          "aceita": [],
          "d": "Hint: the short action that interrupts is in the <b>past simple</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have seen that film last year.",
          "r": "I saw that film last year.",
          "aceita": [],
          "d": "Hint: <b>last year</b> is finished time, so <b>past simple</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have never went to Japan.",
          "r": "I have never been to Japan.",
          "aceita": [
            "I have never gone to Japan."
          ],
          "d": "Hint: present perfect needs the participle: <b>been</b> / <b>gone</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8c19169199ac/b1-review-the-witness-room/img/live-capa.webp",
      "leg": "A table with a lamp and a mug in a dark room",
      "pede": "Look at the picture: a table, a lamp and a mug in a dark room. Write 2 or 3 sentences: what you were doing when something surprising happened, and one thing you have done since. Use <b>was … -ing</b>, <b>when</b> or <b>while</b>.",
      "ph": "I was … when …",
      "ex": "I was cooking when my phone rang. While I was talking, the rice burned. Since then, I've never cooked and talked at the same time."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What were you doing this time yesterday? Did anything interrupt you?",
          "ph": "At this time yesterday I was … when …",
          "ex": "At this time yesterday I was working when my neighbor called."
        },
        {
          "q": "What is the most interesting place you've ever been to? When did you go?",
          "ph": "I've been to … I went there in …",
          "ex": "I've been to Chile. I went there in 2019 and I loved it."
        }
      ]
    }
  }
};
