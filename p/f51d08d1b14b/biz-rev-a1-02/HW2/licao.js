/* HOW THINGS WORK HERE · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: revisão U2: present simple, does/doesn't, orders, always/usually/never. A1: dicas em português só nas notas (d). */
window.HW2 = {
  "id": "biz-rev-a1-02",
  "titulo": "How Things Work Here",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f51d08d1b14b/biz-rev-a1-02/img/live-conversa.webp",
  "alvo": "Unit 2 review: present simple (he / she + -s, doesn't + plain verb, Does she ...?), short answers, orders (Log in. Don't open ...), always / usually / never before the verb",
  "abrir": "What do you always do first in the morning?",
  "fecho": "<b>He / she / it</b> takes <b>-s</b>: <i>She works.</i> But after <b>does / doesn't</b>, the verb has no -s: <i>Does she work?</i> <i>She doesn't work.</i> Orders: <b>Log in. Don't open the door.</b> <b>Always / usually / never</b> go before the verb.",
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
      "sub": "Mia tells a new intern how things work. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/f51d08d1b14b/biz-rev-a1-02/img/live-conversa.webp",
      "leg": "The back door",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, welcome to Northwind. Let me tell you how things work here."
        },
        {
          "quem": "leo",
          "t": "Great! What time do you start?"
        },
        {
          "quem": "mia",
          "t": "Everybody starts at nine. The boss doesn't like late people."
        },
        {
          "quem": "leo",
          "t": "Does Ms. Lee work on Fridays?"
        },
        {
          "quem": "mia",
          "t": "No, she doesn't. She works from home on Fridays."
        },
        {
          "quem": "leo",
          "t": "And what do I do first?"
        },
        {
          "quem": "mia",
          "t": "Always check your email first. Then turn on the computer and log in."
        },
        {
          "quem": "leo",
          "t": "Can I use the back door?"
        },
        {
          "quem": "mia",
          "t": "No! Don't open the back door. It's for staff only."
        },
        {
          "quem": "leo",
          "t": "Okay. Do you usually have lunch at the office?"
        },
        {
          "quem": "mia",
          "t": "Yes, I do. I usually have lunch at one."
        }
      ],
      "perguntas": [
        {
          "q": "What time does everybody start?",
          "op": [
            "At nine",
            "At ten",
            "At seven"
          ],
          "a": 0,
          "por": "Everybody starts at nine."
        },
        {
          "q": "What does Mia say about the back door?",
          "op": [
            "Don't open it",
            "Open it at nine",
            "Use it for lunch"
          ],
          "a": 0,
          "por": "No! Don't open the back door."
        },
        {
          "q": "What does Mia usually do at one?",
          "op": [
            "She has lunch",
            "She checks email",
            "She goes home"
          ],
          "a": 0,
          "por": "I usually have lunch at one."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the office. Hear it, then say it.",
      "frases": [
        {
          "t": "Everybody starts at nine.",
          "img": "https://wolf-labs.pages.dev/p/f51d08d1b14b/biz-rev-a1-02/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Ms. Lee doesn't work on Fridays.",
          "img": "https://wolf-labs.pages.dev/p/f51d08d1b14b/biz-rev-a1-02/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Always check your email first.",
          "img": "https://wolf-labs.pages.dev/p/f51d08d1b14b/biz-rev-a1-02/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Routines and rules. Four quick ones.",
      "regra": "he / she + <b>-s</b> · <b>doesn't / does</b> + plain verb (no -s) · <b>Don't</b> + verb · <b>always / usually / never</b> before the verb.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I usually have lunch at one.",
          "aceita": [],
          "d": "Dica: <b>usually</b> vem antes do verbo."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The boss don't like late people.",
          "r": "The boss doesn't like late people.",
          "aceita": [
            "The boss does not like late people."
          ],
          "d": "Dica: <b>the boss</b> = he / she, então <b>doesn't</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Does Ms. Lee works on Fridays?",
          "r": "Does Ms. Lee work on Fridays?",
          "aceita": [],
          "d": "Dica: depois de <b>does</b>, o verbo fica limpo, sem -s."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "No open the back door.",
          "r": "Don't open the back door.",
          "aceita": [
            "Do not open the back door."
          ],
          "d": "Dica: ordem negativa: <b>Don't</b> + verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f51d08d1b14b/biz-rev-a1-02/img/live-conversa.webp",
      "leg": "A door and a key",
      "pede": "Look at the picture: a door and a key. Write 2 or 3 rules for your office or your home. Use <b>Don't</b> and <b>always / usually / never</b>.",
      "ph": "Always … Don't …",
      "ex": "Always lock the door. Don't open the window at night. I usually arrive at nine."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you always do first at work or in the morning?",
          "ph": "I always …",
          "ex": "I always drink coffee first."
        },
        {
          "q": "What does your boss or teacher not like?",
          "ph": "My boss doesn't like …",
          "ex": "My teacher doesn't like late students."
        }
      ]
    }
  }
};
