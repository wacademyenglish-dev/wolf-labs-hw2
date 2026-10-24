/* YOU MUSTN'T CHEW GUM HERE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must x mustn't x don't have to. A2: dicas em português só nas notas (d). Sem imagens (fotofobia). */
window.HW2 = {
  "id": "you-mustnt-chew-gum-here",
  "titulo": "You Mustn't Chew Gum Here",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f4044627c4ab/you-mustnt-chew-gum-here/img/live-capa.webp",
  "alvo": "must / mustn't / don't have to: must + verb for a rule, mustn't for a wall (forbidden), don't have to for an open door (not necessary); had to for the past; never must to, don't must",
  "abrir": "What is one rule you have at home?",
  "fecho": "<b>must</b> = a rule. <b>mustn't</b> = forbidden, a wall. <b>don't have to</b> = not necessary, an open door. Never <i>must to</i>, never <i>don't must</i>. Past: <i>I had to wait.</i>",
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
      "sub": "Mia and Leo before a trip to Tokyo. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f4044627c4ab/you-mustnt-chew-gum-here/img/live-mesa.webp",
      "leg": "Packing for Tokyo",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, I land in Tokyo tomorrow. What are the rules in your building?"
        },
        {
          "quem": "mia",
          "t": "Easy. You must take off your shoes at the door."
        },
        {
          "quem": "leo",
          "t": "OK. Can I bring my bike inside?"
        },
        {
          "quem": "mia",
          "t": "No, you mustn't. The hall is too small. Park it outside."
        },
        {
          "quem": "leo",
          "t": "Do I have to buy a ticket for the train from the airport?"
        },
        {
          "quem": "mia",
          "t": "Yes, you must buy one. But you don't have to pay in cash. A card is fine."
        },
        {
          "quem": "leo",
          "t": "Good. Last time I had to wait an hour at the gate."
        },
        {
          "quem": "mia",
          "t": "This time you don't have to wait. I'll pick you up."
        },
        {
          "quem": "leo",
          "t": "Perfect. Anything else?"
        },
        {
          "quem": "mia",
          "t": "One more thing: you mustn't make noise after ten at night."
        }
      ],
      "perguntas": [
        {
          "q": "Can Leo bring his bike inside?",
          "op": [
            "No, he mustn't",
            "Yes, he must",
            "Yes, he doesn't have to"
          ],
          "a": 0,
          "por": "No, you mustn't. The hall is too small."
        },
        {
          "q": "Does Leo have to pay in cash?",
          "op": [
            "No, a card is fine",
            "Yes, only cash",
            "Yes, he must"
          ],
          "a": 0,
          "por": "You don't have to pay in cash. A card is fine."
        },
        {
          "q": "What must Leo do at the door?",
          "op": [
            "Take off his shoes",
            "Park his bike",
            "Make noise"
          ],
          "a": 0,
          "por": "You must take off your shoes at the door."
        }
      ]
    },
    "out": {
      "sub": "Three rules for a visitor. Hear it, then say it.",
      "frases": [
        {
          "t": "You must take off your shoes at the door.", "img": "https://wolf-labs.pages.dev/p/f4044627c4ab/you-mustnt-chew-gum-here/img/live-genkan.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You mustn't bring your bike inside.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You don't have to pay in cash.", "img": "https://wolf-labs.pages.dev/p/f4044627c4ab/you-mustnt-chew-gum-here/img/live-aviao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "A rule, a wall or an open door? Four quick ones.",
      "regra": "<b>must</b> = a rule · <b>mustn't</b> = forbidden · <b>don't have to</b> = not necessary · never <b>must to</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You don't have to wait for me.",
          "aceita": [],
          "d": "Dica: não precisa = <b>don't have to</b> + verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no to after must.",
          "mostra": "You must to take off your shoes.",
          "r": "You must take off your shoes.",
          "aceita": [],
          "d": "Dica: depois de <b>must</b>, o verbo vem direto, sem <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is not necessary.",
          "mostra": "You mustn't pay. The tea is free.",
          "r": "You don't have to pay. The tea is free.",
          "aceita": [
            "You do not have to pay. The tea is free."
          ],
          "d": "Dica: de graça = não precisa: <b>don't have to</b>. <b>Mustn't</b> é proibido."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: it is forbidden.",
          "mostra": "You don't have to run in the hall.",
          "r": "You mustn't run in the hall.",
          "aceita": [
            "You must not run in the hall."
          ],
          "d": "Dica: proibido é <b>mustn't</b>, a parede."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about the rules of a place you know (your home, your school, your gym): one with <b>must</b>, one with <b>mustn't</b> and one with <b>don't have to</b>.",
      "ph": "In my home, you must …",
      "ex": "In my home, you must take off your shoes. You mustn't smoke inside. You don't have to bring food."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is one thing you must do every day?",
          "ph": "Every day I must …",
          "ex": "Every day I must feed my dog."
        },
        {
          "q": "What is a rule at your work or school that you mustn't break?",
          "ph": "At my school you mustn't …",
          "ex": "At my school you mustn't use your phone in class."
        }
      ]
    }
  }
};
