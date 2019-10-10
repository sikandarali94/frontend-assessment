// Element selectors
export const elements = {
    tabMenu: document.querySelector('.tab-menu'),
    tabNav: () => document.querySelector('.tabs-nav'),
    menuContent: () => document.querySelector('.menu-content'),
    oldActiveTab: () => document.querySelector('[data-tab-active="true"]'),
    newActiveTab: newIndex => document.querySelector(`[data-tab-index="${newIndex}"]`)
};