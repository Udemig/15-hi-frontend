import axios from "axios";

const API_BASE_URL = "http://localhost:4000";

/**
 * Fetch all ice cream products from the json-server API.
 * @returns {Promise<Array>} list of products
 */
export const getIcecreams = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/icecreams`);
  return data;
};
