type Response = {
    status: number;
    result: any[];
}

export class Axios {
    data: Response;
    constructor() {
        this.data = {
            status: 200,
            result: [],
        };
    }

    async get() {
        return new Promise((resolve) => {
            console.log('called a backend for get form');
            setTimeout(() => {
                resolve(this.data);
            }, 1000);
        });
    }

    async post(route: string, data: any) {
        return new Promise((resolve) => {
            console.log('called a backend for save');

            setTimeout(() => {
                resolve({
                    status: 200,
                    message: 'success',
                    route,
                    data,
                });
            }, 1000);
        });
    }
};

export const instance = new Axios();

export default new Axios();