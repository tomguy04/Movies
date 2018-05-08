const playerController = require('../controllers/player');
const bikeController = require('../controllers/bike');
const userController = require('../controllers/auth');

//
const router = require('express').Router();
//

//had this here
//module.exports = function(app){
    router

    //bikes
    .post('/bikes',bikeController.create) //add a bike/review
    .get('/bikes', bikeController.index) //get all bikes
    .delete('/bikes/:bikeID', bikeController.destroy) //delete a bike
    .put('/bikes/:bikeID', bikeController.update) //update a bike
    .put('/addreviewstart/:movieID', userController.update1st) //attach review to movie from 1st form
    .post('/bikeOnly', bikeController.createBikeOnly)
    
    
    //user 
    .get('/user', userController.show) //get the user
    .get('/userdata/:userID', userController.findOne) //get the user
    .get('/user/logout',userController.logout)//logout
    .post('/users', userController.create)
    .get('/movies', userController.index) //get all the movies
    .get('/movie/:movieId', bikeController.showMovie)

    .get('/players', playerController.index) //get all players
    .post('/players',playerController.create) //add a player
    .delete('/players/:playerID', playerController.destroy) //delete a player
    .put('/players/:playerID', playerController.update) //update a player
    .get('/players/:playerID', playerController.show) //show/get A player
   
    // .post('/', bookController.create)
   
    // .put('/:bookID', bookController.update)
    

    // app.all("*", (req,res,next) => {
    //   res.sendFile(path.resolve("./public/dist/index.html"))
    // });
    
    module.exports = router;