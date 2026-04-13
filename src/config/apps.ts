export interface App {
  name: string
  id: string
  github_url: string
  icon?: string
  redirect_url?: string
  broken_text?: string
  relay_url?: string
}

// export type App = (typeof apps)[keyof typeof apps]

export const apps = {
  'auto-auth': {
    id: 'auto-auth',
    name: 'Auto Auth',
    github_url: 'https://github.com/cssnr/auto-auth',
    icon: 'https://raw.githubusercontent.com/cssnr/auto-auth/master/src/images/logo128.png',
    redirect_url: 'https://github.com/cssnr/auto-auth/issues',
    broken_text: 'Please provide a link to the site that is not functioning.',
  },
  'cache-cleaner': {
    id: 'cache-cleaner',
    name: 'Cache Cleaner',
    github_url: 'https://github.com/cssnr/cache-cleaner',
    icon: 'https://raw.githubusercontent.com/cssnr/cache-cleaner/master/src/images/logo128.png',
    redirect_url: 'https://github.com/cssnr/cache-cleaner/issues',
    broken_text: 'Please provide a link to the site that is not functioning.',
  },
  'hls-video-downloader': {
    id: 'hls-video-downloader',
    name: 'HLS Video Downloader',
    github_url: 'https://github.com/cssnr/hls-video-downloader',
    icon: 'https://raw.githubusercontent.com/cssnr/hls-video-downloader/master/src/images/logo128.png',
    redirect_url: 'https://github.com/cssnr/hls-video-downloader/issues',
    broken_text: 'Please provide a link to the site that is not functioning.',
  },
  'geo-image': {
    id: 'geo-image',
    name: 'GeoImage',
    github_url: 'https://github.com/cssnr/geo-image',
    icon: 'https://raw.githubusercontent.com/cssnr/geo-image/master/src/assets/icon.svg',
    redirect_url: 'https://github.com/cssnr/geo-image/issues',
    broken_text: 'Please provide a link to the image that is not functioning.',
  },
  'wxt-extension': {
    id: 'wxt-extension',
    name: 'WXT Extension',
    github_url: 'https://github.com/smashedr/wxt-extension',
    icon: 'https://raw.githubusercontent.com/smashedr/wxt-extension/master/src/assets/icon.svg',
    redirect_url: 'https://github.com/smashedr/wxt-extension/issues',
    broken_text: 'Please provide a link to the image that is not functioning.',
    relay_url: 'https://relay.cssnr.com/discord/1376046470926438440',
  },
}
