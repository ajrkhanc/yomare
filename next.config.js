module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  redirects: async () => [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.yomamultinational.com' }],
      destination: 'https://yomamultinational.com/:path*',
      permanent: true
    },

    {
      source: '/blogs/5-common-myths-debunked-about-staffing-agencies',
      destination: '/5-common-myths-debunked-about-staffing-agencies',
      permanent: true,
    },

    {
      source: '/blogs/an-insight-into-recruitment-agencies',
      destination: '/an-insight-into-recruitment-agencies',
      permanent: true,
    },

    {
      source: '/blogs/benefits-of-temporary-staffing-agency',
      destination: '/benefits-of-temporary-staffing-agency',
      permanent: true,
    },

    {
      source: '/blogs/debunking-myths-surrounding-staffing-agencies-and-recruitment-firms',
      destination: '/debunking-myths-surrounding-staffing-agencies-and-recruitment-firms',
      permanent: true,
    },

    {
      source: '/blogs/how-companies-benefit-from-using-contractual-staffing',
      destination: '/how-companies-benefit-from-using-contractual-staffing',
      permanent: true,
    },

    {
      source: '/blogs/how-to-identify-and-overcome-the-red-flags-in-your-resume',
      destination: '/how-to-identify-and-overcome-the-red-flags-in-your-resume',
      permanent: true,
    },

    {
      source: '/blogs/job-consultancy-in-india',
      destination: '/job-consultancy-in-india',
      permanent: true,
    },

    {
      source: '/blogs/manpower-consultancy',
      destination: '/manpower-consultancy',
      permanent: true,
    },

    {
      source: '/blogs/manpower-staffing-services-agencies',
      destination: '/manpower-staffing-services-agencies',
      permanent: true,
    },

    {
      source: '/blogs/temporary-staffing-agencies-and-its-growing-demand',
      destination: '/temporary-staffing-agencies-and-its-growing-demand',
      permanent: true,
    },

    {
      source: '/blogs/temporary-staffing-and-the-effect-of-pandemic',
      destination: '/temporary-staffing-and-the-effect-of-pandemic',
      permanent: true,
    },

    {
      source: '/blogs/tips-to-stay-focused-while-working-remotely',
      destination: '/tips-to-stay-focused-while-working-remotely',
      permanent: true,
    }

  ]
}
