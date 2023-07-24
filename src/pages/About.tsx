import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion as m } from "framer-motion";
import { Container } from "react-bootstrap";

export const About = () => {
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, .4)" }}>
      <Parallax pages={2} style={{ top: "0", left: "0", zIndex: -10 }}>
        <ParallaxLayer
          offset={0}
          factor={2}
          speed={0.9}
          style={{
            backgroundImage: `url(/imgs/space.jpg)`,
            backgroundSize: "cover",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          factor={1}
          speed={0.8}
          style={{
            backgroundImage: `url(/imgs/stargazing.jpg)`,
            backgroundSize: "cover",
            overflow: "hidden",
            mixBlendMode: "lighten", // Apply blending mode to the layer
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.4}
          style={{ color: "white", textAlign: "center" }}
        >
          <Container>
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.5 }}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Roboto, serif",
                letterSpacing: "3px",
                wordSpacing: "5px",
                color: "#ffffff",
                fontWeight: "400",
              }}
            >
              <h1 style={{ fontSize: "60px" }}>Astro Labs</h1>
              <h2 style={{ fontSize: "50px" }}>
                Your Online Destination for Star Gazers
              </h2>
            </m.div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.5662}
          speed={0.5}
          style={{ color: "white", textAlign: "center" }}
        >
          <Container>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ delay: 1.5, duration: 2, ease: "easeIn" }}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Roboto, serif",
                fontSize: "1.5vw",
                letterSpacing: "3px",
                wordSpacing: "5px",
                color: "#ffffff",
                fontWeight: "400",
                padding: "2vw",
                background: "rgba(27, 38, 44, 0.5)",
              }}
            >
              <p>
                Astro Labs: Your Online Destination for Star Gazers Welcome to
                Astro Labs, the premier online store for all passionate star
                gazers and astronomy enthusiasts! At Astro Labs, we understand
                the awe-inspiring beauty and endless wonders that the night sky
                holds, and we are dedicated to providing you with the tools and
                resources to embark on your celestial journey.
              </p>
              <p>
                Our carefully curated collection offers a wide range of
                high-quality telescopes, binoculars, and accessories, ensuring
                that you have the perfect equipment to explore the cosmos.
                Whether you're a beginner or an experienced astronomer, our
                expert team is ready to assist you in selecting the ideal
                instrument that suits your needs and budget.
              </p>
            </m.div>
          </Container>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ color: "white", textAlign: "center", alignItems: "center" }}
        >
          <Container>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 2 }}
              transition={{ delay: 1.5, duration: 2, ease: "easeIn" }}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Roboto, serif",
                fontSize: "1.5vw",
                letterSpacing: "3px",
                wordSpacing: "5px",
                color: "#ffffff",
                fontWeight: "400",
                padding: ".5vw",
                background: "rgba(27, 38, 44, 0.5)",
              }}
            >
              <p>
                Beyond telescopes, Astro Labs offers an extensive selection of
                educational books, star charts, and interactive apps, designed
                to enhance your knowledge and understanding of the universe.
                From astronomy basics to advanced astrophysics, we aim to
                empower and educate our customers, fostering a deeper
                appreciation for the celestial marvels above.
              </p>
              <p>
                What sets Astro Labs apart is our commitment to exceptional
                customer service. Our knowledgeable and friendly support team is
                always available to answer your questions, provide technical
                assistance, and offer valuable advice to make your stargazing
                experience truly extraordinary.
              </p>
            </m.div>
          </Container>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
