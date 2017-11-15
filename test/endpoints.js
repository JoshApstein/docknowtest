const assert = require('assert');
const offerController = require('../controllers/offerController');
console.log(offerController);
describe('offerController', () => {
  describe('Posts new Offer', () => {
    it('should return that new Offer', () => {
      assert.equal(offerController.postOffer({body:{name:'josh'}}, data => data), {name:'josh'});
    })
  });
})
