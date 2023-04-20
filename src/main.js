import {render} from './render.js';
import FiltersView from './view/filters-view.js';
import TripPresenter from './presenter/trip-presenter.js';
import PointModel from './model/points-model';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripContainer = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter({container : tripContainer});
const pointsModel = new PointModel();

render(new FiltersView(), filterContainer);
tripPresenter.init(pointsModel);

