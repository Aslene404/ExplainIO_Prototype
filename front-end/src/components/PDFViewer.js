import React, { useEffect, useState, useRef } from 'react';
import pdfjsDist from 'pdfjs-dist';
import './PDFViewer.css'; // You can define your own styles

const PDFViewer = ({ file }) => {
  const [pdfDoc, setPdfDoc] = useState(null);
  const [pageNum ] = useState(1);
  const [scale] = useState(1);
  const [isSelecting, setIsSelecting] = useState(false);
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
  
    // Now you can use screenshotDataURL as an image source or save it as needed
    console.log('Screenshot Data URL:', screenshotDataURL);
    // Send the screenshot to the backend
    fetch('/upload-screenshot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ screenshot: screenshotDataURL }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Screenshot uploaded successfully');
          // Handle success as needed
        } else {
          console.error('Failed to upload screenshot');
          // Handle error as needed
        }
      })
      .catch((error) => {
        console.error('Error while uploading screenshot:', error);
        // Handle error as needed
      });
    
    // Reset the selection rectangle
    setSelectionRect({ x: 0, y: 0, width: 0, height: 0 });
  };

  return (
    <div className="pdf-container" ref={pdfContainerRef}>
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
    </div>
  );
};

export default PDFViewer;