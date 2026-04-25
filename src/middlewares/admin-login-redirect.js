'use strict';

module.exports = () => {
  return async (ctx, next) => {
    const adminBase = '/backend/admin';
    const oldAdminBase = '/admin';

    if (ctx.method === 'GET' && ctx.path.startsWith(`${oldAdminBase}/auth`)) {
      ctx.redirect(`${adminBase}${ctx.path.slice(oldAdminBase.length)}${ctx.search}`);
      return;
    }

    await next();
  };
};
