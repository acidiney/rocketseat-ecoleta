import express from 'express'

import ItemsController from './controllers/ItemsController'
import PointsController from './controllers/PointsController'

// community-patters for routes
// index - to list all data
// show - to get one data
// create - to create data
// delete - to delete data
// update - to update data

const routes = express.Router()
const itemsController = new ItemsController()
const pointsController = new PointsController()

/**
 * @items routes
 */
routes.get('/items', itemsController.index);

/**
 * @points routes
 */
routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);


export default routes
