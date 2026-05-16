import { Link } from "react-router";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Digital Marketing",
  "App Development",
  "Branding",
  "Analytics",
  "Growth",
];

const posts = [
  {
    slug: "meta-ads-roi-2026",
    title: "How to Maximize Meta Ads ROI in 2026",
    excerpt:
      "Advanced strategies for optimizing your Meta advertising campaigns in the new algorithm landscape",
    category: "Digital Marketing",
    author: "Arjun Patel",
    date: "2026-05-01",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs React Native: A 2026 Comparison",
    excerpt:
      "Complete breakdown of both frameworks to help you choose the right one for your mobile app",
    category: "App Development",
    author: "Meera Krishnan",
    date: "2026-04-28",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "brand-identity-essentials",
    title: "Essential Elements of Premium Brand Identity",
    excerpt:
      "What makes a brand memorable? Explore the key components of luxury brand design",
    category: "Branding",
    author: "Vikram Shah",
    date: "2026-04-25",
    readTime: "6 min read",
    featured: false,
  },
  {
    slug: "ga4-conversion-tracking",
    title: "Mastering GA4 Conversion Tracking",
    excerpt:
      "Step-by-step guide to setting up effective conversion tracking in Google Analytics 4",
    category: "Analytics",
    author: "Arjun Patel",
    date: "2026-04-20",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "ecommerce-growth-tactics",
    title: "10 E-commerce Growth Tactics That Work",
    excerpt:
      "Proven strategies to increase revenue and customer lifetime value for online stores",
    category: "Growth",
    author: "Arjun Patel",
    date: "2026-04-15",
    readTime: "7 min read",
    featured: false,
  },
  {
    slug: "marketplace-seo-guide",
    title: "The Complete Guide to Amazon & Flipkart SEO",
    excerpt:
      "How to optimize your product listings for maximum visibility and sales on marketplaces",
    category: "Digital Marketing",
    author: "Meera Krishnan",
    date: "2026-04-10",
    readTime: "9 min read",
    featured: false,
  },
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((p) => p.category === selectedCategory);

  const featuredPosts = posts.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Expert perspectives on digital marketing, development, and growth
            strategies
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && (
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-8">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h2 className="text-2xl font-display font-bold">Featured</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="h-64 bg-gradient-to-br from-accent/20 via-muted to-accent/10 rounded-2xl border border-border group-hover:border-accent/30 transition-all mb-6" />
                  <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>{post.author}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-accent/20"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
                <div className="h-48 bg-gradient-to-br from-accent/10 via-muted to-accent/5 rounded-2xl border border-border group-hover:border-accent/30 transition-all mb-6" />
                <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Get the latest insights delivered to your inbox every week
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:bg-primary-foreground/90 transition-all hover:shadow-2xl flex items-center justify-center space-x-2">
              <span>Subscribe</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
