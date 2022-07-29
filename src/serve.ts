import express  from 'express';

const app = express();

app.use(express.json())


app.get('/',(req,res)=>{
res.json({message:'Hello word'})
})
app.post('/',(req,res)=>{
const {name} = req.body;

return res.json({name})
})


app.listen(9000)