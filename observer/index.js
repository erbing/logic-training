const create = fn => {
    let ret = false;
    return ({ next, complete, error }) => {
        function nextFn(...args) {
            if (ret) return;
            next(...args);
        }

        const completeFn = (...args) => {
            complete(...args);
            ret = true;
        };

        const errorFn = (...args) => {
            error(...args);
        };

        fn({
            next: nextFn,
            complete: completeFn,
            error: errorFn,
        });
    };
};

const observerable = create(observer => {
    setTimeout(() => {
        observer.next(1);
    }, 1000);
    observer.next(2);
    observer.complete(3);
});

const subject = {
    next: v => {
        console.log(v);
    },
    complete: console.log,
    error: console.log,
};

export { observerable, subject };
