import dbConnect from "../../../util/mongo";
import Product from "../../../models/Product";
export default async function handler(req, res) {
  const { method } = req;
  try{
    await dbConnect();
    if (method === "GET") {
      try {
        console.log('trying to get products')
        const products = await Product.find();
        console.log(products)
        res.status(200).json(products);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  }catch(err){

  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

