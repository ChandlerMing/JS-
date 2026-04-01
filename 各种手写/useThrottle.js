const throttleImmediate = (fn, delay) => {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    const passTime = now - lastTime;
    if (passTime >= delay) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
};

const throttleDelay = (fn, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
};

const useThrottle = (value, delay) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastUpdated = useRef(Date.now());

  useEffect(() => {
    const elapsed = Date.now() - lastUpdated.current;
    if (elapsed >= delay) {
      lastUpdated.current = Date.now();
      setThrottledValue(value);
    } else {
      timer = setTimeout(() => {
        lastUpdated.current = Date.now();
        setThrottledValue(value);
      }, delay - elapsed);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [value, delay]);

  return throttledValue;
};
