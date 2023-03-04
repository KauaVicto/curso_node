import { Request, RequestHandler, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';

interface ICidade {
    nome: string;
    estado: string;
}

const cidadeValidation = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(3),
});

export const createBodyValidator = validation('body', cidadeValidation);



export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

    console.log(req.body);

    return res.send('Cidade criada com sucesso!!!!');

};