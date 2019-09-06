/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  'GET /api/v1/script/get': { action: 'script/get' },
  'POST /api/v1/script/create': { action: 'script/create' },
  'PUT /api/v1/script/update/:id': { action: 'script/update' },
  'DELETE /api/v1/script/delete/:id': { action: 'script/delete' },
  
  'GET /api/v1/johan/get': { action: 'johan/get' },
  'POST /api/v1/johan/create': { action: 'johan/create' },
  'PUT /api/v1/johan/update/:id': { action: 'johan/update' },
  'DELETE /api/v1/johan/delete/:id': { action: 'johan/delete' },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
