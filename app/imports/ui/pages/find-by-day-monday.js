import { Template } from 'meteor/templating';
import { Monday } from '../../api/markets/markets.js';

Template.Find_By_Day_Monday.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  findByDay() {
    return Monday.find();
  },
});
