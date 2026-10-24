/* THE HOLLYWOOD FIXER · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: want / ask / tell + pessoa + to. A2: dicas em português só nas notas (d). Falas originais. */
window.HW2 = {
  "id": "the-hollywood-fixer",
  "titulo": "The Hollywood Fixer",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/7d2e9a4c8f61/the-hollywood-fixer/img/live-fundo.webp",
  "alvo": "want / ask / tell + person + to + plain verb (the person in the gap does the second verb); an empty gap sends the verb back to the subject (she asked to leave); never wants that you go, told me do, or said me",
  "abrir": "What does your family want you to do this year?",
  "fecho": "English puts a <b>person in the gap</b>: <b>want / ask / tell + person + to</b>: <i>The producer wants her to sign it.</i> The person in the gap does the second verb. An empty gap sends it back: <i>she asked to leave</i> = she leaves. No <b>that</b>, never lose the <b>to</b>, and <b>say</b> never takes a person: <i>he told me</i>.",
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
      "sub": "Mia and Leo on a long day on a film set. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/7d2e9a4c8f61/the-hollywood-fixer/img/live-mesa.webp",
      "leg": "A desk with a lamp",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I have a long day. The director wants me to call the actors before six."
        },
        {
          "quem": "leo",
          "t": "Who told you to do that?"
        },
        {
          "quem": "mia",
          "t": "The producer told me. And she asked Sam to bring the scripts."
        },
        {
          "quem": "leo",
          "t": "What do you want Sam to do after that?"
        },
        {
          "quem": "mia",
          "t": "I want him to wait in the car. I asked to leave early, but she said no."
        },
        {
          "quem": "leo",
          "t": "She told you to stay?"
        },
        {
          "quem": "mia",
          "t": "Yes. She wants us to finish the schedule tonight."
        },
        {
          "quem": "leo",
          "t": "Then I'll ask the driver to come at ten."
        }
      ],
      "perguntas": [
        {
          "q": "Who will call the actors?",
          "op": [
            "Mia",
            "Sam",
            "The producer"
          ],
          "a": 0,
          "por": "The director wants me to call the actors before six."
        },
        {
          "q": "Who will bring the scripts?",
          "op": [
            "Sam",
            "Mia",
            "The driver"
          ],
          "a": 0,
          "por": "She asked Sam to bring the scripts."
        },
        {
          "q": "What does the producer want everybody to do tonight?",
          "op": [
            "Finish the schedule",
            "Leave early",
            "Call the actors"
          ],
          "a": 0,
          "por": "She wants us to finish the schedule tonight."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about who does what. Hear it, then say it.",
      "frases": [
        {
          "t": "My boss asked me to close the door.",
          "img": "https://wolf-labs.pages.dev/p/7d2e9a4c8f61/the-hollywood-fixer/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I told Sam to wait in the car.",
          "img": "https://wolf-labs.pages.dev/p/7d2e9a4c8f61/the-hollywood-fixer/img/live-garagem.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The studio wants her to say nothing.",
          "img": "https://wolf-labs.pages.dev/p/7d2e9a4c8f61/the-hollywood-fixer/img/live-espera.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Who does the second verb? Four quick ones.",
      "regra": "<b>want / ask / tell + person + to</b> + plain verb · no <b>that</b> · <b>told me</b>, never <i>said me</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She asked him to wait outside.",
          "aceita": [],
          "d": "Dica: <b>asked</b> + pessoa (<b>him</b>) + <b>to</b> + verbo limpo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "He wants that I call him.",
          "r": "He wants me to call him.",
          "aceita": [],
          "d": "Dica: sem <b>that</b>. Ponha a pessoa na lacuna: <b>wants me to call</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "She told me wait here.",
          "r": "She told me to wait here.",
          "aceita": [],
          "d": "Dica: nunca perca o <b>to</b>: <b>told me to wait</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He said me to close the door.",
          "r": "He told me to close the door.",
          "aceita": [],
          "d": "Dica: <b>say</b> não leva pessoa. Use <b>told me</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/7d2e9a4c8f61/the-hollywood-fixer/img/live-mesa.webp",
      "leg": "A desk with a lamp and notes",
      "pede": "Look at the picture: a desk with a lamp and notes at night. Imagine you are the boss. Write 2 or 3 sentences: what you want people to do, who you asked, who you told.",
      "ph": "I want my team to …",
      "ex": "I want my team to finish the report. I asked Ana to call the client. I told Pedro to wait here."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What does your family want you to do this year?",
          "ph": "My family wants me to …",
          "ex": "My mother wants me to study more."
        },
        {
          "q": "Who asked you to do something this week? What was it?",
          "ph": "My friend asked me to …",
          "ex": "My friend asked me to help with a move."
        }
      ]
    }
  }
};
