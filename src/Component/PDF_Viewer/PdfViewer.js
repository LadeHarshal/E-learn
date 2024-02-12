import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "../../assets/pdf/Sample.pdf";
import { Viewer } from "react-pdf-viewer/core";

function PdfViewer({ pdfFile }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));

  const goToNextPage = () =>
    setPageNumber((prevPageNumber) => Math.min(prevPageNumber + 1, numPages));

  return (
    <div>
      {/* <nav>
        <button onClick={goToPrevPage}>Prev</button>
        <button onClick={goToNextPage}>Next</button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </nav>

      <Document
        file={pdfFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document> */}
    </div>
  );
}

export default PdfViewer;
