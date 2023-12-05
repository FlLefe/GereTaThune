const {Category, Operation } = require('../models')

const adminController = {
    allCategories: async (req, res) => {
        const operations = await Operation.findAll({
            include: "categories"
        });

        console.log(JSON.stringify(operations, null, 2))
        res.render('adminindex', {operations});
    },
    addCategory: async (req, res) => {

        const { operation_id, name, color } = req.body

        await Category.create({ operation_id : operation_id, name : name, color : color });

        res.redirect('/admin/categories');
    },
    displayModifyCategory: async (req, res) => {

        const categoryid = req.params.id

        const category = await Category.findByPk(categoryid)

        res.render('categorymodifier', {category})
    },
    modifyCategory: async (req, res) => {

      const categoryid = req.params.id

      const { operation_id, color, name } = req.body

        await Category.update({ color: color, name: name, operation_id : operation_id }, {
            where: {
              id: categoryid,
            },
          });

        res.redirect('/admin/categories');
  },
    deleteCategory: async (req, res) => {

        const categoryid = req.params.id
        console.log(categoryid)

        await Category.destroy({
            where: {
              id: categoryid
            },
          });

        res.redirect('/admin/categories');
    }
};

module.exports = adminController;