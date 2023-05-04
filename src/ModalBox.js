import React from "react";

function ModalBox({ data, onClose }) {
    
    return (
      <div
        className="modal fade show"
        id={data.id}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
        
      >
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
              <label>Play Game</label>
              <a href={data.game_url} className="card-text">
                {data.game_url}
              </a>
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
                  
                </div>
    )

}

export default ModalBox;


