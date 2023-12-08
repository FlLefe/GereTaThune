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
            console.log('coucou >>' );
            
        if (!foundUser){
            error = "Utilisateur ou mot de passe incorrect";
            return res.render('login', { error });
        }
        console.log('coucou2 >>');

        const passwordOk = await bcrypt.compare(password, foundUser.password);

        if (!passwordOk){
            error = "Utilisateur ou mot de passe incorrect";
            return res.render('login', { error });
        }
        console.log('coucou3 >>');

        foundUser.password ="";
        console.log('foundUser >>' + JSON.stringify(foundUser,null,2));
        
        console.log('coucou4 >>'+ req.session.user);

        

        req.session.user = foundUser;
        res.json({ message: 'Connecté avec succès' });
        } catch (error) {
            res.status(500).send('Server Error');
        }
    },

    session: async (req, res) => {
        try {
            // const sessionData = {oui:'oui'}
            res.json({ message: 'Accès autorisé', user: req.session.user });
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
