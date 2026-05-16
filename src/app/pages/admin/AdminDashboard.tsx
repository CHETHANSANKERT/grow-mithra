import { Link } from "react-router";
import {
  BarChart3,
  Users,
  Briefcase,
  FileText,
  Mail,
  Calendar,
  Settings,
  TrendingUp,
  MessageSquare,
  Package,
  LogOut,
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 61000 },
  { month: "Apr", revenue: 58000 },
  { month: "May", revenue: 72000 },
];

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-[--gold-dark] rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">V</span>
                </div>
                <span className="font-display text-xl font-bold">Admin</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-1">
                {[
                  { name: "Dashboard", icon: BarChart3, active: true },
                  { name: "Leads", icon: Users },
                  { name: "Projects", icon: Briefcase },
                  { name: "Blog", icon: FileText },
                ].map((item) => (
                  <button
                    key={item.name}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      item.active
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-muted transition-colors relative">
                <Mail className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
              </button>
              <Link to="/admin/settings" className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Settings className="w-5 h-5" />
              </Link>
              <Link
                to="/login"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-muted transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden md:inline">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Revenue", value: "₹72L", change: "+24%", icon: TrendingUp },
            { label: "Active Projects", value: "14", change: "+3", icon: Briefcase },
            { label: "New Leads", value: "28", change: "+8", icon: Users },
            { label: "Messages", value: "42", change: "+12", icon: MessageSquare },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-card rounded-2xl border border-border"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-display font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="p-8 bg-card rounded-2xl border border-border mb-12">
          <h2 className="text-2xl font-display font-bold mb-8">
            Revenue Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} />
              <XAxis dataKey="month" stroke="currentColor" opacity={0.5} />
              <YAxis stroke="currentColor" opacity={0.5} />
              <Tooltip />
              <Bar dataKey="revenue" fill="var(--accent)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Leads */}
          <div className="p-8 bg-card rounded-2xl border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold">Recent Leads</h2>
              <Link to="/admin/leads" className="text-accent hover:underline text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { name: "Priya Sharma", service: "Meta Ads", value: "₹50K", status: "New" },
                { name: "Rahul Verma", service: "Flutter App", value: "₹3L", status: "Hot" },
                { name: "Anjali Menon", service: "E-commerce", value: "₹2L", status: "Contacted" },
              ].map((lead, i) => (
                <div
                  key={i}
                  className="p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{lead.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      lead.status === "Hot"
                        ? "bg-accent/10 text-accent"
                        : lead.status === "New"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-green-500/10 text-green-500"
                    }`}>
                      {lead.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{lead.service}</span>
                    <span className="font-semibold text-foreground">
                      {lead.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Projects */}
          <div className="p-8 bg-card rounded-2xl border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-display font-bold">
                Active Projects
              </h2>
              <Link to="/admin/projects" className="text-accent hover:underline text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {[
                { name: "Fashion Brand Campaign", progress: 85, deadline: "2 days" },
                { name: "Fintech App Development", progress: 60, deadline: "2 weeks" },
                { name: "Restaurant Website", progress: 40, deadline: "1 week" },
              ].map((project, i) => (
                <div
                  key={i}
                  className="p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">{project.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-background rounded-full h-2 mb-2">
                    <div
                      className="bg-accent rounded-full h-2"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>Due in {project.deadline}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 p-8 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-2xl border border-accent/20">
          <h2 className="text-2xl font-display font-bold mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { label: "New Lead", icon: Users },
              { label: "Add Project", icon: Briefcase },
              { label: "New Post", icon: FileText },
              { label: "View Analytics", icon: BarChart3 },
            ].map((action, i) => (
              <button
                key={i}
                className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/10 text-center group"
              >
                <action.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
