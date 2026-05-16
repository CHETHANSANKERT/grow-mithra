import { Link, useParams } from "react-router";
import { ArrowLeft, Calendar, TrendingUp, Target, Users } from "lucide-react";

export function CaseStudy() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-sm font-medium text-accent mb-6">
            E-commerce + Ads
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Fashion E-commerce Scale
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            How we helped a luxury fashion brand achieve 400% revenue growth in
            6 months
          </p>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Calendar className="w-5 h-5" />
              <span>6-month engagement</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Target className="w-5 h-5" />
              <span>E-commerce + Meta Ads</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="h-96 bg-gradient-to-br from-accent/20 via-purple-500/10 to-accent/10 rounded-2xl border border-border" />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">
            Project Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A premium fashion brand approached us with stagnating online sales
            and an outdated e-commerce platform. They needed a complete digital
            transformation to compete with established players.
          </p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">
            The Challenge
          </h2>
          <ul className="space-y-4 text-lg text-muted-foreground">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
              <span>
                Conversion rate below 1% due to poor UX and slow loading times
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
              <span>
                High cart abandonment rate (78%) with no recovery strategy
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0" />
              <span>
                Limited digital marketing presence and low brand awareness
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10">
            Our Strategy
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Website Rebuild",
                description:
                  "Complete platform overhaul with focus on speed, mobile experience, and conversion optimization",
              },
              {
                title: "Meta Advertising",
                description:
                  "Strategic campaigns targeting fashion-conscious audience with dynamic product ads",
              },
              {
                title: "Conversion Optimization",
                description:
                  "Implemented abandoned cart recovery, one-click checkout, and personalized recommendations",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <h3 className="font-display font-semibold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-transparent to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            The Results
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { metric: "400%", label: "Revenue Growth" },
              { metric: "4.2%", label: "Conversion Rate" },
              { metric: "5.8x", label: "Return on Ad Spend" },
            ].map((result, i) => (
              <div
                key={i}
                className="p-8 bg-card rounded-2xl border border-border text-center"
              >
                <div className="text-5xl font-display font-bold bg-gradient-to-r from-accent to-[--gold-dark] bg-clip-text text-transparent mb-3">
                  {result.metric}
                </div>
                <div className="text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Shopify Plus",
              "React",
              "Meta Pixel",
              "Google Analytics",
              "Klaviyo",
            ].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-muted rounded-lg text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 bg-card rounded-2xl border border-accent/20">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-accent text-2xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-xl leading-relaxed mb-6">
              "Grow Mithra completely transformed our online business. The
              results exceeded all our expectations, and their team's expertise
              in both design and performance marketing is unmatched."
            </p>
            <div>
              <p className="font-display font-semibold text-lg">
                Priya Sharma
              </p>
              <p className="text-muted-foreground">
                Founder, Luxury Fashion Brand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss how we can help scale your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-accent/30"
          >
            <span>Book a Free Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
