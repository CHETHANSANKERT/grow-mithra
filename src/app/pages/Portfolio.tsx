import { Link } from "react-router";
import { useState } from "react";
import { ArrowRight, Filter } from "lucide-react";

const categories = ["All", "Ads", "Development", "E-commerce", "Branding"];

const projects = [
  {
    slug: "fashion-ecommerce-scale",
    title: "Fashion E-commerce Scale",
    client: "Luxury Fashion Brand",
    category: "E-commerce",
    metric: "200% Revenue Growth",
    description:
      "Complete e-commerce rebuild with Meta advertising campaigns that drove 2x revenue growth in 6 months",
    image: "gradient-1",
  },
  {
    slug: "fintech-app-launch",
    title: "Fintech App Launch",
    client: "Banking Tech Startup",
    category: "Development",
    metric: "10K+ Downloads",
    description:
      "Flutter app development with seamless UX that achieved 10K downloads in first 3 months",
    image: "gradient-2",
  },
  {
    slug: "marketplace-domination",
    title: "Marketplace Domination",
    client: "Consumer Electronics Brand",
    category: "Ads",
    metric: "350% Sales Increase",
    description:
      "Amazon & Flipkart advertising strategy that tripled marketplace sales",
    image: "gradient-3",
  },
  {
    slug: "wellness-brand-identity",
    title: "Wellness Brand Identity",
    client: "Ayurvedic Wellness Startup",
    category: "Branding",
    metric: "Premium Positioning",
    description:
      "Complete brand strategy and visual identity for luxury wellness brand",
    image: "gradient-4",
  },
  {
    slug: "restaurant-digital-presence",
    title: "Restaurant Digital Growth",
    client: "Fine Dining Chain",
    category: "Ads",
    metric: "5x Online Orders",
    description:
      "Instagram advertising and digital menu platform that quintupled online orders",
    image: "gradient-5",
  },
  {
    slug: "saas-product-website",
    title: "SaaS Product Website",
    client: "B2B Software Company",
    category: "Development",
    metric: "250% Lead Gen",
    description:
      "High-converting website design that increased qualified leads by 250%",
    image: "gradient-6",
  },
];

const gradients = {
  "gradient-1": "from-accent/20 via-purple-500/10 to-accent/10",
  "gradient-2": "from-blue-500/20 via-accent/10 to-teal-500/10",
  "gradient-3": "from-orange-500/20 via-accent/10 to-red-500/10",
  "gradient-4": "from-green-500/20 via-accent/10 to-emerald-500/10",
  "gradient-5": "from-pink-500/20 via-accent/10 to-rose-500/10",
  "gradient-6": "from-indigo-500/20 via-accent/10 to-violet-500/10",
};

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Projects that deliver measurable results and exceptional experiences
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium">Filter by Category</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "project" : "projects"}
            </span>
          </div>
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

      {/* Projects Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/portfolio/${project.slug}`}
                className="group"
              >
                <div
                  className={`h-80 bg-gradient-to-br ${
                    gradients[project.image as keyof typeof gradients]
                  } rounded-2xl border border-border group-hover:border-accent/30 transition-all overflow-hidden relative mb-6`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {project.metric}
                    </h3>
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.client}
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Ready to see similar results for your brand?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-foreground text-primary rounded-xl font-semibold hover:bg-primary-foreground/90 transition-all hover:shadow-2xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
