const { createModule } = require('./libs/module');
const { productsModule } = require('./modules/products/products.module');

const appModule = createModule();

appModule.use(productsModule);

module.exports = { appModule };
