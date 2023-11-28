const isAdmin = (req, res, next) => {
    if (req.session.user.role === 'admin') {
        return next();
    }

    req.status = 401;
    return next(new Error('Unauthorized'));
};

module.exports = isAdmin;
