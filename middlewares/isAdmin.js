const isAdmin = (req, res, next) => {
    if (req.session.user.role === 'admin') {
        return next();
    }

    req.status = 401;
    return res.redirect('/');
};

module.exports = isAdmin;
