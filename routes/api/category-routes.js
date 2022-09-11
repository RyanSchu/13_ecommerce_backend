const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({message: "No categories found"})
      return
    }
    console.log(categoryData)
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json({status: 500 ,error: err})
  }
  // find all categories
  
  // be sure to include its associated Products

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
