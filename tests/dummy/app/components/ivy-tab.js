import Ember from 'ember';
import IvyTabComponent from 'ivy-tabs/components/ivy-tab';

export default IvyTabComponent.extend({
  tagName: 'li',

  actions: {
    select: function() {
      this.select();
    }
  },

  panelHref: Ember.computed(function() {
    return '#' + this.get('aria-controls');
  }).property('aria-controls')
});
