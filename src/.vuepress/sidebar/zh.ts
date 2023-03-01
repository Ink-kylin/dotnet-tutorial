import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/": [
//     "",
        {
            text: "简述",
            icon: "note",
            prefix: "overview/",
            collapsible: true,
            children: "structure",
        },

        {
            icon: "install",
            text: "安装",
            prefix: "install/",
            // link: "install/",
            collapsible: true,
            children: "structure",
        },
        {
            icon: "guide",
            text: "学习",
            prefix: "study/",
            collapsible: true,
            children: "structure",
        },
//     "slides",
    ],
    "/demo": [

    ],
    "/temp": [

    ]

});
