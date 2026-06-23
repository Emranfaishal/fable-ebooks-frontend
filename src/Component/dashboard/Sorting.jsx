"use client";

const users = [
  {
    id: 1,
    name: "Kate Moore",
    role: "CEO",
    status: "Active",
    email: "kate@acme.com",
  },
  {
    id: 2,
    name: "John Smith",
    role: "CTO",
    status: "Active",
    email: "john@acme.com",
  },
  {
    id: 3,
    name: "Sara Johnson",
    role: "CMO",
    status: "On Leave",
    email: "sara@acme.com",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "CFO",
    status: "Active",
    email: "michael@acme.com",
  },
  {
    id: 5,
    name: "Emily Davis",
    role: "Product Manager",
    status: "Inactive",
    email: "emily@acme.com",
  },
];

export default function Sorting() {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-100">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">{user.status}</td>
              <td className="p-3">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}