import { Backend } from '../../service/backend';
import { makeAutoObservable } from "mobx";

type TChangeResponse = {
    field: string;
    value: any;
}

export class TemplateForm {
    data: any;
    customChange: null | ((...paramiters: any) => TChangeResponse);
    constructor(initialData = {}) {
        this.data = initialData;
        this.customChange = null;

        makeAutoObservable(this);

    }

    setCustomChange(customChange: any) {
        console.log('set custom change');
        this.customChange = customChange;
    }

    change(field: string, value: any) {
        console.log(`changing field (${field})`, value);

        if (!this.customChange)
            return this.data[field] = value;

        const { field: _field, value: _value } = this.customChange(field, value);

        this.data[_field] = _value;
    }

    async save(backendInstance: Backend, route: string) {
        console.log('call a backend for save');
        return backendInstance.save(route, {
            body: this.data,
        });
    }

    async set(promiseData: any) {
        this.data = await promiseData;
        console.log('seted data from promise', this.data);
    }
}

export default new TemplateForm();