import indexRoutes from './index.routes';
import ticketsRoutes from './tickets.routes';

export default (app) => {
    app.use('/', indexRoutes);
    app.use('/tickets', ticketsRoutes);
}