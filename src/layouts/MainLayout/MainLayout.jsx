import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen h-full w-full flex flex-col">
      <Navbar />
      <section className="w-full grow flex flex-col mt-24 mb-10">
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
