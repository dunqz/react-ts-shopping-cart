import { Routes, Route, useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/navbar/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ShoppingCartProvider>
      <Navbar />
      <AnimatePresence mode="wait">
        <Container fluid className="mb-4">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </AnimatePresence>
    </ShoppingCartProvider>
  );
}


export default App
