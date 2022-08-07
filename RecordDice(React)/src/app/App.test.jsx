import { describe, test, expect } from 'vitest';
import { render, screen } from '../utils/testing';
import App from './App';

describe('App 테스트', () => {
  test('App 헤드라인 렌더링 여부', () => {
    render(<App />);
    const headline = screen.getByRole('heading');
    expect(headline).toBeInTheDocument();
    expect(headline.textContent).toMatch(/react\s+\+\s+vite/i);
  });

  test('App 로고 대체 텍스트 유효 여부', () => {
    render(<App />);
    const logoImage = screen.getByAltText('React');
    expect(logoImage).toBeInTheDocument();
  });
});
