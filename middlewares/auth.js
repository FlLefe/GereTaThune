const auth = (req, res, next) => {
    if (req.session.user) {
        // On passe la main au middleware suivant si le user est bien loggé (ie, dans la session)
        return next();
    }

    // Sinon, on passe la main au middleware d'erreur (errorHandlers) qui s'occupe d'afficher l'erreur appropriée
    return res.redirect('/login');
};

module.exports = auth;
