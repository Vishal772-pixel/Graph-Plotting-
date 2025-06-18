const express =require('express');
const router =express.Router();

const db=require('../db');

router.get('/',(req,res)=>{
    const query ='SELECT pump_status ,timestamp FROM pump_data ORDER BY timestamp ASC';
    db.query(query,(err,results)=>{
        if(err){
            console.error(err);
            res.status(500).json({error:'Database query failed'});

        }
        else{
            res.json(results);
        }
    });
});
module.exports=router;