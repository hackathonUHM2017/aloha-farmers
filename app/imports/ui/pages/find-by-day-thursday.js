import { Template } from 'meteor/templating';
import { Thursday } from '../../api/markets/markets.js';

Template.Find_By_Day_Thursday.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  findByDay() {
    return Thursday.find();
  },
});
