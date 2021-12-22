import {render, screen, cleanup } from '@testing-library/react';
import Home from 'src/components/home';

test('should render home', () => {
  render(<Home />);
})
