import { Navbar } from "./components/layout/navbar";
import { Footer } from "./components/layout/footer";
import { Hero } from "./sections/Hero";
import { WhyZypher } from "./sections/WhyZypher";
import { CoreFeatures } from "./sections/CoreFeatures";
import { Privacy } from "./sections/Privacy";
import { HowItWorks } from "./sections/HowItWorks";
import { CardOptions } from "./sections/CardOptions";
import { FAQ } from "./sections/FAQ";
import { CTA } from "./sections/CTA";
import { ContactUs } from "./sections/ContactUs";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/30">
      <Navbar />
      <main className="flex flex-col">
        <section id="hero">
          <Hero />
        </section>

        <section id="why">
          <WhyZypher />
        </section>

        <section id="features">
          <CoreFeatures />
        </section>

        <section id="privacy">
          <Privacy />
        </section>

        <section id="how-it-works">
          <HowItWorks />
        </section>

        <section id="card-options">
          <CardOptions />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="cta">
          <CTA />
        </section>

        <section id="contact">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
