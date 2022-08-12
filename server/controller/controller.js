var Fitemdb=require('../model/model');

//create and save new food item
exports.create=(req,res)=>{
//validate request
if(!req.body){
    res.status(400).send({message:"Content can not be empty!"});
    return;
}

//new food item
const fitem=new Fitemdb({
    food_item:req.body.food_item,
    ftype:req.body.ftype,
    fstorage:req.body.fstorage,
    pdate:req.body.pdate,
    rdate:req.body.rdate,
    atime:req.body.atime
})

//save food item in the database

fitem
    .save(fitem)
    .then(data=>{
        //res.send(data)
        res.redirect('/add-food-item')
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occurred while adding Food Item"
        });
    });
}

//retrieve and return all food items
exports.find=(req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Fitemdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found Food item with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving Food item with id " + id})
            })

    }else{
    Fitemdb.find()
    .then(fitem=>{
        res.send(fitem)
    })
    .catch(err=>{
        res.status(500).send({message:err.message||"Some error occurred while retriving Food Item"})
    })
    }}

//update a new identified food item
exports.update=(res,req)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to Update can not be empty"})
        
    }

    const id = req.params.id;
    Fitemdb.findByIdAndUpdate(id, req.body, { useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update Food Item with ${id}.Maybe Food Item not found!`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Getting Error while updating Food Item"})
    })

}

//Delete a food item with specified item id in the request
exports.delete=(res,req)=>{
    const id=req.params.id;

    Fitemdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Delete with ${id}. Maybe id is worng`})
        }else{
            res.send({
                message:"Food Item deleted successfully from list."
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"Could not delete Food item with id: "+id
        });
    });
}
