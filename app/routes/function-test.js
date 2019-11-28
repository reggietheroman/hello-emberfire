import Route from '@ember/routing/route';
import firebaseApp from 'emberfire/app/services/firebase-app'
import Service from '@ember/service';

export default Route.extend({
  firebaseService : service(),
  model() {
  }
});
