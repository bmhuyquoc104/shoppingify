import { useQuery } from "react-query";
import { getAllItems } from "../api/ItemApi";

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

export { useGetAllItems };
