export const calculateTax = async data => {
  const response = await fetch('/api/taxes/calculate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw await response.json();
  }

  return response.json();
};
