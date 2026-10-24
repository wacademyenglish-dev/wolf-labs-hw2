/* THE DOUBLE ORDER · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: mensagem assíncrona: because/so/which means, Could you, by. B1: nenhum português na lição. Só imagens live-* escuras (lum < 50). */
window.HW2 = {
  "id": "the-double-order",
  "titulo": "The Double Order",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/157a5a5d9dce/the-double-order/img/live-b.webp",
  "alvo": "clear written messages for people far away: because / so / which means / as a result to explain, Could you...? and Please let me know by + time for requests; never Because of the button was slow (because + clause), never Please could you to check, never until for a deadline (by)",
  "abrir": "Which message from a coworker annoys you? Why?",
  "fecho": "<b>Explain</b>: <i>The page was slow, so people clicked twice. The button sent the order twice, which means some customers paid twice.</i> <b>Because</b> + sentence, <b>because of</b> + noun. <b>Ask</b>: <i>Could you check the payments? Please let me know by five o'clock.</i> No <i>to</i> after <b>could you</b>. A deadline is <b>by</b> Friday.",
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
      "sub": "Mia and Leo write to an angry client. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/157a5a5d9dce/the-double-order/img/live-b.webp",
      "leg": "A keyboard on a dark desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, Sarah is angry. Some customers paid twice for the same cake."
        },
        {
          "quem": "leo",
          "t": "I found the bug. The pay button sends the order twice when the customer clicks two times."
        },
        {
          "quem": "mia",
          "t": "So the customers clicked twice because the page was slow?"
        },
        {
          "quem": "leo",
          "t": "Yes. The page was slow, so people clicked again. As a result, two orders went to the server."
        },
        {
          "quem": "mia",
          "t": "How do I explain it to Sarah without a call?"
        },
        {
          "quem": "leo",
          "t": "Write: the button sent the order twice, which means some customers paid twice."
        },
        {
          "quem": "mia",
          "t": "And what do we do now?"
        },
        {
          "quem": "leo",
          "t": "I'll fix the button today. Then ask Sarah: Could you refund the double payments? Please let me know by five o'clock."
        },
        {
          "quem": "mia",
          "t": "Good. And a TL;DR at the top?"
        },
        {
          "quem": "leo",
          "t": "Yes. TL;DR: fixed today, refunds needed."
        }
      ],
      "perguntas": [
        {
          "q": "Why did the customers pay twice?",
          "op": [
            "The button sent the order twice",
            "The bakery sent two cakes",
            "The bank made a mistake"
          ],
          "a": 0,
          "por": "The pay button sends the order twice."
        },
        {
          "q": "Why did people click twice?",
          "op": [
            "The page was slow",
            "The button was red",
            "Sarah told them to"
          ],
          "a": 0,
          "por": "The page was slow, so people clicked again."
        },
        {
          "q": "What will Leo do today?",
          "op": [
            "Fix the button",
            "Call Sarah",
            "Close the website"
          ],
          "a": 0,
          "por": "I'll fix the button today."
        }
      ]
    },
    "out": {
      "sub": "Three lines for a message. Hear it, then say it.",
      "frases": [
        {
          "t": "The page was slow, so people clicked twice.",
          "img": "https://wolf-labs.pages.dev/p/157a5a5d9dce/the-double-order/img/live-b.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The button sent the order twice, which means some customers paid twice.",
          "img": "https://wolf-labs.pages.dev/p/157a5a5d9dce/the-double-order/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Could you refund the double payments? Please let me know by five o'clock.",
          "img": "https://wolf-labs.pages.dev/p/157a5a5d9dce/the-double-order/img/live-b.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "because, so, which means, could you, by. Four quick ones.",
      "regra": "<b>because</b> + sentence · <b>so</b> / <b>which means</b> / <b>as a result</b> · <b>Could you + plain verb</b> · deadline = <b>by</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I will fix the button today because it sent two orders.",
          "aceita": [],
          "d": "Hint: <b>because</b> + a full sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Because of the button was slow, people clicked twice.",
          "r": "Because the button was slow, people clicked twice.",
          "aceita": [
            "The button was slow, so people clicked twice."
          ],
          "d": "Hint: <b>because of</b> + noun; <b>because</b> + a full sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Please could you to check the payments?",
          "r": "Please could you check the payments?",
          "aceita": [
            "Could you please check the payments?",
            "Could you check the payments, please?",
            "Could you check the payments please?"
          ],
          "d": "Hint: no <b>to</b> after <b>could you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will send the report until Friday.",
          "r": "I will send the report by Friday.",
          "aceita": [
            "I'll send the report by Friday."
          ],
          "d": "Hint: a deadline takes <b>by</b>, not <i>until</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/157a5a5d9dce/the-double-order/img/live-b.webp",
      "leg": "A keyboard in the dark",
      "pede": "Look at the picture: a keyboard at night. Write a short message to a client about a bug: what happened, why, and one request. Use <b>because</b>, <b>so</b> or <b>which means</b>, and <b>Could you...?</b>",
      "ph": "Hi Sarah, the button sent …",
      "ex": "Hi Sarah, the button sent the order twice because the page was slow. This means some customers paid twice. Could you check the refunds? Please let me know by five o'clock."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Which messages from a coworker annoy you? Why?",
          "ph": "It annoys me when … because …",
          "ex": "It annoys me when people send only hi, because I don't know what they want."
        },
        {
          "q": "Ask a teammate to review your work. Give a day.",
          "ph": "Could you … Please let me know by …",
          "ex": "Could you review my code? Please let me know by Thursday."
        }
      ]
    }
  }
};
