import getSwitchButton from './components/switch-button/switch-button';

export function sum(a: number, b: number): HTMLElement {
  return document.createElement('div');
  
}
const root = document.getElementById('root');
if (root) {
  root.append(getSwitchButton());
}
