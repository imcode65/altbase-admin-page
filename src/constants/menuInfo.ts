import IconEmail from 'components/icons/IconEmail';

export const prefix = "/admin";
export const menuInfo = [{
    Icon: IconEmail,
    text: "Dashboard",
    to: "/dashboard",
    breadCrumb: ["Home", "Dashboard"],
    breadCrumbTitle: "Dashboard",
}, {
    Icon: IconEmail,
    text: "Site Settings",
    to: "/site-settings",
    breadCrumb: ["Dashboard", "Site Settings"],
    breadCrumbTitle: "Site Settings",
}, {
    Icon: IconEmail,
    text: "Application Settings",
    to: "/application-settings",
    breadCrumb: ["Dashboard", "Application Settings"],
    breadCrumbTitle: "Application Settings",
}, {
    Icon: IconEmail,
    text: "Email Template",
    to: "/email-template/manage",
    breadCrumb: ["Dashboard", "Manage Email Templates"],
    breadCrumbTitle: "Email Templates",
}, {
    Icon: IconEmail,
    text: "CMS",
    to: "/cms/manage",
    breadCrumb: ["Dashboard", "Manage CMS"],
    breadCrumbTitle: "Manage CMS",
}, {
    Icon: IconEmail,
    text: "Users",
    to: "/users/manage",
    breadCrumb: ["Dashboard", "Manage Users"],
    breadCrumbTitle: "Manage Users",
}, {
    Icon: IconEmail,
    text: "Coin Category",
    to: "/coin-category/manage",
    breadCrumb: ["Dashboard", "Manage Coin Category"],
    breadCrumbTitle: "Manage Coin Category",
}, {
    Icon: IconEmail,
    text: "Coins",
    to: "/coins/manage",
    breadCrumb: ["Dashboard", "Manage Coins"],
    breadCrumbTitle: "Manage Coins",
}, {
    Icon: IconEmail,
    text: "Coin News",
    to: "/coin-news/manage",
    breadCrumb: ["Dashboard", "Manage Coin News"],
    breadCrumbTitle: "Manage Coin News",
}, {
    Icon: IconEmail,
    text: "Notifications",
    to: "/in-app-notification",
    breadCrumb: ["Dashboard", "Notifications"],
    breadCrumbTitle: "Notifications",
}, {
    Icon: IconEmail,
    text: "Transaction History - Buy BNB",
    to: "/transaction-history/buy-bnb",
    breadCrumb: ["Dashboard", "Manage Buy BNB Transaction History"],
    breadCrumbTitle: "Manage Buy BNB Transaction History",
}, ];