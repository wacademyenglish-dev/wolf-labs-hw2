/* IT NEEDN'T BE PERFECT · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: not necessary (needn't + plain verb, don't have to, don't need to, there's no need to) versus not allowed (mustn't, aren't allowed to); no 'to' after needn't or mustn't; never 'don't must'. C1: nenhum português. Só imagens live-* (escuras). */
window.HW2 = {
  "id": "it-neednt-be-perfect",
  "titulo": "It Needn't Be Perfect",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/f3bf4f1d4eb9/it-neednt-be-perfect/img/live-conversa.webp",
  "alvo": "not necessary (needn't + plain verb, don't have to, don't need to, there's no need to) versus not allowed (mustn't, aren't allowed to); no 'to' after needn't or mustn't; never 'don't must'",
  "abrir": "What is something people think is necessary, but really isn't?",
  "fecho": "<b>Not necessary:</b> <i>You needn't bring anything</i> (no <i>to</i> after needn't) · <i>You don't have to / don't need to</i> · <i>There's no need to</i>. <b>Not allowed:</b> <i>You mustn't</i> · <i>You aren't allowed to</i>. Never <i>don't must</i>. And <i>you mustn't pay</i> is not the same as <i>you don't have to pay</i>.",
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
      "sub": "Mia invites Leo to dinner. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/f3bf4f1d4eb9/it-neednt-be-perfect/img/live-conversa.webp",
      "leg": "A quiet kitchen at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, what time should I come on Saturday, and what should I bring?"
        },
        {
          "quem": "mia",
          "t": "Come around seven. And honestly, you needn't bring anything. Just yourself."
        },
        {
          "quem": "leo",
          "t": "Not even a bottle of wine?"
        },
        {
          "quem": "mia",
          "t": "Well, you don't have to, but nobody ever says no."
        },
        {
          "quem": "leo",
          "t": "Should I dress up?"
        },
        {
          "quem": "mia",
          "t": "There's no need to. It's casual. Although you mustn't wear white. My cat sheds everywhere."
        },
        {
          "quem": "leo",
          "t": "Noted. Anything else I should know?"
        },
        {
          "quem": "mia",
          "t": "One serious rule: we aren't allowed to touch the thermostat. The landlord made that very clear."
        },
        {
          "quem": "leo",
          "t": "And afterwards? Do I have to help with the washing-up?"
        },
        {
          "quem": "mia",
          "t": "You needn't. Honestly, the evening needn't be perfect. Just come and enjoy it."
        }
      ],
      "perguntas": [
        {
          "q": "Does Leo have to bring wine?",
          "op": [
            "No, but nobody ever refuses it",
            "Yes, it is a rule",
            "No, wine is forbidden"
          ],
          "a": 0,
          "por": "Well, you don't have to, but nobody ever says no."
        },
        {
          "q": "What aren't they allowed to touch?",
          "op": [
            "The thermostat",
            "The cat",
            "The oven"
          ],
          "a": 0,
          "por": "We aren't allowed to touch the thermostat."
        },
        {
          "q": "What doesn't Leo need to do after dinner?",
          "op": [
            "Help with the washing-up",
            "Leave early",
            "Call a taxi"
          ],
          "a": 0,
          "por": "You needn't. Honestly, the evening needn't be perfect."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about what is and isn't necessary. Hear it, then say it.",
      "frases": [
        {
          "t": "You needn't call me when you arrive, but you mustn't leave the gate open.",
          "img": "https://wolf-labs.pages.dev/p/f3bf4f1d4eb9/it-neednt-be-perfect/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "There's no need to dress up, and you don't have to stay late.",
          "img": "https://wolf-labs.pages.dev/p/f3bf4f1d4eb9/it-neednt-be-perfect/img/live-capa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We aren't allowed to touch the thermostat, so you needn't ask.",
          "img": "https://wolf-labs.pages.dev/p/f3bf4f1d4eb9/it-neednt-be-perfect/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "needn't, don't have to, mustn't. Four quick ones.",
      "regra": "<b>not necessary:</b> needn't + verb · don't have to · don't need to · <b>not allowed:</b> mustn't · aren't allowed to · never <i>don't must</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You don't have to wear a tie, but you mustn't be late.",
          "aceita": [],
          "d": "Hint: one is not necessary, the other is not allowed."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You mustn't pay anything: it's free for guests.",
          "r": "You don't have to pay anything: it's free for guests.",
          "aceita": [
            "You needn't pay anything: it's free for guests.",
            "You don't need to pay anything: it's free for guests."
          ],
          "d": "Hint: free means it is <b>not necessary</b>, not <b>forbidden</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You needn't to worry about the cleaning.",
          "r": "You needn't worry about the cleaning.",
          "aceita": [
            "You don't need to worry about the cleaning.",
            "You don't have to worry about the cleaning."
          ],
          "d": "Hint: <b>needn't</b> is followed by the plain verb, with no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You don't must park in front of the garage.",
          "r": "You mustn't park in front of the garage.",
          "aceita": [
            "You are not allowed to park in front of the garage."
          ],
          "d": "Hint: <b>must</b> never takes <i>don't</i>. For a ban, use <b>mustn't</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/f3bf4f1d4eb9/it-neednt-be-perfect/img/live-conversa.webp",
      "leg": "A quiet kitchen at night",
      "pede": "Look at the picture: a quiet kitchen. A guest is coming to stay. Write 2 or 3 sentences: one thing they needn't do, and one thing they mustn't do or aren't allowed to do.",
      "ph": "You needn't … but you mustn't …",
      "ex": "You needn't bring towels: they are in the cupboard. You mustn't leave the back door open, and you aren't allowed to use the oven after ten."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What don't guests at your home have to do, and what aren't they allowed to do?",
          "ph": "Guests don't have to … but they mustn't …",
          "ex": "Guests don't have to take their shoes off, but they mustn't touch my plants."
        },
        {
          "q": "What do people think is necessary, but really isn't?",
          "ph": "You needn't … / You don't have to …",
          "ex": "You needn't answer work emails at night. It can wait until morning."
        }
      ]
    }
  }
};
