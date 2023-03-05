import { toast } from 'react-hot-toast';

export const errorToast = msg => {
  toast.error(msg, {
    position: 'bottom-right',
    style: {
      background: '#3f51b5',
      color: '#fff',
    },
  });
};
