const init = (req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.status(200).json({ message: 'node API is running' });
}

module.exports = { init };