'use strict';

module.exports = function(api) {
    var core = require('../controllers/core.controllers');
    api.route('/').get(core.index);
}