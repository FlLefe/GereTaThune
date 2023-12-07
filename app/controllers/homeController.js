const homeController = {
    index (req, res){
        res.render('home');
    },
    cgu (req, res){
        res.render('cgu');
    },
    errorPage (req,res){
        res.redirect('/');
    }
};

module.exports = homeController;