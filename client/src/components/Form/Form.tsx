import { useNavigate } from "react-router-dom";
import FormStyled from "./Form.styled";

function Form() {
  const navigate = useNavigate();
  return (
    <FormStyled>
      <div className="title">
        <h2>Add a new item</h2>
      </div>

      <div className="form-content">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter a name" />
        </div>
        <div className="note">
          <label htmlFor="note">Note (optional)</label>
          <input type="text" placeholder="Enter a note" />
        </div>
        <div className="image">
          <label htmlFor="image">Image</label>
          <input type="text" placeholder="Enter a url" />
        </div>
        <div className="category">
          <label htmlFor="category">Category</label>
          <select defaultValue={"Enter a category"}>
            <option value="Enter a category" disabled>
              Enter a category
            </option>
            <option value="Fruit and vegetables">Fruit and vegetables</option>
            <option value="Meat and Fish">Meat and Fish</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>
      </div>

      <div className="controller">
        <button onClick={() => navigate("/")} className="cancel">
          cancel
        </button>
        <button className="save">Save</button>
      </div>
    </FormStyled>
  );
}

export default Form;
