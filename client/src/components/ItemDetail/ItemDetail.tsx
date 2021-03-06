import React from "react";
import { useDispatch } from "react-redux";
import { addUniqueItem } from "../../features/ItemSelected";
import { MdKeyboardBackspace } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { useDeleteItem } from "../../hooks/useItems";
import { useGetItem } from "../../hooks/useItems";
import {
  ItemDetailStyled,
  ItemDetailSkeletonStyled,
} from "./ItemDetail.styled";

function ItemDetail() {
  // Get passing id from the url
  const { id } = useParams();

  // Declare navigate variable
  const navigate = useNavigate();

  //Get property from custom hook
  const { data: item, isError, error, isLoading } = useGetItem(id!);

  // Declare dispatch to use function from reducer
  const dispatch = useDispatch();

  // Get property from custom delete hook
  const { mutate } = useDeleteItem();

  // Render when the data is error
  if (isError) {
    return <h1>{`Error:${error}`}</h1>;
  }

  console.log(item);

  return (
    <>
      {isLoading ? (
        <ItemDetailSkeletonStyled>
          <button className="back"></button>
          <div className="main-content">
            <div className="item-image"></div>
            <div className="item-detail">
              <h3></h3>
              <p></p>
              <h3></h3>
              <p></p>
              <h3></h3>
              <p className="category"></p>
            </div>
          </div>
          <div className="controller">
            <button className="delete"></button>
            <button className="add"></button>
          </div>
        </ItemDetailSkeletonStyled>
      ) : (
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
            <button
              onClick={() => {
                mutate(item?._id);
                navigate("/", { replace: true });
              }}
              className="delete"
            >
              delete
            </button>
            <button
              onClick={() => {
                navigate("/");
                dispatch(
                  addUniqueItem({
                    name: item?.name,
                    category: item?.category,
                    notes: item?.notes,
                    image: item?.image,
                    quantity: 1,
                  })
                );
              }}
              className="add"
            >
              Add to list
            </button>
          </div>
        </ItemDetailStyled>
      )}
    </>
  );
}

export default ItemDetail;
