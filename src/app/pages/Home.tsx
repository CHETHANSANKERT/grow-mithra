import { Link } from "react-router";
import {
  ArrowRight,
  Award,
  Clock,
  MessageCircle,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const rotatingWords = [
    "Exceptional",
    "Premium",
    "Scalable",
    "Innovative",
    "Strategic",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">
                  Bengaluru's Premier Digital Growth Agency
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Build{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-accent via-[--gold-light] to-accent bg-clip-text text-transparent">
                  {rotatingWords[currentWord]}
                </span>
              </span>
              <br />
              Digital Experiences
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We craft premium digital solutions that drive growth. From
              high-converting ad campaigns to beautiful Flutter apps and
              world-class websites.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                to="/contact"
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-accent/30 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 bg-muted text-foreground rounded-xl font-semibold hover:bg-muted/80 transition-all"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>

          {/* Metrics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { value: "12+", label: "Projects Delivered" },
              { value: "₹2L+", label: "Ad Spend Managed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "2.4x", label: "Avg ROI Increase" },
            ].map((metric, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-accent to-[--gold-dark] bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      {
        /* <section className="py-16 px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-12 uppercase tracking-wider">
            Trusted by Leading Brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-16 bg-background rounded-xl border border-border flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className="font-display font-bold text-xl text-muted-foreground">
                  BRAND
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */
      }

      {/* Featured Services */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Premium Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              End-to-end digital solutions designed to accelerate your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Meta & Instagram Ads",
                description:
                  "High-ROI performance campaigns with advanced targeting and creative optimization",
                href: "/services/meta-instagram-ads",
              },
              {
                icon: TrendingUp,
                title: "Amazon & Flipkart Ads",
                description:
                  "Marketplace advertising that drives sales and builds brand presence",
                href: "/services/marketplace-ads",
              },
              {
                icon: Zap,
                title: "Flutter App Development",
                description:
                  "Beautiful, high-performance mobile apps for iOS and Android",
                href: "/services/flutter-development",
              },
              {
                icon: Users,
                title: "E-commerce Websites",
                description:
                  "Conversion-optimized online stores with seamless user experiences",
                href: "/services/ecommerce",
              },
              {
                icon: Award,
                title: "Branding & Design",
                description:
                  "Premium brand identities that stand out and resonate with your audience",
                href: "/services/branding",
              },
              {
                icon: Clock,
                title: "Growth Consulting",
                description:
                  "Strategic guidance and analytics to maximize your digital potential",
                href: "/services/growth-consulting",
              },
            ].map((service, i) => (
              <Link
                key={i}
                to={service.href}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Featured Work
              </h2>
              <p className="text-xl text-muted-foreground">
                Projects that deliver measurable results
              </p>
            </div>
            <Link
              to="/portfolio"
              className="hidden md:flex items-center space-x-2 text-accent font-semibold hover:translate-x-1 transition-transform"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Fashion E-commerce Scale",
                client: "Luxury Fashion Brand",
                metric: "400% Revenue Growth",
                category: "E-commerce + Ads",
              },
              {
                title: "Fintech App Launch",
                client: "Banking Tech Startup",
                metric: "12K+ Downloads",
                category: "Flutter Development",
              },
            ].map((project, i) => (
              <Link
                key={i}
                to="/portfolio"
                className="group relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 via-muted to-accent/5 border border-border hover:border-accent/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="relative h-full p-8 flex flex-col justify-end">
                  <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent mb-4 w-fit">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{project.client}</p>
                  <p className="text-xl font-semibold text-accent">
                    {project.metric}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from brands we've helped grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "We were struggling to get consistent leads from Instagram ads. Within 2 months, Grow Mithra helped us reduce our cost per lead and improve conversions significantly. The reporting and communication were also very transparent.",
                author: "Priya Sharma",
                role: "Founder, D2C Fashion Brand",
                rating: 4,
              },
              {
                quote:
                  "The app development experience was smooth from start to finish. The UI felt modern, performance was stable even on lower-end devices, and our customer engagement improved noticeably after launch.",
                author: "Rahul Verma",
                role: "Co-Founder, Fintech Startup",
                rating: 5,
              },
              {
                quote:
                  "What stood out was their understanding of both branding and performance marketing. The creatives looked premium, and the campaigns were optimized based on actual business goals rather than vanity metrics.",
                author: "Anjali Menon",
                role: "Marketing Manager, E-commerce Brand",
                rating: 4,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 bg-card rounded-2xl border border-border"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Let's discuss how we can accelerate your digital growth
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:bg-primary-foreground/90 transition-all hover:shadow-2xl"
            >
              Book a Free Consultation
            </Link>
            <a
              href="https://wa.me/919513412767"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-primary-foreground border-2 border-primary-foreground/30 rounded-xl font-semibold hover:bg-primary-foreground/10 transition-all flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919513412767"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-accent hover:bg-[--gold-dark] text-primary rounded-full flex items-center justify-center shadow-2xl hover:shadow-accent/50 transition-all hover:scale-110 z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
