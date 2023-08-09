const User = require('../models/User');

exports.getUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
}

exports.updateUser = async (req, res, next) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const user = await User.findByIdAndUpdate(id, updates, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
}

exports.deleteUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            throw new Error('User not found');
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
    }
}
