import WooCommerceAPI from "./WooCommerceAPI";
import Constants from './Config';

var Api = new WooCommerceAPI({
    url: Constants.URL.root,
    consumerKey: Constants.Keys.ConsumeKey,
    consumerSecret: Constants.Keys.ConsumerSecret,
    wp_api: true,
    version: 'wc/v1',
    queryStringAuth: true
});

export default Api;
