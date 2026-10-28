/* FINAL_V3_FINAL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: will have + participle, by x until, once + present. B1: nenhum português. Só live-conversa (escura). */
window.HW2 = {
  "id": "design-final-v3-final",
  "titulo": "Final_v3_FINAL",
  "nivel": "B1",
  "minutos": 10,
  "capa": "../img/live-conversa.webp",
  "alvo": "revisions and deadlines: will have + past participle (I'll have finished it by Friday) · by = no later than · until = all the time up to · once + present (once you sign off, never once you will) · a round of revisions, just a heads-up",
  "abrir": "When did you last send a file to a client or a teacher? Was it on time?",
  "fecho": "<b>By</b> = no later than (<i>send it by Friday</i>). <b>Until</b> = all the time up to (<i>she is away until Wednesday</i>). <b>I'll have finished</b> = done before that time: <b>will have</b> + third form. <b>Once</b> + present: <i>Once you sign off, I'll send the files.</i> A <b>round of revisions</b> is a planned set of changes; <b>just a heads-up</b> warns about a risk.",
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
      "sub": "Mia and Leo in a design studio on Thursday morning. A new scene, about one minute.",
      "img": "../img/live-conversa.webp",
      "leg": "The project inbox",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, the printer needs the poster files by Monday morning. Where are we with Final_v3?"
        },
        {
          "quem": "leo",
          "t": "I'll have fixed the date size and added the sponsor logos by this evening."
        },
        {
          "quem": "mia",
          "t": "Good. Has the client signed off on the colors?"
        },
        {
          "quem": "leo",
          "t": "Not yet. She is away until Wednesday, so she can't reply before then."
        },
        {
          "quem": "mia",
          "t": "So she will check on Thursday and Friday. Is this still the second round of revisions?"
        },
        {
          "quem": "leo",
          "t": "Yes, the second and final one. Any change after Friday might delay the printing."
        },
        {
          "quem": "mia",
          "t": "Then I'll send her a heads-up today. Could you export the PDF with bleed marks by noon?"
        },
        {
          "quem": "leo",
          "t": "Sure. By noon I'll have exported it, and I'll keep the layered file until the printer confirms."
        },
        {
          "quem": "mia",
          "t": "Perfect. Nothing goes out until she signs off."
        }
      ],
      "perguntas": [
        {
          "q": "What will Leo have done by this evening?",
          "op": [
            "Fixed the date and added the logos",
            "Sent the files to the printer",
            "Changed all the colors"
          ],
          "a": 0,
          "por": "I'll have fixed the date size and added the sponsor logos by this evening."
        },
        {
          "q": "Why can't the client reply before Wednesday?",
          "op": [
            "She is away until Wednesday",
            "She hasn't opened the file",
            "She doesn't like version 3"
          ],
          "a": 0,
          "por": "She is away until Wednesday, so she can't reply before then."
        },
        {
          "q": "What might happen if a change comes after Friday?",
          "op": [
            "It might delay the printing",
            "The printer will cancel",
            "Leo will have extra time"
          ],
          "a": 0,
          "por": "Any change after Friday might delay the printing."
        }
      ]
    },
    "out": {
      "sub": "Three sentences from a project email. Hear it, then say it.",
      "frases": [
        {
          "t": "I'll have finished the layout by Thursday evening.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The client is away until Wednesday, so she will check it on Thursday.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Just a heads-up: any change after Friday might delay the printing.",
          "img": "../img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "By, until and will have. Four quick ones.",
      "regra": "<b>by</b> = deadline · <b>until</b> = up to a time · <b>will have</b> + third form · <b>once</b> + present, never <i>once you will</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She is away until Wednesday, so she will check on Friday.",
          "aceita": [],
          "d": "Hint: <b>until</b> = she is away all the time up to Wednesday."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I will have finish the logo by Monday.",
          "r": "I will have finished the logo by Monday.",
          "aceita": [
            "I'll have finished the logo by Monday."
          ],
          "d": "Hint: <b>will have</b> is followed by the third form: <i>finished</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Please send me your feedback until Friday.",
          "r": "Please send me your feedback by Friday.",
          "aceita": [],
          "d": "Hint: a deadline needs <b>by</b> (no later than Friday), not <i>until</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "Once you will sign off, I will send the files.",
          "r": "Once you sign off, I will send the files.",
          "aceita": [
            "Once you sign off, I'll send the files."
          ],
          "d": "Hint: after <b>once</b>, use the present: <i>once you sign off</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "../img/live-conversa.webp",
      "leg": "An hourglass on a stack of project papers",
      "pede": "Look at the picture: an hourglass on a pile of project papers. Write a short status update for a client. Say what you <b>will have finished by</b> a day, what you need from them <b>by</b> a day, and one risk (<b>just a heads-up</b>).",
      "ph": "I'll have finished … by …",
      "ex": "I'll have finished the mobile version by Wednesday. Could you send me the photos by Tuesday? Just a heads-up: if they arrive late, it might delay the launch."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What will you have finished by the end of this week?",
          "ph": "By Friday, I'll have …",
          "ex": "By Friday, I'll have sent my portfolio to two studios."
        },
        {
          "q": "Think of a project of yours. What do you need from someone else, and by when?",
          "ph": "I need … by …",
          "ex": "I need the product photos from my client by Tuesday."
        }
      ]
    }
  }
};
