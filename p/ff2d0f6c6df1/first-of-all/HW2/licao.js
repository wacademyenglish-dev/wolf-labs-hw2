/* FIRST OF ALL · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: first of all / then / after that / finally. B1: nenhum português. Sem imagem: a capa live-capa é clara (lum 105). */
window.HW2 = {
  "id": "first-of-all",
  "titulo": "First of All",
  "nivel": "B1",
  "minutos": 10,
  "capa": null,
  "alvo": "sequencers: first of all, then, after that, finally (beginning, middle, end); never After, alone for Depois, never Firstly of all, never In the final",
  "abrir": "What did you do this morning, in order?",
  "fecho": "Tell a story in order: <b>First of all</b> (the beginning), <b>then</b> and <b>after that</b> (the middle), <b>finally</b> (the end). Never <i>After,</i> alone at the start: say <b>After that,</b>. Never <i>in the final</i>: say <b>finally</b> or <b>in the end</b>.",
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
      "sub": "Mia asks Leo about his perfect Saturday. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, you said you had a perfect Saturday. Tell me everything, in order."
        },
        {
          "quem": "leo",
          "t": "First of all, I woke up late, at ten. No alarm at all!"
        },
        {
          "quem": "mia",
          "t": "Lovely. And then?"
        },
        {
          "quem": "leo",
          "t": "Then I made pancakes and ate them on the balcony."
        },
        {
          "quem": "mia",
          "t": "What did you do after that?"
        },
        {
          "quem": "leo",
          "t": "After that, I rode my bike to the park, and I met an old friend there."
        },
        {
          "quem": "mia",
          "t": "Oh nice. And what did you do next?"
        },
        {
          "quem": "leo",
          "t": "We had lunch by the lake. Then we played football with some kids."
        },
        {
          "quem": "mia",
          "t": "And finally?"
        },
        {
          "quem": "leo",
          "t": "Finally, I went home, watched a film and fell asleep on the sofa."
        },
        {
          "quem": "mia",
          "t": "That's a perfect day. Next Saturday I'll copy it, step by step."
        }
      ],
      "perguntas": [
        {
          "q": "What did Leo do first of all?",
          "op": [
            "He woke up late",
            "He rode his bike",
            "He played football"
          ],
          "a": 0,
          "por": "First of all, I woke up late, at ten."
        },
        {
          "q": "What did Leo do after the pancakes?",
          "op": [
            "He rode his bike to the park",
            "He watched a film",
            "He had lunch"
          ],
          "a": 0,
          "por": "After that, I rode my bike to the park."
        },
        {
          "q": "How did Leo finish his day?",
          "op": [
            "He watched a film and fell asleep",
            "He met an old friend",
            "He cooked dinner"
          ],
          "a": 0,
          "por": "Finally, I went home, watched a film and fell asleep on the sofa."
        }
      ]
    },
    "out": {
      "sub": "Three sentences in order. Hear it, then say it.",
      "frases": [
        {
          "t": "First of all, I made a cup of tea.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "After that, I took the bus to work.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Finally, I got home and cooked dinner.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "first of all, then, after that, finally. Four quick ones.",
      "regra": "<b>First of all</b> · <b>then</b> · <b>after that</b> · <b>finally</b> · never <i>After,</i> alone · never <i>in the final</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "First of all I had a coffee, and then I left.",
          "aceita": [],
          "d": "Hint: <b>first of all</b> opens the story, <b>then</b> comes after it."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "After, I went to the park.",
          "r": "After that, I went to the park.",
          "aceita": [
            "Then I went to the park."
          ],
          "d": "Hint: at the start of a sentence, say <b>after that</b> or <b>then</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Firstly of all, I got up.",
          "r": "First of all, I got up.",
          "aceita": [],
          "d": "Hint: the fixed phrase is <b>first of all</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "In the final, I went home.",
          "r": "Finally, I went home.",
          "aceita": [
            "In the end, I went home."
          ],
          "d": "Hint: the last step is <b>finally</b> or <b>in the end</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Write 2 or 3 sentences about your perfect day, in order. Use <b>first of all</b>, <b>then</b>, <b>after that</b> and <b>finally</b>.",
      "ph": "First of all, I … Then I … Finally, I …",
      "ex": "First of all, I sleep until nine. Then I have a big breakfast. After that, I go to the beach. Finally, I watch a film at home."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What did you do this morning? Tell it in order.",
          "ph": "First of all, I … Then I …",
          "ex": "First of all, I made coffee. Then I took a shower. Finally, I left for work."
        },
        {
          "q": "How do you cook your favorite meal? Say the steps in order.",
          "ph": "First of all, … After that, …",
          "ex": "First of all, I boil the pasta. After that, I make the sauce. Finally, I put it all together."
        }
      ]
    }
  }
};
