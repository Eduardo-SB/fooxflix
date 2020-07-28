import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--white);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--black);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const ImgFooter = styled.img`
  height: 150px;
  width: 250px
`;