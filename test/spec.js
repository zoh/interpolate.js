/**
 * Created by zoh on 07.06.15.
 */
var expect = require('chai').expect;
var interpolate = require('../index');

describe('Spec interpolate', function () {

  describe('without prototype', function () {

    it('simple enumeration params', function () {
      var res = interpolate('?, ?!', 'Hello', 'World');
      expect(res).to.eq('Hello, World!')
    });

    it('ignore  "?"', function () {
      var res = interpolate("?, ?/!", 'Hello', 'World');
      expect(res).to.eq('Hello, ?!')
    });

    describe('object context ', function () {
      it('simple object', function () {
        var res = interpolate('${param1}, ${param2}!', {
          param1: 'Hello',
          param2: 'World'
        });

        expect(res).to.eq('Hello, World!')
      });

      it('deep object', function () {
        var res = interpolate('${param1.param2.param3}!', {
          param1: {
            param2: { param3: 'Yahoo' }
          }
        });

        expect(res).to.eq('Yahoo!')
      });
    });
  });

});