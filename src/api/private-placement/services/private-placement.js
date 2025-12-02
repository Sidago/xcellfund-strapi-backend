'use strict';

/**
 * private-placement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::private-placement.private-placement');
