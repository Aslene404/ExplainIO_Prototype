import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function AnnotationModal({ show, onClose, title, content }) {
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
              <input type="text" className="form-control" id="recipient-name" />
            </div>
            <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">
                Saved Script
              </label>
              <textarea className="form-control"  defaultValue={content} id="message-text"></textarea>
            </div>
          </form>
            </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-primary">Add annotation</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AnnotationModal;

