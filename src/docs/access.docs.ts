/**
 * @swagger
 * components:
 *   securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormat: JWT
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: Email address
 *         password:
 *           type: string
 *           description: Minimum of 8 characters long
 *     RefreshToken:
 *       type: object
 *       required:
 *         - refreshToken
 *       properties:
 *         refreshToken:
 *           type: string
 *           description: refresh token
 *     Tokens:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *           description: access token
 *         refreshToken:
 *           type: string
 *           description: refreshToken
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The username
 *         lastname:
 *           type: string
 *           description: The last name
 *         email:
 *           type: string
 *           description: Email address
 *         profilePicUrl:
 *           type: string
 *           description: piture profile
 *         verified:
 *           type: string
 *           description: verification of account
 *         status:
 *           type: string
 *           description: user status active or not
 *     CreateUser:
 *       type: object
 *       required:
 *         - name
 *         - lastname
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           description: The username
 *         lastname:
 *           type: string
 *           description: The last name
 *         email:
 *           type: string
 *           description: Email address
 *         password:
 *           type: string
 *           description: Minimum of 8 characters long
 *         profilePicUrl:
 *           type: string
 *           description: user picture profile
 */

/**
 * @swagger
 * tags:
 *   name: Access
 *   description: The Access managing API
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                   $ref: '#/components/schemas/Login'
 *     tags: [Access]
 *     responses:
 *       200:
 *         description: Login
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   user:
 *                      $ref: '#/components/schemas/User'
 *                   tokens:
 *                      $ref: '#/components/schemas/Tokens'
 *
 */

/**
 * @swagger
 * /refresh:
 *   post:
 *     summary: Register
 *     tags: [Access]
 *     requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                   $ref: '#/components/schemas/RefreshToken'
 *     responses:
 *       200:
 *         description: The list of the register
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Tokens'
 *     security:
 *      - bearerAuth: []
 *
 */

/**
 * @swagger
 * /logout:
 *   delete:
 *     summary: Logout
 *     tags: [Access]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                      default: Logout success
 *
 *     security:
 *      - bearerAuth: []
 *
 */
