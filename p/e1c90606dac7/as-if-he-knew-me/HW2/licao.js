/* AS IF HE KNEW ME · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: as if / as though. B2: nenhum português. Só imagens live-* (já escuras). Falas originais. */
window.HW2 = {
  "id": "as-if-he-knew-me",
  "titulo": "As If He Knew Me",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e1c90606dac7/as-if-he-knew-me/img/live-capa.webp",
  "alvo": "as if / as though: not true = a step back (as if he were my boss, as if she had never seen me); looks true = no step back (it looks as if he is lost); never as he or would after as if",
  "abrir": "Describe someone in a new place, using as if.",
  "fecho": "<b>as if / as though</b> + <b>past</b> when it is not true: <i>He talks as if he were my boss.</i> + <b>past perfect</b> for an earlier moment: <i>as if she had never seen me.</i> When it looks true, no step back: <i>It looks as if he is lost.</i> Never <i>as he is lost</i>, never <i>as if he would be</i>.",
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
  "rate": "-10%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo walk through a quiet office on his first day. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e1c90606dac7/as-if-he-knew-me/img/live-corredor.webp",
      "leg": "A long quiet corridor",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, this corridor is so quiet. It feels as though nobody works here."
        },
        {
          "quem": "mia",
          "t": "It looks empty, but everybody is at their desks."
        },
        {
          "quem": "leo",
          "t": "The manager smiled at me as if he knew me."
        },
        {
          "quem": "mia",
          "t": "Maybe he does. He talks to everyone as though they were old friends."
        },
        {
          "quem": "leo",
          "t": "Funny. I walked into the elevator as if I had been here before."
        },
        {
          "quem": "mia",
          "t": "You look as if you need a coffee."
        },
        {
          "quem": "leo",
          "t": "I do. I feel as if I had worked here for years, but today is my first day."
        },
        {
          "quem": "mia",
          "t": "Don't worry. You look as though you belong here."
        },
        {
          "quem": "leo",
          "t": "Thanks. Let's go. I don't want to be late for my first meeting."
        }
      ],
      "perguntas": [
        {
          "q": "How does the corridor feel to Leo?",
          "op": [
            "As though nobody works there",
            "As if it were very noisy",
            "As if it were a party"
          ],
          "a": 0,
          "por": "It feels as though nobody works here."
        },
        {
          "q": "How did the manager smile at Leo?",
          "op": [
            "As if he knew him",
            "As if he were angry",
            "As if he were late"
          ],
          "a": 0,
          "por": "The manager smiled at me as if he knew me."
        },
        {
          "q": "How does Leo feel on his first day?",
          "op": [
            "As if he had worked there for years",
            "As if he wanted to go home",
            "As if he were on holiday"
          ],
          "a": 0,
          "por": "I feel as if I had worked here for years, but today is my first day."
        }
      ]
    },
    "out": {
      "sub": "Three sentences with as if. Hear it, then say it.",
      "frases": [
        {
          "t": "It feels as though nobody works here.",
          "img": "https://wolf-labs.pages.dev/p/e1c90606dac7/as-if-he-knew-me/img/live-corredor.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I walked in as if I had been here before.",
          "img": "https://wolf-labs.pages.dev/p/e1c90606dac7/as-if-he-knew-me/img/live-elevador.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You look as if you need a coffee.",
          "img": "https://wolf-labs.pages.dev/p/e1c90606dac7/as-if-he-knew-me/img/live-mesas.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "as if and as though. Four quick ones.",
      "regra": "<b>as if / as though</b> + past (not true) · + <b>had + participle</b> (an earlier moment) · looks true: present, no step back.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "She looks as if she needs a coffee.",
          "aceita": [],
          "d": "Hint: it looks true, so <b>as if</b> + present."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "He talks as if he would be my boss.",
          "r": "He talks as if he were my boss.",
          "aceita": [
            "He talks as if he was my boss."
          ],
          "d": "Hint: not true, so a step back: <b>were</b>. Never <i>would</i> after <b>as if</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "She spoke as if she never saw me.",
          "r": "She spoke as if she had never seen me.",
          "aceita": [
            "She spoke as though she had never seen me."
          ],
          "d": "Hint: an earlier moment needs <b>had + participle</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "It looks as he is lost.",
          "r": "It looks as if he is lost.",
          "aceita": [
            "It looks as though he is lost."
          ],
          "d": "Hint: <b>as</b> alone is not enough. Use <b>as if</b> or <b>as though</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e1c90606dac7/as-if-he-knew-me/img/live-capa.webp",
      "leg": "A long quiet corridor",
      "pede": "Look at the picture: a long quiet corridor. Write 2 or 3 sentences about how a place or a person feels or looks. Use <b>as if</b> or <b>as though</b>.",
      "ph": "It feels as if … He looks as though …",
      "ex": "My old office felt as though it were a library. Everybody worked as if the day never ended. The boss looked as if he were always in a hurry."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Tell me about a place that feels as though it were something else.",
          "ph": "… feels as though it were …",
          "ex": "My gym feels as though it were a nightclub on Fridays."
        },
        {
          "q": "Who talks as if they knew everything? Describe that person.",
          "ph": "… talks as if he / she knew …",
          "ex": "My cousin talks as if he knew everything about football."
        }
      ]
    }
  }
};
