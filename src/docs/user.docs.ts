
/**
 * @swagger
 * /users/all:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [User]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *        - in: query
 *          name: name
 *          schema:
 *            type: string
 *        - in: query
 *          name: lastname
 *          schema:
 *            type: string
 *        - in: query
 *          name: email
 *          schema:
 *            type: string
 *        - in: query
 *          name: sort
 *          schema:
 *            type: string
 *        - in: query
 *          name: deleted
 *          schema:
 *            type: string
 *        - in: query
 *          name: page
 *          schema:
 *            type: integer
 *        - in: query
 *          name: perPage
 *          schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *     security:
 *      - bearerAuth: []
 */


/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete user by id
 *     tags: [User]
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *     responses:
 *       200:
 *         description: User deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 * 
 *     security:
 *      - bearerAuth: []
 */