const ADMIN_GITHUB_HANDLES = ['shereefb', 'carlabagdonas', 'needdra', 'punitrathore', 'hjbowers', 'zezemanolo']

export default function isAdmin(githubHandle) {
  return ADMIN_GITHUB_HANDLES.includes(githubHandle)
}
