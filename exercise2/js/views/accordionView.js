import { elements } from './base';

// Render markup of each accordion title and content
const getAccordionsMarkup = data => {
    let accordionsMarkup = '';

    data.forEach((section, index) => {
        accordionsMarkup += `
            <div 
                class="accordion-title title" 
                data-accordion-title-index="${index}"
                data-accordion-title-active="false"
             >
                <i class="dropdown icon"></i>
                ${section.title}
            </div>
            <div class="accordion-content content"
                data-accordion-content-index="${index}"
                data-accordion-content-active="false"
            >
                ${section.content}
            </div>
        `;
    });

    return accordionsMarkup;
};

// Render the entire accordion menu.
export const renderAccordionMenu = data => {
    const accordion = elements.accordion;

    const accordionsMarkup = getAccordionsMarkup(data);

    const accordionMenuMarkup = `<div class="ui styled accordion accordion-menu">${accordionsMarkup}</div>`;

    accordion.insertAdjacentHTML('afterbegin', accordionMenuMarkup);
};

// Display active accordion and close previous active accordion.
export const changeActiveAccordion = newIndex => {
    const oldActiveAccordionTitle = elements.oldActiveAccordionTitle();
    const oldActiveAccordionContent = elements.oldActiveAccordionContent();
    const newActiveAccordionTitle = elements.accordionTitle(newIndex);
    const newActiveAccordionContent = elements.accordionContent(newIndex);


    if (oldActiveAccordionTitle && oldActiveAccordionContent) {
        closeAccordion(oldActiveAccordionTitle, oldActiveAccordionContent);
    }

    newActiveAccordionTitle.className = 'accordion-title title active';
    newActiveAccordionTitle.setAttribute('data-accordion-title-active', 'true');

    newActiveAccordionContent.className = 'accordion-content content active';
    newActiveAccordionContent.setAttribute('data-accordion-content-active', 'true');
};

// Close accordion title and content element.
export const closeAccordion = (accordionTitleElement, accordionContentElement) => {
    accordionTitleElement.className = 'accordion-title title';
    accordionTitleElement.setAttribute('data-accordion-title-active', 'false');

    accordionContentElement.className = 'accordion-content content';
    accordionContentElement.setAttribute('data-accordion-content-active', 'false');
};