const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User'); // import your User mongoose model
const client = new OAuth2Client(process.env.WEB_CLIENT_ID); // replace with your Web Client ID

exports.signInWithGoogle = async (req, res) => {
  const { idToken } = req.body;

  try {
    // Verify the integrity of the token
    const ticket = await client.verifyIdToken({
      idToken,
      audience: WEB_CLIENT_ID, // replace with your Web Client ID
    });
    
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    // Check if the user already exists in your database
    let user = await User.findOne({ googleId: userid });

    if (!user) {
      // If the user does not exist, create a new user
      user = new User({ googleId: userid, email: payload.email, name: payload.name });
      await user.save();
    }

    // Optionally create a token or a session here

    // Send a response back to the client
    res.json({ message: 'User signed in successfully', user });
  } catch (error) {
    res.status(400).json({ message: 'Authentication failed', error });
  }
};
