import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'

import { UserModel } from '../models/UserModel'
import { app } from '../app'
import * as user from './data/user.json'
import * as invalidNameUser from './data/invalid_name_user.json'
import * as invalidEmailUser from './data/invalid_email_user.json'
import * as invalidBirthdayUser1 from './data/invalid_birthday_user1.json'
import * as invalidBirthdayUser2 from './data/invalid_birthday_user2.json'
import * as users from './data/users.json'

const should = chai.should()

chai.use(chaiHttp)

describe('User integration tests', () => {
  beforeEach(done => {
    UserModel.deleteMany({}, () => done())
  })

  it('should save a valid user', done => {
    chai.request(app)
      .post('/users')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201)
        done()
      })
  })

  it('should not save an user with an invalid name', done => {
    chai.request(app)
      .post('/users')
      .send(invalidNameUser)
      .end((err, res) => {
        res.should.have.status(400)
        done()
      })
  })

  it('should not save an user with an invalid e-mail', done => {
    chai.request(app)
      .post('/users')
      .send(invalidEmailUser)
      .end((err, res) => {
        res.should.have.status(400)
        done()
      })
  })

  it('should not save an user with a future birthday', done => {
    chai.request(app)
      .post('/users')
      .send(invalidBirthdayUser1)
      .end((err, res) => {
        res.should.have.status(400)
        done()
      })
  })

  it('should not save an user with an invalid birthday format', done => {
    chai.request(app)
      .post('/users')
      .send(invalidBirthdayUser2)
      .end((err, res) => {
        res.should.have.status(400)
        done()
      })
  })

  it('should return all saved users', done => {
    Object.keys(users).forEach(async (key) => {
      const user = users[key]
      await chai.request(app)
        .post('/users')
        .send(user)
    })

    chai.request(app)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200)
        const { users } = res.body
        expect(users.length).to.equal(4)
        done()
      })
  })
})
