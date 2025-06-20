// addProduct
// totalProduct
// removeProduct
// getSingleProduct

import { v2 as cloudinary } from "cloudinary";
import { User } from "../models/user.model.js";
import { Product } from "../models/product.model.js";

export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      bestseller: bestseller === "true" ? "true" : "false",
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new Product(productData);
    await product.save();

    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const listProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    return res.status(201).json({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const {id} = req.params
    await Product.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Product Removerd",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId);

    return res.json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
