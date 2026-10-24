/* DO THE NEEDFUL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will / going to / present continuous + at / on / by. B1: nenhum portugues. Imagem: live-capa (escura). */
window.HW2 = {
  "id": "do-the-needful",
  "titulo": "Do the Needful",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/368eac4847ed/do-the-needful/img/live-capa.webp",
  "alvo": "three futures (I'll send it now = decision; I'm going to visit Mysore = plan; We're meeting at ten = arrangement) + time prepositions (at nine, on Monday, in the morning, by Friday = deadline); never in Monday, never until for a deadline, never will to",
  "abrir": "What are you doing this weekend?",
  "fecho": "<b>I'll</b> = a decision now: <i>I'll send it now.</i> <b>I'm going to</b> = a plan: <i>I'm going to visit Mysore.</i> <b>I'm meeting</b> = an arrangement: <i>We're meeting at ten.</i> <b>At</b> + clock time, <b>on</b> + day, <b>in</b> the morning, <b>by</b> Friday = no later than Friday.",
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
      "sub": "Mia and Leo plan the work week. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/368eac4847ed/do-the-needful/img/live-capa.webp",
      "leg": "A desk with two clocks",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, let's plan the week. Are you free on Monday morning?"
        },
        {
          "quem": "mia",
          "t": "I'm meeting the client at ten, but I can join the team call after that."
        },
        {
          "quem": "leo",
          "t": "Good. The report is due by Friday. Can you send it?"
        },
        {
          "quem": "mia",
          "t": "Sure. I'll send it on Thursday afternoon, before the weekend."
        },
        {
          "quem": "leo",
          "t": "Perfect. One more thing. The client wants to move the call to Saturday at eight in the morning."
        },
        {
          "quem": "mia",
          "t": "Saturday? I'm going to visit Mysore on Saturday. I already bought the train tickets."
        },
        {
          "quem": "leo",
          "t": "I see. Can you do the call on Friday afternoon instead?"
        },
        {
          "quem": "mia",
          "t": "Yes, I'll do it on Friday at four. I'll tell the client now."
        },
        {
          "quem": "leo",
          "t": "Great. Please do the needful and send them a calendar invite."
        },
        {
          "quem": "mia",
          "t": "Done! I'll send it in five minutes."
        }
      ],
      "perguntas": [
        {
          "q": "What is Mia doing on Monday at ten?",
          "op": [
            "Meeting the client",
            "Visiting Mysore",
            "Sending the report"
          ],
          "a": 0,
          "por": "I'm meeting the client at ten."
        },
        {
          "q": "Why can't Mia do the call on Saturday?",
          "op": [
            "She is going to visit Mysore",
            "She is meeting the team",
            "She will be on holiday in Dublin"
          ],
          "a": 0,
          "por": "I'm going to visit Mysore on Saturday. I already bought the train tickets."
        },
        {
          "q": "When will Mia do the call?",
          "op": [
            "On Friday at four",
            "On Saturday at eight",
            "On Monday at ten"
          ],
          "a": 0,
          "por": "I'll do it on Friday at four."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about the week. Hear it, then say it.",
      "frases": [
        {
          "t": "I'll send the report by Friday afternoon.",
          "img": "https://wolf-labs.pages.dev/p/368eac4847ed/do-the-needful/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm going to visit Mysore on Saturday.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "We're meeting the client on Monday at ten.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "will, going to, at / on / by. Four quick ones.",
      "regra": "<b>I'll</b> (now) · <b>I'm going to</b> (plan) · <b>I'm meeting</b> (arranged) · <b>at</b> a time · <b>on</b> a day · <b>by</b> = no later than.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The report has to be ready by Friday.",
          "aceita": [],
          "d": "Hint: <b>by</b> = no later than that day."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will to send it now.",
          "r": "I will send it now.",
          "aceita": [
            "I'll send it now."
          ],
          "d": "Hint: after <b>will</b> comes the plain verb, never <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The meeting is in Monday at ten.",
          "r": "The meeting is on Monday at ten.",
          "aceita": [],
          "d": "Hint: days take <b>on</b>: <i>on Monday</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'll finish the work until Friday.",
          "r": "I'll finish the work by Friday.",
          "aceita": [],
          "d": "Hint: a deadline (no later than) is <b>by</b>, not <i>until</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/368eac4847ed/do-the-needful/img/live-capa.webp",
      "leg": "A desk with two clocks, two time zones",
      "pede": "Look at the picture: a desk with two clocks, two time zones. Write 2 or 3 sentences about next week: a meeting, a plan, a deadline. Use <b>I'm meeting</b>, <b>I'm going to</b> or <b>I'll</b>, and <b>on / at / by</b>.",
      "ph": "On Monday at … I'm … I'll … by …",
      "ex": "On Monday at ten I'm meeting my team. I'm going to visit my parents on Saturday. I'll send the report by Friday."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are you doing this weekend? Say when.",
          "ph": "On … I'm …",
          "ex": "I'm visiting my cousin on Saturday afternoon."
        },
        {
          "q": "What do you have to finish by the end of the week?",
          "ph": "I have to finish … by …",
          "ex": "I have to finish a project by Friday. I'll send it on Thursday evening."
        }
      ]
    }
  }
};
