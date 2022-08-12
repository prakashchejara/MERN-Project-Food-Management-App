const express=require('express');
const route = express.Router()

const services=require('../services/render');
const controller=require('../controller/controller');

/**
 * @description Root Route
 * @method GET /
 */

route.get('/',services.homeRoutes);

/**
 * @description for add food items
 * @method GET /add-food-item
 */

route.get('/add-food-item',services.add_food_item);

/**
 * @description for update food items
 * @method GET /update-food-item
 */


route.get('/update-food-item',services.update_food_item);

//API
route.post('/api/foodlist',controller.create);
route.get('/api/foodlist',controller.find);
route.put('/api/foodlist/:id',controller.update);
route.delete('/api/foodlist/:id',controller.delete);

module.exports = route