'use strict';

/**
 * collateralized-funding service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::collateralized-funding.collateralized-funding');
