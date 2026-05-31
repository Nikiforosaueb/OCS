/* ============================================
   OCS — Main JS
   Nav · Language Switcher · Scroll Animations
   ============================================ */

/* ─── Translations ────────────────────────── */
const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    nav_home: 'Home', nav_about: 'About', nav_services: 'Services',
    nav_projects: 'Projects', nav_realestate: 'Real Estate', nav_contact: 'Contact',
    realestate_coming_soon: 'Coming Soon',
    realestate_journey: 'Are you ready for your journey in Real Estate?',
    realestate_tagline_1: 'Finding a property',
    realestate_tagline_2: 'is easy.',
    realestate_tagline_3: 'Finding the right one',
    realestate_tagline_4: 'is not.',
    realestate_sub_brand: 'OCS Real Estate',
    hero_label: 'Online Construction Services',
    hero_h1: 'Building With Purpose,<br>Finishing With Precision.',
    hero_sub: 'We undertake construction and renovation projects of all scales — with quality workmanship, proper supervision, and attention to detail.',
    hero_cta1: 'View Projects', hero_cta2: 'About Us',
    hero_scroll: 'Scroll',
    stats_founded: 'Founded', stats_projects: 'Projects Completed',
    stats_team: 'Specialists on Team', stats_years: 'Years of Experience',
    slider_label: 'Our Work',
    slider_h2: 'Before & After',
    slider_p: 'Complete exterior renovation and landscaping — from raw construction to a finished luxury villa with pool.',
    slider_before: 'Before', slider_after: 'After',
    services_label: 'What We Do',
    services_h2: 'Our Services',
    services_p: 'From new builds to full renovations — we manage every stage with experienced engineers and specialist crews.',
    s1_title: 'New Constructions', s1_p: 'Residential & commercial buildings from foundation to final delivery.',
    s2_title: 'Renovations', s2_p: 'Complete interior renovation of apartments, houses, offices and shops.',
    s3_title: 'Engineering & Technical', s3_p: 'Permits, studies, architectural drawings and full project consulting.',
    s4_title: 'Exterior & Energy', s4_p: 'Thermal insulation, facade works, waterproofing and roof repairs.',
    s5_title: 'Project Supervision', s5_p: 'Continuous on-site coordination and quality control throughout every project.',
    learn_more: 'Learn More',
    projects_label: 'Portfolio',
    projects_h2: 'Projects',
    projects_p: 'A selection of completed works across residential renovations, exterior restorations and new constructions.',
    view_all: 'View All Projects',
    cta_h2: 'Ready to Start Your Project?',
    cta_p: 'Get in touch with our team for a consultation and project estimate.',
    cta_btn: 'Contact Us',
    footer_tagline: 'Premium construction and renovation services — built on quality, delivered with precision.',
    footer_nav: 'Navigation', footer_services: 'Services', footer_contact_title: 'Contact',
    footer_legal: 'Legal',
    cookie_link: 'Cookie & Privacy Policy',
    footer_copy: '© 2024 Online Construction Services (OCS). All rights reserved.',
    pm_label: 'Project Manager',
    about_hero_p: 'Founded in 2024. Built on decades of combined engineering and construction experience.',
    about_story_label: 'Our Story', about_who_h2: 'Who We Are',
    about_p1: 'Online Construction Services (OCS) was founded in 2024 following the increasing demand and growth of construction projects undertaken through our long-standing technical company.',
    about_p2: 'With years of experience in the construction and engineering sector, the creation of a dedicated construction company was a necessary step in order to achieve better project coordination, direct supervision, and more efficient management of ongoing works.',
    about_p3: 'Coming from a strong technical background, our company works closely with a team of experienced engineers and technical professionals, including civil engineers, architects, surveyors, mechanical and electrical engineers, along with specialized construction crews.',
    about_p4: 'We undertake projects covering all aspects of construction, including new residential buildings, renovations, restorations, commercial projects, energy upgrades, and complete turn-key solutions.',
    about_phil_label: 'Our Philosophy',
    about_phil_h2: '"Every Project Deserves Professionalism, Responsibility, and Respect."',
    about_phil_p: 'Our approach is based on proper planning, quality workmanship, attention to detail, and continuous communication with the client throughout every stage of the project. Our goal is to deliver projects that combine functionality, durability, and high construction standards while building long-term relationships based on trust and consistency.',
    about_drives_label: 'What Drives Us', about_approach_h2: 'Our Approach',
    about_app_p1: 'At Online Construction Services (OCS), we believe that every project should be treated with professionalism, responsibility, and respect for both the client\'s vision and the technical requirements of the work.',
    about_app_p2: 'Our goal is to deliver projects that combine functionality, durability, and high construction standards while building long-term relationships based on trust and consistency.',
    about_app_p3: 'From small-scale renovations to demanding construction projects, we approach every work with the same level of professionalism, supervision, and responsibility.',
    view_services: 'View Our Services',
    about_team_label: 'Our Team', about_team_h2: 'Specialists & Experts',
    about_team_p: 'We collaborate with a multidisciplinary team of licensed professionals and skilled tradespeople.',
    team_civil_h4: 'Civil Engineers', team_civil_p: 'Structural design, reinforced concrete, and construction oversight.',
    team_arch_h4: 'Architects', team_arch_p: 'Architectural drawings, permits, and space planning solutions.',
    team_survey_h4: 'Surveyors', team_survey_p: 'Topographic surveys, boundary measurements, and site analysis.',
    team_mep_h4: 'MEP Engineers', team_mep_p: 'Mechanical, electrical, and plumbing systems design and installation.',
    team_crew_h4: 'Construction Crews', team_crew_p: 'Specialized tradespeople in masonry, plastering, tiling, and finishing.',
    srv_page_label: 'What We Do', srv_page_h1: 'Our Services',
    srv_page_p: 'Online Construction Services (OCS) undertakes construction and technical projects of all scales, providing reliable solutions with emphasis on proper execution, supervision, and construction quality.',
    srv1_label: 'Construction', srv1_p: 'We undertake the construction of residential and commercial buildings, from the initial stage of the project up to final delivery.',
    srv1_li1: 'Reinforced concrete works', srv1_li2: 'Masonry and plastering', srv1_li3: 'Structural construction works',
    srv1_li4: 'Turn-key residential projects', srv1_li5: 'Site supervision and coordination', srv1_li6: 'General construction works',
    srv2_label: 'Renovation', srv2_p: 'Complete renovation works for apartments, houses, offices, shops, and commercial spaces. Every renovation project is approached according to the needs and functionality of the space.',
    srv2_li1: 'Interior remodeling', srv2_li2: 'Kitchen and bathroom renovations', srv2_li3: 'Flooring and tiling works',
    srv2_li4: 'Ceiling and drywall constructions', srv2_li5: 'Painting works', srv2_li6: 'Space reconfiguration',
    srv3_label: 'Technical', srv3_p: 'In cooperation with our technical company and engineering team, we provide full technical support and project guidance.',
    srv3_li1: 'Building permits', srv3_li2: 'Engineering studies', srv3_li3: 'Architectural drawings',
    srv3_li4: 'Topographic surveys', srv3_li5: 'Technical inspections', srv3_li6: 'Project supervision and consulting',
    srv4_label: 'Exterior', srv4_p: 'We undertake exterior renovation and restoration works aimed at improving both the appearance and energy performance of buildings.',
    srv4_li1: 'Thermal insulation systems', srv4_li2: 'Facade repairs and painting', srv4_li3: 'Waterproofing works',
    srv4_li4: 'Roof repairs and insulation', srv4_li5: 'Balcony restorations', srv4_li6: 'Exterior maintenance works',
    srv5_label: 'Management', srv5_p: 'Every project is monitored with continuous supervision and coordination in order to ensure proper execution and timely completion.',
    srv5_li1: 'Construction quality control', srv5_li2: 'Worksite organization', srv5_li3: 'Coordination of crews and suppliers',
    srv5_li4: 'Compliance with project specifications', srv5_li5: 'Time schedule management', srv5_li6: 'Direct communication with the client',
    proj_page_label: 'Portfolio', proj_page_h1: 'Projects',
    proj_page_p: 'At Online Construction Services (OCS), every project reflects our commitment to quality construction, proper planning, and attention to detail. Our portfolio includes residential developments, renovations, commercial projects, exterior restorations, and technical works.',
    filter_all: 'All', filter_renovation: 'Renovation', filter_construction: 'Construction', filter_exterior: 'Exterior', filter_interior: 'Interior',
    proj_more_soon: 'More projects coming soon — portfolio is continuously updated.',
    contact_hero_p: 'Contact us to discuss your project. We will be happy to help.',
    contact_lets_talk: 'Let\'s Talk',
    contact_sub: 'We are available for any question regarding construction and renovations.',
    contact_phone_lbl: 'Phone', contact_area_lbl: 'Area', contact_area_val: 'Chalkida, Evia',
    contact_form_title: 'Send us a Message',
    contact_form_p: 'Fill in the form and we will get back to you as soon as possible.',
    contact_name_lbl: 'Full Name *', contact_phone_field: 'Phone', contact_email_lbl: 'Email *',
    contact_service_lbl: 'Service', contact_msg_lbl: 'Message *',
    contact_required: '* Required fields', contact_submit_btn: 'Send Message',
    contact_service_placeholder: '— Select a service —', contact_other: 'Other',
    contact_success_msg: '✓ Your message was sent successfully! We will contact you shortly.',
  },
  el: {
    dir: 'ltr',
    nav_home: 'Αρχική', nav_about: 'Σχετικά', nav_services: 'Υπηρεσίες',
    nav_projects: 'Έργα', nav_realestate: 'Ακίνητα', nav_contact: 'Επικοινωνία',
    realestate_coming_soon: 'Έρχεται Σύντομα',
    realestate_journey: 'Είστε έτοιμοι για το ταξίδι σας στα ακίνητα;',
    realestate_tagline_1: 'Η εύρεση ακινήτου',
    realestate_tagline_2: 'είναι εύκολη.',
    realestate_tagline_3: 'Η εύρεση του κατάλληλου',
    realestate_tagline_4: 'όχι.',
    realestate_sub_brand: 'OCS Real Estate',
    hero_label: 'Online Construction Services',
    hero_h1: 'Δημιουργούμε με Όραμα,<br>Παραδίδουμε με Ακρίβεια.',
    hero_sub: 'Αναλαμβάνουμε κατασκευαστικά και ανακαινιστικά έργα κάθε κλίμακας — με ποιοτική εκτέλεση, σωστή εποπτεία και προσοχή στη λεπτομέρεια.',
    hero_cta1: 'Δείτε τα Έργα', hero_cta2: 'Σχετικά με Εμάς',
    hero_scroll: 'Κύλιση',
    stats_founded: 'Ίδρυση', stats_projects: 'Ολοκληρωμένα Έργα',
    stats_team: 'Ειδικοί στην Ομάδα', stats_years: 'Χρόνια Εμπειρίας',
    slider_label: 'Η Δουλειά Μας',
    slider_h2: 'Πριν & Μετά',
    slider_p: 'Πλήρης εξωτερική ανακαίνιση — από ακατέργαστη κατασκευή σε πολυτελή βίλα με πισίνα.',
    slider_before: 'Πριν', slider_after: 'Μετά',
    services_label: 'Τι Κάνουμε',
    services_h2: 'Υπηρεσίες',
    services_p: 'Από νέες κατασκευές έως ολοκληρωμένες ανακαινίσεις — διαχειριζόμαστε κάθε στάδιο με έμπειρους μηχανικούς.',
    s1_title: 'Νέες Κατασκευές', s1_p: 'Οικιστικά & εμπορικά κτίρια από τα θεμέλια έως την παράδοση.',
    s2_title: 'Ανακαινίσεις', s2_p: 'Πλήρης εσωτερική ανακαίνιση διαμερισμάτων, κατοικιών, γραφείων.',
    s3_title: 'Μηχανική & Τεχνική Υποστήριξη', s3_p: 'Άδειες, μελέτες, αρχιτεκτονικά σχέδια και τεχνική συμβουλευτική.',
    s4_title: 'Εξωτερικά & Ενεργειακά', s4_p: 'Θερμομόνωση, επενδύσεις όψεων, αδιαβροχοποίηση και επισκευές στέγης.',
    s5_title: 'Επίβλεψη Έργων', s5_p: 'Συνεχής εποπτεία και ποιοτικός έλεγχος σε κάθε φάση του έργου.',
    learn_more: 'Περισσότερα',
    projects_label: 'Χαρτοφυλάκιο',
    projects_h2: 'Έργα',
    projects_p: 'Επιλογή ολοκληρωμένων έργων σε οικιστικές ανακαινίσεις, εξωτερικές αποκαταστάσεις και νέες κατασκευές.',
    view_all: 'Όλα τα Έργα',
    cta_h2: 'Έτοιμοι να Ξεκινήσετε το Έργο σας;',
    cta_p: 'Επικοινωνήστε με την ομάδα μας για συμβουλευτική και εκτίμηση κόστους.',
    cta_btn: 'Επικοινωνία',
    footer_tagline: 'Υπηρεσίες κατασκευής και ανακαίνισης υψηλών προδιαγραφών.',
    footer_nav: 'Πλοήγηση', footer_services: 'Υπηρεσίες', footer_contact_title: 'Επικοινωνία',
    footer_legal: 'Νομικά',
    cookie_link: 'Πολιτική Cookies & Απορρήτου',
    footer_copy: '© 2024 Online Construction Services (OCS). Με επιφύλαξη παντός δικαιώματος.',
    pm_label: 'Διαχειριστής Έργων',
    about_hero_p: 'Ιδρύθηκε το 2024. Χτισμένη πάνω σε δεκαετίες εμπειρίας στη μηχανική και τις κατασκευές.',
    about_story_label: 'Η Ιστορία Μας', about_who_h2: 'Ποιοι Είμαστε',
    about_p1: 'Η Online Construction Services (OCS) ιδρύθηκε το 2024 μετά από αυξανόμενη ζήτηση και ανάπτυξη κατασκευαστικών έργων που αναλαμβάνονταν μέσω της μακροχρόνιας τεχνικής μας εταιρείας.',
    about_p2: 'Με χρόνια εμπειρίας στον κλάδο των κατασκευών και της μηχανικής, η δημιουργία αποκλειστικής κατασκευαστικής εταιρείας ήταν απαραίτητο βήμα για καλύτερο συντονισμό, άμεση εποπτεία και αποδοτικότερη διαχείριση.',
    about_p3: 'Προερχόμενοι από ισχυρό τεχνικό υπόβαθρο, συνεργαζόμαστε με ομάδα έμπειρων μηχανικών και τεχνικών, συμπεριλαμβανομένων πολιτικών μηχανικών, αρχιτεκτόνων, τοπογράφων, μηχανολόγων και ηλεκτρολόγων.',
    about_p4: 'Αναλαμβάνουμε έργα που καλύπτουν όλες τις πτυχές κατασκευής: νέα οικιστικά κτίρια, ανακαινίσεις, αποκαταστάσεις, εμπορικά έργα, ενεργειακές αναβαθμίσεις και πλήρεις λύσεις.',
    about_phil_label: 'Η Φιλοσοφία Μας',
    about_phil_h2: '"Κάθε Έργο Αξίζει Επαγγελματισμό, Υπευθυνότητα και Σεβασμό."',
    about_phil_p: 'Η προσέγγισή μας βασίζεται στον σωστό σχεδιασμό, ποιοτική εκτέλεση, προσοχή στη λεπτομέρεια και συνεχή επικοινωνία με τον πελάτη. Στόχος μας είναι έργα που συνδυάζουν λειτουργικότητα, ανθεκτικότητα και υψηλές προδιαγραφές.',
    about_drives_label: 'Τι Μας Κινεί', about_approach_h2: 'Η Προσέγγισή Μας',
    about_app_p1: 'Στην OCS πιστεύουμε ότι κάθε έργο πρέπει να αντιμετωπίζεται με επαγγελματισμό, υπευθυνότητα και σεβασμό στο όραμα του πελάτη.',
    about_app_p2: 'Ο στόχος μας είναι η παράδοση έργων που συνδυάζουν λειτουργικότητα, ανθεκτικότητα και υψηλές προδιαγραφές.',
    about_app_p3: 'Από μικρές ανακαινίσεις έως απαιτητικά κατασκευαστικά έργα, αντιμετωπίζουμε κάθε εργασία με τον ίδιο επαγγελματισμό.',
    view_services: 'Δείτε τις Υπηρεσίες Μας',
    about_team_label: 'Η Ομάδα Μας', about_team_h2: 'Ειδικοί & Εμπειρογνώμονες',
    about_team_p: 'Συνεργαζόμαστε με διεπιστημονική ομάδα αδειοδοτημένων επαγγελματιών και εξειδικευμένων τεχνιτών.',
    team_civil_h4: 'Πολιτικοί Μηχανικοί', team_civil_p: 'Στατικές μελέτες, οπλισμένο σκυρόδεμα και εποπτεία κατασκευής.',
    team_arch_h4: 'Αρχιτέκτονες', team_arch_p: 'Αρχιτεκτονικά σχέδια, άδειες και λύσεις χωροταξίας.',
    team_survey_h4: 'Τοπογράφοι', team_survey_p: 'Τοπογραφικές αποτυπώσεις, οριοθετήσεις και ανάλυση χώρου.',
    team_mep_h4: 'Μηχανολόγοι-Ηλεκτρολόγοι', team_mep_p: 'Σχεδιασμός και εγκατάσταση μηχανολογικών, ηλεκτρολογικών και υδραυλικών.',
    team_crew_h4: 'Κατασκευαστικά Συνεργεία', team_crew_p: 'Εξειδικευμένοι τεχνίτες σε τοιχοποιία, σοβαντίσματα, πλακάκια και φινίρισμα.',
    srv_page_label: 'Τι Κάνουμε', srv_page_h1: 'Υπηρεσίες',
    srv_page_p: 'Η OCS αναλαμβάνει κατασκευαστικά και τεχνικά έργα κάθε κλίμακας, με έμφαση στην ποιοτική εκτέλεση, εποπτεία και κατασκευαστική ποιότητα.',
    srv1_label: 'Κατασκευή', srv1_p: 'Αναλαμβάνουμε την κατασκευή οικιστικών και εμπορικών κτιρίων από το αρχικό στάδιο έως την τελική παράδοση.',
    srv1_li1: 'Έργα οπλισμένου σκυροδέματος', srv1_li2: 'Τοιχοποιία και σοβαντίσματα', srv1_li3: 'Κατασκευαστικά δομικά έργα',
    srv1_li4: 'Έργα κλειδί στο χέρι', srv1_li5: 'Εποπτεία και συντονισμός εργοταξίου', srv1_li6: 'Γενικές κατασκευαστικές εργασίες',
    srv2_label: 'Ανακαίνιση', srv2_p: 'Πλήρεις εργασίες ανακαίνισης για διαμερίσματα, κατοικίες, γραφεία και εμπορικούς χώρους.',
    srv2_li1: 'Εσωτερική αναδιαμόρφωση', srv2_li2: 'Ανακαίνιση κουζίνας και μπάνιου', srv2_li3: 'Εργασίες δαπέδων και πλακιδίων',
    srv2_li4: 'Οροφές και γυψοσανίδες', srv2_li5: 'Χρωματισμοί', srv2_li6: 'Αναδιαμόρφωση χώρων',
    srv3_label: 'Τεχνική Υποστήριξη', srv3_p: 'Σε συνεργασία με ομάδα μηχανικών, παρέχουμε πλήρη τεχνική υποστήριξη και καθοδήγηση έργων.',
    srv3_li1: 'Οικοδομικές άδειες', srv3_li2: 'Μηχανολογικές μελέτες', srv3_li3: 'Αρχιτεκτονικά σχέδια',
    srv3_li4: 'Τοπογραφικές αποτυπώσεις', srv3_li5: 'Τεχνικοί έλεγχοι', srv3_li6: 'Εποπτεία και συμβουλευτική έργων',
    srv4_label: 'Εξωτερικά', srv4_p: 'Αναλαμβάνουμε εξωτερικές εργασίες ανακαίνισης για βελτίωση εμφάνισης και ενεργειακής απόδοσης.',
    srv4_li1: 'Συστήματα θερμομόνωσης', srv4_li2: 'Επισκευές και χρωματισμός όψεων', srv4_li3: 'Αδιαβροχοποίηση',
    srv4_li4: 'Επισκευές στέγης και μόνωση', srv4_li5: 'Αποκατάσταση μπαλκονιών', srv4_li6: 'Γενική συντήρηση εξωτερικών',
    srv5_label: 'Διαχείριση', srv5_p: 'Κάθε έργο παρακολουθείται με συνεχή εποπτεία και συντονισμό για σωστή εκτέλεση και εγκαίρια ολοκλήρωση.',
    srv5_li1: 'Ποιοτικός έλεγχος κατασκευής', srv5_li2: 'Οργάνωση εργοταξίου', srv5_li3: 'Συντονισμός συνεργείων και προμηθευτών',
    srv5_li4: 'Τήρηση προδιαγραφών έργου', srv5_li5: 'Διαχείριση χρονοδιαγράμματος', srv5_li6: 'Άμεση επικοινωνία με τον πελάτη',
    proj_page_label: 'Χαρτοφυλάκιο', proj_page_h1: 'Έργα',
    proj_page_p: 'Στην OCS, κάθε έργο αντικατοπτρίζει τη δέσμευσή μας για ποιοτική κατασκευή, σωστό σχεδιασμό και προσοχή στη λεπτομέρεια.',
    filter_all: 'Όλα', filter_renovation: 'Ανακαίνιση', filter_construction: 'Κατασκευή', filter_exterior: 'Εξωτερικά', filter_interior: 'Εσωτερικά',
    proj_more_soon: 'Περισσότερα έργα σύντομα — το χαρτοφυλάκιο ενημερώνεται συνεχώς.',
    contact_hero_p: 'Επικοινωνήστε μαζί μας για να συζητήσουμε το έργο σας. Θα χαρούμε να σας βοηθήσουμε.',
    contact_lets_talk: 'Ας Μιλήσουμε',
    contact_sub: 'Είμαστε διαθέσιμοι για οποιαδήποτε ερώτηση σχετικά με κατασκευές και ανακαινίσεις.',
    contact_phone_lbl: 'Τηλέφωνο', contact_area_lbl: 'Περιοχή', contact_area_val: 'Χαλκίδα, Εύβοια',
    contact_form_title: 'Στείλτε μας Μήνυμα',
    contact_form_p: 'Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο.',
    contact_name_lbl: 'Ονοματεπώνυμο *', contact_phone_field: 'Τηλέφωνο', contact_email_lbl: 'Email *',
    contact_service_lbl: 'Υπηρεσία', contact_msg_lbl: 'Μήνυμα *',
    contact_required: '* Υποχρεωτικά πεδία', contact_submit_btn: 'Αποστολή Μηνύματος',
    contact_service_placeholder: '— Επιλέξτε υπηρεσία —', contact_other: 'Άλλο',
    contact_success_msg: '✓ Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.',
  },
  zh: {
    dir: 'ltr',
    nav_home: '首页', nav_about: '关于', nav_services: '服务',
    nav_projects: '项目', nav_realestate: '房地产', nav_contact: '联系',
    realestate_coming_soon: '即将推出',
    realestate_journey: '您准备好开启您的房地产之旅了吗？',
    realestate_tagline_1: '寻找房产',
    realestate_tagline_2: '易如反掌。',
    realestate_tagline_3: '寻得所爱',
    realestate_tagline_4: '却非易事。',
    realestate_sub_brand: 'OCS 房地产',
    hero_label: 'Online Construction Services',
    hero_h1: '以目标建造，<br>以精度交付。',
    hero_sub: '我们承接各种规模的建筑和翻新项目，以优质工艺、专业监督和对细节的关注为核心。',
    hero_cta1: '查看项目', hero_cta2: '关于我们',
    hero_scroll: '滚动',
    stats_founded: '成立年份', stats_projects: '完成项目',
    stats_team: '专业团队成员', stats_years: '行业经验年限',
    slider_label: '我们的作品',
    slider_h2: '改造前后对比',
    slider_p: '完整的外部翻新工程——从毛坯建筑到带泳池的豪华别墅。',
    slider_before: '改造前', slider_after: '改造后',
    services_label: '我们的服务',
    services_h2: '服务项目',
    services_p: '从新建工程到全面翻新，我们以经验丰富的工程师和专业团队管理每个阶段。',
    s1_title: '新建工程', s1_p: '住宅和商业建筑，从地基到最终交付。',
    s2_title: '翻新改造', s2_p: '公寓、住宅、办公室和商铺的全面室内翻新。',
    s3_title: '工程技术支持', s3_p: '许可证、设计研究、建筑图纸和项目咨询。',
    s4_title: '外立面与节能', s4_p: '保温系统、外立面修复、防水和屋顶维修。',
    s5_title: '项目监督管理', s5_p: '全程持续现场协调与质量控制。',
    learn_more: '了解更多',
    projects_label: '项目集',
    projects_h2: '项目',
    projects_p: '住宅翻新、外部修复和新建工程的精选完工作品。',
    view_all: '查看全部项目',
    cta_h2: '准备好开始您的项目了吗？',
    cta_p: '联系我们的团队进行咨询和项目报价。',
    cta_btn: '联系我们',
    footer_tagline: '高端建筑和翻新服务——以质量为基础，以精度交付。',
    footer_nav: '导航', footer_services: '服务', footer_contact_title: '联系方式',
    footer_legal: '法律',
    cookie_link: 'Cookie与隐私政策',
    footer_copy: '© 2024 Online Construction Services (OCS). 保留所有权利。',
    pm_label: '项目经理',
    about_hero_p: '成立于2024年，建立在数十年综合工程和建筑经验之上。',
    about_story_label: '我们的故事', about_who_h2: '我们是谁',
    about_p1: 'OCS成立于2024年，源于通过我们长期技术公司承接的建筑项目需求的持续增长。',
    about_p2: '凭借多年建筑和工程领域经验，成立专业建筑公司是实现更好项目协调、直接监督和更高效管理的必要步骤。',
    about_p3: '依托强大技术背景，我们与土木工程师、建筑师、测量师、机械和电气工程师及专业施工队伍紧密合作。',
    about_p4: '我们承接新住宅建筑、翻新、修复、商业项目、能源升级和完整交钥匙解决方案等各类建筑项目。',
    about_phil_label: '我们的理念',
    about_phil_h2: '"每个项目都值得专业、责任和尊重。"',
    about_phil_p: '我们的方法基于正确规划、优质工艺、细节关注以及项目每个阶段与客户的持续沟通。目标是交付兼顾功能、耐久性和高建筑标准的项目。',
    about_drives_label: '驱动我们的力量', about_approach_h2: '我们的方法',
    about_app_p1: '在OCS，我们相信每个项目都应以专业、责任和对客户愿景的尊重来对待。',
    about_app_p2: '我们的目标是交付兼顾功能性、耐久性和高建筑标准的项目，建立基于信任的长期关系。',
    about_app_p3: '从小规模翻新到大型建筑项目，我们以同等专业水平对待每项工作。',
    view_services: '查看我们的服务',
    about_team_label: '我们的团队', about_team_h2: '专家与专业人士',
    about_team_p: '我们与多学科持证专业人员和熟练工人团队合作。',
    team_civil_h4: '土木工程师', team_civil_p: '结构设计、钢筋混凝土和施工监督。',
    team_arch_h4: '建筑师', team_arch_p: '建筑图纸、许可证和空间规划解决方案。',
    team_survey_h4: '测量师', team_survey_p: '地形测量、边界测量和现场分析。',
    team_mep_h4: 'MEP工程师', team_mep_p: '机械、电气和管道系统设计与安装。',
    team_crew_h4: '施工队伍', team_crew_p: '砌体、抹灰、铺砖和精装修方面的专业工人。',
    srv_page_label: '我们的服务', srv_page_h1: '服务项目',
    srv_page_p: 'OCS承接各种规模的建筑和技术项目，以优质执行、监督和建筑质量为重点提供可靠解决方案。',
    srv1_label: '建设', srv1_p: '我们承接从初始阶段到最终交付的住宅和商业建筑建设。',
    srv1_li1: '钢筋混凝土工程', srv1_li2: '砌体和抹灰', srv1_li3: '结构建设工程',
    srv1_li4: '交钥匙住宅项目', srv1_li5: '工地监督与协调', srv1_li6: '一般建设工程',
    srv2_label: '翻新', srv2_p: '公寓、住宅、办公室、商铺和商业空间的完整翻新工程。',
    srv2_li1: '室内改造', srv2_li2: '厨房和浴室翻新', srv2_li3: '地板和瓷砖工程',
    srv2_li4: '吊顶和石膏板', srv2_li5: '粉刷工程', srv2_li6: '空间重新规划',
    srv3_label: '技术支持', srv3_p: '与工程团队合作，提供全面的技术支持和项目指导。',
    srv3_li1: '建筑许可证', srv3_li2: '工程研究', srv3_li3: '建筑图纸',
    srv3_li4: '地形测量', srv3_li5: '技术检查', srv3_li6: '项目监督与咨询',
    srv4_label: '外立面', srv4_p: '承接外部翻新和修复工程，提升建筑外观和能源性能。',
    srv4_li1: '保温系统', srv4_li2: '外立面修复与粉刷', srv4_li3: '防水工程',
    srv4_li4: '屋顶维修与隔热', srv4_li5: '阳台修复', srv4_li6: '外部维护工程',
    srv5_label: '管理', srv5_p: '通过持续监督和协调监控每个项目，确保正确执行和按时完成。',
    srv5_li1: '建筑质量控制', srv5_li2: '工地组织', srv5_li3: '协调施工队和供应商',
    srv5_li4: '符合项目规范', srv5_li5: '时间进度管理', srv5_li6: '与客户直接沟通',
    proj_page_label: '项目集', proj_page_h1: '项目',
    proj_page_p: '在OCS，每个项目都体现了我们对优质建筑、合理规划和细节关注的承诺。',
    filter_all: '全部', filter_renovation: '翻新', filter_construction: '建设', filter_exterior: '外立面', filter_interior: '室内',
    proj_more_soon: '更多项目即将推出——作品集持续更新。',
    contact_hero_p: '联系我们讨论您的项目，我们很乐意为您提供帮助。',
    contact_lets_talk: '联系我们',
    contact_sub: '我们随时解答有关建筑和翻新的任何问题。',
    contact_phone_lbl: '电话', contact_area_lbl: '地区', contact_area_val: '哈尔基斯，埃维亚',
    contact_form_title: '发送消息',
    contact_form_p: '填写表格，我们将尽快回复您。',
    contact_name_lbl: '全名 *', contact_phone_field: '电话', contact_email_lbl: '电子邮件 *',
    contact_service_lbl: '服务', contact_msg_lbl: '留言 *',
    contact_required: '* 必填项', contact_submit_btn: '发送消息',
    contact_service_placeholder: '— 选择服务 —', contact_other: '其他',
    contact_success_msg: '✓ 您的消息已成功发送！我们将很快与您联系。',
  },
  he: {
    dir: 'rtl',
    nav_home: 'בית', nav_about: 'אודות', nav_services: 'שירותים',
    nav_projects: 'פרויקטים', nav_realestate: 'נדל"ן', nav_contact: 'צור קשר',
    realestate_coming_soon: 'בקרוב',
    realestate_journey: 'האם אתם מוכנים למסע שלכם בנדל"ן?',
    realestate_tagline_1: 'למצוא נכס',
    realestate_tagline_2: 'זה קל.',
    realestate_tagline_3: 'למצוא את הנכס הנכון',
    realestate_tagline_4: 'זה לא.',
    realestate_sub_brand: 'OCS נדל"ן',
    hero_label: 'Online Construction Services',
    hero_h1: 'בונים עם מטרה,<br>מסיימים בדיוק.',
    hero_sub: 'אנו מקבלים על עצמנו פרויקטי בנייה ושיפוץ בכל היקף — עם עבודה איכותית, פיקוח נאות ותשומת לב לפרטים.',
    hero_cta1: 'צפה בפרויקטים', hero_cta2: 'אודותינו',
    hero_scroll: 'גלול',
    stats_founded: 'נוסדה', stats_projects: 'פרויקטים שהושלמו',
    stats_team: 'מומחים בצוות', stats_years: 'שנות ניסיון',
    slider_label: 'העבודה שלנו',
    slider_h2: 'לפני ואחרי',
    slider_p: 'שיפוץ חיצוני מלא — מבנייה גולמית לווילה יוקרתית עם בריכה.',
    slider_before: 'לפני', slider_after: 'אחרי',
    services_label: 'מה אנחנו עושים',
    services_h2: 'השירותים שלנו',
    services_p: 'מבנייה חדשה ועד שיפוץ מלא — אנו מנהלים כל שלב עם מהנדסים מנוסים.',
    s1_title: 'בנייה חדשה', s1_p: 'בניינים למגורים ומסחר מהיסוד ועד המסירה הסופית.',
    s2_title: 'שיפוצים', s2_p: 'שיפוץ פנים מלא לדירות, בתים, משרדים וחנויות.',
    s3_title: 'תמיכה הנדסית וטכנית', s3_p: 'היתרים, תוכניות, שרטוטים אדריכליים וייעוץ מקצועי.',
    s4_title: 'עבודות חוץ ואנרגיה', s4_p: 'בידוד חום, חיפוי חזיתות, איטום וחיפויי גגות.',
    s5_title: 'פיקוח וניהול פרויקטים', s5_p: 'פיקוח רציף ובקרת איכות לאורך כל שלבי הפרויקט.',
    learn_more: 'קרא עוד',
    projects_label: 'תיק עבודות',
    projects_h2: 'פרויקטים',
    projects_p: 'מבחר עבודות שהושלמו בשיפוצי מגורים, שיקום חזיתות ובנייה חדשה.',
    view_all: 'כל הפרויקטים',
    cta_h2: 'מוכנים להתחיל את הפרויקט שלכם?',
    cta_p: 'צרו קשר עם הצוות שלנו לייעוץ ואומדן עלויות.',
    cta_btn: 'צור קשר',
    footer_tagline: 'שירותי בנייה ושיפוץ ברמה גבוהה — מבוססים על איכות ומסורת.',
    footer_nav: 'ניווט', footer_services: 'שירותים', footer_contact_title: 'צור קשר',
    footer_legal: 'משפטי',
    cookie_link: 'מדיניות עוגיות ופרטיות',
    footer_copy: '© 2024 Online Construction Services (OCS). כל הזכויות שמורות.',
    pm_label: 'מנהל פרויקט',
    about_hero_p: 'נוסדה ב-2024. בנויה על עשרות שנים של ניסיון משולב בהנדסה ובנייה.',
    about_story_label: 'הסיפור שלנו', about_who_h2: 'מי אנחנו',
    about_p1: 'OCS נוסדה ב-2024 בעקבות הביקוש הגובר לפרויקטי בנייה שהתבצעו דרך חברת הטכנולוגיה הוותיקה שלנו.',
    about_p2: 'עם שנות ניסיון בתחום הבנייה וההנדסה, הקמת חברת בנייה ייעודית הייתה צעד הכרחי לשיפור תיאום הפרויקטים ופיקוח ישיר.',
    about_p3: 'מתוך רקע טכני חזק, אנו עובדים עם מהנדסים אזרחיים, אדריכלים, מודדים, מהנדסי מכונות וחשמל וצוותי בנייה מיוחדים.',
    about_p4: 'אנו מקבלים פרויקטים של בניינים למגורים, שיפוצים, שיקומים, פרויקטים מסחריים, שדרוגי אנרגיה ופתרונות מפתח בידיים.',
    about_phil_label: 'הפילוסופיה שלנו',
    about_phil_h2: '"כל פרויקט ראוי למקצועיות, אחריות וכבוד."',
    about_phil_p: 'הגישה שלנו מבוססת על תכנון נכון, עבודה איכותית, תשומת לב לפרטים ותקשורת רציפה עם הלקוח לאורך כל שלבי הפרויקט.',
    about_drives_label: 'מה מניע אותנו', about_approach_h2: 'הגישה שלנו',
    about_app_p1: 'ב-OCS, אנו מאמינים שכל פרויקט צריך להיות מטופל במקצועיות, אחריות וכבוד לחזון הלקוח.',
    about_app_p2: 'המטרה שלנו היא לספק פרויקטים המשלבים פונקציונליות, עמידות ותקני בנייה גבוהים.',
    about_app_p3: 'מאנוויות קטנות ועד פרויקטי בנייה מאתגרים, אנו מתייחסים לכל עבודה באותה מקצועיות ואחריות.',
    view_services: 'צפה בשירותים שלנו',
    about_team_label: 'הצוות שלנו', about_team_h2: 'מומחים ואנשי מקצוע',
    about_team_p: 'אנו משתפים פעולה עם צוות רב-תחומי של אנשי מקצוע מורשים ופועלים מיומנים.',
    team_civil_h4: 'מהנדסים אזרחיים', team_civil_p: 'תכנון קונסטרוקציה, בטון מזוין ופיקוח על הבנייה.',
    team_arch_h4: 'אדריכלים', team_arch_p: 'שרטוטים אדריכליים, היתרים ופתרונות תכנון חלל.',
    team_survey_h4: 'מודדים', team_survey_p: 'סקרים טופוגרפיים, מדידות גבולות וניתוח אתר.',
    team_mep_h4: 'מהנדסי MEP', team_mep_p: 'תכנון והתקנה של מערכות מכניות, חשמליות ואינסטלציה.',
    team_crew_h4: 'צוותי בנייה', team_crew_p: 'בעלי מקצוע מיוחדים בבנייה, טיח, ריצוף וגימור.',
    srv_page_label: 'מה אנחנו עושים', srv_page_h1: 'שירותים',
    srv_page_p: 'OCS מקבלת פרויקטי בנייה וטכניים בכל היקף, ומספקת פתרונות אמינים עם דגש על ביצוע נכון, פיקוח ואיכות בנייה.',
    srv1_label: 'בנייה', srv1_p: 'אנו מקבלים על עצמנו בנייה של מבני מגורים ומסחר, מהשלב הראשוני ועד המסירה הסופית.',
    srv1_li1: 'עבודות בטון מזוין', srv1_li2: 'בנייה וטיח', srv1_li3: 'עבודות קונסטרוקציה',
    srv1_li4: 'פרויקטים מפתח בידיים', srv1_li5: 'פיקוח וקואורדינציה באתר', srv1_li6: 'עבודות בנייה כלליות',
    srv2_label: 'שיפוצים', srv2_p: 'עבודות שיפוץ מלאות לדירות, בתים, משרדים, חנויות ומרחבים מסחריים.',
    srv2_li1: 'שיפוץ פנים', srv2_li2: 'שיפוץ מטבח ואמבטיה', srv2_li3: 'עבודות ריצוף ואריחים',
    srv2_li4: 'תקרות וגבס', srv2_li5: 'עבודות צביעה', srv2_li6: 'שינוי תצורת חלל',
    srv3_label: 'תמיכה טכנית', srv3_p: 'בשיתוף פעולה עם צוות המהנדסים שלנו, אנו מספקים תמיכה טכנית מלאה והכוונת פרויקטים.',
    srv3_li1: 'היתרי בנייה', srv3_li2: 'מחקרי הנדסה', srv3_li3: 'שרטוטים אדריכליים',
    srv3_li4: 'סקרים טופוגרפיים', srv3_li5: 'בדיקות טכניות', srv3_li6: 'פיקוח וייעוץ פרויקטים',
    srv4_label: 'חוץ', srv4_p: 'אנו מקבלים עבודות שיפוץ חיצוני ושיקום לשיפור המראה והביצועים האנרגטיים של המבנה.',
    srv4_li1: 'מערכות בידוד חום', srv4_li2: 'תיקון ולכה לחזית', srv4_li3: 'עבודות איטום',
    srv4_li4: 'תיקון גג ובידוד', srv4_li5: 'שיקום מרפסות', srv4_li6: 'תחזוקת חוץ',
    srv5_label: 'ניהול', srv5_p: 'כל פרויקט מנוהל עם פיקוח וקואורדינציה רציפים להבטחת ביצוע נכון והשלמה בזמן.',
    srv5_li1: 'בקרת איכות בנייה', srv5_li2: 'ארגון האתר', srv5_li3: 'תיאום צוותים וספקים',
    srv5_li4: 'עמידה במפרטי הפרויקט', srv5_li5: 'ניהול לוח זמנים', srv5_li6: 'תקשורת ישירה עם הלקוח',
    proj_page_label: 'תיק עבודות', proj_page_h1: 'פרויקטים',
    proj_page_p: 'ב-OCS, כל פרויקט משקף את מחויבותנו לבנייה איכותית, תכנון נכון ותשומת לב לפרטים.',
    filter_all: 'הכל', filter_renovation: 'שיפוץ', filter_construction: 'בנייה', filter_exterior: 'חוץ', filter_interior: 'פנים',
    proj_more_soon: 'פרויקטים נוספים בקרוב — תיק העבודות מתעדכן כל הזמן.',
    contact_hero_p: 'צרו קשר לדיון בפרויקט שלכם. נשמח לעזור.',
    contact_lets_talk: 'בואו נדבר',
    contact_sub: 'אנו זמינים לכל שאלה בנושא בנייה ושיפוצים.',
    contact_phone_lbl: 'טלפון', contact_area_lbl: 'אזור', contact_area_val: 'חלקידה, אוויאה',
    contact_form_title: 'שלחו לנו הודעה',
    contact_form_p: 'מלאו את הטופס ונחזור אליכם בהקדם האפשרי.',
    contact_name_lbl: 'שם מלא *', contact_phone_field: 'טלפון', contact_email_lbl: 'אימייל *',
    contact_service_lbl: 'שירות', contact_msg_lbl: 'הודעה *',
    contact_required: '* שדות חובה', contact_submit_btn: 'שליחת הודעה',
    contact_service_placeholder: '— בחר שירות —', contact_other: 'אחר',
    contact_success_msg: '✓ הודעתך נשלחה בהצלחה! ניצור אתך קשר בקרוב.',
  }
};

/* ─── State ───────────────────────────────── */
let currentLang = localStorage.getItem('ocs-lang') || 'en';

/* ─── Apply language ──────────────────────── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;
  localStorage.setItem('ocs-lang', lang);

  // Direction
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', t.dir);

  // Translate all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* ─── Navbar scroll ───────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active link highlight
  const links = navbar.querySelectorAll('.nav-links a, .nav-mobile a');
  const page = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ─── Mobile menu ─────────────────────────── */
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const mobile = document.getElementById('nav-mobile');
  if (!btn || !mobile) return;
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    mobile.classList.toggle('open');
    document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
  });
  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      btn.classList.remove('open');
      mobile.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ─── Language buttons ────────────────────── */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
}

/* ─── Scroll animations ───────────────────── */
function initAnimations() {
  const els = document.querySelectorAll('.fade-up, .fade-in');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

/* ─── Infinite Project Rail for Mobile ───── */
function initProjectsRailLoop() {
  const rail = document.querySelector('.projects-rail');
  const track = document.querySelector('.projects-track');
  if (!rail || !track) return;

  let isMobile = window.innerWidth <= 700;
  let loopWidth = track.scrollWidth / 2;

  const resetScrollPosition = () => {
    if (isMobile && loopWidth > 0) {
      rail.scrollLeft = loopWidth;
    }
  };

  window.addEventListener('load', () => {
    loopWidth = track.scrollWidth / 2;
    resetScrollPosition();
  });

  setTimeout(() => {
    loopWidth = track.scrollWidth / 2;
    resetScrollPosition();
  }, 400);

  let isAdjusting = false;
  rail.addEventListener('scroll', () => {
    if (!isMobile || isAdjusting) return;

    loopWidth = track.scrollWidth / 2;
    if (loopWidth <= 0) return;

    const currentScroll = rail.scrollLeft;

    if (currentScroll <= 10) {
      isAdjusting = true;
      rail.scrollLeft = currentScroll + loopWidth;
      isAdjusting = false;
    } else if (currentScroll >= (loopWidth * 2) - rail.clientWidth - 10) {
      isAdjusting = true;
      rail.scrollLeft = currentScroll - loopWidth;
      isAdjusting = false;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    const wasMobile = isMobile;
    isMobile = window.innerWidth <= 700;
    loopWidth = track.scrollWidth / 2;
    if (isMobile && !wasMobile) {
      resetScrollPosition();
    }
  });
}

/* ─── Boot ────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHamburger();
  initLangSwitcher();
  initAnimations();
  initProjectsRailLoop();
  applyLang(currentLang);
});


