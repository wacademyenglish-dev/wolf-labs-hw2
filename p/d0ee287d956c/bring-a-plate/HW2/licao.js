/* BRING A PLATE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: verbo + -ing ou to; preposicao + -ing. B1: nenhum portugues. Sem imagens (todas claras). */
window.HW2 = {
  "id": "bring-a-plate",
  "titulo": "Bring a Plate",
  "nivel": "B1",
  "minutos": 10,
  "alvo": "verb + -ing or + to: enjoy / mind / avoid + -ing; want / would love / need / decide + to; preposition + -ing (Thanks for inviting me; I'm looking forward to meeting them); never enjoy to cook, never Thanks for invite me, never looking forward to see",
  "abrir": "What do you usually bring when you are invited to a party?",
  "fecho": "<b>enjoy / mind / finish + -ing</b>: <i>I enjoy cooking.</i> <b>want / would love / need + to</b>: <i>I'd love to come.</i> After a preposition, always <b>-ing</b>: <i>Thanks for inviting me. I'm looking forward to meeting them.</i> Never <i>Thanks for invite me</i>.",
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
      "sub": "Mia and Leo at a barbecue by the sea. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo! Come in. Thanks for coming."
        },
        {
          "quem": "leo",
          "t": "Thanks for inviting me. I brought a plate, like you asked."
        },
        {
          "quem": "mia",
          "t": "Ha! It's empty. In New Zealand, bring a plate means bring food to share."
        },
        {
          "quem": "leo",
          "t": "Oh no! I didn't know that. I'm so sorry."
        },
        {
          "quem": "mia",
          "t": "Don't worry. Do you enjoy cooking? I'd love to try something of yours one day."
        },
        {
          "quem": "leo",
          "t": "I do, actually. I'd like to run to the shop and buy some salad. Is that OK?"
        },
        {
          "quem": "mia",
          "t": "You don't need to. We have lots of food. Do you mind helping me with the table?"
        },
        {
          "quem": "leo",
          "t": "Not at all. I'm happy to help."
        },
        {
          "quem": "mia",
          "t": "Great. And next time, remember to bring something to eat!"
        },
        {
          "quem": "leo",
          "t": "I will. I'm looking forward to coming again."
        }
      ],
      "perguntas": [
        {
          "q": "What was wrong with Leo's plate?",
          "op": [
            "It was empty",
            "It was dirty",
            "It was too big"
          ],
          "a": 0,
          "por": "Ha! It's empty."
        },
        {
          "q": "What does bring a plate mean in New Zealand?",
          "op": [
            "Bring food to share",
            "Bring your own dishes",
            "Bring some money"
          ],
          "a": 0,
          "por": "In New Zealand, bring a plate means bring food to share."
        },
        {
          "q": "What does Mia ask Leo to do?",
          "op": [
            "Help with the table",
            "Cook dinner",
            "Go home"
          ],
          "a": 0,
          "por": "Do you mind helping me with the table?"
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a party. Hear it, then say it.",
      "frases": [
        {
          "t": "Thanks for inviting me to the barbecue.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I enjoy cooking for my friends.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "I'm looking forward to meeting your family.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "-ing or to? Four quick ones.",
      "regra": "<b>enjoy / mind + -ing</b> · <b>want / would love + to</b> · after a preposition: <b>-ing</b> (<i>thanks for inviting</i>, <i>looking forward to seeing</i>).",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "We are looking forward to seeing you on Sunday.",
          "aceita": [],
          "d": "Hint: <b>looking forward to</b> + verb-ing."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Thanks for invite me.",
          "r": "Thanks for inviting me.",
          "aceita": [],
          "d": "Hint: after a preposition (<i>for</i>), use the <b>-ing</b> form."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I enjoy to cook on Sundays.",
          "r": "I enjoy cooking on Sundays.",
          "aceita": [],
          "d": "Hint: <b>enjoy</b> is followed by <b>-ing</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I'm looking forward to see you.",
          "r": "I'm looking forward to seeing you.",
          "aceita": [
            "I am looking forward to seeing you."
          ],
          "d": "Hint: here <i>to</i> is a preposition, so <b>-ing</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Imagine a neighbour invites you to a barbecue. Write 2 or 3 sentences: thank them, say what you enjoy doing, and what you are looking forward to. Use <b>-ing</b> and <b>to</b> correctly.",
      "ph": "Thanks for inviting me. I enjoy … I'm looking forward to …",
      "ex": "Thanks for inviting me! I enjoy cooking, so I'd love to bring a salad. I'm looking forward to meeting your family."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you enjoy doing on weekends?",
          "ph": "I enjoy …",
          "ex": "I enjoy walking by the beach and reading."
        },
        {
          "q": "What are you looking forward to this month?",
          "ph": "I'm looking forward to …",
          "ex": "I'm looking forward to seeing my family in December."
        }
      ]
    }
  }
};
