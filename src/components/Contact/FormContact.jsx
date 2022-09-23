import AlertSuccess from "./AlertSuccess";
import {
  ContainerInput,
  Form,
  Input,
  InputTextArea,
  Label,
  Submit,
} from "./stylesContact";



const FormContact = ({ handleSumbit, successMessage, isClicked }) => {
  return (
    <>
      {successMessage ? <AlertSuccess/> : (
        <Form onSubmit={handleSumbit}>
        <ContainerInput>
          <Label htmlFor="name">Nombre:</Label>
          <Input
            id="name"
            type="text"
            name="name"
            placeholder="Escriba su nombre..."
            minLength={4}
            required
          />
        </ContainerInput>
  
        <ContainerInput>
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="Escriba su dirección de correo..."
            required
          />
        </ContainerInput>
  
        <ContainerInput>
          <Label htmlFor="asunto">Asunto:</Label>
          <InputTextArea
            id="detail"
            type="textarea"
            name="detail"
            placeholder="Asunto..."
          />
        </ContainerInput>
  
        <Submit>{isClicked ? 'Enviando...' : 'Enviar'}</Submit>
      </Form>
      )}
    </>
  );
};

export default FormContact;
