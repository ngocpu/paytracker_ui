import ReactEcharts from "echarts-for-react";
import { getDailyChartData } from "./dummy";
import './index.less';

const ChartSummary = () => {
  const chartData = getDailyChartData();

  const options = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "var(--bg-tertiary)",
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: function (params: any) {
        let result = `<strong>Day ${params[0].name}</strong><br/>`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        params.forEach((param: any) => {
          const value = param.value;
          const formattedValue = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(value);
          result += `${param.marker} ${param.seriesName}: ${formattedValue}<br/>`;
        });
        return result;
      },
    },
    legend: {
      data: ["Income", "Expense"],
      top: 10,
      textStyle: {
        color: "var(--text-secondary)",
        fontSize: 12,
      },
      itemGap: 30,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: chartData.map((item) => item.date),
      axisLabel: {
        color: "var(--text-secondary)",
        fontSize: 11,
        interval: "auto",
      },
      axisLine: {
        lineStyle: {
          color: "var(--border-tertiary)",
        },
      },
      splitLine: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "var(--text-secondary)",
        fontSize: 11,
        formatter: function (value: number) {
          if (value >= 1000000) {
            return (value / 1000000).toFixed(1) + "M";
          } else if (value >= 1000) {
            return (value / 1000).toFixed(1) + "K";
          }
          return value.toString();
        },
      },
      axisLine: {
        lineStyle: {
          color: "var(--border-tertiary)",
        },
      },
      splitLine: {
        lineStyle: {
          color: "var(--border-tertiary)",
          type: "dashed",
          opacity: 0.5,
        },
      },
    },
    series: [
      {
        name: "Income",
        type: "line",
        smooth: true,
        data: chartData.map((item) => item.income),
        lineStyle: {
          color: "#388e3c",
          width: 2,
        },
        itemStyle: {
          color: "#388e3c",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(56, 142, 60, 0.3)",
              },
              {
                offset: 1,
                color: "rgba(56, 142, 60, 0.05)",
              },
            ],
          },
        },
        symbol: "circle",
        symbolSize: 6,
        showSymbol: false,
        emphasis: {
          showSymbol: true,
          symbolSize: 8,
        },
      },
      {
        name: "Expense",
        type: "line",
        smooth: true,
        data: chartData.map((item) => item.expense),
        lineStyle: {
          color: "#d32f2f",
          width: 2,
        },
        itemStyle: {
          color: "#d32f2f",
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(211, 47, 47, 0.3)",
              },
              {
                offset: 1,
                color: "rgba(211, 47, 47, 0.05)",
              },
            ],
          },
        },
        symbol: "circle",
        symbolSize: 6,
        showSymbol: false,
        emphasis: {
          showSymbol: true,
          symbolSize: 8,
        },
      },
    ],
  };

  return (
    <div className="summary-container bg-primary">
      <div style={{ width: "100%", height: "350px" }}>
        <ReactEcharts
          option={options}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default ChartSummary;
