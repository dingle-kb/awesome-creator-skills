import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const catalog = JSON.parse(await readFile(resolve(root, 'data/skills.json'), 'utf8'));
const categories = ['研究与洞察', '策划与选题', '文案与脚本', '视觉与图文', '视频与音频', '发布与复盘'];
const seen = new Set();
if (catalog.length === 0) throw new Error('Catalog must not be empty');

for (const item of catalog) {
  for (const key of ['id', 'category', 'name', 'description', 'repo', 'skillPath', 'ref', 'license', 'requirements', 'caution', 'review', 'reviewedOn']) {
    if (typeof item[key] !== 'string' || !item[key].trim()) throw new Error(`${item.id ?? 'unknown'}: missing ${key}`);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.id) || seen.has(item.id)) throw new Error(`Invalid or duplicate id: ${item.id}`);
  if (!categories.includes(item.category)) throw new Error(`${item.id}: unknown category`);
  if (!/^[\w.-]+\/[\w.-]+$/.test(item.repo) || item.skillPath.startsWith('/') || item.skillPath.includes('..') || !item.skillPath.endsWith('SKILL.md')) throw new Error(`${item.id}: invalid source path`);
  if (!/^[0-9a-f]{40}$/.test(item.ref)) throw new Error(`${item.id}: expected a full commit SHA`);
  if (item.review !== 'source-checked') throw new Error(`${item.id}: unsupported review state`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(item.reviewedOn)) throw new Error(`${item.id}: invalid date`);
  seen.add(item.id);
}

const cell = value => value.replaceAll('|', '\\|').replaceAll('\n', ' ');
const lines = [
  '# Awesome Creator Skills',
  '',
  '面向内容创作者的 Agent Skills（智能体技能）精选目录。按创作任务寻找可复用能力，直接前往作者仓库了解和安装；本仓库不托管或自动执行第三方 Skill。',
  '',
  '当前收录来自维护者 GitHub 收藏的初次筛选。**收藏和收录均不等于安装、实测、安全审计或效果背书。**所有条目目前仅核对了公开来源与 Skill 入口，尚未安装或执行；实际使用前应阅读上游全部文件、依赖、许可及权限说明。链接锁定在核对时的提交，查看新版请进入上游仓库。',
  '',
  `共 ${catalog.length} 条 Skill，涉及 ${new Set(catalog.map(item => item.repo)).size} 个上游仓库；最近核对日期：${catalog.map(item => item.reviewedOn).sort().at(-1)}。`,
  '',
  '## 目录',
  '',
  ...categories.map(category => `- [${category}](#${category})`),
  '',
];

for (const category of categories) {
  lines.push(`## ${category}`, '', '| Skill 与来源 | 能做什么 | 使用前注意 |', '| --- | --- | --- |');
  for (const item of catalog.filter(entry => entry.category === category)) {
    const source = `https://github.com/${item.repo}/blob/${item.ref}/${item.skillPath}`;
    const repo = `https://github.com/${item.repo}`;
    lines.push(`| [${cell(item.name)}](${source})<br>[${item.repo}](${repo}) · ${item.license} | ${cell(item.description)} | ${cell(item.requirements)}<br>${cell(item.caution)} |`);
  }
  lines.push('');
}

lines.push(
  '## 核查与使用',
  '',
  '- 当前统一状态：**来源已核对，未安装、未实测**。记录中的许可仅是上游仓库本次核对结果，Skill 目录、素材和依赖可能另有条款。',
  '- 点击 Skill 名称查看固定提交的 `SKILL.md`；安装时应同时检查其引用的脚本、参考文件、网络请求及账号权限，不能只复制一个文件。',
  '- 有 API Key、付费接口、浏览器登录态、账号写入或对外发布能力的条目，先在隔离项目中审查和试用；不要直接授予生产账号。',
  '- [收录与纠错规则](CONTRIBUTING.md)。本目录的说明由维护者撰写，第三方 Skill、代码和素材仍归各自作者及其许可管理。',
  '',
);

const output = `${lines.join('\n').trimEnd()}\n`;
const target = resolve(root, 'README.md');
if (process.argv.includes('--check')) {
  if (await readFile(target, 'utf8') !== output) throw new Error('README.md is out of date; run node scripts/build.mjs');
  console.log(`Checked ${catalog.length} entries`);
} else {
  await writeFile(target, output);
  console.log(`Generated README.md from ${catalog.length} entries`);
}
