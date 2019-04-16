//calcTest.js
'use strict'

var assert = require('power-assert');
var calc = require('../src/calc');

describe('addファンクションの単体テスト',
  function() {
    it('add(1, 1) = 2', function() {
      var result = calc.add(1, 1);

      assert.strictEqual(result, 2);
    });
  });
