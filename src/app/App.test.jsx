import { render, screen } from '@testing-library/react';
import App from './App';

describe('App 컴포넌트', () => {
  test('컴포넌트 렌더링 테스트', () => {
    render(<App />);
    const headline = screen.getByRole('heading');
    expect(headline).toBeInTheDocument();
  });
});
