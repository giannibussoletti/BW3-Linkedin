import { useState } from "react";

const today = new Date().toLocaleDateString("it-IT");
const ChatBox = function () {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="position-fixed bottom-0 end-0 shadow-lg mx-2 d-none d-md-block"
        style={{
          width: "300px",
          borderRadius: "12px 12px 0 0",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <div
          onClick={() => setOpen(!open)}
          className="bg-white d-flex align-items-center justify-content-between p-2"
          style={{ cursor: "pointer" }}
        >
          <div className="d-flex align-items-center gap-2">
            {/* INSERIRE QUI IMMAGINE DEL PROPRIO PROFILO */}
            <img
              src="https://placecats.com/300/2002"
              alt="avatar"
              className="rounded-circle"
              style={{ width: "30px", height: "30px" }}
            />
            {/*^^^^^^^^ IMMAGINE DEL PROPRIO PROFILO ^^^^^ */}
            <p className="fw-semibold small m-0 p-0">Messaggistica</p>
          </div>
          <div className="d-flex gap-3 text-dark px-2">
            <i className="bi bi-three-dots"></i>
            <i className="bi bi-pencil-square"></i>
            <i
              className={`bi ${open ? "bi-chevron-down" : "bi-chevron-up"}`}
            ></i>
          </div>
        </div>
        <div
          className="bg-white border-start border-end border-bottom d-flex flex-column"
          style={{
            height: open ? "870px" : "0px",
            overflow: "hidden",
            transition: "height 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div className="input-group bg-white p-2">
            <div className="d-flex align-items-center bg-light w-100 rounded px-2">
              <i className="bi bi-search text-secondary input-group-text bg-transparent border-0 px-2"></i>
              <input
                type="text"
                className="form-control p-0 bg-transparent border-0 shadow-none"
                placeholder="Cerca messaggi"
              />

              <i className="bi bi-sliders text-secondary"></i>
            </div>
          </div>
          <div className="list-group flex-grow-1 overflow-auto">
            {/* INSERIRE QUI DATI REAL (LISTA UTENTI IN CHAT)  */}
            <div
              style={{ cursor: "pointer" }}
              className="list-group-item list-group-item-action d-flex align-items-center p-2 border-0"
            >
              <img
                src="https://placehold.co/400"
                alt="avatar"
                className="rounded-circle"
                style={{ width: "43px", height: "43px" }}
              />
              <div className="w-100 p-2 border-bottom">
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-normal m-0 text-dark">Stefano Casasola</h6>
                  <span className="text-muted small">{today}</span>
                </div>
                <p className="text-muted small p-0 m-0">
                  Ciao, Ti ho scritto riguardo al progetto!
                </p>
              </div>
            </div>
            {/*FINE LISTA UTENTI IN CHAT*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
