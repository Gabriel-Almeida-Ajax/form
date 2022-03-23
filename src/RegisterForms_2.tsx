import CreateForm from './pages/createForm'
import { TemplateForm } from './store/forms/form';

import backendService from "./service/backend"
const formState = new TemplateForm({
  backendPath: 'formulario2'
});

function RegisterMyForm() {
  return (
    <CreateForm {...{ formState, backendService, title: 'Formulario 2' }} />
  )
}

export default RegisterMyForm;