export const apps = {
  autoAuth: {
    name: 'Auto Auth',
    id: 'auto-auth',
    github_url: 'https://github.com/cssnr/auto-auth',
    icon: 'https://raw.githubusercontent.com/cssnr/auto-auth/master/src/images/logo128.png',
    redirect_url: 'https://github.com/cssnr/auto-auth/issues',
    broken_text: 'Please provide a link to the site that is not functioning.',
  },
  cacheCleaner: {
    name: 'Cache Cleaner',
    id: 'cache-cleaner',
    github_url: 'https://github.com/cssnr/cache-cleaner',
    icon: 'https://raw.githubusercontent.com/cssnr/cache-cleaner/master/src/images/logo128.png',
    redirect_url: 'https://github.com/cssnr/cache-cleaner/issues',
    broken_text: 'Please provide a link to the site that is not functioning.',
  },
  geoImage: {
    name: 'GeoImage',
    id: 'geo-image',
    github_url: 'https://github.com/cssnr/geo-image',
    icon: 'https://raw.githubusercontent.com/cssnr/geo-image/master/src/assets/icon.svg',
    redirect_url: 'https://github.com/cssnr/geo-image/issues',
    broken_text: 'Please provide a link to the image that is not functioning.',
  },
}

// export type App = (typeof apps)[keyof typeof apps]
export interface App {
  name: string
  id: string
  github_url: string
  icon?: string
  redirect_url?: string
  broken_text?: string
}
