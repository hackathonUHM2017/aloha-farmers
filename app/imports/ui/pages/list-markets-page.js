import { Template } from 'meteor/templating';
import { Markets } from '../../api/markets/markets.js';

Template.List_Markets_Page.helpers({

  /**
   * @returns {*} All of the Markets documents.
   */

  marketsList() {
    return Markets.find();
  },
});
  