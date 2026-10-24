/* CALL ME · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: pronomes objeto (me, him, her, us, them, it). A1: dicas em português só nas notas (d). HW2_ARTIGO_CONTA: her / his / my não valem um pelo outro. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "call-me",
  "titulo": "Call Me",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c54d080b662a/call-me/img/live-festa.webp",
  "alvo": "object pronouns after the verb and after to / with / for / about: me, him, her, us, them, it; subject pronouns (I, he, she, we, they) start a sentence and never follow a verb: call him, not call he",
  "abrir": "Who do you call first with good news?",
  "fecho": "<b>I, he, she, we, they</b> start a sentence. After a verb, or after <b>to / with / for / about</b>, they change: <b>me, him, her, us, them</b>. <i>I called him. Tell her about it. Come with us.</i> <b>you</b> and <b>it</b> never change.",
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
      "sub": "Mia and Leo plan a surprise party on the phone. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/c54d080b662a/call-me/img/live-festa.webp",
      "leg": "A birthday cake in a living room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, the party is on Saturday. Did you call Tom?"
        },
        {
          "quem": "mia",
          "t": "Yes, I called him. He can drive us to the party."
        },
        {
          "quem": "leo",
          "t": "Good. What about the cake? Can you get it?"
        },
        {
          "quem": "mia",
          "t": "Yes, I can get it at six. Can you ask Ana and Ben for music?"
        },
        {
          "quem": "leo",
          "t": "Sure. I will call them tonight. They have big speakers."
        },
        {
          "quem": "mia",
          "t": "And Lia? Don't tell her about the party!"
        },
        {
          "quem": "leo",
          "t": "Of course not. I will tell her we have dinner at your place."
        },
        {
          "quem": "mia",
          "t": "Perfect. Send me the address, and I will send it to Sara."
        }
      ],
      "perguntas": [
        {
          "q": "Who can drive them to the party?",
          "op": [
            "Tom",
            "Ben",
            "Sara"
          ],
          "a": 0,
          "por": "I called him. He can drive us to the party."
        },
        {
          "q": "Who does Leo call tonight?",
          "op": [
            "Ana and Ben",
            "Tom",
            "Lia"
          ],
          "a": 0,
          "por": "I will call them tonight."
        },
        {
          "q": "What does Leo tell Lia?",
          "op": [
            "They have dinner at Mia's place",
            "There is a party",
            "The cake is ready"
          ],
          "a": 0,
          "por": "I will tell her we have dinner at your place."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the party. Hear it, then say it.",
      "frases": [
        {
          "t": "I called him, and he can drive us.",
          "img": "https://wolf-labs.pages.dev/p/c54d080b662a/call-me/img/live-festa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Don't tell her about the party.",
          "img": "https://wolf-labs.pages.dev/p/c54d080b662a/call-me/img/live-festa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Send it to me, and I will send it to them.",
          "img": "https://wolf-labs.pages.dev/p/c54d080b662a/call-me/img/live-festa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "me, him, her, us or them? Four quick ones.",
      "regra": "<b>I, he, she, we, they</b> start a sentence · after a verb: <b>me, him, her, us, them</b> · no <b>to</b> after <b>call</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Can you help us with the cake?",
          "aceita": [],
          "d": "Dica: depois do verbo, <b>we</b> vira <b>us</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I saw he at the party.",
          "r": "I saw him at the party.",
          "aceita": [],
          "d": "Dica: depois do verbo, <b>he</b> vira <b>him</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Call to me tonight.",
          "r": "Call me tonight.",
          "aceita": [],
          "d": "Dica: <b>call</b> + pessoa, sem <b>to</b> no meio."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We invited they to the party.",
          "r": "We invited them to the party.",
          "aceita": [],
          "d": "Dica: depois do verbo, <b>they</b> vira <b>them</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c54d080b662a/call-me/img/live-festa.webp",
      "leg": "A birthday cake in a living room",
      "pede": "Look at the picture: a birthday cake in a living room, ready for a party. Write 2 or 3 sentences about the party: who you call, and what you tell them. Use <b>me, him, her, us, them, it</b> after the verb.",
      "ph": "I called … and I told …",
      "ex": "I called Tom, and I asked him for a ride. I told them about the cake. They will bring it at six."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Who calls you the most? Do you always answer?",
          "ph": "My … calls me … I …",
          "ex": "My mother calls me every day. I always answer her."
        },
        {
          "q": "Who do you invite to your birthday party?",
          "ph": "I invite … I ask them to …",
          "ex": "I invite my cousins and my best friend. I ask them to bring music."
        }
      ]
    }
  }
};
