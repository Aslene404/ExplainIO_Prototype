import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import {
  faMagnifyingGlassPlus, faMagnifyingGlassMinus, faForward,
  faBackward, faTrashCan, faNoteSticky
} from '@fortawesome/free-solid-svg-icons';
import AnnotationModal from '../components/AnnotationModal';
import { useLocation } from 'react-router-dom';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer() {
  const location = useLocation();
  const file = location.state && location.state.file;
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [selectedText, setSelectedText] = useState('');
  const [scale, setScale] = useState(2);
  const [annotations, setAnnotations] = useState([]);
  const [textSelectionActive, setTextSelectionActive] = useState(false); // Added state for text selection
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [disabledColor,setDisabledColor] = useState('#94a4a6');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
 
 const handleSearch = async () => {
  if (searchText && numPages ) {
    const arrayBuffer = await file.arrayBuffer();
    const pdfDocument = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const allSearchResults = [];

    for (let pageIndex = 0; pageIndex < numPages; pageIndex++) {
      const page = await pdfDocument.getPage(pageIndex + 1);
      const textContent = await page.getTextContent();
      for (let item of textContent.items) {
        const text = item.str;
        let startIndex = -1;

        while ((startIndex = text.indexOf(searchText, startIndex + 1)) !== -1) {
          const endIndex = startIndex + searchText.length;
          const rangeLikeObject = {
            start: startIndex,
            end: endIndex,
          };
          allSearchResults.push({text,rangeLikeObject, pageIndex});
          console.log(allSearchResults);
        }

      }
      setSearchResults(allSearchResults);


    }

  
  }
};

   const handleNext = () => {
    navigate("/createVideo", { state: { text: annotations } });
   }

 
  
  
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOpenMyModal = () => {
    setShowMyModal(true);
  };

  const handleCloseMyModal = () => {
    setShowMyModal(false);
  };


  const toggleTextSelection = () => {
    setTextSelectionActive(!textSelectionActive); 
    textSelectionActive ? setDisabledColor("#94a4a6") :setDisabledColor("#198754") 
  };

  const handleAddAnnotation = (title, content) => {
    if (title) {

      const existingAnnotationIndex = annotations.findIndex(
        (annotation) => annotation.title === title
      );

      if (existingAnnotationIndex !== -1) {
        const updatedAnnotations = [...annotations];
        updatedAnnotations[existingAnnotationIndex].content +=
          '\n' + content; 

        
        setAnnotations(updatedAnnotations);
      } else {
        setAnnotations([{ title, content }, ...annotations]);
      }

    }
    setIsButtonDisabled(false);

    // Close the modal
    setShowMyModal(false);
  };


  const handleClearBoard = () => {
    // Clear the annotations by setting the state to an empty array
    setAnnotations([]);
  };
  const handleDeleteAnnotation = (index) => {
    // Create a new array excluding the clicked annotation
    const updatedAnnotations = annotations.filter((_, i) => i !== index);
    // Update the state with the new array
    setAnnotations(updatedAnnotations);
  };

  function wrapTextWithSpan(inputHTML) {
    // Create a temporary div element to parse the input HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = inputHTML;

    // Select all text nodes within the div
    const textNodes = [];
    const findTextNodes = (node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
        textNodes.push(node);
      } else {
        node.childNodes.forEach(findTextNodes);
      }
    };
    findTextNodes(tempDiv);

    // Wrap each text node with a <span> element having the class "highlighted-text"
    textNodes.forEach((textNode) => {
      const span = document.createElement('span');
      span.className = 'highlighted-text';
      span.textContent = textNode.textContent;
      textNode.parentNode.replaceChild(span, textNode);
    });

    // Return the modified HTML
    return tempDiv.innerHTML;
  }

  const handleTextSelection = () => {
    if (textSelectionActive) {
      const selection = window.getSelection();
      const selectedText = selection.toString();

      if (selectedText) {
        const range = selection.getRangeAt(0); // Get the range of the selection
        const clonedSelection = range.cloneContents(); // Clone the selected content

        const div = document.createElement("div");
        div.appendChild(clonedSelection);

        const selectedHTML = div.innerHTML; // Get the HTML code of the selected content
        const highlitedHTML = wrapTextWithSpan(selectedHTML); // Get the Highlited HTML code of the selected content

        // Replace the selected text in the document with the highlighted text
        range.deleteContents();
        range.insertNode(document.createRange().createContextualFragment(highlitedHTML));

        setSelectedText(selectedText);
        handleOpenMyModal();
      }
    }

  };

  useEffect(() => {
    if (textSelectionActive) {
      document.addEventListener('mouseup', handleTextSelection);
      return () => {
        document.removeEventListener('mouseup', handleTextSelection);
      };
    }
  }, [textSelectionActive]);

  const handleZoomIn = () => {
    if (scale < 3) {
      setScale(scale + 0.1);
    }
  };

  const handleZoomOut = () => {
    if (scale > 0.5) {
      setScale(scale - 0.1);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ backgroundColor: '#faf9f7', width: '30vw', height: '100vh', overflow: "auto" }}>
        <h3 style={{ color: "#777777", margin: 20 }}><strong>My Annotations</strong></h3>
        <div style={{ margin: 30 }} className="selected-text">
          {annotations.length > 0 ? (
            annotations.map((annotation, index) => (
              <div key={index} style={{ position: "relative" }}>
                <h5 style={{ color: "#999999" }}>{annotation.title}</h5>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p style={{ margin: 5, color: "#919191" }}>{annotation.content}</p>
                  <div style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}>
                    <FontAwesomeIcon icon={faTrashCan} size="2x" style={{ color: "#198754" }} onClick={() => handleDeleteAnnotation(index)} />
                  </div>
                </div>
                <div style={{ borderTop: "1px solid black", margin: 20 }}></div>
              </div>
            ))
          ) : (
            <p>Select a text to save it.</p>
          )}
          {annotations.length > 0 ? (
            <div style={{ bottom: '20px', margin: "10" }}>
              <button type="button" onClick={handleClearBoard} class="btn btn-outline-success">Clear the Board</button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div style={{ width: '70vw', height: '90vh', overflow: 'auto' }}>

        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{ position: 'fixed', width: '100%', zIndex: 100, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          <div class="container-fluid" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <a class="nav-link" onClick={toggleTextSelection}>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faNoteSticky} size='xl' style={{ color: disabledColor, marginRight: 100, marginLeft: 50 }} />
                  </li>
                </a>
                <a class="nav-link" onClick={handleZoomIn}>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} size='xl' style={{ color: "#198754", marginRight: 100 }} />
                  </li>
                </a>
                <a class="nav-link" onClick={handleZoomOut}>
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faMagnifyingGlassMinus} size='xl' style={{ color: "#198754", marginRight: 100 }} />
                  </li>
                </a>
                
                <a class="nav-link">
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faBackward} size='xl' style={{ color: "#198754", marginRight: 100 }} />
                  </li>
                </a>
                <a class="nav-link">
                  <li class="nav-item">
                    <FontAwesomeIcon icon={faForward} size='xl' style={{ color: "#198754", marginRight: 100 }} />
                  </li>
                </a>
              </ul>

            </div>
          </div>
        </nav>
        <div style={{ marginLeft: 50, marginTop: 100 }}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
  {[...Array(numPages)].map((_, pageIndex) => (
    <Page key={pageIndex + 1} pageNumber={pageIndex + 1} scale={scale}>

    </Page>
  ))}
</Document>


         
        </div>

        <div>
          <button
            style={{ margin: 20, display: "none" }}
            type="button"
            className="btn btn-primary"
            onClick={handleOpenMyModal}

          >
            Open My Modal
          </button>
          <AnnotationModal
            show={showMyModal}
            onClose={handleCloseMyModal}
            onAddAnnotation={handleAddAnnotation} // Pass the handler to the modal
            title="New Annotation"
            content={selectedText}
            annotations={annotations}
          />
        </div>

       
      </div>
      <button style={{ 
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 101 
  }} type="button" class="btn btn-success" onClick={handleNext} disabled={isButtonDisabled}><strong>Next</strong></button>

    </div>
  );
}

export default PDFViewer;