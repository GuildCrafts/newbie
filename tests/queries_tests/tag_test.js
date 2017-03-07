import chai, { expect } from 'chai'
import * as tag from '../../src/database/queries/tag'

describe('tag', () => {

  const fakeTag = [
    {
      names: 'Massage'
    },
    {
      names: 'Spa'
    }
  ]

  it('should exist', () =>
    expect(tag).to.be.a('object')
  )

  it('should return all tags ordered ascending by names', () =>
    tag.getAll().then( tags => {
      expect( fakeTag[0].names ).to.equal('Massage')
      expect( fakeTag[1].names ).to.equal('Spa')
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
