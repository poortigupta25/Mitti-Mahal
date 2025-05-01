const express = require("express");
const router = express.Router();
const Model = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/add', (req, res) => {
  console.log(req.body);
  new Model(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);

    });
});

router.get('/getall', (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

})

//: denotes url parameters
router.get('/getbyemail/:email', (req, res) => {
  console.log(req.params.email);
  res.send('respond from user email');
});


router.delete('/delete/:id', (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/authenticate', (req,res) =>{
  Model.findOne(req.body)
  .then((result) => {
    if (result)
    {
      //login success -generate token
      const { _id, name, email,} =result;
      const payload = { _id,name,email};
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        {expiresIn: '2d'},
        (err,token) => {
          if (err){
            console.log(err);
            res.status(200).json(err);
          }else{
            res.status(500).json({token});
          }
        }
      )
    }else{
    //login failed -send error message
    res.status(401).json({Message:'invalid username or password '});
    }

  }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
    
  });
})
//getall

//getbyid
//update
//delete
module.exports = router;