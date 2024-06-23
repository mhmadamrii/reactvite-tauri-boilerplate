import { Homepage } from '~/screens/homepage';
import { Testing } from '~/screens/post';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Homepage message', () => {
  it('Renders default error state', () => {
    render(<Homepage />);
    screen.debug();
  });

  it('should render without crashing', () => {
    const { container } = render(<Homepage />);
    expect(container).toBeInTheDocument();
  });

  it('should render correctly when a valid name is provided', () => {
    const { getByText } = render(<Testing name="John" />);
    expect(
      getByText('Hello my name is John'),
    ).toBeInTheDocument();
  });
});
