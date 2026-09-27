import Product from "../models/ProductsModel.js";


export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(400).json({message:"Error while trying to fetch Blinds."})
        console.log("Error in Products Controller.",error);
    }
}

export const getOneProducts = async(req,res)=>{
    try {
        const Id = req.params.id;
        const findproduct = await Product.findById({_id:Id})
            if(!findproduct){
                res.status(400).json({message:"Product already exist"})
            }else{
                res.status(200).json(findproduct)
        }
    } catch (error) {
        res.status(400).json({message:"Error while trying to fetch Blinds."})
        console.log("Error in Products Controller.",error);
    }
}

export const postProducts = async(req,res)=>{
    try {
        const {image,name,category,description} = req.body;
        const newProduct = new Product({
            image,
            name,
            category,
            description
        })
        newProduct.save();
        // Find Product
        // const FindProduct = Product.find({})
        // if(!FindProduct){
        // }else{
        //     res.status(400).json({message:"Product already exist"})
        // }
        res.status(200).json(newProduct)
    } catch (error) {
          res.status(400).json({message:"Error while trying to add Blinds."})
        console.log("Error in Products Controller.",error);
    }
}



export const updateProducts = async(req,res)=>{
    try {
        const Id = req.params.id;
        const {image,name,category,description} = req.body;
        const Updated =  await Product.findByIdAndUpdate(Id,{
            image,
            name,
            category,
            description
        })
        res.status(200).json({message:"Updated Successfully!"})
    } catch (error) {
         res.status(400).json({message:"Error while trying to update Blinds."})
        console.log("Error in Update Products Controller.",error);
    }
}

export const deleteProducts = async(req,res)=>{
    const Id = req.params.id;
    await Product.deleteOne({_id:Id})
}