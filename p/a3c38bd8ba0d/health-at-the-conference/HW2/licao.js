/* AT THE CONFERENCE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: pitch de pôster: aim / found / suggests / may / however + respostas calmas. B1+: nenhum português. Estudo de higiene das mãos. Só live-capa (palco vazio, escura). */
window.HW2 = {
  "id": "health-at-the-conference",
  "titulo": "At the Conference",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/a3c38bd8ba0d/health-at-the-conference/img/live-capa.webp",
  "alvo": "a short poster pitch (Our aim was to… · We studied… · We found that… · This suggests that… may… · However,… more research is needed) and calm answers to questions (That's a great question. We didn't look at that, but…)",
  "abrir": "Have you ever presented your work to a group?",
  "fecho": "The pitch skeleton: <b>Our aim was to</b> + verb · <b>We studied…</b> · <b>We found that…</b> · <b>This suggests that… may…</b> · <b>However,… more research is needed.</b> Careful words (<i>suggests, may, in our sample</i>) make you more credible. No answer? <b>That's a great question. We didn't look at that, but…</b>",
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
      "sub": "Mia presents a poster about hand hygiene. Leo stops to ask questions. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/a3c38bd8ba0d/health-at-the-conference/img/live-capa.webp",
      "leg": "The conference hall before the talks",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Hi, thanks for stopping by. Our aim was to improve hand hygiene on two hospital wards."
        },
        {
          "quem": "leo",
          "t": "Interesting. What did you do?"
        },
        {
          "quem": "mia",
          "t": "We studied two hundred observations over two months. We put up new posters and gave short training sessions to the staff."
        },
        {
          "quem": "mia",
          "t": "We found that hand hygiene rose from sixty to eighty-two percent."
        },
        {
          "quem": "leo",
          "t": "That's a big change. So it works?"
        },
        {
          "quem": "mia",
          "t": "This suggests that simple reminders may help. However, it was only two wards, so more research is needed."
        },
        {
          "quem": "leo",
          "t": "Did doctors and nurses change in the same way?"
        },
        {
          "quem": "mia",
          "t": "That's a great question. We didn't look at that in this study, but it would be an interesting next step."
        },
        {
          "quem": "leo",
          "t": "Thanks. Good luck with the poster."
        }
      ],
      "perguntas": [
        {
          "q": "What was the aim of the study?",
          "op": [
            "To improve hand hygiene on two wards",
            "To buy new soap",
            "To train new doctors"
          ],
          "a": 0,
          "por": "Our aim was to improve hand hygiene on two hospital wards."
        },
        {
          "q": "What did they find?",
          "op": [
            "Hand hygiene rose from 60 to 82 percent",
            "Nothing changed",
            "Hand hygiene fell"
          ],
          "a": 0,
          "por": "We found that hand hygiene rose from sixty to eighty-two percent."
        },
        {
          "q": "How does Mia answer the question about doctors and nurses?",
          "op": [
            "She says they didn't look at that, but it is a good next step",
            "She guesses an answer",
            "She says the question is not important"
          ],
          "a": 0,
          "por": "That's a great question. We didn't look at that in this study, but it would be an interesting next step."
        }
      ]
    },
    "out": {
      "sub": "Three lines from a poster pitch. Hear it, then say it.",
      "frases": [
        {
          "t": "Our aim was to improve hand hygiene on two hospital wards.",
          "au": "audio/say1.mp3",
          "img": "https://wolf-labs.pages.dev/p/a3c38bd8ba0d/health-at-the-conference/img/live-capa.webp"
        },
        {
          "t": "This suggests that simple reminders may help.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "That's a great question. We didn't look at that in this study.",
          "au": "audio/say3.mp3",
          "img": "https://wolf-labs.pages.dev/p/a3c38bd8ba0d/health-at-the-conference/img/live-capa.webp"
        }
      ]
    },
    "focus": {
      "sub": "A careful pitch. Four quick ones.",
      "regra": "<b>Our aim was to</b> + verb · <b>may</b> + plain verb · <b>didn't</b> + plain verb · <b>suggests</b>, never <i>proves</i>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "This suggests that short training may improve hand hygiene.",
          "aceita": [],
          "d": "Hint: <b>This suggests that</b> + subject + <b>may</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Our aim was improve hand hygiene.",
          "r": "Our aim was to improve hand hygiene.",
          "aceita": [],
          "d": "Hint: <b>Our aim was to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "The results may to apply to other hospitals.",
          "r": "The results may apply to other hospitals.",
          "aceita": [],
          "d": "Hint: after <b>may</b>, the plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "We didn't looked at age in this study.",
          "r": "We didn't look at age in this study.",
          "aceita": [],
          "d": "Hint: after <b>didn't</b>, the plain verb: <i>look</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Look at the picture: an empty stage, just before the talks. Imagine your own small study (real or invented). Write 3 sentences: your aim (<b>Our aim was to</b>), your finding, carefully (<b>This suggests that… may…</b>), and one limitation (<b>However,…</b>).",
      "ph": "Our aim was to …",
      "ex": "Our aim was to reduce waiting times at our clinic. We found that a new check-in system cut waiting by ten minutes. This suggests that it may help, but it was only one clinic.",
      "img": "https://wolf-labs.pages.dev/p/a3c38bd8ba0d/health-at-the-conference/img/live-capa.webp",
      "leg": "An empty stage with a podium"
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you like to study or improve at your workplace?",
          "ph": "I would like to …",
          "ex": "I would like to improve how we explain medicines to patients."
        },
        {
          "q": "Someone asks you a question you can't answer after a talk. What do you say?",
          "ph": "That's a great question. …",
          "ex": "That's a great question. We didn't look at that, but I can check and email you."
        }
      ]
    }
  }
};
