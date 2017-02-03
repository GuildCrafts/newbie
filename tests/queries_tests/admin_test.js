import chai, { expect } from 'chai'
import * as user from '../../src/database/queries/users'
import * as noob from '../../src/database/queries/noob'
import * as admin from '../../src/database/queries/admin'

describe('admin', () => {
  const newUser = [
    {
      full_name: "Cheese Man1",
      github_handle: "Yum_yum_Gouda1",
      role: 'mentor',
      email: '1macaroni@cheese.com',
    },
    {
      full_name: "Mr.Krabs",
      github_handle: "I_love_money",
      role: 'noob',
      email: 'ILoveCash@money.com',
    },
    {
      full_name: "Pear Da Wale",
      github_handle: "BoysWhoCry",
      role: 'noob',
      mentor_id: 3,
      email: 'ILuvBoisWho@cry.com',
    }
  ]

  beforeEach( () => {
    return Promise.all([
      noob.deleteAll(),
      user.deleteAll(),
      noob.create(newUser[1]),
      noob.create(newUser[2]),
      user.create(newUser[0])
    ])
  })

  it('exists', () => {
    expect(admin).to.be.a('object')
  })

  describe('assignTo', () => {
    it('assigns a noob to a mentor', () => {
      return admin.assignTo('Yum_yum_Gouda1', 'I_love_money')
      .then(updatedUser => {
        return user.findByHandle('Yum_yum_Gouda1').then( mentor =>{
          expect(updatedUser.full_name).to.be.equal('Mr.Krabs')
          expect(updatedUser.mentor_id).to.be.equal(mentor.id)
        })
      })
    })
  })
})
