import * as React from 'react';
import * as enzyme from 'enzyme';
import { List } from './';

describe('<List />', () => {
  it('should render default List', () => {
    const wrapper = enzyme.shallow(<List />);
    expect(wrapper.name()).toBe('styled.ul');
  });

  it('should render styled.div when component is passed', () => {
    const wrapper = enzyme.shallow(
      <List disablePadding>
        <div>Item</div>
      </List>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should set `active` property on 2nd child element', () => {
    const wrapper = enzyme.shallow(
      <List activeItem={2}>
        <div>Velit deserunt deserunt ipsum est ipsum ut commodo consectetur irure.</div>
        <div>Minim laboris ut ea et voluptate proident aliqua sint nulla.</div>
        <div>Consequat commodo duis aliquip nostrud laborum anim</div>
      </List>,
    );
    expect(wrapper.childAt(2).props().active).toBe(true);
  });
});
