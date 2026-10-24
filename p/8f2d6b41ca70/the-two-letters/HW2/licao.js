/* THE TWO LETTERS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: verbo + to ou -ing com mudança de sentido. B2: nenhum português. */
window.HW2 = {
  "id": "the-two-letters",
  "titulo": "The Two Letters",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/8f2d6b41ca70/the-two-letters/img/live-envelopes.webp",
  "alvo": "verb + to or -ing with a change of meaning: stop (give up / pause in order to), remember and forget (a task ahead / a memory), regret (news now / sorry I did it), try (make an effort / test another way), mean (intend)",
  "abrir": "What do you always forget to do at work?",
  "fecho": "<b>To</b> looks forward (the task, the plan, the purpose); <b>-ing</b> looks back, or is the thing itself. <i>He stopped smoking</i> = gave it up; <i>he stopped to smoke</i> = paused in order to. <i>Remember to send</i> (a task) / <i>remember sending</i> (a memory). <i>We regret to inform you</i> (news now) / <i>I regret sending it</i> (sorry I did it).",
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
      "sub": "Mia and Leo chase an invoice. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/8f2d6b41ca70/the-two-letters/img/live-envelopes.webp",
      "leg": "Envelopes on a dark desk",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, did the invoice go out to the Harris account?"
        },
        {
          "quem": "leo",
          "t": "Not yet. I meant to send it on Friday, but I stopped to answer a call, and I forgot to go back to it."
        },
        {
          "quem": "mia",
          "t": "I remember sending their last invoice to the wrong address, so please check it first."
        },
        {
          "quem": "leo",
          "t": "Good idea. I also regret sending that one without a cover letter."
        },
        {
          "quem": "mia",
          "t": "Then remember to attach one today."
        },
        {
          "quem": "leo",
          "t": "Done. And if they don't reply, should I try calling their office?"
        },
        {
          "quem": "mia",
          "t": "Yes, try calling after lunch. They stopped answering email last week."
        },
        {
          "quem": "leo",
          "t": "Then I'll write: we regret to inform you that the invoice is overdue."
        },
        {
          "quem": "mia",
          "t": "Keep it polite, and remember to copy me in."
        }
      ],
      "perguntas": [
        {
          "q": "Why was the invoice late?",
          "op": [
            "Leo stopped to answer a call and forgot to go back",
            "Leo forgot the address",
            "Mia stopped the payment"
          ],
          "a": 0,
          "por": "I stopped to answer a call, and I forgot to go back to it."
        },
        {
          "q": "What does Mia remember?",
          "op": [
            "Sending the last invoice to the wrong address",
            "Calling the Harris office",
            "Writing a cover letter"
          ],
          "a": 0,
          "por": "I remember sending their last invoice to the wrong address."
        },
        {
          "q": "What should Leo remember to do today?",
          "op": [
            "Attach a cover letter",
            "Stop answering calls",
            "Change the address"
          ],
          "a": 0,
          "por": "Then remember to attach one today."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from the office. Hear it, then say it.",
      "frases": [
        {
          "t": "Please remember to attach the cover letter.",
          "img": "https://wolf-labs.pages.dev/p/8f2d6b41ca70/the-two-letters/img/live-envelopes.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I remember sending the invoice last week.",
          "img": "https://wolf-labs.pages.dev/p/8f2d6b41ca70/the-two-letters/img/live-fundo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We regret to inform you that the invoice is overdue.",
          "img": "https://wolf-labs.pages.dev/p/8f2d6b41ca70/the-two-letters/img/live-envelopes.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "To or -ing? Four quick ones.",
      "regra": "<b>to</b> = a task ahead, a purpose · <b>-ing</b> = a memory, or giving something up · <b>regret to inform</b> / <b>regret sending</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "I meant to send the invoice on Friday.",
          "aceita": [],
          "d": "Hint: <b>meant to</b> + base verb: the intention."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the meaning is wrong. He gave it up.",
          "mostra": "He stopped to work on Saturdays.",
          "r": "He stopped working on Saturdays.",
          "aceita": [],
          "d": "Hint: giving something up takes <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Please remember sending the cover letter today.",
          "r": "Please remember to send the cover letter today.",
          "aceita": [],
          "d": "Hint: a task still ahead takes <b>to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I forgot sending the invoice, and it is still on my desk.",
          "r": "I forgot to send the invoice, and it is still on my desk.",
          "aceita": [],
          "d": "Hint: a task that never happened takes <b>to</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/8f2d6b41ca70/the-two-letters/img/live-envelopes.webp",
      "leg": "Envelopes on a dark desk",
      "pede": "Look at the picture: envelopes on a dark desk. Write 2 or 3 sentences: something you must remember to do at work, and something you remember doing. Use <b>remember to / remember -ing</b>, <b>forget</b>, <b>stop</b>, <b>try</b> or <b>regret</b>.",
      "ph": "I must remember to …",
      "ex": "I must remember to send the report before noon. I remember writing a similar report last year. I regret not saving a copy."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you often forget to do at work or at home?",
          "ph": "I often forget to …",
          "ex": "I often forget to reply to messages on the weekend."
        },
        {
          "q": "What do you remember doing on your first day at work or school?",
          "ph": "I remember …-ing …",
          "ex": "I remember sitting in a big room and feeling a little nervous."
        }
      ]
    }
  }
};
