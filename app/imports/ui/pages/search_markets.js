import { Template } from 'meteor/templating';
import { Markets } from '../../api/markets/markets.js';

Template.List_Stuff_Page.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  stuffList() {
    return Stuff.find();
  },
});
