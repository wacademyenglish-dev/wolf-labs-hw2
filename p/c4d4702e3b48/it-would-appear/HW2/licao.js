/* IT WOULD APPEAR THAT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: careful written English: it would appear that / appear to. B2: nenhum português. */
window.HW2 = {
  "id": "it-would-appear",
  "titulo": "It Would Appear That",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/c4d4702e3b48/it-would-appear/img/live-capa.webp",
  "alvo": "careful written English: it would appear that / appear to; may have + past participle (may have been caused by); suggest and be linked to instead of prove and cause; the empty IT stays, never 'would appear that' alone",
  "abrir": "Where do you read the news?",
  "fecho": "A careful writer says less than the proof. <b>It would appear that</b> + clause · <b>appears to</b> + verb · <b>may have</b> + past participle (<i>may have been caused by</i>) · <b>suggests</b>, not <i>proves</i> · <b>is linked to</b>, not <i>causes</i>.",
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
      "sub": "Mia and Leo at the night desk. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/c4d4702e3b48/it-would-appear/img/live-capa.webp",
      "leg": "A newsroom at night, lamps on the desks",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, your headline says coffee makes you live longer. Is that proven?"
        },
        {
          "quem": "leo",
          "t": "Well, the study found that coffee drinkers lived longer."
        },
        {
          "quem": "mia",
          "t": "It found a link, yes. Did it show that coffee was the cause?"
        },
        {
          "quem": "leo",
          "t": "No. It would appear that coffee drinkers are healthier in other ways too."
        },
        {
          "quem": "mia",
          "t": "Exactly. So write that coffee is linked to a longer life. Not causes."
        },
        {
          "quem": "leo",
          "t": "And the second paragraph? Scientists prove that three cups are best."
        },
        {
          "quem": "mia",
          "t": "They only suggest it. Say the results appear to suggest that three cups may be best."
        },
        {
          "quem": "leo",
          "t": "That is a lot of careful words!"
        },
        {
          "quem": "mia",
          "t": "That is the job. Yesterday the delay at the airport may have been caused by the storm, and we printed that it was caused by the storm."
        },
        {
          "quem": "leo",
          "t": "OK. A careful headline is coming up."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say about the study?",
          "op": [
            "It found a link, not a cause",
            "It proved that coffee works",
            "It was never published"
          ],
          "a": 0,
          "por": "It found a link, yes. Did it show that coffee was the cause?"
        },
        {
          "q": "Which words does Mia want instead of causes?",
          "op": [
            "Is linked to",
            "Proves",
            "Makes"
          ],
          "a": 0,
          "por": "Write that coffee is linked to a longer life."
        },
        {
          "q": "What did the paper print too strongly yesterday?",
          "op": [
            "That the storm caused the delay",
            "A wrong date",
            "A wrong name"
          ],
          "a": 0,
          "por": "We printed that it was caused by the storm."
        }
      ]
    },
    "out": {
      "sub": "Three careful sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "The new press appears to be running faster than before.",
          "img": "https://wolf-labs.pages.dev/p/c4d4702e3b48/it-would-appear/img/live-prensa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The old files may have been moved last year.",
          "img": "https://wolf-labs.pages.dev/p/c4d4702e3b48/it-would-appear/img/live-arquivo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "It would appear that it has been raining all night.",
          "img": "https://wolf-labs.pages.dev/p/c4d4702e3b48/it-would-appear/img/live-janela.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "appear to, it would appear that, may have + participle. Four quick ones.",
      "regra": "<b>It would appear that</b> + clause · <b>appears to</b> + verb · <b>may have been</b> + participle · <b>suggests</b>, not <i>proves</i>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "The study appears to suggest a link between sleep and memory.",
          "aceita": [],
          "d": "Hint: <b>appears to</b> + verb, a careful way to report."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: be more careful.",
          "mostra": "The data proves that sleep helps memory.",
          "r": "The data suggests that sleep helps memory.",
          "aceita": [
            "The data suggest that sleep helps memory."
          ],
          "d": "Hint: one data set rarely <i>proves</i>. It <b>suggests</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Would appear that the plan failed.",
          "r": "It would appear that the plan failed.",
          "aceita": [],
          "d": "Hint: the empty <b>It</b> must stay."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "It may have caused by rain.",
          "r": "It may have been caused by rain.",
          "aceita": [],
          "d": "Hint: passive after <b>may have</b>: <b>been</b> + participle."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/c4d4702e3b48/it-would-appear/img/live-mesa.webp",
      "leg": "A blank sheet of paper and a pencil under a lamp",
      "pede": "Look at the picture: a blank sheet and a pencil under a lamp. Write 2 or 3 careful sentences about something in your city or work that you are not sure about. Use <b>It would appear that</b>, <b>appears to</b> and <b>may have</b> + participle.",
      "ph": "It would appear that …",
      "ex": "It would appear that the new bus line is popular. The old bakery appears to be closed. It may have been sold last year."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of something people say about your city. Is it proven? Answer with a careful tool.",
          "ph": "It would appear that …",
          "ex": "It would appear that my city is cheaper than the capital, but I have not checked."
        },
        {
          "q": "What may have changed your life in the last ten years? Use may have + participle.",
          "ph": "My life may have …",
          "ex": "My life may have changed because I moved to a bigger city."
        }
      ]
    }
  }
};
