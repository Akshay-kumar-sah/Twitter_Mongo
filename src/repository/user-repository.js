const User = require('../models/user');
const CrudRepository = require('../repository/crud-repository');

class UserRepository extends CrudRepository {
  
    constructor (){
        super(User);
    }
}


module.exports = UserRepository;