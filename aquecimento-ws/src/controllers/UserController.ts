import UserDAO from '../models/dao/UserDAO'
import User from '../models/entities/User'

class UserController {
  private _userDAO: UserDAO

  constructor() {
    this._userDAO = new UserDAO()
  }

  save(user: User) {
    this._userDAO.save(user)
  }

  getAll() {
    const users = this._userDAO.getAll()
    return users
  }
}

export default UserController
