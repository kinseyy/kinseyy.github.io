/*
 * @Author: kinsey973 2409101203@qq.com
 * @Date: 2025-08-01 11:59:05
 * @LastEditors: kinsey973 2409101203@qq.com
 * @LastEditTime: 2025-08-01 12:06:04
 * @FilePath: \valaxy-blog\demo\valaxy.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'valaxy'
import type { ThemeConfig } from 'valaxy-theme-hairy-staro'
import { addonWaline } from 'valaxy-addon-waline'
import { addonMeting } from 'valaxy-addon-meting'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'hairy',

  themeConfig: {
    theme: 'dark',
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'i-material-symbols-home-work-sharp',
      },
      {
        text: 'About',
        link: '/about',
        icon: 'i-material-symbols-home-work-sharp',
      },
      {
        text: 'Links',
        link: '/links',
        icon: 'i-material-symbols-home-work-sharp',
      },
      {
        text: 'Posts',
        link: '/archives',
        icon: 'i-material-symbols-home-work-sharp',
      },
      {
        text: 'Github',
        icon: 'i-ri-github-fill',
        link: 'https://github.com/kinsey973',
      },
    ],
  },

  addons: [
    addonWaline({
      comment: true,
      serverURL: 'https://kinsey-six.vercel.app',
      emoji: ['https://fastly.jsdelivr.net/gh/walinejs/emojis@latest/bilibili/', 'https://fastly.jsdelivr.net/gh/walinejs/emojis@latest/weibo/', 'https://fastly.jsdelivr.net/gh/walinejs/emojis@latest/qq/'],
      pageview: true,
    }),
    addonMeting({
      global: true,
      props: {
        id: '5312894314',
        type: 'playlist',
        autoplay: true,
        theme: 'var(--hy-c-primary)',
      },
    }),
  ],
})
