import ReactDOM from "react-dom";

const Backdrop = ({ onClick }) => {
  const content = (
    <div
      className="fixed w-screen h-screen bg-black/50 z-40 top-0 left-0"
      onClick={onClick}
    ></div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;
