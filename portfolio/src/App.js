import React from "react";
import "./App.css";
// mdl import
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

function App() {
  return (
    <div className="App">
      <div style={{ height: "300px", position: "relative" }}>
        <Layout>
          <Header transparent title="Title" style={{ color: "#fff" }}>
            <Navigation>
              <a className="link" href="/">
                Link
              </a>
              <a className="link" href="/">
                Link
              </a>
              <a className="link" href="/">
                Link
              </a>
              <a className="link" href="/">
                Link
              </a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a className="link" href="/">
                Link
              </a>
              <a className="link" href="/">
                Link
              </a>
              <a className="link" href="/">
                Link
              </a>
              <a className="link" href="/">
                Link
              </a>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
    </div>
  );
}

export default App;
