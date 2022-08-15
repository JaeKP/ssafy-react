# Redux Architecture

Redux 아키텍처(설계 사용, 방식)에 대해 학습합니다.

- Store
- Reducer
- Dispatch
- Action
- ActionCreactor
- Subscription

## Redux Store 인터페이스

```ts
interface Store {
  getState(): State;
  dispatch(action: Action): Dispatch;
  subscribe(listener: Listener): Unsubscribe;
  replaceReducer(nextReducer: Reducer): void;
}
```
