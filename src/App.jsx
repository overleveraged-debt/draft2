import React, { useState } from 'react';
// ... other imports ...

const App = () => {
  // Initialize all state variables properly
  const [page, setPage] = useState(1);
  const [debts, setDebts] = useState([{
    type: 'loan',
    balance: '',
    interestRate: '',
    minimumPayment: '',
    prepaymentFee: '',
    paymentOption: 'emi'
  }]);
  const [consolidationInterestRate, setConsolidationInterestRate] = useState(12);
  const [additionalFees, setAdditionalFees] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [totalMonthlyPayment, setTotalMonthlyPayment] = useState(0);
  const [consolidatedMonthlyPayment, setConsolidatedMonthlyPayment] = useState(0);
  const [savings, setSavings] = useState(0);
  const [totalPrepaymentFees, setTotalPrepaymentFees] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  const [debtFreeDate, setDebtFreeDate] = useState('');
  const [consolidatedDebtFreeDate, setConsolidatedDebtFreeDate] = useState('');
  const [averageInterestRate, setAverageInterestRate] = useState(0);
  const [weightedAverageInterestRate, setWeightedAverageInterestRate] = useState(0);
  const [debtToIncomeRatio, setDebtToIncomeRatio] = useState(0);
  const [consolidatedDebtToIncomeRatio, setConsolidatedDebtToIncomeRatio] = useState(0);
  const [optimalTenure, setOptimalTenure] = useState(60);
  const [isAffordable, setIsAffordable] = useState(false);
  const [financialHealth, setFinancialHealth] = useState('');
  const [totalInterestWithoutConsolidation, setTotalInterestWithoutConsolidation] = useState(0);
  const [totalInterestWithConsolidation, setTotalInterestWithConsolidation] = useState(0);
  const [financialHealthRecommendation, setFinancialHealthRecommendation] = useState('');
  const [selectedTenure, setSelectedTenure] = useState(60);

  // ... rest of the component code ...
};

export default App;
