---
title: Сәлем, Әлем – v3
# permalink: salem-alem
date: 2024-02-26
# tags:
#   - second tag
#   - posts with two tags
---

Бұл доменді (weblog.kz) сатып алғаныма бір жылдан асты. Осындай блог ашқым келген. Бірақ қалай бұрсам да ыңғайы келмеді. Бірнеше проблемалар болды: .kz домендеріңіз хостиңі Қазақстан аумағында болуы керек деген тәртіп бар. Әрине мемлекет өзі төлеп отырғандықтан доменге қатысты қандай талап қойса да өз еркі. Бірақ егер мемлекет халықтың жалдамалы менеджерлері десек, ал олар жұмсап отырған қаражат та халықтікі десек… демек доменді қолдану халыққа ыңғайлы, пайдалы болуы керек емес пе?

Әлемдік деңгейде қызмет көрсететін, қай жағынан алсақта алдыңғы қатарда тұрған; көшіруші емес, инноватор компаниялардық қызметі тұрғанда мен қазақстандық хостерлермен шектелгім келмейді. Баға мәселесі - бөлек әңгіме.

Сөйтіп, құда да тыныш, құдағи да риза болатын бір шешім таптым. Қысқа-нұсқа схемасы мынандай: Eleventy → GitHub → Plesk. Постты жазып болып Гитхабтағы [weblog-qaz](https://github.com/yeldarx/weblog-qaz/) деген репозиторийге `push` жасаймын. GitHub Actions сайттың статикалық нұсқасын репозиторийдің [gh-pages](https://github.com/yeldarx/weblog-qaz/tree/gh-pages) деген бұтағына салады да, Plesk-ке Webhook арқылы өзгерістер туралы _хабарлама_ жібереді. Plesk `gh-pages` бұтағындағы барлық файлдарды `httpdocs` қалтасына салып қояды. Мына мәтін сізге осылай жетті.

Yeldar.Org-қа жарияланып қойған қазақ тіліндегі постарды осы жерге көшіріп, ол жерге енді ағылшын тілді посттар жариялайын деп отырмын. Ол постардың айырмашылығын подкастиңдегі проблемаға ұқсатамын. Қазақ тілді IT-сала мен ағылшын тілді (aka әлемдік) IT-саланың арасы - жер мен көк. Сондықтан жазатын посттар да әзірге бөлек болады. Қазақ тілінде негізді түсіндіретін, үйрететін посттар жариялаймын. Кейін барып постар күрделенеді. Біз саламызда әлемдік деңгейде шешілмеген проблемаларды көтереміз. Бұған алты ай, бір жыл, не одан да көп уақыт керек болуы мүмкін. Нақты мерзімді айта алмаймын. Көреміз. Ең бастысы бастаған істі тастамау керек.

Тәжірибе көрсетіп тұрғандай постардың сілтемелірі өзгеруі әбден мүмкін екен. Сондықтан мен әр постымы тұрақты қысқа сілтеме қосамын: https://k.yeldar.org/c1Eo6 - бұл осы посттың сілтемесі. Болашақта бұл посттың негізгі сілтемесі өзгерсе де, осы сітеме арқылы тауып аласыз.
