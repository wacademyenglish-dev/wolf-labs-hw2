/* THE CHAIR · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: be (idade, sensação) x have / has. Business A1: dicas em português só nas notas (d). Só live-* escuras. */
window.HW2 = {
  "id": "the-chair",
  "titulo": "The Chair",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/645c2a19ed79/the-chair/img/live-bg-cv.webp",
  "alvo": "be for age and feelings (I am 30, she is hungry) x have / has for things and people (I have a car, he has two kids); never I have 30 years, I have hungry; How old are you? Do you have a car?",
  "abrir": "How old are you? Is it a good age?",
  "fecho": "What you <b>are</b>: age and feelings: <i>I am 30. She is hungry.</i> What you <b>have</b>: things and people: <i>I have a car. He has two kids.</i> He, she, it: <b>has</b>. The questions: <i>How old are you? Do you have a car?</i>",
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
  "rate": "-16%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo on Leo's first day. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/645c2a19ed79/the-chair/img/live-bg-cv.webp",
      "leg": "A CV and a pen on a table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Welcome to the team, Leo. How old are you?"
        },
        {
          "quem": "leo",
          "t": "I'm twenty-eight."
        },
        {
          "quem": "mia",
          "t": "Great. Do you have kids?"
        },
        {
          "quem": "leo",
          "t": "Yes, I have two kids. They are four and six."
        },
        {
          "quem": "mia",
          "t": "Nice. And how are you today? You look nervous."
        },
        {
          "quem": "leo",
          "t": "I am nervous, and I'm hungry. I have no lunch today."
        },
        {
          "quem": "mia",
          "t": "Don't worry. I have a sandwich in my bag. Do you have a car? The office has a parking lot."
        },
        {
          "quem": "leo",
          "t": "No, I don't. I have a bike."
        }
      ],
      "perguntas": [
        {
          "q": "How old is Leo?",
          "op": [
            "Twenty-eight",
            "Thirty-eight",
            "Twenty-six"
          ],
          "a": 0,
          "por": "I'm twenty-eight."
        },
        {
          "q": "How is Leo today?",
          "op": [
            "Nervous and hungry",
            "Tired and cold",
            "Happy and tired"
          ],
          "a": 0,
          "por": "I am nervous, and I'm hungry."
        },
        {
          "q": "What does Leo have?",
          "op": [
            "Two kids and a bike",
            "A car and a dog",
            "A sandwich and a car"
          ],
          "a": 0,
          "por": "I have two kids. / I have a bike."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for an HR form. Hear it, then say it.",
      "frases": [
        {
          "t": "I have my CV and a pen.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/645c2a19ed79/the-chair/img/live-bg-cv.webp"
        },
        {
          "t": "He is twenty-eight and he is nervous.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "She has two kids and a small car.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "am, is, are or have, has? Four quick ones.",
      "regra": "<b>be</b> = age and feelings (<i>I am 30. I am hungry.</i>) · <b>have / has</b> = things and people (<i>I have a car. He has two kids.</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "He has two kids and a blue car.",
          "aceita": [],
          "d": "Dica: coisas e pessoas pedem <b>have</b>; com he / she / it: <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I have 30 years.",
          "r": "I am 30 years old.",
          "aceita": [
            "I am 30.",
            "I'm 30 years old.",
            "I'm 30."
          ],
          "d": "Dica: idade é o que você <b>é</b>: I am 30, nunca 'I have 30 years'."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She have two kids.",
          "r": "She has two kids.",
          "aceita": [],
          "d": "Dica: he / she / it usa <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I have hungry.",
          "r": "I am hungry.",
          "aceita": [
            "I'm hungry."
          ],
          "d": "Dica: sensação é o que você <b>é</b>: I am hungry."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/645c2a19ed79/the-chair/img/live-bg-cv.webp",
      "leg": "A CV and a pen on a table",
      "pede": "Look at the picture: a CV and a pen on a table. Write 2 or 3 sentences about you for an HR form: your age (<b>I am ...</b>), how you feel (<b>I am ...</b>) and what you have (<b>I have ...</b>).",
      "ph": "I am … I am … I have …",
      "ex": "I am 34. I am a little tired today. I have two kids and a small car."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How old are you? How are you today?",
          "ph": "I am … I am …",
          "ex": "I am 34. I am a little tired today."
        },
        {
          "q": "What do you have in your bag? Who do you have at home?",
          "ph": "I have …",
          "ex": "I have my keys and a book. I have a cat and two sisters."
        }
      ]
    }
  }
};
