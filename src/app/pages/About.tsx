import { Link } from "react-router";
import {
  ArrowRight,
  Award,
  Heart,
  Linkedin,
  Mail,
  Target,
  Twitter,
  Users,
} from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Building Digital Excellence from Bengaluru
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A founder-led agency combining creative vision with data-driven
              strategy to deliver exceptional results
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded in 2022 by digital marketing and development veterans,
              Grow Mithra was born from a simple observation: most agencies
              either excel at creative or analytics, but rarely both.
            </p>
            <p>
              We set out to build a different kind of agency—one that combines
              premium design sensibility with rigorous data science. An agency
              that treats every project as a partnership, not a transaction.
            </p>
            <p>
              Today, we work with ambitious brands across India, helping them
              scale through strategic digital marketing, beautiful product
              development, and conversion-optimized web experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description:
                  "Premium quality in every pixel, line of code, and campaign",
              },
              {
                icon: Target,
                title: "Results-Driven",
                description:
                  "ROI and measurable outcomes guide everything we do",
              },
              {
                icon: Users,
                title: "Partnership",
                description:
                  "Your success is our success. We're in this together",
              },
              {
                icon: Heart,
                title: "Craft",
                description: "We love what we do, and it shows in our work",
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Chethan Sanker",
                role: "Co-Founder & Full Stack Developer",
                bio:
                  "Full stack developer focused on scalable web platforms, modern UI systems, and high-performance backend architecture using React, Flutter, Go, and cloud-native technologies.",
                expertise: [
                  "Full Stack Development",
                  "Backend Architecture",
                  "React & Flutter Development",
                  "System Design",
                ],
                social: {
                  linkedin: "https://www.linkedin.com/in/chethan-sanker-t/",
                  github: "https://chethansankert.github.io/",
                  email: "chethansankert@gmail.com",
                },
              },
              {
                name: "Abhishek G",
                role: "App & Web Lead",
                bio:
                  "Android Automotive Developer focused on building scalable apps, modern websites, and backend systems. Passionate about creating fast, reliable digital products with clean design, smooth user experiences, and practical AI integration.",
                expertise: [
                  "Android",
                  "Backend Development",
                  "AI Integration",
                  "Web Development",
                  "UI/UX Design",
                ],
                social: {
                  linkedin: "linkedin.com/in/abhishek-g-529b9a222",
                  github: "#",
                  email: "#",
                },
              },
              {
                name: "Vikram Shah",
                role: "Creative Director",
                bio:
                  "Award-winning designer with background in luxury brand identities and editorial design.",
                expertise: ["Brand Strategy", "Visual Design", "UX"],
                social: {
                  linkedin: "#",
                  twitter: "#",
                  email: "vikram@vanguard.digital",
                },
              },
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="h-80 bg-gradient-to-br from-accent/20 via-muted to-accent/10 rounded-2xl border border-border group-hover:border-accent/30 transition-all mb-6" />
                <h3 className="font-display font-semibold text-2xl mb-1">
                  {member.name}
                </h3>
                <p className="text-accent font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-muted rounded-lg text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12 text-center">
            Certifications & Partnerships
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Meta Business Partner",
              "Google Partner",
              "Shopify Partner",
              "AWS Certified",
            ].map((cert, i) => (
              <div
                key={i}
                className="p-6 bg-card rounded-xl border border-border text-center"
              >
                <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Ready to build something exceptional?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-accent/30"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
