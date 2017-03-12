import { Template } from 'meteor/templating';
import { Wednesday } from '../../api/markets/markets.js';

Template.Find_By_Day_Wednesday.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  findByDay() {
    return Wednesday.find();
  },
});
