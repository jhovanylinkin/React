const express = require('express');
const app = express();

app.use(express.static(__dirname +'/public'));

person = [
    {
        name: 'Alejandro',
        lastname: 'Matus'
    },
    {
        name:'Jhovany',
        lastname:'Morales'
    }
]

app.get('/api/people/',(req, resp)=>{
    resp.status(200).json({person : person});
});


app.listen(3000,()=>{
    console.log(`server running on port 3000`);
});