import '../scss/styles.scss';
import data from '../data/data.json';
import { elements } from './views/base';
import TabMenu from './models/TabMenu';
import AccordionMenu from './models/AccordionMenu';
import { renderTabMenu, showTabSectionContent } from './views/tabMenuView';
import { renderAccordionMenu, changeActiveAccordion, closeAccordion } from './views/accordionView';

const state = {};

// Initially render tab menu.
const tabMenu = () => {
    state.tabMenu = new TabMenu(data); // Initialize tab menu state.

    try {
        // Render tab menu.
        renderTabMenu(data.map(section => section.title));

        // Show content in tab menu.
        showTabSectionContent(state.tabMenu.activeIndex, state.tabMenu.content);

        // Add click event listener to tabs navigation.
        addTabNavClickListener();
    } catch (err) {
        alert('Something wrong happened while rendering the tab menu...');
        console.error(err);
    }
};

// Initially render accordion menu.
const accordionMenu = () => {
    state.accordionMenu = new AccordionMenu(data); // Initialize accordion menu state.

    try {
        // Render accordion menu.
        renderAccordionMenu(data);

        // Show newly active accordion title and content and hide the old one.
        changeActiveAccordion(state.accordionMenu.activeIndex);

        // Add click event listener to each accordion title.
        addAccordionsClickListener();
    } catch (err) {
        alert('Something wrong happened while rendering the accordion menu...');
        console.error(err);
    }
};

window.addEventListener('load', () => {
    tabMenu(); // Render tab menu on page load.
    accordionMenu();
});

const addTabNavClickListener = () => {
    // Add click event listener to tabs navigation.
    elements.tabNav().addEventListener('click', e => {
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
                showTabSectionContent(state.tabMenu.activeIndex, state.tabMenu.content);
            }
        }
    });
};

const addAccordionsClickListener = () => {
    // Add click event listener to each accordion title.
    elements.accordions().forEach(accordion => {
        accordion.addEventListener('click', e => {
            // Store index and active state of accordion title that has been clicked.
            const accordionIndex = e.currentTarget.getAttribute('data-accordion-title-index');
            const isAccordionActive = e.currentTarget.getAttribute('data-accordion-title-active');

            // If accordion title is clicked other than the active one.
            if (accordionIndex !== state.accordionMenu.activeIndex) {
                // Reflect in model that the accordion title clicked is now the active accordion.
                state.accordionMenu.changeActiveIndex(accordionIndex);

                // Show the newly clicked accordion title and content and hide the old one.
                changeActiveAccordion(accordionIndex);
            } else if (accordionIndex === state.accordionMenu.activeIndex && isAccordionActive) {
                // If accordion clicked is the active one, then close it.
                closeAccordion(elements.accordionTitle(accordionIndex), elements.accordionContent(accordionIndex));

                // Reflect in model that no accordion is active.
                state.accordionMenu.changeActiveIndex(null);
            }
        });
    });
};