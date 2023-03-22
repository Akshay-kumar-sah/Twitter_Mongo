const {UserRepository} = require('../repository/index');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }


  async signup (data) {
    const user = await this.userRepository.create(data);
    return user;
  }
}


module.exports = UserService;