'use strict';

/**
 * @ngdoc service
 * @name buildingAddressesAppApp.MailStop
 * @description
 * # MailStop
 * Factory in the buildingAddressesAppApp.
 */
angular.module('mailStopService', [])
  .factory('MailStop', function($http) {
    // Service logic
    // ...
    var mailStopFactory = {};

    // get a single mail stop
    mailStopFactory.get = function(id) {
      return $http.get('http://128.114.96.140:8080/api/mailstops/' + id);
    };

    // get all mail stops
    mailStopFactory.all = function() {
      return $http.get('http://128.114.96.140:8080/api/mailstops/', { cache: true });
    };

    // create a mail stop
    mailStopFactory.create = function(mailStopData) {
    return $http.post('http://128.114.96.140:8080/api/mailstops/', mailStopData);
  };

  // update a mail stop
    mailStopFactory.update = function(id, mailStopData) {
    return $http.put('http://128.114.96.140:8080/api/mailstops/' + id, mailStopData);
  };

  // delete a mail stop
    mailStopFactory.delete = function(id) {
    return $http.delete('http://128.114.96.140:8080/api/mailstops/' + id);
  };

  // return our entire mailStopFactory object
  return mailStopFactory;


  });
