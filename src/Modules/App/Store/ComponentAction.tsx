export function processLoading(isLoading: boolean) {
  return {
    type: 'PROCESS_LOADING',
    isLoading,
  };
}
export function collapseSider() {
  return {
    type: 'OPEN_SIDER',
  };
}
export function reset() {
  return {
    type: 'RESET',
  };
}
export function openModal(component: string) {
  return {
    type: 'SHOW_MODAL',
    component,
  };
}
