import express from 'express';
import addUser from '../controllers/User/addUser.js';
import loginUser from '../controllers/User/loginUser.js';

const UserRoutes = express.Router();

UserRoutes.post('/signup', addUser);
UserRoutes.post('/login', loginUser);

export default UserRoutes;