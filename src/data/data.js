import axios from "axios";

export const getProducts = async (currentPage) => {
  try {
    const response = await axios.get(
      " https://timbu-get-all-products.reavdev.workers.dev/ ",
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
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
