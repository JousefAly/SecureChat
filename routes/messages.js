const express = require('express');

const router = express.Router();

router.get('/', (req,res, next)=>{
    res.status(200).json({
        message: 'message 1 from sender'
    });
    next();
});

module.exports = router;
