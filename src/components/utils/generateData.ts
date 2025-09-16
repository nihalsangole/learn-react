export function generateData(rows: number) {
  return Array.from({ length: rows }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: Math.random() > 0.5 ? 'Active' : 'Inactive',
    score: Math.floor(Math.random() * 1000),
    updatedAt: new Date().toISOString(),
    department: ['Engineering', 'Sales', 'HR', 'Finance'][
      Math.floor(Math.random() * 4)
    ],
    city: ['New York', 'London', 'Delhi', 'Tokyo', 'Berlin'][
      Math.floor(Math.random() * 5)
    ],
    country: ['USA', 'UK', 'India', 'Japan', 'Germany'][
      Math.floor(Math.random() * 5)
    ],
    phone: `+91-9${Math.floor(100000000 + Math.random() * 900000000)}`,
  }));
}

export const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'status', label: 'Status' },
  { key: 'score', label: 'Score' },
  { key: 'updatedAt', label: 'Updated At' },
  { key: 'department', label: 'Department' },
  { key: 'city', label: 'City' },
  { key: 'country', label: 'Country' },
  { key: 'phone', label: 'Phone' },
];
