const logger = require('../logger/logger');

const init = (req, res) => {
    logger.info(`${req.method} ${req.url}`);
    res.status(200).json({ message: 'node API is running' });
}

module.exports = { init };