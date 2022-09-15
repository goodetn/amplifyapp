import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Header from './header';

// test case:
describe('header component', () => {
    const header = ReactTestUtils.renderIntoDocument(<Header />);
    
    // Component này sẽ trả về h2tag.
    it('has a h2 tag', () => {
        var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(header, 'h2');
    });
    // h2 tag sẽ có một lớp tên title.
    it('has a title class', () => {
        var node = ReactTestUtils.findRenderedDOMComponentWithClass(header, 'title');
    });
});
