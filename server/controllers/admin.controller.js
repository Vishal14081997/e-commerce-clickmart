import User from "../models/auth.model.js";
import Category from "../models/category.model.js";
import Product from "../models/product.model.js";

export const getProfile = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({
                message: "user not found"
            })
        }
        res.status(200).json({
            message: " profile fetch successfully",
            data: user
        })
    } catch (error) {
        console.log("getProfile", error.message);
        res.status(500).json({ message: error.message })
    }
}
export const AddCategory = async (req, res) => {
    try {
        const { CName, CDesc } = req.body;
        // console.log(req.file);
        const existCategory = await Category.findOne({ CName })
        if (existCategory) {
            return res.status(400).json({ message: "Category already exists" })
        }
        const category = await Category.create({
            CName, CDesc, image_url: req.imageUrl
        })
        res.status(201).json({
            message: "Category created",
            data: category
        })
    } catch (error) {
        console.log("AddCategory", error.message);
        res.status(500).json({ message: error.message })
    }
}
export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find()

        res.status(200).json({
            message: "get all category",
            data: category
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}
export const getSingleCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        res.status(200).json({
            message: "get category",
            data: category
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}
export const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const { CName, CDesc, status } = req.body;

        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }

        category.CName = CName || category.CName;
        category.CDesc = CDesc || category.CDesc;
        category.status = status || category.status;

        if (req.imageUrl) {
            category.image_url = req.imageUrl;
        }

        await category.save();

        res.status(200).json({
            message: "Category updated successfully",
            data: category,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                message: "Category not found",
            });
        }
        await Category.findByIdAndDelete(categoryId);
        res.status(200).json({
            message: "Category deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
export const AddProduct = async (req, res) => {
    try {
        const { CId, PName, PDesc, price, Qty, MRP } = req.body;
        const category = await Category.findById(CId).select("_id, CName")
        // console.log(category);
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        const existProduct = await Product.findOne({ PName });

        if (existProduct) {
            return res.status(400).json({
                message: "Product already exists"
            })
        }
        const product = await Product.create({
            CId, PName, PDesc, price, Qty, MRP, image_url: req.imageUrl
        })

        res.status(201).json({
            message: "Product created successfully",
            data: product
        })

    } catch (error) {
        console.log("addProduct error:", error.message);
        res.status(500).json({ message: error.message })

    }
}
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
            .populate("CId", "CName")
            .sort({ createdAt: -1 });

        res.status(200).json({
            total: products.length,
            data: products,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
export const getDashboard = async (req, res) => {
    try {
        const totalProduct = await Product.countDocuments();
        const totalCategory = await Category.countDocuments();
        const totalCustomer = await User.countDocuments({ userType: "Customer" })
        const totalAgency = await User.countDocuments({ userType: "Agency" })

        res.status(200).json({
            data: {
                totalProduct, totalCategory, totalCustomer, totalAgency
            },
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }

}
export const getAllCustomers = async (req, res) => {
    try {
        const { search } = req.query;
        const filter = {
            userType: "Customer"
        }
        if (search) {
            filter.$or = [
                { full_name: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { phone_no: { $regex: search, $options: "i" } },
            ]
        }
        const customers = await User.find(filter).select("-password").sort({ createdAt: -1 })
        res.status(200).json({
            data: customers,
        });

    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }

}