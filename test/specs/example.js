import {expect} from 'chai';

import HomePage from '../pages/home.page.js';

describe('[CHECK TITLE]', () => {

    it('homepage should have the correct title', () => {

        HomePage.open();

        expect(HomePage.getTitle()).to.equal('Present Technologies');
    });

    //TODO
});