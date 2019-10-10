export default class AccordionMenu {
    constructor() {
        this.activeIndex = '0'; // Active index.
    }

    changeActiveIndex(index) {
        this.activeIndex = index;
    }
}