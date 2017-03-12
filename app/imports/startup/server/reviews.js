import { Reviews } from '../../api/reviews/reviews.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Reviews to pre-fill the Collection.
 * @type {*[]}
 */
const reviewSeeds = [
  {
    name: 'Brendt',
    rating: '9',
    comment: 'Love this farmers market!',
  },

  {
    name: 'Shaziney',
    rating: '9',
    comment: 'Great location and perfect place for a fresh snack. The options are endless!',
  },

  {
    name: 'Danny',
    rating: '8',
    comment: 'Try the pineapple and coconuts!',
  },

  {
    name: 'Kenji',
    rating: '4',
    comment: 'They ran out of mango :(',
  },
];

/**
 * Initialize the Reviews collection if empty with seed data.
 */

if (Reviews.find().count() === 0) {
  _.each(reviewSeeds, function seedReviews(stuff) {
    Reviews.insert(stuff);
  });
}