import React from "react";
import jeriResume from "../assets/Jeri_Fey_2021.Pdf";
import Pdf from "./pdf/pdf";
import { Link } from "react-router-dom";
import { Button } from "react-mdl";

export default function Resume() {
  return (
    <div className="Resume">
      <Link to={jeriResume} target="_blank" download>
        <Button raised ripple>
          Download
        </Button>
      </Link>
      <div className="all-page-container">
        <Pdf pdf={jeriResume} />
      </div>

      <hr />
    </div>
  );
}
