import { Template } from 'meteor/templating';
import { Markets } from '../../api/markets/markets.js';
import { _ } from 'meteor/underscore';

const dayMarkets = _.filter(Markets, Markets[days]["Saturday"]);

Template.Find_By_Day.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */

  dayMarketsList() {
    return dayMarkets.find();
  },
});
