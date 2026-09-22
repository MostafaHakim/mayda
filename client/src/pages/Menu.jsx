import { useEffect, useMemo, useState } from "react";

/* -------------------------------------------------------------------------
   MenuPage.jsx  —  Halal Bosnian / Oriental restaurant menu page
   React + Vite + Tailwind (v3.3+ or v4). No other dependencies.

   TODO before shipping (search for "TODO"):
   - BRAND, INFO (address / phone / email)  -> client's real details
   - MENU items, prices, and `img` URLs       -> real dishes and photos
   - nav hrefs                                -> swap <a> for your router's <Link>
   ------------------------------------------------------------------------- */

const BRAND = "Mayda"; // TODO: client's restaurant name
const INFO = {
  address: "Street name 1, Dubrovnik", // TODO
  phone: "+385 00 000 0000", // TODO
  email: "hello@example.com", // TODO
};

/* ------------------------------ Translations ----------------------------- */

const LANGS = [
  { code: "en", label: "English" },
  { code: "hr", label: "Hrvatski" },
  { code: "ar", label: "العربية" },
];

const T = {
  en: {
    dir: "ltr",
    nav: {
      menu: "Menu",
      home: "Home",
      services: "Services",
      location: "Location",
      contact: "Contact",
    },
    search: "Search dishes and drinks",
    language: "Language",
    heroTitle: "Bosnian and oriental flavours, halal on every plate",
    heroText:
      "Grilled meats, hand-rolled pies and coffee brewed in a copper džezva.",
    seeMenu: "See the menu",
    call: "Call to reserve",
    tabs: { food: "Food menu", drinks: "Drinks menu" },
    all: "All",
    groups: {
      halal: ["Halal", "No alcohol"],
      nonhalal: ["Non-halal", "Contains alcohol"],
    },
    badge: { halal: "Halal", nonhalal: "Alcohol" },
    count: (n) => `${n} ${n === 1 ? "item" : "items"}`,
    empty: [
      "No matches",
      "Try another word or clear the filters.",
      "Clear search and filters",
    ],
    cats: {
      grill: "Grill",
      pie: "Pies",
      main: "Mains",
      dessert: "Desserts",
      coffee: "Coffee",
      cold: "Cold drinks",
      mocktail: "Mocktails",
      wine: "Wine",
      beer: "Beer",
      spirits: "Spirits",
    },
    footer: {
      tagline: "Bosnian and oriental kitchen",
      explore: "Explore",
      hours: "Open daily, 11:00 to 23:00", // TODO
      rights: "All rights reserved",
    },
  },
  hr: {
    dir: "ltr",
    nav: {
      menu: "Jelovnik",
      home: "Početna",
      services: "Usluge",
      location: "Lokacija",
      contact: "Kontakt",
    },
    search: "Pretraži jela i pića",
    language: "Jezik",
    heroTitle: "Bosanski i orijentalni okusi, halal na svakom tanjuru",
    heroText: "Meso s roštilja, ručno razvučene pite i kava iz bakrene džezve.",
    seeMenu: "Pogledaj jelovnik",
    call: "Nazovi za rezervaciju",
    tabs: { food: "Jela", drinks: "Pića" },
    all: "Sve",
    groups: {
      halal: ["Halal", "Bez alkohola"],
      nonhalal: ["Nije halal", "Sadrži alkohol"],
    },
    badge: { halal: "Halal", nonhalal: "Alkohol" },
    count: (n) => `${n} stavki`,
    empty: [
      "Nema rezultata",
      "Pokušaj drugu riječ ili očisti filtere.",
      "Očisti pretragu i filtere",
    ],
    cats: {
      grill: "Roštilj",
      pie: "Pite",
      main: "Glavna jela",
      dessert: "Slatko",
      coffee: "Kava",
      cold: "Hladna pića",
      mocktail: "Bezalkoholni kokteli",
      wine: "Vino",
      beer: "Pivo",
      spirits: "Žestoka pića",
    },
    footer: {
      tagline: "Bosanska i orijentalna kuhinja",
      explore: "Istraži",
      hours: "Otvoreno svaki dan, 11:00 do 23:00",
      rights: "Sva prava pridržana",
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      menu: "القائمة",
      home: "الرئيسية",
      services: "الخدمات",
      location: "الموقع",
      contact: "اتصل بنا",
    },
    search: "ابحث عن الأطباق والمشروبات",
    language: "اللغة",
    heroTitle: "نكهات بوسنية وشرقية، حلال في كل طبق",
    heroText: "مشويات وفطائر مفرودة يدويًا وقهوة تُحضَّر في جزوة نحاسية.",
    seeMenu: "تصفّح القائمة",
    call: "اتصل للحجز",
    tabs: { food: "قائمة الطعام", drinks: "قائمة المشروبات" },
    all: "الكل",
    groups: {
      halal: ["حلال", "بدون كحول"],
      nonhalal: ["غير حلال", "يحتوي على كحول"],
    },
    badge: { halal: "حلال", nonhalal: "كحول" },
    count: (n) => `${n} عنصر`,
    empty: [
      "لا توجد نتائج",
      "جرّب كلمة أخرى أو أزل عوامل التصفية.",
      "مسح البحث والتصفية",
    ],
    cats: {
      grill: "مشويات",
      pie: "فطائر",
      main: "أطباق رئيسية",
      dessert: "حلويات",
      coffee: "قهوة",
      cold: "مشروبات باردة",
      mocktail: "موكتيل",
      wine: "نبيذ",
      beer: "بيرة",
      spirits: "مشروبات روحية",
    },
    footer: {
      tagline: "مطبخ بوسني وشرقي",
      explore: "استكشف",
      hours: "مفتوح يوميًا من 11:00 إلى 23:00",
      rights: "جميع الحقوق محفوظة",
    },
  },
};

/* --------------------------------- Menu data ------------------------------ */
// type: 'food' | 'drinks'   group: 'halal' | 'nonhalal'   img: optional photo URL
const item = (id, type, group, cat, name, price, en, hr, ar, img) => ({
  id,
  type,
  group,
  cat,
  name,
  price,
  img,
  desc: { en, hr, ar },
});

const MENU = [
  // Food, halal
  item(
    "cevapi",
    "food",
    "halal",
    "grill",
    "Ćevapi u somunu",
    9.5,
    "Grilled minced-beef fingers in warm somun bread, with kajmak and raw onion.",
    "Ćevapi s roštilja u toplom somunu, uz kajmak i sirovi luk.",
    "أصابع لحم بقري مفروم مشوية في خبز الصومون الدافئ مع الكاجماك والبصل.",
  ),
  item(
    "raznjici",
    "food",
    "halal",
    "grill",
    "Ražnjići",
    12,
    "Marinated veal skewers, char-grilled and served with ajvar.",
    "Marinirani teleći ražnjići s roštilja, uz ajvar.",
    "أسياخ لحم عجل متبّلة مشوية على الفحم تُقدَّم مع الأيفار.",
  ),
  item(
    "burek",
    "food",
    "halal",
    "pie",
    "Burek s mesom",
    7.5,
    "Hand-rolled filo pie filled with spiced beef, baked until crisp.",
    "Ručno razvučeno lisnato tijesto s mljevenim mesom, pečeno do hrskavosti.",
    "فطيرة رقائق مفرودة يدويًا محشوة بلحم بقري متبّل ومخبوزة حتى تصبح مقرمشة.",
  ),
  item(
    "sirnica",
    "food",
    "halal",
    "pie",
    "Sirnica",
    6.5,
    "Flaky filo pie filled with fresh cheese.",
    "Lisnata pita punjena svježim sirom.",
    "فطيرة رقائق هشّة محشوة بالجبن الطازج.",
  ),
  item(
    "begova",
    "food",
    "halal",
    "main",
    "Begova čorba",
    6,
    "Creamy chicken and okra soup, the Bosnian classic.",
    "Kremasta juha od piletine i bamije, bosanski klasik.",
    "شوربة دجاج وبامية كريمية، من أشهر أطباق البوسنة.",
  ),
  item(
    "sarma",
    "food",
    "halal",
    "main",
    "Sarma",
    11,
    "Cabbage rolls stuffed with beef and rice, slow-cooked in broth.",
    "Sarma od kiselog kupusa s mljevenim mesom i rižom, kuhana polako.",
    "لفائف ملفوف محشوة باللحم والأرز، مطهوة ببطء في المرق.",
  ),
  item(
    "tufahija",
    "food",
    "halal",
    "dessert",
    "Tufahija",
    5.5,
    "Poached apple filled with walnuts, topped with whipped cream.",
    "Kuhana jabuka punjena orasima, uz šlag.",
    "تفاحة مسلوقة محشوة بالجوز وتُزيَّن بالكريمة المخفوقة.",
  ),
  item(
    "baklava",
    "food",
    "halal",
    "dessert",
    "Baklava",
    4.5,
    "Layers of filo, walnuts and syrup, cut fresh each day.",
    "Slojevi lisnatog tijesta, oraha i sirupa, svaki dan svježe.",
    "طبقات من العجين الرقيق والجوز والقطر، تُقطَّع طازجة كل يوم.",
  ),

  // Food, with alcohol
  item(
    "pasticada",
    "food",
    "nonhalal",
    "main",
    "Pašticada",
    15,
    "Beef braised for hours in red wine and prošek, served with gnocchi.",
    "Govedina dugo dinstana u crnom vinu i prošeku, uz njoke.",
    "لحم بقري مطهو لساعات في النبيذ الأحمر والبروشك، يُقدَّم مع النيوكي.",
  ),
  item(
    "buzara",
    "food",
    "nonhalal",
    "main",
    "Dagnje na buzaru",
    13.5,
    "Mussels in white wine, garlic and tomato.",
    "Dagnje s bijelim vinom, češnjakom i rajčicom.",
    "بلح البحر بالنبيذ الأبيض والثوم والطماطم.",
  ),
  item(
    "tiramisu",
    "food",
    "nonhalal",
    "dessert",
    "Tiramisu",
    6,
    "Mascarpone cream and espresso, finished with amaretto.",
    "Krema od mascarponea i espressa s amarettom.",
    "كريمة الماسكاربوني والإسبريسو مع الأماريتو.",
  ),

  // Drinks, halal
  item(
    "kafa",
    "drinks",
    "halal",
    "coffee",
    "Bosanska kafa",
    3,
    "Brewed in a copper džezva, served with rahat lokum and sugar cubes.",
    "Kuhana u bakrenoj džezvi, uz rahat lokum i kockice šećera.",
    "تُحضَّر في جزوة نحاسية وتُقدَّم مع الراحة والسكر.",
  ),
  item(
    "ayran",
    "drinks",
    "halal",
    "cold",
    "Ayran",
    2.5,
    "Chilled salted yogurt drink.",
    "Ohlađeni slani jogurt-napitak.",
    "مشروب لبن مملّح بارد.",
  ),
  item(
    "limunada",
    "drinks",
    "halal",
    "cold",
    "Limunada s đumbirom",
    4,
    "Fresh-pressed lemon, ginger and honey.",
    "Svježe iscijeđen limun, đumbir i med.",
    "ليمون معصور طازج مع الزنجبيل والعسل.",
  ),
  item(
    "nar",
    "drinks",
    "halal",
    "mocktail",
    "Nar i metvica",
    6.5,
    "Pomegranate, fresh mint, lime and soda. No alcohol.",
    "Nar, svježa metvica, limeta i soda. Bez alkohola.",
    "رمان ونعناع طازج وليمون وصودا. خالٍ من الكحول.",
  ),
  item(
    "serbet",
    "drinks",
    "halal",
    "mocktail",
    "Šerbet od ruže",
    5,
    "Rose petal sherbet over ice with lemon.",
    "Šerbet od latica ruže s ledom i limunom.",
    "شربات بتلات الورد مع الثلج والليمون.",
  ),

  // Drinks, with alcohol
  item(
    "posip",
    "drinks",
    "nonhalal",
    "wine",
    "Pošip",
    5.5,
    "Crisp white from Korčula. Glass, 150 ml.",
    "Svježe bijelo vino s Korčule. Čaša, 1,5 dl.",
    "نبيذ أبيض منعش من جزيرة كورتشولا. كأس ١٥٠ مل.",
  ),
  item(
    "plavac",
    "drinks",
    "nonhalal",
    "wine",
    "Plavac mali",
    6,
    "Full-bodied red from the Pelješac peninsula. Glass, 150 ml.",
    "Puno crno vino s Pelješca. Čaša, 1,5 dl.",
    "نبيذ أحمر كامل القوام من شبه جزيرة بيليشاتس. كأس ١٥٠ مل.",
  ),
  item(
    "pivo",
    "drinks",
    "nonhalal",
    "beer",
    "Craft pivo",
    4.5,
    "Local craft lager, draught. 0.3 l.",
    "Domaće craft pivo s točenja. 0,3 l.",
    "لاجر حِرَفي محلي من الحنفية. ٠٫٣ لتر.",
  ),
  item(
    "sljivovica",
    "drinks",
    "nonhalal",
    "spirits",
    "Šljivovica",
    4,
    "Plum brandy, served chilled. 40 ml.",
    "Rakija šljivovica, servirana ohlađena. 4 cl.",
    "براندي البرقوق يُقدَّم باردًا. ٤٠ مل.",
  ),
];

const catsFor = (tab, group) => [
  ...new Set(
    MENU.filter((i) => i.type === tab && i.group === group).map((i) => i.cat),
  ),
];

/* ---------------------------------- Styles -------------------------------- */

const CSS = `
.sf-root{
  --ink:#0E2B45; --turq:#19908F; --turq-d:#0B6B6C; --pom:#B3243F; --saf:#E8AE3A;
  --stone:#F1F4F2; --muted:#52677A; --line:rgba(14,43,69,.16);
  --f-display:'DM Serif Display',Georgia,serif;
  --f-body:'Hanken Grotesk',system-ui,sans-serif;
  font-family:var(--f-body);
}
.sf-root[dir=rtl]{ --f-display:'Cairo',system-ui,sans-serif; --f-body:'Cairo',system-ui,sans-serif; }
.sf-display{ font-family:var(--f-display); font-weight:400; }
.sf-root[dir=rtl] .sf-display{ font-weight:700; line-height:1.35; }
.sf-root button{ cursor:pointer; }
.sf-root :focus-visible{ outline:2px solid var(--turq-d); outline-offset:2px; }
.sf-root .sf-dark :focus-visible, .sf-root .sf-dark:focus-visible{ outline-color:var(--saf); }
@keyframes sf-rot{ to{ transform:rotate(360deg); } }
.sf-spin{ animation:sf-rot 140s linear infinite; transform-origin:center; }
@media (prefers-reduced-motion:reduce){ .sf-spin{ animation:none; } }
`;

/* ---------------------------------- Icons --------------------------------- */

const ICONS = {
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.7 4 5.7 4 9s-1.4 6.3-4 9c-2.6-2.7-4-5.7-4-9s1.4-6.3 4-9z" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  glass: <path d="M7 3h10v5a5 5 0 0 1-10 0V3zM12 13v8M8 21h8" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

/* ------------------------------ Decorative art ---------------------------- */

// Small brand mark: an eight-point star made of two squares
function StarMark({ className = "h-8 w-8" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="#E8AE3A"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="5" y="5" width="14" height="14" />
      <rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="2.2" fill="#E8AE3A" stroke="none" />
    </svg>
  );
}

// The hero's big tile-inspired rosette
function Rosette({ className = "" }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      <g fill="none">
        <circle
          r="96"
          stroke="#19908F"
          strokeWidth="1.2"
          strokeDasharray="2 5"
        />
        <circle r="88" stroke="#E8AE3A" strokeWidth="1" strokeOpacity=".5" />
        <rect
          x="-62"
          y="-62"
          width="124"
          height="124"
          stroke="#19908F"
          strokeWidth="1.6"
        />
        <rect
          x="-62"
          y="-62"
          width="124"
          height="124"
          stroke="#19908F"
          strokeWidth="1.6"
          transform="rotate(45)"
        />
      </g>
      {Array.from({ length: 8 }, (_, k) => k * 45).map((a) => (
        <ellipse
          key={a}
          cx="0"
          cy="-40"
          rx="9"
          ry="22"
          transform={`rotate(${a})`}
          fill={a % 90 === 0 ? "#B3243F" : "#19908F"}
        />
      ))}
      <circle r="20" fill="#E8AE3A" />
      <circle r="9" fill="#0E2B45" />
    </svg>
  );
}

function TileBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="sf-tile"
          width="56"
          height="56"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke="#fff" strokeOpacity=".08">
            <rect x="14" y="14" width="28" height="28" />
            <rect
              x="14"
              y="14"
              width="28"
              height="28"
              transform="rotate(45 28 28)"
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sf-tile)" />
    </svg>
  );
}

// Placeholder shown until a real photo URL (`img`) is added to the menu item
const TONES = [
  ["#0E2B45", "#19908F"],
  ["#B3243F", "#F0C9D0"],
  ["#0B6B6C", "#E8AE3A"],
  ["#34495E", "#E8AE3A"],
];

function DishArt({ src, index, id }) {
  if (src) {
    return (
      <img
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover"
      />
    );
  }
  const [bg, fg] = TONES[index % TONES.length];
  return (
    <svg
      viewBox="0 0 200 150"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={`dish-${id}`}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <g fill="none" stroke={fg} strokeOpacity=".22">
            <rect x="10" y="10" width="20" height="20" />
            <rect
              x="10"
              y="10"
              width="20"
              height="20"
              transform="rotate(45 20 20)"
            />
          </g>
        </pattern>
      </defs>
      <rect width="200" height="150" fill={bg} />
      <rect width="200" height="150" fill={`url(#dish-${id})`} />
      <circle cx="100" cy="75" r="46" fill={bg} stroke={fg} strokeWidth="2" />
      <circle cx="100" cy="75" r="33" fill={fg} fillOpacity=".2" />
    </svg>
  );
}

/* ---------------------------------- Badge --------------------------------- */

function Badge({ group, label, className = "" }) {
  const halal = group === "halal";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold text-white shadow-sm ${
        halal ? "bg-[var(--turq-d)]" : "bg-[var(--pom)]"
      } ${className}`}
    >
      <Icon name={halal ? "check" : "glass"} className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}

/* ------------------------------------ Page -------------------------------- */

const NAV = [
  // Order follows the client's sketch. `menu` is the current page.
  { id: "menu", path: "/" },
  { id: "home", href: "home" },
  { id: "services", href: "services" },
  { id: "location", href: "locations" },
  { id: "contact", href: "contact" },
];

export default function Menu() {
  const [lang, setLang] = useState("en");
  const [tab, setTab] = useState("food");
  const [sel, setSel] = useState({ group: "all", cat: "all" });
  const [query, setQuery] = useState("");
  const [navOpen, setNavOpen] = useState(false);
  const t = T[lang];

  // Load the fonts once (or move this <link> into index.html)
  useEffect(() => {
    if (document.getElementById("sf-fonts")) return;
    const link = document.createElement("link");
    link.id = "sf-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=DM+Serif+Display&family=Hanken+Grotesk:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);

  const changeTab = (next) => {
    setTab(next);
    setSel({ group: "all", cat: "all" });
  };

  const clearAll = () => {
    setQuery("");
    setSel({ group: "all", cat: "all" });
  };

  const tabItems = useMemo(() => MENU.filter((i) => i.type === tab), [tab]);

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tabItems.filter(
      (i) =>
        (sel.group === "all" || i.group === sel.group) &&
        (sel.cat === "all" || i.cat === sel.cat) &&
        (!q ||
          `${i.name} ${i.desc[lang]} ${i.desc.en}`.toLowerCase().includes(q)),
    );
  }, [tabItems, sel, query, lang]);

  const phoneHref = `tel:${INFO.phone.replace(/\s/g, "")}`;

  return (
    <div
      id="top"
      dir={t.dir}
      lang={lang}
      className="sf-root min-h-screen bg-[var(--stone)] text-[var(--ink)]"
    >
      <style>{CSS}</style>

      {/* ------------------------------ Header ------------------------------ */}
      <header className="sf-dark sticky top-0 z-40 bg-[var(--ink)] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <StarMark />
            <span className="sf-display text-2xl leading-none">{BRAND}</span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={n.href}
                aria-current={n.id === "menu" ? "page" : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-white ${
                  n.id === "menu" ? "text-white" : "text-white/70"
                }`}
              >
                {t.nav[n.id]}
                {n.id === "menu" && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-[var(--saf)]" />
                )}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setNavOpen((o) => !o)}
            aria-expanded={navOpen}
            aria-label={t.nav.menu}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 md:hidden"
          >
            <Icon name={navOpen ? "close" : "menu"} />
          </button>
        </div>

        {navOpen && (
          <nav
            aria-label="Main"
            className="border-t border-white/10 px-4 py-2 md:hidden"
          >
            {NAV.map((n) => (
              <a
                key={n.id}
                href={n.href}
                onClick={() => setNavOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base ${
                  n.id === "menu" ? "bg-white/10 text-white" : "text-white/75"
                }`}
              >
                {t.nav[n.id]}
              </a>
            ))}
          </nav>
        )}

        {/* Search + language row (from the sketch) */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6">
            <label className="relative block flex-1">
              <span className="sr-only">{t.search}</span>
              <Icon
                name="search"
                className="pointer-events-none absolute start-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.search}
                className="h-11 w-full rounded-full border border-white/15 bg-white/10 pe-4 ps-12 text-sm text-white placeholder:text-white/55 focus:border-[var(--saf)] focus:bg-white/15 focus:outline-none"
              />
            </label>

            <label className="relative block w-36 shrink-0 sm:w-48">
              <span className="sr-only">{t.language}</span>
              <Icon
                name="globe"
                className="pointer-events-none absolute start-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-white/70"
              />
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="h-11 w-full cursor-pointer appearance-none rounded-full border border-white/15 bg-white/10 pe-9 ps-10 text-sm text-white focus:border-[var(--saf)] focus:outline-none"
              >
                {LANGS.map((l) => (
                  <option key={l.code} value={l.code} className="text-black">
                    {l.label}
                  </option>
                ))}
              </select>
              <Icon
                name="chevron"
                className="pointer-events-none absolute end-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/70"
              />
            </label>
          </div>
        </div>
      </header>

      <main>
        {/* ------------------------------- Hero ------------------------------ */}
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
          <section className="sf-dark relative overflow-hidden rounded-[28px] bg-[var(--ink)] text-white">
            <TileBackdrop />
            <div className="pointer-events-none absolute -end-28 top-1/2 w-[560px] max-w-none -translate-y-1/2 opacity-25 md:opacity-100">
              <Rosette className="sf-spin h-auto w-full" />
            </div>

            <div className="relative z-10 max-w-xl px-6 py-14 sm:px-10 md:py-24 lg:px-14">
              <h1 className="sf-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                {t.heroText}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="rounded-full bg-[var(--saf)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-white"
                >
                  {t.seeMenu}
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:bg-white/10"
                >
                  <Icon name="phone" className="h-[18px] w-[18px]" />
                  {t.call}
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* -------------------------------- Menu ----------------------------- */}
        <section
          id="menu"
          className="mx-auto max-w-7xl scroll-mt-40 px-4 pb-20 pt-14 sm:px-6"
        >
          {/* Food menu | Drinks menu */}
          <div
            role="tablist"
            className="grid grid-cols-2 border-b border-[var(--line)]"
          >
            {["food", "drinks"].map((k, idx) => {
              const on = tab === k;
              return (
                <button
                  key={k}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => changeTab(k)}
                  className={`sf-display relative px-2 py-5 text-center text-2xl transition-colors sm:text-4xl ${
                    idx === 0
                      ? "border-e border-dashed border-[var(--line)]"
                      : ""
                  } ${on ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"}`}
                >
                  {t.tabs[k]}
                  {on && (
                    <span className="absolute inset-x-0 -bottom-px h-1 bg-[var(--turq)]" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[250px_1fr]">
            {/* Sidebar: halal / non-halal groups */}
            <aside className="lg:sticky lg:top-36 lg:self-start">
              <nav aria-label={t.tabs[tab]}>
                <button
                  type="button"
                  onClick={() => setSel({ group: "all", cat: "all" })}
                  aria-pressed={sel.group === "all"}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-start font-semibold transition-colors ${
                    sel.group === "all"
                      ? "bg-white shadow-sm ring-1 ring-[var(--line)]"
                      : "hover:bg-white/60"
                  }`}
                >
                  {t.all}
                  <span className="text-xs font-normal text-[var(--muted)]">
                    {tabItems.length}
                  </span>
                </button>

                {["halal", "nonhalal"].map((g) => {
                  const groupOn = sel.group === g && sel.cat === "all";
                  return (
                    <div key={g} className="mt-5">
                      <button
                        type="button"
                        onClick={() => setSel({ group: g, cat: "all" })}
                        aria-pressed={groupOn}
                        className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-start transition-colors ${
                          groupOn
                            ? "bg-white shadow-sm ring-1 ring-[var(--line)]"
                            : "hover:bg-white/60"
                        }`}
                      >
                        <span
                          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white ${
                            g === "halal"
                              ? "bg-[var(--turq-d)]"
                              : "bg-[var(--pom)]"
                          }`}
                        >
                          <Icon
                            name={g === "halal" ? "check" : "glass"}
                            className="h-[18px] w-[18px]"
                          />
                        </span>
                        <span>
                          <span className="block font-semibold leading-tight">
                            {t.groups[g][0]}
                          </span>
                          <span className="block text-xs text-[var(--muted)]">
                            {t.groups[g][1]}
                          </span>
                        </span>
                      </button>

                      <ul className="mt-2 flex flex-wrap gap-2 lg:flex-col lg:gap-1 lg:ps-4">
                        {catsFor(tab, g).map((c) => {
                          const on = sel.group === g && sel.cat === c;
                          const n = tabItems.filter(
                            (i) => i.group === g && i.cat === c,
                          ).length;
                          return (
                            <li key={c} className="lg:w-full">
                              <button
                                type="button"
                                onClick={() => setSel({ group: g, cat: c })}
                                aria-pressed={on}
                                className={`flex items-center justify-between gap-3 rounded-full border px-3.5 py-1.5 text-sm transition-colors lg:w-full lg:rounded-lg lg:border-transparent lg:py-2 ${
                                  on
                                    ? "border-[var(--ink)] bg-[var(--ink)] text-white"
                                    : "border-[var(--line)] hover:bg-white"
                                }`}
                              >
                                {t.cats[c]}
                                <span
                                  className={`text-xs ${on ? "text-white/70" : "text-[var(--muted)]"}`}
                                >
                                  {n}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </nav>
            </aside>

            {/* Item grid */}
            <div role="tabpanel">
              <p
                className="mb-4 text-sm text-[var(--muted)]"
                aria-live="polite"
              >
                {t.count(items.length)}
              </p>

              {items.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-[var(--line)] px-6 py-16 text-center">
                  <p className="sf-display text-2xl">{t.empty[0]}</p>
                  <p className="mt-2 text-[var(--muted)]">{t.empty[1]}</p>
                  <button
                    type="button"
                    onClick={clearAll}
                    className="mt-6 rounded-full bg-[var(--ink)] px-6 py-2.5 text-sm font-semibold text-white"
                  >
                    {t.empty[2]}
                  </button>
                </div>
              ) : (
                <ul className="grid gap-0.5 sm:gap-5 grid-cols-2 xl:grid-cols-3">
                  {items.map((i) => {
                    const idx = MENU.indexOf(i);
                    return (
                      <li key={i.id}>
                        <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-[var(--line)] bg-white">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <DishArt src={i.img} index={idx} id={i.id} />
                            <Badge
                              group={i.group}
                              label={t.badge[i.group]}
                              className="absolute bottom-3 start-3"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-2 p-4">
                            <div className="flex items-baseline justify-between gap-3">
                              <h3 className="sf-display text-xl leading-tight">
                                {i.name}
                              </h3>
                              <span className="shrink-0 font-semibold text-[var(--turq-d)]">
                                €{i.price.toFixed(2)}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed text-[var(--muted)] line-clamp-2 sm:line-clamp-none">
                              {i.desc[lang]}
                            </p>
                          </div>
                        </article>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------ Footer ------------------------------ */}
      <footer className="sf-dark bg-[var(--ink)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <StarMark className="h-9 w-9" />
              <span className="sf-display text-3xl leading-none">{BRAND}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {t.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-semibold">{t.footer.explore}</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={n.href}
                    className="transition-colors hover:text-white"
                  >
                    {t.nav[n.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div id="location" className="scroll-mt-40">
            <h2 className="font-semibold">{t.nav.location}</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Icon
                  name="pin"
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--saf)]"
                />
                {INFO.address}
              </li>
              <li className="flex gap-3">
                <Icon
                  name="clock"
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--saf)]"
                />
                {t.footer.hours}
              </li>
            </ul>
          </div>

          <div id="contact" className="scroll-mt-40">
            <h2 className="font-semibold">{t.nav.contact}</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-3">
                <Icon
                  name="phone"
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--saf)]"
                />
                <a href={phoneHref} dir="ltr" className="hover:text-white">
                  {INFO.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Icon
                  name="mail"
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[var(--saf)]"
                />
                <a href={`mailto:${INFO.email}`} className="hover:text-white">
                  {INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/50 sm:px-6">
            © {new Date().getFullYear()} {BRAND}. {t.footer.rights}.
          </p>
        </div>
      </footer>
    </div>
  );
}
