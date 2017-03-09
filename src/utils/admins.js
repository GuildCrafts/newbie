const ADMIN_GITHUB_HANDLES = ['shereefb', 'carlabagdonas', 'needdra', 'punitrathore', 'HJBowers', 'zezemanolo']

export default function isAdmin(githubHandle) {
  return ADMIN_GITHUB_HANDLES.includes(githubHandle)
}
