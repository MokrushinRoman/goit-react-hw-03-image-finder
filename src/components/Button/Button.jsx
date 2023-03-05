import { LoadMoreBtn } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>;
};
