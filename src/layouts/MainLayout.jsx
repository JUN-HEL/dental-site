import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export default function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="pt-24">{children}</main>
            <FloatingContact />
            <Footer />
        </>
    );
}