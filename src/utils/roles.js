const ALL_USER_ROLES = ['admin', 'mentor', 'noob']

const CAPABILITY_ROLES = {
  listTemplateTasks: ['admin'],
  findTemplateTask: ['admin'],
  createTemplateTask: ['admin'],
  deleteTemplateTask: ['admin'],

  listTasks: ALL_USER_ROLES,
  findTask: ALL_USER_ROLES,
  updateTask: ALL_USER_ROLES
}

export default function userCan(currentUser, capability) {
    if (!currentUser) {
        return false
    }
    const {roles} = currentUser
    if (!roles) {
        return false
    }
    if (!CAPABILITY_ROLES[capability]) {
        throw new Error(`No such capability '${capability}'`)
    }
    const permitted = roles.filter(role => (
        CAPABILITY_ROLES[capability].includes(role)
    )).length > 0

    return permitted
}
