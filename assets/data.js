/* =========================================================
   Every iPhone we repair, and every repair we offer.
   Edit this file to add new models or change repair names.
   ========================================================= */

/* Shop details: change these once and every page updates. */
window.SHOP = {
  name: "Cellunet",
  tagline: "Mobile accessories & repair services",
  email: "",                            // no public shop email
  phone: "(778) 598-8079",
  phoneHref: "+17785988079",
  area: "Abbotsford, BC",
  address: "34954 Cassiar Ave, Abbotsford, BC V2S 7G8",
  hoursList: [["Every day", "9am to 9pm"]],
  hours: "Repairs every day, 9am to 9pm",
  quoteHours: "Quote requests 24/7",

  /* Where quote requests go:
     1. apiEndpoint: the site's own server function (api/quote.js), which emails the request
        WITH the customer's photos through Cellunet's Resend account. Its key lives in Vercel, not here.
     2. web3formsKey: backup if that ever fails. Sends the request text only. */
  apiEndpoint: "/api/quote",
  web3formsKey: "20294cc0-f200-4fc4-8934-a6971cbc9e74",

  /* The message that opens in the customer's Messages app when they tap "Text us a photo". */
  smsMessage: "Hi Cellunet! I'd like a free quote.\nMy iPhone: \nWhat's wrong: \n(Photo attached)",

  /* The four sticky notes under the hero. Delete any line you don't want to promise. */
  notes: [
    { title: "Warranty on every repair", body: "Parts and labour. We'll tell you exactly how long it covers with your quote.", color: "pink" },
    { title: "Seen a cheaper quote?", body: "Show us a written quote from another Abbotsford shop for the same repair and we'll try to beat it.", color: "blue" },
    { title: "UFV students", body: "Show your student card when we fix your iPhone and get a student discount.", color: "yellow" },
    { title: "We come to you", body: "Most repairs are done at your home or work within a few hours. Bigger jobs you can drop off.", color: "green" }
  ]
};

/* Real Google reviews only. Paste them in like the example and a reviews section appears on the home page.
   { name: "First name L.", stars: 5, text: "What they wrote." } */
window.REVIEWS = [];

/* Camera layouts used to draw each phone's back.
   single | dual-v | dual-h | dual-sq | dual-diag | dual-pill | triple | plateau3 | plateau1 | fold | classic */

window.GENERATIONS = [
  { id: "g18", label: "iPhone 18 & Duo", year: "2026", models: [
    { id: "iphone-duo",        name: "iPhone Duo",        cam: "fold",     color: "#C9CDD4", port: "USB-C", bio: "faceid", back: "glass", fold: true },
    { id: "iphone-18-pro-max", name: "iPhone 18 Pro Max", cam: "plateau3", color: "#6B1E2E", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-18-pro",     name: "iPhone 18 Pro",     cam: "plateau3", color: "#2B3A55", port: "USB-C", bio: "faceid", back: "glass" }
  ]},
  { id: "g17", label: "iPhone 17 & Air", year: "2025 to 2026", models: [
    { id: "iphone-17-pro-max", name: "iPhone 17 Pro Max", cam: "plateau3", color: "#E2662B", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-17-pro",     name: "iPhone 17 Pro",     cam: "plateau3", color: "#2D4A7A", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-air",        name: "iPhone Air",        cam: "plateau1", color: "#BFD7EA", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-17",         name: "iPhone 17",         cam: "dual-pill",color: "#A9B9A0", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-17e",        name: "iPhone 17e",        cam: "single",   color: "#F1D3D3", port: "USB-C", bio: "faceid", back: "glass" }
  ]},
  { id: "g16", label: "iPhone 16", year: "2024 to 2025", models: [
    { id: "iphone-16-pro-max", name: "iPhone 16 Pro Max", cam: "triple",   color: "#C2A98B", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-16-pro",     name: "iPhone 16 Pro",     cam: "triple",   color: "#8C8A85", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-16-plus",    name: "iPhone 16 Plus",    cam: "dual-pill",color: "#3D5BD9", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-16",         name: "iPhone 16",         cam: "dual-pill",color: "#7FD0C4", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-16e",        name: "iPhone 16e",        cam: "single",   color: "#F4F4F2", port: "USB-C", bio: "faceid", back: "glass" }
  ]},
  { id: "g15", label: "iPhone 15", year: "2023", models: [
    { id: "iphone-15-pro-max", name: "iPhone 15 Pro Max", cam: "triple",   color: "#3B4253", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-15-pro",     name: "iPhone 15 Pro",     cam: "triple",   color: "#D8D3CB", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-15-plus",    name: "iPhone 15 Plus",    cam: "dual-diag",color: "#F3D6DC", port: "USB-C", bio: "faceid", back: "glass" },
    { id: "iphone-15",         name: "iPhone 15",         cam: "dual-diag",color: "#D4E5EF", port: "USB-C", bio: "faceid", back: "glass" }
  ]},
  { id: "g14", label: "iPhone 14", year: "2022", models: [
    { id: "iphone-14-pro-max", name: "iPhone 14 Pro Max", cam: "triple",   color: "#5A4E66", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-14-pro",     name: "iPhone 14 Pro",     cam: "triple",   color: "#E9DFC9", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-14-plus",    name: "iPhone 14 Plus",    cam: "dual-diag",color: "#F2E27A", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-14",         name: "iPhone 14",         cam: "dual-diag",color: "#A7B8CF", port: "Lightning", bio: "faceid", back: "glass" }
  ]},
  { id: "g13", label: "iPhone 13", year: "2021", models: [
    { id: "iphone-13-pro-max", name: "iPhone 13 Pro Max", cam: "triple",   color: "#A9C3D9", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-13-pro",     name: "iPhone 13 Pro",     cam: "triple",   color: "#5E6E58", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-13",         name: "iPhone 13",         cam: "dual-diag",color: "#F4C9CF", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-13-mini",    name: "iPhone 13 mini",    cam: "dual-diag",color: "#26324A", port: "Lightning", bio: "faceid", back: "glass", small: true }
  ]},
  { id: "g12", label: "iPhone 12", year: "2020", models: [
    { id: "iphone-12-pro-max", name: "iPhone 12 Pro Max", cam: "triple",   color: "#2F4A63", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-12-pro",     name: "iPhone 12 Pro",     cam: "triple",   color: "#E6E1D6", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-12",         name: "iPhone 12",         cam: "dual-sq",  color: "#B7D9C4", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-12-mini",    name: "iPhone 12 mini",    cam: "dual-sq",  color: "#C7232F", port: "Lightning", bio: "faceid", back: "glass", small: true }
  ]},
  { id: "g11", label: "iPhone 11", year: "2019", models: [
    { id: "iphone-11-pro-max", name: "iPhone 11 Pro Max", cam: "triple",   color: "#3F4F44", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-11-pro",     name: "iPhone 11 Pro",     cam: "triple",   color: "#ECE4D8", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-11",         name: "iPhone 11",         cam: "dual-sq",  color: "#C9B8E2", port: "Lightning", bio: "faceid", back: "glass" }
  ]},
  { id: "gx", label: "iPhone X, XS & XR", year: "2017 to 2018", models: [
    { id: "iphone-xs-max",     name: "iPhone XS Max",     cam: "dual-v",   color: "#E8D3B5", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-xs",         name: "iPhone XS",         cam: "dual-v",   color: "#4A4D54", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-xr",         name: "iPhone XR",         cam: "single",   color: "#F07A55", port: "Lightning", bio: "faceid", back: "glass" },
    { id: "iphone-x",          name: "iPhone X",          cam: "dual-v",   color: "#DADDE1", port: "Lightning", bio: "faceid", back: "glass" }
  ]},
  { id: "gse", label: "iPhone SE, 8 & older", year: "2012 to 2022", models: [
    { id: "iphone-se-3",       name: "iPhone SE (3rd gen, 2022)", cam: "classic", color: "#B9202C", port: "Lightning", bio: "touchid", back: "glass", small: true },
    { id: "iphone-se-2",       name: "iPhone SE (2nd gen, 2020)", cam: "classic", color: "#F2F2F0", port: "Lightning", bio: "touchid", back: "glass", small: true },
    { id: "iphone-8-plus",     name: "iPhone 8 Plus",     cam: "dual-h",   color: "#E9D9C9", port: "Lightning", bio: "touchid", back: "glass" },
    { id: "iphone-8",          name: "iPhone 8",          cam: "classic",  color: "#3E4046", port: "Lightning", bio: "touchid", back: "glass", small: true },
    { id: "iphone-7-plus",     name: "iPhone 7 Plus",     cam: "dual-h",   color: "#1D1E21", port: "Lightning", bio: "touchid", back: "metal" },
    { id: "iphone-7",          name: "iPhone 7",          cam: "classic",  color: "#E8C7BF", port: "Lightning", bio: "touchid", back: "metal", small: true },
    { id: "iphone-6s-plus",    name: "iPhone 6s Plus",    cam: "classic",  color: "#D9C7A7", port: "Lightning", bio: "touchid", back: "metal" },
    { id: "iphone-6s",         name: "iPhone 6s",         cam: "classic",  color: "#8D9096", port: "Lightning", bio: "touchid", back: "metal", small: true },
    { id: "iphone-6-plus",     name: "iPhone 6 Plus",     cam: "classic",  color: "#C9CBCE", port: "Lightning", bio: "touchid", back: "metal" },
    { id: "iphone-6",          name: "iPhone 6",          cam: "classic",  color: "#E3D2B4", port: "Lightning", bio: "touchid", back: "metal", small: true },
    { id: "iphone-se-1",       name: "iPhone SE (1st gen, 2016)", cam: "classic", color: "#E6CFC6", port: "Lightning", bio: "touchid", back: "metal", small: true },
    { id: "iphone-5s",         name: "iPhone 5s",         cam: "classic",  color: "#55585E", port: "Lightning", bio: "touchid", back: "metal", small: true },
    { id: "iphone-5c",         name: "iPhone 5c",         cam: "classic",  color: "#8FD3E8", port: "Lightning", bio: "home",    back: "plastic", small: true },
    { id: "iphone-5",          name: "iPhone 5",          cam: "classic",  color: "#2A2B2E", port: "Lightning", bio: "home",    back: "metal", small: true }
  ]}
];

/* Every repair. `forModel` lets a repair describe itself for a specific phone. */
window.REPAIRS = [
  { id: "screen", name: "Screen replacement", short: "Screen",
    blurb: "Cracked glass, lines, dead spots, flicker, or a screen that won't respond to touch.",
    forModel: m => m.fold
      ? "Inner folding display or outer cover screen. Cracks, creasing, lines or dead touch."
      : "Cracked glass, lines, dead spots, flicker, or a screen that won't respond to touch." },
  { id: "battery", name: "Battery replacement", short: "Battery",
    blurb: "Dies by lunch, shuts off at 20%, swollen, or says Service in battery health.",
    forModel: () => "Dies by lunch, shuts off at 20%, swollen, or shows Service in Battery Health." },
  { id: "backglass", name: "Back glass & housing", short: "Back glass",
    blurb: "Shattered back glass, bent frame, or a scuffed housing you're tired of looking at.",
    forModel: m => m.back === "glass"
      ? "Shattered back glass or a bent, dented frame."
      : m.back === "plastic" ? "Cracked or worn plastic back shell." : "Bent, dented or scratched aluminum back housing." },
  { id: "port", name: "Charging port", short: "Charging port",
    blurb: "Only charges at an angle, loose cable, or not charging at all. USB-C and Lightning.",
    forModel: m => `${m.port} port that only charges at an angle, feels loose, or won't charge at all.` },
  { id: "rearcam", name: "Rear camera & lens", short: "Back camera",
    blurb: "Blurry photos, a cracked lens cover, black camera, or a shaking, buzzing lens.",
    forModel: () => "Blurry or shaking photos, a cracked lens cover, or a black camera screen." },
  { id: "frontcam", name: "Front camera, Face ID & Touch ID", short: "Face ID & front camera",
    blurb: "Selfie camera not working, Face ID unavailable, or the home button has stopped reading.",
    forModel: m => m.bio === "faceid"
      ? "Selfie camera problems or a Face ID is not available message."
      : m.bio === "touchid" ? "Selfie camera problems, or a home button or Touch ID that stopped working."
      : "Selfie camera problems or a stuck, unresponsive home button." },
  { id: "water", name: "Water & liquid damage", short: "Water damage",
    blurb: "Dropped in the sink, the pool or the toilet. Get in touch fast and don't charge it.",
    forModel: () => "Liquid exposure of any kind. Power it off, don't charge it, and get in touch quickly." },
  { id: "audio", name: "Speaker, earpiece & mic", short: "Speaker & mic",
    blurb: "People can't hear you, calls sound muffled, or the speaker crackles.",
    forModel: () => "Muffled calls, crackling speaker, or people can't hear you." },
  { id: "buttons", name: "Buttons & switches", short: "Buttons",
    blurb: "Power, volume, mute switch or Action button that's stuck, loose or dead.",
    forModel: m => m.cam === "classic" || m.bio !== "faceid"
      ? "Power, volume or mute switch that's stuck, loose or not clicking."
      : "Side button, volume, mute switch or Action button that's stuck or dead." },
  { id: "power", name: "Won't turn on / board repair", short: "Won't turn on",
    blurb: "Black screen, boot loops, no service, or a phone that died and never came back.",
    forModel: () => "Black screen, stuck in a boot loop, no service, or completely dead." },
  { id: "software", name: "Software, data & transfers", short: "Software & data",
    blurb: "Stuck on the Apple logo, update failed, or you need photos moved to a new phone.",
    forModel: () => "Stuck on the Apple logo, a failed update, or moving data to a new phone." },
  { id: "other", name: "Something else / not sure", short: "Something else",
    blurb: "Describe what it's doing and we'll figure it out. Asking costs nothing.",
    forModel: () => "Tell us what it's doing and we'll work out the fix. Asking costs nothing." }
];

window.findModel = id => {
  for (const g of window.GENERATIONS) for (const m of g.models) if (m.id === id) return m;
  return null;
};

/* Build the little back-of-phone drawing for a model. */
window.phoneBack = (m, extraClass = "") => {
  const lens = n => '<i class="lens"></i>'.repeat(n);
  const cams = {
    "single":   `<span class="bump b-single">${lens(1)}</span>`,
    "classic":  `<span class="bump b-classic">${lens(1)}<i class="flash"></i></span>`,
    "dual-v":   `<span class="bump b-dual-v">${lens(2)}</span>`,
    "dual-h":   `<span class="bump b-dual-h">${lens(2)}</span>`,
    "dual-sq":  `<span class="bump b-dual-sq">${lens(2)}<i class="flash"></i></span>`,
    "dual-diag":`<span class="bump b-dual-diag">${lens(2)}<i class="flash"></i></span>`,
    "dual-pill":`<span class="bump b-dual-pill">${lens(2)}</span>`,
    "triple":   `<span class="bump b-triple">${lens(3)}<i class="flash"></i></span>`,
    "plateau3": `<span class="bump b-plateau3">${lens(3)}<i class="flash"></i></span>`,
    "plateau1": `<span class="bump b-plateau1">${lens(1)}<i class="flash"></i></span>`,
    "fold":     `<span class="bump b-fold">${lens(2)}</span>`
  };
  const fold = m.fold ? '<i class="crease"></i>' : "";
  return `<span class="pback ${m.fold ? "is-fold" : ""} ${m.small ? "is-small" : ""} ${extraClass}" style="--finish:${m.color}" aria-hidden="true">${cams[m.cam] || ""}${fold}</span>`;
};
