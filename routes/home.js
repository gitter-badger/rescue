function index(req, res, next) {
    console.log('ROUTER!!!!', '/');
}

function home(req, res, next) {
    console.log('we are home..');
}

module.exports = {
    "index": index,
    "home": home
};
