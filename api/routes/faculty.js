const expess = require('express');

const router = expess.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is the faculty get request'
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is the faculty post request'
    })
})
module.exports =router;