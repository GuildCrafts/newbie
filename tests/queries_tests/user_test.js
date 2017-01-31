import chai, { expect } from 'chai'
import * as user from '../../src/database/queries/users'

describe('user', () => {
  const newUser = [
    {
      full_name: "Ugly Face",
      github_handle: "Trump_Butt",
      role: 'mentor',
      email: 'fart_monster@hemorroid.butt',
    },
    {
      full_name: "Nice Person",
      github_handle: "Drake_fabulous",
      role: 'mentor',
      email: 'youfancynow@ovo.com',
    },
    {
      full_name: "Nancy Drew",
      github_handle: "mystery_solved",
      role: 'mentor',
      email: 'isolvedthemystery@detective.org',
    }
  ]

  it('exists', () => {
    expect(user).to.be.a('object')
  })

  describe('create', () => {
    it('inserts user into table', () => {
      return user.create(newUser[0]).then(user => {
        expect(user[0].full_name).to.equal('Ugly Face')
      })
    })
  })

  describe('findByHandle', () => {
    it('return the all of the user data related to github_handle', () => {
      return user.create(newUser[1])
      .then(_ => {
        return user.findByHandle('Drake_fabulous')
        .then(user => {
          expect(user.full_name).to.equal('Nice Person')
        })
      })
    })
  })

  describe('updateByHandle', () => {
    it('updates the name of a user associated with github_handle', () => {
      return user.create(newUser[2])
      .then(_ => {
        return user.updateByHandle('mystery_solved', {full_name: 'Veronica Mars'})
        .then(user => {
          expect(user.full_name).to.equal('Veronica Mars')
        })
      })
    })
  })

  describe('deleteByHandle', () => {
    it('removes user associated with github_handle from database', () => {
      return user.deleteByHandle('Trump_Butt').then(_ => {
        return user.findByHandle('Trump_Butt')
        .then(empty => {
          expect(empty).to.be.equal( undefined )
        })
      })
    })
  })

  describe('findByRole', () => {
    it('finds the role associated with user', () => {
      return user.findByRole('mentor').then(user => {
        for(let mentor of user){
          expect(mentor.role).to.be.equal('mentor')
        }
      })
    })
  })

  describe('findAll', () => {
    it('finds all the users in the users table', () => {
      return user.findAll('mentor').then(user => {
        let count = 0
        for(let entry of user){
          count += 1
        }
        expect(user.length).to.be.equal(count)
      })
    })
  })

})
