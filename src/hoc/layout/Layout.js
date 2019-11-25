import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div>
      <header className="layout-header">
        <h2>Currency Transactions</h2>
      </header>
      <main className="main-content">{children}</main>
    </div>
  );
}

export default React.memo(Layout);
