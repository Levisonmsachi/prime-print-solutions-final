import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getHomepageData = async () => {
  const response = await api.get("/homepage/");
  return response.data;
};

export const getAboutData = async () => {
  const response = await api.get("/about/");
  return response.data;
};

export const getPortfolioData = async () => {
  const response = await api.get("/portfolio/");
  return response.data;
};

export const getServicesData = async () => {
  const response = await api.get("/services/page-data/");
  return response.data;
};

export const getCertificationsData = async () => {
  const response = await api.get("/certifications/page-data/");
  return response.data;
};

export const getContactData = async () => {
  const response = await api.get("/contact/page-data/");
  return response.data;
};

export const submitContactForm = async (formData) => {
  const response = await api.post("/contact/messages/", formData, {
    headers: { "Content-Type": "multipart/form-data" }, 
  });
  return response.data;
};


export const submitQuote = async (formData) => {
  const response = await api.post("/quotes/quote-request/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

