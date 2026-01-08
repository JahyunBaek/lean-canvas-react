import Card from './components/StyledComponents/Card';
import BaseButton from './components/StyledComponents/BaseButton';
import StyledButtobn from './components/StyledComponents/StyledButton';
import './App.css';

const AppStyled = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Card />
      <br />
      <BaseButton>BaseButton</BaseButton>
      <StyledButtobn>StyledButton</StyledButtobn>
    </>
  );
};

export default AppStyled;
