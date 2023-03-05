import { Item, List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components';

export const ImageGallry = ({ images }) => {
  return (
    <List>
      {images.map(({ id, ...otherProps }) => (
        <Item key={id}>
          <ImageGalleryItem imageData={otherProps} />
        </Item>
      ))}
    </List>
  );
};
