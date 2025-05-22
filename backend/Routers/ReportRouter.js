const express = require("express");
const router = express.Router();
const ReportModel = require('../Models/ReportModel');

// Create report
router.post('/add', (req, res) => {
  new ReportModel(req.body).save()
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get all reports
router.get('/getall', (req, res) => {
  ReportModel.find()
    .populate('reporter', 'name email')
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update report status
router.put('/update/:id', (req, res) => {
  const updateData = req.body;
  if (updateData.status === 'resolved') {
    updateData.resolvedAt = new Date();
  }
  
  ReportModel.findByIdAndUpdate(req.params.id, updateData, { new: true })
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get reports by status
router.get('/status/:status', (req, res) => {
  ReportModel.find({ status: req.params.status })
    .populate('reporter', 'name email')
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete report
router.delete('/delete/:id', (req, res) => {
  ReportModel.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;