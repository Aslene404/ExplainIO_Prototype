import React, { useEffect, useState, useRef } from 'react';
import pdfjsDist from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.10.111/+esm'
import './PDFViewer.css'; // You can define your own styles
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnotationModal from './AnnotationModal';
import Pannel from './Pannel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {    faTrashCan } from '@fortawesome/free-solid-svg-icons';
pdfjsDist.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsDist.version}/pdf.worker.js`;

const PDFViewer = ({ file }) => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [scale, setScale] = useState(1);
  const [isSelecting, setIsSelecting] = useState(false);
  const [annotations, setAnnotations] = useState([]); // State to store annotations
  const [newAnnotation, setNewAnnotation] = useState({ title: '', content: '' });
  let firstFourTitles = [];

  const [selectedText, setSelectedText] = useState('');

  const [selectionRect, setSelectionRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOpenMyModal = () => {
    setShowMyModal(true);
  };

  const handleCloseMyModal = () => {
    setShowMyModal(false);
  };
  const pdfContainerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const renderPage = () => {
      if (!pdfDoc) return;

      pdfDoc.getPage(pageNum).then((page) => {
        const viewport = page.getViewport({ scale });
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        page.render(renderContext);
      });
    };

    renderPage();
  }, [pdfDoc, pageNum, scale]);

  useEffect(() => {

    const loadPDF = async () => {
      try {
        if (!file || file.type !== 'application/pdf') {
          console.error('Invalid PDF file.');
          return;
        }

        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = pdfjsDist.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;
        console.log(pdf);
        setPdfDoc(pdf);
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };

    loadPDF();
  }, [file]);
  const goToPreviousPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNum < (pdfDoc ? pdfDoc.numPages : 1)) {
      setPageNum(pageNum + 1);
    }
  };

  const handleMouseDown = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const startX = e.clientX - rect.left;
    const startY = e.clientY - rect.top;

    setIsSelecting(true);
    setSelectionRect({
      x: startX,
      y: startY,
      width: 0,
      height: 0,
    });
  };
  

  const handleAddAnnotation = (title, content) => {
    if (title ) {
      // Check if an annotation with the same title already exists
      const existingAnnotationIndex = annotations.findIndex(
        (annotation) => annotation.title === title
      );
  
      if (existingAnnotationIndex !== -1) {
        // If an annotation with the same title exists, update its content
        const updatedAnnotations = [...annotations];
        updatedAnnotations[existingAnnotationIndex].content +=
          '\n' + content; // You can adjust how you want to combine the content
  
        // Update the state with the updated annotations
        setAnnotations(updatedAnnotations);
      } else {
        // If no annotation with the same title exists, add the new annotation
        setAnnotations([...annotations, {title, content}]);
      }
  
      // Clear the modal's title and content fields
      setNewAnnotation({ title: '', content: '' });
    }
  
    // Close the modal
    setShowMyModal(false);
  };

  const handleMouseMove = (e) => {
    if (isSelecting) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();

      const endX = e.clientX - rect.left;
      const endY = e.clientY - rect.top;

      setSelectionRect((prevRect) => ({
        ...prevRect,
        width: endX - prevRect.x,
        height: endY - prevRect.y,
      }));
    }
  };
  const handleClearBoard = () => {
    // Clear the annotations by setting the state to an empty array
    setAnnotations([]);
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
  
    // Get the canvas and context
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
  
    // Extract the selected area from the canvas
    const { x, y, width, height } = selectionRect;
    const imageData = ctx.getImageData(x, y, width, height);
  
    // Create a new canvas to hold the screenshot
    const screenshotCanvas = document.createElement('canvas');
    screenshotCanvas.width = width;
    screenshotCanvas.height = height;
    const screenshotCtx = screenshotCanvas.getContext('2d');
  
    // Draw the extracted image data on the new canvas
    screenshotCtx.putImageData(imageData, 0, 0);
  
    // Convert the screenshot canvas to a data URL (base64)
  
    // Use PDF.js to extract text from the selected area
    pdfDoc.getPage(pageNum).then((page) => {
      page.getTextContent().then((textContent) => {
        const textItems = textContent.items;
        const selectedTextItems = [];
  
        for (const textItem of textItems) {
          const itemX = textItem.transform[4];
          const itemY = page.getViewport({ scale }).height - textItem.transform[5]; // Adjust Y-coordinate
  
          if (
            itemX >= x &&
            itemX <= x + width &&
            itemY >= y &&
            itemY <= y + height
          ) {
            selectedTextItems.push(textItem.str);
          }
        }
  
        const selectedText = selectedTextItems.join(' ');
        setSelectedText(selectedText);
        handleOpenMyModal();
        
        
      });
    });
  
    // Reset the selection rectangle
    setSelectionRect({ x: 0, y: 0, width: 0, height: 0 });
  };
  const handleDeleteAnnotation = (index) => {
    // Create a new array excluding the clicked annotation
    const updatedAnnotations = annotations.filter((_, i) => i !== index);
    // Update the state with the new array
    setAnnotations(updatedAnnotations);
  };
  
  

  
  
  return (
    <div className='pdf-file'>
      <div className='annotation' style={{ overflowY: 'auto',  height: '100vh'  }}>
     <div>
       <h3 style={{ margin: 20, color: "#777777" }}><strong>My Annotations</strong></h3>
    </div>
  <div style={{ margin: 30 }} className="selected-text">
  {annotations.length > 0 ? (
        annotations.map((annotation, index) => (
          <div key={index}>
            <h5 style={{ color: "#999999" }}>{annotation.title}</h5>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <p style={{ margin: 5, color: "#919191" }}>{annotation.content}</p>
              <FontAwesomeIcon icon={faTrashCan} size="2xl" onClick={() => handleDeleteAnnotation(index)}style={{ paddingTop: 20 }} />
            </div>
            <div style={{ borderTop: "1px solid black", margin: 20}}></div>
            
          </div>
         
        ))
        
      ) : (
        <p>Select a text to save it.</p>
      )}
       { annotations.length >0 ? (<div style={{  bottom: '20px', margin: "10" }}>
          <button type="button" onClick={handleClearBoard} class="btn btn-primary">Clear the Board</button>
        </div>)
        : (<div>
          
        </div>)
        }
   
  </div>
</div>


    
      <div className='pdf-display'>
      <Pannel />
      <div className='pdf-container' ref={pdfContainerRef} >
      <canvas
        className="pdf-canvas"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      {isSelecting && (
        <div
          className="selection-rectangle"
          style={{
            left: selectionRect.x + 'px',
            top: selectionRect.y + 'px',
            width: selectionRect.width + 'px',
            height: selectionRect.height + 'px',
          }}
        />
      )}
       <div className="pdf-navigation" style={{ marginTop: '20px', display: "flex", flexDirection: 'row' , justifyContent: 'space-between'}}>
        <button type="button" class="btn btn-primary" onClick={goToPreviousPage} disabled={pageNum === 1}>Previous Page</button>
        <span>Page {pageNum}</span>
        <button type="button" class="btn btn-primary" onClick={goToNextPage} disabled={pageNum === (pdfDoc ? pdfDoc.numPages : 1)}>Next Page</button>
      </div>
      <div>
      <button
        style={{ margin: 20 , display: "none"}}
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
      </div>
     
     
  </div>
  );
};

export default PDFViewer;