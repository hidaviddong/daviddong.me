#import "fontawesome.typ": *
#show heading: set text(font: "Times New Roman")

#show link: underline
#let iconlink(
  uri, text: "", icon: link-icon) = {
  if text != "" {
    link(uri)[#fa[#icon] #text]
  } else {
    link(uri)[#fa[#icon]]
  }
}



#let today() = {
  let month = (
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December",
  ).at(datetime.today().month() - 1);
  let day = datetime.today().day();
  let year = datetime.today().year();
  [#month #day, #year]
}

#let chiline() = {v(-3pt); line(length: 100%); v(-5pt)}

#set text(
  size: 10pt,
)

#set page(
  margin: (x: 0.9cm, y: 1.3cm)
)

#set par(justify: true)

#let additional-block = block.with(
  fill: rgb("f5f5f5"),
  inset: 1em,           
  radius: 4pt,          
  width: 100%,          
)

#let lang-block = block.with(
  stroke: (left: 4pt + rgb("4a5568")),
  fill: rgb("f8f9fa"),
  inset: (left: 1em, rest: 0.8em),
  width: 100%,
)


= DONG, Haoyu (David) / 董皓宇

#link("mailto:hidaviddong@gmail.com") / +852 46720879 / #link("https://wa.link/bbs3i9")[WhatsApp] / #link("https://github.com/hidaviddong")[GitHub] / #link("https://daviddong.me")[Website]


#additional-block[
  #text(weight: "bold", size: 1em)[VISA Status: ]
  Current Student Visa holder, eligible for IANG and available for work from September 2025.
  #v(0.1em)
  #text(weight: "bold", size: 1em)[Languages: ]
  Mandarin (Native), Cantonese (Beginner), English (Intermediate)
  #v(0.1em)
  #text(weight: "bold", size: 1em)[Expected Salary: ]
  HKD 22,000 - 25,000 monthly 
]

== Skills
#chiline()
- Proficient in React, Vue.js, and TypeScript stack. Experienced with bundlers (Webpack, Vite), rendering patterns (SSR, CSR), and backend development using Node.js & MySQL.
- Experienced in Web3 development using wagmi and ethers.js for smart contract interactions and dApp development.
- Familiar with Docker containerization, CI/CD tools (Jenkins, GitHub Actions), and basic deep learning with PyTorch.

== Work Experience
#chiline()

*Web3.0 Technology Limited* #h(1fr) Nov 2024 - Present \
 Frontend Developer (Intern) #h(1fr) Hong Kong \
- Developed a dApp interface for #link("https://daviddong.me/project/att")[*ATT*] (Advertising Time Trace) project, including token swapping, token staking, NFT minting.
- Wrote and maintained scripts for monitoring on-chain activities and metrics to support daily operations.

*PKU-Changsha Institute for Computing and Digital Economy* #h(1fr) July 2023 - July 2024 \
 Frontend Developer (Full Time)#h(1fr) Changsha, China \
- Developed an #link("https://daviddong.me/project/chatbot")[*LLM-powered chatbot*] with React, implementing real-time streaming (SSE), user system, and plugin architecture.
- Built #link("https://daviddong.me/project/data-visualization")[*data visualization projects*] using ECharts and Three.js, optimizing 3D scene performance with model compression.

*Tencent Music Entertainment* #h(1fr) May 2022 - Oct 2022 \
Frontend Developer (Intern) #h(1fr) Shenzhen, China \
- Developed interactive #link("https://daviddong.me/project/tme")[*mini-games*] for live streaming room in QQ Music and WeSing.
- Contributed to the development of internal administrative systems and management dashboards.

== Projects
#chiline()
Personal side projects to explore new technologies and solve real-world problems.\

#link("https://autopdf.app/")[*AutoPDF*] \
Chat-based PDF generation tool powered by LLM.

#link("https://sp.daviddong.me/")[*Lyrics light board*] \
A web-based light board for displaying lyrics in live performances.

#link("https://github.com/hidaviddong/comments")[*Comments*] \
A lightweight comment system that can be easily integrated into any website.

*Open Source Contributions* \
Contributed to Node.js core (#link("https://github.com/nodejs/node/pull/54569")[PR\#54569]) and React.js documentation (#link("https://github.com/reactjs/react.dev/pull/6509")[PR\#6509])

== Education
#chiline()

*Hong Kong Metropolitan University* #h(1fr) Sep 2024 -- Sep 2025 \
Master of Computing in Computer Science #h(1fr) Hong Kong \
- The Katie Shu Sui Pui Charitable Trust — Research Training Fellowship in 2024

*ShenZhen University* #h(1fr) Sep 2020 -- June 2023 \
Master of Science in Materials Science and Engineering #h(1fr) Shenzhen, China \

*Hunan University of Technology* #h(1fr) Sep 2016 -- June 2020 \
Bachelor of Science in Construction Environment and Energy Application Engineering  #h(1fr) Zhuzhou, China \


// 中文
#pagebreak()

#set text(font: "LXGW WenKai TC")
= 董皓宇
#link("mailto:hidaviddong@gmail.com") / +852 46720879 / #link("https://wa.link/bbs3i9")[WhatsApp] / #link("https://github.com/hidaviddong")[GitHub] / #link("https://daviddong.me")[Website]


#additional-block[
  #text(weight: "bold", size: 1em)[签证状态: ]
  目前持有学生签证，符合 IANG 申请资格，可从 2025 年 9 月开始工作。
  #v(0.1em)
  #text(weight: "bold", size: 1em)[语言: ]
  中文（母语），粤语（入门水平），英语（中等水平）
  #v(0.1em)
  #text(weight: "bold", size: 1em)[期望薪资: ]
  HKD 22,000 - 25,000 月 
]

== 技能
#chiline()
- 精通 React、Vue.js 和 TypeScript 技术栈。熟练使用打包工具（Webpack、Vite）、渲染模式（SSR、CSR），以及使用 Node.js 和 MySQL 进行后端开发。
- 具有使用 wagmi 和 ethers.js 进行 Web3 前端与智能合约交互的经验。
- 熟悉 Docker 容器化、CI/CD 工具（Jenkins、GitHub Actions）以及使用 PyTorch 进行基础深度学习。

== 工作经历
#chiline()

*Web3.0 Technology Limited* #h(1fr) 2024年11月 - 至今 \
前端开发工程师（实习） #h(1fr) 香港 \
- 为 #link("https://daviddong.me/project/att")[ATT]（Advertising Time Trace）项目开发 dApp 界面，包括代币交换、代币质押、NFT 铸造等功能。
- 编写并维护链上活动监控脚本，支撑日常运营。

*北京大学长沙计算与数字经济研究院* #h(1fr) 2023年7月 - 2024年7月  \
前端开发工程师（全职） #h(1fr) 长沙 \
- 使用 React 开发基于大语言模型的 #link("https://daviddong.me/project/chatbot")[聊天机器人]，实现实时流式传输（SSE）、用户系统和插件架构。
- 使用 ECharts 和 Three.js 开发 #link("https://daviddong.me/project/data-visualization")[数据可视化项目]，通过模型压缩优化 3D 场景性能。

*腾讯音乐娱乐集团* #h(1fr) 2022年5月 - 2022年10月  \
前端开发工程师（实习） #h(1fr) 深圳 \
- 为 QQ 音乐和全民 K 歌直播间开发互动 #link("https://daviddong.me/project/tme")[小游戏]。
- 参与内部管理系统和后台的开发工作。


== 个人项目
#chiline()
个人业余项目，尝试探索新技术并解决实际问题。\

#link("https://autopdf.app/")[*AutoPDF*] \
基于大语言模型的对话式 PDF 生成工具。

#link("https://sp.daviddong.me/")[*歌词灯牌*] \
用于现场表演的网页版歌词灯牌。

#link("https://github.com/hidaviddong/comments")[*Comments*] \
一个可以轻松集成到任何网站的轻量级评论系统。

*开源贡献* \
为 Node.js Core (#link("https://github.com/nodejs/node/pull/54569")[*PR#54569*]) 和 React.js 文档 (#link("https://github.com/reactjs/react.dev/pull/6509")[*PR#6509*]) 贡献 过代码。


 == 教育经历
 #chiline()

 *香港都会大学* #h(1fr) 2024年9月 - 2025年9月 \
 计算机硕士 #h(1fr) 香港 \

 *深圳大学* #h(1fr) 2020年9月 - 2023年6月 \
 材料与化工硕士 #h(1fr) 深圳 \

 *湖南工业大学* #h(1fr) 2016年9月 - 2020年6月 \
 建筑环境与能源应用工程学士  #h(1fr) 株洲 \
