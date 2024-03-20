import React, { useState, useEffect } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import axios from "axios";

// Function to convert Base64 to Blob
function base64toBlob(base64Data, contentType = "", sliceSize = 512) {
  const byteCharacters = atob(base64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

// Function to convert Base64 to PDF and set the temp URL
function base64toPDF(base64Data, fileName = "document.pdf") {
  const blob = base64toBlob(base64Data, "application/pdf");
  const url = URL.createObjectURL(blob);
  return url;
}

function PdfViewer(props) {
  console.log(props.fileName);
  const [pdfData, setPdfData] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(""); // State to store the PDF URL
  useEffect(() => {
    const fetchPdfData = async () => {
      try {
        // Fetch the document from your backend server
        const response = await axios.get("http://localhost:8080/api/files");
        setPdfData(response.data);
        // Decode the Base64 data
        const decodedData = atob(response.data[0].data);

        // Set the decoded PDF data in state
        // setPdfData(decodedData);
        // console.log(pdfData);

        // Convert Base64 data to PDF and set the temp URL
        const url = base64toPDF(decodedData);
        setPdfUrl(url);
      } catch (error) {
        console.error("Error fetching PDF data:", error);
      }
    };

    fetchPdfData();
  }, []);
  console.log(props.fileName);
  const docs = [
    {
      uri: props.fileName,
    }, // Remote file

    { uri: require("../../assets/pdf/Sample.pdf") }, // Local file
    { uri: pdfUrl }, // Use the temp URL
    {
      uri: require("../../assets/pdf/html.pdf"),
      fileType: "pdf",
      fileName: "HTML",
    },
    {
      uri: require("../../assets/pdf/css.pdf"),
      fileType: "pdf",
      fileName: "CSS",
    },
    {
      uri: require("../../assets/pdf/bootstrap.pdf"),
      fileType: "pdf",
      fileName: "Bootstrap",
    },
  ];

  return (
    <div>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: 700 }}
        theme={{
          primary: "#5296d8",
          // secondary: "#ffffff",
          tertiary: "#5296d899",
          // textPrimary: "#ffffff",
          textSecondary: "#5296d8",
          // textTertiary: "#00009999",
          disableThemeScrollbar: false,
        }}
        config={{
          pdfZoom: {
            defaultZoom: 0.6, // 1 as default,
            zoomJump: 0.2, // 0.1 as default,
          },
        }}
      />
    </div>
  );
}

export default PdfViewer;
