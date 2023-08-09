const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { OAuth2Client } = require('google-auth-library');


exports.register = async (req, res, next) => {
    const { email, password, role } = req.body;
    const sanitizedPassword = password.trim(); // Sanitize the password by removing leading and trailing whitespaces
    console.log('Sanitized password:', sanitizedPassword); // Add this line to print the sanitized password
    const hashedPassword = bcrypt.hashSync(sanitizedPassword, 8);
    const user = new User({ email, password: hashedPassword, role });

    try {
        await user.save();
        res.status(200).json({ message: "User registered successfully" });
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        console.log('Found user:', user); // Add this line to log the user object from the database

        // Comparing the password with the stored hash
        const passwordMatches = user.comparePassword(password);

        console.log('Password matches:', passwordMatches);

        if (!passwordMatches) {
            throw new Error('Invalid email or password');
        }

        // generate token
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: 86400 });

        res.status(200).json({ auth: true, token });
    } catch (error) {
        next(error);
    }
}

exports.logout = (req, res, next) => {
    res.status(200).json({ message: "User logged out successfully" });
}
