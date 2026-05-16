import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export function BlogPost() {
  const { slug } = useParams();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </Link>

          <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-sm font-medium text-accent mb-6">
            Digital Marketing
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            How to Maximize Meta Ads ROI in 2026
          </h1>

          <div className="flex items-center justify-between border-t border-b border-border py-6">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full" />
                <div>
                  <p className="font-semibold">Arjun Patel</p>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>May 1, 2026</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </span>
              </div>
            </div>
            <button className="p-3 rounded-xl hover:bg-muted transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="h-96 bg-gradient-to-br from-accent/20 via-muted to-accent/10 rounded-2xl border border-border" />
        </div>
      </section>

      {/* Content */}
      <article className="py-12 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Meta's advertising platform has evolved significantly in 2026,
              bringing new opportunities and challenges for marketers. Here's
              how to stay ahead and maximize your return on ad spend.
            </p>

            <h2 className="text-3xl font-display font-bold mt-12 mb-6">
              Understanding the New Algorithm
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The latest algorithm update prioritizes engagement quality over
              quantity. This means your creative strategy needs to shift from
              pure reach to meaningful interactions. Focus on content that
              sparks genuine conversations and provides real value to your
              audience.
            </p>

            <h2 className="text-3xl font-display font-bold mt-12 mb-6">
              1. Creative Testing Framework
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The most successful campaigns in 2026 follow a systematic testing
              approach. Start with at least 3-5 creative variations per
              campaign, testing different:
            </p>
            <ul className="space-y-3 mb-8 ml-6">
              <li className="text-muted-foreground">
                Hook styles (question vs statement vs story)
              </li>
              <li className="text-muted-foreground">
                Visual formats (carousel vs video vs static)
              </li>
              <li className="text-muted-foreground">
                CTA positioning and messaging
              </li>
              <li className="text-muted-foreground">
                Social proof elements
              </li>
            </ul>

            <h2 className="text-3xl font-display font-bold mt-12 mb-6">
              2. Advanced Audience Strategies
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Broad targeting has become more effective with Meta's improved AI,
              but you still need strategic layering. Combine broad audiences
              with Advantage+ creative for best results, and use customer lists
              for high-intent remarketing.
            </p>

            <div className="p-8 bg-accent/5 border-l-4 border-accent rounded-xl my-12">
              <p className="text-lg italic">
                "We've seen our clients achieve 40% higher ROAS by shifting to
                broader targeting combined with creative excellence, rather than
                narrow audience constraints."
              </p>
            </div>

            <h2 className="text-3xl font-display font-bold mt-12 mb-6">
              3. Measurement & Attribution
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With privacy changes continuing to evolve, a multi-touch
              attribution model is essential. Don't rely solely on Meta's
              reporting—use server-side tracking, implement proper UTM
              parameters, and maintain a comprehensive analytics dashboard that
              tracks the full customer journey.
            </p>

            <h2 className="text-3xl font-display font-bold mt-12 mb-6">
              Key Takeaways
            </h2>
            <ul className="space-y-3 mb-8 ml-6">
              <li className="text-muted-foreground">
                Focus on creative excellence over audience complexity
              </li>
              <li className="text-muted-foreground">
                Test systematically and iterate quickly
              </li>
              <li className="text-muted-foreground">
                Implement robust tracking beyond platform metrics
              </li>
              <li className="text-muted-foreground">
                Embrace automation while maintaining strategic oversight
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mt-8">
              The landscape of Meta advertising is constantly evolving, but
              these fundamentals will help you stay competitive and drive
              consistent results in 2026 and beyond.
            </p>
          </div>
        </div>
      </article>

      {/* Share */}
      <section className="py-12 px-6 lg:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-display font-semibold mb-6">Share this article</h3>
          <div className="flex items-center space-x-4">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Facebook, label: "Facebook" },
            ].map((social, i) => (
              <button
                key={i}
                className="flex items-center space-x-2 px-6 py-3 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
              >
                <social.icon className="w-5 h-5" />
                <span className="font-medium">{social.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Link key={i} to="/blog/post" className="group">
                <div className="h-48 bg-gradient-to-br from-accent/10 via-muted to-accent/5 rounded-2xl border border-border group-hover:border-accent/30 transition-all mb-6" />
                <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent mb-3">
                  Digital Marketing
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-accent transition-colors">
                  Related Article Title {i}
                </h3>
                <p className="text-sm text-muted-foreground">8 min read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
