import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  createContext,
} from 'react';

// Context for demonstration
const CountContext = createContext<number>(0);

// Reducer for demonstration
function countReducer(state: number, action: { type: 'inc' | 'dec' }) {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    default:
      return state;
  }
}

// ForwardRef and useImperativeHandle demo
const CounterInput = forwardRef((props: { value: number }, ref) => {
  useImperativeHandle(ref, () => ({
    alertValue: () => alert(`Current value: ${props.value}`),
  }));
  return <input readOnly value={props.value} />;
});

function HooksLearn() {
  // useState
  const [count, setCount] = useState(0);

  // useReducer
  const [reducedCount, dispatch] = useReducer(countReducer, 0);

  // useRef
  const inputRef = useRef<HTMLInputElement>(null);
  const imperativeRef = useRef<any>(null);

  // useContext
  const contextValue = useContext(CountContext);

  // useEffect
  useEffect(() => {
    // Sync reducedCount with count
    setCount(reducedCount);
  }, [reducedCount]);

  // useLayoutEffect
  useLayoutEffect(() => {
    // Focus input after count changes
    if (inputRef.current) inputRef.current.focus();
  }, [count]);

  // useCallback
  const increment = useCallback(() => {
    dispatch({ type: 'inc' });
  }, []);
  const decrement = useCallback(() => {
    dispatch({ type: 'dec' });
  }, []);

  // useMemo
  const doubleCount = useMemo(() => count * 2, [count]);

  return (
    <CountContext.Provider value={count}>
      <div style={{ padding: 20 }}>
        <h2>React Default Hooks Demo</h2>
        {/* useState */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useState</h3>
          <p>
            useState lets you add state to functional components. Here, it holds
            the current count value.
          </p>
          <div>
            <span>Count (useState): </span>
            <b>{count}</b>
          </div>
        </section>

        {/* useReducer */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useReducer</h3>
          <p>
            useReducer is for complex state logic. It manages count with reducer
            logic.
          </p>
          <div>
            <button onClick={decrement}>-</button>
            <span style={{ margin: '0 8px' }}>
              Reduced Count: <b>{reducedCount}</b>
            </span>
            <button onClick={increment}>+</button>
          </div>
        </section>

        {/* useRef */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useRef</h3>
          <p>
            useRef returns a mutable ref object. Used to reference the input
            element below.
          </p>
          <input
            ref={inputRef}
            readOnly
            value={count}
            style={{ width: 40, textAlign: 'center' }}
          />
        </section>

        {/* useContext */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useContext</h3>
          <p>
            useContext accesses the current value of CountContext. Useful for
            sharing state globally.
          </p>
          <div>
            Context value: <b>{contextValue}</b>
          </div>
        </section>

        {/* useEffect */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useEffect</h3>
          <p>
            useEffect runs side effects after render. Here, it syncs count with
            reducedCount whenever reducedCount changes.
          </p>
          <div>
            Count is synced with reducedCount. Change reducedCount to see
            effect.
          </div>
        </section>

        {/* useLayoutEffect */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useLayoutEffect</h3>
          <p>
            useLayoutEffect fires synchronously after all DOM mutations. Here,
            it focuses the input after count changes.
          </p>
          <div>Input above is focused after count changes.</div>
        </section>

        {/* useCallback */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useCallback</h3>
          <p>
            useCallback returns a memoized callback. Used for
            increment/decrement handlers to prevent unnecessary re-renders.
          </p>
          <div>
            <button onClick={decrement}>Decrement (useCallback)</button>
            <button onClick={increment} style={{ marginLeft: 8 }}>
              Increment (useCallback)
            </button>
          </div>
        </section>

        {/* useMemo */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useMemo</h3>
          <p>
            useMemo returns a memoized value. Here, it memoizes doubleCount to
            avoid recalculating unless count changes.
          </p>
          <div>
            Double count: <b>{doubleCount}</b>
          </div>
        </section>

        {/* useImperativeHandle & forwardRef */}
        <section
          style={{ marginBottom: 16, border: '1px solid #eee', padding: 8 }}
        >
          <h3>useImperativeHandle & forwardRef</h3>
          <p>
            forwardRef lets you pass refs to child components.
            useImperativeHandle customizes the instance value exposed to parent
            via ref.
          </p>
          <CounterInput ref={imperativeRef} value={count} />
          <button
            onClick={() => imperativeRef.current?.alertValue()}
            style={{ marginLeft: 8 }}
          >
            Show value (useImperativeHandle)
          </button>
        </section>
      </div>
    </CountContext.Provider>
  );
}

export default HooksLearn;
