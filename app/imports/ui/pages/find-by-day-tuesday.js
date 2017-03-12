import { Template } from 'meteor/templating';
import { Tuesday } from '../../api/markets/markets.js';

Template.Find_By_Day_Tuesday.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  findByDay() {
    return Tuesday.find();
  },
});
