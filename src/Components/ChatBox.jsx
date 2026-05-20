import { useState } from "react";

const today = new Date().toLocaleDateString("it-IT");

const ChatBox = function () {
  const [open, setOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  const [minimized, setMinimized] = useState(false);
  const [expandInput, setExpandInput] = useState(false);

  // 🔥 NEW: controllo visibilità messaggi (fix scatto)
  const [showMessages, setShowMessages] = useState(true);

  const handleToggleExpand = () => {
    if (expandInput) {
      // CHIUSURA
      setExpandInput(false);

      setTimeout(() => {
        setShowMessages(true);
      }, 250); // stessa durata animazione
    } else {
      // APERTURA
      setShowMessages(false);
      setExpandInput(true);
    }
  };

  return (
    <>
      {/* LISTA CHAT */}
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
            <img
              src="https://placecats.com/300/2002"
              alt="avatar"
              className="rounded-circle"
              style={{ width: "30px", height: "30px" }}
            />
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
            <div
              onClick={() =>
                setSelectedChat({
                  name: "Stefano Casasola",
                  avatar: "https://placehold.co/400",
                })
              }
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
          </div>
        </div>
      </div>

      {/* CHAT GRANDE */}
      {selectedChat && (
        <div
          className="position-fixed bottom-0 d-none d-md-flex flex-column bg-white shadow-lg"
          style={{
            width: minimized ? "450px" : "600px",
            height: minimized ? "300px" : "600px",
            right: "320px",
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
            zIndex: 1,
            transition: "height 0.25s ease",
          }}
        >
          {/* HEADER */}
          <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
            <div className="d-flex align-items-center gap-2">
              <img
                src={selectedChat.avatar}
                alt="avatar"
                className="rounded-circle"
                style={{ width: "40px", height: "40px" }}
              />

              <div>
                <h6 className="m-0">{selectedChat.name}</h6>
                <small className="text-success">Online</small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3">
              <i class="bi bi-three-dots"></i>
              <i
                className={`bi ${
                  minimized
                    ? "bi-arrows-angle-expand"
                    : "bi-arrows-angle-contract"
                }`}
                style={{ cursor: "pointer" }}
                onClick={() => setMinimized(!minimized)}
              ></i>

              <i
                className="bi bi-x-lg"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedChat(null)}
              ></i>
            </div>
          </div>

          {/* BODY */}
          <div className="d-flex flex-column flex-grow-1">
            {/* MESSAGGI (FIX SCATTO) */}
            {showMessages && (
              <div className="flex-grow-1 p-3 bg-light overflow-auto">
                <div className="d-flex justify-content-start mb-2">
                  <p className="bg-secondary text-light p-2 rounded shadow-sm m-0">
                    Ciao 👋
                  </p>
                </div>

                <div className="d-flex justify-content-end mb-2">
                  <p className="bg-light p-2 rounded shadow-sm m-0">
                    Tutto bene?
                  </p>
                </div>
              </div>
            )}

            {/* INPUT AREA */}
            <div
              className="border-top p-2 bg-white d-flex flex-column"
              style={{ flex: 1 }}
            >
              {/* TEXTAREA + ICONA */}
              <div className="d-flex align-items-end gap-2 flex-grow-1">
                <textarea
                  style={{
                    backgroundColor: "#f4f2ee",
                    resize: "none",
                    height: expandInput ? "450px" : "100px",
                    flex: 1,
                    transition: "height 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="form-control border-0 shadow-none pt-2"
                  placeholder="Scrivi un messaggio..."
                />

                <i
                  className={`bi ${
                    expandInput ? "bi-chevron-down" : "bi-chevron-up"
                  }`}
                  style={{ cursor: "pointer", fontSize: "18px" }}
                  onClick={handleToggleExpand}
                ></i>
              </div>
              <div className="d-flex justify-content-between align-items-center p-2 border-top bg-white">
                <div className="d-flex align-items-center gap-3">
                  <i className="bi bi-image"></i>
                  <i
                    style={{ transform: "rotate(45deg)" }}
                    className="bi bi-paperclip"
                  ></i>
                  <i class="bi bi-emoji-smile-fill"></i>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button
                    style={{ backgroundColor: "#e8e8e8" }}
                    className="btn btn-sm px-2 rounded-5 text-secondary fw-normal "
                  >
                    Invia
                  </button>
                  <i class="bi bi-three-dots"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
