const baseUrl = "https://datainlife.ru/junior_task/get_products.php";

export const getData = async () => {
  const res = await fetch(baseUrl);

  const data = await res.json();
  return data;
};
