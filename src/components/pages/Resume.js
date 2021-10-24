import React, { useState  } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ResumeFile from '../../Assets/Resume2021School.pdf';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) { setPageNumber(prevPageNumber => prevPageNumber + offset); }

  function previousPage() { changePage(-1); }

  function nextPage() { changePage(1);}

  return (
    <>
          <a href = {ResumeFile} target = "blank">Download Pdf</a>
      <Document
        file={ResumeFile}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Resume;