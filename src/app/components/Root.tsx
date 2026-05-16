import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ThemeProvider } from "./ThemeProvider";

export function Root() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="agency-theme">
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
