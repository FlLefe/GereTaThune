const sessionController = {
    async sessionDetails(req, res) {
        try {
        const session = req.session.user;
        res.status(200).json(session);
        } catch (error) {
        res.status(500).render(500);
        }
    },
};

module.exports = sessionController;