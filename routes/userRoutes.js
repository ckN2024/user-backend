import express from "express"
import { signUp, verify, uploadProfilePic, getUserById, getAllUsers } from "../controllers/userController.js"
import authenticateUser from "../middlewares/authMiddleware.js"
// import multer from "multer";

// const upload = multer({ dest: 'uploads/' });

const router = express.Router()

router.route('/').post(signUp).get(authenticateUser, getUserById)
router.route('/getallusers').get(getAllUsers)
router.route('/verify').post(verify)
// router.route('/favourites').post(authenticateUser, addFavourites).patch(authenticateUser, removeFromFavourites)
// router.route('/uploads').post(authenticateUser, upload.single('file'), uploadProfilePic) // add authentication middleware

export default router