/* SAY THAT AGAIN · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: Sorry? / Could you say that again / Do you mean / What does ... mean. A2: dicas em portugues so nas notas (d). So imagens live-* escuras */
window.HW2 = {
  "id": "say-that-again",
  "titulo": "Say That Again",
  "nivel": "A2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/510e14e195e0/say-that-again/img/live-radio.webp",
  "alvo": "asking for repetition and clarification: Sorry? · Could you say that again? · Could you speak more slowly? · Do you mean ...? · How do you spell that? · What does ... mean?; never just What? or Repeat",
  "abrir": "What do you do when you don't understand someone?",
  "fecho": "<b>Sorry, could you say that again?</b> · <b>Could you speak more slowly, please?</b> · <b>Do you mean ...?</b> · <b>How do you spell that?</b> · <b>What does ... mean?</b> Never just <i>What?</i> or <i>Repeat.</i>",
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
      "sub": "Mia arrives at a train station. A man tells her where to go. A new scene, about 45 seconds.",
      "img": "https://wolf-labs.pages.dev/p/510e14e195e0/say-that-again/img/live-plataforma.webp",
      "leg": "A train at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Excuse me, miss. Your train leaves from platform nine, in ten minutes."
        },
        {
          "quem": "mia",
          "t": "Sorry, could you say that again?"
        },
        {
          "quem": "leo",
          "t": "Platform nine. The train to Bristol."
        },
        {
          "quem": "mia",
          "t": "Do you mean platform five?"
        },
        {
          "quem": "leo",
          "t": "No, nine. N, I, N, E."
        },
        {
          "quem": "mia",
          "t": "Thank you. Could you speak more slowly, please? How do I get there?"
        },
        {
          "quem": "leo",
          "t": "Go straight. Then take the stairs on the left."
        },
        {
          "quem": "mia",
          "t": "Sorry, what does stairs mean?"
        },
        {
          "quem": "leo",
          "t": "Stairs. Steps. Up, to the next floor."
        },
        {
          "quem": "mia",
          "t": "Ah, I see. Thank you very much!"
        }
      ],
      "perguntas": [
        {
          "q": "Which platform is it?",
          "op": [
            "Nine",
            "Five",
            "Ten"
          ],
          "a": 0,
          "por": "Platform nine. N, I, N, E."
        },
        {
          "q": "What does Mia do when she doesn't know a word?",
          "op": [
            "She asks what it means",
            "She says yes and smiles",
            "She walks away"
          ],
          "a": 0,
          "por": "Sorry, what does stairs mean?"
        },
        {
          "q": "Where does Mia go after the stairs?",
          "op": [
            "To the next floor",
            "To the street",
            "To the bus"
          ],
          "a": 0,
          "por": "Up, to the next floor."
        }
      ]
    },
    "out": {
      "sub": "Three polite ways out. Hear it, then say it.",
      "frases": [
        {
          "t": "Sorry, could you say that again, please?",
          "img": "https://wolf-labs.pages.dev/p/510e14e195e0/say-that-again/img/live-radio.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Could you speak more slowly, please?",
          "img": "https://wolf-labs.pages.dev/p/510e14e195e0/say-that-again/img/live-plataforma.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Sorry, do you mean platform nine?",
          "img": "https://wolf-labs.pages.dev/p/510e14e195e0/say-that-again/img/live-plataforma.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Be polite and keep them talking. Four quick ones.",
      "regra": "<b>Sorry, could you say that again?</b> · <b>Do you mean ...?</b> · <b>How do you spell that?</b> · <b>What does ... mean?</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Sorry, could you say that again, please?",
          "aceita": [],
          "d": "Dica: <b>Could you</b> + verbo limpo: <b>say that again</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: make it polite.",
          "mostra": "What? Repeat.",
          "r": "Sorry, could you say that again?",
          "aceita": [
            "Sorry, can you say that again?",
            "Could you say that again?"
          ],
          "d": "Dica: <b>What?</b> soa seco. Use <b>Could you say that again?</b>"
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could you speaking more slowly?",
          "r": "Could you speak more slowly?",
          "aceita": [
            "Could you speak more slowly, please?"
          ],
          "d": "Dica: depois de <b>Could you</b>, o verbo fica limpo: <b>speak</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: ask about a word.",
          "mostra": "What means delayed?",
          "r": "What does delayed mean?",
          "aceita": [
            "Sorry, what does delayed mean?"
          ],
          "d": "Dica: pergunta com <b>does</b>, e <b>mean</b> sem -s."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/510e14e195e0/say-that-again/img/live-radio.webp",
      "leg": "An old radio with static",
      "pede": "Look at the picture: an old radio full of static. Somebody speaks fast and you can't hear. Write 2 or 3 sentences: what you say to ask for help. Use <b>Could you ...?</b> or <b>Do you mean ...?</b>",
      "ph": "Sorry, could you …",
      "ex": "Sorry, could you say that again, please? Could you speak more slowly? Do you mean room four?"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Somebody speaks too fast. What do you say?",
          "ph": "Sorry, could you …",
          "ex": "Sorry, could you speak more slowly, please?"
        },
        {
          "q": "You hear a new word. How do you ask about it?",
          "ph": "Sorry, what does … mean?",
          "ex": "Sorry, what does allergy mean?"
        }
      ]
    }
  }
};
