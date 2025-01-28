import { Request, Response } from "express";
import TourService from "../services/tour.service";

export const getAllTours = async (_req: Request, res: Response) => {
    try {
        const products = await TourService.getAllTours();
        res.json({
            pageTitle: "Danh sách tour", // Correctly formatted object with a comma separating properties
            products, // This sends the products array
        });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unknown error occurred" });
        }
    }
};


// export const createProduct = async (req: Request, res: Response) => {
//     try {
//         const { name, price } = req.body;
//         const product = await ProductService.createProduct({ name, price });
//         res.status(201).json(product);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// export const getProductById = async (req: Request, res: Response) => {
//     try {
//         const productId = parseInt(req.params.id, 10);
//         const product = await ProductService.getProductById(productId);
//         res.json(product);
//     } catch (error) {
//         res.status(404).json({ error: error.message });
//     }
// };
