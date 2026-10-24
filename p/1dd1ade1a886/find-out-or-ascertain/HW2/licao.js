/* FIND OUT OR ASCERTAIN? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: phrasal verbs x verbos formais. C1: nenhum português. */
window.HW2 = {
  "id": "find-out-or-ascertain",
  "titulo": "Find Out or Ascertain?",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/1dd1ade1a886/find-out-or-ascertain/img/live-conversa.webp",
  "alvo": "phrasal verbs for speech and one-word verbs for formal writing: find out / ascertain, look into / investigate, set up / establish, put up with / tolerate, come up with / devise, go up / increase, turn down / reject; keep the particle (put up with, come up with); never a formal verb in casual speech",
  "abrir": "What problem at home or at work have you had to look into recently?",
  "fecho": "People get phrasal verbs, documents get one-word verbs: <b>find out / ascertain · look into / investigate · put up with / tolerate · come up with / devise · go up / increase</b>. Keep the whole phrasal verb: <i>put up <b>with</b></i>, <i>come up <b>with</b></i>. And a formal verb in casual speech sounds robotic: <i>I'll ascertain the time of the film</i> is a joke.",
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
  "rate": "-8%",
  "rodadas": {
    "listen": {
      "sub": "Mia manages a hotel, and Leo writes the report. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/1dd1ade1a886/find-out-or-ascertain/img/live-conversa.webp",
      "leg": "A hotel library corridor, late at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, guests can't put up with the noise anymore. Can you look into it today?"
        },
        {
          "quem": "leo",
          "t": "Sure. I'll find out where it's coming from. I'm guessing the lift."
        },
        {
          "quem": "mia",
          "t": "Good. And let's come up with a plan before prices go up in June."
        },
        {
          "quem": "leo",
          "t": "Understood. I'll write it up for the owner this evening, so I have to sound official."
        },
        {
          "quem": "mia",
          "t": "Right. Then you won't write look into. You'll write that management will investigate the matter."
        },
        {
          "quem": "leo",
          "t": "And find out becomes ascertain the cause. It feels a bit stiff, though."
        },
        {
          "quem": "mia",
          "t": "It is stiff. That's the point. But never say it at the bar. I'll ascertain the time of the film is a joke."
        },
        {
          "quem": "leo",
          "t": "Fair enough. So phrasal verbs for people, one-word verbs for documents."
        },
        {
          "quem": "mia",
          "t": "Exactly. Now go and find out about that lift."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia ask Leo to do?",
          "op": [
            "Look into the noise complaints",
            "Raise the prices",
            "Write to the guests"
          ],
          "a": 0,
          "por": "Can you look into it today?"
        },
        {
          "q": "How will Leo say look into it in the report?",
          "op": [
            "Management will investigate the matter",
            "Management will look into the stuff",
            "We will find out about it"
          ],
          "a": 0,
          "por": "You'll write that management will investigate the matter."
        },
        {
          "q": "Why is I'll ascertain the time of the film a joke?",
          "op": [
            "It is far too formal for casual speech",
            "It is grammatically wrong",
            "Nobody checks film times"
          ],
          "a": 0,
          "por": "But never say it at the bar."
        }
      ]
    },
    "out": {
      "sub": "Two worlds, same meaning. Hear it, then say it.",
      "frases": [
        {
          "t": "Guests can't put up with the noise anymore.",
          "img": "https://wolf-labs.pages.dev/p/1dd1ade1a886/find-out-or-ascertain/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'll find out where it's coming from.",
          "img": "https://wolf-labs.pages.dev/p/1dd1ade1a886/find-out-or-ascertain/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Management will investigate the matter in order to ascertain its cause.",
          "img": "https://wolf-labs.pages.dev/p/1dd1ade1a886/find-out-or-ascertain/img/live-conversa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Speech or report? Four quick ones.",
      "regra": "<b>find out · look into · put up with</b> for people · <b>ascertain · investigate · tolerate</b> for documents · keep the particle: <b>put up with</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Dan will look into the problem this afternoon.",
          "aceita": [],
          "d": "Hint: <b>look into</b> is the spoken form of <i>investigate</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: a word is missing.",
          "mostra": "I can't put up the noise.",
          "r": "I can't put up with the noise.",
          "aceita": [
            "I cannot put up with the noise."
          ],
          "d": "Hint: the phrasal verb has three parts: <b>put up with</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: you are talking to a friend.",
          "mostra": "I will ascertain the time of the film.",
          "r": "I'll find out the time of the film.",
          "aceita": [
            "I will find out the time of the film.",
            "I'll find out what time the film is.",
            "I will find out what time the film is."
          ],
          "d": "Hint: in casual speech use the phrasal verb: <b>find out</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: this is for a formal report.",
          "mostra": "Prices will go up in June.",
          "r": "Prices will increase in June.",
          "aceita": [
            "Prices will rise in June."
          ],
          "d": "Hint: reports prefer a one-word verb: <b>increase</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/1dd1ade1a886/find-out-or-ascertain/img/live-conversa.webp",
      "leg": "A dark hotel library corridor",
      "pede": "Look at the picture: a dark library corridor in a hotel. Write 2 or 3 sentences: say a problem to a colleague with a phrasal verb, then write it as a formal report line with a one-word verb. Use <b>look into / investigate</b>, <b>find out / ascertain</b> or <b>put up with / tolerate</b>.",
      "ph": "Let's look into … / Management will investigate …",
      "ex": "Guests can't put up with the noise, so let's look into it. In the report: Management will investigate the matter and ascertain its cause."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What can't you put up with? Say it to a friend.",
          "ph": "I can't put up with …",
          "ex": "I can't put up with people who talk loudly on the bus."
        },
        {
          "q": "What did you find out recently? Say it naturally.",
          "ph": "I found out that …",
          "ex": "I found out that my neighbour is a famous chef."
        }
      ]
    }
  }
};
