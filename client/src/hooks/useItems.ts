import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getAllItems,
  getItem,
  addItem,
  deleteItem,
  getTopItemsByCondition,
  getItemByName,
} from "../api/ItemApi";

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

// Custom hook to add item
const useAddItem = () => {
  const queryClient = useQueryClient();
  return useMutation(addItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });
};

// Custom hook to delete item
const useDeleteItem = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteItem, {
    onSuccess: () => {
      queryClient.invalidateQueries(["items"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

// Custom hook to search item
const useGetItemByName = () => {
  const queryClient = useQueryClient();
  return useMutation(getItemByName, {
    onSuccess: (data) => {
      queryClient.setQueryData("items", () => {
        return data;
      });
    },
  });
};

// Custom hook to get top items by condition
const useGetTopItemsByCondition = (condition: string) => {
  const queryClient = useQueryClient();
  return useMutation(getTopItemsByCondition, {
    onSuccess: (data) => {
      queryClient.setQueryData([`top-items-by${condition}`], () => {
        return data;
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export {
  useGetAllItems,
  useGetItem,
  useAddItem,
  useDeleteItem,
  useGetItemByName,
  useGetTopItemsByCondition,
};
