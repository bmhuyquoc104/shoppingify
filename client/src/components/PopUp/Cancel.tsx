import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ToggleContext } from "../../hooks/useToggleContext";
import CancelStyled from "./Cancel.styled";
import { useSelector, useDispatch } from "react-redux";
import { useAddNewShoppingDetail } from "../../hooks/useShoppingDetail";
import { addStatus } from "../../features/ShoppingDetail";

type CancelProps = {
  type?: string;
};

function Cancel({ type }: CancelProps) {
  const { setIsToggleCancel, setIsToggleWarning } = useContext(ToggleContext);
  const shoppingDetail = useSelector((state: any) => state.shoppingDetail);
  const { mutate } = useAddNewShoppingDetail();
  const dispatch = useDispatch();
  const handleCancel = () => {
    if (shoppingDetail.shoppingDetailName == "") {
      setIsToggleWarning(true);
      setIsToggleCancel(false);
    } else if (shoppingDetail.items.length <= 0) {
      setIsToggleWarning(true);
      setIsToggleCancel(false);
    } else {
      mutate(shoppingDetail);
      setIsToggleCancel(false);
    }
  };
  return (
    <CancelStyled>
      {type === "warning" ? (
        <MdClose
          onClick={() => {
            setIsToggleCancel(false);
          }}
          className="close"
        />
      ) : (
        <MdClose
          onClick={() => {
            setIsToggleCancel(false);
            dispatch(addStatus("completed"));
          }}
          className="close"
        />
      )}
      {type === "warning" ? (
        <p>
          Please enter the name in the edit mode before complete or cancel this
          current shopping list?
        </p>
      ) : (
        <p>Are you sure that you want to cancel this list?</p>
      )}
      {type === "warning" ? null : (
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
      )}
    </CancelStyled>
  );
}

export default Cancel;
