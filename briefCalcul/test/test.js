const calc = require('../index')
const assert = require('assert')

describe('calculator',function(){
    it('should add two numbres', function(done){
        let total = calc.add(5,2);
        assert.equal(total,7);
        done();
    }),
    it('should Substract two numbres', function(done){
        let total = calc.substract(5,2);
        assert.equal(total,7);
        done();
    }),
    it('should divide two numbres', function(done){
        let total = calc.divide(5,2);
        assert.equal(total,7);
        done();
    }),
    it('should multiply two numbres', function(done){
        let total = calc.multiply(5,2);
        assert.equal(total,7);
        done();
    })
})