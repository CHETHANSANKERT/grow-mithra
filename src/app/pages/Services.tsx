import { Link } from "react-router";
import {
  Target,
  TrendingUp,
  Smartphone,
  ShoppingCart,
  Briefcase,
  PenTool,
  BarChart3,
  Lightbulb,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    slug: "meta-instagram-ads",
    icon: Target,
    title: "Meta & Instagram Ads",
    tagline: "Performance marketing that converts",
    description:
      "Data-driven campaigns optimized for ROI with advanced targeting, creative testing, and continuous optimization.",
    features: [
      "Advanced audience targeting",
      "Creative A/B testing",
      "Conversion tracking & attribution",
      "Monthly performance reports",
    ],
    pricing: "Starting at ₹10,000/month",
    roi: "Average 3x ROAS",
  },
  {
    slug: "marketplace-ads",
    icon: TrendingUp,
    title: "Amazon & Flipkart Ads",
    tagline: "Dominate marketplace search",
    description:
      "Strategic marketplace advertising to increase visibility, drive sales, and build your brand.",
    features: [
      "Sponsored products optimization",
      "Brand store setup",
      "Keyword research & bidding",
      "Competitor analysis",
    ],
    pricing: "Starting at ₹12,000/month",
    roi: "Average 200% sales increase",
  },
  {
    slug: "flutter-development",
    icon: Smartphone,
    title: "Flutter App Development",
    tagline: "Beautiful cross-platform apps",
    description:
      "Modern Flutter applications for Android and iOS with scalable architecture and premium UI.",
    features: [
      "Single codebase for iOS & Android",
      "Custom UI/UX",
      "Backend integration",
      "App deployment support",
    ],
    pricing: "Starting at ₹30,000",
    roi: "Fast MVP delivery",
  },
  {
    slug: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Websites",
    tagline: "Conversion-focused online stores",
    description:
      "Professional e-commerce websites with payment integration, responsive UI, and optimized performance.",
    features: [
      "Custom design & development",
      "Payment gateway integration",
      "Inventory management",
      "SEO optimization",
    ],
    pricing: "Starting at ₹25,000",
    roi: "Higher online conversions",
  },
  {
    slug: "portfolio-websites",
    icon: Briefcase,
    title: "Portfolio Websites",
    tagline: "Premium personal & business presence",
    description:
      "Modern portfolio websites designed to attract clients and showcase your work professionally.",
    features: [
      "Responsive design",
      "CMS integration",
      "Fast performance",
      "SEO optimization",
    ],
    pricing: "Starting at ₹10,000",
    roi: "1-week delivery",
  },
  {
    slug: "branding",
    icon: PenTool,
    title: "Branding & Design",
    tagline: "Build a memorable identity",
    description:
      "Professional branding solutions including logos, social creatives, and brand identity systems.",
    features: [
      "Brand strategy",
      "Logo design",
      "Brand guidelines",
      "Marketing creatives",
    ],
    pricing: "Starting at ₹15,000",
    roi: "Complete starter branding",
  },
  {
    slug: "analytics",
    icon: BarChart3,
    title: "Analytics & Tracking",
    tagline: "Track every important metric",
    description:
      "Analytics and tracking setup to help you understand user behavior and improve conversions.",
    features: [
      "GA4 setup",
      "Conversion tracking",
      "Custom dashboards",
      "Performance insights",
    ],
    pricing: "Starting at ₹10,000",
    roi: "One-time setup",
  },
  {
    slug: "growth-consulting",
    icon: Lightbulb,
    title: "Growth Consulting",
    tagline: "Scale with strategy",
    description:
      "Growth consulting focused on improving acquisition, conversion, and retention.",
    features: [
      "Growth roadmap",
      "Marketing strategy",
      "Funnel optimization",
      "Business reviews",
    ],
    pricing: "Starting at ₹15,000/month",
    roi: "Minimum 2-month engagement",
  },
];

export function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Premium Digital Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end solutions designed to accelerate your digital growth and
            deliver measurable results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group p-10 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all hover:shadow-2xl hover:shadow-accent/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground mb-1">
                      {service.pricing}
                    </div>
                    <div className="text-sm font-semibold text-accent">
                      {service.roi}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-4">
                  {service.tagline}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all group-hover:shadow-lg group-hover:shadow-accent/20"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven framework for delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Deep dive into your business, goals, and target audience",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Develop a comprehensive plan aligned with your objectives",
              },
              {
                step: "03",
                title: "Execution",
                description:
                  "Implement with precision, creativity, and attention to detail",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Continuously analyze, test, and improve for maximum impact",
              },
            ].map((phase, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl font-display font-bold text-accent/20 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">{phase.description}</p>
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
            Let's discuss which services are right for your business
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
