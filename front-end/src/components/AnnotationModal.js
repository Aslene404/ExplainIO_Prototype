import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function AnnotationModal({ show, onClose, title, content, onAddAnnotation }) {
  const [annotationTitle, setAnnotationTitle] = useState(''); // State to store the annotation title
  const [annotationContent, setAnnotationContent] = useState('');
  useEffect(() => {
    // Update annotationContent when content prop changes
    setAnnotationContent(content);
  }, [content]);
  const handleTitleChange = (e) => {
    setAnnotationTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setAnnotationContent(e.target.value);
  };

  const handleAddClick = () => {
    onAddAnnotation(annotationTitle, annotationContent);
  };
  return (
    <div>
      <div
        className={`modal fade ${show ? 'show' : ''}`}
        tabIndex="-1"
        role="dialog"
        aria-hidden={!show}
        style={{ display: show ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
            <form>
            <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">
                Your script title:
              </label>
              <input
            type="text"
            className="form-control"
            id="recipient-name"
            value={annotationTitle}
            onChange={handleTitleChange}
          />
              
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">
                Saved Script
              </label>
              <textarea
            className="form-control"
            id="message-text"
            defaultValue={annotationContent}  // Set the value here
            onChange={handleContentChange}           ></textarea>
            </div>
          </form>
            </div>
            <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={handleAddClick}>
          Add Annotation
        </button>
      </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnotationModal;