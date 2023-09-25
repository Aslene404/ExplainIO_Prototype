import React from 'react';

const SideBar = ({ annotations }) => {
  return (
    <div style={{ overflow: "auto", height: "100vh" }}>
      <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-body-tertiary" >
        <a href="#" class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
          <span class="fs-5 fw-semibold"></span><strong>Your Selected Annotations</strong>
        </a>
        <div class="list-group list-group-flush border-bottom scrollarea">
          {annotations?.map((annotation, index) => (
            <a href="#" key={index} class="list-group-item list-group-item-action py-3 lh-sm">
              <div class="d-flex w-100 align-items-center justify-content-between">
                <strong class="mb-1">{annotation.title}</strong>
              </div>
              <div class="col-10 mb-1 small">{annotation.content}</div>
            </a>
          ))}
        </div>
      </div>
      <div class="b-example-divider b-example-vr"></div>
    </div>
  );
}

export default SideBar;
