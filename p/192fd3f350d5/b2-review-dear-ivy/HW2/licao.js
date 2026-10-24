/* DEAR IVY · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: review U2: unless / provided that / as long as / 2nd e 3rd conditional / wish + past. B2: nenhum português. Imagens live-capa e live-conversa (escuras). */
window.HW2 = {
  "id": "b2-review-dear-ivy",
  "titulo": "Dear Ivy",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/192fd3f350d5/b2-review-dear-ivy/img/live-capa.webp",
  "alvo": "Unit 2 review: first conditional with unless, provided that, as long as; second conditional (If I won ..., I would ...); wish + past (I wish I had); second x third conditional (If you had asked, I would have helped); If I were you",
  "abrir": "What advice would you give a friend who hates their job?",
  "fecho": "<b>unless</b> = if not · <b>provided that / as long as</b> = on the condition that, with a present verb. <b>If + past, would</b> for the imaginary: <i>If I won, I would travel.</i> <b>wish + past</b>: <i>I wish I had more time.</i> <b>If + had + participle, would have + participle</b> for the past: <i>If you had asked, I would have helped.</i>",
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
      "sub": "Mia and Leo answer letters for an advice column. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/192fd3f350d5/b2-review-dear-ivy/img/live-conversa.webp",
      "leg": "A window seat at night",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "mia",
          "t": "Leo, I'm answering this week's letters for the advice column. Listen to this one. A man wants to quit his job."
        },
        {
          "quem": "leo",
          "t": "If he quits tomorrow, he will regret it, unless he has savings."
        },
        {
          "quem": "mia",
          "t": "He has some. I told him he can quit, provided that he finds something new within three months."
        },
        {
          "quem": "leo",
          "t": "Good advice. If I were him, I would talk to my boss first."
        },
        {
          "quem": "mia",
          "t": "That's what I said. He also wrote: I wish I had more time for my family."
        },
        {
          "quem": "leo",
          "t": "A lot of people wish that. If only he had started earlier, he would have saved more."
        },
        {
          "quem": "mia",
          "t": "The second letter is from a woman who turned down a job abroad. She says if she had accepted it, she would have lived by the sea."
        },
        {
          "quem": "leo",
          "t": "Tell her she can still go, as long as she doesn't wait too long. If she waits, she will keep wondering."
        },
        {
          "quem": "mia",
          "t": "Great. That's the whole column."
        }
      ],
      "perguntas": [
        {
          "q": "On what condition can the man quit?",
          "op": [
            "He finds something new within three months",
            "His boss agrees",
            "His family says yes"
          ],
          "a": 0,
          "por": "He can quit, provided that he finds something new within three months."
        },
        {
          "q": "What would Leo do if he were the man?",
          "op": [
            "Talk to his boss first",
            "Quit the next day",
            "Ask for a loan"
          ],
          "a": 0,
          "por": "If I were him, I would talk to my boss first."
        },
        {
          "q": "What can the woman still do, according to Leo?",
          "op": [
            "Go abroad, as long as she doesn't wait too long",
            "Get her old job back",
            "Ask her boss for a raise"
          ],
          "a": 0,
          "por": "Tell her she can still go, as long as she doesn't wait too long."
        }
      ]
    },
    "out": {
      "sub": "Three pieces of advice. Hear it, then say it.",
      "frases": [
        {
          "t": "If I were you, I would talk to my boss first.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You can quit, provided that you find a new job within three months.",
          "au": "audio/say2.mp3"
        },
        {
          "t": "If you had accepted the job, you would have lived by the sea.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Conditions, wishes and regrets. Four quick ones.",
      "regra": "<b>as long as / provided that / unless</b> + present · <b>If + past, would</b> · <b>wish + past</b> · <b>If + had + participle, would have + participle</b>",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You can stay as long as you call me.",
          "aceita": [],
          "d": "Hint: <b>as long as</b> + present = on the condition that."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "If I would win the lottery, I would travel.",
          "r": "If I won the lottery, I would travel.",
          "aceita": [],
          "d": "Hint: after <b>if</b>, use the past, not <i>would</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "I wish I have more free time.",
          "r": "I wish I had more free time.",
          "aceita": [],
          "d": "Hint: <b>wish</b> about now takes the past: <i>had</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "If you asked, I would have helped.",
          "r": "If you had asked, I would have helped.",
          "aceita": [],
          "d": "Hint: the past version needs <b>had</b> + participle after <b>if</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/192fd3f350d5/b2-review-dear-ivy/img/live-capa.webp",
      "leg": "Readers' letters on a desk",
      "pede": "Look at the picture: letters on a desk under a small lamp, readers' letters for an advice column. Answer one reader who wants to change careers. Write 2 or 3 sentences with <b>provided that</b>, <b>unless</b>, <b>If I were you</b> or <b>I wish</b>.",
      "ph": "Dear reader, if I were you, ...",
      "ex": "Dear reader, if I were you, I would start a small course first. You can change careers, provided that you keep your current job for now. I wish someone had told me that earlier."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What would you do if you won a big prize tomorrow?",
          "ph": "If I won a big prize, I would ...",
          "ex": "If I won a big prize, I would pay my debts and travel with my family."
        },
        {
          "q": "What do you wish you had more of? What would you do with it?",
          "ph": "I wish I had more ... If I did, I would ...",
          "ex": "I wish I had more free time. If I did, I would learn the piano."
        }
      ]
    }
  }
};
