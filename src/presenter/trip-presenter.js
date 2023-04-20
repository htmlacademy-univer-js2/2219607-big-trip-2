import {render} from '../render.js';
import CreatingFormView from '../view/creating-form-view.js';
import EditFormView from '../view/edit-form-view.js';
import SortingView from '../view/sorting-view.js';
import WaypointListView from '../view/waypoint-list-view.js';
import WaypointView from '../view/waypoint-view.js';

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
