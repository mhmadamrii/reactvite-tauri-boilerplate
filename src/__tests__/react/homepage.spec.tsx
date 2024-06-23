import { Homepage } from '~/screens/homepage';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Homepage rendering process', () => {
  it('Renders default component without exception errors', () => {
    render(<Homepage />);
    screen.debug();
  });

  it('should render without crashing', () => {
    const { container } = render(<Homepage />);
    expect(container).toBeInTheDocument();
  });
});
