import React from "react";
import "./PdfViewer.css";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
function PdfViewer() {
  const docs = [
    { uri: require("../../assets/pdf/Sample.pdf") }, // Remote file
  ];
  return (
    <div>
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        theme={{
          primary: "#5296d8",
          secondary: "#ffffff",
          tertiary: "#5296d899",
          textPrimary: "#ffffff",
          textSecondary: "#5296d8",
          textTertiary: "#00000099",
          disableThemeScrollbar: false,
        }}
      />
      ;
    </div>
  );
}

export default PdfViewer;
