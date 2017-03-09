import chai, { expect } from 'chai'
import * as tag from '../../src/database/queries/tag'

describe('tag', () => {

  const fakeTags = [
    {
      name: 'Massage'
    },
    {
      name: 'Spa'
    }
  ]

  beforeEach( () =>
    Promise.all([
      tag.deleteAll(),
      tag.add(fakeTags)
    ])
  )

  it('should exist', () =>
    expect(tag).to.be.a('object')
  )

  it('should return all tags ordered ascending by name', () =>
    tag.getAll().then( tags => {
      expect( fakeTags[0].name ).to.equal('Massage')
      expect( fakeTags[1].name ).to.equal('Spa')
    })
  )

  it('deletes a tag by id', () =>
    tag.expunge('id', 1).then( _ =>
      tag.getBy('id', 1).then( deletedTag =>
        expect(deletedTag).to.deep.equal([])
      )
    )
  )

})
