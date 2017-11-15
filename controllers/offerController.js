const Offer = require('../models/Offer');
const getOffers = (req, res) => {
    return Offer.find({}).limit(req.params.limit).then(docs => res(docs));
};
const postOffer = (req, res) => {
    const newOffer = new Offer(req.payload);
    return newOffer.save().then((err, doc) => res(err || doc));
};
const deleteOffer = (req, res) => {
    return Offer.deleteOne(req.params.id).then(docs => res(docs));
};
exports.postOffer = postOffer;
exports.deleteOffer = deleteOffer;
exports.getOffers = getOffers;
exports.default = (server) => {
    server.route({
        method: 'GET',
        path: '/offers/{limit?}',
        handler: getOffers
    });
    server.route({
        method: 'POST',
        path: '/offer',
        handler: postOffer
    });
    server.route({
        method: 'DELETE',
        path: '/offers/{id}',
        handler: deleteOffer
    });
};
