const HidraService = require('../services/HidraService');

class UserController {
  async show(request, response) {
     const { id } = request.params;
 
     const user = await HidraService.getUserById({ id });
 
     return response.json(user);
   }
 
   async store(request, response) {
     const { email, username, password } = request.body;
 
     const user = await HidraService.registerUser({
       user: { email, username, password },
     });
 
     return response.json(user);
   }
 }
 
 module.exports = new UserController();