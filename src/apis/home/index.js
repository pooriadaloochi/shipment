import HttpClient from '../HttpClient';
import AP from '../../helper/Routes/api';

class HomeApiClass extends HttpClient {
  constructor() {
    super(AP.root + AP.version);
  }

  allLoad = payload => this.instance.get(AP.Home.allLoads);

  register = payload => this.instance.post(AP.Home.registerCustomer, payload);
  addLoad = payload => this.instance.post(AP.Home.addLoad, payload);
}

const HomeApi = new HomeApiClass();
export default HomeApi;
