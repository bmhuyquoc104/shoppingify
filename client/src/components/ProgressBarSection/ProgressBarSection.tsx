import { useQueryClient } from "react-query";
import { useEffect } from "react";
import { useGetTopItemsByCondition } from "../../hooks/useItems";
import ProgressBar from "./ProgressBar/ProgressBar";
import ProgressBarSectionStyled from "./ProgressBarSection.styled";

function ProgressBarSection() {
  // Get the mutate property from the custom hook
  const { mutate: categoryMutate } = useGetTopItemsByCondition("Category");
  const { mutate: nameMutate } = useGetTopItemsByCondition("Name");

  // use effect to mutate
  useEffect(() => {
    const category = { field: "category" };
    const name = { field: "name" };
    categoryMutate(category);
    nameMutate(name);
  }, []);

  // Declare queryClient
  const queryClient = useQueryClient();

  // Initialize 2 arrays to store the data
  const categoryArr: any = queryClient.getQueryData("top-items-byCategory");
  const nameArr: any = queryClient.getQueryData("top-items-byName");
  console.log(nameArr);

  return (
    <ProgressBarSectionStyled>
      <div className="container">
        <h2>Top items</h2>
        {nameArr?.map((element: any) => (
          <div className="item" key={element?.name}>
            <div className="title">
              <h3 className = "name">{element?.item?.name}</h3>
              <h3 className = "percentage">{element?.percentage}%</h3>
            </div>
            <ProgressBar
              completed={`${element?.percentage}%`}
              bgColor="#f9a109"
            />
          </div>
        ))}
      </div>
      <div className="container">
        <h2>Top Categories</h2>
        {categoryArr?.map((element: any) => (
          <div className="item" key={element?.name}>
            <div className="title">
              <h3 className = "name">{element?.item?.name}</h3>
              <h3 className = "percentage">{element?.percentage}%</h3>
            </div>
            <ProgressBar
              completed={`${element?.percentage}%`}
              bgColor="#56ccf2"
            />
          </div>
        ))}
      </div>
    </ProgressBarSectionStyled>
  );
}

export default ProgressBarSection;
