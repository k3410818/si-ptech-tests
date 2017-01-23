export default class Page {

    open(path) {
        browser.url('/' + path);
    }

    refreh() {
        browser.refresh();
    }
}