const express =require('express');
const cors = require('cors');

const app =express();

const pumpRoutes =require('./routes/pumps');




app.use(cors());

app.use('/api/pumps',pumpRoutes);

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})