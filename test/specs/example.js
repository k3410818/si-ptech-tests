import {expect} from 'chai';

import HomePage from '../pages/home.page.js';

describe('[CHECK TITLE]', () => {

    it('homepage should have the correct title', () => {

        HomePage.open();

        expect(HomePage.getTitle()).to.equal('Present Technologies');
    });

    it('should stay on homepage after refresh browser (DUMMY TEST)', () => {

        HomePage.refresh();

        expect(HomePage.getTitle()).to.equal('Present Technologies');
    });

    //TODO
});