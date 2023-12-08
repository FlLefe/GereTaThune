const {Category, Operation } = require('../models')

const adminController = {
    allCategories: async (req, res) => {
        const operations = await Operation.findAll({
            include: "categories"
        });

        res.status(200).json(operations);
    },
    addCategory: async (req, res) => {

        const { operation_id, name, color } = req.body

        const newCategory = await Category.create({ operation_id : operation_id, name : name, color : color });

        res.status(201).json(newCategory);
    },
    displayModifyCategory: async (req, res) => {

        const categoryid = req.params.id

        const category = await Category.findByPk(categoryid)

        res.render('categorymodifier', {category})
    },
    modifyCategory: async (req, res) => {

      const categoryid = req.params.id

      const { operation_id, color, name } = req.body

      const updatedCategory = await Category.update({ color: color, name: name, operation_id : operation_id }, {
            where: {
              id: categoryid,
            },
          });

          res.status(200).json(updatedCatrgory);
  },
    deleteCategory: async (req, res) => {

        const categoryid = req.params.id

        await Category.destroy({
            where: {
              id: categoryid
            },
          });

        res.redirect('/admin/categories');
    }
};

module.exports = adminController;