import { Link, useParams } from "react-router";
import { ArrowLeft, Check, ArrowRight, Target } from "lucide-react";

export function ServiceDetail() {
  const { slug } = useParams();

  const serviceData = {
    "meta-instagram-ads": {
      title: "Meta & Instagram Ads",
      tagline: "Performance Marketing That Converts",
      overview:
        "Drive qualified traffic and conversions with data-driven Meta and Instagram advertising campaigns. We combine creative excellence with analytical rigor to deliver exceptional ROI.",
      workflow: [
        "Campaign strategy & goal setting",
        "Audience research & targeting setup",
        "Creative development & ad copy",
        "Campaign launch & monitoring",
        "A/B testing & optimization",
        "Performance reporting & analysis",
      ],
      tools: [
        "Meta Ads Manager",
        "Facebook Pixel",
        "Google Analytics",
        "Custom dashboards",
      ],
      deliverables: [
        "Campaign strategy document",
        "Ad creative (3-5 variations)",
        "Targeting setup",
        "Conversion tracking implementation",
        "Monthly performance reports",
        "Optimization recommendations",
      ],
      pricing: "₹25,000 - ₹1,00,000/month based on ad spend",
      timeline: "2 weeks setup + ongoing optimization",
      roi: "Average 4.2x ROAS across all clients",
      faqs: [
        {
          q: "What ad spend should I start with?",
          a: "We recommend starting with at least ₹30,000/month for testing. This allows us to gather meaningful data and optimize effectively.",
        },
        {
          q: "How long before I see results?",
          a: "Initial results typically appear within 2-3 weeks. Full optimization and consistent ROI usually achieved within 2-3 months.",
        },
      ],
    },
    // Add more service details as needed
  };

  const service =
    serviceData[slug as keyof typeof serviceData] ||
    serviceData["meta-instagram-ads"];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-2xl text-muted-foreground mb-8">
            {service.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-accent/10 rounded-lg">
              <span className="text-sm font-medium">
                Starting at {service.pricing.split(" ")[0]}
              </span>
            </div>
            <div className="px-4 py-2 bg-accent/10 rounded-lg">
              <span className="text-sm font-medium">{service.timeline}</span>
            </div>
            <div className="px-4 py-2 bg-accent/10 rounded-lg">
              <span className="text-sm font-medium">{service.roi}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10">
            Our Workflow
          </h2>
          <div className="space-y-4">
            {service.workflow.map((step, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Deliverables */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              Tools & Platforms
            </h2>
            <ul className="space-y-3">
              {service.tools.map((tool, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-display font-bold mb-6">
              Deliverables
            </h2>
            <ul className="space-y-3">
              {service.deliverables.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-display font-semibold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let's discuss how this service can help grow your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-accent/30"
          >
            <span>Book a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
