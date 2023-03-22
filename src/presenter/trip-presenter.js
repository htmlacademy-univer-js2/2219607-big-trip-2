import { render } from '../render.js';
import CreatingFormView from '../view/creating-form.js';
import EditFormView from '../view/edit-form.js';
import SortingView from '../view/sorting.js';
import WaypointListView from '../view/waypoint-list.js';
import WaypointView from '../view/waypoint.js';

export default class TripPresenter{
  constructor({container}){
    this.container = container;
    this.component = new WaypointListView();
  }

  init(){
    render(new SortingView(), this.container);
    render(this.component, this.container);
    render(new EditFormView(), this.component.getElement());
    render(new CreatingFormView(), this.component.getElement());
    for (let i = 0; i < 3; i++){
      render(new WaypointView(), this.component.getElement());
    }
  }
}
