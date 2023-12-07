const express=require('express');
const router=express.Router();

router.post('/foodData',(req,res)=>{
    try{
        console.log(global.fooditems)
        res.send([global.fooditems,global.foodCategory])

    }
    catch(e){
        console.log(e)

    }
})

module.exports=router;