'use strict';
var Devs = require('../database/models/devModel');
var apiMethods = require('../database/methods/devAPI/apiMethods');
var sinon = require('sinon');
var expect = require('chai').expect;

describe('apiMethods middleware test', function() {
  describe('storePost function', function() {
    var req = {
      other: { test: 'failed' },
      body: {
        key1: 'val1',
        key2: 'val2',
        key3: 'val3'
      }
    }
    var res = {
      locals: {}
    };
    var called = 0;
    var next = function() {
      called++;
    }

    apiMethods.storePost(req, res, next);

    it('should not obtain keys other than body from req', function() {
      expect(res.other).not.exist;
    });

    it('should obtain all key and value pairs in body from req', function() {
      expect(res.locals.post.key1).to.equal('val1');
      expect(res.locals.post.key2).to.equal('val2');
      expect(res.locals.post.key3).to.equal('val3');
    });

    it('should call the function next once', function() {
      expect(called).to.equal(1);
    });
  });

  describe('postToCollection function', function() {
    // test code goes here
  });
});
