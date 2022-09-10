const { createModule } = require('./libs/module');
const { productsModule } = require('./modules/products/products.module');
const { clientsModule } = require('./modules/clients/clients.module');

const appModule = createModule();

appModule.use(productsModule);
appModule.use(clientsModule);

module.exports = { appModule };
