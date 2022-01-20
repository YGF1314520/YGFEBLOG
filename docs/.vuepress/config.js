module.exports = {
  // 网页主要标题
  title: 'YGFEBOLG',
  // 网页描述
  description: '前端程序贵的个人主页',
  head: [
    // 页面小图标
    ['link', {
      rel: 'icon',
      href: '/images/YGlogof.ico'
    }]
  ],
  // 配置导航栏
  themeConfig: {
    // 配置logo
    logo: '/images/YGlogog.ico',
    // 配置导航栏
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '初识前端',
        link: '/introduction'
      },
      {
        text: '倔强青铜',
        items: [{
            text: 'HTML网页布局部分',
            link: '/stubbornBronze/HTML/'
          },
          {
            text: 'CSS网页布局部分',
            link: '/stubbornBronze/CSS/'
          }
        ]
      },
      {
        text: '秩序白银',
        items: [{
            text: 'JavaScript逻辑数据处理【JavaScript】部分',
            link: '/orderSilver/JavaScript/'
          },
          {
            text: 'JavaScript逻辑页面交互【DOM】部分',
            link: '/orderSilver/WebDOM/'
          },
          {
            text: 'JavaScript逻辑浏览器【BOM】部分',
            link: '/orderSilver/WebBOM/'
          },
          {
            text: 'jQuery内置库部分',
            link: '/orderSilver/jQuery/'
          },
        ]
      },
      {
        text: '荣耀黄金',
        items: [{
            text: 'Ajax网页通信交互部分',
            link: '/gloryGold/Ajax/'
          },
          {
            text: 'Bootstrap样式框架部分',
            link: '/gloryGold/Bootstrap/'
          },
        ]
      },
      {
        text: '尊贵铂金',
        items: [{
            text: 'ESMAScript6逻辑数据提升部分',
            link: '/noblePlatinum/ESMAScript6/'
          },
          {
            text: 'Axios网页通信提升部分',
            link: '/noblePlatinum/Axios/'
          },
        ]
      },
      {
        text: '永恒钻石',
        items: [{
            text: 'vue渐进式框架提升部分',
            link: '/eternalDiamond/Vue/'
          },
          {
            text: '微信小程序开发部分',
            link: '/eternalDiamond/Wechat/'
          },
          {
            text: 'uni-app小程序开发部分',
            link: '/eternalDiamond/UNI-APP/'
          },
          {
            text: '数据可视化开发部分',
            link: '/eternalDiamond/dataVisualization/'
          },
          {
            text: 'Git代码管理仓库部分',
            link: '/eternalDiamond/Git/'
          },
        ]
      },
      {
        text: '至尊星耀',
        items: [{
          text: 'node.js服务器端代码提升部分',
          link: '/supremeStarShine/NodeJS/'
        }, ]
      },
      {
        text: '最强王者',
        link: '/strongestKing/'
      },
      {
        text: '关于作者',
        link: '/about'
      },
    ],
    // 侧边栏
    sidebar: {
      // 倔强青铜
      '/stubbornBronze/HTML/': [
        'F1',
        'F2',
        'F3',
        'F4',
        'F5',
        'F6'
      ],
      '/stubbornBronze/CSS/': [
        'Y1A',
        'Y1B',
        'Y2',
        'Y3',
        'Y4',
        'Y5',
        'Y6',
        'Y7',
        'Y8',
        'Y9',
        'Y10'
      ],
      // 秩序白银
      '/orderSilver/JavaScript/': [
        'G',
        'G1',
        'G2',
        'G3',
        'G4',
        'G5',
        'G6',
        'G7',
        'G8A',
        'G8B',
        'G8C',
        'G8D',
        'G8E',
        'G8F',
        'G8G',
      ],
      '/orderSilver/WebDOM/': [
        'C',
        'C1',
        'C2',
        'C3',
        'C4',
        'C5',
        'C6',
        'C7',
        'C8',
        'C9',
        'C10',
        'C11',
        'C12',
        'C13',
        'C14',
        'C15',
        'C16',
        'C17',
        'C18',
        'C19',
        'C20',
        'C21',
        'C22',
        'C23',
        'C24',
        'C25',
        'C26'
      ],
      '/orderSilver/WebBOM/': [
        'J',
        'J1',
        'J2',
        'J3',
        'J4',
        'J5',
        'J6',
        'J7',
        'J8',
        'J9',
        'J10',
        'J11',
        'J12',
        'J13',
        'J14',
        'J15',
        'J16',
        'J17',
        'J18',
        'J19',
        'J20',
        'J21',
        'J22',
        'J23',
        'J24'
      ],
      '/orderSilver/jQuery/': [
        'N',
        'N1',
        'N2',
        'N3',
        'N4',
        'N5',
        'N6',
        'N7',
        'N8',
        'N9',
        'N10',
        'N11',
        'N12',
        'N13',
        'N14',
        'N15',
        'N16',
        'N17',
        'N18',
        'N19',
        'N20',
        'N21',
        'N22',
        'N23',
        'N24',
        'N25',
        'N26',
        'Ntest1',
        'Ntest2',
        'Ntest3',
        'Ntest4',
        'Ntest5',
        'Ntest6'
      ],
      // 荣耀黄金
      '/gloryGold/Ajax/': [
        'D',
        'D1',
        'D2',
        'D3'
      ],
      '/gloryGold/Bootstrap/': [
        'Y',
        'Y1',
        'Y2',
        'Y3'
      ],
      // 尊贵铂金
      '/noblePlatinum/ESMAScript6/': [
        'G',
        'G1',
        'G2',
        'G3',
        'G4',
        'G5',
        'G6',
        'G7',
        'G8',
        'G9',
        'G10',
        'G11',
        'G12',
        'G13',
        'G14',
        'G15',
        'G16',
        'G17',
        'G18',
        'G19',
        'G20',
        'G21',
        'G22',
        'G23',
        'G24',
        'G25',
        'G26',
        'G27',
        'G28',
        'G29',
        'G30',
        'G31',
        'G32',
        'G33',
        'G34',
        'G35',
        'G36',
        'G37',
        'G38A',
        'G38B',
        'G38C',
        'G38D',
        'G38E',
        'G39A',
        'G39B',
        'G39C',
        'G39D',
        'G39E',
        'G39F',
        'Gtest1',
        'Gtest2',
        'Gtest3'
      ],
      '/noblePlatinum/Axios/': [
        'M',
        'M1'
      ],
      // 永恒钻石
      '/eternalDiamond/Vue/': [
        '1',
        '2'
      ],
      '/eternalDiamond/Wechat/': [
        '1',
        '2'
      ],
      '/eternalDiamond/UNI-APP/': [
        '1',
        '2'
      ],
      '/eternalDiamond/dataVisualization/': [
        '1',
        '2'
      ],
      '/eternalDiamond/Git/': [
        '1',
        '2'
      ],
      // 至尊星耀
      '/supremeStarShine/NodeJS/': [
        '1',
        '2'
      ],
      // fallback
      '/': [
        'introduction',
      ]
    },
    sidebarDepth: 2,
    searchMaxSuggestions: 10
  }
}