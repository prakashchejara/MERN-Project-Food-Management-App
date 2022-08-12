const axios = require('axios');

exports.homeRoutes=(req,res)=>{
        // Make a get request to /api/foodlist
        axios.get('http://localhost:3000/api/foodlist')
        .then(function(response){
    res.render('index',{foodlist:response.data});
})
.catch(err =>{
    res.send(err);
})
}



exports.add_food_item=(req,res)=>{
    res.render('add_food_item');
}

exports.update_food_item=(req,res)=>{
    axios.get('http://localhost:3000/api/foodlist',{params:{id:req.query.id}})
    .then(function(fooddata){
        res.render("update_food_item",{foodlist:fooddata.data})
    })
    .catch(err=>{
        res.send(err);
    })
}