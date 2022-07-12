import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { ToggleContext } from "../../../hooks/useToggleContext";
import WarningStyled from "./Warning.styled";

type WarningProps = {
  type?: string;
};

function Warning({ type }: WarningProps) {
  const { setIsToggleWarning } = useContext(ToggleContext);

  return (
    <WarningStyled>
      <MdClose
        onClick={() => {
          setIsToggleWarning(false);
        }}
        className="close"
      />

      {type === "isEmptyName" ? (
        <p>
          Please enter the name in the edit mode before complete or cancel this
          current shopping list?
        </p>
      ) : (
        <p>
          Please add at least one item in the edit mode before complete or
          cancel this current shopping list?
        </p>
      )}
    </WarningStyled>
  );
}

export default Warning;
