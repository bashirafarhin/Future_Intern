import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
