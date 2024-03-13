import React from "react";
import "./TutorialPage.css";
import PdfViewer from "../../Component/PDFViewer/PdfViewer";
// Imports For the sidebar
// import { Button } from "@mui/joy/Button";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Userimage from "../../assets/images/Student1.png";
import Logo from "../../assets/images/Logo_DiamondBkg.png";
import { useState } from "react";
function TutorialPage() {
  const [pdf_file, setPdfFile] = useState("../../assets/pdf/html.pdf");
  return (
    <div className="tutorial-viewer">
      <div className="sidebar_Tutorial">
        {/* Logo */}
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            className="logo-img"
          />
        </div>
        {/* UserInfo */}
        <div className="profile_bar">
          <div className="avatar">
            <Tooltip title="User Details">
              <Avatar
                alt="User"
                src={Userimage}
              >
                B
              </Avatar>
            </Tooltip>
          </div>
          <div className="user-details">
            <h4>Username</h4>
            <h5>Role</h5>
          </div>
        </div>
        {/* List options */}
        <ul>
          <li onClick={() => setPdfFile("../../assets/pdf/html.pdf")}>
            HTML
            {/* </Button> */}
          </li>
          <li onClick={() => setPdfFile("../../assets/pdf/css.pdf")}>CSS</li>
          <li>Bootstrap</li>
          <li>HTML+CSS</li>
        </ul>
      </div>
      <div className="viewer-section">
        <PdfViewer fileName={pdf_file} />
      </div>
    </div>
  );
}

export default TutorialPage;
