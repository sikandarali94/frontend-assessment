import { elements } from './base';

// Return markup of each tab in navigation bar.
const getTabsMarkup = titles => {
    let tabsMarkup = '';

    titles.forEach((title, index) => {
        tabsMarkup += `<div class="tab-nav item" data-tab-index="${index}" data-tab-active="false">${title}</div>`;
    });

    return tabsMarkup;
};

// Render the entire tab menu.
export const renderTabMenu = titles => {
    const tabMenu = elements.tabMenu;

    const tabsMarkup = getTabsMarkup(titles);

    const tabsMenuMarkup = `
        <div class="tabs-nav ui top attached tabular menu">
            ${tabsMarkup}
        </div>
        <div class="ui bottom attached active tab segment menu-content-container">
            <p class="menu-content"></p>
        </div>
    `;

    tabMenu.insertAdjacentHTML('afterbegin', tabsMenuMarkup);
};

// Show data associated with tab that is newly active.
export const showSectionContent = (newIndex, content) => {
    const menuContent = elements.menuContent();
    const oldActiveTab = elements.oldActiveTab();
    const newActiveTab = elements.newActiveTab(newIndex);

    menuContent.innerHTML = content;

    if (oldActiveTab) {
        oldActiveTab.className = 'tab-nav item';
        oldActiveTab.setAttribute('data-tab-active', 'false');
    }

    newActiveTab.className = 'tab-nav item active';
    newActiveTab.setAttribute('data-tab-active', 'true');
};