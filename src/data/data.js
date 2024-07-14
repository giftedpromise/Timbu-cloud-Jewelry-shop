import axios from "axios";

export const getProducts = async (currentPage) => {
  try {
    const response = await axios.get(
      "https://timbu-get-all-products.reavdev.workers.dev/",
      {
        params: {
          organization_id: "aae3d11b193e4344b430f0177b4295d3",
          reverse_sort: false,
          page: currentPage,
          size: 10,
          Appid: "LXVE8ERZISOKH93",
          Apikey: "8fc2f946109d4ee9960b79daed74864520240713011719071900",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error(`HTTP error! Status: ${error.response.status}`);
      if (error.response.status === 404) {
        console.error("API endpoint not found.");
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error("No response received:", error.request);
    } else {
      // Other errors
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  }
};
