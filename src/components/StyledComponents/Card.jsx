import styled from 'styled-components';

const CardContainer = styled.div.attrs({
  className: 'card-container',
})`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;
  ${props => {
    console.log('props', props);
    return (
      props.$dark &&
      `
    background-color: #393939;
    color: white;
    border: none;
    `
    );
  }}
`;
const Card = () => {
  return (
    <CardContainer $dark>
      <h2>Styled Component</h2>
      <p>이것은 styled-componts로 만든 카드입니다.</p>
    </CardContainer>
  );
};

export default Card;
