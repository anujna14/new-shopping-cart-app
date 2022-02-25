import data from "../data.json";

export function getProductDetails(shopDetailsId) {
  const product = data.find(
    (product) => Number(product.id) === Number(shopDetailsId)
  );
  return product;
}

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const product = getProductDetails(req.query.shopDetails);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  }
}
