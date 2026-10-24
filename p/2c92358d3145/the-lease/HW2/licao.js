/* THE LEASE · LIÇÃO DE CASA 2.0 (23/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: are required to / must not / don't have to. B2: nenhum português. Imagens live-* (todas escuras). */
window.HW2 = {
  "id": "the-lease",
  "titulo": "The Lease",
  "nivel": "B2",
  "minutos": 10,
  "capa": "https://wolf-labs.pages.dev/p/2c92358d3145/the-lease/img/live-capa.webp",
  "alvo": "formal obligation and prohibition in a contract: be required to + verb (Tenants are required to give notice) · must not + verb (forbidden) · don't have to (not necessary); never don't must, required pay, must not to, or mustn't for something that is only not necessary",
  "abrir": "What are the house rules where you live?",
  "fecho": "<b>Are required to</b> + verb: <i>Tenants are required to give 28 days' notice.</i> <b>Must not</b> + plain verb = forbidden: <i>You must not sublet.</i> <b>Don't have to</b> = not necessary: <i>You don't have to pay for wear and tear.</i> Never <i>don't must</i>, never <i>required pay</i>, never <i>must not to</i>.",
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
      "sub": "Mia and Leo talk about her lease in Melbourne. A new scene, about one minute.",
      "img": "https://wolf-labs.pages.dev/p/2c92358d3145/the-lease/img/live-a.webp",
      "leg": "Keys on the lease papers",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Mia, did you read the lease for the flat in Melbourne?"
        },
        {
          "quem": "mia",
          "t": "Twice. Tenants are required to give twenty-eight days' notice before they leave."
        },
        {
          "quem": "leo",
          "t": "That's standard. What about the bond?"
        },
        {
          "quem": "mia",
          "t": "I'm required to pay four weeks of rent as a bond. I get it back if the flat is in good condition."
        },
        {
          "quem": "leo",
          "t": "Can you rent the spare room to a friend?"
        },
        {
          "quem": "mia",
          "t": "No. I must not sublet without written permission."
        },
        {
          "quem": "leo",
          "t": "And the carpet? It looks a bit old."
        },
        {
          "quem": "mia",
          "t": "I don't have to pay for normal wear and tear. Only for real damage."
        },
        {
          "quem": "leo",
          "t": "Anything about pets?"
        },
        {
          "quem": "mia",
          "t": "Tenants must not keep animals. And I have a cat, so I'll ask Kylie, the property manager, for a change."
        },
        {
          "quem": "leo",
          "t": "Good idea. Ask before you sign."
        }
      ],
      "perguntas": [
        {
          "q": "How much notice are tenants required to give?",
          "op": [
            "Twenty-eight days",
            "Two days",
            "One year"
          ],
          "a": 0,
          "por": "Tenants are required to give twenty-eight days' notice."
        },
        {
          "q": "What must Mia not do without permission?",
          "op": [
            "Sublet the spare room",
            "Pay the bond",
            "Give notice"
          ],
          "a": 0,
          "por": "I must not sublet without written permission."
        },
        {
          "q": "What doesn't Mia have to pay for?",
          "op": [
            "Normal wear and tear",
            "The bond",
            "The notice period"
          ],
          "a": 0,
          "por": "I don't have to pay for normal wear and tear."
        }
      ]
    },
    "out": {
      "sub": "Three clauses from a lease. Hear it, then say it.",
      "frases": [
        {
          "t": "Tenants are required to give twenty-eight days' notice.",
          "img": "https://wolf-labs.pages.dev/p/2c92358d3145/the-lease/img/live-a.webp",
          "au": "audio/say1.mp3"
        },
        {
          "t": "You must not sublet the flat without permission.",
          "img": "https://wolf-labs.pages.dev/p/2c92358d3145/the-lease/img/live-b.webp",
          "au": "audio/say2.mp3"
        },
        {
          "t": "You don't have to pay for normal wear and tear.",
          "img": "https://wolf-labs.pages.dev/p/2c92358d3145/the-lease/img/live-capa.webp",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Required to, must not, don't have to. Four quick ones.",
      "regra": "<b>are required to</b> + verb · <b>must not</b> + plain verb = forbidden · <b>don't have to</b> = not necessary.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "You must not sublet without written permission.",
          "aceita": [],
          "d": "Hint: forbidden: <b>must not</b> + the plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "You don't must smoke inside.",
          "r": "You mustn't smoke inside.",
          "aceita": [
            "You must not smoke inside."
          ],
          "d": "Hint: to forbid something, use <b>must not</b>, never <i>don't must</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is missing.",
          "mostra": "Tenants are required pay the bond.",
          "r": "Tenants are required to pay the bond.",
          "aceita": [],
          "d": "Hint: <b>required to</b> + verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: the meaning is wrong.",
          "mostra": "You mustn't pay for wear and tear.",
          "r": "You don't have to pay for wear and tear.",
          "aceita": [
            "You do not have to pay for wear and tear."
          ],
          "d": "Hint: it is not necessary, it is not forbidden."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "img": "https://wolf-labs.pages.dev/p/2c92358d3145/the-lease/img/live-b.webp",
      "leg": "A living room with a warm lamp",
      "pede": "Look at the picture: a quiet living room in a rented flat. Write 2 or 3 sentences about the rules of a flat you rent or know. Use <b>are required to</b>, <b>must not</b> or <b>don't have to</b>.",
      "ph": "Tenants are required to …",
      "ex": "Tenants are required to pay the rent on the first day. They must not keep a dog. They don't have to repaint the walls."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What are people required to do in the building where you live?",
          "ph": "Residents are required to …",
          "ex": "Residents are required to close the main door at night."
        },
        {
          "q": "What must guests not do in your home? And what don't they have to do?",
          "ph": "Guests must not … They don't have to …",
          "ex": "Guests must not smoke inside. They don't have to take their shoes off."
        }
      ]
    }
  }
};
