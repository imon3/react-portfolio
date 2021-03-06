import React from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="portrait" />
            <div className="job-title-banner">
              <h1 className="job-title">Full Stack Web Developer</h1>
              <p>
                HTML | CSS | BOOTSTRAP | JAVASCRIPT | REACT | REDUX | NODEJS |
                EXPRESS | SQL
              </p>

              <hr />

              <div className="social-links">
                <a
                  href="https://github.com/imon3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-github" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/imonhimi-ovbude"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-linkedin" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
