export default [
  {
    title: "首页",
    key: "1",
    icon: "home",
    link: "/home",
  },
  {
    title: "面包屑测试",
    key: "2",
    icon: "desktop",
    children: [
      {
        title: "点我",
        key: "14",
        link: "/about",
      },
    ],
  },
  {
    title: "多级菜单",
    key: "3",
    icon: "user",
    children: [
      {
        title: "请在menuData中修改菜单内容",
        key: "4",
      },
      {
        title: "子菜单2",
        key: "5",
      },
      {
        title: "子菜单3",
        key: "6",
        children: [
          {
            title: "子菜单3-1",
            key: "7",
          },
          {
            title: "子菜单3-2",
            key: "8",
          },
        ],
      },
    ],
  },
  {
    title: "Team",
    key: "9",
    icon: "team",
    children: [
      {
        title: "Team1",
        key: "10",
      },
      {
        title: "Team2",
        key: "11",
      },
    ],
  },
  {
    title: "File",
    key: "12",
    icon: "file",
  },
  {
    title: "Demo",
    key: "13",
    icon: "smile-o",
    link: "/demo",
  },
];
