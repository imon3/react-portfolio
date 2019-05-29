import React from "react";
import "./App.css";
// mdl import
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="background" />
      <div style={{ height: "300px" }}>
        <Layout>
          <Header
            className="header"
            transparent
            title="Imon Ovbude"
            style={{ color: "#fff" }}
          >
            <Navigation className="navigation">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/resume">
                Resume
              </Link>
              <Link className="link" to="/about">
                About Me
              </Link>
              <Link className="link" to="/projects">
                Projects
              </Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/resume">
                Resume
              </Link>
              <Link className="link" to="/about">
                About Me
              </Link>
              <Link className="link" to="/projects">
                Projects
              </Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
