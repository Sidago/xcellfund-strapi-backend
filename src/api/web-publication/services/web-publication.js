'use strict';

/**
 * web-publication service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::web-publication.web-publication');
