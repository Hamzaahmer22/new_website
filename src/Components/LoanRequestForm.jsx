import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { QRCodeSVG } from 'qrcode.react';
import { Link } from 'react-router-dom';

const LoanRequestForm = [
  {
    name: "Wedding Loans",
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: "PKR 5 Lakh",
    loanPeriod: "3 years",
  },
  {
    name: "Home Construction Loans",
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    name: "Business Startup Loans",
    subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    maxLoan: "PKR 10 Lakh",
    loanPeriod: "5 years",
  },
  {
    name: "Education Loans",
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: "Based on requirement",
    loanPeriod: "4 years",
  },
];


 function LoanReq() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [loanPeriod, setLoanPeriod] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [calculatedLoan, setCalculatedLoan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDetails, setFormDetails] = useState({ CNIC: '', email: '', name: '' });
  const [slipDetails, setSlipDetails] = useState(null);

  const handleCalculate = () => {
    if (!selectedCategory || !loanPeriod || !initialDeposit) {
      alert("Please fill in all the fields.");
      return;
    }
    const maxLoan = parseInt(selectedCategory.maxLoan.replace(/[^0-9]/g, '')) || 0;
    const estimatedLoan = maxLoan - parseInt(initialDeposit || 0);
    setCalculatedLoan(estimatedLoan > 0 ? estimatedLoan : 0);
  };

  const handleProceed = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = () => {
    setSlipDetails({
      token: Math.floor(Math.random() * 100000),
      appointmentDate: "2025-02-01",
      appointmentLocation: "Head Office, Karachi",
    });
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Loan Categories</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LoanCategories.map((category, index) => (
            <Card key={index} className="shadow-md">
              <CardContent>
                <h2 className="text-xl font-semibold">{category.name}</h2>
                <ul className="mt-2">
                  {category.subcategories.map((sub, idx) => (
                    <li key={idx} className="text-gray-700">- {sub}</li>
                  ))}
                </ul>
                <p className="mt-2 text-sm text-gray-600">Max Loan: {category.maxLoan}</p>
                <p className="text-sm text-gray-600">Loan Period: {category.loanPeriod}</p>
                <Button
                  className="mt-4"
                  onClick={() => setSelectedCategory(category)}
                >
                  Select
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedCategory && (
          <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{selectedCategory.name}</h2>
            <Select onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-full mb-4">
                <span className="text-gray-600">Select Subcategory</span>
              </SelectTrigger>
              <SelectContent>
                {selectedCategory.subcategories.map((sub, idx) => (
                  <SelectItem key={idx} value={sub}>{sub}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              className="w-full mb-4"
              type="number"
              placeholder="Initial Deposit (PKR)"
              onChange={(e) => setInitialDeposit(e.target.value)}
            />
            <Input
              className="w-full mb-4"
              type="text"
              placeholder="Loan Period (years)"
              onChange={(e) => setLoanPeriod(e.target.value)}
            />
            <Button className="w-full" onClick={handleCalculate}>Calculate Loan</Button>

            {calculatedLoan !== null && (
              <p className="mt-4 text-lg">Estimated Loan Amount: PKR {calculatedLoan}</p>
            )}
            <Button className="w-full mt-4" onClick={handleProceed}>Proceed</Button>
          </div>
        )}

        <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
          <div className="p-6">
            <h3 className="text-lg font-semibold">Enter Your Details</h3>
            <Input
              className="w-full mt-2"
              placeholder="CNIC"
              value={formDetails.CNIC}
              onChange={(e) => setFormDetails({ ...formDetails, CNIC: e.target.value })}
            />
            <Input
              className="w-full mt-2"
              placeholder="Email"
              value={formDetails.email}
              onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
            />
            <Input
              className="w-full mt-2"
              placeholder="Name"
              value={formDetails.name}
              onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })}
            />
            <Button className="w-full mt-4" onClick={handleFormSubmit}>Submit</Button>
          </div>
        </Modal>

        {slipDetails && (
          <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Slip Details</h2>
            <p><strong>Token:</strong> {slipDetails.token}</p>
            <p><strong>Appointment Date:</strong> {slipDetails.appointmentDate}</p>
            <p><strong>Location:</strong> {slipDetails.appointmentLocation}</p>
            <QRCodeSVG value={`Token: ${slipDetails.token}`} className="mt-4" />
          </div>
        )}
      </div>
    </div>
  )}
export default LoanReq;