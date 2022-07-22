import { useQueryClient } from "react-query";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { formatDateFromNumber } from "../../helpers/formatDate";
import React, { useEffect } from "react";
import { useGetMonthlySaleByYear } from "../../hooks/useItems";
import ChartSectionStyled from "./ChartSection.styled"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartSection() {
  const queryClient = useQueryClient();
  const { mutate } = useGetMonthlySaleByYear();
  useEffect(() => {
    const year = { year: 2022 };
    mutate(year);
  }, []);
  const arr: any = queryClient.getQueryData([`sale-monthly-items`]);

  const month = formatDateFromNumber(2);
  console.log(month);

  const options = {
    responsive: true, 
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  const labels = arr
    ?.map((element: any) => formatDateFromNumber(element.month))
    .reverse();
  const dataL = arr?.map((element: any) => element.total).reverse();
  console.log(labels);
  console.log(dataL);
  console.log(arr);
  const data = {
    labels,
    datasets: [
      {
        label: "items",
        lineTension:0.8,
        data: dataL,
        borderColor: "#F9A109",
        backgroundColor: "#F9A109",
      },
    ],
  };
  return (
    <ChartSectionStyled>
     <h2>Monthly Summary</h2>
      <Line height = {120} options={options} data={data} />
    </ChartSectionStyled>
  );
}

export default ChartSection;
