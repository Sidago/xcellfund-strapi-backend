'use strict';

/**
 * seed-investment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seed-investment.seed-investment');
