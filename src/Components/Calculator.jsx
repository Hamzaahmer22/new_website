import React from "react";
import {useState} from "react";
import Card from './Ui/Card'

const Calculator = () => {
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [initialDeposit, setInitialDeposit] = useState(0);
    const [loanPeriod, setLoanPeriod] = useState(0);
    const [estimatedLoan, setEstimatedLoan] = useState(null);
  
    const calculateLoan = () => {
      const maxLoan = category === 'Wedding' ? 500000 : category === 'Home Construction' ? 1000000 : 0;
      const loanAmount = maxLoan - initialDeposit;
      setEstimatedLoan(loanAmount);
    };
  
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Loan Calculator</h1>
        <div className="mb-4">
          <label>Category:</label>
          <select
            className="border p-2 w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Wedding">Wedding</option>
            <option value="Home Construction">Home Construction</option>
            <option value="Business Startup">Business Startup</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Subcategory:</label>
          <input
            className="border p-2 w-full"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label>Initial Deposit:</label>
          <input
            type="number"
            className="border p-2 w-full"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label>Loan Period (Years):</label>
          <input
            type="number"
            className="border p-2 w-full"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(Number(e.target.value))}
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={calculateLoan}>
          Calculate
        </button>
        {estimatedLoan !== null && (
          <div className="mt-4">
            <h2 className="text-lg">Estimated Loan: PKR {estimatedLoan}</h2>
          </div>
        )}
      </div>
    );
  };
  
  export default Calculator;