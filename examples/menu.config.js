const menus = [
  // {
  //   "name": "Element React",
  //   "href": "https://elemefe.github.io/element-react/"
  // },

  {
    name: '指南',
    children: [
      { name: '使用', path: '/install', default: true },
    ]
  },
  {
    name: '组件',
    groups: [
      {
        groupName: 'upload',
        list: [
          { title: 'Upload 上传', path: '/upload' },
        ]
      },
    ]
  },
]

export default menus
