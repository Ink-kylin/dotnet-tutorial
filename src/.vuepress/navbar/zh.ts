import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "案例",
        icon: "discover",
        link: "/demo",
        prefix: "/demo/",
        children: [
            {
                text: "Web App",
                icon: "web",
                prefix: "web/",
                children: [
                    {
                        text: "Razor",
                        link: "razor"
                    },
                    {
                        text: "MVC",
                        link: "mvc"
                    },
                ],
            },
        ],
    },
    {
        text: "临时",
        icon: "temp",
        link: "/temp",
        prefix: "/temp/",
        children: [
            {
                text: "新圩港思路",
                icon: "mind",
                link: "xwg"
            }
        ]
    },

    {
        text: "指南",
        icon: "creative",
        prefix: "/study/",
        children: [
            {
                text: "Bar",
                icon: "creative",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "more", link: ""}],
            },
            {
                text: "Foo",
                icon: "config",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "more", link: ""}],
            },
        ],
    },

]);
