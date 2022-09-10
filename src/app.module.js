const { createModule } = require('./libs/module');
const { productsModule } = require('./modules/products/products.module');
const { clientsModule } = require('./modules/clients/clients.module');
const { reportsModule } = require('./modules/reports/reports.module');

const appModule = createModule();

appModule.use(productsModule);
appModule.use(clientsModule);
appModule.use(reportsModule);

module.exports = { appModule };
