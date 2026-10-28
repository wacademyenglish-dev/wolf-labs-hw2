/* DESIGN 08 · CAN WE MAKE THE LOGO BIGGER? (CURSOS, B1+) · conversa · 26/10/2026 · regra 3×3 do Carlos (CURSOS: 1 momento + 3 surpresas)
   A negociação com limite secreto entra DEPOIS de "III · Say No, Kindly" (apos: 'prova') e antes de "IV · I Can",
   que fica por último com o carimbo e o link da lição de casa (nada de hw aqui). O III é monólogo com relógio
   (duas respostas de 60 s); aqui é um vaivém de verdade: o professor é a cliente, insiste, e os dois fecham
   três pontos (logo, cor, foto). Educar ou obedecer? A língua da aula (I see where you’re coming from, but …;
   My only concern is …; What if we …? That way, …; outside the scope) mora nos iniciadores. Cliente FICTÍCIA. */
window.WL_CONVERSA = { nivel: 'B1', cenas: [
  { id: 'cliente', apos: 'prova', est: 'o', min: 7, img: 'conversa', rot: 'The Client Deal',
    t: 'Educate or obey? Close a deal on three points.',
    p: 'You are the designer. Your teacher is the client. Answer her four questions, then agree on the logo, the color and the photo.',
    formato: 'papel',
    aluno: { quem: 'You · the designer', quer: 'A clean home page, with “Order now” at the top.', limite: 'Your limit: two revisions left. A redesign is outside the scope.' },
    prof: { quem: 'Carla · Bean & Bloom café', quer: 'A much bigger logo, red everywhere, a team photo at the top.', limite: 'Secret limit: a bigger logo on the home page only is OK. Red doesn’t matter. The photo must stay, but it can go lower.' },
    rot_perg: 'The client asks',
    perguntas: [
      { q: '“I love it, but can we make the logo much bigger? Like, double?”', ex: 'I see where you’re coming from. Can I ask what worries you about the size now?' },
      { q: '“And the green is boring. I want red. Red sells.”', ex: 'My only concern is that a lot of red can feel like a warning. What if we keep the green and make the buttons red? That way, “Order now” really stands out.' },
      { q: '“I also want a big photo of the whole team at the top of the home page.”', ex: 'I love that you want people to meet the team. What if we put the photo just below “Order now”? That way, people see your faces and still find the button.' },
      { q: '“OK. So what are you going to change? Three points, please.”', ex: 'Let me show you the plan side by side: the logo a bit bigger on the home page only, red buttons, and the team photo below “Order now”.' }
    ],
    st: ['I see where you’re coming from, but …', 'My only concern is …', 'What if we …? That way, …', 'That’s outside the scope we agreed, so …'],
    acordo: { tag: 'The deal · three points', q: 'Logo, color, photo. Which deal do you close?',
      opc: ['Logo a bit bigger · red buttons · photo lower', 'Logo the same · green stays · photo on About', 'Everything the client wants'],
      st: ['So we agree on three things: …', 'What if we test it with customers first?'],
      ex: 'So we agree on three things: the logo a bit bigger on the home page, red buttons, and the team photo below “Order now”. I’ll send the new version on Friday.' },
    push: 'The client: “Another designer said yes to everything in one day.” Educate or obey?' }
] };
