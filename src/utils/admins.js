const ADMIN_GITHUB_HANDLES = ['shereefb', 'carlabagdonas', 'needdra', 'punitrathore', 'thamaranth']

export default function isAdmin(githubHandle) {
  return ADMIN_GITHUB_HANDLES.includes(githubHandle)
}
