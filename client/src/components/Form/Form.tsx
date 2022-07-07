import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormStyled from "./Form.styled";
import { Item } from "../../models/Item";
import { useAddItem } from "../../hooks/useItems";

function Form() {
  // Declare navigate for routing
  const navigate = useNavigate();
  // Declare property for useAddItem hook
  const { mutate } = useAddItem();

  // Declare function when submit the form
  const onSubmit = (data: any,e:any) => {
    e.preventDefault();
    console.log(data);
    console.log("cho sir")
  };
  // Declare a schema
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Please do not leave this field blank"),
      category: yup.string().required("Please do not leave this field blank"),
      image: yup.string().required("Please do not leave this field blank"),
      note: yup.string(),
    })
    .required();

  // Declare default value for the form
  const defaultValue: Item = {
    name: "",
    image: "",
    note: "",
    category: "",
  };

  // Declare properties to use from the useForm
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid, isDirty },
    reset,
  } = useForm({
    defaultValues: defaultValue,
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });

  // Declare state to check whether the others option is checked
  const [isToggleOther, setIsToggleOther] = useState(false);

  // Declare state to check whether the  drop down category is checked
  const [isToggleCategory, setIsToggleCategory] = useState(false);

  // Declare state to watch category field
  const [categoryChosen, setCategoryChosen] = useState("Choose a category");

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <div className="title">
        <h2>Add a new item</h2>
      </div>

      <div className="form-content">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter a name" {...register("name")} />
        </div>
        <div className="note">
          <label htmlFor="note">Note (optional)</label>
          <input type="text" placeholder="Enter a note" {...register("note")} />
        </div>
        <div className="image">
          <label htmlFor="image">Image</label>
          <input type="text" {...register("image")} placeholder="Enter a url" />
        </div>
        <h3 onClick={() => setIsToggleCategory(true)}>Category</h3>
        <div className="category">
          <p onClick={() => setIsToggleCategory(true)}> {categoryChosen}</p>
          {isToggleCategory && (
            <IoMdClose onClick={() => setIsToggleCategory(false)} />
          )}
          {isToggleCategory && (
            <div className="options">
              <ul>
                <li
                  onClick={() => {
                    setIsToggleOther(false);
                    setCategoryChosen("Fruit and vegetables");
                  }}
                >
                  Fruit and vegetables
                </li>
                <li
                  onClick={() => {
                    setIsToggleOther(false);
                    setCategoryChosen("Meat and Fish");
                  }}
                >
                  Meat and Fish
                </li>
                <li
                  onClick={() => {
                    setIsToggleOther(false);
                    setCategoryChosen("Beverages");
                  }}
                >
                  Beverages
                </li>
                <li onClick={() => setIsToggleOther(!isToggleOther)}>Others</li>
                {isToggleOther && (
                  <input
                    className="input-category"
                    type="text"
                    placeholder="Enter your category"
                    onChange={(e) => setCategoryChosen(e.target.value)}
                  />
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="controller">
        <button onClick={() => navigate("/")} className="cancel">
          cancel
        </button>
        <button type="submit" className="save">
          Save
        </button>
      </div>
    </FormStyled>
  );
}

export default Form;
