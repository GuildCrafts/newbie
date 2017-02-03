import chai, { expect } from 'chai'
import * as noob from '../../src/database/queries/noob'

describe('noob', () => {
  const newNoobs = [
    {
      full_name: "New Noobie",
      github_handle: "beep_bop",
      role: 'noob',
      start_date: '2017-01-12',
      email: 'newperson@newness.com',
    },
    {
      full_name: "Shoe",
      github_handle: "Just_a_Shoe",
      role: 'noob',
      start_date: '2017-01-12',
      email: 'aRealLiveShoe@realshoe.com',
    },
    {
      full_name: "Solange K-nowels",
      github_handle: "dont_touch_my_hair",
      role: 'noob',
      start_date: '2017-01-12',
      email: 'IHitJZ@elevator.com',
    },
    {
      full_name: "Foot",
      github_handle: "smelly_foot",
      role: 'noob',
      start_date: '2017-02-12',
      email: 'so_smelly@PU.com',
    }
  ]

  it('exists', () => {
    expect(noob).to.be.a('object')
  })

  describe('create', () => {
    it('inserts noob into table', () => {
      return noob.create(newNoobs[0]).then(noobFound => {
        return expect(noobFound[0].full_name).to.equal('New Noobie')
      })
    })
  })

  describe('findByHandle', () => {
    it('return the all of the noob data related to github_handle', () => {
      return noob.create(newNoobs[1])
        .then(_ => {
          return noob.findByHandle('Just_a_Shoe')
          .then(noobFound => {
            expect(noobFound.full_name).to.equal('Shoe')
          })
        })
    })
  })

  describe('updateByHandle', () => {
    it('updates the name of a noob associated with github_handle', () => {
      return noob.create(newNoobs[2])
      .then(_ => {
        return noob.updateByHandle('dont_touch_my_hair', {full_name: 'Da REAL Solange'})
        .then(noobFound => {
          expect(noobFound.full_name).to.equal('Da REAL Solange')
        })
      })
    })
  })

  describe('deleteByHandle', () => {
    it('removes noob associated with github_handle from database', () => {
      return noob.deleteByHandle('Just_a_Shoe').then(_ => {
        return noob.findByHandle('Just_a_Shoe')
        .then(empty => {
          expect(empty).to.be.equal( undefined )
        })
      })
    })
  })

  describe('getAllByStartDate', () => {
    it('finds all noobs with the same start_date', () => {
      return noob.getAllByStartDate('2017-01-12').then(noobFound => {
        expect(noobFound.length).to.be.equal(2)
      })
    })
  })

  describe('findAll', () => {
    it('finds all the noobs in the noobs table', () => {
      return noob.findAll().then(noobFound => {
        let count = 0
        for(let noob in noobFound) {
          count += 1
        }
        expect(noobFound.length).to.be.equal(count)
      })
    })
  })

  describe('graduate', () => {
    it('graduates a noob to mentor', () => {
      return noob.graduate('dont_touch_my_hair').then(_ => {
        return noob.findByHandle('dont_touch_my_hair').then(empty => {
          expect(empty).to.be.equal( undefined )
        })
      })
    })
  })

})
