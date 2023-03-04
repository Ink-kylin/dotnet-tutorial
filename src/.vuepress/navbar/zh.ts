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
        text: "实战项目",
        icon: "project",
        link: "/actual_project",
        prefix: "/actual_project/",
        children: [
            {
                text: "业务类型",
                icon: "business",
                prefix: "business_type/",
                children: [
                    {
                        text: "后台管理系统",
                        icon: "admin",
                        link: "awesome_admin"
                    }
                ]
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
