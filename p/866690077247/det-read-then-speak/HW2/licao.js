/* READ, THEN SPEAK · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Read, Then Speak: answer, reason, example, wrap-up. B1: nenhum português. Só as imagens live-* da própria aula (todas escuras). */
window.HW2 = {
  "id": "det-read-then-speak",
  "titulo": "Read, Then Speak",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "Read, Then Speak: a four-part answer (answer in the first sentence, The main reason is, For example, That's why) using the guide questions on the card as a map",
  "abrir": "What is one topic you could talk about for a whole minute?",
  "fecho": "Four parts, any topic: <b>answer</b> in the first sentence, <b>the main reason is…</b>, <b>for example…</b>, <b>that's why…</b>. The guide questions on the card are your map. To reach sixty seconds, add one more detail to each part.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo practice a speaking topic. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "An empty lecture room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the topic is: Describe a hobby you enjoy. You have twenty seconds. Go."
        },
        {
          "quem": "leo",
          "t": "Okay. My answer: A hobby I really enjoy is cycling."
        },
        {
          "quem": "mia",
          "t": "Good, you answered in the first sentence. Now the reason."
        },
        {
          "quem": "leo",
          "t": "The main reason is that it clears my head after a long day."
        },
        {
          "quem": "mia",
          "t": "Nice. Now an example."
        },
        {
          "quem": "leo",
          "t": "For example, last Sunday I rode forty kilometers along the coast, and I felt great."
        },
        {
          "quem": "mia",
          "t": "Now the wrap-up."
        },
        {
          "quem": "leo",
          "t": "That's why cycling is the best part of my week."
        },
        {
          "quem": "mia",
          "t": "Perfect shape: answer, reason, example, wrap-up. But that was only thirty seconds."
        },
        {
          "quem": "leo",
          "t": "How do I get to sixty?"
        },
        {
          "quem": "mia",
          "t": "Add one more detail to each part. Say how you started, or who rides with you."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo do in his first sentence?",
          "op": [
            "He answered the question",
            "He told a long story",
            "He asked Mia a question"
          ],
          "a": 0,
          "por": "You answered in the first sentence."
        },
        {
          "q": "What was Leo's example?",
          "op": [
            "A forty-kilometer ride last Sunday",
            "A race next year",
            "A new bicycle"
          ],
          "a": 0,
          "por": "Last Sunday I rode forty kilometers along the coast."
        },
        {
          "q": "How can Leo make his answer longer?",
          "op": [
            "Add one more detail to each part",
            "Speak faster",
            "Repeat the answer"
          ],
          "a": 0,
          "por": "Add one more detail to each part."
        }
      ]
    },
    "out": {
      "sub": "Three parts of an answer. Hear it, then say it.",
      "frases": [
        {
          "t": "A place I love in my city is the old park by the river.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The main reason is that it helps me relax after work.",
          "img": "../img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That's why it is my favorite place to spend a weekend.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "The shape of an answer. Four quick ones.",
      "regra": "<b>answer</b> → <b>the main reason is</b> → <b>for example</b> → <b>that's why</b> · no extra <i>it</i> after the subject · past simple for last Sunday.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The main reason is that I sleep better.",
          "aceita": [],
          "d": "Hint: <b>the main reason is that</b> + a full sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "My favorite season it is autumn.",
          "r": "My favorite season is autumn.",
          "aceita": [],
          "d": "Hint: the subject is already <b>my favorite season</b>. No <i>it</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the order is wrong.",
          "mostra": "I like very much cycling.",
          "r": "I like cycling very much.",
          "aceita": [],
          "d": "Hint: the object comes first, then <b>very much</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Last Sunday I go to the park.",
          "r": "Last Sunday I went to the park.",
          "aceita": [],
          "d": "Hint: <b>last Sunday</b> asks for the past: <b>went</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "An empty lecture room",
      "pede": "Look at the picture: an empty lecture room. Write 3 sentences: do you prefer mornings or evenings? Give an answer, a reason and an example.",
      "ph": "I prefer … The main reason is …",
      "ex": "I prefer mornings. The main reason is that I have more energy. For example, I study better before eight."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "You have 20 seconds. Topic: describe a person who helps you. Answer in your first sentence.",
          "ph": "A person who helps me is …",
          "ex": "A person who helps me is my sister. The main reason is that she listens to me."
        },
        {
          "q": "Talk for one minute: what is one thing you want to learn this year, and why?",
          "ph": "This year I want to … That's why …",
          "ex": "This year I want to learn to swim. That's why I started classes."
        }
      ]
    }
  }
};
