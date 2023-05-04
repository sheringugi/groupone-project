import React, { useState } from "react";
import ModalBox from "./ModalBox";

function GameCard({ data }) {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  return (

    <div class="card">
      <div class="container">
        <img onClick={handleClick} src={data.thumbnail} alt={data.title} />
      </div>
      <div id="myModal" class="modal">
        {showModal && <ModalBox data={data} onClose={handleClose} />}
      </div>
      
    </div>

  
  );
}

export default GameCard;
