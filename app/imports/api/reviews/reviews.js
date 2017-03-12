import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Reviews = new Mongo.Collection('Reviews');

/**
 * Create the schema for Markets
 */
export const ReviewsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 200,
  },
  rating: {
    label: 'Rating',
    type: String,
    optional: false,
    max: 200,
  },
  comment: {
    label: 'Comment',
    type: String,
    optional: false,
    max: 200,
  },
});

Reviews.attachSchema(ReviewsSchema);
