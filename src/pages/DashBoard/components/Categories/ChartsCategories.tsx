import ReactEcharts from "echarts-for-react";
import { getComparisonChartData } from "./dummy";

const ChartsCategories = () => {
  const comparisonData = getComparisonChartData();
  
  const options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: function(params: any) {
        let result = `<strong>${params[0].name}</strong><br/>`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        params.forEach((param: any) => {
          result += `${param.marker} ${param.seriesName}: $${param.value}<br/>`;
        });
        return result;
      }
    },
    legend: {
      data: ['Previous Month', 'Current Month'],
      bottom: 0,
      textStyle: {
        color: 'var(--text-secondary)',
        fontSize: 12
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      top: '0',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        color: 'var(--text-secondary)',
        fontSize: 12,
        formatter: '${value}'
      },
      axisLine: {
        lineStyle: {
          color: 'var(--border-tertiary)'
        }
      },
      splitLine: {
        lineStyle: {
          color: 'var(--border-tertiary)',
          type: 'dashed'
        }
      }
    },
    yAxis: {
      type: 'category',
      data: comparisonData.map(item => item.category),
      axisLabel: {
        color: 'var(--text-secondary)',
        fontSize: 12,
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: 'var(--border-tertiary)'
        }
      }
    },
    series: [
      {
        name: 'Previous Month',
        type: 'bar',
        data: comparisonData.map(item => ({
          value: item.previousMonth,
          itemStyle: {
            color: item.color,
            opacity: 0.7
          }
        })),
        barWidth: '35%'
      },
      {
        name: 'Current Month',
        type: 'bar',
        data: comparisonData.map(item => ({
          value: item.currentMonth,
          itemStyle: {
            color: item.color
          }
        })),
        barWidth: '35%'
      }
    ]
  };
  
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactEcharts 
        option={options} 
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default ChartsCategories;
