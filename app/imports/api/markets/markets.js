import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Markets = new Mongo.Collection('Markets');

/**
 * Create the schema for Markets
 */
export const MarketsSchema = new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    optional: false,
    max: 200,
  },
  days: {
    label: 'Days',
    type: String,
    optional: false,
    max: 200,
  },
  start: {
    label: 'Start',
    type: String,
    optional: false,
    max: 200,
  },
  finish: {
    label: 'Finish',
    type: String,
    optional: false,
    max: 200,
  },
  island: {
    label: 'Island',
    type: String,
    optional: false,
    max: 200,
  },
  city: {
    label: 'City',
    type: String,
    optional: false,
    max: 200,
  },
  address: {
    label: 'Address',
    type: String,
    optional: false,
    max: 200,
  },
  latitude: {
    label: 'Latitude',
    type: String,
    optional: false,
    max: 200,
  },
  longitude: {
    label: 'Longitude',
    type: String,
    optional: false,
    max: 200,
  },
});

Markets.attachSchema(MarketsSchema);
