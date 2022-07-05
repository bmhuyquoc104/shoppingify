import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { useGetItem } from "../../hooks/useItems";
import ItemDetailStyled from "./ItemDetail.styled";

function ItemDetail() {
  // Get passing id from the url
  const { id } = useParams();

  // Declare navigate variable
  const navigate = useNavigate();

  //Get property from custom hook
  const { data: item, isError, error, isLoading } = useGetItem(id!);

  // Render when the data is fetching
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Render when the data is error
  if (isError) {
    return <h1>{`Error:${error}`}</h1>;
  }

  console.log(item);

  return (
    <ItemDetailStyled>
      <button className="back" onClick={() => navigate("/")}>
        <MdKeyboardBackspace />
        Back
      </button>
      <div className="main-content">
        <div className="item-image">
          <img src={item?.image} alt="item" />
        </div>
        <div className="item-detail">
          <h3>
            name
            <p className="name">{item?.name}</p>
          </h3>
          <h3>
            category
            <p>{item?.category}</p>
          </h3>
          <h3>
            note
            <p>{item?.note}</p>
          </h3>
        </div>
      </div>
      <div className="controller">
        <button className="delete">delete</button>
        <button className="add">Add to list</button>
      </div>
    </ItemDetailStyled>
  );
}

export default ItemDetail;
