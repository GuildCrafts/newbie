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

  const fakeTemplateTasks = [
    {
      title: 'Massage',
      description: 'Give a senior Learner a foot massage for one hour',
      user_role: 'noob',
      days_to_complete: 7,
      id:0
    },
    {
      title: 'Breath',
      description: 'Take 7 deep breaths',
      user_role: 'noob',
      days_to_complete: -4,
      id: 100000
    }
  ]

  const fakeUser = {
    id: 1,
    start_date: '2017-02-26'
  }

  const fakeTime = new Date('2017-03-05 00:00:00-08')

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

  it('creates tasks for a user from a list of template tasks', () =>
    task.convertTemplateTasks(fakeTemplateTasks, fakeUser).then( convertedTasks => {
      expect(convertedTasks[0].template_task_id).to.equal(0)
      expect(convertedTasks[0].description).to.equal('Give a senior Learner a foot massage for one hour')
      expect(convertedTasks[0].due_date.getTime()).to.equal(fakeTime.getTime())
      expect(convertedTasks[0].title).to.equal('Massage')
    })
  )

})
