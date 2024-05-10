const router = require ("express").Router()
const {signUp, login, forgotPassword, resetPassword}= require ('../controllers/userControllers.js')


router.post('/signUp', signUp)
router.post('/login', login)
router.post('/forgotPassword', forgotPassword)
router.patch('/resetPassword', resetPassword)

module.exports = router;