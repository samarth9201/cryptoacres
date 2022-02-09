import User from "../../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function loginUser(req, res) {
    const user = await User.findOne({email: req.body.email});
    const secretKey = process.env.SECRET_KEY;
    if(!user) { //user not found
        res.json({ 'status': 'error', 'error': 'Invalid Login', user: false });
    }
    
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if(isPasswordValid) {
        const token = jwt.sign({
            email: user.email 
        }, secretKey);
        res.json({ 'status': 'ok', user: token });
    }
    else { 
        res.json({ 'status': 'error', user: false });
    }
}

export default loginUser;