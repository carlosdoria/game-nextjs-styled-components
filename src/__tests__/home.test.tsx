import React from 'react';
import { screen, render } from '@testing-library/react';

import Home from '../pages';

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = render(<Home />);

    expect(
      screen.getByRole('heading', { name: /my boilerplate/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Home />);

    expect(container.firstChild).toHaveStyle({ color: 'purple' });
  });
});
