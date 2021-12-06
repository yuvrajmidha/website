module.exports = {
  distDir: 'build',
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'codbrix-v1'
  },
}