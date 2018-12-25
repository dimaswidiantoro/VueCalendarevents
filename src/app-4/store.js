import Vue from 'vue';
import { seedData } from './seed.js';

export const store = {
  //where the data come from
  state: {
    seedData 
  },
  //find the active day
  getActiveDay () {
    return this.state.seedData.find((day) => day.active);
  },
  //set up the activevday
  setActiveDay (dayId) {
    this.state.seedData.map((dayObj) => {
      dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
    });
  }
}
