import User from "../../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function addUser(req, res) {
    const secretKey = process.env.SECRET_KEY;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        });
        const token = jwt.sign({
            email: req.body.email
        }, secretKey);
        res.json({ 'status': 'ok', user: token });
    } catch (error) {
        res.json({'status': 'error'});
    }
}

export default addUser;