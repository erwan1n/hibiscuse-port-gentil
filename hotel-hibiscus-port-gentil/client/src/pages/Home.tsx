import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Star,
  Utensils,
  Users,
  Waves,
  X,
} from "lucide-react";

const heroImage = "/manus-storage/hibiscus-hero_c678aba6.jpg";
const roomImage = "/manus-storage/hibiscus-room_f009741a.jpg";
const diningImage = "/manus-storage/hibiscus-dining_969b81e8.jpg";

const navLinks = [
  ["L'hôtel", "#hotel"],
  ["Chambres", "#chambres"],
  ["Expériences", "#experiences"],
  ["Accès", "#acces"],
];

const rooms = [
  {
    eyebrow: "La parenthèse essentielle",
    title: "Chambre Hibiscus",
    description: "Un refuge lumineux pensé pour se poser, travailler et déconnecter.",
    details: "Lit queen-size · 2 personnes",
    image: roomImage,
  },
  {
    eyebrow: "L'horizon en partage",
    title: "Suite Mandji",
    description: "Plus d'espace, une terrasse ouverte et ce supplément de douceur qui change tout.",
    details: "Suite · 2 à 3 personnes",
    image: heroImage,
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingSent, setBookingSent] = useState(false);

  const scrollToBooking = () => {
    document.getElementById("reservation")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBookingSent(true);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f0e8] text-[#21362f]">
      <div className="bg-[#21362f] px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#f7d1a0] sm:text-xs">
        Ouverture prochaine · Les premières réservations bénéficient d'une attention particulière
      </div>

      <header className="absolute left-0 right-0 top-8 z-30 text-white">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="group flex items-center gap-3" aria-label="Retour à l'accueil">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 font-display text-2xl italic transition-transform duration-300 group-hover:rotate-6">H</span>
            <span className="leading-none">
              <span className="block font-display text-2xl font-semibold tracking-[0.04em]">Hibiscus</span>
              <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-white/70">Port-Gentil</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Navigation principale">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-white/80 transition-colors hover:text-[#f7d1a0]">{label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+24174871111" className="hidden items-center gap-2 rounded-full border border-white/30 px-4 py-2.5 text-xs font-semibold transition-colors hover:border-[#f7d1a0] hover:text-[#f7d1a0] sm:flex">
              <Phone size={14} /> +241 74 87 11 11
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 lg:hidden" aria-label="Ouvrir le menu" aria-expanded={menuOpen}>
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mx-5 rounded-2xl border border-white/20 bg-[#21362f]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-white/10 pb-3 text-sm text-white/85">{label}</a>
              ))}
              <a href="tel:+24174871111" className="flex items-center gap-2 pt-1 text-sm font-semibold text-[#f7d1a0]"><Phone size={15} /> Appeler l'hôtel</a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative min-h-[720px] overflow-hidden bg-[#21362f] text-white sm:min-h-[770px] lg:min-h-[850px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,29,24,0.9)_0%,rgba(14,29,24,0.66)_39%,rgba(14,29,24,0.10)_80%)]" />
          <div className="absolute inset-0 opacity-30 mix-blend-soft-light" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.18'/%3E%3C/svg%3E')" }} />

          <div className="relative mx-auto flex min-h-[720px] max-w-[1320px] items-center px-5 pb-32 pt-36 sm:min-h-[770px] sm:px-8 lg:min-h-[850px] lg:px-12 lg:pb-28">
            <div className="max-w-2xl animate-fade-up">
              <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#f7d1a0]"><span className="h-px w-9 bg-[#f7d1a0]" /> Entre terre & océan</p>
              <h1 className="max-w-2xl font-display text-6xl font-medium leading-[0.91] tracking-[-0.04em] sm:text-8xl lg:text-[112px]">L'escale qui vous ressemble.</h1>
              <p className="mt-8 max-w-md text-base leading-7 text-white/75 sm:text-lg">Un nouvel hôtel à Port-Gentil, imaginé comme une respiration : des chambres chaleureuses, une table généreuse et l'horizon pour voisin.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={scrollToBooking} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#f7d1a0] px-6 py-4 text-sm font-bold text-[#21362f] transition-all duration-200 hover:-translate-y-1 hover:bg-[#ffe2bd] active:scale-[0.98]">Préparer mon séjour <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
                <a href="#hotel" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 px-6 py-4 text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10">Découvrir Hibiscus <ArrowDownRight size={17} /></a>
              </div>
            </div>

            <div className="absolute bottom-36 right-6 hidden max-w-[205px] rotate-2 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md lg:block">
              <div className="mb-3 flex items-center gap-1 text-[#f7d1a0]">{[1, 2, 3, 4, 5].map((item) => <Star key={item} size={13} fill="currentColor" />)}</div>
              <p className="font-display text-xl leading-tight">« Le charme d'une maison où l'on se sent déjà attendu. »</p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">— Esprit Hibiscus</p>
            </div>

            <div className="absolute bottom-8 left-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 sm:left-8 lg:left-12"><span className="h-10 w-px bg-white/40" /> Faites défiler pour explorer</div>
          </div>
        </section>

        <section id="reservation" className="relative z-10 mx-auto -mt-16 max-w-[1180px] px-5 sm:px-8 lg:px-0">
          <form onSubmit={handleBooking} className="grid gap-3 rounded-[24px] bg-white p-3 shadow-[0_18px_70px_rgba(33,54,47,0.16)] sm:grid-cols-2 sm:gap-0 sm:p-2 lg:grid-cols-[1.1fr_1.1fr_0.8fr_auto]">
            <label className="flex items-center gap-3 border-b border-[#e7dfd2] px-4 py-3 sm:border-b-0 sm:border-r"><CalendarDays size={19} className="text-[#c66d4b]" /><span className="flex flex-1 flex-col"><span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7d877f]">Arrivée</span><input type="date" defaultValue="2026-09-24" className="mt-1 bg-transparent text-sm font-semibold text-[#21362f] outline-none" /></span></label>
            <label className="flex items-center gap-3 border-b border-[#e7dfd2] px-4 py-3 sm:border-b-0 lg:border-r"><CalendarDays size={19} className="text-[#c66d4b]" /><span className="flex flex-1 flex-col"><span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7d877f]">Départ</span><input type="date" defaultValue="2026-09-25" className="mt-1 bg-transparent text-sm font-semibold text-[#21362f] outline-none" /></span></label>
            <label className="flex items-center gap-3 px-4 py-3"><Users size={19} className="text-[#c66d4b]" /><span className="flex flex-1 flex-col"><span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#7d877f]">Voyageurs</span><select defaultValue="2" className="mt-1 appearance-none bg-transparent text-sm font-semibold text-[#21362f] outline-none"><option value="1">1 personne</option><option value="2">2 personnes</option><option value="3">3 personnes</option><option value="4">4 personnes</option></select></span><ChevronDown size={16} className="text-[#7d877f]" /></label>
            <button type="submit" className="rounded-[17px] bg-[#c66d4b] px-6 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ad583a] active:scale-[0.98] sm:col-span-2 lg:col-span-1">{bookingSent ? "Demande envoyée" : "Vérifier les disponibilités"}</button>
          </form>
          {bookingSent && <p className="mt-3 text-center text-xs font-semibold text-[#c66d4b]">Merci — notre équipe vous répondra rapidement au +241 74 87 11 11.</p>}
        </section>

        <section id="hotel" className="mx-auto grid max-w-[1320px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-24 lg:px-12 lg:py-36">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -bottom-7 -left-5 h-28 w-28 rounded-full border border-[#c66d4b]/30 sm:-left-10 sm:h-40 sm:w-40" />
            <div className="relative overflow-hidden rounded-[28px] rounded-bl-[92px] shadow-[0_26px_60px_rgba(33,54,47,0.16)]"><img src={roomImage} alt="Chambre lumineuse de l'Hôtel Hibiscus" className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" /></div>
            <div className="absolute -right-3 -bottom-5 rounded-2xl bg-[#e2a06d] px-5 py-4 text-[#21362f] shadow-lg sm:-right-8"><p className="font-display text-3xl leading-none">4,1<span className="ml-1 text-base">/5</span></p><p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em]">28 avis Google</p></div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#c66d4b]">L'esprit Hibiscus</p>
            <h2 className="max-w-xl font-display text-5xl leading-[0.98] tracking-[-0.035em] text-[#21362f] sm:text-7xl">Un nouveau chapitre s'ouvre à Port-Gentil.</h2>
            <div className="mt-8 max-w-lg space-y-5 text-base leading-7 text-[#66736b]"><p>Hibiscus est un hôtel en construction, pensé pour celles et ceux qui aiment voyager avec curiosité, confort et simplicité. Ici, le luxe se reconnaît à la qualité de l'accueil, au calme d'une chambre et au temps retrouvé.</p><p>À quelques minutes de la Rte de Sogec, vous posez vos valises dans un lieu vivant, solaire et profondément gabonais.</p></div>
            <a href="#experiences" className="mt-9 inline-flex items-center gap-3 border-b border-[#21362f] pb-2 text-sm font-bold text-[#21362f] transition-colors hover:border-[#c66d4b] hover:text-[#c66d4b]">Voir ce qui vous attend <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="bg-[#eadfce] px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-[1180px]">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#c66d4b]">Tout est dans le détail</p><h2 className="font-display text-5xl leading-none tracking-[-0.03em] text-[#21362f] sm:text-6xl">L'essentiel, bien fait.</h2></div><p className="max-w-xs text-sm leading-6 text-[#66736b]">Un service attentif, des espaces qui respirent et une parenthèse qui commence dès l'arrivée.</p></div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: Leaf, title: "Une âme locale", text: "Matières naturelles, gestes sincères et clins d'œil à la douceur gabonaise." },
                { icon: Utensils, title: "Une table vivante", text: "Des assiettes généreuses inspirées des produits de la côte et de l'envie du moment." },
                { icon: Waves, title: "Un souffle d'océan", text: "Des espaces ouverts pour ralentir, lire, discuter ou simplement regarder le jour tomber." },
              ].map(({ icon: Icon, title, text }) => <div key={title} className="group rounded-[22px] bg-[#f6f1e8] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(33,54,47,0.1)]"><div className="mb-16 flex h-11 w-11 items-center justify-center rounded-full bg-[#21362f] text-[#f7d1a0] transition-transform duration-300 group-hover:rotate-6"><Icon size={19} /></div><h3 className="font-display text-3xl text-[#21362f]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#66736b]">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section id="chambres" className="mx-auto max-w-[1320px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#c66d4b]">Dormir autrement</p><h2 className="font-display text-5xl leading-none tracking-[-0.03em] text-[#21362f] sm:text-6xl">Votre chambre<br /><span className="italic text-[#c66d4b]">pour horizon.</span></h2></div><a href="#reservation" className="inline-flex items-center gap-2 text-sm font-bold text-[#21362f] underline decoration-[#c66d4b] decoration-2 underline-offset-8">Demander un tarif <ArrowUpRight size={16} /></a></div>
          <div className="grid gap-6 lg:grid-cols-2">
            {rooms.map((room, index) => <article key={room.title} className={`group relative overflow-hidden rounded-[28px] ${index === 1 ? "lg:mt-16" : ""}`}><img src={room.image} alt={room.title} className="aspect-[1.16] w-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#15251f]/90 via-[#15251f]/5 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f7d1a0]">{room.eyebrow}</p><h3 className="font-display text-4xl leading-none">{room.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{room.description}</p><div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4 text-xs font-semibold"><span>{room.details}</span><a href="#reservation" aria-label={`Réserver ${room.title}`} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7d1a0] text-[#21362f] transition-transform duration-200 hover:scale-110"><ArrowUpRight size={16} /></a></div></div></article>)}
          </div>
        </section>

        <section id="experiences" className="bg-[#21362f] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div className="relative overflow-hidden rounded-[28px] rounded-tr-[110px]"><img src={diningImage} alt="Table généreuse avec vue sur l'océan" className="aspect-[4/5] w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#15251f]/50 to-transparent" /><div className="absolute bottom-6 left-6 flex items-center gap-3 text-xs font-semibold text-white/80"><Clock3 size={16} className="text-[#f7d1a0]" /> Le temps de savourer</div></div>
            <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#f7d1a0]">À table, au rythme du soleil</p><h2 className="font-display text-5xl leading-[0.96] tracking-[-0.03em] sm:text-7xl">Des saveurs qui font voyager.</h2><p className="mt-8 max-w-md text-base leading-7 text-white/65">Le matin commence doucement. Le déjeuner s'étire. Le dîner se partage. Chez Hibiscus, la table est un lieu de rencontre, avec des produits de la côte et une cuisine généreuse.</p><div className="mt-10 grid max-w-md grid-cols-2 gap-5 border-t border-white/15 pt-6"><div><p className="font-display text-3xl text-[#f7d1a0]">01</p><p className="mt-1 text-xs text-white/60">une table ouverte</p></div><div><p className="font-display text-3xl text-[#f7d1a0]">∞</p><p className="mt-1 text-xs text-white/60">de souvenirs à créer</p></div></div></div>
          </div>
        </section>

        <section id="acces" className="mx-auto grid max-w-[1320px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24 lg:px-12 lg:py-32">
          <div><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#c66d4b]">Venir nous voir</p><h2 className="font-display text-5xl leading-none tracking-[-0.03em] text-[#21362f] sm:text-6xl">La ville,<br /><span className="italic text-[#c66d4b]">à portée de main.</span></h2><p className="mt-7 max-w-sm text-base leading-7 text-[#66736b]">Retrouvez-nous sur la Rte de Sogec, Port-Gentil. Notre équipe vous accompagne pour préparer votre arrivée.</p><div className="mt-8 space-y-4 text-sm"><div className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-[#c66d4b]" /><span>Rte de Sogec<br />Port-Gentil, Gabon</span></div><div className="flex items-center gap-3"><Phone size={18} className="text-[#c66d4b]" /><a href="tel:+24174871111" className="font-semibold hover:text-[#c66d4b]">+241 74 87 11 11</a></div></div><div className="mt-8 flex flex-wrap gap-3"><a href="https://www.google.com/maps/search/?api=1&query=Hotel+Hibiscus+Port-Gentil+Gabon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#21362f] px-5 py-3 text-xs font-bold text-white transition-all hover:bg-[#c66d4b]"><Compass size={15} /> Ouvrir dans Maps</a><a href="https://wa.me/24174871111?text=Bonjour%20Hôtel%20Hibiscus%2C%20je%20souhaite%20préparer%20un%20séjour." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#21362f]/20 px-5 py-3 text-xs font-bold text-[#21362f] transition-all hover:border-[#c66d4b] hover:text-[#c66d4b]"><MessageCircle size={15} /> WhatsApp</a></div></div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] bg-[#e7dfd2] p-4 sm:min-h-[430px]"><div className="relative flex h-full min-h-[328px] items-center justify-center overflow-hidden rounded-[20px] bg-[#d7cdbd]" style={{ backgroundImage: "radial-gradient(circle at 25% 20%, rgba(255,255,255,.65) 0 1px, transparent 1px), linear-gradient(135deg, #d8cdbb 0%, #c6baa6 100%)", backgroundSize: "22px 22px, 100% 100%" }}><div className="absolute left-[29%] top-[27%] h-[2px] w-[50%] rotate-[24deg] bg-[#9b8d7a]/70" /><div className="absolute left-[17%] top-[46%] h-[2px] w-[73%] -rotate-[13deg] bg-[#9b8d7a]/60" /><div className="absolute left-[42%] top-[15%] h-[58%] w-[2px] rotate-[29deg] bg-[#9b8d7a]/50" /><div className="relative flex flex-col items-center"><div className="flex h-14 w-14 animate-pulse items-center justify-center rounded-full bg-[#c66d4b] text-white shadow-[0_0_0_12px_rgba(198,109,75,0.2)]"><MapPin size={24} fill="currentColor" /></div><div className="mt-4 rounded-lg bg-[#21362f] px-4 py-2 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg">Hôtel Hibiscus<br /><span className="font-normal tracking-normal text-white/60">Rte de Sogec</span></div></div><div className="absolute bottom-4 left-4 rounded-full bg-white/65 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.17em] text-[#66736b]">Port-Gentil · Gabon</div></div></div>
        </section>

        <section className="bg-[#e2a06d] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto flex max-w-[1180px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-end"><div><p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#21362f]/65">Le prochain souvenir commence ici</p><h2 className="max-w-2xl font-display text-5xl leading-[0.95] tracking-[-0.03em] text-[#21362f] sm:text-7xl">On garde une chambre<br /><span className="italic">pour vous ?</span></h2></div><button onClick={scrollToBooking} className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#21362f] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#304b41]">Préparer mon séjour <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div></section>
      </main>

      <footer className="bg-[#15251f] px-5 py-12 text-white sm:px-8 lg:px-12"><div className="mx-auto max-w-[1180px]"><div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 sm:flex-row"><div><a href="#top" className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 font-display text-xl italic">H</span><span><span className="block font-display text-2xl">Hibiscus</span><span className="block text-[8px] font-bold uppercase tracking-[0.25em] text-white/50">Port-Gentil</span></span></a><p className="mt-5 max-w-xs text-sm leading-6 text-white/50">Une nouvelle adresse hôtelière, chaleureuse et solaire, en construction à Port-Gentil.</p></div><div className="flex gap-12 text-sm"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f7d1a0]">Explorer</p><div className="flex flex-col gap-3 text-white/60"><a href="#hotel" className="hover:text-white">L'hôtel</a><a href="#chambres" className="hover:text-white">Chambres</a><a href="#experiences" className="hover:text-white">Expériences</a></div></div><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f7d1a0]">Contact</p><div className="flex flex-col gap-3 text-white/60"><a href="tel:+24174871111" className="hover:text-white">+241 74 87 11 11</a><a href="mailto:bonjour@hotelhibiscus.ga" className="hover:text-white">bonjour@hotelhibiscus.ga</a><span>Rte de Sogec, Gabon</span></div></div></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-white/35 sm:flex-row"><span>© 2026 Hôtel Hibiscus Port-Gentil</span><span>Fait avec soin au Gabon</span></div></div></footer>
    </div>
  );
}
