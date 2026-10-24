/* WHOSE SUITCASE? · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: whose + 's + his / hers / ours / theirs. A1: dicas em português só nas notas (d). Alvo é possessivo: HW2_ARTIGO_CONTA ligado. */
window.HW2_ARTIGO_CONTA = true;
window.HW2 = {
  "id": "whose-suitcase",
  "titulo": "Whose Suitcase?",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/ee64a6952c76/whose-suitcase/img/live-capa.webp",
  "alvo": "whose + owner: 's (Tom's bag, the twins' bags), his / hers / ours / theirs / mine / yours with no thing after them; Whose is it? It's hers.",
  "abrir": "Whose phone is on your table right now?",
  "fecho": "<b>Whose</b> asks for the owner: <i>Whose bag is this?</i> The owner can be a name with <b>'s</b>: <i>Tom's bag</i>. Then use <b>his / hers / ours / theirs</b> alone: <i>It's his. They're theirs.</i> Look at the owner, not the color.",
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
      "sub": "Mia and Leo at the lost and found. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/ee64a6952c76/whose-suitcase/img/live-balcao.webp",
      "leg": "The lost and found room",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, look at this red suitcase. Whose is it?"
        },
        {
          "quem": "mia",
          "t": "I don't know. Is it yours?"
        },
        {
          "quem": "leo",
          "t": "No, it isn't mine. Mine is blue."
        },
        {
          "quem": "mia",
          "t": "Look, there is a name tag. It says Tom."
        },
        {
          "quem": "leo",
          "t": "So it's Tom's suitcase. It's his. Whose are these two small bags?"
        },
        {
          "quem": "mia",
          "t": "They're the twins'. They're theirs."
        },
        {
          "quem": "leo",
          "t": "And whose is this big coat?"
        },
        {
          "quem": "mia",
          "t": "It's Rosa's. It's hers. She is at the desk now."
        },
        {
          "quem": "leo",
          "t": "Great. Tom's suitcase, the twins' bags, and Rosa's coat. Three owners!"
        },
        {
          "quem": "mia",
          "t": "And this bag is ours. Our lunch is inside!"
        }
      ],
      "perguntas": [
        {
          "q": "Whose is the red suitcase?",
          "op": [
            "Tom's",
            "Leo's",
            "Mia's"
          ],
          "a": 0,
          "por": "It says Tom. So it's Tom's suitcase. It's his."
        },
        {
          "q": "Whose are the two small bags?",
          "op": [
            "The twins'",
            "Rosa's",
            "Tom's"
          ],
          "a": 0,
          "por": "They're the twins'. They're theirs."
        }
      ]
    },
    "out": {
      "sub": "Three sentences about owners. Hear it, then say it.",
      "frases": [
        {
          "t": "This red suitcase is Tom's. It's his.",
          "img": "https://wolf-labs.pages.dev/p/ee64a6952c76/whose-suitcase/img/live-esteira.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "The small bags are the twins'. They're theirs.",
          "img": "https://wolf-labs.pages.dev/p/ee64a6952c76/whose-suitcase/img/live-mala.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Whose coat is this? It's Rosa's. It's hers.",
          "img": "https://wolf-labs.pages.dev/p/ee64a6952c76/whose-suitcase/img/live-balcao.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "His, hers or theirs? Four quick ones.",
      "regra": "<b>Whose</b> = the owner · <b>Tom's</b> bag · <b>his / hers / ours / theirs</b> + no thing after · look at the owner.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Whose red suitcase is this?",
          "aceita": [],
          "d": "Dica: <b>Whose</b> pergunta de quem é; depois vem a coisa."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the owner is Tom.",
          "mostra": "The bag is Tom's. It's hers.",
          "r": "The bag is Tom's. It's his.",
          "aceita": [],
          "d": "Dica: olhe para o dono: Tom é homem, então <b>his</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: no thing after it.",
          "mostra": "The coat is Rosa's. It's her.",
          "r": "The coat is Rosa's. It's hers.",
          "aceita": [],
          "d": "Dica: sem coisa depois, é <b>hers</b> (não 'her')."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: two owners, one thing.",
          "mostra": "It's Mia's and Sam's bag.",
          "r": "It's Mia and Sam's bag.",
          "aceita": [],
          "d": "Dica: dois donos, uma coisa: um <b>'s</b> só, no fim."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/ee64a6952c76/whose-suitcase/img/live-mala.webp",
      "leg": "An open suitcase",
      "pede": "Look at the picture: an open suitcase. Write 2 or 3 sentences: whose it is and what is inside. Use <b>'s</b>, <b>his / hers</b> or <b>mine</b>.",
      "ph": "The suitcase is …'s. It's …",
      "ex": "The suitcase is Tom's. It's his. The blue sweater is mine."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Whose phone do you use? Is it only yours?",
          "ph": "It's mine. / It's my …'s.",
          "ex": "It's mine. Only I use it."
        },
        {
          "q": "What do you share at home? Whose is it?",
          "ph": "We share … It's ours.",
          "ex": "We share the TV. It's ours."
        }
      ]
    }
  }
};
