const asyncHandler = require('express-async-handler');
const Dog = require('../models/dogModel');

const getDogs = asyncHandler(async (req, res) => {
  const dogs = await Dog.find();
  res.status(200).json(dogs);
});

const addDog = asyncHandler(async (req, res) => {
  if (!req.body.breed) {
    res.status(400);
    throw new Error('Please enter a dog breed');
  }
  if (!req.body.countryOfOrigin) {
    res.status(400);
    throw new Error('please enter country of origin');
  }
  if (!req.body.imageUrl) {
    res.status(400);
    throw new Error('please enter an image url');
  }
  const dog = await Dog.create({
    breed: req.body.breed,
    countryOfOrigin: req.body.countryOfOrigin,
    imageUrl: req.body.imageUrl,
  });
  res.status(200).json(dog);
});

const updateDog = asyncHandler(async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  if (!dog) {
    res.status(400);
    throw new Error('Dog not found');
  }
  const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedDog);
});

const deleteDog = asyncHandler(async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  if (!dog) {
    res.status(400);
    throw new Error('Dog not found');
  }
  await dog.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getDogs,
  addDog,
  updateDog,
  deleteDog,
};
