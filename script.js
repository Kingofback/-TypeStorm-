const wordData = {
    english: [
        "philosophical","infrastructure","synchronization","cryptographic","interdisciplinary","metamorphosis","photosynthesis","electromagnetic","microarchitecture","quantitative","bioinformatics","nanotechnology","thermodynamics","hyperspectral","computational","virtualization","serialization","concurrency","observability","introspection","decomposition","normalization","parametric","polymorphism","encapsulation","inheritance","abstraction","idempotent","immutability","parallelism","approximation","autonomous","authorization","authentication","containerization","orchestration","microservices","availability","consistency","partitioning","replication","resilience","observability","instrumentation","troubleshooting","profiling","benchmarking","optimization","scalability","latency","throughput","heterogeneous","homogeneous","stochastic","deterministic","probabilistic","bayesian","gradient","multivariate","dimensionality","manifold","eigenvector","eigenvalue","orthogonality","regularization","generalization","hyperparameter","backpropagation","convolutional","recurrent","transformer","tokenization","vectorization","quantization","distillation","federated","differential","privatization","containerized","serverless","event-driven","stream-processing","consensus","blockchain","cryptocurrency","tokenomics","zero-knowledge","homomorphic","postquantum","elliptic","isomorphic","topological","geodesic","heuristics","approximate","combinatorial","optimization","multithreading","synchronization","deadlock","starvation","preemption","virtualization","hypervisor","observability","telemetry","diagnostics"
    ],
    hebrew: [
        "פילוסופיה","תשתיות","סינכרוניזציה","קריפטוגרפיה","אינטרדיסציפלינריות","מטמורפוזה","פוטוסינתזה","אלקטרומגנטיות","מיקרוארכיטקטורה","כמותני","ביואינפורמטיקה","ננוטכנולוגיה","תרמודינמיקה","היפרספקטרלי","חישובי","וירטואליזציה","סיריאליזציה","קונקרנטיות","תצפיותיות","אינטוספקציה","דקומפוזיציה","נירמול","פרמטרי","פולימורפיזם","אינקפסולציה","ירושה","הפשטה","אידמפוטנטיות","שינוי-בלתי","פרלליזם","קירוב","אוטונומי","אימות","הרשאה","קונטיינריזציה","תזמור","מיקרו-שירותים","זמינות","עקיבות","חלוקה","רפליקציה","חוסן","ניטור","אינסטרומנטציה","ניפוי-שגיאות","פרופילינג","בנצ'מרקינג","אופטימיזציה","סקיילביליות","שהייה","תפוקה","הטרוגניות","הומוגניות","סטוכסטיות","דטרמיניסטי","הסתברותי","בייזיאני","גרדיאנט","רב-משתני","רב-ממדי","מרחב-מניה","וקטור-עצמי","ערך-עצמי","אורתוגונליות","רגולריזציה","גנרליזציה","היפר-פרמטר","בק-פרופגציה","קונבולוציה","רקורנטי","טרנספורמר","טוקניזציה","וקטוריזציה","קוואנטיזציה","דיסטילציה","פדרטיבי","פרטיות-דיפרנציאלית","סרברלס","מונע-אירועים","עיבוד-זרמים","קונסנסוס","בלוקצ'יין","קריפטו-מטבע","טוקנומיקס","אפס-ידע","הומומורפי","פוסט-קוונטי","אליפטי","איזומורפי","טופולוגי","גאודזי","היוריסטיקה","קומבינטורי","רב-תהליכיות","דדלוק","רעב-משאבים","פרה-אמפשן","היפרווייזור","טלמטריה","דיאגנוסטיקה"
    ],
    russian: [
        "философский","инфраструктура","синхронизация","криптография","междисциплинарный","метаморфоз","фотосинтез","электромагнитный","микроархитектура","квантитативный","биоинформатика","нанотехнологии","термодинамика","гиперспектральный","вычислительный","виртуализация","сериализация","конкурентность","наблюдаемость","интроспекция","декомпозиция","нормализация","параметрический","полиморфизм","инкапсуляция","наследование","абстракция","идемпотентность","неизменяемость","параллелизм","аппроксимация","авторизация","аутентификация","контейнеризация","оркестрация","микросервисы","доступность","согласованность","разделение","репликация","устойчивость","инструментирование","отладка","профилирование","бенчмаркинг","оптимизация","масштабируемость","задержка","пропускная-способность","гетерогенность","гомогенность","стохастический","детерминированный","вероятностный","байесовский","градиент","многомерный","многофакторный","многообразие","собственный-вектор","собственное-значение","ортогональность","регуляризация","обобщение","гиперпараметр","обратное-распространение","сверточный","рекуррентный","трансформер","токенизация","векторизация","квантизация","дистилляция","федеративный","дифференциальный","конфиденциальность","безсерверный","событийный","потоковая-обработка","консенсус","блокчейн","криптовалюта","токеномика","нуль-знание","гомоморфный","постквантовый","эллиптический","изоморфный","топологический","геодезический","эвристика","комбинаторный","многопоточность","взаимоблокировка","голодание","прерывание","гипервизор","телеметрия","диагностика"
    ],
    china: [
        "哲学性","基础设施","同步化","密码学","跨学科","蜕变","光合作用","电磁学","微架构","量化分析","生物信息学","纳米技术","热力学","高光谱","计算化","虚拟化","序列化","并发性","可观测性","内省","分解化","规范化","参数化","多态性","封装性","继承性","抽象化","幂等性","不可变性","并行化","近似化","授权机制","身份验证","容器化","编排化","微服务","高可用","一致性","分区化","副本机制","弹性恢复","监测性","仪表化","故障排查","性能剖析","基准测试","优化策略","可扩展性","时延","吞吐量","异构性","同构性","随机性","确定性","概率性","贝叶斯","梯度","多变量","高维度","流形","特征向量","特征值","正交性","正则化","泛化能力","超参数","反向传播","卷积网络","循环网络","变换模型","分词化","向量化","量化","蒸馏","联邦式","差分隐私","无服务器","事件驱动","流式处理","共识算法","区块链","加密货币","代币经济","零知识","同态加密","后量子","椭圆曲线","同构映射","拓扑学","测地线","启发式","组合优化","多线程","死锁","饥饿","抢占","管理程序","遥测","诊断学"
    ],
    india: [
        "दार्शनिक","आधारभूत-संरचना","समकालिकीकरण","क्रिप्टोग्राफी","अंतरविषयी","रूपांतरण","प्रकाशसंश्लेषण","विद्युतचुंबकीय","सूक्ष्म-स्थापत्य","मात्रात्मक","बायोइन्फॉर्मेटिक्स","नैनोप्रौद्योगिकी","ऊष्मागतिकी","अति-वर्णक्रमीय","संगणकीय","वर्चुअलाइजेशन","अनुक्रमण","समकालिकता","पर्यवेक्षणीयता","अंतर्दर्शन","विघटन","सामान्यीकरण","पैरामीट्रिक","बहुरूपीकरण","संघटन","उत्तराधिकार","सारांकन","इडेम्पोटेंसी","अपरिवर्तनीयता","समांतरता","सन्निकटन","प्राधिकरण","प्रमाणीकरण","कंटेनरीकरण","समन्वयन","सूक्ष्म-सेवाएँ","उपलब्धता","संगतता","विभाजन","प्रतिलिपिकरण","लचीलेपन","उपकरणीकृत","दोष-निदान","प्रोफाइलिंग","बेंचमार्किंग","सुधारीकरण","विस्तारक्षमता","विलंब","थ्रूपुट","विषमक","समरूपी","आकस्मिक","नियतात्मक","प्रायिक","बायसीय","ढाल","बहुविश्लेषी","बहु-आयामी","बहुरूप","स्व-वेक्टर","स्व-मूल्य","लंबवतता","नियमितीकरण","सामान्यीकरण","अधिपरिमाण","व्युत्क्रम-प्रसार","संवलन","पुनरावर्ती","ट्रांसफॉर्मर","टोकनाइज़ेशन","वेक्टराइज़ेशन","क्वांटाइज़ेशन","डिस्टिलेशन","संघीय","अंतर-गोपनीयता","सर्वरलेस","घटना-चालित","प्रवाह-प्रसंस्करण","सम्मति-एल्गोरिथ्म","ब्लॉकचेन","क्रिप्टोकरेंसी","टोकनोमिक्स","शून्य-ज्ञान","होमोमोर्फिक","उत्तर-क्वांटम","दीर्घवृत्तीय","समरूपी-मानचित्रण","स्थलाकृति","भू-देशांतर","हेयूरिस्टिक","समंयोजकीय","बहुधारिता","डेडलॉक","क्षुधा","अधिग्रहण","हाइपरवाइजर","टेलीमेट्री","नैदानिकी"
    ]
};

let currentLang = 'english';
let words = wordData[currentLang];
let testDuration = 60;
// Initialize LTR for English
document.documentElement.dir = 'ltr';
document.body.dir = 'ltr';
let timeLeft = testDuration; // uses chosen preset
let score = 0;
let isPlaying = false;
let timer;
let highScore = parseInt(localStorage.getItem('fast-typer-highscore') || '0');
function modeBestKey() { return `ts_best_${testDuration}_${sentenceMode? 'sentence' : 'word'}`; }

// sentence mode word bank (used for sentence generation)
// English sentences for sentence mode
const englishSentencesBank = [
    "The quick brown fox jumps over the lazy dog.",
    "Practice makes perfect when you dedicate time to improvement.",
    "Technology has revolutionized the way we communicate and work.",
    "Learning new skills opens doors to endless opportunities.",
    "Consistency is the key to achieving long term success.",
    "Great things take time and patience to accomplish.",
    "Reading widely expands your knowledge and perspective.",
    "A healthy lifestyle requires proper nutrition and exercise.",
    "Teamwork makes the dream work for any organization.",
    "Time management helps you accomplish more with less stress.",
    "Understanding others requires listening more than talking.",
    "Persistence and dedication lead to achieving your goals.",
    "Active listening forms the foundation of relationships.",
    "Complex problems require creative thinking and analysis.",
    "The modern world presents both challenges and opportunities.",
    "Good communication prevents misunderstandings in teams.",
    "Success is measured by the journey not just results.",
    "Adapting to change is essential in the modern workplace.",
    "Building resilience helps you overcome failures.",
    "Theory and practice together create true expertise.",
    "Self worth should come from within not external approval.",
    "A pleasant work environment increases productivity.",
    "Early planning prevents mistakes and saves resources.",
    "Gratitude daily improves your overall life quality.",
    "Protecting the environment is everyone's responsibility.",
    "Balance between work and life is crucial for wellness.",
    "Curiosity drives us to explore and learn new things.",
    "Building trust takes time but can be lost instantly.",
    "Education is the best investment a society can make.",
    "Critical thinking requires questioning and analysis.",
    "Community service provides deep personal fulfillment.",
    "Making decisions under pressure requires experience.",
    "History helps us understand the present better.",
    "Open mindedness allows you to learn from everyone.",
    "Meditation reduces stress and improves focus.",
    "Artificial intelligence raises important ethical questions.",
    "Effective teamwork requires clear roles and expectations.",
    "Careful optimism helps you see opportunities in challenges.",
    "Attention to detail distinguishes good from excellent work.",
    "Admitting mistakes shows strength and willingness to improve.",
    "Free speech is fundamental to a democratic society.",
    "Equal opportunity allows everyone to reach their potential.",
    "Body language conveys messages beyond spoken words.",
    "Infrastructure development is essential for growth.",
    "Digital privacy has become a complex modern challenge.",
    "Women empowerment is necessary for a just society.",
    "Memory improvement requires practice and connection.",
    "Public speaking requires preparation and practice.",
    "Art and culture enrich imagination and perspective.",
    "Responsible budgeting prevents debt and enables planning."
];

// Hebrew sentences for sentence mode (50+ sentences)
const hebrewSentencesBank = [
    "התקדמות משמעותית בתהליך הלמידה דורשת סבלנות רבה והתמדה יומיומית",
    "היכולת להתרכז במשימה אחת לאורך זמן היא מיומנות קריטית להצלחה",
    "טכנולוגיה מתקדמת מאפשרת לנו לתקשר עם אנשים בכל רחבי העולם בקלות",
    "התפתחות אישית דורשת מאיתנו לצאת מאזור הנוחות ולהתמודד עם אתגרים",
    "אחריות חברתית היא ערך עליון בבניית קהילה חזקה ומתחשבת בסביבה",
    "קריאת ספרים תורמת להרחבת האופקים ולשיפור יכולת הביטוי העצמי שלנו",
    "שמירה על אורח חיים בריא כוללת תזונה נכונה ופעילות גופנית קבועה",
    "חשיבותו של שיתוף פעולה בצוות היא המפתח להשגת מטרות משותפות וגדולות",
    "ניהול זמן נכון מאפשר לנו להספיק יותר משימות בפחות מאמץ ולחץ",
    "הבנה עמוקה של המציאות דורשת מאיתנו להסתכל מעבר לפני השטח של הדברים",
    "למידת שפה חדשה פותחת דלתות לתרבויות שונות ומעשירה את עולמנו הפנימי",
    "התמדה והשקעה הן התכונות החשובות ביותר בדרך להגשמת חלומות גדולים",
    "הקשבה פעילה לאחרים היא הבסיס ליצירת מערכות יחסים בריאות ומשמעותיות",
    "פתרון בעיות מורכבות דורש חשיבה יצירתית ויכולת ניתוח של מצבים משתנים",
    "העולם המודרני מציב בפנינו אתגרים טכנולוגיים ומוסריים הדורשים התייחסות",
    "תקשורת בין-אישית טובה מונעת אי-הבנות ותורמת לאווירה חיובית בקבוצה",
    "הצלחה אינה נמדדת רק בתוצאות אלא גם בדרך שעברנו כדי להשיג אותן",
    "יכולת ההסתגלות לשינויים היא הכרחית בעולם העבודה המשתנה במהירות",
    "טיפוח חוסן נפשי עוזר לנו להתמודד עם כישלונות ולצמוח מתוכם בצורה חיובית",
    "שילוב של תיאוריה ופרקטיקה הוא הדרך הטובה ביותר לרכוש מיומנות מקצועית",
    "הכרה בערך העצמי שלנו אינה תלויה באישור חיצוני אלא בתחושה פנימית",
    "סביבת עבודה נעימה ומעודדת מגבירה את הפרודוקטיביות ואת שביעות הרצון",
    "תכנון מוקדם של פרויקט חוסך משאבים רבים ומונע טעויות בשלבים מאוחרים",
    "הכרת תודה יומיומית על הדברים הקטנים משפרת את איכות החיים שלנו",
    "הגנה על איכות הסביבה היא חובה מוסרית של כל אדם כלפי הדורות הבאים",
    "יצירת איזון בין עבודה לחיים אישיים חיונית לשמירה על בריאותנו הנפשית",
    "סקרנות טבעית היא המנוע שדוחף אותנו לחקור וללמוד דברים חדשים תמיד",
    "בניית אמון לוקחת זמן רב אך ניתן להרוס אותו ברגע אחד של חוסר זהירות",
    "השקעה בחינוך היא ההשקעה הטובה ביותר שחברה יכולה לעשות למען עתידה",
    "שימוש מושכל ברשתות חברתיות דורש מודעות לסכנות ולזיהוי מידע כוזב",
    "התנדבות בקהילה מעניקה תחושת סיפוק ומשמעות עמוקה למי שבוחר לעשות זאת",
    "יכולת קבלת החלטות תחת לחץ היא תכונה נדרשת בתפקידי ניהול ומנהיגות",
    "הכרת ההיסטוריה מסייעת לנו להבין את ההווה ולתכנן טוב יותר את העתיד",
    "פתיחות מחשבתית מאפשרת לנו לקבל דעות שונות וללמוד מכל אדם שאנו פוגשים",
    "תרגול מדיטציה עוזר להפחתת מתחים ולשיפור הריכוז בחיי היומיום העמוסים",
    "פיתוח בינה מלאכותית מעלה שאלות אתיות כבדות משקל לגבי עתיד האנושות",
    "עבודת צוות יעילה דורשת חלוקת תפקידים ברורה ותיאום ציפיות מתמיד",
    "אופטימיות זהירה עוזרת לנו לראות את ההזדמנויות בכל קושי שאנו נתקלים בו",
    "הקפדה על פרטים קטנים היא שמבדילה בין עבודה בינונית לעבודה מצוינת",
    "היכולת להודות בטעות היא סימן לחוזק אופי ולנכונות אמיתית ללמידה ושיפור",
    "חופש הביטוי הוא אבן יסוד בכל חברה דמוקרטית המכבדת את זכויות האדם",
    "קידום שוויון הזדמנויות מאפשר לכל אדם לממש את הפוטנציאל הטמון בו",
    "הבנת שפת גוף יכולה לסייע לנו בפיענוח מסרים לא מילוליים בשיחה פנים אל פנים",
    "השקעה בתשתיות לאומיות היא תנאי הכרחי לצמיחה כלכלית ולשיפור רמת החיים",
    "שמירה על פרטיות בעידן הדיגיטלי הפכה לאתגר מורכב הדורש אמצעי הגנה מתקדמים",
    "העצמה נשית ותיקון אפליה מגדרית הם צעדים הכרחיים ליצירת חברה צודקת יותר",
    "שיפור הזיכרון דורש תרגול קבוע של טכניקות שינון וקישור מידע חדש לידע קיים",
    "התמודדות עם פחד קהל דורשת הכנה מדוקדקת ותרגול מול קהל מצומצם בתחילה",
    "צריכת אמנות ותרבות מעשירה את הדמיון ומעניקה נקודות מבט חדשות על החיים",
    "ניהול תקציב משפחתי באחריות מונע חובות ומאפשר תכנון כלכלי לטווח הארוך",
    "פיתוח אפליקציות דורש הבנה עמוקה של צרכי המשתמש וחשיבה על חווית שימוש",
    "שאיפה למצוינות אינה אומרת להיות מושלם אלא להשתפר בכל יום מחדש",
    "כבוד הדדי הוא הבסיס לדו-קיום בשלום בין קבוצות שונות באוכלוסייה",
    "התמקדות בהווה עוזרת לנו ליהנות מהרגע ולהפחית דאגות לגבי העתיד הלא נודע"
];

// Russian sentences for sentence mode (50+ sentences)
const russianSentencesBank = [
    "Современные технологии меняют нашу жизнь и работу каждый день.",
    "Постоянная практика помогает развивать навыки и добиваться успеха.",
    "Чёткое планирование проекта снижает риски и экономит ресурсы.",
    "Командная работа эффективна, когда роли понятны и цели общие.",
    "Осознанная коммуникация предотвращает недопонимание и конфликты.",
    "Самообразование открывает новые горизонты и возможности в карьере.",
    "Умение адаптироваться к изменениям необходимо в современном мире.",
    "Забота о здоровье включает правильное питание и регулярные тренировки.",
    "Критическое мышление требует анализа фактов и проверку источников.",
    "История помогает понять настоящее и лучше планировать будущее.",
    "Настойчивость и терпение приводят к долгосрочным результатам.",
    "Внимание к деталям отличает качественную работу от посредственной.",
    "Свобода слова — основа демократического общества и уважения прав.",
    "Баланс между работой и личной жизнью важен для благополучия.",
    "Осознанность помогает снижать стресс и повышать концентрацию.",
    "Этика важна при внедрении искусственного интеллекта в обществе.",
    "Благодарность за малое укрепляет позитивный взгляд на жизнь.",
    "Инфраструктура необходима для экономического роста и развития.",
    "Навыки публичных выступлений развиваются с практикой и анализом.",
    "Открытость к разным мнениям расширяет кругозор и взаимопонимание.",
    "Чёткая цель и шаги к ней упрощают путь к результатам.",
    "Экологическая ответственность — долг каждого перед будущими поколениями.",
    "Доверие строится долго, но теряется мгновенно без осторожности.",
    "Рабочая среда влияет на продуктивность и удовлетворённость людей.",
    "Грамотное управление временем увеличивает эффективность без перегрузки.",
    "Практика медитации способствует спокойствию и ясности мышления.",
    "Навыки сотрудничества важны для успеха коллективных проектов.",
    "Чтение развивает воображение и улучшает навыки самовыражения.",
    "Регулярная обратная связь помогает расти и исправлять ошибки.",
    "Проверка информации защищает от ложных новостей и манипуляций.",
    "Инициативность и самодисциплина ускоряют профессиональный рост.",
    "Цифровая приватность требует осторожности и надёжных инструментов.",
    "Культура и искусство обогащают восприятие мира и людей.",
    "Планирование бюджета предотвращает долги и повышает стабильность.",
    "Развитие памяти требует повторения и связи нового со знакомым.",
    "Чёткие ожидания и роли улучшают взаимодействие в команде.",
    "Гибкость мышления помогает находить нестандартные решения.",
    "Системный подход упрощает сложные задачи и процессы.",
    "Наставничество ускоряет обучение и повышает мотивацию.",
    "Доброжелательность и уважение укрепляют рабочие отношения.",
    "Анализ ошибок открывает путь к улучшению и инновациям.",
    "Ответственность за результат формирует профессионализм.",
    "Совместное принятие решений повышает вовлечённость команды.",
    "Разнообразие взглядов помогает видеть проблему шире.",
    "Постановка реалистичных сроков снижает стресс и спешку.",
    "Знание языков расширяет карьерные перспективы и сети.",
    "Умение слушать так же важно, как умение говорить.",
    "Привычка к порядку экономит время и силы.",
    "Уважение личных границ улучшает атмосферу на работе.",
    "Постепенные улучшения складываются в большие достижения.",
    "Цели без плана остаются мечтой — план превращает мечту в действие."
];

// Chinese sentences for sentence mode (50+ sentences)
const chineseSentencesBank = [
    "现代技术每天都在改变我们的生活与工作方式。",
    "持续练习能够帮助我们不断提升技能并取得成功。",
    "清晰的项目规划可以降低风险并节约资源。",
    "团队合作在角色明确与目标统一时最为高效。",
    "有效沟通能够避免误解并改善团队氛围。",
    "自我学习为职业发展打开更多机遇与可能性。",
    "适应变化是现代社会中不可或缺的能力。",
    "健康的生活方式需要均衡饮食与规律锻炼。",
    "批判性思维要求我们审查事实并验证来源。",
    "理解历史有助于我们看清当下并规划未来。",
    "耐心与坚持往往带来长期而稳定的成果。",
    "注重细节是区分普通与优秀工作的关键。",
    "言论自由是民主社会的基石与价值。",
    "在工作与生活之间保持平衡至关重要。",
    "正念练习帮助我们降低压力并提升专注。",
    "引入人工智能必须认真考虑伦理问题。",
    "对微小事物心存感激能塑造积极心态。",
    "完善的基础设施是经济增长的重要条件。",
    "公众演讲能力需要通过实践与反思来提升。",
    "保持开放心态能帮助我们理解不同的观点。",
    "明确目标与分步行动让达成成果更为简单。",
    "对环境负责是我们给予后代的承诺。",
    "信任建立不易，却可能因疏忽而瞬间失去。",
    "良好的工作环境会提升生产力与满意度。",
    "合理的时间管理能提高效率并减少焦虑。",
    "冥想练习能带来平静与思维的清晰。",
    "协作能力对于集体项目的成功至关重要。",
    "广泛阅读能扩展视野并提升表达能力。",
    "持续的反馈帮助我们成长并修正错误。",
    "核实信息可让我们远离虚假新闻与操控。",
    "主动与自律能加速职业成长与突破。",
    "数字隐私需求更安全更可靠的防护。",
    "文化与艺术能丰富我们的想象与世界观。",
    "预算规划能够避免负债并提升稳定性。",
    "记忆的提升需要重复与联结新旧知识。",
    "明确的期望与角色有助于团队协作。",
    "思维的灵活性能帮助我们找到创意方案。",
    "系统化的思考能简化复杂问题与流程。",
    "导师指导可加快学习并增强动力。",
    "善意与尊重能改善人际关系与合作。",
    "对错误的分析可以带来改进与创新。",
    "对结果负责是专业精神的体现。",
    "共同决策能够提升团队的参与度。",
    "多样的观点有助于更全面地看待问题。",
    "制定合理期限可以减少压力与匆忙。",
    "掌握多种语言能拓展职业与人脉。",
    "倾听的能力与表达同样重要。",
    "保持条理有助于节省时间与精力。",
    "尊重个人边界能营造更好的工作氛围。",
    "微小的进步积累可成就巨大成果。",
    "没有计划的目标只是梦想，计划让梦想成真。"
];

// Hindi sentences for sentence mode (50+ sentences)
const hindiSentencesBank = [
    "आधुनिक तकनीक हर दिन हमारे जीवन और काम को बदल रही है।",
    "लगातार अभ्यास से कौशल में निखार आता है और सफलता मिलती है।",
    "स्पष्ट परियोजना योजना जोखिम कम करती है और संसाधन बचाती है।",
    "टीमवर्क तब प्रभावी होता है जब भूमिकाएँ स्पष्ट और लक्ष्य साझा हों।",
    "सार्थक संचार गलतफहमी को रोकता है और माहौल बेहतर बनाता है।",
    "स्व-अध्ययन करियर में नई संभावनाएँ और अवसर खोलता है।",
    "परिवर्तन के प्रति अनुकूलन आधुनिक दुनिया में आवश्यक है।",
    "स्वस्थ जीवनशैली के लिए संतुलित आहार और नियमित व्यायाम जरूरी हैं।",
    "आलोचनात्मक सोच तथ्यों के विश्लेषण और स्रोतों की जाँच माँगती है।",
    "इतिहास को समझना वर्तमान को समझने और बेहतर भविष्य बनाने में मदद करता है।",
    "धैर्य और दृढ़ता दीर्घकालिक परिणामों की कुंजी हैं।",
    "विवरणों पर ध्यान उत्कृष्ट काम को सामान्य काम से अलग करता है।",
    "अभिव्यक्ति की स्वतंत्रता लोकतांत्रिक समाज की नींव है।",
    "काम और निजी जीवन के बीच संतुलन कल्याण के लिए आवश्यक है।",
    "माइंडफुलनेस तनाव घटाती है और एकाग्रता बढ़ाती है।",
    "कृत्रिम बुद्धिमत्ता के उपयोग में नैतिकता पर गंभीर विचार ज़रूरी है।",
    "छोटी चीज़ों के प्रति कृतज्ञता सकारात्मक दृष्टिकोण को मजबूत करती है।",
    "मजबूत बुनियादी ढाँचा आर्थिक विकास का आधार है।",
    "जनसम्पर्क कौशल अभ्यास और चिंतन से बेहतर होते हैं।",
    "खुले मन से विचार अलग-अलग दृष्टिकोणों को समझने में मदद करते हैं।",
    "स्पष्ट लक्ष्य और चरणबद्ध कदम परिणामों तक पहुँच आसान बनाते हैं।",
    "पर्यावरण के प्रति ज़िम्मेदारी आने वाली पीढ़ियों के लिए हमारा वादा है।",
    "विश्वास बनाना कठिन है, लेकिन असावधानी से तुरंत खो सकता है।",
    "उत्तम कार्य वातावरण उत्पादकता और संतुष्टि बढ़ाता है।",
    "समय का समझदारी से प्रबंधन दक्षता बढ़ाता है और चिंता घटाता है।",
    "ध्यान का अभ्यास मन को शांत और विचारों को स्पष्ट करता है।",
    "सहयोग कौशल समूह परियोजनाओं की सफलता में महत्वपूर्ण हैं।",
    "विस्तृत पठन कल्पना को समृद्ध करता है और अभिव्यक्ति में सुधार करता है।",
    "निरंतर प्रतिक्रिया वृद्धि और त्रुटि सुधार में सहायक होती है।",
    "सूचना सत्यापन हमें झूठी खबरों और हेरफेर से बचाता है।",
    "सक्रियताऔर आत्म-अनुशासन व्यावसायिक विकास को तेज करते हैं।",
    "डिजिटल निजता के लिए सुरक्षित और विश्वसनीय साधन आवश्यक हैं।",
    "संस्कृति और कला हमारी दृष्टि और कल्पना को समृद्ध करते हैं।",
    "बजट योजना ऋण से बचाती है और स्थिरता बढ़ाती है।",
    "स्मृति में सुधार के लिए पुनरावृत्ति और नई-पुरानी कड़ियाँ आवश्यक हैं।",
    "स्पष्ट अपेक्षाएँ और भूमिकाएँ टीम सहयोग को बेहतर बनाती हैं।",
    "लचीली सोच रचनात्मक समाधान खोजने में मदद करती है।",
    "संगठित दृष्टिकोण जटिल कार्यों और प्रक्रियाओं को सरल करता है।",
    "मार्गदर्शन सीखने को तेज करता है और प्रेरणा बढ़ाता है।",
    "दया और सम्मान संबंधों और सहयोग को मजबूत करते हैं।",
    "त्रुटियों का विश्लेषण सुधार और नवाचार का मार्ग खोलता है।",
    "परिणाम के प्रति जिम्मेदारी पेशेवरता की पहचान है।",
    "सह-निर्णय टीम की भागीदारी और प्रतिबद्धता बढ़ाता है।",
    "विचारों की विविधता समस्या को व्यापक रूप से देखने में मदद करती है।",
    "यथार्थवादी समयसीमाएँ तनाव कम करती हैं और जल्दबाज़ी रोकती हैं।",
    "भाषाओं का ज्ञान करियर और नेटवर्क का विस्तार करता है।",
    "सुनने की क्षमता बोलने जितनी ही महत्वपूर्ण है।",
    "व्यवस्थित आदतें समय और ऊर्जा बचाती हैं।",
    "व्यक्तिगत सीमाओं का सम्मान बेहतर कार्य वातावरण बनाता है।",
    "छोटे सुधार मिलकर बड़े उपलब्धियों में बदल जाते हैं।",
    "बिना योजना के लक्ष्य सिर्फ़ सपने होते हैं — योजना उन्हें क्रिया में बदलती है।"
];

// Set default sentence bank to English
let wordsBank = englishSentencesBank;
// derive a word list from provided sentences for random sentence generation
let sentenceWordList = wordsBank.join(' ').split(/\s+/).filter(Boolean);

let sentenceMode = false; // toggles between word and sentence modes
let sentenceText = "";
let typedCharsTotal = 0;
let mistakeWords = {};
let practiceMode = false;
const modeDisplay = document.getElementById('mode');
let typedCorrectTotal = 0; // cumulative correct chars from completed items (sentences/words)
// --- Levels state
const levelsContainer = document.getElementById('levels-container');
const startLevelsBtn = document.getElementById('start-levels-btn');
let levelMode = false;
let currentLevel = -1;
let levelTarget = 0;
let levelCorrect = 0;
let prevWords = null; // to restore after level session

const wordDisplay = document.getElementById('word-display');
wordDisplay.dir = 'ltr';
wordDisplay.style.textAlign = 'left';
const inputField = document.getElementById('input-field');
const wpmDisplay = document.getElementById('wpm');
const timerDisplay = document.getElementById('timer');
const lastScoreDisplay = document.getElementById('last-score');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const modeBtn = document.getElementById('mode-btn');
const highscoreDisplay = document.getElementById('highscore');
const progressBar = document.getElementById('progress');
const timeBtns = document.querySelectorAll('.time-btn');
var resultsModal = document.getElementById('results-modal');

// new UI refs: levels text split + music controls
const levelsTextarea = document.getElementById('levels-textarea');
const splitTextBtn = document.getElementById('split-text-btn');
const songSelect = document.getElementById('song-select');
const musicEnableCheckbox = document.getElementById('music-enable');
const musicVolumeInput = document.getElementById('music-volume');
const suddenDeathCheckbox = document.getElementById('sudden-death');
const musicAutoplayCheckbox = document.getElementById('music-autoplay');
 

var finalWpmEl = document.getElementById('final-wpm');
var finalAccEl = document.getElementById('final-acc');
var resultCanvas = document.getElementById('result-chart');
var playAgainBtn = document.getElementById('play-again');
var closeResultsBtn = document.getElementById('close-results');

let wpmHistory = [];

// Helper: persist & load weak-word stats and last score
function saveMistakes() {
    try { localStorage.setItem('ts_mistakes', JSON.stringify(mistakeWords)); } catch (e) { }
}
function saveLastScore(score) {
    try { localStorage.setItem('ts_last_score', String(score)); } catch (e) { }
    if (lastScoreDisplay) lastScoreDisplay.innerText = String(score);
}

// Load persisted values if present
try {
    const loaded = localStorage.getItem('ts_mistakes');
    if (loaded) mistakeWords = JSON.parse(loaded);
} catch (e) { mistakeWords = {}; }
try {
    const s = parseInt(localStorage.getItem('ts_last_score') || '0', 10);
    if (lastScoreDisplay) lastScoreDisplay.innerText = String(s || 0);
} catch (e) { /* ignore */ }

highscoreDisplay.innerText = highScore;
inputField.disabled = true;

// Sync initial time preset with active button
const activePreset = document.querySelector('.time-btn.active');
if (activePreset) {
    testDuration = parseInt(activePreset.dataset.seconds, 10);
    timeLeft = testDuration;
    timerDisplay.innerText = timeLeft;
}
// Ensure progress bar starts full and personal best shows for current mode/duration
if (progressBar) progressBar.style.width = '100%';
if (typeof updatePersonalBestDisplay === 'function') updatePersonalBestDisplay();
function renderTextAsChars(text) {
    wordDisplay.innerHTML = '';
    const frag = document.createDocumentFragment();
    for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        const span = document.createElement('span');
        span.className = 'char';
        span.dataset.index = i;
        span.textContent = ch === ' ' ? '\u00A0' : ch;
        frag.appendChild(span);
    }
    wordDisplay.appendChild(frag);
}

function placeCaretAt(pos) {
    // remove existing caret
    const old = wordDisplay.querySelector('.caret');
    if (old) old.remove();
    const target = wordDisplay.querySelector(`.char[data-index="${pos}"]`);
    const caret = document.createElement('span');
    caret.className = 'caret';
    if (target) target.insertAdjacentElement('beforebegin', caret);
    else wordDisplay.appendChild(caret); // at end
}

function updateCharHighlights(typed) {
    const chars = wordDisplay.querySelectorAll('.char');
    for (let i = 0; i < chars.length; i++) {
        const el = chars[i];
        const expected = el.textContent === '\u00A0' ? ' ' : el.textContent;
        if (i < typed.length) {
            if (typed[i] === expected) {
                el.classList.add('correct'); el.classList.remove('wrong');
            } else {
                el.classList.add('wrong'); el.classList.remove('correct');
            }
        } else {
            el.classList.remove('correct'); el.classList.remove('wrong');
        }
    }
    placeCaretAt(typed.length);
}

// compute accuracy based on completed chars + current typed
function computeAccuracy() {
    const typedNow = inputField.value;
    let correctNow = 0;

    if (sentenceMode) {
        for (let i = 0; i < typedNow.length; i++) {
            if (typedNow[i] === sentenceText[i]) correctNow++;
        }
    } else {
        // current displayed word
        const displayed = Array.from(wordDisplay.querySelectorAll('.char')).map(c => c.textContent === '\u00A0' ? ' ' : c.textContent).join('');
        for (let i = 0; i < typedNow.length; i++) {
            if (typedNow[i] === displayed[i]) correctNow++;
        }
    }

    const totalTyped = typedCharsTotal + typedNow.length;
    const totalCorrect = typedCorrectTotal + correctNow;
    return totalTyped === 0 ? 100 : Math.round((totalCorrect / totalTyped) * 100);
}

function showWord() {
    if (sentenceMode) {
        if (!sentenceText) generateSentenceMode();
        wordDisplay.classList.add('sentence-mode');
        renderTextAsChars(sentenceText || '');
        wordDisplay.style.color = "#e2b714";
        placeCaretAt(0);
    } else {
        wordDisplay.classList.remove('sentence-mode');
        // If practice mode is enabled and we have tracked weak words, pick from them
        let current;
        if (practiceMode && Object.keys(mistakeWords).length > 0) {
            const weakWords = Object.keys(mistakeWords);
            current = weakWords[Math.floor(Math.random() * weakWords.length)];
        } else {
            const randIndex = Math.floor(Math.random() * words.length);
            current = words[randIndex];
        }
        renderTextAsChars(current);
        wordDisplay.style.color = "#e2b714";
        placeCaretAt(0);
    }
}

// --- Levels: split words into sections and handle level selection
function buildLevels() {
    if (!levelsContainer) return;
    const sections = Array.from(levelsContainer.querySelectorAll('.level-section'));
    // If user provided custom text already, use that split
    try {
        const raw = localStorage.getItem('ts_levels_custom');
        if (raw) {
            const arr = JSON.parse(raw);
            if (Array.isArray(arr) && arr.length) {
                const per = Math.ceil(arr.length / sections.length) || 1;
                for (let i = 0; i < sections.length; i++) {
                    const slice = arr.slice(i * per, i * per + per);
                    const textEl = sections[i].querySelector('.level-text');
                    const statusEl = sections[i].querySelector('.level-status');
                    textEl.innerText = slice.join(' ');
                    statusEl.innerText = 'Locked';
                    sections[i].classList.remove('completed','active','failed');
                    sections[i].classList.add('locked');
                    sections[i].dataset.levelIndex = i;
                    // Do NOT attach click handlers — Start Levels is the only way to begin
                }
                return;
            }
        }
    } catch (e) { /* ignore */ }

    // fallback: split from current language words
    const all = words.slice(); // use current language words
    const per = Math.ceil(all.length / sections.length) || 1;
    for (let i = 0; i < sections.length; i++) {
        const start = i * per;
        const slice = all.slice(start, start + per);
        const textEl = sections[i].querySelector('.level-text');
        const statusEl = sections[i].querySelector('.level-status');
        textEl.innerText = slice.join(' ');
        statusEl.innerText = 'Locked';
        sections[i].classList.remove('completed','active','failed');
        sections[i].classList.add('locked');
        sections[i].dataset.levelIndex = i;
        // no click handlers — levels are revealed programmatically
    }
}

function startLevels() {
    if (!levelsContainer) return;
    // toggle visibility
    const isHidden = levelsContainer.style.display === 'none' || getComputedStyle(levelsContainer).display === 'none';
    levelsContainer.style.display = isHidden ? 'block' : 'none';
    if (isHidden) buildLevels();
}

function startLevel(index) {
    if (!levelsContainer) return;
    const sections = Array.from(levelsContainer.querySelectorAll('.level-section'));
    const sec = sections[index];
    if (!sec) return;

    // don't start locked levels
    if (sec.classList.contains('locked')) { showToast('Level is locked'); return; }

    // prepare level words
    const textWords = sec.querySelector('.level-text').innerText.split(/\s+/).filter(Boolean);
    if (!textWords.length) { showToast('This level has no words'); return; }

    // set state
    levelMode = true;
    currentLevel = index;
    levelCorrect = 0;
    levelTarget = Math.max(5, Math.ceil(textWords.length / 3)); // reasonable target
    prevWords = words;
    words = textWords.slice();

    // UI
    sections.forEach(s => s.classList.remove('active'));
    sec.classList.add('active');
    sec.querySelector('.level-status').innerText = `0/${levelTarget}`;

    // start session
    resetGame();
    startGame();

    // ensure input is focused so typing works immediately
    setTimeout(() => { inputField.disabled = false; try { inputField.focus(); } catch(e){} }, 60);

    // show HUD level
    const legendLevel = document.getElementById('legend-level'); if (legendLevel) legendLevel.innerText = String(index + 1);

    showToast(`Level ${index + 1} started — target ${levelTarget} words`);
}

function completeLevel() {
    const sections = Array.from(levelsContainer.querySelectorAll('.level-section'));
    const sec = sections[currentLevel];
    if (sec) {
        sec.classList.remove('active');
        sec.classList.add('completed');
        sec.querySelector('.level-status').innerText = 'Completed';
    }

    // unlock next level (if any)
    const nextIndex = currentLevel + 1;
    if (sections[nextIndex]) {
        const next = sections[nextIndex];
        next.classList.remove('locked');
        next.querySelector('.level-status').innerText = 'Incomplete';
        next.style.display = '';
        showToast(`Level ${nextIndex + 1} unlocked!`, 1400);
    } else {
        showToast('All levels completed!', 1600);
    }

    // stop and restore
    levelMode = false;
    currentLevel = -1;
    words = prevWords || words;
    prevWords = null;

    // stop music
    stopBackgroundMusic();

    // stop the session and show results
    clearInterval(timer);
    isPlaying = false;
    inputField.disabled = true;
    const finalWPM = parseInt(wpmDisplay.innerText) || 0;
    const accuracyPercent = computeAccuracy();
    saveLastScore(finalWPM);
    if (!practiceMode) {
        const key = modeBestKey();
        const prevBest = parseInt(localStorage.getItem(key) || '0');
        if (finalWPM > prevBest) localStorage.setItem(key, String(finalWPM));
    }
    showResults(finalWPM, accuracyPercent);
}

function failLevel() {
    const sections = Array.from(levelsContainer.querySelectorAll('.level-section'));
    const sec = sections[currentLevel];
    if (sec) {
        sec.classList.remove('active');
        sec.classList.add('failed');
        sec.querySelector('.level-status').innerText = 'Failed';
    }
    levelMode = false;
    currentLevel = -1;
    words = prevWords || words;
    prevWords = null;

    // stop music
    stopBackgroundMusic();

    // stop the session and show results
    clearInterval(timer);
    isPlaying = false;
    inputField.disabled = true;
    const finalWPM = parseInt(wpmDisplay.innerText) || 0;
    const accuracyPercent = computeAccuracy();
    saveLastScore(finalWPM);
    showToast('Level completed!', 1400);
    showResults(finalWPM, accuracyPercent);
}

function changeLanguage() {
    currentLang = document.getElementById('lang').value;
    words = wordData[currentLang];
    // Switch sentence bank based on selected language
    wordsBank = getSentenceBank(currentLang);
    // Regenerate sentenceWordList from the new wordsBank
    sentenceWordList = wordsBank.join(' ').split(/\s+/).filter(Boolean);
    // Set RTL for Hebrew, LTR for others
    const isRTL = currentLang === 'hebrew';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.dir = isRTL ? 'rtl' : 'ltr';
    if (wordDisplay) {
        wordDisplay.dir = isRTL ? 'rtl' : 'ltr';
        wordDisplay.style.textAlign = isRTL ? 'right' : 'left';
    }
    resetGame(); // When language changes, restart the game
    if (levelsContainer) buildLevels();
}

function resetGame() {
    clearInterval(timer);
    timeLeft = testDuration;
    score = 0;
    typedCharsTotal = 0;
    typedCorrectTotal = 0;
    wpmHistory = [];
    isPlaying = false;
    timerDisplay.innerText = timeLeft;
    wpmDisplay.innerText = 0;
    inputField.value = '';
    inputField.disabled = true;
    startBtn.disabled = false;
    restartBtn.disabled = true;
    progressBar.style.width = '100%';
    // reflect mode in UI
    modeDisplay.innerText = practiceMode ? 'Practice' : (sentenceMode ? 'Sentence' : 'Normal');
    // clear/restore level state
    levelMode = false; currentLevel = -1; levelTarget = 0; levelCorrect = 0; prevWords = null; if (levelsContainer) Array.from(levelsContainer.querySelectorAll('.level-section')).forEach(s => s.classList.remove('active'));
    // stop background music when resetting
    stopBackgroundMusic();
    // restore persisted last score if available
    try { if (lastScoreDisplay) lastScoreDisplay.innerText = String(parseInt(localStorage.getItem('ts_last_score') || '0', 10) || 0); } catch (e) { if (lastScoreDisplay) lastScoreDisplay.innerText = '0'; }
    const legendLevel = document.getElementById('legend-level'); if (legendLevel) legendLevel.innerText = '-';
    showWord();
    updatePersonalBestDisplay();
}

function startGame() {
    if (isPlaying) return;
    inputField.disabled = false;
    try { inputField.focus(); } catch (e) { }
    // ensure focus after UI updates (helps on some browsers)
    setTimeout(() => { try { inputField.disabled = false; inputField.focus(); } catch (e) {} }, 60);
    startBtn.disabled = true;
    restartBtn.disabled = false;
    isPlaying = true;
    score = 0;
    typedCharsTotal = 0;
    typedCorrectTotal = 0;
    wpmHistory = [];
    timeLeft = testDuration;
    timerDisplay.innerText = timeLeft;
    wpmDisplay.innerText = 0;
    showWord();
    startTimer();
    updatePersonalBestDisplay();
}

function restartGame() {
    resetGame();
    startGame();
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

// Map language to its sentence bank
function getSentenceBank(lang) {
    switch (lang) {
        case 'hebrew': return hebrewSentencesBank;
        case 'russian': return russianSentencesBank;
        case 'china': return chineseSentencesBank;
        case 'india': return hindiSentencesBank;
        default: return englishSentencesBank;
    }
}

// Return one or more full sentences from the current bank
function generateSentence(count = 1) {
    const bank = wordsBank && wordsBank.length ? wordsBank : englishSentencesBank;
    let out = [];
    for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * bank.length);
        out.push(bank[idx]);
    }
    return out.join(' ');
}

function generateSentenceMode(count = 1) {
    sentenceText = generateSentence(count);
}

modeBtn.addEventListener('click', () => {
    sentenceMode = !sentenceMode;
    modeBtn.classList.toggle('active', sentenceMode);
    modeBtn.innerText = sentenceMode ? 'Mode: Sentence' : 'Mode: Word';
    resetGame();
    if (sentenceMode) generateSentenceMode();
    showWord();
});

// practice mode toggle
const practiceBtn = document.getElementById('practice-btn');
practiceBtn.addEventListener('click', () => {
    practiceMode = !practiceMode;
    practiceBtn.classList.toggle('active', practiceMode);
    if (practiceMode) {
        modeDisplay.innerText = 'Practice';
        showToast('Practice Mode ON — weak-word training');
        resetGame();
    } else {
        modeDisplay.innerText = sentenceMode ? 'Sentence' : 'Normal';
        resetGame();
    }
});


inputField.addEventListener('input', () => {
    if (!isPlaying) {
        isPlaying = true;
        startTimer();
    }
    
    const typedText = inputField.value;

    if (sentenceMode) {
        if (typedText.length > sentenceText.length) {
            inputField.value = typedText.slice(0, sentenceText.length);
            return;
        }
        updateCharHighlights(typedText);

        if (typedText === sentenceText) {
            let correctNow = 0;
            for (let i = 0; i < typedText.length; i++) {
                if (typedText[i] === sentenceText[i]) correctNow++;
            }
            typedCharsTotal += sentenceText.length;
            typedCorrectTotal += correctNow;
            inputField.value = '';
            generateSentenceMode();
            showWord();
            updateWPM();
            return;
        }
        updateWPM();
    } else {
        const currentWord = Array.from(wordDisplay.querySelectorAll('.char'))
            .map(c => c.textContent === '\u00A0' ? ' ' : c.textContent).join('');

        if (currentWord.startsWith(typedText)) {
            wordDisplay.style.color = "#e2b714"; // Normal color
            updateCharHighlights(typedText);
        } else {
            wordDisplay.style.color = "#ca4754"; // Red color for error
            
            if (!mistakeWords[currentWord]) {
                mistakeWords[currentWord] = 0;
            }
            mistakeWords[currentWord]++;
            saveMistakes();
            playIncorrectSound();

            // Sudden Death Logic
            if (settings.suddenDeath) {
                showToast('Sudden Death — Mistake detected!');
                setTimeout(() => {
                    if (levelMode && currentLevel >= 0) {
                        startLevel(currentLevel); // Restart specific level
                    } else {
                        restartGame(); // Restart normal game
                    }
                }, 200);
                return;
            }
            updateCharHighlights(typedText);
        }

        if (typedText === currentWord) {
            score++;
            typedCharsTotal += currentWord.length;
            typedCorrectTotal += currentWord.length;
            playCorrectSound();

            if (levelMode) {
                levelCorrect++;
                const sections = Array.from(document.querySelectorAll('.level-section'));
                const sec = sections[currentLevel];
                const statusEl = sec ? sec.querySelector('.level-status') : null;
                if (statusEl) statusEl.innerText = `${levelCorrect}/${levelTarget}`;
                if (levelCorrect >= levelTarget) {
                    completeLevel();
                    inputField.value = '';
                    updateWPM();
                    return;
                }
            }
            showWord();
            inputField.value = '';
            updateWPM();
        }
    }
});

function updateWPM() {
    let timeSpent = testDuration - timeLeft;
    if (timeSpent > 0) {
        let wpm = 0;
        if (!sentenceMode) {
            wpm = Math.round((score / timeSpent) * 60);
        } else {
            const typedChars = typedCharsTotal + inputField.value.length;
            wpm = Math.round((typedChars / 5) * (60 / timeSpent));
        }
        wpmDisplay.innerText = wpm;
        // update HUD legend
        const legendWPM = document.getElementById('legend-wpm'); if (legendWPM) legendWPM.innerText = String(wpm);
        const legendAcc = document.getElementById('legend-accuracy'); if (legendAcc) legendAcc.innerText = String(computeAccuracy());
    }
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--; //
            timerDisplay.innerText = timeLeft;
            let pct = (timeLeft / testDuration) * 100;
            progressBar.style.width = pct + '%';
            // record WPM for the chart & real-time update
            updateWPM();
            wpmHistory.push(parseInt(wpmDisplay.innerText) || 0);
        } else {
            clearInterval(timer); //
            isPlaying = false;
            inputField.disabled = true;
            let finalWPM = parseInt(wpmDisplay.innerText) || 0;
            let accuracyPercent = computeAccuracy();

            // If we were in a level and didn't reach target, mark as failed
            if (levelMode) {
                if (levelCorrect >= levelTarget) {
                    completeLevel();
                } else {
                    failLevel();
                }
            }

            // record last score in UI and persist
            if (lastScoreDisplay) lastScoreDisplay.innerText = String(finalWPM);
            saveLastScore(finalWPM);

            // per-mode best storage (skip when practicing)
            if (!practiceMode) {
                const key = modeBestKey();
                const prevBest = parseInt(localStorage.getItem(key) || '0');
                if (finalWPM > prevBest) {
                    localStorage.setItem(key, String(finalWPM));
                    highscoreDisplay.innerText = finalWPM;
                } else {
                    highscoreDisplay.innerText = prevBest || highScore;
                }
            }

            showResults(finalWPM, accuracyPercent);
        }
    }, 1000);
}

// --- Settings: theme, brightness, sounds & vibration ------------------------------
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings-panel');
const themeDarkBtn = document.getElementById('theme-dark');
const themeLightBtn = document.getElementById('theme-light');
const brightnessInput = document.getElementById('brightness');
const soundsCheckbox = document.getElementById('sounds');
const vibrationCheckbox = document.getElementById('vibration');

let audioCtx = null;

const settings = {
    theme: localStorage.getItem('ts_theme') || 'dark',
    brightness: parseFloat(localStorage.getItem('ts_brightness') || '1'),
    sounds: localStorage.getItem('ts_sounds') === 'true',
    vibration: localStorage.getItem('ts_vibration') === 'true',
    music: localStorage.getItem('ts_music') === 'true',
    musicVolume: parseFloat(localStorage.getItem('ts_music_volume') || '0.20'),
    suddenDeath: localStorage.getItem('ts_sudden') === 'true',
    musicAutoplay: localStorage.getItem('ts_music_autoplay') === 'true'
};

function saveSettings() {
    localStorage.setItem('ts_theme', settings.theme);
    localStorage.setItem('ts_brightness', String(settings.brightness));
    localStorage.setItem('ts_sounds', String(settings.sounds));
    localStorage.setItem('ts_vibration', String(settings.vibration));
    localStorage.setItem('ts_music', String(settings.music));
    localStorage.setItem('ts_music_volume', String(settings.musicVolume));
    localStorage.setItem('ts_sudden', String(settings.suddenDeath));
    localStorage.setItem('ts_music_autoplay', String(settings.musicAutoplay));
}

function playClickSound() {
    if (!settings.sounds) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'sine';
        o.frequency.value = 800;
        g.gain.setValueAtTime(0.03, audioCtx.currentTime);
        o.connect(g); g.connect(audioCtx.destination);
        o.start();
        o.stop(audioCtx.currentTime + 0.06);
    } catch (e) {
        // ignore
    }
}

// --- Music & SFX -------------------------------------------------------------
let bgOsc1 = null, bgOsc2 = null, bgGain = null, musicPlaying = false;

function startBackgroundMusic(songId = 'pad', levelIndex = 0) {
    if (!settings.music) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        stopBackgroundMusic();
        bgGain = audioCtx.createGain();
        bgGain.gain.value = settings.musicVolume || 0.18;
        bgGain.connect(audioCtx.destination);

        // simple generated tracks by id
        if (songId === 'pulse') {
            bgOsc1 = audioCtx.createOscillator();
            bgOsc1.type = 'sawtooth';
            bgOsc1.frequency.value = 110 + levelIndex * 20;
            const lfo = audioCtx.createOscillator();
            lfo.frequency.value = 2.5;
            const lfoGain = audioCtx.createGain();
            lfoGain.gain.value = 40;
            lfo.connect(lfoGain);
            lfoGain.connect(bgOsc1.frequency);
            bgOsc1.connect(bgGain);
            bgOsc1.start(); lfo.start();
            musicPlaying = true;
            bgOsc1._lfo = lfo; // track lfo to stop it later
        } else if (songId === 'lofi') {
            bgOsc1 = audioCtx.createOscillator(); bgOsc1.type = 'sine'; bgOsc1.frequency.value = 70 + levelIndex * 6; bgOsc1.connect(bgGain); bgOsc1.start();
            bgOsc2 = audioCtx.createOscillator(); bgOsc2.type = 'triangle'; bgOsc2.frequency.value = 110 + levelIndex * 12; bgOsc2.connect(bgGain); bgOsc2.start();
            musicPlaying = true;
        } else {
            // pad
            bgOsc1 = audioCtx.createOscillator(); bgOsc1.type = 'sine'; bgOsc1.frequency.value = 55 + levelIndex * 8; bgOsc1.connect(bgGain); bgOsc1.start();
            bgOsc2 = audioCtx.createOscillator(); bgOsc2.type = 'sine'; bgOsc2.frequency.value = 110 + levelIndex * 16; const det = audioCtx.createGain(); det.gain.value = 0.002; bgOsc2.connect(bgGain); bgOsc2.start();
            musicPlaying = true;
        }
    } catch (e) { /* ignore */ }
}

function stopBackgroundMusic() {
    try {
        if (bgOsc1) { if (bgOsc1._lfo) bgOsc1._lfo.stop(); bgOsc1.stop(); bgOsc1.disconnect(); bgOsc1 = null; }
        if (bgOsc2) { bgOsc2.stop(); bgOsc2.disconnect(); bgOsc2 = null; }
        if (bgGain) { bgGain.disconnect(); bgGain = null; }
        musicPlaying = false;
    } catch (e) { }
}

function playCorrectSound() {
    if (!settings.sounds) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const o = audioCtx.createOscillator(); const g = audioCtx.createGain(); o.type = 'triangle'; o.frequency.value = 1200; g.gain.setValueAtTime(0.0001, audioCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.06, audioCtx.currentTime + 0.001); g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12); o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime + 0.12);
    } catch (e) { }
}

function playIncorrectSound() {
    if (!settings.sounds) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const o = audioCtx.createOscillator(); const g = audioCtx.createGain(); o.type = 'square'; o.frequency.value = 240; g.gain.setValueAtTime(0.04, audioCtx.currentTime); o.connect(g); g.connect(audioCtx.destination); o.start(); o.stop(audioCtx.currentTime + 0.18);
    } catch (e) { }
}

// populate available songs
if (songSelect) {
    const opts = [{id:'pad',name:'Ambient Pad'},{id:'pulse',name:'Minimal Pulse'},{id:'lofi',name:'Lo-fi Loop'}];
    opts.forEach(o => { const el = document.createElement('option'); el.value = o.id; el.innerText = o.name; songSelect.appendChild(el); });
}



function doVibrate() {
    if (settings.vibration && navigator.vibrate) navigator.vibrate(18);
}

settingsBtn.addEventListener('click', () => {
    settingsPanel.hidden = !settingsPanel.hidden;
    playClickSound();
    doVibrate();
});

document.getElementById('theme-dark').addEventListener('click', () => { settings.theme = 'dark'; applySettings(); saveSettings(); playClickSound(); });
document.getElementById('theme-light').addEventListener('click', () => { settings.theme = 'light'; applySettings(); saveSettings(); playClickSound(); });
document.getElementById('theme-matrix').addEventListener('click', () => { settings.theme = 'matrix'; applySettings(); saveSettings(); playClickSound(); });
document.getElementById('theme-retro').addEventListener('click', () => { settings.theme = 'retro'; applySettings(); saveSettings(); playClickSound(); });

brightnessInput.addEventListener('input', (e) => {
    settings.brightness = parseFloat(e.target.value);
    document.documentElement.style.setProperty('--brightness', settings.brightness);
    saveSettings();
});

soundsCheckbox.addEventListener('change', (e) => { settings.sounds = e.target.checked; saveSettings(); playClickSound(); });
vibrationCheckbox.addEventListener('change', (e) => { settings.vibration = e.target.checked; saveSettings(); doVibrate(); });

// time preset buttons
timeBtns.forEach(b => b.addEventListener('click', (e) => {
    timeBtns.forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    testDuration = parseInt(b.dataset.seconds, 10);
    resetGame();
    updatePersonalBestDisplay();
}));

function updatePersonalBestDisplay() {
    const key = modeBestKey();
    const val = parseInt(localStorage.getItem(key) || '0');
    highscoreDisplay.innerText = val || highScore || 0;
}

// results modal handlers
function drawChart(history) {
    const ctx = resultCanvas.getContext('2d');
    const w = resultCanvas.width;
    const h = resultCanvas.height;
    ctx.clearRect(0,0,w,h);
    if (!history.length) return;
    const max = Math.max(...history, 10);
    ctx.beginPath();
    ctx.moveTo(0, h - (history[0]/max)*h);
    for (let i = 1; i < history.length; i++) {
        const x = (i / (history.length-1)) * w;
        const y = h - (history[i]/max)*h;
        ctx.lineTo(x,y);
    }
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent');
    ctx.lineWidth = 2;
    ctx.stroke();
}

function showResults(finalWPM, accuracyPercent) {
    const accText = accuracyPercent + '%';
    if (finalWpmEl) finalWpmEl.innerText = String(finalWPM);
    if (finalAccEl) finalAccEl.innerText = accText;
    const legendW = document.getElementById('legend-wpm');
    const legendA = document.getElementById('legend-accuracy');
    if (legendW) legendW.innerText = String(finalWPM);
    if (legendA) legendA.innerText = String(accuracyPercent);
    if (resultsModal) {
        resultsModal.hidden = false;
        if (resultCanvas) drawChart(wpmHistory);
    } else {
        showToast(`WPM ${finalWPM} • Acc ${accText}`);
    }
}

if (playAgainBtn) playAgainBtn.addEventListener('click', () => { if (resultsModal) resultsModal.hidden = true; resetGame(); startGame(); });
if (closeResultsBtn) closeResultsBtn.addEventListener('click', () => { if (resultsModal) resultsModal.hidden = true; });

// set per-theme class
function applySettings() {
    // theme
    document.documentElement.classList.remove('light-theme','matrix-theme','retro-theme');
    if (settings.theme === 'light') document.documentElement.classList.add('light-theme');
    if (settings.theme === 'matrix') document.documentElement.classList.add('matrix-theme');
    if (settings.theme === 'retro') document.documentElement.classList.add('retro-theme');
    themeDarkBtn.classList.toggle('active', settings.theme === 'dark');
    themeLightBtn.classList.toggle('active', settings.theme === 'light');
    // brightness
    document.documentElement.style.setProperty('--brightness', settings.brightness);
    brightnessInput.value = settings.brightness;
    // sounds & vibration
    soundsCheckbox.checked = settings.sounds;
    vibrationCheckbox.checked = settings.vibration;
    // music & sudden death
    if (musicEnableCheckbox) musicEnableCheckbox.checked = settings.music;
    if (musicVolumeInput) musicVolumeInput.value = settings.musicVolume;
    if (suddenDeathCheckbox) suddenDeathCheckbox.checked = settings.suddenDeath;
    if (musicAutoplayCheckbox) musicAutoplayCheckbox.checked = settings.musicAutoplay;
}

applySettings();

// split text -> levels
function showToast(msg, timeout = 2200) {
    try {
        let container = document.getElementById('ts-toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'ts-toast-container';
            container.style.position = 'fixed';
            container.style.right = '20px';
            container.style.bottom = '20px';
            container.style.zIndex = 99999;
            document.body.appendChild(container);
        }
        const t = document.createElement('div');
        t.className = 'ts-toast';
        t.textContent = msg;
        t.style.background = 'rgba(0,0,0,0.7)';
        t.style.color = '#fff';
        t.style.padding = '8px 10px';
        t.style.borderRadius = '6px';
        t.style.marginTop = '6px';
        t.style.fontFamily = 'Courier New, monospace';
        t.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
        container.appendChild(t);
        setTimeout(() => { t.style.transition = 'opacity 200ms'; t.style.opacity = '0'; setTimeout(() => t.remove(), 220); }, timeout);
    } catch (e) { console.log('toast', e); }
}

function splitTextIntoLevels() {
    if (!levelsContainer) return;
    let text = (levelsTextarea && levelsTextarea.value) ? levelsTextarea.value.trim() : '';
    if (!text) {
        // try to pull from lyrics-display if available
        const lyrics = document.getElementById('lyrics-display');
        if (lyrics && lyrics.innerText.trim()) text = lyrics.innerText.trim();
    }
    if (!text) { showToast('Please paste or enter text to split into levels'); return; }
    const wordsArr = text.split(/\s+/).filter(Boolean);
    const parts = 5;
    const per = Math.ceil(wordsArr.length / parts) || 1;
    const sections = Array.from(levelsContainer.querySelectorAll('.level-section'));
    for (let i = 0; i < parts; i++) {
        const slice = wordsArr.slice(i * per, i * per + per);
        const textEl = sections[i].querySelector('.level-text');
        textEl.innerText = slice.join(' ');
        sections[i].querySelector('.level-status').innerText = 'Incomplete';
    }
    try { localStorage.setItem('ts_levels_custom', JSON.stringify(wordsArr)); } catch (e) {}
    showToast('Text split into 5 levels');
}

if (splitTextBtn) splitTextBtn.addEventListener('click', splitTextIntoLevels);

// Clear weak words button
const clearWeakBtn = document.getElementById('clear-weak');
if (clearWeakBtn) {
    clearWeakBtn.addEventListener('click', () => {
        mistakeWords = {};
        saveMistakes();
        showToast('Weak words cleared');
    });
}

// music & settings listeners
if (musicEnableCheckbox) musicEnableCheckbox.addEventListener('change', (e) => { settings.music = e.target.checked; saveSettings(); if (!settings.music) stopBackgroundMusic(); });
if (musicVolumeInput) musicVolumeInput.addEventListener('input', (e) => { settings.musicVolume = parseFloat(e.target.value); saveSettings(); if (bgGain) bgGain.gain.value = settings.musicVolume; });
if (songSelect) songSelect.addEventListener('change', (e) => { if (musicPlaying) startBackgroundMusic(e.target.value, currentLevel >=0 ? currentLevel : 0); });
if (suddenDeathCheckbox) suddenDeathCheckbox.addEventListener('change', (e) => { settings.suddenDeath = e.target.checked; saveSettings(); });
if (musicAutoplayCheckbox) musicAutoplayCheckbox.addEventListener('change', (e) => { settings.musicAutoplay = e.target.checked; saveSettings(); });

// attach level starter — Start Levels is the only way to begin level mode
if (startLevelsBtn) startLevelsBtn.addEventListener('click', () => {
    // split text (textarea or lyrics), build levels and show only Level 1
    splitTextIntoLevels();
    buildLevels();
    if (levelsContainer) {
        levelsContainer.style.display = 'block';
        const sections = Array.from(levelsContainer.querySelectorAll('.level-section'));
        // reveal only the first level; others remain hidden/locked
        sections.forEach((s, i) => {
            if (i === 0) { s.classList.remove('locked'); s.querySelector('.level-status').innerText = 'Incomplete'; s.style.display = ''; }
            else { s.classList.add('locked'); s.style.display = 'none'; }
        });
    }
    // small delay then start Level 1
    setTimeout(() => startLevel(0), 150);
});
// build initial levels (if container present)
if (levelsContainer) buildLevels();

showWord();

// --- On-screen keyboard interactions ------------------------------------------------
const keyboardKeys = document.querySelectorAll('.key');

function activateKeyChar(k) {
    if (!k) return;
    const key = k === ' ' ? '.key.space' : `.key[data-key="${k}"]`;
    const el = document.querySelector(key);
    if (!el) return;
    el.classList.add('active');
    setTimeout(() => el.classList.remove('active'), 160);
}

// highlight on physical key press + key sound + Tab quick restart
document.addEventListener('keydown', (e) => {
    // ensure input is focused during play so keystrokes go there
    if (isPlaying && !inputField.disabled) {
        try { inputField.focus(); } catch (e) {}
    }

    const k = e.key.toLowerCase();
    activateKeyChar(k);
    // mechanical key sound
    playKeySound();
    doVibrate();

    // Quick restart via Tab
    if (e.key === 'Tab') {
        e.preventDefault();
        restartGame();
    }
});

// keep focus on the input while a session is playing
document.addEventListener('click', () => {
    if (isPlaying && !inputField.disabled) {
        try { inputField.focus(); } catch (e) {}
    }
});

// play a short 'clicky' key sound using WebAudio
function playKeySound() {
    if (!settings.sounds) return;
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const o = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        o.type = 'square';
        o.frequency.value = 1000 + Math.random() * 200;
        g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 0.001);
        g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.06);
        o.connect(g); g.connect(audioCtx.destination);
        o.start();
        o.stop(audioCtx.currentTime + 0.06);
    } catch (e) { }
}

// support clicking/tapping the on-screen keys to type
keyboardKeys.forEach(k => {
    k.tabIndex = 0;
    k.setAttribute('role', 'button');
    k.addEventListener('click', () => {
        const ch = k.getAttribute('data-key');
        if (ch === ' ') inputField.value += ' ';
        else inputField.value += ch;
        inputField.focus();
        inputField.dispatchEvent(new Event('input'));
        activateKeyChar(ch);
        playClickSound();
        doVibrate();
    });
    k.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            k.click();
        }
    });
});

// -----------------------------------------------------------------------------------
