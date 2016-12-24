import React from 'react';
import {shallow} from 'enzyme';
import {chai} from 'chai';
import Test from '../src/test.jsx';
 describe('testting', function() {
 	it('test jsx 测试', function(){
 		const T = shallow(Test);
 		expect(T.text()).to.equal('hello react');
 	});
 });