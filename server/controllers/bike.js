const Bike = require('mongoose').model('Bike');
const User = require('mongoose').model('User');

module.exports={

    updateBike(request, response) {
        console.log('in the bike update controller');
        Bike.findByIdAndUpdate(request.params.bikeID, request.body, { new: true })
        //Player.findByIdAndUpdate(request.params.playerID, request.body, { new: true })
          .then(bike => response.json(bike))
          .catch(console.log);
      },

    createBikeOnly(request, response) {
        
        Bike.create(request.body)
        .then(player => response.json(player))
        .catch(error => console.log(error));
    },

    showMovie(req, res) {
        // // console.log(req.session.user._id, "do you exist here?");
        // // if (req.session.user._id === undefined) {
        // //     res.json({session: false})
        // // }
        // else {
            console.log('movie id in showMovie ', req.params.movieId)
            User.findOne({_id: req.params.movieId})
            .populate('bike')
            .then(user => res.json(user))
            .catch(error => res.status(400).json(error))
        // }
    },

    index(request, response) {
        Bike.find({})
        .then(bikes => response.json(bikes))
        .catch(error => console.log(error));
    },

    update(request, response) {
        console.log('in the bike update controller');
        Bike.findByIdAndUpdate(request.params.bikeID, request.body, { new: true })
        //Player.findByIdAndUpdate(request.params.playerID, request.body, { new: true })
          .then(bike => response.json(bike))
          .catch(console.log);
      },

    // create(request, response) {
        
    //     Bike.create(request.body)
    //     .then(player => response.json(player))
    //     .catch(error => console.log(error));
    // },

    create(req, res) {
        console.log("in the review create controller")
                var bike = new Bike();
                bike.name = req.body.name;
                bike.stars = req.body.stars;
                bike.review = req.body.review
                console.log('the reqbody ', req.body._id);
                console.log('bike in bikejs create', bike);
                bike._user = req.body._id;

                //
                User.findOne({_id:req.body._id})
                .then(foundMovie=>{
                    console.log('foundMovie ', foundMovie);
                    foundMovie.bike.push(bike);
                    foundMovie.save(function(err){
                        if (err){console.log('error while saving post and comment');}
                        //else {res.json(bike);}
                    })
                })
                //


                //req.body.bike.push(bike);
                // User.bike.push(bike);
                bike.save(function (err) {
                    
                        if (err) { console.log(err) }
                        else {
                            res.json(bike); 
                            //in here find the movie

                            


                            //res.json({ message: "Success!" })
                        }
                    })
                
                // bike.save(function (err) {
                //     user.save(function (err) {
                //         if (err) { console.log(err) }
                //         else {
                //             res.json({ message: "Success!" })
                //         }
                //     })
                // })
            },
  

    destroy(request, response) {
        User.findByIdAndRemove(request.params.bikeID)
          .then(bike => response.json(bike))
          .catch(console.log);
      },

    show(request, response) {
        Bike.findById(request.params.playerID)
        .then(    
            player => response.json(player))
        .catch(error =>
        response
            .status(500)
            .json(errorMessage(error)));
        }

    // create(request, response) {
    //     Player.create(request.body)
    //       .then(player => response.json(player))
    //       .catch(error => {
    //           console.log('error in create controller');
    //         const errors = Object.keys(error.errors).map(
    //           key => error.errors[key].message
    //         );
    
    //         response.json(errors);
    //       });
    //   },


    
}