import express from 'express';

const router = express.Router()

router.get('/', (req,res)=>{
    res.status(200).json({msg: 'get all questions'})
})
router.get('/:id', (req,res)=>{
    res.status(200).json({msg:'get a single question'})
})

router.post('/', (req,res)=>{
    res.status(200).json({msg: 'create a question'})
})

router.patch('/:id', (req,res)=>{
    res.status(200).json({msg:'update a question'})
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({msg:'delete a question'})
})

export default router;
