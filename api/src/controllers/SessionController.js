const HidraService = require('../services/HidraService');

class SessionController {
  async store(request, response) {
    const { email, password } = request.body;

    const session = await HidraService.loginUser({
      user: { email, password },
    });

    return response.json(session);
  }
}

module.exports = new SessionController();