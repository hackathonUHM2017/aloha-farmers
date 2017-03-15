import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/list-markets', {
  name: 'List_Markets_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'List_Markets_Page' });
  },
});

FlowRouter.route('/reviews', {
  name: 'Reviews_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Reviews_Page' });
  },
});

FlowRouter.route('/search', {
  name: 'Search_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_Page' });
  },
});

FlowRouter.route('/find-by-city', {
  name: 'Find_By_City',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_City' });
  },
});

FlowRouter.route('/find-by-day', {
  name: 'Find_By_Day',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_Day' });
  },
});

FlowRouter.route('/find-by-day-sunday', {
  name: 'Find_By_Day_Sunday',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_Day_Sunday' });
  },
});

FlowRouter.route('/find-by-day-monday', {
  name: 'Find_By_Day_Monday',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_Day_Monday' });
  },
});

FlowRouter.route('/find-by-day-tuesday', {
  name: 'Find_By_Day_Tuesday',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_Day_Tuesday' });
  },
});

FlowRouter.route('/find-by-day-wednesday', {
  name: 'Find_By_Day_Wednesday',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_Day_Wednesday' });
  },
});

FlowRouter.route('/find-by-day-thursday', {
  name: 'Find_By_Day_Thursday',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_Day_Thursday' });
  },
});

FlowRouter.route('/find-by-day-friday', {
  name: 'Find_By_Day_Friday',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_Day_Friday' });
  },
});

FlowRouter.route('/find-by-day-saturday', {
  name: 'Find_By_Day_Saturday',
  action() {
    BlazeLayout.render('App_Body', { main: 'Find_By_Day_Saturday' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
