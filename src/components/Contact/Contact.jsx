import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FcPhone, FcReading, FcServices, FcFullTrash } from "react-icons/fc";
import { motion } from "framer-motion";
import { IoIosSave, IoMdClose } from "react-icons/io";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal/DeleteConfirmationModal";
import toast from "react-hot-toast";
import { editContact, deleteContacts } from "../../redux/operations";

export const Contact = ({ value }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(value.name);
  const [editedNumber, setEditedNumber] = useState(value.number);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleEditClick = () => setIsEditing(true);
  const handleCancelClick = () => setIsEditing(false);
  const handleDeleteClick = () => setIsConfirmingDelete(true);

  const handleSaveClick = () => {
    dispatch(
      editContact({
        contactId: value.id,
        values: { name: editedName, number: editedNumber },
      })
    )
      .then(() => {
        setIsEditing(false);
        toast.success("Contact successfully updated!");
      })
      .catch(() => {
        toast.error("Failed to update contact!");
      });
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteContacts(value.id))
      .then(() => {
        setIsConfirmingDelete(false);
        toast.success("Contact successfully deleted!");
      })
      .catch(() => {
        toast.error("Failed to delete contact!");
      });
  };

  const handleDeleteCancel = () => setIsConfirmingDelete(false);

  return (
    <li className={css.items}>
      <div className={css.wrapperContact}>
        <p className={css.nameItem}>
          <FcReading size={34} />
          {isEditing ? (
            <motion.input
              className={css.input}
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0, scale: [0.1, 2, 1] }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            value.name
          )}
        </p>

        <p className={css.numberItem}>
          <FcPhone size={28} />
          {isEditing ? (
            <motion.input
              className={css.input}
              type="tel"
              onKeyPress={(e) => {
                const isValidInput =
                  /\d/.test(e.key) || e.key === "Backspace" || e.key === "-";
                if (!isValidInput) {
                  e.preventDefault();
                }
              }}
              value={editedNumber}
              onChange={(e) => setEditedNumber(e.target.value)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, scale: [0.1, 2, 1] }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            value.number
          )}
        </p>
      </div>
      <div className={css.wrapperButton}>
        {!isEditing && (
          <button className={css.btnSettings} onClick={handleEditClick}>
            <FcServices className={css.icons} size={24} />
          </button>
        )}
        {isEditing ? (
          <>
            <button className={css.btnCancel} onClick={handleCancelClick}>
              <IoMdClose className={css.iconCancel} size={34} />
            </button>
            <button className={css.btnSave} onClick={handleSaveClick}>
              <IoIosSave className={css.iconSave} size={34} />
            </button>
          </>
        ) : (
          <>
            <button className={css.btn} onClick={handleDeleteClick}>
              <FcFullTrash className={css.icons} size={44} />
            </button>
          </>
        )}
      </div>
      <DeleteConfirmationModal
        isOpen={isConfirmingDelete}
        onRequestClose={handleDeleteCancel}
        onConfirmDelete={handleDeleteConfirm}
      />
    </li>
  );
};
