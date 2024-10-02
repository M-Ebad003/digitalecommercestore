export const PRODUCT_CATEGORIES = [
    {
            label: "UI Kits",
            value: "ui_kits" as const,
            featured:[
                {
                    name: "Editor picks",
                    href: "#",
                    imageSrc: '/nav/ui-kits/mixed.jgp'
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc: '/nav/ui-kits/blue.jgp'
                },
                {
                    name: "Bestsellers",
                    href: "#",
                    imageSrc: '/nav/ui-kits/purple.jgp'
                },
            ]
    },
    {
            label: "Icons",
            value: "icons" as const,
            featured:[
                {
                    name: "Favourite Icon Picks",
                    href: "#",
                    imageSrc: '/nav/icons/picks.jgp'
                },
                {
                    name: "New Arrivals",
                    href: "#",
                    imageSrc: '/nav/icons/new.jgp'
                },
                {
                    name: "Bestselling Icons",
                    href: "#",
                    imageSrc: '/nav/icons/bestsellers.jgp'
                },
            ]
    }
]