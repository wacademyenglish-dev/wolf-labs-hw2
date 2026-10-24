/* JUST RELAX YOUR ARM · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: instruções gentis: Could you… for me / I'm just going to / Let me know if. B1+: nenhum português. Tom calmo: aferir a pressão num check-up. Só live-capa (consultório escuro). */
window.HW2 = {
  "id": "health-just-relax-your-arm",
  "titulo": "Just Relax Your Arm",
  "nivel": "B1",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/69bcd5498052/health-just-relax-your-arm/img/live-capa.webp",
  "alvo": "gentle instructions during an exam: Could you + verb + for me? · I'm just going to + verb · You may feel a little... / This might feel cold · Let me know if..., and I'll stop · Try to keep still (say what TO do); plain verb after could, never to; present after if",
  "abrir": "Think of a check-up. What does the nurse or doctor ask you to do?",
  "fecho": "An order becomes a request with <b>Could you…</b> + <b>for me</b>: <i>Could you open wide for me?</i> Before you touch, say <b>I'm just going to…</b> and warn: <b>You may feel a little…</b> Give control: <b>Let me know if</b> it feels uncomfortable, <b>and I'll stop.</b> Instead of <i>Don't move</i>, say <b>Try to keep still.</b>",
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
      "sub": "Leo, a nurse, checks Mia's blood pressure at a routine check-up. A new scene, about 40 seconds.",
      "img": null,
      "leg": null,
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Good morning, Mia. Today I'm just going to check your blood pressure. It only takes a minute."
        },
        {
          "quem": "mia",
          "t": "Okay. Do I need to do anything?"
        },
        {
          "quem": "leo",
          "t": "Could you roll up your left sleeve for me and rest your arm on the table?"
        },
        {
          "quem": "mia",
          "t": "Like this?"
        },
        {
          "quem": "leo",
          "t": "Perfect. Just relax your arm. You may feel the cuff get a little tight."
        },
        {
          "quem": "mia",
          "t": "That's fine. Can I talk?"
        },
        {
          "quem": "leo",
          "t": "Try to keep still and quiet for a moment. Let me know if it feels uncomfortable, and I'll stop."
        },
        {
          "quem": "mia",
          "t": "No, it's okay."
        },
        {
          "quem": "leo",
          "t": "All done. You did really well. Your blood pressure is normal."
        },
        {
          "quem": "mia",
          "t": "Great, thank you. That was easy."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo going to check?",
          "op": [
            "Mia's blood pressure",
            "Mia's temperature",
            "Mia's teeth"
          ],
          "a": 0,
          "por": "Today I'm just going to check your blood pressure."
        },
        {
          "q": "What may Mia feel?",
          "op": [
            "The cuff get a little tight",
            "Something cold on her back",
            "A pain in her leg"
          ],
          "a": 0,
          "por": "You may feel the cuff get a little tight."
        },
        {
          "q": "What is the result?",
          "op": [
            "Her blood pressure is normal",
            "It is a little high",
            "Leo needs to check it again"
          ],
          "a": 0,
          "por": "All done. You did really well. Your blood pressure is normal."
        }
      ]
    },
    "out": {
      "sub": "Three gentle instructions. Hear it, then say it.",
      "frases": [
        {
          "t": "Could you open wide for me?",
          "img": "https://wolf-labs.pages.dev/p/69bcd5498052/health-just-relax-your-arm/img/live-capa.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "I'm just going to check your blood pressure.",
          "img": null,
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let me know if it feels uncomfortable, and I'll stop.",
          "img": null,
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Gentle requests, warnings and control. Four quick ones.",
      "regra": "<b>Could you</b> + plain verb + <b>for me?</b> · <b>I'm just going to</b> + verb · <b>Let me know if</b> + present, <b>and I'll stop</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "Could you roll up your sleeve for me?",
          "aceita": [],
          "d": "Hint: <b>Could you</b> + verb … + <b>for me</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Could you to open wide for me?",
          "r": "Could you open wide for me?",
          "aceita": [],
          "d": "Hint: after <b>could</b>, the plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "I'm just going check your blood pressure.",
          "r": "I'm just going to check your blood pressure.",
          "aceita": [
            "I am just going to check your blood pressure."
          ],
          "d": "Hint: <b>going to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "Let me know if you will need a break.",
          "r": "Let me know if you need a break.",
          "aceita": [],
          "d": "Hint: after <b>if</b>, use the present: <i>if you need</i>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/69bcd5498052/health-just-relax-your-arm/img/live-capa.webp",
      "leg": "A quiet treatment room",
      "pede": "Look at the picture: a quiet treatment room with a chair. Write 3 gentle sentences for a patient: one request (<b>Could you… for me?</b>), one warning (<b>You may feel…</b> or <b>This might…</b>) and one sentence that gives control (<b>Let me know if…</b>).",
      "ph": "Could you … for me?",
      "ex": "Could you lean back in the chair for me? This might feel a bit cold. Let me know if you need a break, and I'll stop."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "Think of a simple exam or check in your job. What do you ask the patient to do? Say it gently.",
          "ph": "Could you … for me?",
          "ex": "Could you rest your arm on the table for me?"
        },
        {
          "q": "What do you say at the end of an exam to make the patient feel good?",
          "ph": "That's it, all done. …",
          "ex": "That's it, all done. You did really well."
        }
      ]
    }
  }
};
