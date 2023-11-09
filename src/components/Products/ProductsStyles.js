import styled from "styled-components";

export const ProductsWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1300px;
  margin: 0 15px;
  h3 {
    text-align: center;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ProductsContainter = styled.div`
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 400px);
  row-gap: 3.5rem;
  width: 100%;
  max-width: 1300px;
  padding: 1rem 0;
`;

export const ProductsCard = styled.div`
  background-color: var(--gray);
  width: 300px;
  border-radius: 15px;
  padding: 1rem;
  img {
    width: 100%;
    height: 250px;
    margin-bottom: 1rem;
  }
  h2 {
    font-weight: 600;
    margin: 0;
  }
  p {
    color: #666;
    font-size: 1.6rem;
  }
  @media (max-width: 768px) {
    width: 250px;
    text-align: left;
  }
`;
