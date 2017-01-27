import chai, { expect } from 'chai'
import * as task from '../../src/database/queries/task'

describe('task', () => {

  const fakeTasks = [
    {
      template_task_id: 20,
      user_id: 2,
      is_complete: true,
      due_date: '2017-02-01'
    },
    {
      template_task_id: 2,
      user_id: 5,
      is_complete: true,
      due_date: '02-01-2017'
    },
    {
      template_task_id: 3,
      user_id: 5,
      is_complete: false,
      due_date: '02-01-2017'
    }
  ]

  const fakeUpdate = {
    template_task_id: 90,
    user_id: 22,
    is_complete: false,
    due_date: '2019-02-01'
  }

  beforeEach( () =>
    Promise.all([
      task.deleteAll(),
      task.add(fakeTasks)
    ])
  )

  it('should exist', () =>
    expect(task).to.be.a('object')
  )

  it('gets all tasks', () =>
    task.getAll().then( tasks => {
      expect(tasks[0].template_task_id).to.equal(20)
      expect(tasks[1].template_task_id).to.equal(2)
      expect(tasks[2].template_task_id).to.equal(3)
    })
  )

  it('gets task by id', () =>
    task.getBy('id', 7).then( task =>
      expect(task[0].user_id).to.equal(2)
    )
  )

  it('gets tasks by user_id', () =>
    task.getBy('user_id', 5).then( tasks => {
      expect(tasks[0].template_task_id).to.equal(2)
      expect(tasks[1].template_task_id).to.equal(3)
    })
  )

  it('updates a task', () =>
    task.update(14, fakeUpdate).then( task =>
      expect(task.user_id).to.equal(22)
    )

  )

  it('deletes a task', () =>
    task.expunge('user_id', 2).then( deletion => {
      expect(deletion).to.equal(1)
      return task.getBy('user_id', 2).then( nothing =>
        expect(nothing).to.deep.equal([])
      )
    })
  )

})
