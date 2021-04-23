import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: auto;
  background-color: red;
  padding: 30px 20px 40px 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: #2B7A4B;
`;

export const HeaderContent = styled.View`
  position: relative;
  width: 100%;
  height: auto;
  margin: 0; 
  padding: 0;
`;

export const Span = styled.Text`
  width: auto;
  height: auto;
  margin: 0; 
  padding: 0;
  text-align: left;
  font-size: 14px;
  color: #FFF;
`;

export const Name = styled.Text`
  width: auto;
  height: auto;
  color: #314a30;
  margin: 0; 
  padding: 0;
  text-align: left;
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
`;