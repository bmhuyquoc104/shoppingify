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
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
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
        label: "Dataset 1",
        data: dataL,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <ChartSectionStyled>
      <Line options={options} data={data} />
    </ChartSectionStyled>
  );
}

export default ChartSection;
