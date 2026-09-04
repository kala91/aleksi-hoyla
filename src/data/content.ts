export type Project = {
  slug: string;
  name: string;
  year: string;
  category: 'Oppiminen' | 'Pelit' | 'Luova teknologia' | 'Esittävä taide';
  status: string;
  summary: string;
  role: string;
  evidence: string;
  tags: string[];
  featured?: boolean;
  href?: string;
  accent: string;
};

export const profile = {
  name: 'Aleksi Höylä',
  title: 'Teknologiakasvattaja · pedagoginen kehittäjä · projektikoordinaattori',
  summary: 'Rakennan teknologian ympärille toimintaa, jota ihmiset osaavat ja haluavat käyttää.',
  introduction: 'Työssäni yhdistyvät oppiminen, pelit, tekoäly, osallistavat menetelmät ja käytännön tekninen toteutus. Erityisen mielelläni tartun tilanteisiin, joissa valmista mallia ei vielä ole.',
  about: 'Taustani kulkee esittävästä taiteesta osallistaviin peleihin, digitaalisiin yhteisöihin ja teknologiakasvatukseen. Välineet ovat vaihtuneet, mutta työn ydin on pysynyt samana: teen monimutkaisista asioista ymmärrettäviä, rakennan turvallisia tapoja osallistua ja vien ideat kokeiltavaan muotoon.',
};

export const capabilities = [
  { number: '01', title: 'Oppiminen ja teknologia', description: 'Tekoäly, robotiikka, pelillisyys ja digitaaliset ympäristöt käytännön oppimistilanteiksi.' },
  { number: '02', title: 'Uuden toiminnan rakentaminen', description: 'Konseptista ensimmäiseen testiin, toimintamalliin ja arjessa toimivaan toteutukseen.' },
  { number: '03', title: 'Ihmiset ja projektit', description: 'Fasilitointi, kouluttaminen, koordinointi ja eri alojen tekijöiden saaminen saman pöydän ääreen.' },
];

export const projects: Project[] = [
  { slug: 'elopeli', name: 'EloPeli', year: '2025–2026', category: 'Pelit', status: 'Jatkokehityksessä', summary: 'Digitaaliavusteinen improvisaatioteatterin menetelmä ja selainpohjainen moninpelijärjestelmä.', role: 'Konsepti, pedagoginen malli, tekninen toteutus, testaus ja hankehallinto', evidence: 'Node.js · Socket.IO · tekoäly · dramaturgia · 24 000 € apurahaprojekti', tags: ['pelisuunnittelu', 'tekoäly', 'improvisaatio'], featured: true, href: 'https://kala91.github.io/assisted-improvisation-lab/', accent: '#f36f43' },
  { slug: 'aalto-junior', name: 'Aalto-yliopisto Junior', year: '2023–2024', category: 'Oppiminen', status: 'Työkokonaisuus', summary: 'Kouluihin vietäviä tekoälyn, robotiikan, micro:bitin ja Minecraft Educationin oppimiskokonaisuuksia.', role: 'Teknologiakasvatuksen hankekoordinaattori', evidence: 'Pedagoginen suunnittelu · kouluyhteistyö · ohjaajien perehdytys · laiteympäristöt', tags: ['teknologiakasvatus', 'koulut', 'koordinointi'], featured: true, accent: '#f1b746' },
  { slug: 'school-of-gaming', name: 'School of Gaming', year: '2020–2023', category: 'Oppiminen', status: 'Työkokonaisuus', summary: 'Pelikasvatuksen toimintamalleja, virtuaalileirejä ja yhteisöllisiä digitaalisia ympäristöjä.', role: 'Pelikasvatuksen kehittäjä ja koordinaattori', evidence: 'Minecraft · Azure · Discord · Roblox · koulutuspolut · yhteisön kehittäminen', tags: ['pelikasvatus', 'digitaaliset yhteisöt', 'infrastruktuuri'], featured: true, accent: '#64c1a0' },
  { slug: 'matka', name: 'MATKA', year: '2015', category: 'Esittävä taide', status: 'Valmistunut', summary: 'Näyttämölle rakennettu osallistava liveroolipeli, jossa teatteri ja pelirakenne kohtasivat.', role: 'Ohjaaja ja tuottaja', evidence: 'Osallistava dramaturgia · fasilitointi · pelisuunnittelu · tuotanto', tags: ['larp', 'teatteri', 'osallistaminen'], featured: true, accent: '#9e8bd5' },
  { slug: 'puhuva-veistos', name: 'Puhuva veistos', year: '2026', category: 'Luova teknologia', status: 'Prototyyppi', summary: 'Selainpohjainen äänikäyttöliittymä, joka tekee veistoksesta paikkaan sidotun keskustelevan hahmon.', role: 'Konsepti ja prototypointi', evidence: 'Gemini Live · reaaliaikainen puhe · vuorovaikutussuunnittelu', tags: ['ääni', 'tekoäly', 'prototyyppi'], href: 'https://github.com/kala91/Puhuva-veistos', accent: '#55a7d9' },
  { slug: 'monologigeneraattori', name: 'Monologigeneraattori', year: '2026', category: 'Luova teknologia', status: 'Prototyyppi', summary: 'Yksin pelattava dramaturginen työkalu, joka ohjaa monologia jeepform-henkisellä rakenteella.', role: 'Konsepti ja prototypointi', evidence: 'React · Gemini · dramaturginen taksonomia · generatiivinen tekoäly', tags: ['dramaturgia', 'tekoäly', 'pelillisyys'], href: 'https://github.com/kala91/Monologi-generaattori', accent: '#df75a8' },
];

export const contact = { github: 'https://github.com/kala91', linkedin: 'https://www.linkedin.com/in/aleksihoyla/' };
export const seo = { title: 'Aleksi Höylä | Teknologiakasvatus, pelit ja luova teknologia', description: 'Aleksi Höylän portfolio: teknologiakasvatusta, pedagogista kehittämistä, pelejä, tekoälyä ja osallistavia menetelmiä.', ogImage: '/images/og-placeholder.svg' };
