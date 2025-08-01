import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: '北沐城歌',
  url: 'https://kinseyy.github.io/',
  author: {
    avatar: 'https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202410261321057.png',
    name: '北歌',
  },
  favicon: 'https://insey.oss-cn-shenzhen.aliyuncs.com/kin/202411051423199.svg',
  search: {
    enable: true,
    type: 'fuse',
  },
  description: '山行野宿，孤身万里',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=3954596483',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: 'QQ 2409101203',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },

    {
      name: 'GitHub',
      link: 'https://github.com/kinsey973',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: 'Travelling',
      link: 'https://travellings.link',
      icon: 'i-ri-train-line',
      color: 'white',
    },

  ],
  statistics: {
    enable: true,
  },
  comment: { enable: false },
})
