const ADMIN_GITHUB_HANDLES = ['shereefb', 'carlabagdonas', 'needdra', 'punitrathore', 'yaseenagag']

export default function isAdmin(githubHandle) {
  return ADMIN_GITHUB_HANDLES.includes(githubHandle)
}
