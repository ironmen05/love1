import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#fcfefc",
};

const headerTextStyle = {
  fontFamily: "Nunito",
  fontSize: "50px",
  fontWeight: "bold",
  color: "#FFB6C1",
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "0px",
};

const textStyle = {
  fontFamily: "Nunito",
  fontSize: "25px",
  fontWeight: "bold",
  color: "#FFB6C1",
  textAlign: "center",
  marginTop: "20px",
  marginBottom: "0px",
};

const gifContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const YesPage = () => {
  return (
    <div style={containerStyle}>
      <div>
        <h1 style={headerTextStyle}>Ееееееее!!</h1>
        <p style={textStyle}>Давайте пойдем гулять!</p>
      </div>
      <div style={gifContainerStyle}>
        <img src="https://i.postimg.cc/RVFpK1WN/image.gif" alt="gif" />
      </div>
    </div>
  );
};

export default YesPage;
