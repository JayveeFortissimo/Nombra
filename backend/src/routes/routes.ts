import express from 'express';
import {register} from '../controller/auth/authentication'
const routes = express.Router();

routes.get('/',register)





export default routes;