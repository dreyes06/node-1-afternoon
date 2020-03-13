const products = require('../products.json');

const getProducts = (req, res) => {
    const price = products.find(product => product.price === +req.query.price)
    if(price){
        res.status(200).send(price)
    }else if(!price){
        res.status(500).send({message: 'price not found'})
        
    }else{
        res.status(200).send(products)
    }
    console.log(price)
}





module.exports = getProducts;