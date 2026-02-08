module.exports = {
  title: `HyperPipe Tech`,
  description: `HyperPipe AI/AX 컨설팅, AI 교육, 팀 멘토링 전문 HyperPipe(하이퍼파이프) 기술 블로그`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://tech.hyperpipe.kr`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `HyperPipe`,
    bio: {
      role: `하이퍼파이프`,
      description: ['AI/AX 컨설팅 및 교육','AI 솔루션/Agent 구현','팀 멘토링 / 팀 빌딩'],
      thumbnail: 'main_img.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/hyperpipe-kr`,
      linkedIn: `https://www.linkedin.com/in/rockkang/`,
      email: `dev@hyperpipe.kr`,
      homepage: `https://hyperpipe.kr`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2025.09 ~ 현재',
        activity: '디캠프(DCamp) 그로스멘토',
        links: {
          demo: 'https://dcamp.kr/program/growth-coaching',
        },
      },
      {
        date: '2026.02',
        activity: '[루트릭스] AI Agent 기술 멘토링',
        links: {
          demo: 'https://www.rootrix.com/',
        },
      },
      {
        date: '2026.01 ~ 현재',
        activity: '[두나미스 아트테크놀로지스] 기술 컨설팅 / AI 프로젝트',
      },
      {
        date: '2026.01 ~ 현재',
        activity: '[DPPLANNING] AI Agent 프로젝트',
        links: {
          demo: 'https://dpplanning.co.kr/',
        },
      },
      {
        date: '2026.01',
        activity: '[LAB4DX] AI Agent 기술 컨설팅',
        links: {
          demo: 'https://www.lab4dx.co.kr/',
        },
      },
      {
        date: '2025.12 ~ 2026.01',
        activity: '[LG전자] DX School 4기 딥러닝 강의',
        links: {
          demo: 'https://dxschool.co.kr/',
        },
      },
      {
        date: '2025.11',
        activity: '[모두의연구소] 데이터 분석 심사위원(아이펠톤 PDA 2기)',
        links: {
          demo: 'https://aiffel.io/',
        },
      },
      {
        date: '2025.11',
        activity: '[에피소든] 기술 멘토링',
        links: {
          demo: 'https://www.episoden.com/',
        },
      },
      {
        date: '2025.10 ~ 2025.11',
        activity: '[LG전자] DX School 3기 딥러닝 강의',
        links: {
          demo: 'https://dxschool.co.kr/',
        },
      },
      {
        date: '2025.09',
        activity: '[넥스트그라운드] 기술 멘토링',
        links: {
          demo: 'https://zippoom.com/',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      // {
      //   title: '개발 블로그 테마 개발',
      //   description:
      //     '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
      //   techStack: ['gatsby', 'react'],
      //   thumbnailUrl: 'blog.png',
      //   links: {
      //     post: '/gatsby-starter-zoomkoding-introduction',
      //     github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
      //     demo: 'https://www.zoomkoding.com',
      //   },
      // },
    ],
  },
};
