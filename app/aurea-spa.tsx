"use client";

import { FormEvent, useEffect, useState } from "react";

const treatments = [
  { no: "01", name: "Bespoke Massage", category: "Body", detail: "A deeply restorative full-body massage, tailored to your pressure and focus areas.", time: "60 / 90 min", price: "from £125" },
  { no: "02", name: "Auréa Glow Facial", category: "Skin", detail: "A radiance-restoring facial with enzyme polish, sculpting massage and hydration.", time: "75 min", price: "£155" },
  { no: "03", name: "Botanical Body Ritual", category: "Ritual", detail: "Mineral exfoliation, warm botanical oils and a nourishing full-body wrap.", time: "90 min", price: "£185" },
  { no: "04", name: "Thermal Reset", category: "Wellness", detail: "Private steam, contrast therapy and a calming scalp and foot treatment.", time: "120 min", price: "£220" },
];

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
const Flower = () => <svg className="flower" viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="25" rx="14" ry="24"/><ellipse cx="50" cy="75" rx="14" ry="24"/><ellipse cx="25" cy="50" rx="24" ry="14"/><ellipse cx="75" cy="50" rx="24" ry="14"/><circle cx="50" cy="50" r="9"/></svg>;

export default function AureaSpa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ready = window.setTimeout(() => setLoaded(true), 450);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("is-visible"); });
    }, { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => { window.clearTimeout(ready); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || bookingOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, bookingOpen]);

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <div className={`arrival ${loaded ? "arrival--done" : ""}`} aria-hidden="true"><Flower /><strong>AURÉA</strong><span>Spa & Wellness</span></div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Auréa Spa home"><strong>AURÉA</strong><span>Spa & Wellness</span></a>
        <nav className="desktop-nav" aria-label="Primary navigation"><a href="#treatments">Treatments</a><a href="#about">About</a><a href="#experience">Spa experience</a><a href="#journal">Journal</a></nav>
        <button className="book-link" type="button" onClick={() => setBookingOpen(true)}>Book appointment <Arrow /></button>
        <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}><i/><i/></button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <Flower />
        <nav aria-label="Mobile navigation">
          <a href="#treatments" onClick={() => setMenuOpen(false)}><span>01</span>Treatments</a>
          <a href="#about" onClick={() => setMenuOpen(false)}><span>02</span>About Auréa</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}><span>03</span>Spa experience</a>
          <a href="#journal" onClick={() => setMenuOpen(false)}><span>04</span>Journal</a>
        </nav>
        <button type="button" onClick={() => { setMenuOpen(false); setBookingOpen(true); }}>Book an appointment <Arrow /></button>
        <p>Marylebone, London · Tuesday—Sunday</p>
      </div>

      <main id="top">
        <section className="hero">
          <div className="hero__softness" aria-hidden="true" />
          <div className="hero__copy">
            <p className="eyebrow hero__eyebrow"><span /> Luxury wellness retreat · Bali </p>
            
            <h1>The art of<br/><em>feeling well.</em></h1>
            <p className="hero__intro">Expert massage, bespoke facials and deeply restorative spa rituals—created around you.</p>
            <div className="hero__actions">
              <button className="primary-button" type="button" onClick={() => setBookingOpen(true)}>Book appointment <Arrow /></button>
              <a className="text-link" href="#treatments">Explore treatments <Arrow /></a>
            </div>
          </div>
          <div className="hero__visual">
            <video
              className="hero__image"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/aurea-spa-hero.png"
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src="/videos/aurea-spa-hero.mp4" type="video/mp4" />
            </video>
            <div className="hero__stamp"><Flower /><span>Massage · Facials · Wellness</span></div>
            <div className="hero__note"><b>4.9</b><span>★★★★★<br/>Loved by 500+ guests</span></div>
          </div>
          <a className="hero__scroll" href="#about"><i/> Scroll to unwind</a>
        </section>

        <div className="service-marquee" aria-label="Spa services"><div><span>Massage Therapy</span><Flower/><span>Advanced Facials</span><Flower/><span>Body Rituals</span><Flower/><span>Hydrotherapy</span><Flower/><span>Massage Therapy</span><Flower/><span>Advanced Facials</span></div></div>

        <section className="about" id="about">
          <div className="about__mark reveal" data-reveal><Flower/><span>Est. 2018<br/>Marylebone</span></div>
          <div className="about__copy reveal" data-reveal><p className="eyebrow"><span/> Welcome to Auréa</p><h2>A spa ritual,<br/><em>made personal.</em></h2><p>From the moment you arrive, everything is considered around how you want to feel. Our therapists blend intuitive touch, high-performance skincare and time-honoured wellness practices for results you can see—and calm you can carry home.</p><a className="text-link" href="#experience">Our spa philosophy <Arrow/></a></div>
          <aside className="about__quote reveal" data-reveal><span>“</span><p>Wellness is not one thing. It is the feeling of being beautifully cared for.</p></aside>
        </section>

        <section className="treatments" id="treatments">
          <div className="section-heading reveal" data-reveal><div><p className="eyebrow"><span/> Spa menu</p><h2>Choose your<br/><em>moment.</em></h2></div><p>Unhurried treatments for skin, body and mind. Every appointment includes a personal consultation and quiet time after your ritual.</p></div>
          <div className="treatment-grid">
            {treatments.map((treatment) => (
              <button className="treatment-card reveal" data-reveal type="button" key={treatment.name} onClick={() => setBookingOpen(true)}>
                <span className="treatment-card__number">{treatment.no}</span><span className="treatment-card__category">{treatment.category}</span><Flower/><h3>{treatment.name}</h3><p>{treatment.detail}</p><div><span>{treatment.time}</span><span>{treatment.price}</span><i><Arrow/></i></div>
              </button>
            ))}
          </div>
          <a className="text-link treatments__all" href="#book">View complete spa menu <Arrow/></a>
        </section>

        <section className="treatment-story" id="experience">
          <div className="treatment-story__portrait reveal" data-reveal><div className="vertical-label">Skin ritual · 75 minutes</div></div>
          <div className="treatment-story__content reveal" data-reveal><p className="eyebrow"><span/> Signature facial</p><h2>Glow that begins<br/><em>beneath the skin.</em></h2><p>Our signature facial is more than skincare. After a detailed skin consultation, your therapist layers gentle exfoliation, sculpting massage, botanical actives and restorative hydration for a complexion that feels as renewed as you do.</p><ul><li>Personal skin consultation</li><li>Face, neck and shoulder massage</li><li>LED and cooling therapy</li></ul><button type="button" className="primary-button" onClick={() => setBookingOpen(true)}>Book this facial <Arrow/></button></div>
          <div className="treatment-story__petal" aria-hidden="true"><Flower/></div>
        </section>

        <section className="rituals">
          <div className="rituals__copy reveal" data-reveal><p className="eyebrow"><span/> Our approach</p><h2>Nature, touch<br/>and <em>expertise.</em></h2><p>We choose thoughtful, high-performance formulas and use them with skilled hands. Every detail—from the temperature of the linens to the aroma in the room—is prepared to help you soften.</p><div className="rituals__values"><span><b>01</b>Personalised care</span><span><b>02</b>Conscious formulas</span><span><b>03</b>Expert therapists</span></div></div>
          <div className="rituals__image reveal" data-reveal><div className="rituals__floating">A gentler<br/>way to glow.</div></div>
        </section>

        <section className="reset">
          <div className="reset__orb" aria-hidden="true"><span/><span/><span/></div>
          <div className="reset__content reveal" data-reveal><p className="eyebrow"><span/> The Auréa Reset</p><h2>Three hours.<br/><em>Entirely yours.</em></h2><p>Begin with a botanical body polish, settle into a full-body massage and finish with our hydration facial. Includes herbal tea, a light seasonal plate and access to our relaxation lounge.</p><div className="reset__details"><span>180 minutes</span><span>£345 per guest</span></div><button className="light-button" type="button" onClick={() => setBookingOpen(true)}>Reserve the experience <Arrow/></button></div>
        </section>

        <section className="testimonials" id="journal">
          <p className="eyebrow reveal" data-reveal><span/> Guest reflections</p>
          <div className="testimonials__quote reveal" data-reveal><Flower/><blockquote>“The most thoughtful spa experience I’ve had in London. Every detail felt personal, and I left looking brighter and feeling completely reset.”</blockquote><p>— Amelia R. · Auréa guest</p></div>
          <div className="testimonials__press reveal" data-reveal><span>VOGUE</span><span>Condé Nast Traveller</span><span>THE GLOSSARY</span><span>PORTER</span></div>
        </section>

        <section className="booking" id="book">
          <div className="booking__petals" aria-hidden="true"><Flower/><Flower/></div>
          <div className="booking__content reveal" data-reveal><p className="eyebrow"><span/> Your time begins here</p><h2>Ready to feel<br/><em>restored?</em></h2><p>Book online, or speak with our spa concierge for a personal recommendation.</p><button className="primary-button" type="button" onClick={() => setBookingOpen(true)}>Book an appointment <Arrow/></button></div>
          <div className="booking__details reveal" data-reveal><div><small>Visit us</small><p>14 Beaumont Mews<br/>Marylebone, London W1</p></div><div><small>Opening hours</small><p>Tuesday—Sunday<br/>10:00—20:00</p></div><div><small>Spa concierge</small><p>+44 (0)20 7946 0280<br/>hello@aureaspa.co.uk</p></div></div>
        </section>
      </main>

      <footer><div className="footer__brand"><a className="wordmark" href="#top"><strong>AURÉA</strong><span>Spa & Wellness</span></a><p>Expert care for skin,<br/>body and mind.</p></div><nav><a href="#treatments">Treatments</a><a href="#experience">Spa experience</a><a href="#about">About</a><a href="#book">Contact</a></nav><div className="footer__links"><a href="#book">Instagram</a><a href="#book">Gift cards</a><a href="#book">Membership</a></div><div className="footer__bottom"><span>© 2026 Auréa Spa</span><span>Privacy · Terms</span><span>Marylebone, London</span></div></footer>

      <div className={`booking-panel ${bookingOpen ? "is-open" : ""}`} aria-hidden={!bookingOpen}>
        <button className="booking-panel__backdrop" aria-label="Close booking panel" onClick={() => setBookingOpen(false)}/>
        <aside role="dialog" aria-modal="true" aria-label="Book a spa appointment"><button className="booking-panel__close" type="button" onClick={() => setBookingOpen(false)} aria-label="Close booking panel">×</button>
          {sent ? <div className="booking-success"><Flower/><p className="eyebrow"><span/> Appointment requested</p><h2>Your moment<br/><em>is being held.</em></h2><p>Our spa concierge will contact you shortly to confirm your appointment and tailor the details.</p><button type="button" onClick={() => { setSent(false); setBookingOpen(false); }}>Return to Auréa</button></div> :
          <form onSubmit={submitBooking}><p className="eyebrow"><span/> Spa appointments</p><h2>Book your<br/><em>treatment.</em></h2><p>Choose your preferred treatment and time. We’ll confirm availability personally.</p><label>Name<input required name="name" placeholder="Your full name"/></label><label>Email<input required type="email" name="email" placeholder="you@example.com"/></label><label>Treatment<select required name="treatment" defaultValue=""><option value="" disabled>Select a spa treatment</option>{treatments.map((t) => <option key={t.name}>{t.name}</option>)}<option>The Auréa Reset</option><option>Help me choose</option></select></label><div className="form-row"><label>Preferred date<input required type="date" name="date"/></label><label>Time<select required name="time" defaultValue=""><option value="" disabled>Choose</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label></div><button className="form-submit" type="submit">Request appointment <Arrow/></button><small>No payment is taken. Our concierge will confirm your booking.</small></form>}
        </aside>
      </div>
    </>
  );
}
