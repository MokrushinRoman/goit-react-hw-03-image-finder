import styled from '@emotion/styled';

export const Layout = styled.div`
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  @media screen and (min-width: 320px) {
    max-width: 480px;
    padding: 20px 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
