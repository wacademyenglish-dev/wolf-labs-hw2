/* THAT MAKES ME UNCOMFORTABLE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: dizer não com educação e firmeza (not comfortable with, Could we, I need to check). B1: nenhum português. Imagens live-* do curso (todas escuras, lum < 50). Falas originais; sem abuso nem assédio. */
window.HW2 = {
  "id": "aupair-that-makes-me-uncomfortable",
  "titulo": "That Makes Me Uncomfortable",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/d39f92853c4a/aupair-that-makes-me-uncomfortable/img/live-capa.webp",
  "alvo": "saying no kindly and firmly: I understand, but ... · I'm not comfortable with + noun / -ing · Could we + plain verb? · I'd rather + plain verb · I need to check with ... first; never comfortable to, Could we to, I need check",
  "abrir": "When was the last time you said no politely? What did you say?",
  "fecho": "Kind and firm has three steps: <b>I understand, but…</b> (acknowledge) · <b>I'm not comfortable with</b> + noun or -ing (say no) · <b>Could we</b> + plain verb? (offer a next step). Never <i>comfortable to</i>, never <i>Could we to</i>.",
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
      "sub": "Mia, an au pair, talks with her host dad Leo. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/d39f92853c4a/aupair-that-makes-me-uncomfortable/img/live-capa.webp",
      "leg": "A quiet evening, a city outside the window",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, could you also clean the garage on Saturday? I know it's your day off, but it's only a couple of hours."
        },
        {
          "quem": "mia",
          "t": "I understand, but I'm not comfortable with working on my day off. It's not part of my duties."
        },
        {
          "quem": "leo",
          "t": "Fair enough. Could you at least stay with the kids until eight tonight? We have a dinner."
        },
        {
          "quem": "mia",
          "t": "Tonight I can't, because I have my English class at seven. Could we write the schedule down, so we both know my hours?"
        },
        {
          "quem": "leo",
          "t": "Good idea. One more thing: I'd like to keep your passport in my office. It's safer there."
        },
        {
          "quem": "mia",
          "t": "I'd rather keep it with me, but I can give you a copy."
        },
        {
          "quem": "leo",
          "t": "A copy is fine. I'm sorry if I asked too much."
        },
        {
          "quem": "mia",
          "t": "No problem. About the garage, I need to check with my coordinator first, and then I'll tell you."
        },
        {
          "quem": "leo",
          "t": "Sure. Thanks for being so clear."
        },
        {
          "quem": "mia",
          "t": "Thank you for listening."
        }
      ],
      "perguntas": [
        {
          "q": "Why does Mia say no to the garage?",
          "op": [
            "It's her day off and not part of her duties",
            "She is afraid of the garage",
            "She has a class on Saturday"
          ],
          "a": 0,
          "por": "I'm not comfortable with working on my day off. It's not part of my duties."
        },
        {
          "q": "What does Mia offer instead of her passport?",
          "op": [
            "A copy",
            "Her phone",
            "A letter"
          ],
          "a": 0,
          "por": "I'd rather keep it with me, but I can give you a copy."
        },
        {
          "q": "What does Mia want to write down?",
          "op": [
            "The schedule",
            "The rules of the house",
            "The kids' names"
          ],
          "a": 0,
          "por": "Could we write the schedule down, so we both know my hours?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences to say no kindly. Hear it, then say it.",
      "frases": [
        {
          "t": "I understand, but I'm not comfortable with that.",
          "img": "https://wolf-labs.pages.dev/p/d39f92853c4a/aupair-that-makes-me-uncomfortable/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could we write the schedule down, please?",
          "img": "https://wolf-labs.pages.dev/p/d39f92853c4a/aupair-that-makes-me-uncomfortable/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I need to check with my coordinator first.",
          "img": "https://wolf-labs.pages.dev/p/d39f92853c4a/aupair-that-makes-me-uncomfortable/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Kind and firm. Four quick ones.",
      "regra": "<b>I understand, but…</b> · <b>not comfortable with</b> + noun / -ing · <b>Could we</b> + plain verb · <b>I need to</b> + verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I understand, but that is not part of my duties.",
          "aceita": [],
          "d": "Hint: acknowledge first (<b>I understand, but</b>), then say no."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm not comfortable to work on my day off.",
          "r": "I'm not comfortable with working on my day off.",
          "aceita": [
            "I'm not comfortable working on my day off.",
            "I am not comfortable working on my day off."
          ],
          "d": "Hint: after <b>comfortable</b> use <b>with</b> + -ing, never <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could we to write the schedule down?",
          "r": "Could we write the schedule down?",
          "aceita": [
            "Could we write down the schedule?"
          ],
          "d": "Hint: after <b>Could we</b> the verb stays plain, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I need check with my coordinator first.",
          "r": "I need to check with my coordinator first.",
          "aceita": [],
          "d": "Hint: <b>need</b> + <b>to</b> + plain verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/d39f92853c4a/aupair-that-makes-me-uncomfortable/img/live-conversa.webp",
      "leg": "A closed door at night",
      "pede": "Look at the picture: a closed door at night. Write 2 or 3 sentences: say no, kindly and firmly, to a request about your workload, schedule, privacy or a house rule. Use <b>I understand, but…</b>, <b>I'm not comfortable with…</b> or <b>Could we…?</b>",
      "ph": "I understand, but I'm not comfortable with …",
      "ex": "I understand, but I'm not comfortable with babysitting every night. Could we change the schedule? I need to check with my coordinator first."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "A host parent asks you to work on your day off. What do you say?",
          "ph": "I understand, but …",
          "ex": "I understand, but Saturday is my day off. Could we talk about it?"
        },
        {
          "q": "What is a house rule that is hard for you? How can you ask kindly about it?",
          "ph": "… is hard for me. Could we …?",
          "ex": "Dinner at six is early for me. Could we talk about it?"
        }
      ]
    }
  }
};
