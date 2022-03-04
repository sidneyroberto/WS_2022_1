import { User, UserModel } from '../models/UserModel'


export default class UserController {
  async save(user: User): Promise<User> {
    const savedUser = await UserModel.create(user)
    return savedUser
  }

  async findAll(): Promise<User[]> {
    const users = await UserModel.find()
    return users
  }
}
