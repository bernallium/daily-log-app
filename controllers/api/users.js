  const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET; // Used to sign the JWT

module.exports = {
  index,
  show,
  // create,
  delete: deleteOne,
  update,
  signup,
  login,
};

async function index(req, res) {
  const users = await User.find({});
  console.log(users);
  res.status(200).json(users);
}

async function show(req, res) {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
}

// async function create(req, res) {
//   const user = await User.create(req.body);
//   res.status(201).json(user);
// }

async function deleteOne(req, res) {
  const deletedUser = await User.findByIdAndRemove(req.params.id);
  res.status(200).json(deletedUser);
}

async function update(req, res) {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
  res.status(200).json(updatedUser);
}

// Provides a JWT when a user signs up or logs in
async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    // Be sure to first delete data that should not be in the token
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign( // sign method creates a JWT
    {user}, // Store the user document in the token's data payload
    SECRET,
    {expiresIn: '24h'}
  );
}