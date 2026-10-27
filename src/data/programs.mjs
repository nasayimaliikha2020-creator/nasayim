// Relief programs. Add a new program by appending an object with the same fields;
// the build creates its Arabic and English pages automatically.
// images: keys from the `photos` catalog below (files live in public/images/<key>.webp and <key>-sm.webp).

export const programs = [
  {
    slug: 'food-support',
    icon: 'package',
    stat: 'families',
    title: { ar: 'برنامج إطعام الطعام', en: 'Food Support Program' },
    tagline: { ar: 'غذاء يحفظ الكرامة... وعطاء يصل إلى بيت يحتاجه.', en: 'Food that preserves dignity, delivered to the homes that need it.' },
    summary: {
      ar: 'طرود تموينية وكفالات غذائية مستمرة للأسر المتعففة من الفقراء والأرامل والأيتام.',
      en: 'Food parcels and year-round food sponsorships for families in need, widows and orphans.',
    },
    body: {
      ar: [
        'يعمل البرنامج على تقديم الطرود الإغاثية التموينية للأسر المحتاجة من الفقراء والأرامل والأيتام في المخيمات الفلسطينية في المملكة الأردنية الهاشمية، لتحقيق الحد الأدنى للمعيشة.',
        'ويسهم البرنامج في توفير الاحتياجات الغذائية الأساسية للأسر المتعففة من خلال كفالة غذائية دائمة طوال العام، إلى جانب برامج موسمية تهدف إلى تخفيف الأعباء المعيشية وتعزيز الأمن الغذائي للأسر المستفيدة.',
      ],
      en: [
        'The program delivers food relief parcels to families in need — low-income households, widows and orphans — in the Palestinian refugee camps of the Hashemite Kingdom of Jordan, helping them meet a basic standard of living.',
        'Through year-round food sponsorship alongside seasonal initiatives, the program covers essential food needs, eases the cost of living and strengthens food security for the families it serves.',
      ],
    },
    activities: {
      ar: ['كفالة غذائية دائمة طوال العام للأسر المحتاجة', 'الطرود الغذائية التموينية'],
      en: ['Year-round food sponsorship for families in need', 'Food relief parcels'],
    },
    images: ['food-1', 'food-2', 'food-3'],
  },
  {
    slug: 'shifaa-wa-amal',
    icon: 'heartPulse',
    stat: 'medical',
    title: { ar: 'شفاء وأمل', en: 'Shifaa wa Amal — Healing & Hope' },
    tagline: { ar: 'من الألم إلى الأمل.', en: 'From pain to hope.' },
    summary: {
      ar: 'عمليات اليوم الواحد والعلاج للأطفال والنساء الأشد حاجة.',
      en: 'Day surgeries and treatment for children and women most in need.',
    },
    body: {
      ar: [
        'يعمل البرنامج على إجراء عمليات اليوم الواحد للمرضى من الأطفال والنساء الأشد فقرًا في المخيمات الفلسطينية في المملكة الأردنية الهاشمية.',
        'ويسعى برنامج شفاء وأمل إلى مساندة المرضى المحتاجين الذين تشكل تكاليف العلاج عائقًا أمام حصولهم على الرعاية المناسبة، بحسب احتياجات الحالات المستفيدة.',
      ],
      en: [
        'The program funds day surgeries for children and women facing the greatest hardship in the Palestinian refugee camps of the Hashemite Kingdom of Jordan.',
        'Shifaa wa Amal stands with patients for whom the cost of treatment is a barrier to proper care, responding to the needs of each case.',
      ],
    },
    activities: {
      ar: ['عمليات اليوم الواحد للأطفال والنساء', 'مساندة الحالات العلاجية المحتاجة'],
      en: ['Day surgeries for children and women', 'Support for patients in need of treatment'],
    },
    images: ['health-1', 'health-2', 'health-3'],
  },
  {
    slug: 'safe-home',
    icon: 'house',
    stat: 'homes',
    title: { ar: 'المسكن الآمن', en: 'Safe Home' },
    tagline: { ar: 'منزل آمن... بداية لحياة أكثر استقرارًا.', en: 'A safe home is the start of a more stable life.' },
    summary: {
      ar: 'ترميم المنازل القديمة والمتهالكة للأسر المحتاجة والأرامل والأيتام.',
      en: 'Renovating old and deteriorating homes for families in need, widows and orphans.',
    },
    body: {
      ar: [
        'يهدف البرنامج إلى تقديم وتسهيل السكن الآمن للأسر الفقيرة والمحتاجة والأرامل والأيتام والمساكين في المخيمات الفلسطينية في المملكة الأردنية الهاشمية من خلال ترميم المنازل القديمة والمتهالكة.',
        'ويسعى البرنامج إلى تحسين الظروف السكنية ومعالجة الاحتياجات الأساسية للسكن، بما يسهم في توفير بيئة أكثر أمانًا وكرامة واستقرارًا للأسرة.',
      ],
      en: [
        'The program provides and facilitates safe housing for low-income families, widows, orphans and others in need in the Palestinian refugee camps of the Hashemite Kingdom of Jordan by renovating old and deteriorating homes.',
        'By improving living conditions and addressing essential housing needs, it helps give families a safer, more dignified and more stable place to live.',
      ],
    },
    activities: {
      ar: ['ترميم المنازل القديمة والمتهالكة', 'معالجة الاحتياجات السكنية الضرورية'],
      en: ['Renovating old and deteriorating homes', 'Addressing essential housing needs'],
    },
    images: ['home-1', 'home-2', 'home-3'],
  },
  {
    slug: 'relieving-distress',
    icon: 'handshake',
    stat: null,
    title: { ar: 'تفريج الكربات وزرع البسمات', en: 'Relieving Hardship, Restoring Smiles' },
    tagline: { ar: 'حين تضيق السبل... نفتح معًا نافذة للأمل.', en: 'When every door seems closed, together we open a window of hope.' },
    summary: {
      ar: 'الوقوف إلى جانب الأسر التي تواجه أزمات مالية أو معيشية طارئة.',
      en: 'Standing with families facing sudden financial or living crises.',
    },
    body: {
      ar: [
        'يعمل البرنامج على مساعدة الأشد فقرًا وحاجة في المخيمات الفلسطينية في المملكة الأردنية الهاشمية في مختلف الجوانب.',
        'وهو برنامج إنساني يهدف إلى الوقوف إلى جانب الأسر والأفراد الذين يواجهون أزمات مالية أو معيشية طارئة، والمساهمة في تخفيف الأعباء التي تهدد استقرار حياتهم.',
      ],
      en: [
        'The program assists those facing the greatest poverty and need in the Palestinian refugee camps of the Hashemite Kingdom of Jordan across many areas of life.',
        'It is a humanitarian program that stands with families and individuals facing sudden financial or living crises, helping to lift burdens that threaten their stability.',
      ],
    },
    activities: {
      ar: ['الكراسي المتحركة', 'السداد عن الغارمين', 'تسديد الإيجارات المتراكمة', 'تسديد فواتير الكهرباء والماء', 'كسوة الشتاء وكسوة العيد', 'البطانيات والصوبات وجرات الغاز', 'خزانات المياه النظيفة', 'مساعدات إنسانية متنوعة'],
      en: ['Wheelchairs', 'Relief for debtors', 'Overdue rent', 'Electricity and water bills', 'Winter and Eid clothing', 'Blankets, heaters and gas cylinders', 'Clean water tanks', 'Other humanitarian aid'],
    },
    // Projects shown as cards on the program page; `image` is a key in the photos catalog.
    projects: [
      { icon: 'wheelchair', image: 'distress-wheelchairs',
        ar: ['الكراسي المتحركة', 'نوفّر الكراسي المتحركة لذوي الإعاقة وكبار السن ممن يعجزون عن تأمينها، لنعيد إليهم شيئًا من حرية الحركة والقدرة على المشاركة في حياتهم اليومية.'],
        en: ['Wheelchairs', 'We provide wheelchairs to people with disabilities and older people who cannot afford them, restoring a measure of mobility and independence in daily life.'] },
      { icon: 'unlock', image: 'distress-debtors',
        ar: ['السداد عن الغارمين', 'نساند من أثقلتهم الديون وعجزوا عن سدادها، فنسهم في رفع هذا العبء عنهم وحماية أسرهم من تبعاته.'],
        en: ['Relief for Debtors', 'We stand with people burdened by debts they cannot repay, helping lift that weight and protect their families from its consequences.'] },
      { icon: 'house', image: 'distress-rent',
        ar: ['تسديد الإيجارات المتراكمة', 'نسدد الإيجارات المتراكمة عن الأسر المهددة بفقدان مسكنها، ليبقى للأسرة سقف يؤويها واستقرار تحتاجه.'],
        en: ['Overdue Rent', 'We settle overdue rent for families at risk of losing their homes, so they keep a roof over their heads and the stability they need.'] },
      { icon: 'bolt', image: 'distress-bills',
        ar: ['تسديد فواتير الكهرباء والماء', 'نسدد فواتير الكهرباء والماء المتراكمة عن الأسر المحتاجة، حتى لا تُحرم من خدمات أساسية لا غنى عنها.'],
        en: ['Electricity & Water Bills', 'We pay accumulated electricity and water bills for families in need, so they are not cut off from essential services.'] },
      { icon: 'shirt', image: 'distress-clothing',
        ar: ['كسوة الشتاء وكسوة العيد', 'نوفّر الملابس الشتوية للأسر والأطفال في مواسم البرد، وكسوة العيد التي تُدخل الفرحة إلى قلوبهم.'],
        en: ['Winter & Eid Clothing', 'We provide warm clothing for families and children in the cold season, and new Eid clothes that bring joy to their celebrations.'] },
      { icon: 'flame', image: 'distress-winter',
        ar: ['البطانيات والصوبات وجرات الغاز', 'نوزّع البطانيات ووسائل التدفئة وجرات الغاز على الأسر المحتاجة، لتواجه برد الشتاء بدفء وأمان.'],
        en: ['Blankets, Heaters & Gas Cylinders', 'We distribute blankets, heaters and gas cylinders to families in need, so they can face the winter cold in warmth and safety.'] },
      { icon: 'droplet', image: 'distress-water',
        ar: ['خزانات المياه النظيفة', 'نركّب خزانات المياه النظيفة للأسر التي تفتقر إلى مصدر آمن ومستقر للمياه، حفاظًا على صحتها وكرامة عيشها.'],
        en: ['Clean Water Tanks', 'We install clean water tanks for families who lack a safe and reliable water supply, protecting their health and dignity.'] },
      { icon: 'handshake', image: 'distress-aid',
        ar: ['مساعدات إنسانية متنوعة', 'نستجيب للحالات الطارئة والاحتياجات المتجددة بمساعدات إنسانية متنوعة، بحسب ما تقتضيه كل حالة.'],
        en: ['Other Humanitarian Aid', 'We respond to emergencies and changing needs with a range of humanitarian assistance, tailored to each case.'] },
    ],
    images: ['relief-1'],
  },
  {
    slug: 'orphan-care',
    icon: 'heartHand',
    stat: 'orphans',
    title: { ar: 'كفالة الأيتام', en: 'Orphan Sponsorship' },
    tagline: { ar: 'نرعى حاضرهم... لنصنع معهم مستقبلًا أفضل.', en: 'Caring for their present, building a better future with them.' },
    summary: {
      ar: 'رعاية الأيتام ماديًا ومعنويًا وتنمويًا ودعم مسيرتهم التعليمية.',
      en: 'Material, emotional and developmental care for orphans, and support for their education.',
    },
    body: {
      ar: [
        'يعمل البرنامج على رعاية الأيتام ماديًا ومعنويًا وتنمويًا من خلال الكفالات والبرامج الداعمة التي تسهم في توفير حياة أكثر استقرارًا لهم ودعم مسيرتهم التعليمية والاجتماعية.',
        'نحرص في البرنامج على صون خصوصية الأطفال وكرامتهم في كل مراحل الرعاية.',
      ],
      en: [
        'The program cares for orphans materially, emotionally and developmentally through sponsorships and supporting programs that bring more stability to their lives and support their education and social growth.',
        'We protect the privacy and dignity of every child at every stage of care.',
      ],
    },
    activities: {
      ar: ['الكفالة المالية', 'الدعم الغذائي', 'الدعم التعليمي', 'العيديات', 'كسوة الشتاء', 'الحقيبة المدرسية والقرطاسية'],
      en: ['Financial sponsorship', 'Food support', 'Educational support', 'Eid gifts', 'Winter clothing', 'School bags and stationery'],
    },
    images: ['orphans-1', 'orphans-2', 'orphans-3'],
  },
];

// Development programs, shown in full on the Development page.
export const development = {
  intro: {
    ar: 'تولي جمعية نسائم الإخاء الخيرية اهتمامًا خاصًا بالتمكين والتنمية المستدامة، من خلال مركزين تنمويين يخدمان الأيتام والأسر المحتاجة وأبناء المجتمع المحلي، ويقدمان مجموعة متنوعة من البرامج التدريبية والتعليمية والتربوية التي تسهم في تنمية المهارات، وتعزيز الاعتماد على الذات، واكتشاف الطاقات والمواهب وتطويرها.',
    en: 'Nasaem Al-Ekhaa Charity Association places special emphasis on empowerment and sustainable development through two development centers that serve orphans, families in need and the local community. They offer a wide range of training, educational and personal-development programs that build skills, strengthen self-reliance, and discover and nurture talent.',
  },
  vision: {
    ar: 'نسعى في جمعية نسائم الإخاء الخيرية إلى الانتقال بالمستفيد من دائرة الاحتياج إلى دائرة التمكين، ومن تقديم المساعدة الآنية إلى بناء الإنسان وتنمية قدراته، ليصبح أكثر قدرة على التعلم والعمل والإنتاج والمشاركة الفاعلة في مجتمعه.',
    en: 'At Nasaem Al-Ekhaa, we seek to move each beneficiary from need to empowerment — from immediate assistance to building the person and developing their abilities — so they become better able to learn, work, produce and take an active part in their community.',
  },
  programs: [
    { slug: 'vocational', icon: 'wrench', image: 'dev-vocational',
      title: { ar: 'برامج التدريب المهني والتمكين الاقتصادي', en: 'Vocational Training & Economic Empowerment' },
      text: { ar: 'تهدف هذه البرامج إلى إكساب المستفيدين مهارات عملية ومهنية تساعدهم على تطوير قدراتهم وفتح آفاق جديدة أمامهم في سوق العمل، وتشمل:', en: 'These programs equip beneficiaries with practical and vocational skills that develop their abilities and open new opportunities in the job market. They include:' },
      items: {
        ar: ['دورات التجميل والعناية الشخصية.', 'دورات الخياطة والتفصيل.', 'برامج التدريب المهني والحرفي.', 'برامج تنمية المهارات التي تساعد الأسر والشباب على إيجاد مصادر دخل مستدامة.'],
        en: ['Beauty and personal care courses.', 'Sewing and tailoring courses.', 'Vocational and craft training programs.', 'Skills programs that help families and young people build sustainable sources of income.'] } },
    { slug: 'digital', icon: 'laptop', image: 'dev-digital',
      title: { ar: 'برامج التقنية والمهارات الرقمية', en: 'Technology & Digital Skills' },
      text: { ar: 'تعمل الجمعية على مواكبة التطور التقني من خلال تقديم برامج تدريبية متخصصة تساعد الأيتام والشباب على اكتساب المهارات الرقمية الحديثة، ومنها:', en: 'To keep pace with technology, the association offers specialized training that helps orphans and young people gain modern digital skills, including:' },
      items: {
        ar: ['أساسيات الحاسوب واستخدام البرامج المكتبية.', 'المونتاج وتحرير الفيديو.', 'التصميم والمهارات الرقمية.', 'الإلكترونيات والتقنيات الحديثة.', 'برامج عملية لتنمية القدرات التقنية والإبداعية.'],
        en: ['Computer basics and office software.', 'Video editing and production.', 'Design and digital skills.', 'Electronics and modern technologies.', 'Hands-on programs that develop technical and creative abilities.'] } },
    { slug: 'education', icon: 'book', image: 'dev-education',
      title: { ar: 'البرامج التعليمية والتربوية', en: 'Educational & Personal Development Programs' },
      text: { ar: 'تقدم الجمعية برامج تربوية وتعليمية تهدف إلى بناء شخصية متوازنة وتنمية المهارات العلمية والسلوكية لدى المستفيدين، وتشمل:', en: 'Educational and character-building programs that help beneficiaries grow into well-rounded individuals with strong academic and life skills. They include:' },
      items: {
        ar: ['البرامج التربوية وتنمية القيم.', 'الدورات التعليمية المساندة.', 'برامج تنمية المهارات الشخصية والاجتماعية.', 'أنشطة تعليمية تفاعلية موجهة للأطفال والأيتام.'],
        en: ['Character and values education.', 'Supplementary academic courses.', 'Personal and social skills programs.', 'Interactive learning activities for children and orphans.'] } },
    { slug: 'islamic', icon: 'moon', image: 'dev-islamic',
      title: { ar: 'برامج العلوم الشرعية والقيم', en: 'Islamic Studies & Values' },
      text: { ar: 'انطلاقًا من أهمية البناء الإيماني والأخلاقي، تنفذ الجمعية مجموعة من البرامج والدورات في العلوم الشرعية والتربية الإسلامية، بما يساهم في تعزيز القيم والأخلاق والسلوك الإيجابي لدى المشاركين، وتقديم المعرفة الشرعية بأسلوب تربوي يناسب مختلف الأعمار.', en: 'Recognizing the importance of faith and moral grounding, the association runs programs and courses in Islamic studies and education that strengthen values, character and positive behavior, presenting religious knowledge in an educational style suited to every age.' } },
    { slug: 'summer-clubs', icon: 'sun', image: 'dev-summer',
      title: { ar: 'الأندية الصيفية للأيتام', en: 'Summer Clubs for Orphans' },
      text: { ar: 'تنظم الجمعية أندية صيفية متكاملة للأيتام، تجمع بين التعليم والترفيه وتنمية الشخصية، وتشتمل على برامج متنوعة منها:', en: 'The association organizes comprehensive summer clubs for orphans that combine learning, recreation and personal growth, with activities including:' },
      items: {
        ar: ['الأنشطة التعليمية والثقافية.', 'البرامج التربوية والقيمية.', 'الأنشطة الرياضية والترفيهية.', 'ورش العمل والتجارب العملية.', 'المسابقات والرحلات والأنشطة الجماعية.', 'برامج تنمية المهارات والمواهب.'],
        en: ['Educational and cultural activities.', 'Values and character programs.', 'Sports and recreational activities.', 'Workshops and hands-on experiments.', 'Competitions, trips and group activities.', 'Skills and talent development.'] },
      outro: { ar: 'وتهدف هذه الأندية إلى توفير بيئة آمنة ومحفزة يستثمر فيها اليتيم وقته، ويطور من خلالها مهاراته وقدراته ويكوّن علاقات اجتماعية إيجابية.', en: 'These clubs provide a safe, stimulating environment where orphans make good use of their time, develop their skills and abilities, and build positive friendships.' } },
    { slug: 'leaders', icon: 'flag', image: 'dev-leaders',
      title: { ar: 'برنامج إعداد القادة', en: 'Future Leaders Program' },
      text: { ar: 'برنامج تنموي متخصص يهدف إلى بناء جيل من الشباب القادر على تحمل المسؤولية والمشاركة الإيجابية في مجتمعه، من خلال التدريب على:', en: 'A specialized development program that builds a generation of young people ready to take responsibility and contribute positively to their community, through training in:' },
      items: {
        ar: ['القيادة والعمل الجماعي.', 'التواصل الفعّال.', 'التخطيط واتخاذ القرار.', 'حل المشكلات.', 'المبادرة وتحمل المسؤولية.', 'إدارة الوقت وتنظيم الأولويات.'],
        en: ['Leadership and teamwork.', 'Effective communication.', 'Planning and decision-making.', 'Problem-solving.', 'Initiative and responsibility.', 'Time management and prioritization.'] },
      outro: { ar: 'ويركز البرنامج بصورة خاصة على اكتشاف القدرات القيادية لدى الأيتام والشباب وتنميتها ضمن بيئة تربوية داعمة.', en: 'The program focuses especially on discovering and developing leadership potential among orphans and young people in a supportive educational environment.' } },
    { slug: 'gifted', icon: 'star', image: 'dev-gifted',
      title: { ar: 'برنامج رعاية الموهوبين والمتميزين من الأيتام', en: 'Gifted & Talented Orphans Program' },
      text: { ar: 'تعمل الجمعية على اكتشاف الأيتام الذين يمتلكون مواهب أو قدرات متميزة في المجالات العلمية أو التقنية أو الفنية أو الإبداعية، وتوفير الرعاية المناسبة لهم من خلال:', en: 'The association identifies orphans with outstanding talents or abilities in science, technology, the arts or other creative fields, and nurtures them through:' },
      items: {
        ar: ['اكتشاف الموهبة وتقييمها.', 'توفير برامج تدريب متخصصة.', 'متابعة المتميزين وتطوير قدراتهم.', 'دعم مشاركتهم في الأنشطة والمسابقات.', 'توفير بيئة حاضنة تساعدهم على تطوير مواهبهم وتحقيق إمكاناتهم.'],
        en: ['Identifying and assessing talent.', 'Specialized training programs.', 'Mentoring outstanding students and developing their abilities.', 'Supporting their participation in activities and competitions.', 'A nurturing environment that helps them develop their talents and reach their potential.'] },
      outro: { ar: 'ويأتي هذا البرنامج إيمانًا بأن رعاية اليتيم لا تقتصر على تقديم الدعم المادي، بل تمتد إلى الاستثمار في قدراته وبناء مستقبله.', en: 'The program reflects our belief that caring for an orphan goes beyond material support — it means investing in their abilities and building their future.' } },
    { slug: 'community', icon: 'users', image: 'dev-community',
      title: { ar: 'برامج تنمية المجتمع المحلي', en: 'Local Community Development' },
      text: { ar: 'تمتد خدمات المركزين التنمويين إلى أبناء المجتمع المحلي والأسر المحتاجة، من خلال البرامج التدريبية والتعليمية والتوعوية التي تساعد على رفع مستوى المهارات، وتعزيز فرص التمكين، وبناء مجتمع أكثر قدرة على الإنتاج والمشاركة والاستقلالية.', en: 'The two development centers also serve the wider local community and families in need through training, educational and awareness programs that raise skill levels, expand opportunities for empowerment, and build a community better able to produce, participate and stand on its own.' } },
  ],
};

// Association locations. Never include deeds, parcel numbers, prices or other legal/financial details.
export const facilities = [
  { slug: 'headquarters', icon: 'building', image: 'loc-hq',
    title: { ar: 'المقر الرئيسي – حسبان', en: 'Main Office – Hisban' },
    category: { ar: 'المقر الرئيسي', en: 'Headquarters' },
    location: { ar: 'حسبان – مدارس الأخلاء التربوية – فرع حسبان', en: 'Hisban – Al-Akhilla Educational Schools, Hisban Branch' },
    summary: { ar: 'المقر الرئيسي للجمعية، ومنه تُدار برامجها ويتواصل فريقها مع المحسنين والمتطوعين والمستفيدين.', en: 'The association’s headquarters, from which its programs are managed and its team connects with supporters, volunteers and beneficiaries.' },
    map: 'مدارس الأخلاء التربوية حسبان الأردن' },
  { slug: 'kuwait-al-ataa', icon: 'building', image: 'loc-irbid',
    title: { ar: 'مركز كويت العطاء (مركز محمد المريخي)', en: 'Kuwait Al-Ataa Center (Mohammed Al-Muraikhi Center)' },
    category: { ar: 'مركز تنموي', en: 'Development center' },
    location: { ar: 'محافظة إربد', en: 'Irbid Governorate' },
    summary: { ar: 'أحد المركزين التنمويين للجمعية في محافظة إربد، يقدّم البرامج التدريبية والتعليمية والتربوية للأيتام والأسر المحتاجة وأبناء المجتمع المحلي.', en: 'One of the association’s two development centers, in Irbid Governorate, offering training, educational and personal-development programs for orphans, families in need and the local community.' },
    mapUrl: 'https://maps.app.goo.gl/YCDfawCLRb1wnnhx6' },
  { slug: 'adnan-al-roumi', icon: 'building', image: 'loc-sahab',
    title: { ar: 'مركز عدنان الرومي', en: 'Adnan Al-Roumi Center' },
    category: { ar: 'مركز تنموي', en: 'Development center' },
    location: { ar: 'منطقة سحاب', en: 'Sahab' },
    summary: { ar: 'أحد المركزين التنمويين للجمعية في منطقة سحاب، يقدّم البرامج التدريبية والتعليمية والتربوية للأيتام والأسر المحتاجة وأبناء المجتمع المحلي.', en: 'One of the association’s two development centers, in Sahab, offering training, educational and personal-development programs for orphans, families in need and the local community.' },
    mapUrl: 'https://www.google.com/maps?q=31.8906914,36.027885&z=17' },
];

// Photo slots: key → [category, alt ar, alt en, what the photo should show (ar), (en)].
// Put the photo at public/images/<key>.webp (+ <key>-sm.webp) and its size in image-sizes.json;
// until then the site shows a placeholder describing the intended photo.
export const photos = {
  'slide-1': ['home', 'من أعمال جمعية نسائم الإخاء الخيرية', 'From the work of Nasaem Al-Ekhaa', 'صورة عرض رئيسية من أعمال الجمعية', 'Main slider photo from the association’s work'],
  'slide-2': ['home', 'من أعمال جمعية نسائم الإخاء الخيرية', 'From the work of Nasaem Al-Ekhaa', 'صورة عرض: برنامج إطعام الطعام', 'Slider photo: Food Support'],
  'slide-3': ['home', 'من أعمال جمعية نسائم الإخاء الخيرية', 'From the work of Nasaem Al-Ekhaa', 'صورة عرض: المسكن الآمن', 'Slider photo: Safe Home'],
  'slide-4': ['home', 'من أعمال جمعية نسائم الإخاء الخيرية', 'From the work of Nasaem Al-Ekhaa', 'صورة عرض: البرامج التنموية', 'Slider photo: Development programs'],
  'slide-5': ['home', 'من أعمال جمعية نسائم الإخاء الخيرية', 'From the work of Nasaem Al-Ekhaa', 'صورة عرض: كفالة الأيتام', 'Slider photo: Orphan Sponsorship'],
  'food-1': ['food-support', 'توزيع الطرود الغذائية ضمن برنامج إطعام الطعام', 'Food parcel distribution, Food Support Program', 'توزيع الطرود الغذائية على الأسر', 'Food parcels being distributed to families'],
  'food-2': ['food-support', 'طرود غذائية ضمن برنامج إطعام الطعام', 'Food parcels, Food Support Program', 'طرود غذائية جاهزة للتوزيع', 'Food parcels ready for distribution'],
  'food-3': ['food-support', 'فريق الجمعية في برنامج إطعام الطعام', 'The team at a Food Support distribution', 'فريق الجمعية أثناء التوزيع', 'The team during a distribution'],
  'health-1': ['shifaa-wa-amal', 'من برنامج شفاء وأمل', 'From Shifaa wa Amal', 'مستفيد بعد تلقي العلاج', 'A beneficiary after treatment'],
  'health-2': ['shifaa-wa-amal', 'من برنامج شفاء وأمل', 'From Shifaa wa Amal', 'زيارة المرضى في المستشفى', 'Visiting patients in hospital'],
  'health-3': ['shifaa-wa-amal', 'من برنامج شفاء وأمل', 'From Shifaa wa Amal', 'أدوات ومستلزمات طبية مقدّمة', 'Medical aids and supplies provided'],
  'home-1': ['safe-home', 'منزل قبل الترميم ضمن برنامج المسكن الآمن', 'A home before renovation, Safe Home', 'منزل قبل الترميم', 'A home before renovation'],
  'home-2': ['safe-home', 'أعمال ترميم ضمن برنامج المسكن الآمن', 'Renovation work, Safe Home', 'أعمال الترميم', 'Renovation in progress'],
  'home-3': ['safe-home', 'منزل بعد الترميم ضمن برنامج المسكن الآمن', 'A home after renovation, Safe Home', 'منزل بعد الترميم', 'A home after renovation'],
  'relief-1': ['relieving-distress', 'من برنامج تفريج الكربات', 'From Relieving Hardship', 'صورة غلاف لبرنامج تفريج الكربات', 'Cover photo for Relieving Hardship'],
  'distress-wheelchairs': ['relieving-distress', 'كراسي متحركة مقدّمة ضمن برنامج تفريج الكربات', 'Wheelchairs provided, Relieving Hardship', 'تسليم كرسي متحرك لمستفيد', 'A wheelchair being handed over'],
  'distress-debtors': ['relieving-distress', 'السداد عن الغارمين', 'Relief for debtors', 'صورة معبّرة عن مشروع السداد عن الغارمين (دون إظهار وجوه أو وثائق)', 'A representative image for debt relief (no faces or documents)'],
  'distress-rent': ['relieving-distress', 'تسديد الإيجارات المتراكمة', 'Overdue rent', 'صورة معبّرة عن تسديد الإيجارات (منزل أسرة)', 'A representative image for rent support (a family home)'],
  'distress-bills': ['relieving-distress', 'تسديد فواتير الكهرباء والماء', 'Electricity and water bills', 'صورة معبّرة عن تسديد الفواتير (دون إظهار بيانات شخصية)', 'A representative image for bill payment (no personal data)'],
  'distress-clothing': ['relieving-distress', 'كسوة الشتاء وكسوة العيد', 'Winter and Eid clothing', 'توزيع كسوة الشتاء أو العيد', 'Distribution of winter or Eid clothing'],
  'distress-winter': ['relieving-distress', 'توزيع البطانيات والصوبات وجرات الغاز', 'Blankets, heaters and gas cylinders', 'توزيع البطانيات والصوبات وجرات الغاز', 'Blankets, heaters and gas cylinders being distributed'],
  'distress-water': ['relieving-distress', 'تركيب خزانات المياه النظيفة', 'Clean water tanks', 'خزان مياه بعد تركيبه', 'A newly installed water tank'],
  'distress-aid': ['relieving-distress', 'مساعدات إنسانية متنوعة', 'Other humanitarian aid', 'تقديم مساعدات إنسانية متنوعة', 'Humanitarian aid being delivered'],
  'orphans-1': ['orphan-care', 'من برنامج كفالة الأيتام', 'From Orphan Sponsorship', 'صورة غلاف لكفالة الأيتام', 'Cover photo for Orphan Sponsorship'],
  'orphans-2': ['orphan-care', 'من أنشطة كفالة الأيتام', 'Orphan Sponsorship activities', 'توزيع الحقائب المدرسية أو العيديات', 'School bags or Eid gifts being distributed'],
  'orphans-3': ['orphan-care', 'من أنشطة كفالة الأيتام', 'Orphan Sponsorship activities', 'نشاط مع الأيتام', 'An activity with orphans'],
  'dev-vocational': ['development', 'من برامج التدريب المهني', 'Vocational training', 'دورة خياطة أو تجميل أو تدريب مهني', 'A sewing, beauty or vocational course'],
  'dev-digital': ['development', 'من برامج المهارات الرقمية', 'Digital skills training', 'تدريب على الحاسوب أو المونتاج', 'Computer or video-editing training'],
  'dev-education': ['development', 'من البرامج التعليمية والتربوية', 'Educational programs', 'نشاط تعليمي تفاعلي مع الأطفال', 'An interactive learning activity with children'],
  'dev-islamic': ['development', 'من برامج العلوم الشرعية', 'Islamic studies', 'حلقة أو دورة في العلوم الشرعية', 'An Islamic studies class'],
  'dev-summer': ['development', 'من الأندية الصيفية للأيتام', 'Summer clubs for orphans', 'نشاط من النادي الصيفي', 'A summer club activity'],
  'dev-leaders': ['development', 'من برنامج إعداد القادة', 'Future Leaders Program', 'ورشة أو نشاط من برنامج إعداد القادة', 'A Future Leaders workshop or activity'],
  'dev-gifted': ['development', 'من برنامج رعاية الموهوبين', 'Gifted & Talented Program', 'مشاركة الموهوبين في مسابقة أو نشاط', 'Gifted students at a competition or activity'],
  'dev-community': ['development', 'من برامج تنمية المجتمع المحلي', 'Community development', 'دورة أو نشاط توعوي لأبناء المجتمع', 'A course or awareness session for the community'],
  'loc-hq': ['facilities', 'المقر الرئيسي للجمعية في حسبان', 'The association’s main office in Hisban', 'صورة خارجية للمقر الرئيسي في حسبان', 'Exterior of the main office in Hisban'],
  'loc-irbid': ['facilities', 'مركز كويت العطاء في إربد', 'Kuwait Al-Ataa Center, Irbid', 'صورة لمركز كويت العطاء في إربد', 'Kuwait Al-Ataa Center, Irbid'],
  'loc-sahab': ['facilities', 'مركز عدنان الرومي في سحاب', 'Adnan Al-Roumi Center, Sahab', 'صورة لمركز عدنان الرومي في سحاب', 'Adnan Al-Roumi Center, Sahab'],
};
