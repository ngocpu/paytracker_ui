export interface DailyTransaction {
  date: string; // YYYY-MM-DD format
  income: number;
  expense: number;
  net: number; // income - expense
}

export interface MonthlyChartData {
  date: string;
  income: number;
  expense: number;
  net: number;
}

// Dummy data for July 2025 - Daily income and expense
export const monthlyTransactionData: DailyTransaction[] = [
  { date: '2025-07-01', income: 0, expense: 85.50, net: -85.50 },
  { date: '2025-07-02', income: 150.00, expense: 45.80, net: 104.20 },
  { date: '2025-07-03', income: 0, expense: 120.00, net: -120.00 },
  { date: '2025-07-04', income: 75.00, expense: 35.20, net: 39.80 },
  { date: '2025-07-05', income: 2500.00, expense: 250.00, net: 2250.00 }, // Salary day
  { date: '2025-07-06', income: 0, expense: 50.00, net: -50.00 },
  { date: '2025-07-07', income: 200.00, expense: 80.25, net: 119.75 }, // Freelance work
  { date: '2025-07-08', income: 0, expense: 95.75, net: -95.75 },
  { date: '2025-07-09', income: 0, expense: 125.40, net: -125.40 },
  { date: '2025-07-10', income: 300.00, expense: 165.00, net: 135.00 }, // Side income
  { date: '2025-07-11', income: 0, expense: 65.80, net: -65.80 },
  { date: '2025-07-12', income: 0, expense: 85.20, net: -85.20 },
  { date: '2025-07-13', income: 0, expense: 110.50, net: -110.50 },
  { date: '2025-07-14', income: 180.00, expense: 95.30, net: 84.70 }, // Part-time work
  { date: '2025-07-15', income: 0, expense: 75.40, net: -75.40 },
  { date: '2025-07-16', income: 0, expense: 135.60, net: -135.60 },
  { date: '2025-07-17', income: 220.00, expense: 88.90, net: 131.10 }, // Consulting work
  { date: '2025-07-18', income: 0, expense: 45.30, net: -45.30 },
  { date: '2025-07-19', income: 0, expense: 155.80, net: -155.80 },
  { date: '2025-07-20', income: 2500.00, expense: 200.00, net: 2300.00 }, // Salary day
  { date: '2025-07-21', income: 0, expense: 92.45, net: -92.45 },
  { date: '2025-07-22', income: 150.00, expense: 78.20, net: 71.80 }, // Bonus
  { date: '2025-07-23', income: 0, expense: 115.70, net: -115.70 },
  { date: '2025-07-24', income: 0, expense: 68.40, net: -68.40 },
  { date: '2025-07-25', income: 0, expense: 145.90, net: -145.90 },
  { date: '2025-07-26', income: 250.00, expense: 102.30, net: 147.70 }, // Investment return
  { date: '2025-07-27', income: 0, expense: 89.60, net: -89.60 },
  { date: '2025-07-28', income: 0, expense: 125.80, net: -125.80 },
  { date: '2025-07-29', income: 100.00, expense: 95.40, net: 4.60 }, // Cash back
  { date: '2025-07-30', income: 0, expense: 135.20, net: -135.20 },
  { date: '2025-07-31', income: 180.00, expense: 105.50, net: 74.50 } // Month-end freelance
];

// Function to get weekly aggregated data
export const getWeeklyData = (): MonthlyChartData[] => {
  const weeks = [
    { week: 'Week 1', startDate: '2025-07-01', endDate: '2025-07-07' },
    { week: 'Week 2', startDate: '2025-07-08', endDate: '2025-07-14' },
    { week: 'Week 3', startDate: '2025-07-15', endDate: '2025-07-21' },
    { week: 'Week 4', startDate: '2025-07-22', endDate: '2025-07-28' },
    { week: 'Week 5', startDate: '2025-07-29', endDate: '2025-07-31' }
  ];

  return weeks.map(week => {
    const weekData = monthlyTransactionData.filter(
      item => item.date >= week.startDate && item.date <= week.endDate
    );
    
    const totalIncome = weekData.reduce((sum, item) => sum + item.income, 0);
    const totalExpense = weekData.reduce((sum, item) => sum + item.expense, 0);
    
    return {
      date: week.week,
      income: totalIncome,
      expense: totalExpense,
      net: totalIncome - totalExpense
    };
  });
};

// Function to get daily data formatted for line chart
export const getDailyChartData = (): MonthlyChartData[] => {
  return monthlyTransactionData.map(item => ({
    date: new Date(item.date).getDate().toString(), // Just day number
    income: item.income,
    expense: item.expense,
    net: item.net
  }));
};

// Function to get cumulative data (running totals)
export const getCumulativeData = (): MonthlyChartData[] => {
  let cumulativeIncome = 0;
  let cumulativeExpense = 0;
  
  return monthlyTransactionData.map(item => {
    cumulativeIncome += item.income;
    cumulativeExpense += item.expense;
    
    return {
      date: new Date(item.date).getDate().toString(),
      income: cumulativeIncome,
      expense: cumulativeExpense,
      net: cumulativeIncome - cumulativeExpense
    };
  });
};

// Function to get monthly summary
export const getMonthlySummary = () => {
  const totalIncome = monthlyTransactionData.reduce((sum, item) => sum + item.income, 0);
  const totalExpense = monthlyTransactionData.reduce((sum, item) => sum + item.expense, 0);
  const netAmount = totalIncome - totalExpense;
  
  const avgDailyIncome = totalIncome / monthlyTransactionData.length;
  const avgDailyExpense = totalExpense / monthlyTransactionData.length;
  
  const daysWithIncome = monthlyTransactionData.filter(item => item.income > 0).length;
  const daysWithExpense = monthlyTransactionData.filter(item => item.expense > 0).length;
  
  return {
    totalIncome,
    totalExpense,
    netAmount,
    avgDailyIncome,
    avgDailyExpense,
    daysWithIncome,
    daysWithExpense,
    totalDays: monthlyTransactionData.length
  };
};

// Function to get data for specific date range
export const getDataByDateRange = (startDate: string, endDate: string): MonthlyChartData[] => {
  return monthlyTransactionData
    .filter(item => item.date >= startDate && item.date <= endDate)
    .map(item => ({
      date: new Date(item.date).getDate().toString(),
      income: item.income,
      expense: item.expense,
      net: item.net
    }));
};

// Helper function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount);
};

// Helper function to format date for display
export const formatDateForDisplay = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};
