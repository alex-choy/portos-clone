export const OPEN_SESSION_MODAL = "OPEN_SESSION_MODAL";
export const CLOSE_SESSION_MODAL = "CLOSE_SESSION_MODAL";
export const OPEN_LOGOUT_MODAL = "OPEN_LOGOUT_MODAL";
export const CLOSE_LOGOUT_MODAL = "CLOSE_LOGOUT_MODAL";
export const OPEN_ORDER_MODAL = "OPEN__ORDER_MODAL";
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";

export const closeSessionModal = () => ({
  type: CLOSE_SESSION_MODAL,
});

export const openSessionModal = (modal) => ({
  type: OPEN_SESSION_MODAL,
  modal,
});

export const closeLogoutModal = () => ({
    type: CLOSE_LOGOUT_MODAL,
  });

export const openLogoutModal = (modal) => ({
  type: OPEN_LOGOUT_MODAL,
  modal,
});

export const closeOrderModal = () => ({
  type: CLOSE_ORDER_MODAL,
});

export const openOrderModal = () => ({
  type: OPEN_ORDER_MODAL,
});
