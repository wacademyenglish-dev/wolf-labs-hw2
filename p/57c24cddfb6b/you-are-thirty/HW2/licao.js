/* YOU ARE THIRTY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: be para idade e estados (I am thirty / hungry), thirty x thirteen. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "you-are-thirty",
  "titulo": "You Are Thirty",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/57c24cddfb6b/you-are-thirty/img/hw-capa.webp",
  "alvo": "be for age and feelings: I am thirty, I am hungry / cold / afraid (not I have); How old are you?; thirty x thirteen",
  "abrir": "How old is your best friend?",
  "fecho": "In English you don't <i>have</i> your age: you <b>are</b> your age. <b>I'm thirty.</b> Same for feelings: <b>I'm hungry, I'm cold</b>. Use <b>have</b> for things: <i>I have a phone.</i> And listen to the beat: <b>THIR</b>ty, thir<b>TEEN</b>.",
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
      "sub": "Mia and Leo at a birthday party. A new scene, about 30 seconds.",
      "img": "https://wolf-labs.pages.dev/p/57c24cddfb6b/you-are-thirty/img/live-bolo.webp",
      "leg": "The cake and the candles",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Happy birthday, Mia! How old are you today?"
        },
        {
          "quem": "mia",
          "t": "I'm thirty!"
        },
        {
          "quem": "leo",
          "t": "Thirty? Wow. I'm twenty-nine."
        },
        {
          "quem": "mia",
          "t": "And my little brother is thirteen."
        },
        {
          "quem": "leo",
          "t": "Is he here?"
        },
        {
          "quem": "mia",
          "t": "Yes, he is with the cake. He is hungry!"
        },
        {
          "quem": "leo",
          "t": "I'm hungry too. And I'm cold. Close the window, please."
        },
        {
          "quem": "mia",
          "t": "OK. Are you tired?"
        },
        {
          "quem": "leo",
          "t": "No, I'm not tired. I'm happy!"
        },
        {
          "quem": "mia",
          "t": "Let's blow out the candles. Thirty candles!"
        }
      ],
      "perguntas": [
        {
          "q": "How old is Mia?",
          "op": [
            "Thirty",
            "Thirteen",
            "Twenty-nine"
          ],
          "a": 0,
          "por": "I'm thirty!"
        },
        {
          "q": "How old is Mia's brother?",
          "op": [
            "Thirteen",
            "Thirty",
            "Twenty-nine"
          ],
          "a": 0,
          "por": "And my little brother is thirteen."
        },
        {
          "q": "How does Leo feel?",
          "op": [
            "Hungry and cold",
            "Tired and sad",
            "Hot and afraid"
          ],
          "a": 0,
          "por": "I'm hungry too. And I'm cold."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the party. Hear it, then say it.",
      "frases": [
        {
          "t": "I'm thirty, and my brother is thirteen.",
          "img": "https://wolf-labs.pages.dev/p/57c24cddfb6b/you-are-thirty/img/live-bolo.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Leo is hungry and cold.",
          "img": "https://wolf-labs.pages.dev/p/57c24cddfb6b/you-are-thirty/img/live-mesa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "How old are you? I'm twenty-nine.",
          "img": "https://wolf-labs.pages.dev/p/57c24cddfb6b/you-are-thirty/img/live-bolo.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Am, not have. Four quick ones.",
      "regra": "<b>I am</b> thirty (not I have thirty years) · <b>I am</b> hungry / cold / afraid · <b>have</b> = things: I have a phone.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I am thirty and my brother is thirteen.",
          "aceita": [],
          "d": "Dica: <b>I am</b> + a idade."
        },
        {
          "tipo": "escreve",
          "t": "Fix it.",
          "mostra": "I have thirty years.",
          "r": "I am thirty.",
          "aceita": [
            "I am thirty years old.",
            "I'm thirty years old."
          ],
          "d": "Dica: em inglês você <b>é</b> a sua idade: <b>I am</b> thirty."
        },
        {
          "tipo": "escreve",
          "t": "Fix it.",
          "mostra": "I have hungry.",
          "r": "I am hungry.",
          "aceita": [],
          "d": "Dica: hungry, cold, afraid: <b>I am</b> …, não <i>have</i>."
        },
        {
          "tipo": "escreve",
          "t": "Ask your friend's age.",
          "mostra": "age · you",
          "r": "How old are you?",
          "aceita": [],
          "d": "Dica: <b>How old</b> + are you?"
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/57c24cddfb6b/you-are-thirty/img/live-bolo.webp",
      "leg": "A birthday cake",
      "pede": "Look at the picture: a birthday cake with candles. Write 2 or 3 sentences about you or your family: ages and one feeling (hungry, tired, happy). Use <b>am, is</b> or <b>are</b>.",
      "ph": "I am … My mother is …",
      "ex": "I am twenty-eight. My mother is fifty-five. I am hungry, but I am happy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "How old are you? And how old is your mother, father or brother?",
          "ph": "I am … My … is …",
          "ex": "I'm twenty-eight. My mother is fifty-five."
        },
        {
          "q": "How do you feel now? Hungry? Tired?",
          "ph": "I am …",
          "ex": "I'm tired and a little hungry."
        }
      ]
    }
  }
};
