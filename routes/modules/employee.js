const express = require("express");

const router = express.Router();

const employee = require("../../models/employee");

// Create post
router.route("/create").post((req, res, next) => {
  employee.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//Read All
router.route("/").get((req, res) => {
  employee.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Update Get
router.route("/edit/:id").get((req, res) => {
  employee.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Update Put
router.route("/update/:id").put((req, res, next) => {
  employee.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("User updated successfully !");
      }
    }
  );
});

//Delete
router.route("/delete/:id").delete((req, res, next) => {
  employee.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
