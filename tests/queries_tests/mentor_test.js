import chai, { expect } from 'chai'
import * as user from '../../src/database/queries/users'
import * as noob from '../../src/database/queries/noob'
import * as mentor from '../../src/database/queries/mentor'

describe('mentor', () => {
  const newUser = [
    {
      full_name: "Cheese Man",
      github_handle: "Yum_yum_Gouda",
      role: 'mentor',
      email: 'macaroni@cheese.com',
    },
    {
      full_name: "Noobaruni",
      github_handle: "Im_such_A_N00B",
      role: 'noob',
      mentor_id: 3,
      email: 'noob_dude@lg.com',
    },
    {
      full_name: "Nooberson",
      github_handle: "not_A_mentor",
      role: 'noob',
      mentor_id: 3,
      email: 'eatmypasta@sauce.com',
    }
  ]

  it('exists', () => {
    expect(mentor).to.be.a('object')
  })


  describe('noobs', () => {
    it('retrives all the noobs assigned to mentor', () => {
      Promise.all([noob.create(newUser[1]),
      noob.create(newUser[2]),
      user.create(newUser[0])])
      .then(_=> {
        mentor.noobs('Yum_yum_Gouda')
        .then(myNoobs => {
          for(let noob of myNoobs){
            expect(noob.role).to.be.equal('noob')
            expect(noob.mentor_id).to.be.equal(3)
          }
        })
      })
    })
  })
})
