import {
  BookOpen,
  CloudDownload,
  History,
  Library,
  MoonStar,
  Palette,
  RefreshCw,
  Sparkles,
} from 'lucide-react';

export interface Feature {
  icon: typeof Library;
  title: string;
  desc: string;
}

export const FEATURES: Feature[] = [
  {
    icon: Library,
    title: '海量漫画书库',
    desc: '汇聚热血、恋爱、校园、奇幻、悬疑等丰富题材，热门韩漫与国漫条漫一搜即达，想看的内容轻松找到。',
  },
  {
    icon: RefreshCw,
    title: '每日同步更新',
    desc: '与网络连载同步更新，追更章节第一时间上架，更新提醒让你不错过每一话精彩剧情。',
  },
  {
    icon: BookOpen,
    title: '页漫条漫随心切',
    desc: '同时支持上下滑动的条漫与翻页阅读，加载快、画质高，手机上阅读顺畅不卡顿。',
  },
  {
    icon: CloudDownload,
    title: '离线缓存随时看',
    desc: '喜欢的章节一键缓存到本地，地铁、飞机等弱网环境也能畅快看漫，出门不用等加载。',
  },
  {
    icon: Sparkles,
    title: '个性化推荐',
    desc: '根据你的阅读偏好智能推荐，新书好书主动送到首页，书荒时也能发现对味的好作品。',
  },
  {
    icon: History,
    title: '阅读记录自动续读',
    desc: '自动记录阅读进度与历史记录，下次打开直接续读，多话连看无需手动找位置。',
  },
  {
    icon: MoonStar,
    title: '夜间护眼模式',
    desc: '内置夜间模式与亮度调节，深夜追漫更柔和，减轻长时间阅读带来的眼部疲劳。',
  },
  {
    icon: Palette,
    title: '清爽无干扰',
    desc: '界面简洁清爽，阅读器沉浸式呈现画面，让注意力回归漫画本身，专注享受故事。',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '绅士漫画 App 是免费的吗？',
    answer:
      '绅士漫画提供免费安装与使用，可直接在本站下载官方 Android 安装包。应用内部分资源可能存在第三方提供的相关说明，具体以打开后的实际页面为准。',
  },
  {
    question: '如何在安卓手机上安装绅士漫画？',
    answer:
      '点击本页"获取下载地址"按钮下载绅士漫画 APK 文件，下载完成后点击安装包，按系统提示允许"安装未知来源应用"即可完成安装。详细图文步骤可前往"下载安装"页面查看。',
  },
  {
    question: '绅士漫画支持哪些手机系统？',
    answer:
      '目前绅士漫画主要提供 Android 安卓版，支持市面上绝大多数安卓手机与平板设备。请保持系统为较新的安卓版本，以获得更好的阅读体验。',
  },
  {
    question: '下载的绅士漫画安装包安全吗？',
    answer:
      '本站提供的安装包来自绅士漫画官方下载地址，下载前可核对文件来源链接。建议仅从官方网站获取安装包，不要在来历不明的第三方站点下载，以防被篡改。',
  },
  {
    question: '安装时提示"未知来源应用"怎么办？',
    answer:
      '这是安卓系统的正常安全提示。在设置中允许浏览器或文件管理器"安装未知应用"权限后返回继续安装即可，安装完成后可随时关闭该权限。',
  },
  {
    question: '漫画可以离线下载观看吗？',
    answer:
      '可以。绅士漫画支持章节离线缓存，在有网络时提前下载想看的章节，没有网络时也能正常阅读，适合通勤、出行场景。',
  },
  {
    question: '忘记阅读进度怎么办？',
    answer:
      '绅士漫画会自动保存阅读记录与进度，下次进入对应作品可直接从上次位置继续阅读，历史记录中也能快速找回看过的漫画。',
  },
  {
    question: '应用打不开或安装失败如何处理？',
    answer:
      '请先检查手机存储空间是否充足，并确认已允许安装未知来源应用；若仍无法解决，建议删除安装包后重新从本站下载最新版本再次安装。',
  },
];

export const DOWNLOAD_STEPS = [
  {
    step: '01',
    title: '点击获取下载地址',
    desc: '点击页面中的"获取下载地址"按钮，跳转官方下载源。',
  },
  {
    step: '02',
    title: '下载 APK 安装包',
    desc: '在浏览器中确认下载绅士漫画 APK 文件，等待下载完成。',
  },
  {
    step: '03',
    title: '允许安装未知应用',
    desc: '按系统提示进入设置，允许当前浏览器安装未知来源应用。',
  },
  {
    step: '04',
    title: '安装并开始阅读',
    desc: '打开安装包完成安装，进入绅士漫画即可海量漫画随心看。',
  },
] as const;
