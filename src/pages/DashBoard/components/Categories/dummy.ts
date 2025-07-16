export interface Transaction {
  id: string;
  category: string;
  amount: number;
  date: string; // ISO string
  description: string;
  type: 'expense' | 'income';
}

export interface CategorySpending {
  id: string;
  category: string;
  spendAmount: number;
  percent: number;
  color?: string;
}

// Raw transaction data (giống API response)
export const mockTransactions: Transaction[] = [
  // Current month (July 2025)
  { id: '1', category: 'Food & Dining', amount: 25.50, date: '2025-07-01T10:30:00Z', description: 'Breakfast', type: 'expense' },
  { id: '2', category: 'Food & Dining', amount: 45.80, date: '2025-07-02T12:15:00Z', description: 'Lunch', type: 'expense' },
  { id: '3', category: 'Transportation', amount: 15.75, date: '2025-07-02T08:00:00Z', description: 'Bus fare', type: 'expense' },
  { id: '4', category: 'Shopping', amount: 120.00, date: '2025-07-03T16:45:00Z', description: 'Clothing', type: 'expense' },
  { id: '5', category: 'Food & Dining', amount: 35.20, date: '2025-07-05T19:30:00Z', description: 'Dinner', type: 'expense' },
  { id: '6', category: 'Entertainment', amount: 50.00, date: '2025-07-06T20:00:00Z', description: 'Movie tickets', type: 'expense' },
  { id: '7', category: 'Transportation', amount: 80.25, date: '2025-07-08T07:30:00Z', description: 'Gas', type: 'expense' },
  { id: '8', category: 'Bills & Utilities', amount: 250.00, date: '2025-07-10T10:00:00Z', description: 'Electricity bill', type: 'expense' },
  { id: '9', category: 'Health & Fitness', amount: 65.00, date: '2025-07-12T18:00:00Z', description: 'Gym membership', type: 'expense' },
  { id: '10', category: 'Education', amount: 85.80, date: '2025-07-14T14:00:00Z', description: 'Online course', type: 'expense' },
  
  // Previous month (June 2025)
  { id: '11', category: 'Food & Dining', amount: 30.20, date: '2025-06-01T11:00:00Z', description: 'Breakfast', type: 'expense' },
  { id: '12', category: 'Food & Dining', amount: 55.10, date: '2025-06-02T13:30:00Z', description: 'Lunch', type: 'expense' },
  { id: '13', category: 'Transportation', amount: 20.00, date: '2025-06-03T08:15:00Z', description: 'Bus fare', type: 'expense' },
  { id: '14', category: 'Shopping', amount: 200.50, date: '2025-06-05T15:20:00Z', description: 'Electronics', type: 'expense' },
  { id: '15', category: 'Entertainment', amount: 75.30, date: '2025-06-08T21:00:00Z', description: 'Concert', type: 'expense' },
  // ... thêm nhiều transactions khác
];

// Helper functions để xử lý data (giống logic FE thực tế)
export const getTransactionsByMonth = (transactions: Transaction[], year: number, month: number): Transaction[] => {
  return transactions.filter(t => {
    const date = new Date(t.date);
    return date.getFullYear() === year && date.getMonth() === month - 1;
  });
};

export const calculateCategorySpending = (transactions: Transaction[]): CategorySpending[] => {
  const categoryMap = new Map<string, number>();
  const totalSpent = transactions.reduce((sum, t) => {
    if (t.type === 'expense') {
      categoryMap.set(t.category, (categoryMap.get(t.category) || 0) + t.amount);
      return sum + t.amount;
    }
    return sum;
  }, 0);

  const categories: CategorySpending[] = [];
  categoryMap.forEach((amount, category) => {
    categories.push({
      id: Math.random().toString(),
      category,
      spendAmount: amount,
      percent: (amount / totalSpent) * 100,
      color: getCategoryColor(category)
    });
  });

  return categories.sort((a, b) => b.spendAmount - a.spendAmount);
};

const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'Food & Dining': '#FF6B6B',
    'Transportation': '#4ECDC4',
    'Shopping': '#45B7D1',
    'Entertainment': '#96CEB4',
    'Bills & Utilities': '#FFEAA7',
    'Health & Fitness': '#DDA0DD',
    'Education': '#F8B500',
    'Others': '#B0B0B0'
  };
  return colors[category] || '#B0B0B0';
};

// Usage examples
export const getCurrentMonthData = (): CategorySpending[] => {
  const currentTransactions = getTransactionsByMonth(mockTransactions, 2025, 7);
  return calculateCategorySpending(currentTransactions);
};

export const getPreviousMonthData = (): CategorySpending[] => {
  const previousTransactions = getTransactionsByMonth(mockTransactions, 2025, 6);
  return calculateCategorySpending(previousTransactions);
};

export const getComparisonChartData = () => {
  const currentData = getCurrentMonthData();
  const previousData = getPreviousMonthData();
  
  return currentData.map(current => {
    const previous = previousData.find(p => p.category === current.category);
    return {
      category: current.category,
      currentMonth: current.spendAmount,
      previousMonth: previous?.spendAmount || 0,
      color: current.color,
      changePercent: previous ? ((current.spendAmount - previous.spendAmount) / previous.spendAmount) * 100 : 0
    };
  });
};
export const getUniqueCategories = (transactions: Transaction[]): string[] => {
  const uniqueCategories = [...new Set(transactions.map(t => t.category))];
  return uniqueCategories;
};