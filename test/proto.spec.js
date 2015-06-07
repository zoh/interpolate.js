/**
 * Created by zoh on 07.06.15.
 */
var expect = require('chai').expect;
require('../index.proto');

describe('Spec interpolate', function () {

  describe('with prototype', function () {

    it('simple enumeration params', function () {
      var res = '?, ?!'.format('Hello', 'World');
      expect(res).to.eq('Hello, World!')
    });

    it('custom expression', function () {
      var res = '${val + 123}'.format({val: 123});
      expect(res).to.eq('246')
    });

  });

});