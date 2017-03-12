import { Template } from 'meteor/templating';
import { Reviews } from '../../api/reviews/reviews.js';

Template.Reviews_Page.helpers({

  /**
   * @returns {*} All of the Reviews documents.
   */

  reviewsList() {
    return Reviews.find();
  },
});
  