export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const openModal = (modal) => ({
  type: OPEN_MODAL,
  modal
});

export const getModal = (modal) => (dispatch) => {
  console.log('get modal hit in actions');
  return () => dispatch(openModal(modal))
};