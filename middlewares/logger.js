export const logUser = (req, res, next) => {
    const { id, type } = req.user;
    console.log('user:', { id, type });
    next();
};
