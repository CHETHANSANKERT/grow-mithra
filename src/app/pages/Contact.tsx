import { useState } from "react";
import {
  Calendar,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Upload,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mqenrnvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });

        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-accent/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Let's Start a Conversation
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Tell us about your project and let's explore how we can help you
            achieve your goals
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: MessageCircle,
                title: "WhatsApp",
                detail: "+91 9513412767",
                action: "Message Us",
                href: "https://wa.me/919513412767",
              },
              {
                icon: Mail,
                title: "Email",
                detail: "growmithra@gmail.com",
                action: "Send Email",
                href: "mailto:growmithra@gmail.com",
              },
              {
                icon: Calendar,
                title: "Schedule Call",
                detail: "Book a free consultation",
                action: "Choose Time",
                href: "#",
              },
            ].map((method, i) => (
              <a
                key={i}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/10 text-center group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <method.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4">{method.detail}</p>
                <span className="text-accent font-medium">{method.action}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-20 px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">
                Send us a Message
              </h2>

              {isSuccess
                ? (
                  <div className="p-8 bg-accent/10 border border-accent/30 rounded-2xl text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      We'll get back to you within 24 hours
                    </p>
                  </div>
                )
                : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                          placeholder="+91 95134 12767"
                        />
                      </div>
                      <div>
                        <label className="block mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2">
                        Service Interested In *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="meta-ads">Meta & Instagram Ads</option>
                        <option value="marketplace-ads">
                          Amazon & Flipkart Ads
                        </option>
                        <option value="flutter">Flutter App Development</option>
                        <option value="ecommerce">E-commerce Website</option>
                        <option value="portfolio">Portfolio Website</option>
                        <option value="branding">Branding & Design</option>
                        <option value="consulting">Growth Consulting</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2">Project Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                      >
                        <option value="">Select your budget range</option>
                        <option value="<50k">Under ₹50,000</option>
                        <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                        <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                        <option value="3L-5L">₹3,00,000 - ₹5,00,000</option>
                        <option value=">5L">₹5,00,000+</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2">
                        Tell us about your project *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                        placeholder="Share your goals, challenges, and timeline..."
                      />
                    </div>

                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-accent/30 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload project files or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, or images up to 10MB
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? <span>Sending...</span> : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8">
                Visit Our Office
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      #05, water tank road,
                      <br />
                      TG Halli, Bengaluru
                      <br />
                      Karnataka 560073, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 95134 12767</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      growmithra@dgmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-gradient-to-br from-accent/10 via-muted to-accent/5 rounded-2xl border border-border flex items-center justify-center">
                <MapPin className="w-12 h-12 text-accent" />
              </div>

              {/* Office Hours */}
              <div className="mt-8 p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
