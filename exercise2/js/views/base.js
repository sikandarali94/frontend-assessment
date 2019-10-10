// Element selectors
export const elements = {
    tabMenu: document.querySelector('.tab-menu'),
    accordion: document.querySelector('.accordion'),
    tabNav: () => document.querySelector('.tabs-nav'),
    accordions: () => document.querySelectorAll('.accordion-title'),
    menuContent: () => document.querySelector('.menu-content'),
    oldActiveTab: () => document.querySelector('[data-tab-active="true"]'),
    newActiveTab: index => document.querySelector(`[data-tab-index="${index}"]`),
    oldActiveAccordionTitle: () => document.querySelector(`[data-accordion-title-active="true"]`),
    oldActiveAccordionContent: () => document.querySelector(`[data-accordion-content-active="true"]`),
    accordionTitle: index => document.querySelector(`[data-accordion-title-index="${index}"]`),
    accordionContent: index => document.querySelector(`[data-accordion-content-index="${index}"]`)
};