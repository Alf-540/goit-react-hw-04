import css from './ImageModal.module.css';
import Modal from 'react-modal';

const ImageModal = ({ isOpen = false, photo, onChange }) => {
  Modal.setAppElement(document.getElementById('root'));
  return (
    <Modal
      className={css.modalImg}
      isOpen={isOpen}
      onRequestClose={() => onChange(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
    >
      <img className={css.img} src={photo.src} />
    </Modal>
  );
};

export default ImageModal;
