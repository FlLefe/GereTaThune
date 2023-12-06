const bcrypt = require('bcrypt');
const { User } = require('../models');

const userController = {
    indexRegister: (req, res) => {
        res.render('register');
    },

    register: async (req, res) => {
        try {
            const { firstname, lastname, birthyear, email, password } = req.body;
            const emailVerif = await User.findOne({ where: { email: email } });            

            if (emailVerif){
                const error = "Cet email existe deja "
                return res.render('register', { error });
            }

            const newUser = await User.create({
                email,
                firstname,
                lastname,
                birthyear,
                password: await bcrypt.hash(password, 10),
                role : 'user',
            });            

            req.session.user = { 
                id: newUser.id,
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                birthyear: newUser.birthyear,
                email: newUser.email,
                role: 'user' 
            };
            res.redirect('/');
        } catch (error) {
            res.render('register', { error: error.message });
        }
    },

    indexLogin:(req, res) => {
        res.render('login');
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            let error = null;

            const foundUser = await User.findOne({
                where: {
                email: email,
                },
            });

        if (!foundUser){
            error = "Utilisateur ou mot de passe incorrect";
            return res.render('login', { error });
        }

        const passwordOk = await bcrypt.compare(password, foundUser.password);

        if (!passwordOk){
            error = "Utilisateur ou mot de passe incorrect";
            return res.render('login', { error });
        }

        foundUser.password ="";
        req.session.user = foundUser;
        res.redirect('/');

        } catch (error) {
            res.status(500).send('Server Error');
        }
    },

    logout (req,res) {
        req.session.user = null;
        res.redirect("/");
    }
};

module.exports = userController;
