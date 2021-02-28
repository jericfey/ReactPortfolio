import React from "react";
import jeriResume from "../assets/Jeri_Fey_2021.Pdf";
import Pdf from "./pdf/pdf";

export default function Resume() {
  return (
    <div className="Resume">
      <div className="all-page-container">
        <Pdf pdf={jeriResume} />
      </div>

      <hr />
    </div>
  );
}
