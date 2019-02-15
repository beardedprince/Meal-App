const expect = require('chai').expect;
const request = require('request');

it('Main page content', function(done) {
    request('http://localhost:9001' , function(error, response, body) {
        expect(body).to.equal('the api is working fine now');
        done();
    });
})