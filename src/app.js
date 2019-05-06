import { bindSearchComponentEvents } from './search';
import { drawSearchComponent } from './drawer';

const init = () => {
  drawSearchComponent();
  bindSearchComponentEvents();
};

init();
