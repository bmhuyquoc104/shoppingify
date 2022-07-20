import { useQueryClient } from "react-query";
import React, { useEffect } from "react";
import { useGetMonthlySaleByYear } from "../../hooks/useItems";

function ChartSection() {
  const queryClient = useQueryClient();
  const { mutate } = useGetMonthlySaleByYear();
  useEffect(() => {
    const year = { year: 2022 };
    mutate(year);
  }, []);
  const arr = queryClient.getQueryData([`sale-monthly-items`]);
  console.log(arr);
  return <div>ChartSection</div>;
}

export default ChartSection;
