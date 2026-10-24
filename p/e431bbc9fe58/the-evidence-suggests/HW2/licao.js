/* THE EVIDENCE SUGGESTS · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: distância acadêmica: the evidence suggests, it has been claimed, purports to, would seem to. C1: nenhum português. Só imagens live-* escuras (sem a live-lab: cama de hospital). */
window.HW2 = {
  "id": "the-evidence-suggests",
  "titulo": "The Evidence Suggests",
  "nivel": "C1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/e431bbc9fe58/the-evidence-suggests/img/live-capa.webp",
  "alvo": "academic distance: the evidence suggests (that) with a singular verb · it has been claimed that · it is widely assumed that · the study claims / purports to show · there is reason to believe · would seem to · apparently, reportedly; the empty subject IT / THERE always comes first",
  "abrir": "What is something everybody says is true, but you have never checked?",
  "fecho": "Keep your distance from a claim: <b>the evidence suggests that</b> (evidence is uncountable, so <i>suggests</i>) · <b>it has been claimed that</b> · <b>it is widely assumed that</b> · <b>the study claims / purports to show</b> · <b>there is reason to believe</b> · <b>would seem to</b>. The empty subject <b>it</b> or <b>there</b> always comes first, and <b>pretend</b> is not <b>claim</b>.",
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
  "rate": "-6%",
  "rodadas": {
    "listen": {
      "sub": "Mia and Leo review a paper on sleep and sound. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/e431bbc9fe58/the-evidence-suggests/img/live-mesa.webp",
      "leg": "A reviewer's desk, late at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm reviewing a paper on sleep and sound, and I'm stuck on the abstract. The authors write that the sound deepens sleep."
        },
        {
          "quem": "leo",
          "t": "That's a strong claim. What does the data actually show?"
        },
        {
          "quem": "mia",
          "t": "Twelve volunteers, one night each. The evidence suggests a small effect, but the sample is tiny."
        },
        {
          "quem": "leo",
          "t": "Then it's too early to say it proves anything. I'd write that the evidence suggests it, not that it shows it."
        },
        {
          "quem": "mia",
          "t": "Fair. And the introduction says it is widely assumed that deep sleep protects memory. Where's the source?"
        },
        {
          "quem": "leo",
          "t": "Exactly. It has been claimed for years, but nobody cites a study. I'd cut the word widely."
        },
        {
          "quem": "mia",
          "t": "One more thing. The study purports to show a lasting benefit, but they only measured one night."
        },
        {
          "quem": "leo",
          "t": "So it would seem to help in the short term, and that's all we can say."
        },
        {
          "quem": "mia",
          "t": "My comment, then: there is reason to believe the effect is real, but the claim goes further than the data."
        },
        {
          "quem": "leo",
          "t": "Good. Apparently, the press office has already written something, though."
        },
        {
          "quem": "mia",
          "t": "Of course. Reportedly, the headline says it cures insomnia."
        },
        {
          "quem": "leo",
          "t": "Then say so in your report. Politely."
        }
      ],
      "perguntas": [
        {
          "q": "What does Mia say the evidence suggests?",
          "op": [
            "A small effect",
            "A lasting cure",
            "No effect at all"
          ],
          "a": 0,
          "por": "The evidence suggests a small effect, but the sample is tiny."
        },
        {
          "q": "Why does Leo want to cut the word widely?",
          "op": [
            "Nobody cites a study for the claim",
            "The sentence is too long",
            "The idea is brand new"
          ],
          "a": 0,
          "por": "It has been claimed for years, but nobody cites a study."
        },
        {
          "q": "What is wrong with the claim of a lasting benefit?",
          "op": [
            "They only measured one night",
            "They measured a whole year",
            "The volunteers dropped out"
          ],
          "a": 0,
          "por": "They only measured one night."
        }
      ]
    },
    "out": {
      "sub": "Three careful sentences. Hear it, then say it.",
      "frases": [
        {
          "t": "The evidence suggests a small effect, but the sample is tiny.",
          "img": "https://wolf-labs.pages.dev/p/e431bbc9fe58/the-evidence-suggests/img/live-mesa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "It has been claimed for years, but nobody cites a study.",
          "img": "https://wolf-labs.pages.dev/p/e431bbc9fe58/the-evidence-suggests/img/live-arquivo.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "The study purports to show a lasting benefit.",
          "img": "https://wolf-labs.pages.dev/p/e431bbc9fe58/the-evidence-suggests/img/live-quarto.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Distance, subject, verb. Four quick ones.",
      "regra": "<b>The evidence suggests</b> (singular) · <b>it has been claimed that</b> · <b>it is widely assumed that</b> · <b>the study claims / purports to show</b> (not <i>pretends</i>) · <b>there is reason to believe</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "There is reason to believe the effect is real.",
          "aceita": [],
          "d": "Hint: the empty subject <b>there</b> comes first, then <b>is reason to believe</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The study pretends to show a lasting benefit.",
          "r": "The study purports to show a lasting benefit.",
          "aceita": [
            "The study claims to show a lasting benefit."
          ],
          "d": "Hint: <b>pretend</b> means to act as if. For what a paper says, use <b>purports to</b> or <b>claims to</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the subject is missing.",
          "mostra": "Has been claimed that the sound works.",
          "r": "It has been claimed that the sound works.",
          "aceita": [
            "It's been claimed that the sound works."
          ],
          "d": "Hint: the empty subject <b>it</b> always comes first, even in a long sentence."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The evidences suggest a small effect.",
          "r": "The evidence suggests a small effect.",
          "aceita": [],
          "d": "Hint: <b>evidence</b> is uncountable: no <i>-s</i> on the noun, and <b>suggests</b> with <i>-s</i> on the verb."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/e431bbc9fe58/the-evidence-suggests/img/live-mesa.webp",
      "leg": "A reviewer's desk, notes and a pen",
      "pede": "Look at the picture: a desk with a pen and a notebook. Write 2 or 3 sentences about something you read or heard recently (a headline, an article, a rumor). Keep your distance from the claim: <b>the evidence suggests that</b>, <b>it is widely assumed that</b>, <b>the study claims to</b> or <b>would seem to</b>.",
      "ph": "The evidence suggests that …",
      "ex": "The evidence suggests that most people sleep better in a cool room. It is widely assumed that coffee helps you focus, but the study claims to show the opposite. It would seem to depend on the person."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is something people say is true, but you are not sure about?",
          "ph": "It is widely assumed that …",
          "ex": "It is widely assumed that everyone needs eight hours of sleep, but I am not convinced."
        },
        {
          "q": "Think of an article you read lately. What did it claim?",
          "ph": "The article claims to … / Apparently, …",
          "ex": "The article claims to show that cities are getting quieter. Apparently, it was based on one small survey."
        }
      ]
    }
  }
};
