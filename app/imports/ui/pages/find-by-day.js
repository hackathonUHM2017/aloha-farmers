import { Template } from 'meteor/templating';
import { Sunday } from '../../api/markets/markets.js';

Template.Find_By_Day.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  findByDay() {
    return Sunday.find();
  },
});
