'use strict';

/**
 * employee-pride service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-pride.employee-pride');
