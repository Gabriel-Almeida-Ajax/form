import CreateForm from './pages/createForm'
import { TemplateForm } from './store/forms/form';

import backendService from "./service/backend"
const formState = new TemplateForm({
  backendPath: 'formulario1'
});

formState.setCustomChange((field: string, value: any) => {
  return {
    field,
    value: `changed ${value}`
  }
});

function RegisterMyForm() {
  return (
    <CreateForm {...{ formState, backendService, title: 'Formulario 1' }} />
  )
}

export default RegisterMyForm;