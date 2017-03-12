import { Template } from 'meteor/templating';
import { Saturday } from '../../api/markets/markets.js';

Template.Find_By_Day_Saturday.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  findByDay() {
    return Saturday.find();
  },
});
