export default class Res {
    json = jest.fn(() => this);
    status = jest.fn(() => this);
    cookie = jest.fn(() => this);
};

export const expectBody = (res, body, status = 200) => {
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenNthCalledWith(1, status);
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenNthCalledWith(1, body);
};