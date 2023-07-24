import { Card, Container } from "react-bootstrap";
import backgroundVideo from "../asset/starsxd.mp4";
import {
  content,
  mainVideo,
  overlayStyle,
  typoDescription,
  typoTitle,
  videoBG,
} from "./styles";
import { motion as m } from "framer-motion";

export const HomeComponent = () => {
  return (
    <Container fluid className="mt-5" style={{ overflow: "hidden" }}>
      <div style={overlayStyle}>
        <m.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          exit={{ opacity: 1 }}
          style={mainVideo}
        >
          <video style={videoBG} src={backgroundVideo} autoPlay loop muted />
          <div style={content}>
            <Container>
              <div
                style={{
                  visibility: "inherit",
                  opacity: 0.7,
                }}
              >
                <div
                  className="overflow-hidden"
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    transform: "translate(0px, 240px)",
                  }}
                >
                  <m.h1
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ delay: .8, duration: 1 }}
                    style={typoTitle}
                  >
                    Astro Labs
                  </m.h1>
                  <m.h1
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                    style={typoDescription}
                  >
                    the best website for astronomy-enthusiastic people.
                  </m.h1>
                </div>
              </div>
            </Container>
          </div>
        </m.div>
      </div>
    </Container>
  );
};
