/* THE EXTRA DAY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: ordinais de data + on/in. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "the-extra-day",
  "titulo": "The Extra Day",
  "nivel": "A1",
  "minutos": 10,
  "alvo": "ordinals for dates (first, second, third, fifth, twelfth, twenty-first, twenty-ninth); the date two ways (the twelfth of May); on + day, in + month",
  "abrir": "When is your birthday?",
  "fecho": "A number becomes another word for a date: <b>five</b> → <b>fifth</b>, <b>twelve</b> → <b>twelfth</b>. For big numbers look at the last one: <i>twenty-first</i>. Say it: <i>the twelfth of May</i>. One day: <b>on</b> the fifth. A month: <b>in</b> May.",
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
      "sub": "Mia and Leo at a family calendar. A new scene, about 40 seconds.",
      "img": "",
      "leg": "",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at the calendar. Whose birthday is in May?"
        },
        {
          "quem": "mia",
          "t": "My mom's birthday is on the twelfth of May."
        },
        {
          "quem": "leo",
          "t": "The twelfth? Not the second?"
        },
        {
          "quem": "mia",
          "t": "No, the twelfth. And my dad's birthday is on the fifth of June."
        },
        {
          "quem": "leo",
          "t": "When is your birthday?"
        },
        {
          "quem": "mia",
          "t": "It is on the twenty-ninth of February."
        },
        {
          "quem": "leo",
          "t": "February the twenty-ninth? That is a special day!"
        },
        {
          "quem": "mia",
          "t": "Yes. I have a real birthday one year in four. In the other years, I have a party on the first of March."
        },
        {
          "quem": "leo",
          "t": "Then your party is in March this year."
        },
        {
          "quem": "mia",
          "t": "Yes. Come on the first of March, at seven."
        }
      ],
      "perguntas": [
        {
          "q": "When is Mia's mom's birthday?",
          "op": [
            "On the twelfth of May",
            "On the second of May",
            "On the fifth of June"
          ],
          "a": 0,
          "por": "My mom's birthday is on the twelfth of May."
        },
        {
          "q": "When is Mia's real birthday?",
          "op": [
            "On the twenty-ninth of February",
            "On the first of March",
            "On the fifth of June"
          ],
          "a": 0,
          "por": "It is on the twenty-ninth of February."
        },
        {
          "q": "When is her party in the other years?",
          "op": [
            "On the first of March",
            "On the twenty-ninth of March",
            "On the fifth of June"
          ],
          "a": 0,
          "por": "I have a party on the first of March."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the lesson. Hear it, then say it.",
      "frases": [
        {
          "t": "My mom's birthday is on the twelfth of May.",
          "img": "",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Her party is on the first of March.",
          "img": "",
          "au": "audio/say2.mp3"
        },
        {
          "t": "His birthday is on the twenty-first of June.",
          "img": "",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Look at the last number. Four quick ones.",
      "regra": "<b>one → first</b> · <b>five → fifth</b> · <b>twelve → twelfth</b> · <b>twenty-one → twenty-first</b> · one day: <b>on</b> the fifth · a month: <b>in</b> May",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "My dad's birthday is on the fifth of June.",
          "aceita": [],
          "d": "Dica: a data pede <b>fifth</b>, não <i>five</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "My birthday is on the twelve of May.",
          "r": "My birthday is on the twelfth of May.",
          "aceita": [],
          "d": "Dica: o número vira data: <b>twelve</b> → <b>twelfth</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The party is in the first of March.",
          "r": "The party is on the first of March.",
          "aceita": [],
          "d": "Dica: um dia é pequeno: <b>on</b> the first. <b>In</b> é para o mês."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: look at the last number.",
          "mostra": "Her birthday is on the twenty-one of June.",
          "r": "Her birthday is on the twenty-first of June.",
          "aceita": [],
          "d": "Dica: olhe só o último número: 1 → <b>first</b>, então <b>twenty-first</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f6fface78897/the-extra-day/img/calendario.webp",
      "leg": "A calendar in a kitchen",
      "pede": "Look at the picture: a calendar on a kitchen wall. Write 2 or 3 sentences about two birthdays. Use the <b>ordinal</b> (the fifth, the twelfth) and <b>on</b> or <b>in</b>.",
      "ph": "My birthday is on the … of …",
      "ex": "My birthday is on the ninth of July. My sister's birthday is on the twenty-first of May."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "When is your birthday?",
          "ph": "My birthday is on the … of …",
          "ex": "My birthday is on the third of February."
        },
        {
          "q": "When is the birthday of someone in your family?",
          "ph": "… birthday is on the … of …",
          "ex": "My mom's birthday is on the twelfth of May."
        }
      ]
    }
  }
};
