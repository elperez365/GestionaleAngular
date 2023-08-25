const Express = require("express");
const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = Express.Router();
const userSchema = require("../models/User");
const authorize = require("../middlewares/auth");
const { validationResult } = require("express-validator");
const Cors = require("cors");

// CORS OPTIONS
var whitelist = ["http://localhost:4200", "http://localhost:4000"];
var corsOptionsDelegate = function (req: any, callback: any) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    };
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions);
};
//Get Fantoccio
router.get("/fantoccio", (req: any, res: any, next: any) => {
  return res.status(200).send('Confermato')
})
// Sign-up
router.post("/register-user", (req: any, res: any, next: any) => {
  const err = validationResult(req);
  if (err.isEmpty()) {
    bcrypt.hash(req.body.password, 20).then((hash: any) => {
      const user = new userSchema({
        nome: req.body.nome,
        numero: req.body.numero,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then((result: any) => {
          res.status(201).json({
            message: "User successfully created!",
            result: result,
          });
        })
        .catch((err: any) => {
          res.status(500).json({
            error: err,
          });
        });
    });
  } else {
    return res.status(422).jsonp(err.array());
  }
});

// Sign-in
router.post("/signin", (req: any, res: any, next:any) => {
  let getUser: any;
  userSchema
    .findOne({
      email: req.body.email,
    })
    .then((user:any) => {

      if (!user) {
        return res.status(401).json({
          message: "Authentication failed",
        });
      }
      getUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((response: any) => {
      if (!response) {
        return res.status(401).json({
          message: "Authentication failed",
        });
      }
      let jwtToken = Jwt.sign(
        {
          email: getUser.email,
          userId: getUser._id,
        },
        "longer-secret-is-better",
        {
          expiresIn: "1h",
        }
      );
      res.status(200).json({
        token: jwtToken,
        expiresIn: 3600,
        _id: getUser._id,
      });
    })
    .catch((err: any) => {
      return res.status(401).json({
        message: "Authentication failed" + err,
      });
    });
});

// // Get Users
// router.route("/", Cors(corsOptionsDelegate)).get(async (req: any, res: any, next:any) => {
//   await userSchema
//     .find()
//     .then((result: any) => {
//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(result));
//     })
//     .catch((err: any) => {
//       return next(err);
//     });
// });

// // Get Single User
// router.route("/user-profile/:id").get(authorize, async (req: any, res: any, next:any) => {
//   await userSchema
//     .findById(req.params.id, req.body)
//     .then((result:any) => {
//       res.json({
//         data: result,
//         message: "Data successfully retrieved.",
//         status: 200,
//       });
//     })
//     .catch((err: any) => {
//       return next(err);
//     });
// });

// // Update User
// router.route("/update-user/:id").put(async (req:any , res: any, next: any) => {
//   await userSchema
//     .findByIdAndUpdate(req.params.id, {
//       $set: req.body,
//     })
//     .then((result: any) => {
//       res.json({
//         data: result,
//         msg: "Data successfully updated.",
//       });
//     })
//     .catch((err: any) => {
//       console.log(err);
//     });
// });

// // Delete User
// router.route("/delete-user/:id").delete(async (req:any , res: any, next: any) => {
//   await userSchema
//     .findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json({
//         msg: "Data successfully updated.",
//       });
//     })
//     .catch((err: any) => {
//       console.log(err);
//     });
// });

module.exports = router;
