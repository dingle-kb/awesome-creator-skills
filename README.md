# Awesome Creator Skills

面向内容创作者的 Agent Skills（智能体技能）精选目录。按创作任务寻找可复用能力，直接前往作者仓库了解和安装；本仓库不托管或自动执行第三方 Skill。

当前收录来自维护者 GitHub 收藏的初次筛选。**收藏和收录均不等于安装、实测、安全审计或效果背书。**所有条目目前仅核对了公开来源与 Skill 入口，尚未安装或执行；实际使用前应阅读上游全部文件、依赖、许可及权限说明。链接锁定在核对时的提交，查看新版请进入上游仓库。

共 15 条 Skill，涉及 14 个上游仓库；最近核对日期：2026-09-28。

## 目录

- [研究与洞察](#研究与洞察)
- [策划与选题](#策划与选题)
- [文案与脚本](#文案与脚本)
- [视觉与图文](#视觉与图文)
- [视频与音频](#视频与音频)
- [发布与复盘](#发布与复盘)

## 研究与洞察

| Skill 与来源 | 能做什么 | 使用前注意 |
| --- | --- | --- |
| [Last 30 Days](https://github.com/mvanhorn/last30days-skill/blob/084662b501fb0dba95bd55eff0c258d35e0dc499/skills/last30days/SKILL.md)<br>[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) · MIT | 汇总近 30 天多平台讨论，用于内容选题和受众问题研究。 | 需 Python、Node；部分来源需各自的 API 凭证。<br>覆盖平台取决于可用凭证；不要将未抓取的平台视为已覆盖。 |
| [YouTube Transcript](https://github.com/ZeroPointRepo/youtube-skills/blob/4f7994b94e7d5e250c3b51102d609992e04d5d0d/skills/transcript/SKILL.md)<br>[ZeroPointRepo/youtube-skills](https://github.com/ZeroPointRepo/youtube-skills) · MIT | 通过视频链接获取字幕文本，作为视频研究、引用和整理的输入。 | 需网络及 TranscriptAPI 的 API Key；服务配额以提供方为准。<br>会向第三方字幕服务发送视频标识；引用前复核原视频与时间点。 |
| [Competitor Intel](https://github.com/ognjengt/founder-skills/blob/a45931cad934dc6243a68f905485467935a4ad9a/skills/competitor-intel/SKILL.md)<br>[ognjengt/founder-skills](https://github.com/ognjengt/founder-skills) · MIT | 研究竞品公开信息，为定位和选题提供可核对的线索。 | 需要可用的网页研究能力；可选读取项目业务背景。<br>竞争数据与推断需逐项核实，不能把预测当作事实。 |

## 策划与选题

| Skill 与来源 | 能做什么 | 使用前注意 |
| --- | --- | --- |
| [Content Strategy](https://github.com/coreyhaines31/marketingskills/blob/5b2c0007766c6a1cf1d53fd8fc73e979e0821022/skills/content-strategy/SKILL.md)<br>[coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) · MIT | 根据受众、业务目标和资源规划内容主题与优先级。 | 可选读取项目中的产品营销背景文件。<br>策略偏向内容营销；个人创作者需按自身目标调整。 |
| [Angle Generator](https://github.com/elvisun/newsjack/blob/092d882fc69912622f620c50eb493afe625f99dc/skills/angle-generator/SKILL.md)<br>[elvisun/newsjack](https://github.com/elvisun/newsjack) · MIT | 把一条公司动态拆成不同新闻角度，适用于品牌传播策划。 | 需要明确的真实动态和可核实事实。<br>不是自动媒体投递工具；对外主张仍需人工审查。 |

## 文案与脚本

| Skill 与来源 | 能做什么 | 使用前注意 |
| --- | --- | --- |
| [Viral Hook Creator](https://github.com/ognjengt/founder-skills/blob/a45931cad934dc6243a68f905485467935a4ad9a/skills/viral-hook-creator/SKILL.md)<br>[ognjengt/founder-skills](https://github.com/ognjengt/founder-skills) · MIT | 为帖子或短视频生成多个开头方案，并解释所用的吸引注意力结构。 | 依赖同目录的参考文件；可选读取业务背景。<br>所谓“爆款”不能保证传播结果；需检查夸张承诺。 |
| [DBS XHS Title](https://github.com/dontbesilent2025/dbskill/blob/a0e6fa356c58eca1a6e804c319ea7aac3db4a9af/skills/dbs-xhs-title/SKILL.md)<br>[dontbesilent2025/dbskill](https://github.com/dontbesilent2025/dbskill) · CC BY-NC 4.0 | 按公式库匹配小红书标题场景并给出候选标题。 | 需提供主题和面向的人群或行业。<br>上游许可限制商业使用；公式的效果声明未在本目录独立验证。 |

## 视觉与图文

| Skill 与来源 | 能做什么 | 使用前注意 |
| --- | --- | --- |
| [Baoyu XHS Images](https://github.com/JimLiu/baoyu-skills/blob/1567581c26ec29f4216c6e6835415bf30343b0e3/skills/baoyu-xhs-images/SKILL.md)<br>[JimLiu/baoyu-skills](https://github.com/JimLiu/baoyu-skills) · MIT | 将内容拆分为适合社交平台的系列图文卡片。 | 生成位图需要可用的图像生成后端；具体调用与费用取决于后端。<br>安装前复核图像后端路由与输入素材的使用权。 |
| [Ian Xiaohei Illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations/blob/4102eb807f03bcb6e538a16e8b31b41db8b5b954/ian-xiaohei-illustrations/SKILL.md)<br>[helloianneo/ian-xiaohei-illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations) · MIT | 为中文文章规划并生成统一风格的正文配图。 | 生成图片需另有可用的生图能力；附带参考和示例素材。<br>图像风格及示例素材的使用边界应在实际应用前核对。 |
| [Frontend Slides](https://github.com/zarazhangrui/frontend-slides/blob/9906a34d640d2111f724544cbc50f7f130569ae1/SKILL.md)<br>[zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) · MIT | 制作可在浏览器打开的演示文稿，也支持从 PPT/PPTX 转换。 | 需支持 HTML 的浏览器；PPT 转换流程需按上游说明检查环境。<br>生成页面和外部媒体需人工检查可访问性与素材权利。 |

## 视频与音频

| Skill 与来源 | 能做什么 | 使用前注意 |
| --- | --- | --- |
| [Seedance Prompt Library](https://github.com/LearnPrompt/awesome-seedance/blob/73cfc81887e909623379ba790b92398325f66379/agents/skills/seedance-prompt-library/SKILL.md)<br>[LearnPrompt/awesome-seedance](https://github.com/LearnPrompt/awesome-seedance) · MIT | 按视频场景选择模板，编写和复核 Seedance 视频生成提示词。 | 仅编写提示词；实际视频生成需另有模型与访问权限。<br>上游案例和模板不代表本目录重新生成或验证了样片。 |
| [Video Shotcraft](https://github.com/Vincentwei1021/video-shotcraft/blob/e2d8928c57ef84701f9b0119ca4a1c28a62050c1/SKILL.md)<br>[Vincentwei1021/video-shotcraft](https://github.com/Vincentwei1021/video-shotcraft) · Apache-2.0 | 以镜头配方和 Remotion 工作流制作产品宣传视频。 | 需按上游说明配置 Remotion、页面素材和音视频工具链。<br>对网页、品牌素材、音频和成片逐项核权与验收。 |
| [Native Subtitle Quote Image](https://github.com/chengyi-ai/native-subtitle-quote-image/blob/f9485e20f03fc0b9e5dfd77d03d5be24f7cebdcd/skills/native-subtitle-quote-image/SKILL.md)<br>[chengyi-ai/native-subtitle-quote-image](https://github.com/chengyi-ai/native-subtitle-quote-image) · MIT | 从有权处理的视频取帧，制作保留原字幕或标明后期字幕的社交长图。 | Python 3.10+、Pillow、FFmpeg 或 imageio-ffmpeg；链接模式还需额外工具。<br>只能处理有权使用的视频；原字幕与后期绘制字幕不得混称。 |
| [Paper Collage Ad](https://github.com/Jane-xiaoer/paper-collage-ad-codex/blob/a69c9f56eec57ca19d1c02f6bdcffe573b4324a8/SKILL.md)<br>[Jane-xiaoer/paper-collage-ad-codex](https://github.com/Jane-xiaoer/paper-collage-ad-codex) · MIT | 从产品简报制作剪纸拼贴广告，覆盖分镜、动画、配音及 MP4 验收。 | 需 Node、FFmpeg/ffprobe；部分生成与配音步骤需要额外工具。<br>语音克隆仅可使用获授权声音；生成服务和素材权利需复核。 |

## 发布与复盘

| Skill 与来源 | 能做什么 | 使用前注意 |
| --- | --- | --- |
| [SuperX](https://github.com/superx-so/superx-agent/blob/84d4d7d34514936bcbe310e6a8f051fca3199edc/skills/superx/SKILL.md)<br>[superx-so/superx-agent](https://github.com/superx-so/superx-agent) · MIT | 通过 SuperX 的 CLI 查询 X 账号数据、起草内容及管理排期。 | 需安装 SuperX CLI、绑定账号或配置 API Key；服务费用以提供方为准。<br>具备真实账号写入和发布能力；必须逐次确认具体动作与内容。 |

## 核查与使用

- 当前统一状态：**来源已核对，未安装、未实测**。记录中的许可仅是上游仓库本次核对结果，Skill 目录、素材和依赖可能另有条款。
- 点击 Skill 名称查看固定提交的 `SKILL.md`；安装时应同时检查其引用的脚本、参考文件、网络请求及账号权限，不能只复制一个文件。
- 有 API Key、付费接口、浏览器登录态、账号写入或对外发布能力的条目，先在隔离项目中审查和试用；不要直接授予生产账号。
- [收录与纠错规则](CONTRIBUTING.md)。本目录的说明由维护者撰写，第三方 Skill、代码和素材仍归各自作者及其许可管理。
