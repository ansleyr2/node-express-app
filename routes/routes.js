const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('shop/shop',{
        docTitle: 'Shop'
    });
});

router.get('/admin/add-product', (req, res, next)=>{
    res.render('admin/add-product',{
        docTitle: 'Add Product'
    });
});

module.exports = router;