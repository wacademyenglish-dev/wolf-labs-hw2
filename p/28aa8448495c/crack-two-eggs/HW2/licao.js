/* CRACK TWO EGGS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: imperativo: verbo sozinho, Don't + verbo. A1: dicas em português só nas notas (d). Só live-* escuras (sem faca nem capa clara). */
window.HW2 = {
  "id": "crack-two-eggs",
  "titulo": "Crack Two Eggs",
  "nivel": "A1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/28aa8448495c/crack-two-eggs/img/live-panquecas.webp",
  "alvo": "imperative for instructions: the verb alone (Crack two eggs.) · Don't + verb (Don't touch it.) · first, then, next, finally · please; not You crack, not Cracking, not To crack, not No touch",
  "abrir": "What do you eat for breakfast? How do you make it?",
  "fecho": "An order is the <b>verb alone</b>: <i>Crack two eggs. Pour the milk.</i> No <i>you</i>, no <i>-ing</i>, no <i>to</i>, no <i>-s</i>. A warning: <b>Don't</b> + verb: <i>Don't touch the pan!</i> Use <b>first, then, next, finally</b> to put the steps in order.",
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
      "sub": "Leo helps Mia make pancakes over the phone. A new scene, about 40 seconds.",
      "img": "https://wolf-labs.pages.dev/p/28aa8448495c/crack-two-eggs/img/live-leite.webp",
      "leg": "Milk and a bowl on a dark table",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, help! I am hungry and I want pancakes."
        },
        {
          "quem": "leo",
          "t": "OK, easy. First, wash your hands."
        },
        {
          "quem": "mia",
          "t": "Done. Now what?"
        },
        {
          "quem": "leo",
          "t": "Then crack two eggs in a bowl. Add the milk and mix it well."
        },
        {
          "quem": "mia",
          "t": "Like this?"
        },
        {
          "quem": "leo",
          "t": "Yes. Next, heat the pan. But don't touch it! It is hot."
        },
        {
          "quem": "mia",
          "t": "OK, the pan is hot. Do I pour the batter now?"
        },
        {
          "quem": "leo",
          "t": "Yes, pour it in the pan. Wait two minutes. Then flip it."
        },
        {
          "quem": "mia",
          "t": "It is flipped! It looks great."
        },
        {
          "quem": "leo",
          "t": "Finally, put it on a plate and eat. And don't forget the syrup!"
        }
      ],
      "perguntas": [
        {
          "q": "What is the first order?",
          "op": [
            "Wash your hands",
            "Crack two eggs",
            "Heat the pan"
          ],
          "a": 0,
          "por": "OK, easy. First, wash your hands."
        },
        {
          "q": "Why does Leo say don't touch the pan?",
          "op": [
            "It is hot",
            "It is dirty",
            "It is full of milk"
          ],
          "a": 0,
          "por": "But don't touch it! It is hot."
        },
        {
          "q": "What is the last step?",
          "op": [
            "Put it on a plate and eat",
            "Mix the milk",
            "Wash your hands"
          ],
          "a": 0,
          "por": "Finally, put it on a plate and eat."
        }
      ]
    },
    "out": {
      "sub": "Three orders from the kitchen. Hear it, then say it.",
      "frases": [
        {
          "t": "First, crack two eggs in a bowl.",
          "img": "https://wolf-labs.pages.dev/p/28aa8448495c/crack-two-eggs/img/live-ovos.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "Heat the pan, but don't touch it.",
          "img": "https://wolf-labs.pages.dev/p/28aa8448495c/crack-two-eggs/img/live-fogo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Pour the milk and mix it well.",
          "img": "https://wolf-labs.pages.dev/p/28aa8448495c/crack-two-eggs/img/live-leite.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "An order is the verb alone. Four quick ones.",
      "regra": "<b>Crack</b> two eggs · no <b>you</b>, <b>-ing</b>, <b>to</b>, <b>-s</b> · <b>Don't</b> + verb · <b>first, then, next, finally</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Don't touch the hot pan.",
          "aceita": [],
          "d": "Dica: <b>Don't</b> + o verbo limpo (touch)."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "You pour the milk.",
          "r": "Pour the milk.",
          "aceita": [],
          "d": "Dica: uma ordem começa com o verbo. Sem <b>you</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Mixing the eggs well.",
          "r": "Mix the eggs well.",
          "aceita": [],
          "d": "Dica: sem <b>-ing</b> numa ordem: o verbo limpo, <b>mix</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "No touch the pan.",
          "r": "Don't touch the pan.",
          "aceita": [
            "Do not touch the pan."
          ],
          "d": "Dica: o não da ordem é <b>Don't</b> + verbo."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/28aa8448495c/crack-two-eggs/img/live-panquecas.webp",
      "leg": "A stack of pancakes with strawberries",
      "pede": "Look at the picture: pancakes with strawberries. Write 3 short orders to help a friend make them. Use <b>First</b>, <b>Then</b>, <b>Next</b> or <b>Finally</b>, and one <b>Don't</b>.",
      "ph": "First, … Then, … Don't …",
      "ex": "First, crack two eggs. Then mix the milk. Next, heat the pan. Don't touch it. Finally, eat!"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What do you eat for breakfast? Give two orders to make it.",
          "ph": "I eat … First, … Then, …",
          "ex": "I eat toast. First, put the bread in the toaster. Then add butter."
        },
        {
          "q": "What can't a guest do in your kitchen? Use Don't.",
          "ph": "Don't …",
          "ex": "Don't touch my coffee. Don't open the oven."
        }
      ]
    }
  }
};
