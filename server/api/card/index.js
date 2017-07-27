/* jshint node: true */
'use strict';
var express     = require('express');
var controller  = require('./card.controller');

var router = express.Router();

/*
    Card

    Method	    Action	        Description
    POST	    createCard	    It will create a card new inside
    PUT	        editCard	    It will edit the indicated card
    PUT	        transferCard	It will move a card from one list to another
    DELETE	    removeCard	    It will remove a card from the database

    The editCard action will be a bit special in our application, as it can be called in two different situations:
    When we edit a card’s information.
    When we change the card’s position inside the same list.
*/

router.post('/', controller.createCard);
router.put('/:id', controller.editCard);
router.put('/:id/transfer', controller.transferCard);
router.delete('/:id', controller.removeCard);

module.exports = router;