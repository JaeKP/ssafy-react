import { describe, test, expect } from 'vitest';
import { render, screen, userEvent } from '@/utils/testing';
import App from './App';

describe('App 컴포넌트 테스트', () => {
  test('App 헤드라인 렌더링', () => {
    render(<App />);
    const headline = screen.getByRole('heading');
    expect(headline).toBeInTheDocument();
  });

  test('카운트 증가', async () => {
    let count = 10;
    render(<App count={count} />);
    let button = screen.getByRole('button');
    userEvent.click(button);
    button = await screen.findByText(`count is ${count + 1}`);
    expect(button).toBeInTheDocument();
  });

  test('App Header 스타일 Flexbox', () => {
    render(<App />);
    const banner = screen.getByRole('banner');
    expect(banner.className).toBe('App');
    expect(getComputedStyle(banner).display).toEqual('block');
  });
});
