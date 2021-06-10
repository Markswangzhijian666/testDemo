import React from 'react'
import './modal.css'
function Modal(props){
  const handleClick = type => {
    let { onCancel, onOk } = props;
    console.log(props)
    if (type === "ok") {
      onOk && onOk();
    }else {
      onCancel && onCancel();
    }
  }
  return props.visible ? (
    <div className="modal-box">
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-container">
            {props.content ? props.content : ""}
          </div>
        </div>

        <div className="modal-footer">
          <div className="setflex">
            <button
              className="footer-btn footer-ok"
              onClick={() => handleClick("ok")}
            >
              确 定
            </button>
            <button
              className="footer-btn footer-cancel"
              onClick={() => handleClick("cancel")}
            >
              取 消
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;