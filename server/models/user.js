const uniqueValidator = require('mongoose-unique-validator');
//const bcrypt = require('bcrypt-as-promised');
const bcrypt = require('bcrypt');
const validator = require('validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
 
    {
      title: {
        type: String,

        //
        
        //

        required: true,
        trim: true,
        unique: true,
        minlength: [3, 'Movie must have a title'],
      },
      name: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Movie/Review must have a name'],
      },
      stars: {
        type: Number,
        required: true,
        trim: true,
        minlength: [1, 'Movie/review must have a stars'],
      },
      review: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Movie/review must be at least 3 chars'],
      },

      bike: [{ type: Schema.Types.ObjectId, ref: 'Bike' }],
    },
    {
      timestamps: true
    }
  )

//use this middleware
userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });


//bcrypt
// userSchema.pre('save', function(next){
//     //check if the pw is already encrypted
//     console.log('presave');
//     if (!this.isModified('password')){
//         console.log('check for if password was modified');
//         return next();
//     }

//     if (bcrypt.hash(this.password, 10)){
//         console.log('bcrypthash');
//         (hashedPassword)=>{
//             this.password = hashedPassword;
//             //return next();
//             next();
//         }}
//         else{
//             console.log('bcypthash else');
//             //return next();
//             next();
//         }
//     });

//log back in , validate pw
// userSchema.statics.validatePassword = function(candidatePassword, hashedPassword){
//     return bcrypt.compare(candidatePassword, hashedPassword);
// };

module.exports = mongoose.model('User', userSchema);