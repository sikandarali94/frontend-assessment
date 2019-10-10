import '../scss/styles.scss';
import data from '../data/data.json';
import TabMenu from './models/TabMenu';
import { renderTabMenu, showSectionContent } from './views/tabMenuView';
import { elements } from './views/base';

const state = {};

// Initially render tab menu.
const tabMenu = () => {
    state.tabMenu = new TabMenu(data); // Initialize tab menu state.

    try {
        // Render tab menu.
        renderTabMenu(data.map(section => section.title));

        // Show content in tab menu.
        showSectionContent(state.tabMenu.activeIndex, state.tabMenu.content);

        // Add click event listener to tabs navigation.
        addTabNavClickListener();
    } catch (err) {
        alert('Something wrong happened while rendering the tab menu...');
        console.error(err);
    }
};

window.addEventListener('load', () => {
    tabMenu(); // Render tab menu on page load.
});

const addTabNavClickListener = () => {
    // Add click event listener to tabs navigation.
    elements.tabNav().addEventListener('click', (e) => {
        // Grab the first class name of target that has been clicked.
        const eventTargetMainClass = e.target.classList[0];

        // If a tab has been clicked.
        if (eventTargetMainClass === 'tab-nav') {
            // Store the index of the tab that was clicked.
            const tabIndex = e.target.getAttribute('data-tab-index');

            // If a tab has been clicked that is not active.
            if (tabIndex !== state.tabMenu.activeIndex) {
                // Change model to reflect what tab was clicked on.
                state.tabMenu.changeActiveIndex(tabIndex);

                // Show in UI what tab is now active and content associated with it.
                showSectionContent(state.tabMenu.activeIndex, state.tabMenu.content);
            }
        }
    });
};