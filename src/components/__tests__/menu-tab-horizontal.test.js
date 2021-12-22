import {render, screen, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import MenuTabHorizontal from 'src/menu-tab-horizontal.js';

test('should render menu tab', () => {
  render (<MenuTabHorizontal />);
})

test('matches snapshot', () => {
  const tree = TestRenderer.create(<MenuTabHorizontal />).toJSON();
  console.log(tree);
})
