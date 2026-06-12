// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;

export const submitContact = async (formData) => {
  const response = await fetch(`${API_URL}/api/contact/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      inquiry_type: formData.inquiryType,
      message: formData.message,
    }),
  });
  return response;
};

export const submitRFQ = async (formData) => {
  const response = await fetch(`${API_URL}/rfq/submit/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  return response;
};