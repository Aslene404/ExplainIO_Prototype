import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AnnotationModal({ show, onClose, title, content, onAddAnnotation, annotations }) {
  const [annotationTitle, setAnnotationTitle] = useState('');
  const [annotationContent, setAnnotationContent] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isInputDoubleClick, setIsInputDoubleClick] = useState(false);
  const suggestions = annotations.slice(0, 4).map((annotation) => annotation.title);

  useEffect(() => {
    setAnnotationContent(content);
  }, [content]);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setAnnotationTitle(value);
    setShowSuggestions(value.trim() !== '');
  };

  const handleDoubleClick = () => {
    setIsInputDoubleClick(true);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setAnnotationTitle(suggestion);
    setShowSuggestions(false);
  };
  const resetFields = () => {
    setAnnotationTitle('');
    setAnnotationContent('');
    setShowSuggestions(false);
    setIsInputDoubleClick(false);
  };
  const handleContentChange = (e) => {
    setAnnotationContent(e.target.value);
  };

  const handleAddClick = () => {
    onAddAnnotation(annotationTitle, annotationContent);
    resetFields();
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
                <div className="mb-3 position-relative">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Your script title:
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type something..."
                      value={annotationTitle}
                      onChange={handleTitleChange}
                      onDoubleClick={handleDoubleClick}
                    />
                    {showSuggestions && isInputDoubleClick && (
                      <ul className="list-group position-absolute w-100" style={{ zIndex: 100 }}>
                        {suggestions
                          .filter((suggestion) =>
                            suggestion.toLowerCase().includes(annotationTitle.toLowerCase())
                          )
                          .map((suggestion, index) => (
                            <li
                              key={index}
                              className="list-group-item list-group-item-action"
                              onClick={() => handleSuggestionClick(suggestion)}
                              style={{ width: '100%' }}
                            >
                              {suggestion}
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Saved Script
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    defaultValue={annotationContent}
                    onChange={handleContentChange}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-outline-success" onClick={handleAddClick}>
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