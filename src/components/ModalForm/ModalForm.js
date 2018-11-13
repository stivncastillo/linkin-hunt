import React from 'react';

const ModalForm = props => {
  return (
    <div className={`modal ${props.active && 'is-active'}`}>
      <div className="modal-background" onClick={props.onClose} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={props.onClose} />
        </header>
        <section className="modal-card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum natus necessitatibus libero. Quis
            tenetur, aperiam numquam, fugiat qui ipsam magnam iusto placeat beatae, facilis esse maxime deleniti.
            Maiores, provident?
          </p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={props.onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ModalForm;
