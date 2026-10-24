/* IF SO, IF NOT · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: elipse: if so / if not / I'm afraid not / not that I know of. C1: nenhum português. */
window.HW2 = {
  "id": "if-so-if-not",
  "titulo": "If So, If Not",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/07c8e836394f/if-so-if-not/img/live-conversa.webp",
  "alvo": "ellipsis and short replies: if so / if not / if anything / if necessary / if possible; I'm afraid so / not; I don't think so; not that I know of; so I gather; I suppose so; I'd rather not; I don't see why not; never if yes, I think no, I'm afraid no",
  "abrir": "Think of a trip you are planning. What do you still need to find out?",
  "fecho": "Say more with fewer words: <b>If so</b> (if the answer is yes) and <b>If not</b>, never <i>if yes</i>. Short, polite answers: <b>I'm afraid not · I don't think so · I suppose so · I'd rather not</b>, never <i>I think no</i> or <i>I'm afraid no</i>. <b>Not that I know of</b> is a soft no. <b>If anything</b> means the opposite is closer to the truth.",
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
      "sub": "Mia and Leo plan a weekend by a lake. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/07c8e836394f/if-so-if-not/img/live-conversa.webp",
      "leg": "A wooden pier in the dark",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, did you hear back from the cabin owner? Is it free the weekend of the tenth?"
        },
        {
          "quem": "leo",
          "t": "It is. And dogs are welcome, if you can keep her off the sofa."
        },
        {
          "quem": "mia",
          "t": "I'll try. Is there a shop nearby? If not, we'll need to stock up before we go."
        },
        {
          "quem": "leo",
          "t": "I'm afraid not. The nearest one is a twenty-minute drive."
        },
        {
          "quem": "mia",
          "t": "Any chance of rain? I'd rather not spend two days stuck inside."
        },
        {
          "quem": "leo",
          "t": "Not that I know of. If anything, it's meant to be unusually warm."
        },
        {
          "quem": "mia",
          "t": "So I gather. Everyone at work says the lake is lovely this time of year."
        },
        {
          "quem": "leo",
          "t": "Can we arrive late on Friday? If so, I'll ask him to leave the key out."
        },
        {
          "quem": "mia",
          "t": "I suppose so. Though, if possible, I'd like to get there before dark."
        },
        {
          "quem": "leo",
          "t": "I don't see why not. I'll leave work early, if necessary."
        }
      ],
      "perguntas": [
        {
          "q": "Is there a shop near the cabin?",
          "op": [
            "No, the nearest one is a twenty-minute drive away",
            "Yes, it is next door",
            "Yes, but it closes early"
          ],
          "a": 0,
          "por": "I'm afraid not. The nearest one is a twenty-minute drive."
        },
        {
          "q": "What will the weather probably be like?",
          "op": [
            "Unusually warm",
            "Rainy all weekend",
            "Cold at night"
          ],
          "a": 0,
          "por": "If anything, it's meant to be unusually warm."
        },
        {
          "q": "What would Mia like, if possible?",
          "op": [
            "To arrive before dark",
            "To leave work early",
            "To bring the dog"
          ],
          "a": 0,
          "por": "If possible, I'd like to get there before dark."
        }
      ]
    },
    "out": {
      "sub": "Three short, smart replies. Hear it, then say it.",
      "frases": [
        {
          "t": "Is there a shop nearby? If not, we'll need to stock up.",
          "img": "https://wolf-labs.pages.dev/p/07c8e836394f/if-so-if-not/img/live-conversa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Not that I know of. If anything, it's meant to be warm.",
          "img": "https://wolf-labs.pages.dev/p/07c8e836394f/if-so-if-not/img/live-conversa.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Can we arrive late? If so, I'll ask him to leave the key out.",
          "img": "https://wolf-labs.pages.dev/p/07c8e836394f/if-so-if-not/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "If so, if not, and the short answers. Four quick ones.",
      "regra": "<b>If so / If not</b> (never if yes) · <b>I don't think so · I'm afraid not</b> · <b>Not that I know of</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "If not, we will need to stock up on food.",
          "aceita": [],
          "d": "Hint: <b>If not</b> = if the answer is no."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one phrase is not English.",
          "mostra": "Is it free? If yes, we'll book it.",
          "r": "Is it free? If so, we'll book it.",
          "aceita": [
            "Is it free? If so, we will book it."
          ],
          "d": "Hint: to refer back to a yes, natives say <b>If so</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the short answer is wrong.",
          "mostra": "Will it rain? I think no.",
          "r": "Will it rain? I don't think so.",
          "aceita": [
            "Will it rain? I think not."
          ],
          "d": "Hint: after <b>think</b>, the short negative is <b>so</b> or <b>not</b>, never <i>no</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the soft no is wrong.",
          "mostra": "Any problems? No that I know of.",
          "r": "Any problems? Not that I know of.",
          "aceita": [
            "Not that I know of."
          ],
          "d": "Hint: the fixed phrase starts with <b>Not</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/07c8e836394f/if-so-if-not/img/live-conversa.webp",
      "leg": "A pier leading into the dark",
      "pede": "Look at the picture: a wooden pier by a lake at night. Write 2 or 3 sentences about a weekend you could spend there. Use <b>If so</b>, <b>If not</b>, <b>If possible</b>, <b>If necessary</b> or <b>I'm afraid not</b>.",
      "ph": "Is it free? If so, …",
      "ex": "Is the cabin free? If so, I'll book it today. If not, we'll look for another one, if possible by the water."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Are you going to travel this year? Answer short, then add one sentence.",
          "ph": "I hope so. If so, … / I'm afraid not. If not, …",
          "ex": "I hope so. If so, I'd love to see Chile. If not, I'll save more money."
        },
        {
          "q": "Can you help me move house on Sunday? Answer short, then give a reason.",
          "ph": "I suppose so, if … / I'd rather not, …",
          "ex": "I suppose so, if you buy the pizza. I don't see why not."
        }
      ]
    }
  }
};
