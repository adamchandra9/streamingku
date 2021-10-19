export function processLoading(isLoading: boolean) {
  return {
    type: 'PROCESS_LOADING',
    isLoading
  };
}
export function collapseSider(isOpen: boolean) {
  return {
    type: 'OPEN_SIDER',
    isOpen
  };
}
export function reset() {
  return {
    type: 'RESET'
  };
}
export function openModal(component: string) {
  return {
    type: 'SHOW_MODAL',
    component
  };
}
