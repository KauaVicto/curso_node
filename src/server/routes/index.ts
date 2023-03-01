import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';

const router = Router();

router.get('/', (req, res) => {
    return res.send('Layla, te amoo!!!❤');
});

router.post('/cidades', CidadesController.createBodyValidator, CidadesController.create);

export { router };