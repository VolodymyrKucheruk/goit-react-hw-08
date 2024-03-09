import Modal from "react-modal";
import css from "./DeleteConfirmationModal.module.css";
import { motion } from "framer-motion";

Modal.setAppElement("#root");

const DeleteConfirmationModal = ({
  isOpen,
  onRequestClose,
  onConfirmDelete,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 0.2,
        }}
      >
        <div className={css.card}>
          <div className={css.circle}></div>
          <div className={css.circle}></div>
          <div className={css.cardInner}>
            <p className={css.title}>
              Are you sure you want to delete this contact?
            </p>
            <div className={css.buttonsWrapper}>
              <button className={css.confirmBtn} onClick={onConfirmDelete}>
                Yes
              </button>
              <button className={css.cancelBtn} onClick={onRequestClose}>
                No
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </Modal>
  );
};

export default DeleteConfirmationModal;
