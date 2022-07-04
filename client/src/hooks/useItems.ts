import { useQuery } from "react-query";
import { getAllItems, getItem } from "../api/ItemApi";

// Custom hook to fetch all items
const useGetAllItems = () => {
  return useQuery(["items"], getAllItems, {
    onSuccess: () => {
      console.log("Fetch successfully");
    },
    onError: () => {
      console.log("Error fetching items");
    },
  });
};

// Custom hook get one item
const useGetItem = (id: string) => {
  return useQuery(["items", id], () => getItem(id), {
    onSuccess: () => {
      console.log("Get item successfully");
    },
    onError: () => {
      console.log("Fail to get item");
    },
    enabled: Boolean(id),
  });
};

export { useGetAllItems, useGetItem };
