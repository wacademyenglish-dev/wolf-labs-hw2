/* TWENTY-FIVE HOURS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: as horas: o'clock, half past, quarter past/to, AM/PM. A1: dicas em português só nas notas (d). Só a imagem do relógio (as outras são claras). */
window.HW2 = {
  "id": "twenty-five-hours",
  "titulo": "Twenty-Five Hours",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/77df7411a4ac/twenty-five-hours/img/live-estacao.webp",
  "alvo": "telling the time: o'clock, half past, quarter past, quarter to, AM / PM; What time ...? and at + time",
  "abrir": "What time do you wake up on Sundays?",
  "fecho": "<b>o'clock</b> for the full hour · <b>half past</b> eight = 8:30 · <b>quarter past</b> nine = 9:15 · <b>quarter to</b> nine = 8:45 (the hour that is coming). <b>AM</b> before noon, <b>PM</b> after.",
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
      "sub": "Mia and Leo at the station in the morning. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/77df7411a4ac/twenty-five-hours/img/live-estacao.webp",
      "leg": "The station clock",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, what time is it?"
        },
        {
          "quem": "leo",
          "t": "It's quarter to nine in the morning."
        },
        {
          "quem": "mia",
          "t": "Oh no. My class starts at nine o'clock."
        },
        {
          "quem": "leo",
          "t": "What time does your bus come?"
        },
        {
          "quem": "mia",
          "t": "At half past eight. I missed it!"
        },
        {
          "quem": "leo",
          "t": "Don't worry. The next bus comes at quarter past nine."
        },
        {
          "quem": "mia",
          "t": "Quarter past nine is too late. I start at nine."
        },
        {
          "quem": "leo",
          "t": "Then call your teacher. Does your class end at half past eleven?"
        },
        {
          "quem": "mia",
          "t": "Yes, half past eleven AM. Then I'm free until six o'clock PM."
        },
        {
          "quem": "leo",
          "t": "Good. Come to the station café at twelve o'clock."
        }
      ],
      "perguntas": [
        {
          "q": "What time does Mia's class start?",
          "op": [
            "At nine o'clock",
            "At half past eight",
            "At quarter past nine"
          ],
          "a": 0,
          "por": "My class starts at nine o'clock."
        },
        {
          "q": "When does the next bus come?",
          "op": [
            "At quarter past nine",
            "At half past eight",
            "At quarter to nine"
          ],
          "a": 0,
          "por": "The next bus comes at quarter past nine."
        },
        {
          "q": "What time does Mia's class end?",
          "op": [
            "At half past eleven AM",
            "At six o'clock PM",
            "At twelve o'clock"
          ],
          "a": 0,
          "por": "Half past eleven AM."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about time. Hear it, then say it.",
      "frases": [
        {
          "t": "My class starts at nine o'clock.",
          "img": "https://wolf-labs.pages.dev/p/77df7411a4ac/twenty-five-hours/img/live-estacao.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The bus comes at half past eight.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The next bus is at quarter past nine.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "o'clock, half past, quarter past, quarter to. Four quick ones.",
      "regra": "<b>o'clock</b> = the full hour · <b>half past</b> · <b>quarter past</b> · <b>quarter to</b> = the next hour · <b>AM</b> / <b>PM</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The bus leaves at half past eight.",
          "aceita": [],
          "d": "Dica: <b>half past</b> + a hora que já passou."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My class starts at four hours.",
          "r": "My class starts at four o'clock.",
          "aceita": [
            "My class starts at four oclock."
          ],
          "d": "Dica: no relógio a hora cheia é <b>o'clock</b>, não 'hours'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The clock says 8:45. It's quarter to eight.",
          "r": "The clock says 8:45. It's quarter to nine.",
          "aceita": [],
          "d": "Dica: <b>to</b> + a hora que vem: 8:45 está quase nove."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the shop is open in the daytime.",
          "mostra": "The shop opens at nine PM and closes at six AM.",
          "r": "The shop opens at nine AM and closes at six PM.",
          "aceita": [
            "The shop opens at nine a.m. and closes at six p.m."
          ],
          "d": "Dica: de manhã é <b>AM</b>, depois do meio-dia é <b>PM</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/77df7411a4ac/twenty-five-hours/img/live-estacao.webp",
      "leg": "A big clock on a station platform",
      "pede": "Look at the picture: a big clock on a station platform. Write 2 or 3 sentences: what time you do three things today. Use <b>o'clock</b>, <b>half past</b>, <b>quarter past</b> or <b>quarter to</b>.",
      "ph": "Today I wake up at …",
      "ex": "Today I wake up at seven o'clock. I have lunch at half past twelve. I go home at quarter to six."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What time do you wake up on Sundays?",
          "ph": "On Sundays I wake up at …",
          "ex": "On Sundays I wake up at half past eight AM."
        },
        {
          "q": "What do you do at half past twelve?",
          "ph": "At half past twelve I …",
          "ex": "At half past twelve I have lunch with my family."
        }
      ]
    }
  }
};
