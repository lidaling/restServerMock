var should = require('should');
var createServer = require('../rest_server_mock').create;

describe('rest_server_test', function () {

    it('should simply pass', function () {
        true.should.be.true;
    });

    it('should create a server object', function () {
        var server = undefined;
        server = createServer();
        server.should.be.ok;
    });

    it('should have a member function run()', function () {
        var server = undefined;
        server = createServer();
        server.run.should.be.ok;
        should(typeof server.run).equal('function');
    });

});
