import Page from './page';

class HomePage extends Page {

    constructor() {
        super();
    }

    // elements
    //TODO

    // actions
    open() {
        super.open('');
    }

    getTitle() {
        return browser.getTitle();
    }

    //TODO
}

export default new HomePage();