import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([
    { id: 1, user: "John Doe", category: "Wedding Loans", status: "Pending" },
    { id: 2, user: "Jane Smith", category: "Business Startup Loans", status: "Approved" },
  ]);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <table className="w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="p-4">#</th>
            <th className="p-4">User</th>
            <th className="p-4">Loan Category</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app, index) => (
            <tr key={app.id} className="border-b">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{app.user}</td>
              <td className="p-4">{app.category}</td>
              <td className="p-4">{app.status}</td>
              <td className="p-4">
                <Button className="mr-2">View</Button>
                <Button variant="outline">Approve</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;