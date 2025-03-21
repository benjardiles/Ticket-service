import indexRoutes from './index.routes';
import authRoutes from './auth.routes';
import ticketsRoutes from './tickets.routes';
import comentariesRoutes from './comentaries.routes';


export default (app) => {
    app.use('/', indexRoutes);
    app.use('/auth', authRoutes);
    app.use('/tickets', ticketsRoutes);
    app.use('/comentaries', comentariesRoutes);
}