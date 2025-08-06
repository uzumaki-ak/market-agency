"use client";
import { useState } from "react";

export default function EmiCalculator() {
  // Define state variables with proper TypeScript types
  const [loanAmount, setLoanAmount] = useState<string>("");
  const [interestRate, setInterestRate] = useState<string>("");
  const [tenure, setTenure] = useState<string>("");
  const [emi, setEmi] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);
  const [totalPayment, setTotalPayment] = useState<number | null>(null);

  // Function to calculate EMI
  const calculateEMI = (): void => {
    if (!loanAmount || !interestRate || !tenure) return;

    const P: number = parseFloat(loanAmount);
    const r: number = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const n: number = parseInt(tenure) * 12; // Convert years to months

    if (r === 0) return; // Avoid division by zero

    const emiValue: number = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPay: number = emiValue * n;
    const totalInt: number = totalPay - P;

    setEmi(parseFloat(emiValue.toFixed(2)));
    setTotalInterest(parseFloat(totalInt.toFixed(2)));
    setTotalPayment(parseFloat(totalPay.toFixed(2)));
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">EMI Calculator</h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Loan Amount (₹)"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={loanAmount}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoanAmount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={interestRate}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInterestRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tenure (Years)"
          className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          value={tenure}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTenure(e.target.value)}
        />

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          onClick={calculateEMI}
        >
          Calculate EMI
        </button>
      </div>

      {emi !== null && (
        <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <p className="text-lg font-semibold">Monthly EMI: ₹{emi}</p>
          <p>Total Interest: ₹{totalInterest}</p>
          <p>Total Payment: ₹{totalPayment}</p>
        </div>
      )}
    </div>
  );
}
