/* A1 REVIEW: THE PET HOTEL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Unidade 3 (his/her/its, 's, whose, has got). A1: dicas em português só nas notas (d). Alvo = possessivos: HW2_ARTIGO_CONTA. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "a1-review-the-pet-hotel",
  "titulo": "A1 Review: The Pet Hotel",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/04ab9f6d96fc/a1-review-the-pet-hotel/img/live-capa.webp",
  "alvo": "Unit 3 review: his / her / their / its for the owner; the possessive 's (Maria's dog); whose, mine / yours; have got / has got; he / she / it has",
  "abrir": "Have you got a pet? What is its name?",
  "fecho": "<b>His / her / their / its</b> = the owner: <i>Maria loves her dog.</i> Use <b>'s</b>: <i>Maria's dog</i>. <b>He / she / it HAS (got)</b>: <i>It has got big ears.</i>",
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
      "sub": "Mia and Leo at the pet hotel. A new scene, about 35 seconds.",
      "img": "https://wolf-labs.pages.dev/p/04ab9f6d96fc/a1-review-the-pet-hotel/img/live-conversa.webp",
      "leg": "A dog on a soft rug",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, a new dog is at the hotel. Whose dog is it?"
        },
        {
          "quem": "leo",
          "t": "It's Maria's dog. Its name is Bolt."
        },
        {
          "quem": "mia",
          "t": "Has Bolt got a toy?"
        },
        {
          "quem": "leo",
          "t": "Yes, he has. He has got a red ball. It's his favorite."
        },
        {
          "quem": "mia",
          "t": "Is the blue bowl Bolt's too?"
        },
        {
          "quem": "leo",
          "t": "No, it isn't his. It's the cat's bowl. Bolt's bowl is yellow."
        },
        {
          "quem": "mia",
          "t": "Maria is here for her dog. Has she got the ticket?"
        },
        {
          "quem": "leo",
          "t": "Yes, she has. Here you are, Maria. Your dog is happy!"
        }
      ],
      "perguntas": [
        {
          "q": "Whose dog is Bolt?",
          "op": [
            "Maria's",
            "Ken's",
            "Leo's"
          ],
          "a": 0,
          "por": "It's Maria's dog."
        },
        {
          "q": "What has Bolt got?",
          "op": [
            "A red ball",
            "A blue bowl",
            "A yellow cat"
          ],
          "a": 0,
          "por": "He has got a red ball."
        },
        {
          "q": "Whose is the blue bowl?",
          "op": [
            "The cat's",
            "Bolt's",
            "Maria's"
          ],
          "a": 0,
          "por": "It's the cat's bowl."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the hotel. Hear it, then say it.",
      "frases": [
        {
          "t": "The dog is Maria's. Its name is Bolt.",
          "img": "https://wolf-labs.pages.dev/p/04ab9f6d96fc/a1-review-the-pet-hotel/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He has got a red ball. It is his favorite.",
          "img": "https://wolf-labs.pages.dev/p/04ab9f6d96fc/a1-review-the-pet-hotel/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Maria has a dog. Her dog is happy.",
          "img": "https://wolf-labs.pages.dev/p/04ab9f6d96fc/a1-review-the-pet-hotel/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "his or her? has or have? Four quick ones.",
      "regra": "<b>his / her / their / its</b> = the owner · <b>Maria's dog</b> · <b>he / she / it HAS</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Maria has got a big brown dog.",
          "aceita": [],
          "d": "Dica: <b>Maria</b> = she, então <b>has got</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "She have a cat.",
          "r": "She has a cat.",
          "aceita": [
            "She has got a cat."
          ],
          "d": "Dica: com <b>she / he / it</b>, o verbo é <b>has</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: use 's.",
          "mostra": "The dog of my friend is big.",
          "r": "My friend's dog is big.",
          "aceita": [],
          "d": "Dica: o dono + <b>'s</b> + a coisa: <b>my friend's dog</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Maria loves his dog.",
          "r": "Maria loves her dog.",
          "aceita": [],
          "d": "Dica: a dona é uma mulher, então <b>her</b>, não 'his'."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/04ab9f6d96fc/a1-review-the-pet-hotel/img/live-conversa.webp",
      "leg": "A dog sleeping on a rug",
      "pede": "Look at the picture: a dog sleeping on a rug. Whose dog is it? Write 2 or 3 sentences. Use <b>'s</b>, <b>its</b> and <b>has got</b>.",
      "ph": "It is Ana's dog. Its name is …",
      "ex": "It is Ana's dog. Its name is Rex. It has got golden hair and a big soft rug."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Have you got a pet? What is its name? (No pet? Invent one!)",
          "ph": "I have got a … Its name is …",
          "ex": "Yes, I have a dog. Its name is Pipoca."
        },
        {
          "q": "What has your house got? A garden? A balcony?",
          "ph": "My house has got …",
          "ex": "My house has got a small balcony, but it hasn't got a garden."
        }
      ]
    }
  }
};
