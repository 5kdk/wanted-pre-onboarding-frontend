import styled from 'styled-components';
import { Input, Label, Error } from '..';

const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const SignInput = ({ id, value, valid, onChange, dataTestId, errorMessage }) => (
  <Wrapper>
    <Label htmlFor={id}>{id.replace(/^[a-z]/, char => char.toUpperCase())}</Label>
    <Input type={id} id={id} name={id} value={value} valid={valid} data-testid={dataTestId} onChange={onChange} />
    {value && !valid && <Error size="sm">{errorMessage}</Error>}
  </Wrapper>
);

export default SignInput;
