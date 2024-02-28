import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./PdfViewer.css";
import cors from "cors";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

// First Code

// function PdfViewer() {
//   // To pre-load the PDF
//   const express = require("express");
//   const fetch = require("node-fetch");
//   const app = express();

//   app.get("/api/pdf", async (req, res) => {
//     try {
//       const response = await fetch(
//         "https://www.tutorialspoint.com/html/html_tutorial.pdf"
//       );
//       const pdf = await response.buffer();
//       res.setHeader("Content-Type", "application/pdf");
//       res.send(pdf);
//     } catch (error) {
//       console.error("Error fetching PDF:", error);
//       res.status(500).send("Internal Server Error");
//     }
//   });

//   const docs = [
//     { uri: require("../../assets/pdf/Sample.pdf") },
//     // Remote file
//     {
//       uri: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
//     },
//   ];
//   return (
//     <div>
//       <DocViewer
//         documents={docs}
//         pluginRenderers={DocViewerRenderers}
//         theme={{
//           primary: "#5296d8",
//           secondary: "#ffffff",
//           tertiary: "#5296d899",
//           textPrimary: "#ffffff",
//           textSecondary: "#5296d8",
//           textTertiary: "#00000099",
//           disableThemeScrollbar: false,
//         }}
//       />
//       ;
//     </div>
//   );
// }

// Code 2

import { Document, Page } from "react-pdf";
// function PdfViewer() {
//   // To pre-load the PDF
//   const [pdf, setPdf] = useState();
//   useEffect(() => {
//     const fetchData = async (req, res) => {
//       try {
//         const response = await axios.get("http://localhost:8080/api/trial");
//         setPdf(response.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//       try {
//         const response = await fetch(
//           "https://www.tutorialspoint.com/html/html_tutorial.pdf"
//         );
//         const pdf = await response.buffer();
//         res.setHeader("Content-Type", "application/pdf");
//         res.send(pdf);
//       } catch (error) {
//         console.error("Error fetching PDF:", error);
//         res.status(500).send("Internal Server Error");
//       }
//     };

//     fetchData();
//   }, []);
//   console.log(pdf);
//   // app.get("/api/pdf", async (req, res) => {
//   // try {
//   //   const response = await fetch(
//   //     "https://www.tutorialspoint.com/html/html_tutorial.pdf"
//   //   );
//   //   const pdf = await response.buffer();
//   //   res.setHeader("Content-Type", "application/pdf");
//   //   res.send(pdf);
//   // } catch (error) {
//   //   console.error("Error fetching PDF:", error);
//   //   res.status(500).send("Internal Server Error");
//   // }
//   // });
//   return (
//     <div>
//       <Document file="https://www.clickdimensions.com/links/TestPDFfile.pdf">
//         <Page></Page>
//       </Document>
//     </div>
//   );
// }

// Code 3
const PdfViewer = ({ url = "https://www.pdf995.com/samples/pdf.pdf" }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdf, setPdf] = useState(null);

  useEffect(() => {
    axios
      .get(url, { responseType: "blob" })
      .then((response) => {
        setPdf(URL.createObjectURL(response.data));
      })
      .catch((error) => {
        console.error("Error fetching PDF:", error);
      });
  }, [url]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {pdf && (
        <Document
          file={pdf}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      )}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default PdfViewer;
