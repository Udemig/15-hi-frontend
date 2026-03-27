const Modal = ({ isOpen, close, children }) => {
  //isOpen prop'u false ise ekrana hiçbir şey basma
  if (isOpen === false) return;

  return (
    <div className="modal show fade d-block bg-dark bg-opacity-75">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" onClick={close}></button>
          </div>

          <div className="modal-body">
            <p>{children}</p>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              İptal
            </button>
            <button type="button" className="btn btn-primary">
              Onayla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
