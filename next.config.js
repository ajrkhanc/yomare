module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  redirects: async () => [
    {
      source: '/:path*',
      // has: [{ type: 'host', value: 'www.yomamultinational.com' }],
      destination: 'https://yomabusinesssolutions.com/:path*',
      permanent: true
    }
    // {
    //   source: '/blogs/tips-to-stay-focused-while-working-remotely',
    //   destination: '/tips-to-stay-focused-while-working-remotely',
    //   permanent: true,
    // }

  ]
}
