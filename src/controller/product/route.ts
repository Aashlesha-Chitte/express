import { Router } from 'express';
import ProductController from './productController';
const route = Router();

route.route('/products').post(
  ProductController.createProducts,
);

route.route('/products').get(
  ProductController.getProducts,
);

route.route('/products/:id').put(
  ProductController.updateProducts,
);

route.route('/products/:id').delete(
  ProductController.deleteProducts,
);

/**
 * @
 * /config/activationDestinations:
 *   put:
 *     security:
 *       - APIKeyHeader: []
 *     tags:
 *       - Activation Destinations
 *     summary: Update Activation Destinations - Destination config. [QA testing is not required]
 *     description: Update Activation Destinations.
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: Request Params
 *         in: body
 *         description: Update activation destination config params
 *         schema:
 *           $ref: '#/definitions/DestinationConfig'
 *         required:
 *           - destinationConfig
 *           - destinationCode
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Created Successfully
 *       422:
 *         description: Unprocessable Entity
 *       500:
 *         description: Internal Server Error
 */
// route.route('/activationDestinations').put(
//   // auth,
//   // serviceAccountValidator,
//   // validationHandler(validation.updateDestinationConfig),
//   ProductController.updateDestinationConfig,
// );

export default route;
