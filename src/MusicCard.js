import React, { useState } from "react";
import ModalBox from "./ModalBox";

function MusicCard({ data }) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <div key={data.id} data={data}>
        <h2>{data.title}</h2>
        <img src={data.thumbnail} alt={data.title} />
        <button
          onClick={handleClick}
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#${data.id}`}
        >
          View Details
        </button>
      </div>
      {showModal && <ModalBox data={data} onClose={handleClose} />}
    </>
  );
}

export default MusicCard;
