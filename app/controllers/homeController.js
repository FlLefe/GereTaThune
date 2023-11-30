const homeController = {
    index: async (req, res) => {
        res.render('home');
    },
    cgu: async (req, res) => {
        res.render('cgu');
    }
};

module.exports = homeController;