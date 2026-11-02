/* ============================================================
   KIT LIVE CLASS · AS EXPLORAÇÕES DA ESCRITA (dados)    08/10/2026
   Usado pelo teclado (kit/teclado.js), catálogo da escrita:
     nivel: E3 "suba de nível": palavra → [A1, A2, B1, B2–C1]
     junto: E4 "combinações": verbo → { sim: [...], nao: [[errado, certo], ...] }
     conecta: E5 "continue a história": conectores por nível
   Escrito à mão (Claude, 08/10).
   ============================================================ */
window.WL_EXPLORA = {
  nivel: {
    good: ['good', 'great', 'amazing', 'outstanding'], bad: ['bad', 'terrible', 'awful', 'dreadful'], big: ['big', 'large', 'huge', 'enormous'],
    small: ['small', 'little', 'tiny', 'minute'], nice: ['nice', 'lovely', 'delightful', 'charming'], happy: ['happy', 'glad', 'delighted', 'overjoyed'],
    sad: ['sad', 'unhappy', 'miserable', 'heartbroken'], tired: ['tired', 'sleepy', 'exhausted', 'worn out'], angry: ['angry', 'mad', 'furious', 'livid'],
    scared: ['scared', 'afraid', 'terrified', 'petrified'], beautiful: ['pretty', 'beautiful', 'gorgeous', 'stunning'], ugly: ['ugly', 'plain', 'hideous', 'grotesque'],
    funny: ['funny', 'fun', 'hilarious', 'witty'], interesting: ['interesting', 'exciting', 'fascinating', 'captivating'], boring: ['boring', 'dull', 'tedious', 'monotonous'],
    easy: ['easy', 'simple', 'effortless', 'straightforward'], difficult: ['hard', 'difficult', 'tough', 'challenging'], hard: ['hard', 'difficult', 'tough', 'demanding'],
    important: ['important', 'big', 'essential', 'crucial'], fast: ['fast', 'quick', 'rapid', 'swift'], slow: ['slow', 'gradual', 'sluggish', 'leisurely'],
    cold: ['cold', 'chilly', 'freezing', 'icy'], hot: ['hot', 'warm', 'boiling', 'scorching'], old: ['old', 'ancient', 'elderly', 'antique'],
    new: ['new', 'fresh', 'modern', 'brand-new'], rich: ['rich', 'wealthy', 'well-off', 'affluent'], poor: ['poor', 'broke', 'penniless', 'impoverished'],
    clean: ['clean', 'tidy', 'spotless', 'immaculate'], dirty: ['dirty', 'messy', 'filthy', 'grimy'], smart: ['smart', 'clever', 'brilliant', 'shrewd'],
    strange: ['strange', 'odd', 'weird', 'bizarre'], quiet: ['quiet', 'calm', 'peaceful', 'tranquil'], loud: ['loud', 'noisy', 'deafening', 'thunderous'],
    hungry: ['hungry', 'very hungry', 'starving', 'ravenous'], very: ['very', 'really', 'extremely', 'incredibly'], like: ['like', 'enjoy', 'love', 'adore'],
    say: ['say', 'tell', 'explain', 'claim'], see: ['see', 'look at', 'notice', 'observe'], think: ['think', 'believe', 'feel', 'reckon'],
    want: ['want', 'would like', 'wish', 'long for'], help: ['help', 'support', 'assist', 'back up'], start: ['start', 'begin', 'launch', 'kick off'],
    get: ['get', 'receive', 'obtain', 'acquire'], walk: ['walk', 'stroll', 'wander', 'march'], look: ['look', 'seem', 'appear', 'come across as'],
    many: ['many', 'a lot of', 'plenty of', 'countless'], thing: ['thing', 'object', 'item', 'element'], problem: ['problem', 'issue', 'trouble', 'setback'],
    idea: ['idea', 'plan', 'concept', 'notion'], friend: ['friend', 'mate', 'buddy', 'companion'], house: ['house', 'home', 'place', 'residence'],
    job: ['job', 'work', 'career', 'profession'], money: ['money', 'cash', 'funds', 'savings'], also: ['also', 'too', 'as well', 'moreover'],
    but: ['but', 'however', 'although', 'nevertheless'], so: ['so', 'that’s why', 'therefore', 'consequently'], because: ['because', 'since', 'as', 'due to the fact that']
  },
  junto: {
    make: { sim: ['a decision', 'a mistake', 'money', 'friends', 'a plan', 'an effort', 'a choice', 'a call', 'progress', 'noise', 'dinner', 'sense'],
      nao: [['make homework', 'do homework'], ['make a photo', 'take a photo'], ['make a question', 'ask a question'], ['make a party', 'have a party']] },
    do: { sim: ['homework', 'the dishes', 'exercise', 'my best', 'business', 'a favor', 'the shopping', 'a course', 'research', 'nothing'],
      nao: [['do a mistake', 'make a mistake'], ['do a decision', 'make a decision'], ['do a photo', 'take a photo']] },
    take: { sim: ['a photo', 'a shower', 'a break', 'a bus', 'a taxi', 'a seat', 'care of', 'notes', 'a risk', 'time', 'medicine', 'an exam'],
      nao: [['take a decision', 'make a decision'], ['take a party', 'have a party']] },
    have: { sim: ['breakfast', 'lunch', 'a party', 'fun', 'a good time', 'a shower', 'a look', 'a chat', 'a headache', 'a baby', 'an idea', 'a meeting'],
      nao: [['have 20 years', 'be 20'], ['have fear', 'be afraid'], ['have hunger', 'be hungry'], ['have reason', 'be right']] },
    get: { sim: ['a job', 'married', 'lost', 'better', 'ready', 'home', 'tired', 'a message', 'the bus', 'a ticket'], nao: [] },
    give: { sim: ['advice', 'a hand', 'a speech', 'a call', 'a present', 'a hug', 'birth', 'up'], nao: [] },
    pay: { sim: ['attention', 'a visit', 'the bill', 'a compliment', 'in cash', 'by card'], nao: [['pay attention in', 'pay attention to']] },
    keep: { sim: ['a secret', 'a promise', 'calm', 'in touch', 'going', 'quiet', 'an eye on'], nao: [] },
    catch: { sim: ['a cold', 'a bus', 'a train', 'fire', 'your breath', 'someone’s eye'], nao: [] },
    break: { sim: ['a promise', 'the law', 'a record', 'the ice', 'someone’s heart', 'the news'], nao: [] },
    tell: { sim: ['the truth', 'a lie', 'a story', 'a joke', 'the time', 'the difference'], nao: [['tell to me', 'tell me'], ['say me', 'tell me']] },
    say: { sim: ['hello', 'goodbye', 'sorry', 'thank you', 'yes', 'no', 'a word'], nao: [['say me', 'tell me'], ['say the truth', 'tell the truth']] },
    spend: { sim: ['time', 'money', 'the weekend', 'a fortune', 'the night'], nao: [] },
    save: { sim: ['money', 'time', 'a life', 'a file', 'energy'], nao: [] },
    ask: { sim: ['a question', 'for help', 'for advice', 'permission', 'the way'], nao: [['ask to him', 'ask him']] },
    feel: { sim: ['better', 'tired', 'sick', 'like + -ing', 'at home', 'sorry for'], nao: [] }
  },
  conecta: {
    A1: ['And', 'But', 'Then', 'Because', 'So'],
    A2: ['After that,', 'Also,', 'Because', 'But', 'In the end,', 'First,'],
    B1: ['However,', 'For example,', 'Then', 'Because of this,', 'In the end,', 'On the other hand,'],
    B2: ['However,', 'As a result,', 'In addition,', 'On the other hand,', 'Even so,', 'For instance,'],
    C1: ['Nevertheless,', 'Consequently,', 'What is more,', 'That said,', 'By contrast,', 'Admittedly,']
  }
};
