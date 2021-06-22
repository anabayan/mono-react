import React from "react";

import { Link } from "@reach/router";

import "../App.css";

export const GettingStarted = () => (
  <div>
    <header className="App-header">
      <div>
        <Link to="/intro/" style={{ color: "#FFFFFF" }}>
          <div style={{ color: "blue" }}>Component From Common</div>
        </Link>
      </div>
      <br />
    </header>
  </div>
);
