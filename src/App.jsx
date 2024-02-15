import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Добавлен импорт Switch
import { Button, Container, Typography } from "@mui/material";
import YesPage from "./components/Yes";
import { Link } from "react-router-dom";

function App() {
  const moveButton = () => {
    const noButton = document.getElementById("noButton");
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  };

  return (
    <Router>
      <Container style={containerStyle}>
        <div>
          <Typography variant="h1" style={headerTextStyle}>
            Пойдешь гулять со мной?
          </Typography>
        </div>
        <div style={gifContainerStyle}>
          <img src="https://i.postimg.cc/CKfWDG6j/first.gif" alt="gif" />
        </div>
        <div style={buttonsStyle}>
          <Link to="/YesPage" style={{ textDecoration: "none" }}>
            <Button variant="contained" style={btnStyle} id="yesButton">
              Да
            </Button>
          </Link>
          <Button
            variant="contained"
            style={btnStyle}
            id="noButton"
            onMouseOver={moveButton}
            onClick={moveButton}
          >
            Нет
          </Button>
        </div>
      </Container>
      <Routes>
        <Route path="/YesPage" element={<YesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
  backgroundColor: "#f4f6f4",
};

const headerTextStyle = {
  fontFamily: "Nunito",
  fontSize: "40px",
  fontWeight: "bold",
  color: "#FFB6C1",
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "0px",
};

const buttonsStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "20px",
  marginLeft: "20px",
};

const btnStyle = {
  backgroundColor: "#FFB6C1",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "12px",
  transition: "background-color 0.3s ease",
};

const gifContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "90px",
};
