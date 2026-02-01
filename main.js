document.addEventListener('DOMContentLoaded', async () => {
  const translations = {
    en: {
      'nav.about': 'About',
      'nav.work': 'Work',
      'nav.experience': 'Experience',
      'nav.testimonials': 'Testimonials',
      'nav.contact': 'Get in Touch',
      'hero.badge': 'Available for Bookings',
      'hero.line1': 'Bringing <span class="highlight">Live</span> Sports',
      'hero.line2': 'To <span class="highlight">Life</span>',
      'hero.subtitle': 'Live shows move fast. I deliver replays and highlights that land on time and keep the story sharp.',
      'hero.years': 'Years',
      'hero.continents': 'Continents',
      'hero.events': 'Events',
      'label.about': '01 / About',
      'label.work': '02 / Work',
      'label.experience': '03 / Experience',
      'label.testimonials': '04 / Testimonials',
      'label.trusted': 'Trusted By',
      'about.p1': 'Since 2009, I\'ve worked across live broadcast &mdash; from Serie A in Milan to the Premier League in London, from the Olympics to the NFL. I operate EVS and LSM systems for major sports productions, making sure replays and highlights land cleanly and on time.',
      'about.p2': 'I started out as an Assistant Sound Engineer, drawn in by the energy of live TV and the teamwork behind it. By 2010, I was hands-on with EVS, and I\'ve stayed with it because I love the pace, the precision, and the people.',
      'about.p3': 'Today I split my time between live sports and building new tools through RISE Broadcast &mdash; practical AI workflows that help crews move faster without losing quality.',
      'about.stat1': 'Years in Live Broadcast',
      'about.stat2': 'Markets &mdash; Milan &rsaquo; Sydney &rsaquo; London &rsaquo; Dubai',
      'about.stat3': 'Broadcasters & Production Companies',
      'work.subtitle': 'Selected work &mdash; broadcast replays, highlights, and live edits.',
      'work.asideTitle': 'Dubai World Cup 2024',
      'work.asideP1': 'This clip is a short sample of my work on the Dubai World Cup 2024 broadcast &mdash; replay timing, highlight builds, and fast-turn edits under live pressure.',
      'work.asideP2': 'Need something similar for your event? I can adapt quickly to the truck workflow and deliver clean, on-time packages.',
      'experience.title': 'Career Highlights',
      'experience.subtitle': 'Click any card to see the full details.',
      'sports.title': 'Sports Coverage',
      'sports.subtitle': 'Versatile across major sports and production styles, from stadium shows to world feeds.',
      'sports.football': 'Football',
      'sports.tennis': 'Tennis',
      'sports.horseRacing': 'Horse Racing',
      'sports.golf': 'Golf',
      'sports.sailing': 'Sailing',
      'sports.volleyball': 'Volleyball',
      'sports.motorsports': 'Motorsports',
      'tag.football': 'Football',
      'tag.golf': 'Golf',
      'tag.americanFootball': 'American Football',
      'tag.multiSport': 'Multi-Sport',
      'tag.tennis': 'Tennis',
      'tag.racing': 'Racing',
      'tag.footballEntertainment': 'Football / Entertainment',
      'tag.combat': 'Combat',
      'tag.motorsport': 'Motorsport',
      'tag.various': 'Various',
      'exp.premier.p1': '<strong>BBC Match of the Day</strong> &mdash; EVS Operator for Premier League highlights, seasons 2014/15 through 2022/23.',
      'exp.premier.p2': '<strong>BT Sport</strong> &mdash; UHD Productions for Premier League, Champions League &amp; Europa League 2015&ndash;2018.',
      'exp.premier.p3': '<strong>Amazon Prime Video</strong> &mdash; Live EVS Operation for Amazon&rsquo;s English Premier League coverage 2019&ndash;2022.',
      'exp.premier.p4': '<strong>Sky</strong> &mdash; Studio productions including English Premier League 2014&ndash;2017.',
      'exp.ucl.p1': '<strong>BT Sport</strong> &mdash; UHD Productions for Champions League &amp; Europa League 2015&ndash;2018.',
      'exp.ucl.p2': '<strong>Infront Sports &amp; Media</strong> &mdash; World Feed for Serie A Tim, Tim Cup, and Serie Bwin 2010&ndash;2013.',
      'exp.ucl.p3': '<strong>UEFA Direct</strong> &mdash; Champions League 2011/12 &amp; 2012/13, Europa League 2011&ndash;2014.',
      'exp.ucl.p4': '<strong>Gravity Media</strong> &mdash; UCL World Feed Highlights.',
      'exp.ucl.p5': '<strong>Mediaset</strong> &mdash; Domestic feed Champions League &amp; Europa League 2011&ndash;2013.',
      'exp.open.p1': '<strong>European Tour</strong> &mdash; 146th Royal Birkdale, 147th Carnoustie, 148th Portrush, 149th Royal St George, 150th Royal St Andrews, 151st Royal Liverpool, 152nd Royal Troon, 153rd Royal Portrush 2025.',
      'exp.open.p2': 'Roles included Marquee Production, 3-Hole Coverage, Par 3 Coverage, Submix &amp; Replays.',
      'exp.open.p3': 'Also covered Ryder Cup 2018 (Paris, Super ISO) and Ryder Cup 2023 (Rome, Featured Group).',
      'exp.nfl.p1': '<strong>NFL Media</strong> &mdash; Twickenham 2017&ndash;2018, Wembley 2017&ndash;2019 &amp; 2022, Tottenham 2019 &amp; 2022, Munich 2022.',
      'exp.nfl.p2': '<strong>Fox Sports</strong> &mdash; World Feed EVS Operator 2017&ndash;2019.',
      'exp.nfl.p3': '<strong>CBS Sports</strong> &mdash; Live replay for World Feed 2017&ndash;2019. Ran DCM test with Parallel Ads system.',
      'exp.nfl.p4': '<strong>ESPN</strong> &mdash; USA Feed, NFL London Games Wembley 2022.',
      'exp.olympics.p1': '<strong>Paris 2024</strong> &mdash; EVS Operator for OBS World Feed Golf. MCF (Multi Clip Feed) ensuring all shots, all countries, all moments available to rights holders.',
      'exp.olympics.p2': '<strong>Channel 4 Paralympics</strong> &mdash; Pyeongchang 2018 (Highlights &amp; break bumpers), Tokyo 2020 (Live), Beijing 2022 (Breakfast Show &amp; Closing Ceremony).',
      'exp.olympics.p3': '<strong>Asian Games 2018</strong> &mdash; Jakarta. Live replays, match &amp; set highlights for Volleyball World Feed.',
      'exp.olympics.p4': '<strong>Commonwealth Games 2022</strong> &mdash; Birmingham. Instant replay at Victoria Park for Lawn Bowls.',
      'exp.atp.p1': '<strong>ATP Masters 1000</strong> &mdash; Rome 2015&ndash;2019, Madrid 2015&ndash;2019, Monte Carlo 2015&ndash;2019, Shanghai 2018, Paris 2017&ndash;2018.',
      'exp.atp.p2': '<strong>Next Gen Finals</strong> &mdash; 2018.',
      'exp.atp.p3': '<strong>WTA</strong> &mdash; WTA 1000 Montreal, WTA 500 Zhengzhou, WTA 500 Eastbourne.',
      'exp.slams.p1': '<strong>Wimbledon</strong> &mdash; 2018 &amp; 2019 Outside Show Court 3; 2021 &amp; 2022 Court 1 coverage.',
      'exp.slams.p2': '<strong>Roland Garros 2025</strong> (Whisper) &mdash; Live replay operations for Courts 6 &amp; 7, Qualifying Rounds, and Main Draw.',
      'exp.racing.p1': '<strong>ITV Racing</strong> &mdash; Cheltenham Festival 2020&ndash;2024, Grand National 2021&ndash;2024, Royal Ascot 2018&ndash;2023, Epsom Oaks &amp; Derby 2018&ndash;2022, Glorious Goodwood 2023.',
      'exp.racing.p2': '<strong>Racecourse Media Group</strong> &mdash; Dubai World Cup Carnival &amp; Dubai World Cup 2023&ndash;2025, Dubai Racing Carnival, Super Saturday, FRN meetings.',
      'exp.racing.p3': '<strong>Seven Network</strong> &mdash; BMW Sydney Carnival 2014, Royal Randwick.',
      'exp.seriea.p1': '<strong>Sky Italia</strong> &mdash; Domestic feed Serie A Tim &amp; Serie Bwin 2011&ndash;2013. Inter Milan and Juventus matches.',
      'exp.seriea.p2': '<strong>Infront Sports &amp; Media</strong> &mdash; World Feed Serie A Tim, Tim Cup, Serie Bwin, World Series of Boxing, FIM World Superbike Championship.',
      'exp.seriea.p3': '<strong>3Zero2</strong> &mdash; Juventus FC matches 2011&ndash;2013.',
      'exp.seriea.p4': '<strong>Videe S.p.A.</strong> &mdash; X-Factor Italy Season 5 &amp; 6.',
      'exp.seriea.p5': '<strong>Mediaset</strong> &mdash; Guinness World Record Italian Edition, domestic CL &amp; Europa League.',
      'exp.seriea.p6': '<strong>RAI</strong> &mdash; Italian Women&rsquo;s Volleyball Serie A1, Cycling Tour of Lombardy.',
      'exp.mena.p1': '<strong>VT Coordinator</strong> &mdash; Saudi Pro League &amp; Kings Cup 2025&ndash;present. Coordinating replays at various locations.',
      'exp.mena.p2': '<strong>AlamiyaMedia</strong> &mdash; KSA Pro League, FIFA Club World Cup &amp; AFC Asian Football Champions 2023.',
      'exp.mena.p3': '<strong>Asian Tour Media</strong> &mdash; Submix Operator for PIF International &amp; Saudi Open 2025.',
      'exp.mena.p4': '<strong>OSN</strong> &mdash; Senior EVS Operator for ICC Cricket World Cup coverage for MENA 2017.',
      'exp.mena.p5': '<strong>Globecast</strong> &mdash; Dubai Racing TV, Mohammed bin Rashid Al Maktoum Endurance.',
      'exp.clubwc.p1': '<strong>DAZN</strong> &mdash; Fast-turnaround highlights for UK domestic broadcast. Delivered pre-match, half-time, and post-match packages integrating key moments and interviews.',
      'exp.clubwc.p2': 'Focused on quick editing, playlist management, and efficient clip turnaround under tight live production timelines.',
      'exp.combat.p1': '<strong>ITV Boxing</strong> &mdash; Eubank Jr vs Abraham at SSE Arena Wembley.',
      'exp.combat.p2': '<strong>ESPN</strong> &mdash; Tyson Fury vs Dillian Whyte at Wembley (USA Feed). MMA Professional Cage Fight.',
      'exp.combat.p3': '<strong>Rumble</strong> &mdash; Misfits Mania: Fight Before Xmas &ndash; Andrew Tate vs Chase de Moor, Dubai 2025.',
      'exp.motorsport.p1': '<strong>Goodwood Festival of Speed</strong> &mdash; 2022, 2023, 2024.',
      'exp.motorsport.p2': '<strong>BTCC</strong> &mdash; Oulton Park, Rockingham, Brands Hatch, Snetterton, Thruxton (2018&ndash;2021).',
      'exp.motorsport.p3': '<strong>MotoGP</strong> &mdash; German GP.',
      'exp.motorsport.p4': '<strong>WRC</strong> &mdash; Poland 2017, Catalunya 2017, Sweden 2018 (All Live).',
      'exp.more.p1': '<strong>Netflix</strong> &mdash; Senior VT Operator for &ldquo;Dancing Monsters&rdquo;. Led ingest and media management across five Sony PWS-4500 servers.',
      'exp.more.p2': '<strong>MLB</strong> &mdash; Sydney Opening Series 2014. Dodgers vs Diamondbacks (SSMO Operator).',
      'exp.more.p3': '<strong>Red Bull Media House</strong> &mdash; Bestival 2016, Rio Carnival 2017.',
      'exp.more.p4': '<strong>SailGP</strong> &mdash; 2019&ndash;2020 (Sydney, New York, Cowes, Bermuda).',
      'exp.more.p5': '<strong>Nitro Circus</strong> &mdash; Australian Capital Cities Tour 2014.',
      'exp.more.p6': '<strong>Fox Sports Australia / NRL / A-League</strong> &mdash; 2014 season.',
      'services.label': 'What I Do',
      'services.title': 'Specialist Skills for Live Production',
      'services.evsTitle': 'EVS Operation',
      'services.evsBody': 'Operating EVS XT and LSM systems for live multi-camera sports production. Instant replay, super slow-motion, and highlight compilation.',
      'services.vtTitle': 'VT Coordination',
      'services.vtBody': 'Managing video tape operations, ensuring seamless playback and content flow during live broadcasts.',
      'services.editTitle': 'Live Editing',
      'services.editBody': 'Real-time editing under pressure &mdash; cutting packages, building sequences, and delivering to air on deadline.',
      'services.aiTitle': 'AI & Innovation',
      'services.aiBody': 'Building AI-driven video tools and automated highlight systems through RISE Broadcast, pushing the boundaries of sports broadcasting.',
      'testimonials.title': 'What People Say',
      'contact.label': 'Get in Touch',
      'contact.title': 'Let\'s Work Together',
      'contact.subtitle': 'Available for EVS operation, live editing, and broadcast production worldwide.',
      'contact.linkedin': 'LinkedIn',
      'contact.instagram': 'Instagram',
      'contact.basedIn': 'Based in',
      'footer.copy': '© 2025 Peter Comandulli',
      'chat.inputLabel': 'Your response',
      'chat.inputPlaceholder': 'Type your response...',
      'chat.selectPlaceholder': 'Select a service',
      'chat.optionEvs': 'EVS Operator',
      'chat.optionVt': 'VT Coordinator',
      'chat.optionOther': 'Other',
      'chat.projectPlaceholder': 'Share project details...',
      'chat.otherPlaceholder': 'Tell me the service you need...',
      'chat.datesPlaceholder': 'Example: May 12-15, 2026',
      'chat.next': 'Next',
      'chat.send': 'Send',
      'chat.promptName': 'Hey! What is your name?',
      'chat.promptEmail': 'Great. What is your email address?',
      'chat.promptService': 'Which service do you need?',
      'chat.promptOther': 'Tell me the other service you need.',
      'chat.promptProject': 'Tell me about the project.',
      'chat.promptDates': 'What are the project dates?',
      'chat.ready': 'Perfect. Ready to send your request?',
      'chat.sending': 'Sending...',
      'chat.sent': 'Sent successfully.',
      'chat.thanks': 'Thanks for sending! I will be in touch shortly.',
      'chat.errorEmpty': 'Please add a response to continue.',
      'chat.errorEmail': 'Please enter a valid email address.',
      'chat.errorFast': 'Please take a moment to complete the form before sending.',
      'chat.errorGeneric': 'Something went wrong. Please try again.',
      'chat.errorNetwork': 'Network error. Please try again later.'
    },
    it: {
      'nav.about': 'Chi Sono',
      'nav.work': 'Lavori',
      'nav.experience': 'Esperienza',
      'nav.testimonials': 'Testimonianze',
      'nav.contact': 'Contattami',
      'hero.badge': 'Disponibile per Lavori',
      'hero.line1': 'Porto lo Sport <span class="highlight">Live</span>',
      'hero.line2': 'Alla <span class="highlight">Vita</span>',
      'hero.subtitle': 'Gli eventi live scorrono veloci. Consegno replay e highlight puntuali, per mantenere la storia sempre chiara.',
      'hero.years': 'Anni',
      'hero.continents': 'Continenti',
      'hero.events': 'Eventi',
      'label.about': '01 / Chi Sono',
      'label.work': '02 / Lavori',
      'label.experience': '03 / Esperienza',
      'label.testimonials': '04 / Testimonianze',
      'label.trusted': 'Mi Hanno Scelto',
      'about.p1': 'Dal 2009 lavoro nel live broadcast &mdash; dalla Serie A a Milano alla Premier League a Londra, dalle Olimpiadi alla NFL. Opero sistemi EVS e LSM per produzioni sportive di alto livello, assicurando replay e highlight puliti e puntuali.',
      'about.p2': 'Ho iniziato come Assistente Fonico, attratto dall’energia della TV live e dal lavoro di squadra. Dal 2010 sono operativo su EVS e ci sono rimasto per il ritmo, la precisione e le persone.',
      'about.p3': 'Oggi divido il mio tempo tra sport live e lo sviluppo di nuovi strumenti con RISE Broadcast &mdash; workflow AI pratici che aiutano le crew a lavorare più veloci senza perdere qualità.',
      'about.stat1': 'Anni nel Broadcast Live',
      'about.stat2': 'Mercati &mdash; Milano &rsaquo; Sydney &rsaquo; Londra &rsaquo; Dubai',
      'about.stat3': 'Emittenti & Società di Produzione',
      'work.subtitle': 'Lavori selezionati &mdash; replay, highlight e montaggi live.',
      'work.asideTitle': 'Dubai World Cup 2024',
      'work.asideP1': 'Questo clip è un breve esempio del mio lavoro sulla Dubai World Cup 2024 &mdash; tempi di replay, costruzione highlight e montaggi rapidi sotto pressione live.',
      'work.asideP2': 'Ti serve qualcosa di simile? Mi adatto velocemente al workflow del truck e consegno pacchetti puliti e puntuali.',
      'experience.title': 'Punti Salienti',
      'experience.subtitle': 'Clicca su una card per vedere i dettagli.',
      'sports.title': 'Copertura Sportiva',
      'sports.subtitle': 'Versatile su sport e formati diversi, dai grandi stadi ai world feed.',
      'sports.football': 'Calcio',
      'sports.tennis': 'Tennis',
      'sports.horseRacing': 'Corse di cavalli',
      'sports.golf': 'Golf',
      'sports.sailing': 'Vela',
      'sports.volleyball': 'Pallavolo',
      'sports.motorsports': 'Motorsport',
      'tag.football': 'Calcio',
      'tag.golf': 'Golf',
      'tag.americanFootball': 'Football americano',
      'tag.multiSport': 'Multi-sport',
      'tag.tennis': 'Tennis',
      'tag.racing': 'Corse',
      'tag.footballEntertainment': 'Calcio / Intrattenimento',
      'tag.combat': 'Combattimento',
      'tag.motorsport': 'Motorsport',
      'tag.various': 'Varie',
      'exp.premier.p1': '<strong>BBC Match of the Day</strong> &mdash; EVS Operator per gli highlights della Premier League, stagioni 2014/15&ndash;2022/23.',
      'exp.premier.p2': '<strong>BT Sport</strong> &mdash; Produzioni UHD per Premier League, Champions League &amp; Europa League 2015&ndash;2018.',
      'exp.premier.p3': '<strong>Amazon Prime Video</strong> &mdash; Operatività EVS live per la copertura Premier League di Amazon 2019&ndash;2022.',
      'exp.premier.p4': '<strong>Sky</strong> &mdash; Produzioni studio con Premier League 2014&ndash;2017.',
      'exp.ucl.p1': '<strong>BT Sport</strong> &mdash; Produzioni UHD per Champions League &amp; Europa League 2015&ndash;2018.',
      'exp.ucl.p2': '<strong>Infront Sports &amp; Media</strong> &mdash; World Feed Serie A Tim, Tim Cup e Serie Bwin 2010&ndash;2013.',
      'exp.ucl.p3': '<strong>UEFA Direct</strong> &mdash; Champions League 2011/12 &amp; 2012/13, Europa League 2011&ndash;2014.',
      'exp.ucl.p4': '<strong>Gravity Media</strong> &mdash; Highlights World Feed UCL.',
      'exp.ucl.p5': '<strong>Mediaset</strong> &mdash; Feed domestico Champions League &amp; Europa League 2011&ndash;2013.',
      'exp.open.p1': '<strong>European Tour</strong> &mdash; 146th Royal Birkdale, 147th Carnoustie, 148th Portrush, 149th Royal St George, 150th Royal St Andrews, 151st Royal Liverpool, 152nd Royal Troon, 153rd Royal Portrush 2025.',
      'exp.open.p2': 'Ruoli: Marquee Production, copertura 3 buche, copertura Par 3, submix &amp; replay.',
      'exp.open.p3': 'Coperti anche Ryder Cup 2018 (Parigi, Super ISO) e Ryder Cup 2023 (Roma, Featured Group).',
      'exp.nfl.p1': '<strong>NFL Media</strong> &mdash; Twickenham 2017&ndash;2018, Wembley 2017&ndash;2019 &amp; 2022, Tottenham 2019 &amp; 2022, Monaco 2022.',
      'exp.nfl.p2': '<strong>Fox Sports</strong> &mdash; EVS Operator World Feed 2017&ndash;2019.',
      'exp.nfl.p3': '<strong>CBS Sports</strong> &mdash; Replay live per World Feed 2017&ndash;2019. Test DCM con sistema Parallel Ads.',
      'exp.nfl.p4': '<strong>ESPN</strong> &mdash; USA Feed, NFL London Games Wembley 2022.',
      'exp.olympics.p1': '<strong>Paris 2024</strong> &mdash; EVS Operator per OBS World Feed Golf. MCF (Multi Clip Feed) per garantire tutti i colpi, tutte le nazioni, tutti i momenti per i rights holder.',
      'exp.olympics.p2': '<strong>Channel 4 Paralympics</strong> &mdash; Pyeongchang 2018 (Highlights &amp; break bumpers), Tokyo 2020 (Live), Beijing 2022 (Breakfast Show &amp; Cerimonia di chiusura).',
      'exp.olympics.p3': '<strong>Asian Games 2018</strong> &mdash; Jakarta. Replay live e highlights match/set per il World Feed Volley.',
      'exp.olympics.p4': '<strong>Commonwealth Games 2022</strong> &mdash; Birmingham. Replay immediato a Victoria Park per il Lawn Bowls.',
      'exp.atp.p1': '<strong>ATP Masters 1000</strong> &mdash; Roma 2015&ndash;2019, Madrid 2015&ndash;2019, Monte Carlo 2015&ndash;2019, Shanghai 2018, Parigi 2017&ndash;2018.',
      'exp.atp.p2': '<strong>Next Gen Finals</strong> &mdash; 2018.',
      'exp.atp.p3': '<strong>WTA</strong> &mdash; WTA 1000 Montreal, WTA 500 Zhengzhou, WTA 500 Eastbourne.',
      'exp.slams.p1': '<strong>Wimbledon</strong> &mdash; 2018 &amp; 2019 Outside Show Court 3; 2021 &amp; 2022 Court 1.',
      'exp.slams.p2': '<strong>Roland Garros 2025</strong> (Whisper) &mdash; Replay live per i campi 6 &amp; 7, qualificazioni e tabellone principale.',
      'exp.racing.p1': '<strong>ITV Racing</strong> &mdash; Cheltenham Festival 2020&ndash;2024, Grand National 2021&ndash;2024, Royal Ascot 2018&ndash;2023, Epsom Oaks &amp; Derby 2018&ndash;2022, Glorious Goodwood 2023.',
      'exp.racing.p2': '<strong>Racecourse Media Group</strong> &mdash; Dubai World Cup Carnival &amp; Dubai World Cup 2023&ndash;2025, Dubai Racing Carnival, Super Saturday, meeting FRN.',
      'exp.racing.p3': '<strong>Seven Network</strong> &mdash; BMW Sydney Carnival 2014, Royal Randwick.',
      'exp.seriea.p1': '<strong>Sky Italia</strong> &mdash; Feed domestico Serie A Tim &amp; Serie Bwin 2011&ndash;2013. Partite Inter e Juventus.',
      'exp.seriea.p2': '<strong>Infront Sports &amp; Media</strong> &mdash; World Feed Serie A Tim, Tim Cup, Serie Bwin, World Series of Boxing, FIM World Superbike Championship.',
      'exp.seriea.p3': '<strong>3Zero2</strong> &mdash; Partite Juventus FC 2011&ndash;2013.',
      'exp.seriea.p4': '<strong>Videe S.p.A.</strong> &mdash; X-Factor Italia Stagioni 5 &amp; 6.',
      'exp.seriea.p5': '<strong>Mediaset</strong> &mdash; Guinness World Record Italian Edition, feed domestico CL &amp; Europa League.',
      'exp.seriea.p6': '<strong>RAI</strong> &mdash; Serie A1 volley femminile, Giro di Lombardia.',
      'exp.mena.p1': '<strong>VT Coordinator</strong> &mdash; Saudi Pro League &amp; Kings Cup 2025&ndash;presente. Coordinamento replay in diverse location.',
      'exp.mena.p2': '<strong>AlamiyaMedia</strong> &mdash; KSA Pro League, FIFA Club World Cup &amp; AFC Asian Football Champions 2023.',
      'exp.mena.p3': '<strong>Asian Tour Media</strong> &mdash; Submix Operator per PIF International &amp; Saudi Open 2025.',
      'exp.mena.p4': '<strong>OSN</strong> &mdash; Senior EVS Operator per copertura ICC Cricket World Cup MENA 2017.',
      'exp.mena.p5': '<strong>Globecast</strong> &mdash; Dubai Racing TV, Mohammed bin Rashid Al Maktoum Endurance.',
      'exp.clubwc.p1': '<strong>DAZN</strong> &mdash; Highlights a rotazione rapida per la TV UK. Pacchetti pre‑match, intervallo e post‑match con momenti chiave e interviste.',
      'exp.clubwc.p2': 'Editing veloce, gestione playlist e clip turnaround efficiente con tempi live stretti.',
      'exp.combat.p1': '<strong>ITV Boxing</strong> &mdash; Eubank Jr vs Abraham al SSE Arena Wembley.',
      'exp.combat.p2': '<strong>ESPN</strong> &mdash; Tyson Fury vs Dillian Whyte a Wembley (USA Feed). MMA Professional Cage Fight.',
      'exp.combat.p3': '<strong>Rumble</strong> &mdash; Misfits Mania: Fight Before Xmas &ndash; Andrew Tate vs Chase de Moor, Dubai 2025.',
      'exp.motorsport.p1': '<strong>Goodwood Festival of Speed</strong> &mdash; 2022, 2023, 2024.',
      'exp.motorsport.p2': '<strong>BTCC</strong> &mdash; Oulton Park, Rockingham, Brands Hatch, Snetterton, Thruxton (2018&ndash;2021).',
      'exp.motorsport.p3': '<strong>MotoGP</strong> &mdash; GP di Germania.',
      'exp.motorsport.p4': '<strong>WRC</strong> &mdash; Polonia 2017, Catalunya 2017, Svezia 2018 (All Live).',
      'exp.more.p1': '<strong>Netflix</strong> &mdash; Senior VT Operator per &ldquo;Dancing Monsters&rdquo;. Gestione ingest e media management su cinque server Sony PWS-4500.',
      'exp.more.p2': '<strong>MLB</strong> &mdash; Sydney Opening Series 2014. Dodgers vs Diamondbacks (SSMO Operator).',
      'exp.more.p3': '<strong>Red Bull Media House</strong> &mdash; Bestival 2016, Rio Carnival 2017.',
      'exp.more.p4': '<strong>SailGP</strong> &mdash; 2019&ndash;2020 (Sydney, New York, Cowes, Bermuda).',
      'exp.more.p5': '<strong>Nitro Circus</strong> &mdash; Australian Capital Cities Tour 2014.',
      'exp.more.p6': '<strong>Fox Sports Australia / NRL / A-League</strong> &mdash; stagione 2014.',
      'services.label': 'Cosa Faccio',
      'services.title': 'Competenze Specialistiche per il Live',
      'services.evsTitle': 'Operatore EVS',
      'services.evsBody': 'Operatività su EVS XT e LSM per produzioni sportive multi-camera. Replay istantanei, super slow motion e compilation highlight.',
      'services.vtTitle': 'Coordinamento VT',
      'services.vtBody': 'Gestione delle operazioni video, garantendo playback e flussi contenuti senza interruzioni.',
      'services.editTitle': 'Montaggio Live',
      'services.editBody': 'Editing in tempo reale &mdash; pacchetti, sequenze e consegne in onda a deadline.',
      'services.aiTitle': 'AI & Innovazione',
      'services.aiBody': 'Sviluppo di strumenti video AI e sistemi di highlight automatizzati con RISE Broadcast.',
      'testimonials.title': 'Cosa Dicono',
      'contact.label': 'Contattami',
      'contact.title': 'Lavoriamo Insieme',
      'contact.subtitle': 'Disponibile per EVS, montaggio live e produzione broadcast in tutto il mondo.',
      'contact.linkedin': 'LinkedIn',
      'contact.instagram': 'Instagram',
      'contact.basedIn': 'Base',
      'footer.copy': '© 2025 Peter Comandulli',
      'chat.inputLabel': 'La tua risposta',
      'chat.inputPlaceholder': 'Scrivi qui...',
      'chat.selectPlaceholder': 'Seleziona un servizio',
      'chat.optionEvs': 'Operatore EVS',
      'chat.optionVt': 'Coordinatore VT',
      'chat.optionOther': 'Altro',
      'chat.projectPlaceholder': 'Descrivi il progetto...',
      'chat.otherPlaceholder': 'Indica il servizio richiesto...',
      'chat.datesPlaceholder': 'Esempio: 12-15 Maggio 2026',
      'chat.next': 'Avanti',
      'chat.send': 'Invia',
      'chat.promptName': 'Ciao! Come ti chiami?',
      'chat.promptEmail': 'Perfetto. Qual è la tua email?',
      'chat.promptService': 'Di quale servizio hai bisogno?',
      'chat.promptOther': 'Indica il servizio di cui hai bisogno.',
      'chat.promptProject': 'Raccontami del progetto.',
      'chat.promptDates': 'Quali sono le date del progetto?',
      'chat.ready': 'Perfetto. Vuoi inviare la richiesta?',
      'chat.sending': 'Invio in corso...',
      'chat.sent': 'Inviato con successo.',
      'chat.thanks': 'Grazie! Ti risponderò al più presto.',
      'chat.errorEmpty': 'Inserisci una risposta per continuare.',
      'chat.errorEmail': 'Inserisci un indirizzo email valido.',
      'chat.errorFast': 'Completa il form con calma prima di inviare.',
      'chat.errorGeneric': 'Qualcosa è andato storto. Riprova.',
      'chat.errorNetwork': 'Errore di rete. Riprova più tardi.'
    }
  };

  let currentLang = 'en';
  let currentDict = translations.en;

  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations.en;
    currentLang = lang;
    currentDict = dict;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  };

  const detectLanguage = async () => {
    const languages = navigator.languages || [navigator.language || 'en'];
    if (languages.some(lang => lang && lang.toLowerCase().startsWith('it'))) {
      return 'it';
    }
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 2000);
      const response = await fetch('https://ipapi.co/json/', { signal: controller.signal });
      clearTimeout(timeout);
      if (response.ok) {
        const data = await response.json();
        if (data && data.country_code === 'IT') {
          return 'it';
        }
      }
    } catch (err) {
      // Ignore geo lookup errors and fall back to English
    }
    return 'en';
  };

  applyTranslations('en');
  const detectedLang = await detectLanguage();
  if (detectedLang !== 'en') {
    applyTranslations(detectedLang);
  }

  const t = (key) => currentDict[key] || translations.en[key] || key;
  // Ensure refresh starts at top (avoid returning to anchored sections)
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.scrollTo(0, 0);
  // --- Navbar scroll effect ---
  const nav = document.getElementById('nav');
  const handleNavScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // --- Mobile menu ---
  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  const openMenu = () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', openMenu);
  mobileMenuClose.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // --- Scroll-triggered reveal animations ---
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach(el => revealObserver.observe(el));

  // --- Counter animation ---
  const counters = document.querySelectorAll('.counter');
  let countersAnimated = new Set();

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
          countersAnimated.add(entry.target);
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = current;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // --- Showreel video click-to-play ---
  const showreelVideo = document.getElementById('showreelVideo');
  const playOverlay = document.getElementById('playOverlay');
  const showreelWrapper = document.getElementById('showreelWrapper');

  if (showreelVideo && playOverlay) {
    showreelWrapper.addEventListener('click', () => {
      if (showreelVideo.paused) {
        showreelVideo.muted = false;
        showreelVideo.play();
        playOverlay.classList.add('hidden');
        return;
      }

      if (showreelVideo.muted) {
        showreelVideo.muted = false;
        playOverlay.classList.add('hidden');
        return;
      }

      showreelVideo.pause();
      playOverlay.classList.remove('hidden');
    });

    showreelVideo.addEventListener('play', () => {
      playOverlay.classList.add('hidden');
    });

    showreelVideo.addEventListener('pause', () => {
      playOverlay.classList.remove('hidden');
    });

    if (!showreelVideo.paused) {
      playOverlay.classList.add('hidden');
    }

    showreelVideo.addEventListener('ended', () => {
      playOverlay.classList.remove('hidden');
    });
  }

  // --- Expandable event cards ---
  document.querySelectorAll('[data-expandable]').forEach(card => {
    const header = card.querySelector('.event-card-header');
    header.addEventListener('click', () => {
      const wasExpanded = card.classList.contains('expanded');

      // Close all other cards
      document.querySelectorAll('[data-expandable].expanded').forEach(other => {
        if (other !== card) {
          other.classList.remove('expanded');
        }
      });

      // Toggle this card
      card.classList.toggle('expanded', !wasExpanded);
    });
  });

  // --- Testimonial dots ---
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('testimonialDots');

  if (track && dotsContainer) {
    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    let activeIndex = 0;
    let autoAdvanceInterval = null;
    let userPaused = false;

    const updateTrackHeight = () => {
      let maxHeight = 0;
      cards.forEach(card => {
        maxHeight = Math.max(maxHeight, card.scrollHeight);
      });
      if (maxHeight > 0) {
        track.style.height = `${Math.ceil(maxHeight + 60)}px`;
        track.style.minHeight = `${Math.ceil(maxHeight + 60)}px`;
      }
    };

    const updateClasses = () => {
      cards.forEach((card, index) => {
        card.classList.remove(
          'is-active',
          'is-prev',
          'is-next',
          'is-far-prev',
          'is-far-next',
          'is-hidden'
        );

        if (index === activeIndex) {
          card.classList.add('is-active');
          return;
        }

        if (index === (activeIndex - 1 + cards.length) % cards.length) {
          card.classList.add('is-prev');
          return;
        }

        if (index === (activeIndex + 1) % cards.length) {
          card.classList.add('is-next');
          return;
        }

        if (index === (activeIndex - 2 + cards.length) % cards.length) {
          card.classList.add('is-far-prev');
          return;
        }

        if (index === (activeIndex + 2) % cards.length) {
          card.classList.add('is-far-next');
          return;
        }

        card.classList.add('is-hidden');
      });

      const dots = dotsContainer.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
      });

      updateTrackHeight();
    };

    const goToIndex = (index) => {
      activeIndex = (index + cards.length) % cards.length;
      updateClasses();
    };

    cards.forEach((card, index) => {
      card.addEventListener('click', () => {
        if (index === activeIndex) {
          goToIndex(activeIndex + 1);
          return;
        }
        goToIndex(index);
      });
    });

    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.classList.add('testimonial-dot');
      dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
      dot.addEventListener('click', () => {
        goToIndex(i);
      });
      dotsContainer.appendChild(dot);
    });

    const startAutoAdvance = () => {
      if (autoAdvanceInterval || userPaused) return;
      autoAdvanceInterval = setInterval(() => {
        goToIndex(activeIndex + 1);
      }, 20000);
    };

    const stopAutoAdvance = () => {
      if (autoAdvanceInterval) {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = null;
      }
    };

    const autoAdvanceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAutoAdvance();
          } else {
            stopAutoAdvance();
          }
        });
      },
      { threshold: 0.4 }
    );

    autoAdvanceObserver.observe(track);

    const pauseAutoAdvance = () => {
      userPaused = true;
      stopAutoAdvance();
    };

    track.addEventListener('pointerdown', pauseAutoAdvance);
    track.addEventListener('wheel', pauseAutoAdvance, { passive: true });
    track.addEventListener('mouseenter', pauseAutoAdvance);

    updateClasses();
    window.addEventListener('resize', updateTrackHeight);
  }

  // --- Web3Forms contact form ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const chatWindow = document.getElementById('chatWindow');
  const chatInput = document.getElementById('chatInput');
  const chatSelect = document.getElementById('chatSelect');
  const chatTextarea = document.getElementById('chatTextarea');
  const chatOtherService = document.getElementById('chatOtherService');
  const chatDates = document.getElementById('chatDates');
  const chatNext = document.getElementById('chatNext');

  if (contactForm && chatWindow && chatInput && chatSelect && chatTextarea && chatOtherService && chatDates && chatNext) {
    contactForm.addEventListener('submit', (e) => e.preventDefault());

    const hiddenFields = {
      name: document.getElementById('formName'),
      email: document.getElementById('formEmail'),
      service: document.getElementById('formService'),
      otherService: document.getElementById('formOtherService'),
      description: document.getElementById('formDescription'),
      dates: document.getElementById('formDates'),
    };

    const steps = [
      { key: 'name', promptKey: 'chat.promptName', type: 'text', input: chatInput, autocomplete: 'name' },
      { key: 'email', promptKey: 'chat.promptEmail', type: 'email', input: chatInput, autocomplete: 'email' },
      { key: 'service', promptKey: 'chat.promptService', type: 'select', input: chatSelect },
      { key: 'otherService', promptKey: 'chat.promptOther', type: 'text', input: chatOtherService, autocomplete: 'off', conditional: (state) => state.service === 'Other' },
      { key: 'description', promptKey: 'chat.promptProject', type: 'textarea', input: chatTextarea },
      { key: 'dates', promptKey: 'chat.promptDates', type: 'text', input: chatDates, autocomplete: 'off' },
    ];

    const chatState = {
      name: '',
      email: '',
      service: '',
      otherService: '',
      description: '',
      dates: '',
    };

    let stepIndex = 0;
    let mode = 'collect';
    const formStartTime = Date.now();
    let isSending = false;
    let hasSubmitted = false;

    const addMessage = (text, type) => {
      const bubble = document.createElement('div');
      bubble.className = `chat-bubble ${type}`;
      bubble.textContent = text;
      chatWindow.appendChild(bubble);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    };

    const hideAllInputs = () => {
      chatInput.classList.add('chat-hidden');
      chatSelect.classList.add('chat-hidden');
      chatTextarea.classList.add('chat-hidden');
      chatOtherService.classList.add('chat-hidden');
      chatDates.classList.add('chat-hidden');
    };

    const setActiveInput = (step, shouldFocus = true) => {
      hideAllInputs();
      if (!step) return;
      if (step.input === chatInput) {
        chatInput.type = step.type === 'email' ? 'email' : 'text';
        chatInput.autocomplete = step.autocomplete || 'on';
        chatInput.value = '';
        chatInput.classList.remove('chat-hidden');
        if (shouldFocus) chatInput.focus();
      } else if (step.input === chatSelect) {
        chatSelect.value = '';
        chatSelect.classList.remove('chat-hidden');
        if (shouldFocus) chatSelect.focus();
      } else if (step.input === chatTextarea) {
        chatTextarea.value = '';
        chatTextarea.classList.remove('chat-hidden');
        if (shouldFocus) chatTextarea.focus();
      } else if (step.input === chatOtherService) {
        chatOtherService.value = '';
        chatOtherService.classList.remove('chat-hidden');
        if (shouldFocus) chatOtherService.focus();
      } else if (step.input === chatDates) {
        chatDates.value = '';
        chatDates.classList.remove('chat-hidden');
        if (shouldFocus) chatDates.focus();
      }
    };

    const getValue = (step) => {
      if (step.input === chatSelect) return chatSelect.value.trim();
      if (step.input === chatTextarea) return chatTextarea.value.trim();
      if (step.input === chatOtherService) return chatOtherService.value.trim();
      if (step.input === chatDates) return chatDates.value.trim();
      return chatInput.value.trim();
    };

    const validateValue = (step, value) => {
      if (!value) {
        formStatus.textContent = t('chat.errorEmpty');
        formStatus.className = 'form-status error';
        return false;
      }
      if (step.key === 'email') {
        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!emailOk) {
          formStatus.textContent = t('chat.errorEmail');
          formStatus.className = 'form-status error';
          return false;
        }
      }
      formStatus.textContent = '';
      formStatus.className = 'form-status';
      return true;
    };

    const finishCollection = () => {
      mode = 'send';
      hideAllInputs();
      chatNext.textContent = t('chat.send');
      addMessage(t('chat.ready'), 'bot');
    };

    const handleNext = async () => {
      if (mode === 'send') {
        if (isSending || hasSubmitted) return;
        const timeOnForm = Date.now() - formStartTime;
        if (timeOnForm < 6000) {
          formStatus.textContent = t('chat.errorFast');
          formStatus.className = 'form-status error';
          return;
        }
        chatNext.disabled = true;
        formStatus.textContent = t('chat.sending');
        formStatus.className = 'form-status';
        isSending = true;
        try {
          const formData = new FormData(contactForm);
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
          });
          const result = await response.json();
          if (result.success) {
            addMessage(t('chat.thanks'), 'bot');
            formStatus.textContent = t('chat.sent');
            formStatus.classList.add('success');
            hasSubmitted = true;
            setTimeout(() => {
              window.location.reload();
            }, 30000);
          } else {
            formStatus.textContent = t('chat.errorGeneric');
            formStatus.classList.add('error');
            chatNext.disabled = false;
            isSending = false;
          }
        } catch (err) {
          formStatus.textContent = t('chat.errorNetwork');
          formStatus.classList.add('error');
          chatNext.disabled = false;
          isSending = false;
        }
        return;
      }

      let step = steps[stepIndex];
      while (step && step.conditional && !step.conditional(chatState)) {
        stepIndex += 1;
        step = steps[stepIndex];
      }
      if (!step) {
        finishCollection();
        return;
      }

      const value = getValue(step);
      if (!validateValue(step, value)) return;

      addMessage(value, 'user');
      chatState[step.key] = value;
      if (step.key === 'service') {
        hiddenFields.service.value = value;
      }
      if (step.key === 'otherService') {
        hiddenFields.otherService.value = value;
      }
      if (step.key === 'name') hiddenFields.name.value = value;
      if (step.key === 'email') hiddenFields.email.value = value;
      if (step.key === 'description') hiddenFields.description.value = value;
      if (step.key === 'dates') hiddenFields.dates.value = value;

      stepIndex += 1;
      let nextStep = steps[stepIndex];
      while (nextStep && nextStep.conditional && !nextStep.conditional(chatState)) {
        stepIndex += 1;
        nextStep = steps[stepIndex];
      }
      if (nextStep) {
        addMessage(t(nextStep.promptKey), 'bot');
        setActiveInput(nextStep);
        return;
      }

      finishCollection();
    };

    const handleInputKeydown = (event) => {
      if (event.key === 'Enter' && event.target !== chatTextarea) {
        event.preventDefault();
        handleNext();
      }
      if (event.key === 'Enter' && event.target === chatTextarea && !event.shiftKey) {
        event.preventDefault();
        handleNext();
      }
    };

    chatInput.addEventListener('keydown', handleInputKeydown);
    chatSelect.addEventListener('keydown', handleInputKeydown);
    chatTextarea.addEventListener('keydown', handleInputKeydown);
    chatOtherService.addEventListener('keydown', handleInputKeydown);
    chatDates.addEventListener('keydown', handleInputKeydown);
    chatNext.addEventListener('click', handleNext);

    addMessage(t(steps[0].promptKey), 'bot');
    const contactSection = document.getElementById('contact');
    const shouldFocus = contactSection
      ? contactSection.getBoundingClientRect().top < window.innerHeight * 0.6
      : false;
    setActiveInput(steps[0], shouldFocus);
  }

  // --- Scroll to top ---
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Smooth scroll offset for fixed nav ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = nav.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Parallax effect on hero video ---
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrollY < heroHeight) {
        heroVideo.style.transform = 'translateY(' + (scrollY * 0.3) + 'px) scale(1.05)';
      }
    }, { passive: true });
  }

  // --- Active nav link highlight on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });
});
