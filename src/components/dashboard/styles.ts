import React from "react";

export const overlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: -1,
};

export const mainVideo: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const videoBG: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const content: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "grey",
};

export const typoTitle: React.CSSProperties = {
  marginBottom:"200px",
  fontFamily: "Roboto, serif",
  fontSize: "130px",
  letterSpacing: "3px",
  wordSpacing: "5px",
  color: "#ffffff",
  fontWeight: "400",
  textTransform: "uppercase",
};

export const typoDescription: React.CSSProperties = {
  fontFamily: "Roboto, serif",
  fontSize: "25px",
  letterSpacing: "3px",
  wordSpacing: "5px",
  color: "#ffffff",
  fontWeight: "400",
  textTransform: "uppercase",
};
