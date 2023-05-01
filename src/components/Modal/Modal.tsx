import type { FC, ReactNode } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal: FC<Props> = ({ open, onClose, children }) => {
  return (
    <>
      {open ? (
        <div className='relative'>
          {/* Overlay */}
          <div
            className='fixed inset-0 z-50 bg-black bg-opacity-50'
            onClick={onClose}
          />
          <div className='fixed left-1/2 top-1/2 z-50 w-fit -translate-x-1/2 -translate-y-1/2 rounded bg-white p-8'>
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
