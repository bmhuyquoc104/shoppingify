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
  const onSubmit = (data: any, e: any) => {
    data = { ...data, category: categoryChosen };
    mutate(data);
    reset();
  };

  //Declare type for form
  type FormValue = {
    name: string;
    note: string;
    image: string;
    category: string;
  };

  // Declare a schema
  const schema = yup
    .object()
    .shape({
      name: yup.string().required("Please do not leave this field blank"),
      image: yup.string().required("Please do not leave this field blank"),
      category:yup.string().required("Please do not leave this field blank"),
      note: yup.string(),
    })
    .required();

  // Declare default value for the form
  const defaultFormValue: Item = {
    name: "",
    image: "",
    note: "",
    category: "",
  };

  // Declare properties to use from the useForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValue>({
    defaultValues: defaultFormValue,
    mode: "onSubmit",
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
          <input
            id="name"
            type="text"
            placeholder="Enter a name"
            {...register("name")}
          />
          {errors?.name && <p className="error">{errors.name.message}</p>}
        </div>
        <div className="note">
          <label htmlFor="note">Note (optional)</label>
          <input
            id="note"
            type="text"
            placeholder="Enter a note"
            {...register("note")}
          />
        </div>
        <div className="image">
          <label className="control-label" htmlFor="image">
            Image
          </label>
          <input
            id="image"
            type="text"
            {...register("image")}
            placeholder="Enter a url"
          />
          {errors?.image && <p className = "error">{errors.image.message}</p>}
        </div>
        <div className="category">
          <label htmlFor="category">Category</label>
          <div>
            <input
              id="category"
              value={categoryChosen}
              onClick={() => setIsToggleCategory(true)}
              placeholder="Choose a category"
              {...register("category")}
            />
            {isToggleCategory && (
              <IoMdClose className = "icon-close" onClick={() => setIsToggleCategory(false)} />
            )}
          </div>

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

          {errors?.category && <p className="error">{errors.category.message}</p>}
        </div>
      </div>

      <div className="controller">
        <button onClick={() => navigate("/")} className="cancel">
          cancel
        </button>
        <button className="save" type="submit">
          Save & Send
        </button>
      </div>
    </FormStyled>
  );
}

export default Form;
