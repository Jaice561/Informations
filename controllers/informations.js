const Information = require('../models/information');

module.exports = {
new: newInformation,
create,
index
};

function newInformation(req, res) {
    res.render('informations/new');
  }

function create(req, res) {
const information = new Information(req.body);
    // information.user = req.user._id;
    information.save(function(err) {
        if (err) return res.render('informations/new');
        res.redirect('informations/new');
    })
}

function index(req, res) {
    Information.find({}, function(err, informations) {
        res.render('informations/index', {informations});
    })
}