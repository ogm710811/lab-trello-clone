/* jshint node: true */
'use strict';

var express = require('express');
var controller = require('./list.controller');

var router = express.Router();

/*
    List

    Method	Action      Description
    GET	    getLists	It will load all the lists from the database
    POST	createList	It will create a new list
    PUT	    editList	It will edit a list
    DELETE	removeList	It will remove a list from the database

    As in the card, the editList method will be called in two different situations:
    When we edit a list’s information.
    When we change the list’s position in our board.
*/
router.get('/', controller.getLists);
router.post('/', controller.createList);
router.put('/:id', controller.editList);
router.delete('/:id', controller.removeList);

module.exports = router;