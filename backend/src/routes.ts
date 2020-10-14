import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';
import multer from 'multer';
import uploadconfig from './config/upload';

const routes = Router();
const upload = multer(uploadconfig);

routes.get('/orphanages', OrphanagesController.index);
routes.get('/orphanages/:id', OrphanagesController.show);
routes.post('/orphanages', upload.array('images') ,OrphanagesController.create);

export default routes;