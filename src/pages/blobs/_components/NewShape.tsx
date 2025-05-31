import { useState, useEffect } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import ShapePreview from './ShapePreview.tsx';
import { generateBlob, uploadDisabled } from '../../../utils';
import type { BlobProps } from '../../../types.ts';

interface Props {
    setLastMutationTime?: Dispatch<SetStateAction<number>>;
}

export default function NewShape(props: Props) {
    const { setLastMutationTime } = props;
    const [blobData, setBlobData] = useState<BlobProps>();
    const [wasUploaded, setWasUploaded] = useState<boolean>(false);

    const randomizeBlob = () => {
        setBlobData(generateBlob());
        setWasUploaded(false);
    };

    const defaultData = {
    name:'defaultData',
    data:{
    en: {
        defaultDeskData: [
    {
        id: 'flipClock',
        type: 'widget',
        widget: 'flipClock',
        size: '4x2',
        minSize:'4x2',
        maxSize: '4x2',
        title: '时钟',
        setting: {
            mode: 'light',
        },
        fullscreen: {
            scale: 4.5,
            bgColor:'rgba(0,0,0,0.8)'
        }
    },
    {
        id: 'musicPlayer',
        type: 'widget',
        widget: 'musicPlayer',
        size: '2x2',
        minSize:'2x2',      
        title: '音乐',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'weather',
        type: 'widget',
        widget: 'weather',
        size: '3x2',
        maxSize: '3x2',
        minSize: '2x2',
        title: '天气预报',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'focus',
        type: 'widget',
        widget: 'focus',
        size: '2x2',
        minSize: '2x2',
        title: '专注',
        setting: {
            mode: 'light',
        },
        fullscreen: {
            scale: 4,
          
        }
    },
    {
        id: 'countdown',
        type: 'widget',
        widget: 'countdown',
        size: '2x2',
        minSize: '2x1',
        title: '纪念日',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'miniTask',
        type: 'widget',
        widget: 'miniTask',
        size: '2x2',
        minSize: '2x2',
        title: '迷你便签',
        setting: {
            mode: 'light',
        },
    },

    {
        id: 1000,
        type: 'folder',
        size: '2x2',
        maxSize: '4x2',
        title: '办公',
        children: [
            {
                id: 521,
                type: 'link',
                title: '飞书',
                iconUrl: 'https://static.yundh.com/logo/22c1efe139f84defa35ac3858c9344c7.png',
                url: 'https://www.feishu.cn/',
            },
            {
                id: 609,
                type: 'link',
                title: '百度网盘',
                iconUrl: 'https://static.yundh.com/logo/1e456450588a48158dc8ad7dad486335.png',
                url: 'https://pan.baidu.com/',
            },
            {
                id: 569,
                type: 'link',
                title: 'Xmind',
                iconUrl: 'https://static.yundh.com/logo/e62701a5862c4208937e70040cee8b07.png',
                url: 'https://xmind.cn/',
            },
            {
                id: 575,
                type: 'link',
                title: 'Boardmix',
                iconUrl: 'https://static.yundh.com/logo/6c81164a483b405491fb7e147f163fb1.png',
                url: 'https://boardmix.cn/',
            },
        ],
    },
    {
        title: '影音娱乐',
        type: 'folder',
        id: '0mxehgf01s',
        size: '2x2',
        children: [
            {
                id: 297,
                type: 'link',
                title: 'QQ音乐',
                iconUrl: 'https://static.yundh.com/logo/5a8332a7639d48dbb97f62226d8f48f4.png',
                url: 'https://y.qq.com/',
            },
            {
                id: 267,
                type: 'link',
                title: '腾讯视频',
                iconUrl: 'https://static.yundh.com/logo/44aba6e125b74989b9d0c602c1212d39.png',
                url: 'https://v.qq.com/',
            },
            {
                id: 269,
                type: 'link',
                title: '优酷',
                iconUrl: 'https://static.yundh.com/logo/96f4a2e51cfd4f049d7cece3b64ade46.png',
                url: 'https://youku.com/',
            },
            {
                id: 273,
                type: 'link',
                title: '哔哩哔哩',
                iconUrl: 'https://static.yundh.com/logo/15f912bb346041b596251e83cb7739c2.png',
                url: 'https://www.bilibili.com/',
            },
        ],
    },
    {
        title: '社交',
        type: 'folder',
        id: '01tcdk1d01',
        size: '2x1',
        children: [
            {
                id: 495,
                type: 'link',
                title: '小红书',
                iconUrl: 'https://static.yundh.com/logo/7461d0bf586844b29496085dd47681c9.png',
                url: 'https://www.xiaohongshu.com/',
            },
            {
                id: 494,
                type: 'link',
                title: '新浪微博',
                iconUrl: 'https://static.yundh.com/logo/d3670a21107546c7a35b95a7abff0e38.png',
                url: 'https://weibo.com/',
            },
        ],
    },
    {
        id: 2840,
        type: 'link',
        title: '免费ChatGPT',
        iconUrl: 'https://static.yundh.com/logo/d7ed7f4f060149128f79ed8c1621c1c2.png',
        url: 'https://chat-shared2.zhile.io/shared.html',
    },
    {
        title: '购物',
        type: 'folder',
        id: '0127tngf01',
        size: '2x2',
        children: [
            {
                id: 379,
                type: 'link',
                title: '淘宝',
                iconUrl: 'https://static.yundh.com/logo/e07ec6d5b2144419b724cf143e7da08c.png',
                url: 'https://www.taobao.com/',
            },
            {
                id: 380,
                type: 'link',
                title: '天猫',
                iconUrl: 'https://static.yundh.com/logo/a762f3d23d19446cbb792d8592285306.png',
                url: 'https://www.tmall.com/',
            },
            {
                id: 495,
                type: 'link',
                title: '小红书',
                iconUrl: 'https://static.yundh.com/logo/7461d0bf586844b29496085dd47681c9.png',
                url: 'https://www.xiaohongshu.com/',
            },
            {
                id: 493,
                type: 'link',
                title: '知乎',
                iconUrl: 'https://static.yundh.com/logo/6652ff7c13a6483c81a2ac3fcb14ed09.png',
                url: 'https://www.zhihu.com/',
            },
        ],
    },
    {
        id: 403,
        type: 'link',
        title: '携程旅行',
        iconUrl: 'https://static.yundh.com/logo/a1025a9ae6984473b143f8a850df72a4.png',
        url: 'https://www.ctrip.com/',
    },
    {
        id: 42,
        type: 'link',
        title: '新浪网',
        iconUrl: 'https://static.yundh.com/logo/a698e3e1e3084afc905c1af3f1204751.png',
        url: 'https://www.sina.com.cn/',
    },
    {
        id: 41,
        type: 'link',
        title: '腾讯网',
        iconUrl: 'https://static.yundh.com/logo/8f6770549dd64036996d614e44a76105.png',
        url: 'https://www.qq.com/',
    },
    {
        id: 567,
        type: 'link',
        title: '网易邮箱大师',
        iconUrl: 'https://static.yundh.com/logo/c047f3cec2d447209e81659ec6b0b00b.png',
        url: 'https://dashi.163.com/',
    },
    {
        title: 'AI',
        type: 'folder',
        id: '0ltl25t025',
        size: '2x1',
        children: [
            {
                id: 3386,
                type: 'link',
                title: '豆包',
                iconUrl: 'https://static.yundh.com/logo/9b70ef4553e345abbb3697799c25575b.png',
                url: 'https://www.doubao.com/',
            },
            {
                id: 1047,
                type: 'link',
                title: '文心一言',
                iconUrl: 'https://static.yundh.com/logo/68f7984a2ff84781aa93c95b38fa0d24.png',
                url: 'https://yiyan.baidu.com',
            },
            {
                id: 3387,
                type: 'link',
                title: '智谱清言',
                iconUrl: 'https://static.yundh.com/logo/397cbc04eca84caa9ce3cf6a308b835d.png',
                url: 'https://chatglm.cn/',
            },
        ],
    },
    {
        id: 609,
        type: 'link',
        title: '百度网盘',
        iconUrl: 'https://static.yundh.com/logo/1e456450588a48158dc8ad7dad486335.png',
        url: 'https://pan.baidu.com/',
    },
    {
        id: 508,
        type: 'link',
        title: 'Instagram',
        iconUrl: 'https://static.yundh.com/logo/403d8134d72d4a6d9bbdc2e1a238c426.png',
        url: 'https://www.instagram.com/',
    },
    {
        id: 1024,
        type: 'link',
        title: 'X',
        iconUrl: 'https://static.yundh.com/logo/1bd800f82974477886ab066c7ee3e1c5.webp',
        url: 'https://twitter.com/',
    },
    {
        id: 513,
        type: 'link',
        title: 'Snapchat',
        iconUrl: 'https://static.yundh.com/logo/17b777449f254eecbb939b528193fd65.webp',
        url: 'https://www.snapchat.com/',
    },
        ],
        defaultDockerData: [
    {
        id: 3891,
        type: 'link',
        title: 'DeepSeek',
        iconUrl: 'https://static.yundh.com/logo/101c2252d9ef4939b1a8171c37f9cf52.png',
        url: 'https://www.deepseek.com/',
    },
    {
        id: 378,
        type: 'link',
        title: '京东',
        iconUrl: 'https://static.yundh.com/logo/e6f8994d6cc14c58b13942c94aeb1873.png',
        url: 'https://www.jd.com/',
    },
    {
        id: 511,
        type: 'link',
        title: 'TikTok',
        iconUrl: 'https://static.yundh.com/logo/b9bdb9ad2bc74f22867cfa212e05f849.png',
        url: 'https://www.tiktok.com/',
    },
    {
        id: 268,
        type: 'link',
        title: '爱奇艺',
        iconUrl: 'https://static.yundh.com/logo/151ab6f4d3924d58a85503a57d7ba0a1.png',
        url: 'https://www.iqiyi.com/',
    },
    {
        id: 296,
        type: 'link',
        title: '网易云音乐',
        iconUrl: 'https://static.yundh.com/logo/5797204308c746d8a1260af405a74e27.png',
        url: 'https://music.163.com/',
    },
    {
        id: 520,
        type: 'link',
        title: '金山WPS',
        iconUrl: 'https://static.yundh.com/logo/0930330416a9403ca01d3762f2fc6701.png',
        url: 'https://www.wps.cn/',
    },
        ],
        sourceWidgetData: [
    {
        id: 'musicPlayer',
        type: 'widget',
        widget: 'musicPlayer',
        size: '2x2',
        minSize: '2x2',
        title: 'Music Player',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'focus',
        type: 'widget',
        widget: 'focus',
        size: '2x2',
        title: 'Focus',
        setting: {
            mode: 'light',
        },
        fullscreen: {
            scale: 4,
        }
    },
    {
        id: 'countdown',
        type: 'widget',
        widget: 'countdown',
        size: '2x2',
        minSize: '2x1',
        title: 'Countdown',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'miniTask',
        type: 'widget',
        widget: 'miniTask',
        size: '2x2',
        minSize: '2x2',
        title: 'Mini Notes',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'flipClock',
        type: 'widget',
        widget: 'flipClock',
        size: '4x2',
        minSize: '4x2',
        maxSize: '4x2',
        title: 'Clock',
        setting: {
            mode: 'light',
        },
        fullscreen: {
            scale: 4.5,
            bgColor: 'rgba(0,0,0,0.8)'
        }
    },
    {
        id: 'weather',
        type: 'widget',
        widget: 'weather',
        size: '3x2',
        maxSize: '3x2',
        minSize: '2x2',
        title: 'Weather',
        setting: {
            mode: 'light',
        },
    },
],
     sourceActionData: [
    {
        id: 'add',
        type: 'action',
        title: 'Add',
        iconUrl: '../assets/image/add.png',
    },
    {
        id: 'config',
        type: 'action',
        title: 'Settings',
        iconUrl: '../assets/image/config.png',
    },
    {
        id: 'trash',
        type: 'action',
        title: 'Trash',
        iconUrl: '../assets/image/trash.png',
        iconUrl2: '../assets/image/trash_fill.png',
        children: [],
    },
],
        sourceTypeData: [
        { model: 'addWidget', title: 'Widgets', placement: 'left', width: '720', visible: false },
        { model: 'addLink', title: 'Websites', placement: 'left', width: '720', visible: false },
        { model: 'addBookmark', title: 'Bookmarks', placement: 'left', width: '720', visible: false }
        ],
         videoBgs: videoBgs,
        colors: [

                {
                    key: 'red',
                    title: 'red'
                },
                {
                    key: 'orange',
                    title: 'orange'
                },
                {
                    key: 'yellow',
                    title: 'yellow'
                },
                {
                    key: 'cyan',
                    title: 'cyan'
                },
                {
                    key: 'green',
                    title: 'green'
                },
                {
                    key: 'blue',
                    title: 'blue'
                },
                {
                    key: 'purple',
                    title: 'purple'
                },
                {
                    key: '',
                    title: 'default'
                },

            ]
    },
    'zh-CN': {
         defaultDeskData: [
    {
        id: 'flipClock',
        type: 'widget',
        widget: 'flipClock',
        size: '4x2',
        minSize:'4x2',
        maxSize: '4x2',
        title: '时钟',
        setting: {
            mode: 'light',
        },
        fullscreen: {
            scale: 4.5,
            bgColor:'rgba(0,0,0,0.8)'
        }
    },
    {
        id: 'musicPlayer',
        type: 'widget',
        widget: 'musicPlayer',
        size: '2x2',
        minSize:'2x2',      
        title: '音乐',
         setting: {
            mode: 'light',
        },
    },
    {
        id: 'weather',
        type: 'widget',
        widget: 'weather',
        size: '3x2',
        maxSize: '3x2',
        minSize: '2x2',
        title: '天气预报',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'focus',
        type: 'widget',
        widget: 'focus',
        size: '2x2',
        minSize: '2x2',
        title: '专注',
        setting: {
            mode: 'light',
        },
        fullscreen: {
            scale: 4,
          
        }
    },
    {
        id: 'countdown',
        type: 'widget',
        widget: 'countdown',
        size: '2x2',
        minSize: '2x1',
        title: '纪念日',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'miniTask',
        type: 'widget',
        widget: 'miniTask',
        size: '2x2',
        minSize: '2x2',
        title: '迷你便签',
        setting: {
            mode: 'light',
        },
    },

    {
        id: 1000,
        type: 'folder',
        size: '2x2',
        maxSize: '4x2',
        title: '办公',
        children: [
            {
                id: 521,
                type: 'link',
                title: '飞书',
                iconUrl: 'https://static.yundh.com/logo/22c1efe139f84defa35ac3858c9344c7.png',
                url: 'https://www.feishu.cn/',
            },
            {
                id: 609,
                type: 'link',
                title: '百度网盘',
                iconUrl: 'https://static.yundh.com/logo/1e456450588a48158dc8ad7dad486335.png',
                url: 'https://pan.baidu.com/',
            },
            {
                id: 569,
                type: 'link',
                title: 'Xmind',
                iconUrl: 'https://static.yundh.com/logo/e62701a5862c4208937e70040cee8b07.png',
                url: 'https://xmind.cn/',
            },
            {
                id: 575,
                type: 'link',
                title: 'Boardmix',
                iconUrl: 'https://static.yundh.com/logo/6c81164a483b405491fb7e147f163fb1.png',
                url: 'https://boardmix.cn/',
            },
        ],
    },
    {
        title: '影音娱乐',
        type: 'folder',
        id: '0mxehgf01s',
        size: '2x2',
        children: [
            {
                id: 297,
                type: 'link',
                title: 'QQ音乐',
                iconUrl: 'https://static.yundh.com/logo/5a8332a7639d48dbb97f62226d8f48f4.png',
                url: 'https://y.qq.com/',
            },
            {
                id: 267,
                type: 'link',
                title: '腾讯视频',
                iconUrl: 'https://static.yundh.com/logo/44aba6e125b74989b9d0c602c1212d39.png',
                url: 'https://v.qq.com/',
            },
            {
                id: 269,
                type: 'link',
                title: '优酷',
                iconUrl: 'https://static.yundh.com/logo/96f4a2e51cfd4f049d7cece3b64ade46.png',
                url: 'https://youku.com/',
            },
            {
                id: 273,
                type: 'link',
                title: '哔哩哔哩',
                iconUrl: 'https://static.yundh.com/logo/15f912bb346041b596251e83cb7739c2.png',
                url: 'https://www.bilibili.com/',
            },
        ],
    },
    {
        title: '社交',
        type: 'folder',
        id: '01tcdk1d01',
        size: '2x1',
        children: [
            {
                id: 495,
                type: 'link',
                title: '小红书',
                iconUrl: 'https://static.yundh.com/logo/7461d0bf586844b29496085dd47681c9.png',
                url: 'https://www.xiaohongshu.com/',
            },
            {
                id: 494,
                type: 'link',
                title: '新浪微博',
                iconUrl: 'https://static.yundh.com/logo/d3670a21107546c7a35b95a7abff0e38.png',
                url: 'https://weibo.com/',
            },
        ],
    },
    {
        id: 2840,
        type: 'link',
        title: '免费ChatGPT',
        iconUrl: 'https://static.yundh.com/logo/d7ed7f4f060149128f79ed8c1621c1c2.png',
        url: 'https://chat-shared2.zhile.io/shared.html',
    },
    {
        title: '购物',
        type: 'folder',
        id: '0127tngf01',
        size: '2x2',
        children: [
            {
                id: 379,
                type: 'link',
                title: '淘宝',
                iconUrl: 'https://static.yundh.com/logo/e07ec6d5b2144419b724cf143e7da08c.png',
                url: 'https://www.taobao.com/',
            },
            {
                id: 380,
                type: 'link',
                title: '天猫',
                iconUrl: 'https://static.yundh.com/logo/a762f3d23d19446cbb792d8592285306.png',
                url: 'https://www.tmall.com/',
            },
            {
                id: 495,
                type: 'link',
                title: '小红书',
                iconUrl: 'https://static.yundh.com/logo/7461d0bf586844b29496085dd47681c9.png',
                url: 'https://www.xiaohongshu.com/',
            },
            {
                id: 493,
                type: 'link',
                title: '知乎',
                iconUrl: 'https://static.yundh.com/logo/6652ff7c13a6483c81a2ac3fcb14ed09.png',
                url: 'https://www.zhihu.com/',
            },
        ],
    },
    {
        id: 403,
        type: 'link',
        title: '携程旅行',
        iconUrl: 'https://static.yundh.com/logo/a1025a9ae6984473b143f8a850df72a4.png',
        url: 'https://www.ctrip.com/',
    },
    {
        id: 42,
        type: 'link',
        title: '新浪网',
        iconUrl: 'https://static.yundh.com/logo/a698e3e1e3084afc905c1af3f1204751.png',
        url: 'https://www.sina.com.cn/',
    },
    {
        id: 41,
        type: 'link',
        title: '腾讯网',
        iconUrl: 'https://static.yundh.com/logo/8f6770549dd64036996d614e44a76105.png',
        url: 'https://www.qq.com/',
    },
    {
        id: 567,
        type: 'link',
        title: '网易邮箱大师',
        iconUrl: 'https://static.yundh.com/logo/c047f3cec2d447209e81659ec6b0b00b.png',
        url: 'https://dashi.163.com/',
    },
    {
        title: 'AI',
        type: 'folder',
        id: '0ltl25t025',
        size: '2x1',
        children: [
            {
                id: 3386,
                type: 'link',
                title: '豆包',
                iconUrl: 'https://static.yundh.com/logo/9b70ef4553e345abbb3697799c25575b.png',
                url: 'https://www.doubao.com/',
            },
            {
                id: 1047,
                type: 'link',
                title: '文心一言',
                iconUrl: 'https://static.yundh.com/logo/68f7984a2ff84781aa93c95b38fa0d24.png',
                url: 'https://yiyan.baidu.com',
            },
            {
                id: 3387,
                type: 'link',
                title: '智谱清言',
                iconUrl: 'https://static.yundh.com/logo/397cbc04eca84caa9ce3cf6a308b835d.png',
                url: 'https://chatglm.cn/',
            },
        ],
    },
    {
        id: 609,
        type: 'link',
        title: '百度网盘',
        iconUrl: 'https://static.yundh.com/logo/1e456450588a48158dc8ad7dad486335.png',
        url: 'https://pan.baidu.com/',
    },
    {
        id: 508,
        type: 'link',
        title: 'Instagram',
        iconUrl: 'https://static.yundh.com/logo/403d8134d72d4a6d9bbdc2e1a238c426.png',
        url: 'https://www.instagram.com/',
    },
    {
        id: 1024,
        type: 'link',
        title: 'X',
        iconUrl: 'https://static.yundh.com/logo/1bd800f82974477886ab066c7ee3e1c5.webp',
        url: 'https://twitter.com/',
    },
    {
        id: 513,
        type: 'link',
        title: 'Snapchat',
        iconUrl: 'https://static.yundh.com/logo/17b777449f254eecbb939b528193fd65.webp',
        url: 'https://www.snapchat.com/',
    },
        ],
        defaultDockerData: [
    {
        id: 3891,
        type: 'link',
        title: 'DeepSeek',
        iconUrl: 'https://static.yundh.com/logo/101c2252d9ef4939b1a8171c37f9cf52.png',
        url: 'https://www.deepseek.com/',
    },
    {
        id: 378,
        type: 'link',
        title: '京东',
        iconUrl: 'https://static.yundh.com/logo/e6f8994d6cc14c58b13942c94aeb1873.png',
        url: 'https://www.jd.com/',
    },
    {
        id: 511,
        type: 'link',
        title: 'TikTok',
        iconUrl: 'https://static.yundh.com/logo/b9bdb9ad2bc74f22867cfa212e05f849.png',
        url: 'https://www.tiktok.com/',
    },
    {
        id: 268,
        type: 'link',
        title: '爱奇艺',
        iconUrl: 'https://static.yundh.com/logo/151ab6f4d3924d58a85503a57d7ba0a1.png',
        url: 'https://www.iqiyi.com/',
    },
    {
        id: 296,
        type: 'link',
        title: '网易云音乐',
        iconUrl: 'https://static.yundh.com/logo/5797204308c746d8a1260af405a74e27.png',
        url: 'https://music.163.com/',
    },
    {
        id: 520,
        type: 'link',
        title: '金山WPS',
        iconUrl: 'https://static.yundh.com/logo/0930330416a9403ca01d3762f2fc6701.png',
        url: 'https://www.wps.cn/',
    },
        ],
        sourceWidgetData: [

    {
        id: 'musicPlayer',
        type: 'widget',
        widget: 'musicPlayer',
        size: '2x2',
        minSize:'2x2',       
        title: '音乐',
         setting: {
            mode: 'light',
        },
    },
    
    {
        id: 'focus',
        type: 'widget',
        widget: 'focus',
        size: '2x2',
        title: '专注',
        setting: {
            mode: 'light',
        },
        fullscreen: {
            scale: 4,
         
        }
    },
    {
        id: 'countdown',
        type: 'widget',
        widget: 'countdown',
        size: '2x2',
        minSize: '2x1',
        title: '纪念日',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'miniTask',
        type: 'widget',
        widget: 'miniTask',
        size: '2x2',
        minSize: '2x2',
        title: '迷你便签',
        setting: {
            mode: 'light',
        },
    },
    {
        id: 'flipClock',
        type: 'widget',
        widget: 'flipClock',
        size: '4x2',
        minSize:'4x2',
        maxSize: '4x2',
        title: '时钟',
        setting: {
            mode: 'light',
        },
        fullscreen: {
            scale: 4.5,
            bgColor:'rgba(0,0,0,0.8)'
        }
    },
    {
        id: 'weather',
        type: 'widget',
        widget: 'weather',
        size: '3x2',
        maxSize: '3x2',
        minSize: '2x2',
        title: '天气预报',
        setting: {
            mode: 'light',
        },
    },
        ],
        sourceActionData: [
    {
        id: 'add',
        type: 'action',
        title: '添加',
        iconUrl: '../assets/image/add.png',
    },
    {
        id: 'config',
        type: 'action',
        title: '设置',
        iconUrl: '../assets/image/config.png',
    },

    {
        id: 'trash',
        type: 'action',
        title: '回收站',
        iconUrl: '../assets/image/trash.png',
        iconUrl2: '../assets/image/trash_fill.png',
        children: [],
    },
        ],
        sourceTypeData: [
    { model: 'addWidget', title: '精选组件', placement: 'left', width: '720', visible: false },
    { model: 'addLink', title: '推荐网站', placement: 'left', width: '720', visible: false },
    { model: 'addBookmark', title: '我的书签', placement: 'left', width: '720', visible: false },
        ],
        videoBgs: videoBgs,
        colors: [

                {
                    key: 'red',
                    title: '红色'
                },
                {
                    key: 'orange',
                    title: '橙色'
                },
                {
                    key: 'yellow',
                    title: '黄色'
                },
                {
                    key: 'cyan',
                    title: '青色'
                },
                {
                    key: 'green',
                    title: '绿色'
                },
                {
                    key: 'blue',
                    title: '蓝色'
                },
                {
                    key: 'purple',
                    title: '紫色'
                },
                {
                    key: '',
                    title: '默认'
                },

            ]
       }

}
    };
    const uploadBlob = async () => {
        const response = await fetch('/api/blobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(defaultData)
        });
        const data = await response.json();
        if (data.message) {
            console.log(data.message);
        }
        setWasUploaded(true);
        setLastMutationTime(Date.now());
    };

    useEffect(() => {
        if (!blobData) {
            randomizeBlob();
        }
    }, [blobData]);

    return (
        <>
            <h2 className="mb-4 text-xl text-center sm:text-xl">New Random Shape2</h2>
            <div className="w-full mb-6 bg-white rounded-lg">
                <div className="p-4 text-center text-gray-900 border-b border-gray-200 min-h-14">{blobData && <span>{blobData.parameters?.name}</span>}</div>
                <div className="p-4 aspect-square text-primary">{blobData && <ShapePreview {...blobData} />}</div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="btn" onClick={randomizeBlob}>
                    Randomize
                </button>
                <button className="btn" onClick={uploadBlob} disabled={uploadDisabled || wasUploaded || !blobData}>
                    Upload
                </button>
            </div>
        </>
    );
}
