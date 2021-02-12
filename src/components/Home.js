import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto">NASA Astronomy POD</Link>
    </div>
  );
}
