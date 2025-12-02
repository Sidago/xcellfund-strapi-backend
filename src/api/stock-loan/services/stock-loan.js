'use strict';

/**
 * stock-loan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stock-loan.stock-loan');
