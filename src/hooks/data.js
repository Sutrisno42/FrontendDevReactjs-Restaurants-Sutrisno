export const getRandomPrice = () => {
    const minPrice = 50000;
    const maxPrice = 500000;
    const randomPrice =
      Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    return new Intl.NumberFormat("id-ID").format(randomPrice);
  };
  
  export const getRandomStatus = () => {
    const statuses = ["Open Now", "Closed"];
    const randomIndex = Math.floor(Math.random() * statuses.length);
    const randomStatus = statuses[randomIndex];
    const colorStatus = randomStatus === "Open Now" ? "green" : "red";
    return { randomStatus, colorStatus };
  };