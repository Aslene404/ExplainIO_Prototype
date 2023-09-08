import React, { useEffect, useState, useRef } from 'react';
import pdfjsDist from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.10.111/+esm'
import './PDFViewer.css'; // You can define your own styles
import 'bootstrap/dist/css/bootstrap.min.css';
import AnnotationModal from './AnnotationModal';

pdfjsDist.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsDist.version}/pdf.worker.js`;

const PDFViewer = ({ file }) => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [scale, setScale] = useState(1);
  const [isSelecting, setIsSelecting] = useState(false);
  const [annotations, setAnnotations] = useState([]); // State to store annotations
  const [newAnnotation, setNewAnnotation] = useState({ title: '', content: '' }); // State to store the new annotation

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

    if (newAnnotation.title && newAnnotation.content) {
      // Add the annotation to the state
      setAnnotations([...annotations, newAnnotation]);
      
      // Clear the modal's title and content fields
      setNewAnnotation({ title: '', content: '' });
    }
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
    if (title) {
      // Add the annotation to the state
      setAnnotations([...annotations, { title, content }]);
      
      // Clear the modal's title and content fields
      setShowMyModal(false);
    }
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
  
  

  
  
  return (
    <div className='pdf-file'>
      <div  className='annotation'>
        <div> 
        <h3 style={{ margin: 20 }}><strong>Your annotations : </strong></h3>
        </div>
        <div style={{ margin: 20 }} className="selected-text">
          {/* Render annotations */}
          {annotations.map((annotation, index) => (
            <div key={index}>
              <h4>{annotation.title}</h4>
              <p>{annotation.content}</p>
              <div style={{ borderTop: "1px solid black" }}></div>                
            </div>
          ))}
        </div>
    </div>
     <div className="pdf-container" ref={pdfContainerRef} >
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
      />
    </div>
     </div>
     
  </div>
  );
};

export default PDFViewer;