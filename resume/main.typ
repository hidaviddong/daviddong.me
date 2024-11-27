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

= Haoyu Dong

+852 46720879 |  #link("https://wa.link/bbs3i9")[WhatsApp] | #link("mailto:hidaviddong@gmail.com")  | #link("https://github.com/hidaviddong")[GitHub] | #link("https://www.linkedin.com/in/hidaviddong")[LinkedIn] 
| #link("https://daviddong.me")[Website]

== Skills
#chiline()

- Experienced in full-stack development with React, Vue.js, TypeScript, Node.js, MySQL, MongoDB.
- Experienced in web scraping and automation using Puppeteer.
- Knowledge of basic DevOps in Docker containerization, Jenkins pipelines, GitHub Actions, Cloudflare.
- Skilled in team collaboration tools like Notion, GitHub, and design tools like Figma, Blender.

== Work Experience
#chiline()

*Famous Raise Ltd* #h(1fr) 2024/09 -- 2024/10 \
 Full Stack Developer Intern (Remote) #h(1fr) Hong Kong \

- Building a generic blog crawler backend API with Express.js, MongoDB, Puppeteer.

*PKU-Changsha Institute for Computing and Digital Economy* #h(1fr) 2023/07 -- 2024/07 \
 Web Developer #h(1fr) Changsha, China \

- Core developer for a large language model chatbot and several data visualization projects.
- Designed CI/CD multi-environment deployment pipelines for our most JavaScript projects.

*Tencent Music Entertainment* #h(1fr) 2022/05 -- 2022/10 \
Web Developer Summer Intern #h(1fr) Shenzhen, China \

- Responsible for several high-traffic pages, including the live room widget and leaderboard in QQ Music and WeSing.

== Projects
#chiline()

*Feeder* #h(1fr) #link("https://feeder.daviddong.me/")[*#fa[#hand.point.right]  Demo*]\

 	- Architected a scalable blog content aggregation API using Puppeteer and Node.js, enabling automated content extraction through configurable URL patterns and CSS selectors.
	- Implemented AI-powered article summarization feature to generate concise content previews, enhancing user reading experience.
	- Designed error handling with BullMQ job queue system for failed scraping attempts, ensuring reliable content delivery through automated retry mechanisms.

*Large Language Model Chatbot* #h(1fr) #link("https://daviddong.me/project/chatbot")[*#fa[#hand.point.right]  Demo*]\

  - Responsible for implementing key features such as user system, image/text chatting, literature search, and plugin systems.
  - Utilized SSE for streaming text output. Managed server state with React Query and implemented optimistic updates to enhanced user experience.

*Data Visualization Projects* #h(1fr) #link("https://daviddong.me/project/data-visualization")[*#fa[#hand.point.right]  Demo*]\

  - Developed interactive features including charts, world maps, and other dynamic visual effects using ECharts.
  - Performance optimization techniques for loading 3D models, such as model compression, removing faces and baking textures.
  - Using Three.js and GSAP to achieve smooth transitions between different perspectives of the scene.

*Comments* #h(1fr) #link("https://daviddong.me/project/comments")[*#fa[#hand.point.right]  Demo*]\

- My open-source project, this is a comment system that users can deploy it themselves and host it on their website.
- This project has garnered over 50 stars on #link("https://github.com/DongHY1/comments")[GitHub] and was featured in #link("https://www.ruanyifeng.com/blog/2023/12/weekly-issue-282.html")[Ruan Yifeng's Weekly]

*Others*：
  - Contributed PRs to #link("https://github.com/nodejs/node/pull/54569")[Node.js] and #link("https://github.com/reactjs/react.dev/pull/6509")[React.js].
  - Published one SCI paper and three patents during school and company.

// *Contributions* \
// - #link("https://github.com/reactjs/react.dev/pull/6509")[#fa[#pr-merge] *Fixed a css bug*] in the official #link("https://react.dev/")[React docs]. #h(1fr) #fa[#star] 10.8k
// - #link("https://github.com/RealKai42/qwerty-learner/pull/509")[#fa[#pr-merge] *Added a confetti style*] and #link("https://github.com/RealKai42/qwerty-learner/pull/485")[*#fa[#pr-merge] user custom word loop*] in #link("https://qwerty.kaiyi.cool/")[qwerty-learner].
//   #h(1fr) #fa[#star] 14.8k
// - #link("https://github.com/JSerZANP/shaku/pull/8")[#fa[#pr-merge] *Added a new syntax *] for #link("https://shaku-web.vercel.app/")[Shaku] that lets you change the line's opacity.
//   #h(1fr)  #fa[#star] 194
== Education
#chiline()

*Hong Kong Metropolitan University* #h(1fr) 2024/09 -- 2025/09 \
Master of Computing in Computer Science #h(1fr) Hong Kong \

- The Katie Shu Sui Pui Charitable Trust — Research Training Fellowship in 2024

*ShenZhen University* #h(1fr) 2020/09 -- 2023/06 \
Master of Science in Materials Science and Engineering #h(1fr) Shenzhen, China \

*Hunan University of Technology* #h(1fr) 2016/09 -- 2020/06 \
Bachelor of Science in Construction Environment and Energy Application Engineering  #h(1fr) Zhuzhou, China \

// #align(center, text(fill: gray)[Last Updated on #today()])

// #pagebreak()

// chinese version

// #set text(font: "LXGW WenKai TC")
// #let cn_today() = {
//   let month = (
//     "1", "2", "3", "4", "5", "6", "7",
//     "8", "9", "10", "11", "12",
//   ).at(datetime.today().month() - 1);
//   let day = datetime.today().day();
//   let year = datetime.today().year();
//   [#year 年 #month 月 #day 日]
// }

// = 董皓宇
// +852 46720879 / +86 19926690273 |  #link("https://wa.link/bbs3i9")[WhatsApp] | #link("mailto:hidaviddong@gmail.com")  | #link("https://github.com/hidaviddong")[GitHub] | #link("https://www.linkedin.com/in/hidaviddong")[LinkedIn] 
// | #link("https://daviddong.me")[Website]

// == 技能
// #chiline()
// + Web 开发：熟练 React & Vue.js & TypeScript 技术栈，熟悉 Webpack, Vite 等 bundle 工具的配置和打包优化, 了解 SSR、CSR 等渲染模式,能使用 Node.js & MySQL 开发后端服务。参与过移动端混合开发的游戏项目，了解Web与原生客户端的通信方式。
// + DevOps: 熟练 JavaScript 前后端项目的 Docker 容器化部署和镜像体积优化方案, 了解 Jenkins, GitHub Actions, Cloudflare 等服务的使用。
// + Others：熟练使用团队协作工具如 Notion，GitHub。使用过 Figma, Blender 等设计和建模工具。
// == 工作经验
// #chiline()

//  *北京大学长沙计算与数字经济研究院* #h(1fr) 2023/07 -- 2024/07 \
// 前端开发工程师 #h(1fr) 长沙 \
// - 使用 *React*, *TypeScript*, *Tailwind CSS* 开发了一个 大语言模型聊天机器人
// - 使用 *Vue.js*, *Three.js*, *Blender*, *ECharts* 开发了一系列数据可视化项目
// - 使用 *Docker*, *Jenkins* 搭建了部门 CI/CD 部署流水线

// *腾讯音乐娱乐集团* #h(1fr) 2022/05 -- 2022/10 \
// 前端开发实习 #h(1fr) 深圳 \
// - 贡献了一些混合开发的移动端应用，包括QQ 音乐和全民 K 歌

// == 公司项目
// #chiline()
//  *AI诊疗助手* #h(1fr) #link("https://daviddong.me/project/chatbot")[*#fa[#hand.point.right]  Demo*]
// - 实现了多模态聊天（文本、图片）、插件系统和文献搜索等功能
// - 利用 SSE 实现文本输出流。使用 *React Query* 管理服务器状态，并实现乐观更新机制以增强用户体验

// *数据可视化* #h(1fr) #link("https://daviddong.me/project/data-visualization")[*#fa[#hand.point.right]  Demo*]\
// - 开发了折线图、饼图、世界地图、飞线和其他地图动态视觉效果
// - 通过优化模型、改善了Web 端模型加载时间和首屏加载速度
// //  - Implemented smooth camera transitions with *GSAP* and created some *shader effect*.
// // 这里可以聊Draco compression 删减多余面，texture baking等操作，


// *混合移动端应用开发* #h(1fr) #link("https://daviddong.me/project/tme")[*#fa[#hand.point.right]  Demo*]\
// - 参与开发了QQ 音乐、全民K歌直播间小游戏、送礼页和送礼榜等应用

// == 个人项目
// #chiline()

// *评论系统* #h(1fr) #fa[#star] 50 \
// - 一个开源自部署的评论系统，使用 GitHub 进行身份认证，数据托管在 Supabase 上
// - 这个项目在 #link("https://github.com/DongHY1/comments")[GitHub] 上收获了 50 个 stars，被收录在 #link("https://www.ruanyifeng.com/blog/2023/12/weekly-issue-282.html")[Ruanyifeng's Weekly] 中

// *Mini React* #h(1fr) #link("https://daviddong.me/project/react")[*#fa[#hand.point.right]  Demo*]\
// - 一个简单的 React.js 和 ReactDOM 实现， 包括fiber 架构, 调度器, hooks功能

// *开源贡献* \
// - #link("https://github.com/reactjs/react.dev/pull/6509")[#fa[#pr-merge] *Fixed a css bug*] 修复了 React 官方文档的一个 CSS 问题  #h(1fr) #fa[#star] 10.8k
// -  给一款开源的英语学习软件#link("https://qwerty.kaiyi.cool/")[qwerty-learner] 加了 #link("https://github.com/RealKai42/qwerty-learner/pull/509")[#fa[#pr-merge] *Added a confetti style*] 和 #link("https://github.com/RealKai42/qwerty-learner/pull/485")[*#fa[#pr-merge] user custom word loop*]
//   #h(1fr) #fa[#star] 14.8k
// - 给 #link("https://shaku-web.vercel.app/")[Shaku] 实现了修改文本透明度的新语法 #link("https://github.com/JSerZANP/shaku/pull/8")[#fa[#pr-merge] *Added a new syntax *] 
//   #h(1fr)  #fa[#star] 194


// == 教育经历
// #chiline()

// *香港都会大学* #h(1fr) 2024/09 -- 2025/09 \
// 软件工程硕士 #h(1fr) 香港 \

// *深圳大学* #h(1fr) 2020/09 -- 2023/06 \
// 材料与化工硕士 #h(1fr) 深圳 \

// *湖南工业大学* #h(1fr) 2016/09 -- 2020/06 \
// 建筑环境与能源应用工程学士  #h(1fr) 株洲 \

// == 技能
// #chiline()

// - *前端*: HTML, CSS, JavaScript, TypeScript, React, Vue.js.
// - *后端*: Node.js, Express.js, MySQL, MongoDB.
// - *运维*: Docker, Jenkins, GitHub Actions, Cloudflare.
// - *设计*: Figma, Blender.
// - *语言*: 普通话（母语）, 英语（流利）, 粤语（熟悉）.

// #align(center, text(fill: gray)[更新于 #cn_today()])