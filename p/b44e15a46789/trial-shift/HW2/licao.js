/* TRIAL SHIFT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: present perfect (experiencia) x past simple com data. B1: nenhum portugues. Sem imagens (todas claras). */
window.HW2 = {
  "id": "trial-shift",
  "titulo": "Trial Shift",
  "nivel": "B1",
  "minutos": 10,
  "alvo": "present perfect for experience (I've worked in a café for two years; Have you ever used ...? I've never ...; I've already ... / not yet) x past simple with a date (I worked there in 2022); never I have worked there in 2022, never I've already did",
  "abrir": "Have you ever had a job interview?",
  "fecho": "<b>Experience, no date</b>: present perfect: <i>I've worked in two cafés. Have you ever used this machine?</i> <b>Already / yet / never</b> go with it: <i>I've already taken the order. I haven't finished yet.</i> <b>A date or a finished time</b>: past simple: <i>I worked there in 2022.</i> Never <i>I have worked there in 2022</i>.",
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
      "sub": "Mia and Leo at a café during a trial shift. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Welcome to the trial shift, Mia. Have you ever worked in a café?"
        },
        {
          "quem": "mia",
          "t": "Yes, I have. I've worked in two cafés, but I've never used this kind of machine."
        },
        {
          "quem": "leo",
          "t": "No problem. When did you work in the last one?"
        },
        {
          "quem": "mia",
          "t": "I worked there in 2022, for a year. I've made hundreds of flat whites."
        },
        {
          "quem": "leo",
          "t": "Great. Have you ever worked on a busy Saturday?"
        },
        {
          "quem": "mia",
          "t": "Many times. And I've never been late for a shift."
        },
        {
          "quem": "leo",
          "t": "Good. Now, tables three and five, please. Have you taken their orders yet?"
        },
        {
          "quem": "mia",
          "t": "I've already taken table three's order, but I haven't taken table five's yet."
        },
        {
          "quem": "leo",
          "t": "Perfect. The trial is three hours, and it's paid, so don't worry."
        },
        {
          "quem": "mia",
          "t": "That's good to know. Thank you!"
        },
        {
          "quem": "leo",
          "t": "You've done well today. Come back on Monday."
        }
      ],
      "perguntas": [
        {
          "q": "When did Mia work in her last café?",
          "op": [
            "In 2022",
            "Last week",
            "She has never worked in one"
          ],
          "a": 0,
          "por": "I worked there in 2022, for a year."
        },
        {
          "q": "What hasn't Mia done yet?",
          "op": [
            "Taken the order for table five",
            "Made a flat white",
            "Worked on a Saturday"
          ],
          "a": 0,
          "por": "I've already taken table three's order, but I haven't taken table five's yet."
        },
        {
          "q": "What does Leo say at the end?",
          "op": [
            "Come back on Monday",
            "The trial is not paid",
            "Go home now"
          ],
          "a": 0,
          "por": "You've done well today. Come back on Monday."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about work. Hear it, then say it.",
      "frases": [
        {
          "t": "I've worked in a café for two years.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I worked at a hotel in 2021.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Have you ever used a coffee machine like this?",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "have done or did? Four quick ones.",
      "regra": "<b>I've worked</b> (experience, no date) · <b>I worked ... in 2022</b> (a finished time) · <b>already / yet / never</b> · <b>since / for</b> + present perfect.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She hasn't finished her trial shift yet.",
          "aceita": [],
          "d": "Hint: <b>hasn't</b> + past participle, and <b>yet</b> goes at the end."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have worked there in 2022.",
          "r": "I worked there in 2022.",
          "aceita": [],
          "d": "Hint: <i>in 2022</i> is a finished time, so the past simple."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I work in this café since 2020.",
          "r": "I have worked in this café since 2020.",
          "aceita": [
            "I've worked in this café since 2020.",
            "I have been working in this café since 2020.",
            "I've been working in this café since 2020."
          ],
          "d": "Hint: it started in 2020 and it continues, so the present perfect."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I've already did the dishes.",
          "r": "I've already done the dishes.",
          "aceita": [
            "I have already done the dishes."
          ],
          "d": "Hint: after <b>have</b> you need the past participle: <i>done</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Imagine you are applying for a job in a café. Write 2 or 3 sentences about your experience. Use <b>I've ...</b> for what you have done, and <b>I ... in + year</b> for something with a date.",
      "ph": "I've worked in … I … in …",
      "ex": "I've worked in a shop for three years. I worked in a hotel in 2021. I've never worked in a café, but I learn fast."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you ever worked in a team? What did you do?",
          "ph": "Yes, I have. I've …",
          "ex": "Yes, I have. I've worked in a small team at a school for two years."
        },
        {
          "q": "What was the first job you ever had? When did you have it?",
          "ph": "I worked … in …",
          "ex": "I worked in my uncle's shop in 2018."
        }
      ]
    }
  }
};
