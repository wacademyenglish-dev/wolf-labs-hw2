/* A2 REVIEW: THE CITY SURVEY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: revisão A2 unidade 1: simple x continuous, pedir esclarecimento, so do I / neither do I. A2: dicas em português só nas notas (d). Só imagens live-* (escuras). */
window.HW2 = {
  "id": "a2-review-the-city-survey",
  "titulo": "A2 Review: The City Survey",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/da740726ec32/a2-review-the-city-survey/img/live-capa.webp",
  "alvo": "A2 unit 1 review: present simple (usually) × present continuous (right now); asking for clarification (Could you say that again? What does ... mean?); buying time (Give me a second); too / either, so do I / neither do I",
  "abrir": "What do you usually do in the evening?",
  "fecho": "<b>Usually</b> = present simple (<i>she works</i>). <b>Right now</b> = <b>am / is / are + -ing</b> (<i>I'm waiting</i>). Not clear? <i>Could you say that again? What does … mean?</i> Agree: <b>Me too / So do I</b> · <b>Me neither / Neither do I</b>.",
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
      "sub": "Mia does a city survey at a bus stop. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/da740726ec32/a2-review-the-city-survey/img/live-conversa.webp",
      "leg": "Rain on a bus window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Excuse me, can I ask you a few questions for a city survey?"
        },
        {
          "quem": "leo",
          "t": "Sure. Go ahead."
        },
        {
          "quem": "mia",
          "t": "What do you usually do in the evening?"
        },
        {
          "quem": "leo",
          "t": "Hmm, give me a second. I usually cook dinner and watch TV."
        },
        {
          "quem": "mia",
          "t": "And what are you doing right now?"
        },
        {
          "quem": "leo",
          "t": "I'm waiting for the night bus. I commute every day."
        },
        {
          "quem": "mia",
          "t": "Sorry, what does commute mean?"
        },
        {
          "quem": "leo",
          "t": "It means you go to work by bus or car every day."
        },
        {
          "quem": "mia",
          "t": "I see. Thank you. One last thing: I never drink coffee at night."
        },
        {
          "quem": "leo",
          "t": "Neither do I! I only drink tea."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo usually do in the evening?",
          "op": [
            "He cooks dinner and watches TV",
            "He takes the night bus",
            "He drinks coffee"
          ],
          "a": 0,
          "por": "I usually cook dinner and watch TV."
        },
        {
          "q": "What is Leo doing right now?",
          "op": [
            "He is waiting for the night bus",
            "He is cooking dinner",
            "He is watching TV"
          ],
          "a": 0,
          "por": "I'm waiting for the night bus."
        },
        {
          "q": "What does commute mean?",
          "op": [
            "Going to work every day",
            "Waiting for a bus",
            "Doing a survey"
          ],
          "a": 0,
          "por": "It means you go to work by bus or car every day."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for the survey. Hear it, then say it.",
      "frases": [
        {
          "t": "I usually cook dinner at seven.",
          "img": "https://wolf-labs.pages.dev/p/da740726ec32/a2-review-the-city-survey/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Right now I'm waiting for the bus.",
          "img": "https://wolf-labs.pages.dev/p/da740726ec32/a2-review-the-city-survey/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Sorry, could you say that again, please?",
          "img": "https://wolf-labs.pages.dev/p/da740726ec32/a2-review-the-city-survey/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Habit or now? Agree or not? Four quick ones.",
      "regra": "<b>usually</b> + simple (she works) · <b>right now</b> + <b>-ing</b> (I'm working) · <b>Me too</b> = same · <b>Me neither</b> = same, with no.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Right now my sister is working from home.",
          "aceita": [],
          "d": "Dica: agora = <b>is</b> + verbo com <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She usually is working at home.",
          "r": "She usually works at home.",
          "aceita": [],
          "d": "Dica: <b>usually</b> é hábito: presente simples, com <b>-s</b> para she."
        },
        {
          "tipo": "escreve",
          "t": "Your friend says: I never drink coffee. You agree. Fix it.",
          "mostra": "Me too.",
          "r": "Me neither.",
          "aceita": [
            "Neither do I.",
            "Me neither!"
          ],
          "d": "Dica: com 'never' ou 'don't', concorde com <b>Me neither</b> ou <b>Neither do I</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Right now I work at home.",
          "r": "Right now I'm working at home.",
          "aceita": [
            "Right now I am working at home."
          ],
          "d": "Dica: <b>right now</b> pede <b>am</b> + verbo com <b>-ing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/da740726ec32/a2-review-the-city-survey/img/live-capa.webp",
      "leg": "A notebook on a night street",
      "pede": "Look at the picture: a notebook on a night street. Write 2 or 3 sentences for the survey: what you <b>usually</b> do in the evening, and what you are doing <b>right now</b>.",
      "ph": "In the evening I usually …",
      "ex": "I usually cook dinner and watch TV. Right now I'm writing in my notebook."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you usually do on Sundays? And what are you doing right now?",
          "ph": "On Sundays I usually … Right now I'm …",
          "ex": "On Sundays I usually visit my family. Right now I'm sitting at my desk."
        },
        {
          "q": "A friend says: I never get up early. You never do either. What do you say?",
          "ph": "Me … / Neither …",
          "ex": "Me neither! I never get up early."
        }
      ]
    }
  }
};
