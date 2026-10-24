/* CAN WE MAKE THE LOGO BIGGER? · LIÇÃO DE CASA 2.0 (24/10/2026)
   Motor: hw2.js (fonte em _plano-50/live-class/kit/hw2/). JSON puro depois do "=": o gera_audio.py lê este arquivo.
   Alvo: discordar com educação: What if we...? That way,.... Curso de Design (B1+): nenhum português. Sem imagens (as do curso são claras demais). */
window.HW2 = {
  "id": "can-we-make-the-logo-bigger",
  "titulo": "Can We Make the Logo Bigger?",
  "nivel": "B1",
  "minutos": 10,
  "alvo": "disagreeing politely with a client: I see where you're coming from, but ...; What if we ...? That way, ...; Let me show you ...; it's outside the scope we agreed; I don't agree (no am before agree); verb + -s after the page / it",
  "abrir": "Has someone ever asked you for a change you did not like? What did you say?",
  "fecho": "Behind <i>make the logo bigger</i> there is a worry. Thank, then ask, then offer: <b>I see where you're coming from, but ...</b> · <b>What if we ...? That way, ...</b> · <b>Let me show you both versions.</b> A change that was not planned is <b>outside the scope we agreed</b>. Careful: <i>I don't agree</i> (never <i>I'm not agree</i>), and <i>That way, the page stays clean.</i>",
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
      "sub": "Leo owns a bike shop and calls Mia, his designer. A new scene, about one minute.",
      "audio": "audio/listen.mp3",
      "falas": [
        {
          "quem": "leo",
          "t": "Hi Mia. I like the new website, but can we make the logo bigger? Much bigger?"
        },
        {
          "quem": "mia",
          "t": "Thanks, Leo. I see where you're coming from. Can I ask what worries you about the size now?"
        },
        {
          "quem": "leo",
          "t": "Well, people on my street don't know the shop. I want them to remember it."
        },
        {
          "quem": "mia",
          "t": "That makes sense. The thing is, a very big logo might push the Book a repair button down the page."
        },
        {
          "quem": "leo",
          "t": "Hmm. But the logo is the brand."
        },
        {
          "quem": "mia",
          "t": "True. What if we make the logo a bit bigger, and add the shop name in the footer too? That way, people remember the name, and the button stays on top."
        },
        {
          "quem": "leo",
          "t": "Can you show me?"
        },
        {
          "quem": "mia",
          "t": "Of course. Let me show you both versions side by side."
        },
        {
          "quem": "leo",
          "t": "Okay. And can we also add a photo of every bike we fixed?"
        },
        {
          "quem": "mia",
          "t": "That's a bigger change than it sounds. It's outside the scope we agreed, so I can send you a quote."
        },
        {
          "quem": "leo",
          "t": "Fair enough. Send me the quote, and let's look at the two logos tomorrow."
        }
      ],
      "perguntas": [
        {
          "q": "What is Leo really worried about?",
          "op": [
            "People will not remember his shop",
            "The website is too slow",
            "The footer is empty"
          ],
          "a": 0,
          "por": "People on my street don't know the shop. I want them to remember it."
        },
        {
          "q": "What does Mia suggest?",
          "op": [
            "A slightly bigger logo and the name in the footer",
            "A much bigger logo",
            "No logo at all"
          ],
          "a": 0,
          "por": "What if we make the logo a bit bigger, and add the shop name in the footer too?"
        },
        {
          "q": "Why does Mia offer a quote?",
          "op": [
            "The photos are outside the agreed scope",
            "The logo is too small",
            "Leo asked for a discount"
          ],
          "a": 0,
          "por": "It's outside the scope we agreed, so I can send you a quote."
        }
      ]
    },
    "out": {
      "sub": "Three sentences for a client call. Hear it, then say it.",
      "frases": [
        {
          "t": "I see where you're coming from.",
          "au": "audio/say1.mp3"
        },
        {
          "t": "What if we make the logo a bit bigger?",
          "au": "audio/say2.mp3"
        },
        {
          "t": "Let me show you both versions side by side.",
          "au": "audio/say3.mp3"
        }
      ]
    },
    "focus": {
      "sub": "Polite and clear. Four quick ones.",
      "regra": "<b>I see where you're coming from</b> · <b>What if we ...? That way, ...</b> · <b>Let me</b> + plain verb · <b>I don't agree</b> · the page / it + <b>-s</b>.",
      "itens": [
        {
          "tipo": "monta",
          "t": "Put the words in order.",
          "r": "What if we show the top three services?",
          "aceita": [],
          "d": "Hint: <b>What if we</b> + plain verb."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is extra.",
          "mostra": "Let me to show you both versions.",
          "r": "Let me show you both versions.",
          "aceita": [],
          "d": "Hint: after <b>let me</b>, the plain verb, no <i>to</i>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one part is wrong.",
          "mostra": "I'm not agree with that change.",
          "r": "I don't agree with that change.",
          "aceita": [
            "I do not agree with that change."
          ],
          "d": "Hint: <i>agree</i> is a verb, so there is no <i>am</i>: <b>I don't agree</b>."
        },
        {
          "tipo": "escreve",
          "t": "Fix it: one word is wrong.",
          "mostra": "That way, the page stay clean.",
          "r": "That way, the page stays clean.",
          "aceita": [],
          "d": "Hint: the page = it, so the verb takes <b>-s</b>."
        }
      ]
    },
    "write": {
      "sub": "Two or three sentences. Wolf helps with two things, no more.",
      "pede": "Imagine a client says: Make the logo bigger. Write 2 or 3 sentences: thank them, give a reason, and offer another option. Use <b>I see where you're coming from</b>, <b>What if we ...?</b> or <b>That way, ...</b>",
      "ph": "I see where you're coming from, but …",
      "ex": "I see where you're coming from, but a bigger logo might push the button down. What if we add the name in the footer? That way, people remember it."
    },
    "you": {
      "sub": "Two questions about you. Say it or type it.",
      "perguntas": [
        {
          "q": "What is something you disagree with at work, at school or at home? How can you say it politely?",
          "ph": "I see … but … What if …?",
          "ex": "My friend wants a loud party. I see where you're coming from, but what if we invite fewer people?"
        },
        {
          "q": "Has someone asked you to do more than you agreed? What did you say?",
          "ph": "That's outside …",
          "ex": "A client asked for ten more pages. I said it was outside the scope we agreed."
        }
      ]
    }
  }
};
