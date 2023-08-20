const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
  const user = new User(req.body);
  try {
    const salt = await bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(user.password, salt);
    await user.save();
    res.status(200).send("Usuario creado correctamente");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username } });

  if (user) {
    const validPassword = await bcrypt.compareSync(password, user.password);
    if (validPassword) {
      if (!user.active) {
        res.status(400).send("Su usuario no está activado");
      } else {
        const token = jwt.sign(
          {
            id: user.id,
            name: user.name,
            perfil: user.perfil,
            username: user.username,
          },
          "top_secret",
          {
            expiresIn: "1h",
          }
        );
        res.send(token);
      }
    } else {
      res.status(400).send("Contraseña Incorrecta");
    }
  } else {
    res.status(401).send("El usuario no existe");
  }
};
