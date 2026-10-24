/* THE REUNION · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js. JSON puro depois do "=". Alvo: present perfect continuous, used to, should have, be used to. B1: nenhum português. */
window.HW2 = {
  "id": "the-reunion",
  "titulo": "The Reunion",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c883d0ef05d4/b1-review-the-reunion/img/live-capa.webp",
  "alvo": "Unit 2 review: present perfect continuous (for / since); used to x present simple; should have / could have; be used to / get used to + -ing",
  "abrir": "Who is an old friend you haven't seen for years?",
  "fecho": "<b>have been + -ing</b> + <b>for / since</b>: <i>I've been living here for six years.</i> <b>used to</b> + verb for past habits. <b>should have</b> + participle for regrets. <b>be used to / get used to</b> + <b>-ing</b>: <i>I'm used to waking up early.</i>",
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
      "sub": "Mia and Leo meet at a class reunion twenty years after school. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c883d0ef05d4/b1-review-the-reunion/img/live-conversa.webp",
      "leg": "Two cups of coffee by a window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I can't believe it! Twenty years since school. What have you been doing all this time?"
        },
        {
          "quem": "leo",
          "t": "I've been running a small bakery since 2010. I get up at four, but now I'm used to it."
        },
        {
          "quem": "mia",
          "t": "A baker! You used to be the shyest boy in class."
        },
        {
          "quem": "leo",
          "t": "I know. And you? How long have you been living in Lisbon?"
        },
        {
          "quem": "mia",
          "t": "For six years. I've been working as a pilot, and the time changes were hard to get used to."
        },
        {
          "quem": "leo",
          "t": "Do you ever think about school?"
        },
        {
          "quem": "mia",
          "t": "Sometimes. I used to sleep in math class, and I should have studied more."
        },
        {
          "quem": "leo",
          "t": "Same here. I should have opened the bakery earlier, too."
        },
        {
          "quem": "mia",
          "t": "Well, it looks like you have been doing great. Let's order more coffee!"
        }
      ],
      "perguntas": [
        {
          "q": "How long has Leo been running the bakery?",
          "op": [
            "Since 2010",
            "For six years",
            "Since 2006"
          ],
          "a": 0,
          "por": "I've been running a small bakery since 2010."
        },
        {
          "q": "What did Mia use to do in math class?",
          "op": [
            "She used to sleep",
            "She used to sing",
            "She used to read"
          ],
          "a": 0,
          "por": "I used to sleep in math class."
        },
        {
          "q": "What does Leo say he should have done?",
          "op": [
            "Opened the bakery earlier",
            "Studied more math",
            "Moved to Lisbon"
          ],
          "a": 0,
          "por": "I should have opened the bakery earlier, too."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about then and now. Hear it, then say it.",
      "frases": [
        {
          "t": "I've been living in this city for six years.",
          "img": "https://wolf-labs.pages.dev/p/c883d0ef05d4/b1-review-the-reunion/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I used to hate coffee, but now I drink it every day.",
          "img": "https://wolf-labs.pages.dev/p/c883d0ef05d4/b1-review-the-reunion/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It took a month to get used to waking up early.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have been -ing, used to, should have, be used to. Four quick ones.",
      "regra": "<b>have been + -ing</b> + for / since · <b>used to</b> + verb · <b>should have</b> + participle · <b>be used to</b> + -ing",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We have been waiting here since seven.",
          "aceita": [],
          "d": "Hint: <b>have been waiting</b> + <b>since</b> + a starting point."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I live in this town since 2015.",
          "r": "I have lived in this town since 2015.",
          "aceita": [
            "I have been living in this town since 2015."
          ],
          "d": "Hint: it started in 2015 and continues, so <b>present perfect</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm used to wake up early.",
          "r": "I'm used to waking up early.",
          "aceita": [],
          "d": "Hint: <b>be used to</b> + <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I should learned Spanish before the trip.",
          "r": "I should have learned Spanish before the trip.",
          "aceita": [],
          "d": "Hint: a regret about the past: <b>should have</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c883d0ef05d4/b1-review-the-reunion/img/live-conversa.webp",
      "leg": "Two cups of coffee by a window",
      "pede": "Look at the picture: two cups of coffee by a window. Write 2 or 3 sentences about an old friend: what you used to do together, and what they have been doing lately. Use <b>used to</b> and <b>have been + -ing</b>.",
      "ph": "We used to … Now she has been …",
      "ex": "We used to sit by the window at school. Now she has been working in Lisbon for six years. I should have called her earlier."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How long have you been learning English? Why did you start?",
          "ph": "I've been learning English for / since …",
          "ex": "I've been learning English for three years because I need it for work."
        },
        {
          "q": "What did you use to do as a child that you don't do now?",
          "ph": "I used to … but now …",
          "ex": "I used to play outside until dark, but now I'm used to staying at home."
        }
      ]
    }
  }
};
