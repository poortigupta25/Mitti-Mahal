const express = require("express");
const router = express.Router();
const FeedbackModel = require('../Models/FeedbackModel');

// Create feedback
router.post('/add', (req, res) => {
  new FeedbackModel(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all feedback
router.get('/getall', (req, res) => {
  FeedbackModel.find()
    .populate('user', 'name email')
    .populate('product', 'name')
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get feedback by product
router.get('/product/:id', (req, res) => {
  FeedbackModel.find({ product: req.params.id })
    .populate('user', 'name email')
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update feedback
router.put('/update/:id', (req, res) => {
  FeedbackModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete feedback
router.delete('/delete/:id', (req, res) => {
  FeedbackModel.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;