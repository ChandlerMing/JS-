const effectStack = [];

const subscribe = (effect, subs) => {
    subs.add(effect);
    effect.deps.add(subs);
};

const cleanUp = (effect) => {
    effect.deps.forEach((sub) => sub.delete(effect));
    effect.deps.clear();
};

const useState = (value) => {
    const subs = new Set();

    const getter = () => {
        const effect = effectStack[effectStack.length - 1];
        if (effect) {
            subscribe(effect, subs);
        }
        return value;
    };

    const setter = (newValue) => {
        value = newValue;
        [...subs].forEach((effect) => effect.execute());
    };

    return [getter, setter];
};

const useEffect = (callback) => {
    const execute = () => {
        cleanUp(effect);
        effectStack.push(effect);
        try {
            callback();
        } finally {
            effectStack.pop();
        }
    };

    const effect = {
        execute,
        deps: new Set()
    };

    execute();
};

const useMemo = (callback) => {
    const [s, set] = useState();

    useEffect(() => set(callback()));

    return s;
};