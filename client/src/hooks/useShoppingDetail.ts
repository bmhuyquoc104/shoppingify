import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllShoppingDetails,
  getShoppingDetail,
  addNewShoppingDetail,
} from "../api/ShoppingDetailApi";

// Custom hook for get all shopping details
const useGetAllShoppingDetails = () => {
  return useQuery(["shopping-details"], getAllShoppingDetails, {
    onSuccess: (data) => {
      console.log(data);
      console.log("Fetch successfully!");
    },
    onError: (error) => {
      console.log("Fail to get data");
      console.log(error);
    },
  });
};

// Custom hook to get shopping detail by id
const useGetShoppingDetailById = (id: string) => {
  return useQuery(["shopping-detail", id], () => getShoppingDetail(id), {
    enabled: Boolean(id),
    onSuccess: (data) => {
      console.log("Fetch successfully!");
      console.log(data);
    },
    onError: (error) => {
      console.log("Fail to get data");
      console.log(error);
    },
  });
};

// Custom hook to add new shopping detail
const useAddNewShoppingDetail = () => {
  const queryClient = useQueryClient();
  return useMutation(addNewShoppingDetail, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export {
  useAddNewShoppingDetail,
  useGetAllShoppingDetails,
  useGetShoppingDetailById,
};
