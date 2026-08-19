import Category from "../models/category.model.js";

export const createCategory = async (req, res) => {
    try {
        const { CName, CDesc } = req.body;
        console.log(req.file);
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
        console.log(error.message);
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
