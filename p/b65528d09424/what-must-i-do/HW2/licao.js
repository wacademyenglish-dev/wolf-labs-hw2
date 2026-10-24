/* WHAT MUST I DO? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: must / have to / should / don't have to / mustn't. Bíblia WEB: Mark 10:20 e 10:26 (Out loud), Mark 10:21 (Listen), 10:20 (Você). Nenhuma opção falsa sobre as palavras de Jesus. B1: nenhum português. */
window.HW2 = {
  "id": "what-must-i-do",
  "titulo": "What Must I Do?",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/b65528d09424/what-must-i-do/img/live-porta.webp",
  "alvo": "must / have to / should / don't have to / mustn't: must = I feel it is necessary, have to = a rule or someone requires it, should = advice, don't have to = not necessary, mustn't = forbidden; the plain verb after must / should; he / she / it has to",
  "abrir": "What do you have to do every day?",
  "fecho": "<b>must</b> = I feel it is necessary · <b>have to</b> = a rule or a need · <b>should</b> = advice · <b>don't have to</b> = not necessary · <b>mustn't</b> = forbidden. After <i>must</i> and <i>should</i>, the plain verb, no <i>to</i>. <i>He has to</i>, <i>she has to</i>.",
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
      "sub": "Mia helps Leo pack for a move. She reads Mark 10:21. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/b65528d09424/what-must-i-do/img/live-mercado.webp",
      "leg": "A table with a bag and a few things",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you're packing for the move. What do you have to take?"
        },
        {
          "quem": "leo",
          "t": "I have to take my passport and my laptop. I must not forget the charger."
        },
        {
          "quem": "mia",
          "t": "And you should take a warm coat. It gets cold there."
        },
        {
          "quem": "leo",
          "t": "Good idea. But I don't have to take all these books. I can buy new ones."
        },
        {
          "quem": "mia",
          "t": "I'm reading about a young man who asked Jesus what he must do. It's in Mark 10."
        },
        {
          "quem": "leo",
          "t": "What happened?"
        },
        {
          "quem": "mia",
          "t": "Mark 10:21 says, “Jesus looking at him loved him, and said to him, ‘One thing you lack. Go, sell whatever you have and give to the poor, and you will have treasure in heaven; and come, follow me, taking up the cross.’”"
        },
        {
          "quem": "leo",
          "t": "It makes me think about what I really have to keep, and what I can leave behind."
        },
        {
          "quem": "mia",
          "t": "You mustn't be afraid to travel light. Maybe you should take only one bag."
        }
      ],
      "perguntas": [
        {
          "q": "What does Leo have to take?",
          "op": [
            "His passport and his laptop",
            "All his books",
            "A big television"
          ],
          "a": 0,
          "por": "I have to take my passport and my laptop."
        },
        {
          "q": "What doesn't Leo have to take?",
          "op": [
            "All his books",
            "His passport",
            "His laptop"
          ],
          "a": 0,
          "por": "I don't have to take all these books."
        },
        {
          "q": "What does Mia say Leo should take?",
          "op": [
            "A warm coat",
            "A new phone",
            "A heavy lamp"
          ],
          "a": 0,
          "por": "You should take a warm coat."
        }
      ]
    },
    "out": {
      "sub": "Three sentences. The second and third are from the Bible: Mark 10:20 and Mark 10:26 (World English Bible). Hear it, then say it.",
      "frases": [
        {
          "t": "I have to leave early, but I don't have to take a big bag.",
          "img": "https://wolf-labs.pages.dev/p/b65528d09424/what-must-i-do/img/live-porta.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "He said to him, “Teacher, I have observed all these things from my youth.”",
          "img": "https://wolf-labs.pages.dev/p/b65528d09424/what-must-i-do/img/live-mercado.webp",
          "au": "audio/say2.mp3",
          "ref": "Mark 10:20"
        },
        {
          "t": "They were exceedingly astonished, saying to him, “Then who can be saved?”",
          "img": "https://wolf-labs.pages.dev/p/b65528d09424/what-must-i-do/img/live-capa2.webp",
          "au": "audio/say3.mp3",
          "ref": "Mark 10:26"
        }
      ]
    },
    "focus": {
      "sub": "must, have to, should or mustn't? Four quick ones.",
      "regra": "<b>must / should</b> + plain verb · <b>he has to</b> · <b>don't have to</b> = not necessary · <b>mustn't</b> = forbidden.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She doesn't have to work on Sundays.",
          "aceita": [],
          "d": "Hint: <b>doesn't have to</b> + plain verb = it is not necessary."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I must to finish this today.",
          "r": "I must finish this today.",
          "aceita": [
            "I have to finish this today."
          ],
          "d": "Hint: after <b>must</b>, the plain verb, with no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He have to wake up at six.",
          "r": "He has to wake up at six.",
          "aceita": [
            "He must wake up at six."
          ],
          "d": "Hint: with he / she / it, <b>has to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "In the museum, you don't have to touch the pictures.",
          "r": "In the museum, you mustn't touch the pictures.",
          "aceita": [
            "In the museum, you must not touch the pictures."
          ],
          "d": "Hint: it is forbidden, so <b>mustn't</b>. <i>Don't have to</i> means it is not necessary."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/b65528d09424/what-must-i-do/img/live-capa2.webp",
      "leg": "A small purse with a few coins",
      "pede": "Look at the picture: a small purse with a few coins. Write 2 or 3 sentences about your money. What do you <b>have to</b> pay? What <b>should</b> you save? What <b>don't you have to</b> buy?",
      "ph": "I have to … I should … I don't have to …",
      "ex": "I have to pay my rent every month. I should save more money. I don't have to buy new shoes, because my old ones are fine."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "In Mark 10:20 a man says, “Teacher, I have observed all these things from my youth.” What do you have to do every day? What mustn't you forget?",
          "ph": "I have to … I mustn't forget …",
          "ex": "I have to wake up at six. I mustn't forget my keys."
        },
        {
          "q": "What should you do more often? What don't you have to do anymore?",
          "ph": "I should … more often. I don't have to …",
          "ex": "I should call my friends more often. I don't have to wake up early on Sundays."
        }
      ]
    }
  }
};
