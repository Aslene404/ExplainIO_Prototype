import React, { useEffect, useState, useRef } from 'react';
import pdfjsDist from 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.10.111/+esm'
import './PDFViewer.css'; // You can define your own styles
pdfjsDist.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsDist.version}/pdf.worker.js`;

const PDFViewer = ({ file }) => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [scale, setScale] = useState(1);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedText, setSelectedText] = useState('');

  const [selectionRect, setSelectionRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

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
    const screenshotDataURL = screenshotCanvas.toDataURL('image/png');
  
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
        console.log('Selected Text:', selectedText);
  
        // Send the selected text to the backend or use it as needed
        // ...
      });
    });
  
    // Reset the selection rectangle
    setSelectionRect({ x: 0, y: 0, width: 0, height: 0 });
  };
  
  

  
  
  return (
    <div>
      <div> 
        <h4>Your annotations</h4>
      </div>
      <div className="pdf-container" ref={pdfContainerRef} style={{margin: '20px'}}>
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
       <div className="pdf-navigation" style={{ marginTop: '20px', position: 'center'}}>
        <button  style={{marginLeft: 20}}onClick={goToPreviousPage} disabled={pageNum === 1}>Previous Page</button>
        <span style={{marginLeft: 20}}>Page {pageNum}</span>
        <button style={{marginLeft: 20}}onClick={goToNextPage} disabled={pageNum === (pdfDoc ? pdfDoc.numPages : 1)}>Next Page</button>
      </div>
      <div className="selected-text">
  <strong>Selected Text:</strong> {selectedText}
</div>

    </div>
    </div>
    
  );
};

export default PDFViewer;