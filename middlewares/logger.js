export const logUser = (req, res, next) => {
    const {user} = req;
    if(user) {
        const { id, type } = user;
        console.log('user:', { id, type });
    };
    next();
};

export const createLogMiddleware = (text) => (req, res, next) => {
    console.log(text);
    next();
};
