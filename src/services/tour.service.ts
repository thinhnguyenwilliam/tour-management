import Tour from "../models/tour.model";

class TourService {
    async getAllTours() {
        console.log("Fetching active tours..."); // Log to indicate the start of the operation
        const tours = await Tour.findAll({
            where: {
                deleted: false,
                status: 'active',
            },
            raw: true, // Return raw data (plain objects)
        });

        console.log("Fetched tours:", tours); // Log the fetched tours
        return tours;
    }

    // // Create a new product
    // async createProduct(data: { name: string; price: number }) {
    //     try {
    //         const { name, price } = data;
    //         return await Product.create({ name, price });
    //     } catch (error) {
    //         throw new Error("Failed to create product");
    //     }
    // }

    // // Get a single product by ID
    // async getProductById(productId: number) {
    //     try {
    //         const product = await Product.findByPk(productId);
    //         if (!product) {
    //             throw new Error("Product not found");
    //         }
    //         return product;
    //     } catch (error) {
    //         throw new Error("Failed to fetch product");
    //     }
    // }


}

export default new TourService();
