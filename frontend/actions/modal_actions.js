export const OPEN_SESSION_MODAL = "OPEN_SESSION_MODAL";
export const CLOSE_SESSION_MODAL = "CLOSE_SESSION_MODAL";
export const OPEN_LOGOUT_MODAL = "OPEN_LOGOUT_MODAL";
export const CLOSE_LOGOUT_MODAL = "CLOSE_LOGOUT_MODAL";

export const closeSessionModal = () => ({
  type: CLOSE_SESSION_MODAL
});

export const openSessionModal = (modal) => ({
  type: OPEN_SESSION_MODAL,
  modal
});

export const getModal = (modal) => (dispatch) => {
  return () => dispatch(openSessionModal(modal))
};