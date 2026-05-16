import { Link } from "react-router";
import {
  Briefcase,
  FileText,
  Upload,
  Download,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react";

export function ClientDashboard() {
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
                <span className="font-display text-xl font-bold">
                  Client Portal
                </span>
              </Link>
              <nav className="hidden md:flex items-center space-x-1">
                {[
                  { name: "Projects", icon: Briefcase, active: true },
                  { name: "Files", icon: FileText },
                  { name: "Messages", icon: MessageSquare },
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
              <Link
                to="/dashboard/settings"
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
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
        {/* Welcome */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
            Welcome back, Priya
          </h1>
          <p className="text-muted-foreground">
            Track your projects and stay connected with your team
          </p>
        </div>

        {/* Active Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6">
            Active Projects
          </h2>
          <div className="space-y-6">
            {[
              {
                name: "Meta Advertising Campaign",
                service: "Performance Marketing",
                progress: 75,
                status: "In Progress",
                nextMilestone: "Campaign Optimization Review",
                dueDate: "May 15, 2026",
              },
              {
                name: "E-commerce Website Redesign",
                service: "Web Development",
                progress: 45,
                status: "In Progress",
                nextMilestone: "Design Approval",
                dueDate: "May 20, 2026",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="p-8 bg-card rounded-2xl border border-border hover:border-accent/30 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.service}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {project.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-accent rounded-full h-3 transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Next Milestone */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">
                        Next Milestone
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.nextMilestone}
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Due Date</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.dueDate}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all">
                    <MessageSquare className="w-4 h-4" />
                    <span>Message Team</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-all">
                    <Upload className="w-4 h-4" />
                    <span>Upload Files</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-all">
                    <FileText className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="p-8 bg-card rounded-2xl border border-border">
            <h2 className="text-2xl font-display font-bold mb-6">
              Recent Updates
            </h2>
            <div className="space-y-4">
              {[
                {
                  type: "milestone",
                  title: "Milestone Completed",
                  description: "Campaign setup and launch completed",
                  time: "2 hours ago",
                  icon: CheckCircle2,
                  color: "text-green-500",
                },
                {
                  type: "file",
                  title: "New Files Available",
                  description: "Design mockups v2.0 uploaded",
                  time: "5 hours ago",
                  icon: FileText,
                  color: "text-blue-500",
                },
                {
                  type: "message",
                  title: "New Message",
                  description: "Response from your account manager",
                  time: "1 day ago",
                  icon: MessageSquare,
                  color: "text-accent",
                },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-start space-x-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-background flex items-center justify-center flex-shrink-0 ${activity.color}`}
                  >
                    <activity.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {activity.description}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-8 bg-card rounded-2xl border border-border">
            <h2 className="text-2xl font-display font-bold mb-6">
              Quick Actions
            </h2>
            <div className="space-y-3">
              {[
                {
                  label: "Upload Project Files",
                  icon: Upload,
                  description: "Share resources with your team",
                },
                {
                  label: "Download Deliverables",
                  icon: Download,
                  description: "Access completed work",
                },
                {
                  label: "Schedule Meeting",
                  icon: Calendar,
                  description: "Book a call with your team",
                },
                {
                  label: "View Invoices",
                  icon: FileText,
                  description: "Check billing and payments",
                },
              ].map((action, i) => (
                <button
                  key={i}
                  className="w-full flex items-center space-x-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors text-left"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <action.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-0.5">{action.label}</h3>
                    <p className="text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="p-8 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 rounded-2xl border border-accent/20">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  Need Help?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our team is here to support you. Reach out anytime.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all">
                    Contact Support
                  </button>
                  <button className="px-6 py-2.5 bg-muted rounded-lg hover:bg-muted/80 transition-all">
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
