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

== Work Experience
#chiline()

 *Peking University Institute* #h(1fr) 2023/07 -- 2024/07 \
Frontend Engineer #h(1fr) Changsha, China \
- Developed a *Large Language Model Chatbot* using *React*, *TypeScript*, *Tailwind CSS*.
- Developed a series of data visualization projects using *Vue.js*, *Three.js*, *Blender*, *ECharts*.
- Setting CI/CD pipeline using *Docker, Jenkins*.

*Tencent Music Entertainment* #h(1fr) 2022/05 -- 2022/10 \
Frontend Engineer Intern #h(1fr) Shenzhen, China \
- Contributed to hybrid app development for *QQ Music* and *WeSing*.

== Works
#chiline()
 *Chatbot* #h(1fr) #link("https://daviddong.me/project/chatbot")[*#fa[#hand.point.right]  Demo*]
- Implemented *multimodal chat* (text, images), plugin system, and literature search.
- Utilized *Server-Sent Events* for streaming text output. Managed server state with *React Query* and implemented *optimistic updates* to enhanced user experience.

*Data Visualization* #h(1fr) #link("https://daviddong.me/project/data-visualization")[*#fa[#hand.point.right]  Demo*]\
    - Developed interactive features including line charts, pie charts, world maps, flying lines, and other dynamic visual effects.
  -  Improved *model load times* and *rendering efficiency*.
//  - Implemented smooth camera transitions with *GSAP* and created some *shader effect*.
// 这里可以聊Draco compression 删减多余面，texture baking等操作，


*Hybrid Mobile App* #h(1fr) #link("https://daviddong.me/project/tme")[*#fa[#hand.point.right]  Demo*]\
- Developed mini-games, live gifting, and ranking list web app, contributed to related *npm packages*.

== Open Source Projects
#chiline()

*Comments* #h(1fr) #fa[#star] 50 \
- An open-source, easy-to-use comment system, uses GitHub for authentication and stores data in Supabase.
- This project has garnered over *50 stars* on #link("https://github.com/DongHY1/comments")[GitHub] and was featured in #link("https://www.ruanyifeng.com/blog/2023/12/weekly-issue-282.html")[Ruanyifeng's Weekly]

*Mini React* #h(1fr) #link("https://daviddong.me/project/react")[*#fa[#hand.point.right]  Demo*]\
- A Minimal implementation of React.js and ReactDOM including *fiber architecture*, *scheduler*, *hooks*.

*Raytracing* #h(1fr) #link("https://daviddong.me/project/raytracing")[*#fa[#hand.point.right]  Demo*]\
- Implemented a simple *raytracing algorithm* in JavaScript, based on concepts learned from the book *_Computer Graphics from Scratch_*.

*Contributions* \
- #link("https://github.com/reactjs/react.dev/pull/6509")[#fa[#pr-merge] *Fixed a css bug*] in the official #link("https://react.dev/")[React docs]. #h(1fr) #fa[#star] 10.8k
- #link("https://github.com/RealKai42/qwerty-learner/pull/509")[#fa[#pr-merge] *Added a confetti style*] and #link("https://github.com/RealKai42/qwerty-learner/pull/485")[*#fa[#pr-merge] user custom word loop*] in #link("https://qwerty.kaiyi.cool/")[qwerty-learner].
  #h(1fr) #fa[#star] 14.8k
- #link("https://github.com/JSerZANP/shaku/pull/8")[#fa[#pr-merge] *Added a new syntax *] for #link("https://shaku-web.vercel.app/")[Shaku] that lets you change the line's opacity.
  #h(1fr)  #fa[#star] 194


== Education
#chiline()

*Hong Kong Metropolitan University* #h(1fr) 2024/09 -- 2025/09 \
Master of Computing in Computer Science #h(1fr) Hong Kong \

*ShenZhen University* #h(1fr) 2020/09 -- 2023/06 \
Master of Science in Materials Science and Engineering #h(1fr) Shenzhen, China \

*Hunan University of Technology* #h(1fr) 2016/09 -- 2020/06 \
Bachelor of Science in Construction Environment and Energy Application Engineering  #h(1fr) Zhuzhou, China \

== Skills
#chiline()

- *Front-end*: HTML, CSS, JavaScript, TypeScript, React, Vue.js.
- *Back-end*: Node.js, Express.js, Java, Python, MySQL, MongoDB.
- *DevOps*: Docker, Jenkins, GitHub Actions, AWS, Cloudflare.
- *Design*: Figma, Blender.
- *Languages*: Mandarin (Native speaker), English (Fluent), Cantonese (Fluent).

#align(center, text(fill: gray)[Last Updated on #today()])
#pagebreak()

// chinese version

#set text(font: "LXGW WenKai TC")
#let cn_today() = {
  let month = (
    "1", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "11", "12",
  ).at(datetime.today().month() - 1);
  let day = datetime.today().day();
  let year = datetime.today().year();
  [#year 年 #month 月 #day 日]
}

= 董皓宇
+852 46720879 |  #link("https://wa.link/bbs3i9")[WhatsApp] | #link("mailto:hidaviddong@gmail.com")  | #link("https://github.com/hidaviddong")[GitHub] | #link("https://www.linkedin.com/in/hidaviddong")[LinkedIn] 
| #link("https://daviddong.me")[Website]

== 工作经验
#chiline()

 *北京大学长沙计算与数字经济研究院* #h(1fr) 2023/07 -- 2024/07 \
前端开发工程师 #h(1fr) 长沙 \
- 使用 *React*, *TypeScript*, *Tailwind CSS* 开发了一个 大语言模型聊天机器人
- 使用 *Vue.js*, *Three.js*, *Blender*, *ECharts* 开发了一系列数据可视化项目
- 使用 *Docker*, *Jenkins* 搭建了部门 CI/CD 部署流水线

*腾讯音乐娱乐集团* #h(1fr) 2022/05 -- 2022/10 \
前端开发实习 #h(1fr) 深圳 \
- 贡献了一些混合开发的移动端应用，包括QQ 音乐和全民 K 歌

== 公司项目
#chiline()
 *AI诊疗助手* #h(1fr) #link("https://daviddong.me/project/chatbot")[*#fa[#hand.point.right]  Demo*]
- 实现了多模态聊天（文本、图片）、插件系统和文献搜索等功能
- 利用 SSE 实现文本输出流。使用 *React Query* 管理服务器状态，并实现乐观更新机制以增强用户体验

*数据可视化* #h(1fr) #link("https://daviddong.me/project/data-visualization")[*#fa[#hand.point.right]  Demo*]\
- 开发了折线图、饼图、世界地图、飞线和其他地图动态视觉效果
- 通过优化模型、改善了Web 端模型加载时间和首屏加载速度
//  - Implemented smooth camera transitions with *GSAP* and created some *shader effect*.
// 这里可以聊Draco compression 删减多余面，texture baking等操作，


*混合移动端应用开发* #h(1fr) #link("https://daviddong.me/project/tme")[*#fa[#hand.point.right]  Demo*]\
- 参与开发了QQ 音乐、全民K歌直播间小游戏、送礼页和送礼榜等应用

== 个人项目
#chiline()

*评论系统* #h(1fr) #fa[#star] 50 \
- 一个开源自部署的评论系统，使用 GitHub 进行身份认证，数据托管在 Supabase 上
- 这个项目在 #link("https://github.com/DongHY1/comments")[GitHub] 上收获了 50 个 stars，被收录在 #link("https://www.ruanyifeng.com/blog/2023/12/weekly-issue-282.html")[Ruanyifeng's Weekly] 中

*Mini React* #h(1fr) #link("https://daviddong.me/project/react")[*#fa[#hand.point.right]  Demo*]\
- 一个简单的 React.js 和 ReactDOM 实现， 包括fiber 架构, 调度器, hooks功能

*开源贡献* \
- #link("https://github.com/reactjs/react.dev/pull/6509")[#fa[#pr-merge] *Fixed a css bug*] 修复了 React 官方文档的一个 CSS 问题  #h(1fr) #fa[#star] 10.8k
-  给一款开源的英语学习软件#link("https://qwerty.kaiyi.cool/")[qwerty-learner] 加了 #link("https://github.com/RealKai42/qwerty-learner/pull/509")[#fa[#pr-merge] *Added a confetti style*] 和 #link("https://github.com/RealKai42/qwerty-learner/pull/485")[*#fa[#pr-merge] user custom word loop*]
  #h(1fr) #fa[#star] 14.8k
- 给 #link("https://shaku-web.vercel.app/")[Shaku] 实现了修改文本透明度的新语法 #link("https://github.com/JSerZANP/shaku/pull/8")[#fa[#pr-merge] *Added a new syntax *] 
  #h(1fr)  #fa[#star] 194


== 教育经历
#chiline()

*香港都会大学* #h(1fr) 2024/09 -- 2025/09 \
软件工程硕士 #h(1fr) 香港 \

*深圳大学* #h(1fr) 2020/09 -- 2023/06 \
材料与化工硕士 #h(1fr) 深圳 \

*湖南工业大学* #h(1fr) 2016/09 -- 2020/06 \
建筑环境与能源应用工程学士  #h(1fr) 株洲 \

== 技能
#chiline()

- *前端*: HTML, CSS, JavaScript, TypeScript, React, Vue.js.
- *后端*: Node.js, Express.js, MySQL, MongoDB.
- *运维*: Docker, Jenkins, GitHub Actions, Cloudflare.
- *设计*: Figma, Blender.
- *语言*: 普通话（母语）, 英语（流利）, 粤语（熟悉）.

#align(center, text(fill: gray)[更新于 #cn_today()])