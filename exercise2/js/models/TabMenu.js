export default class TabMenu {
    constructor(data) {
        this.activeIndex = 0; // Active tab index.
        this.data = data; // JSON data.
        this.changeContent(this.activeIndex);
    }

    changeContent(index) {
        this.content = this.data[index].content; // Content associated with active tab.
    }

    changeActiveIndex(index) {
        this.activeIndex = index;
        this.changeContent(index);
    }
}