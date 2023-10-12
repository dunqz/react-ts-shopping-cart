import { Routes, Route, useLocation } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/navbar/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { AnimatePresence } from "framer-motion"
import { useEffect } from "react"
import { ConfigProvider, theme } from "antd"

const App:React.FC =()=> {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return(
    <ConfigProvider
      theme={{
        // 1. Use dark algorithm
        algorithm: theme.darkAlgorithm,
  
        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}>
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
    </ConfigProvider>
  );
}


export default App
