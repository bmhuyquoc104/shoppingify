import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ToggleContext } from "../../hooks/useToggleContext";
import CancelStyled from "./Cancel.styled";

function Cancel() {
  const { setIsToggleCancel } = useContext(ToggleContext);
  return (
    <CancelStyled>
      <MdClose onClick={() => setIsToggleCancel(false)} className="close" />
      <p>Are you sure that you want to cancel this list?</p>
      <div className="controller">
        <button onClick={() => setIsToggleCancel(false)} className="cancel">
          cancel
        </button>
        <button className="yes">Yes</button>
      </div>
    </CancelStyled>
  );
}

export default Cancel;
