import React from "react";

function ModalBox({ data, onClose }) {
  function handleClick() {
    window.location.href = data.game_url;
  }
  
    return (
    
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                {data.title}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img
                className="card-img-bottom"
                src={data.thumbnail}
                alt={data.title}
                style={{width:650}}
              />
              <label>Description</label>
              <p className="card-text">{data.short_description}</p>
              <label>Genre</label>
              <p>{data.genre}</p>
              <div>
                <label>Free to Game Profile</label>
              <p className="card-text">{data.freetogame_profile_url}</p>
                </div>  
              
              <label>Platform</label>
              <p className="card-text">{data.platform}</p>
              <label>Publisher</label>
              <p className="card-text">{data.publisher}</p>
              <label>Developer</label>
              <p className="card-text">{data.developer}</p>
              <label>Release Date</label>
              <p className="card-text">{data.release_date}</p>
            </div>
            <div className="modal-footer">
            <button onClick={handleClick}>Play Game</button>

              
              <button
                type="button"
                className="btn btn-default"
                id="close-btn"
                data-dismiss="modal"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
    )

}

export default ModalBox;


