import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ResumeFile from '../../Assets/Resume2021School.pdf';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div>
    <Document
      file={ResumeFile}
      onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} />
    </Document>
    <p>Page {pageNumber} of {numPages}</p>
      <a href = {ResumeFile} target = "blank">Download Pdf</a>
    </div>
  );
}

export default Resume;