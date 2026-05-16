import { Link } from "react-router";
import { useState } from "react";
import { Mail, ArrowLeft, Send } from "lucide-react";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset with Supabase
    console.log("Reset password for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-transparent to-accent/5">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-[--gold-dark] rounded-xl flex items-center justify-center">
              <span className="text-primary font-bold text-xl">V</span>
            </div>
            <span className="font-display text-2xl font-bold">
              Grow Mithra
            </span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Reset Password
          </h1>
          <p className="text-muted-foreground">
            Enter your email and we'll send you a reset link
          </p>
        </div>

        <div className="p-8 bg-card rounded-2xl border border-border shadow-xl">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold mb-3">
                Check Your Email
              </h2>
              <p className="text-muted-foreground mb-6">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <Link
                to="/login"
                className="inline-flex items-center space-x-2 text-accent font-medium hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Sign In</span>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-xl hover:shadow-accent/30"
              >
                Send Reset Link
              </button>

              <Link
                to="/login"
                className="flex items-center justify-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Sign In</span>
              </Link>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
