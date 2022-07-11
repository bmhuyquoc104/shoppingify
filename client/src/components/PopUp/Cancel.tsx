import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ToggleContext } from "../../hooks/useToggleContext";
import CancelStyled from "./Cancel.styled";
import { useSelector, useDispatch } from "react-redux";
import { useAddNewShoppingDetail } from "../../hooks/useShoppingDetail";
import { addStatus } from "../../features/ShoppingDetail";

function Cancel() {
  const { setIsToggleCancel } = useContext(ToggleContext);
  const shoppingDetail = useSelector((state: any) => state.shoppingDetail);
  const { mutate } = useAddNewShoppingDetail();
  const dispatch = useDispatch();
  const handleCancel = () => {
    mutate(shoppingDetail);
    setIsToggleCancel(false);
  };
  return (
    <CancelStyled>
      <MdClose
        onClick={() => {
          setIsToggleCancel(false);
          dispatch(addStatus("completed"));
        }}
        className="close"
      />
      <p>Are you sure that you want to cancel this list?</p>
      <div className="controller">
        <button
          onClick={() => {
            setIsToggleCancel(false);
            dispatch(addStatus("completed"));
          }}
          className="cancel"
        >
          cancel
        </button>
        <button onClick={handleCancel} className="yes">
          Yes
        </button>
      </div>
    </CancelStyled>
  );
}

export default Cancel;
