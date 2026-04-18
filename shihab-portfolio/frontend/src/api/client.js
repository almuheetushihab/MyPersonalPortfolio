export const getPortfolioData = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/portfolio');
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error loading data", error);
    return null;
  }
};