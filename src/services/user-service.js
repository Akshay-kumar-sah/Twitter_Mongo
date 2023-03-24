const {UserRepository} = require('../repository/index');

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }


  async signup (data) {
    const user = await this.userRepository.create(data);
    return user;
  }


async getUserByEmail (email) {
   try {
      const user = await this.userRepository.findBy({email});
      return user;
   } catch (error) {
     throw error;
   }
}


 async signin (data) {
  try {
    const user = await this.getUserByEmail(data.email);
    console.log('user',user);
    if(!user){
      throw {
        message:'no user found'
      }
    }
   // console.log(data.password);
    if(!user.comparePassword(data.password)){
      throw {
       
        message:'incorrect password'
      }
    }
    const token = user.genJWT();
   // console.log('token',token);
   return token;
  

  } catch (error) {
    throw error;
  }
 }
}

module.exports = UserService;