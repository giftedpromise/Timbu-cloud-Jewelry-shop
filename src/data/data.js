export const getProducts = async () => {
  try {
    const response = await fetch(
      `/api/products?organization_id=aae3d11b193e4344b430f0177b4295d3&Appid=LXVE8ERZISOKH93&Apikey=8fc2f946109d4ee9960b79daed74864520240713011719071900`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
};
