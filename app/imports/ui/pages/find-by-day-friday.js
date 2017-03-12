import { Template } from 'meteor/templating';
import { Friday } from '../../api/markets/markets.js';

Template.Find_By_Day_Friday.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  findByDay() {
    return Friday.find();
  },
});
