const {Category } = require('../models')

const adminController = {
    color: async (req, res) => {
        const categories = await Category.findAll();
        res.render('admincolor', {categories});
    },
    modifyColor: async (req, res) => {

        const { category_id, color } = req.body

        await Category.update({ color: color }, {
            where: {
              id: category_id,
            },
          });

        res.redirect('/admin/color');
    }
};

module.exports = adminController;