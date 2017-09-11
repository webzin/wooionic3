import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WooCommerceProvider {

  WooCommerce: any;

  constructor() {
    this.WooCommerce = WC({
      url: "http://www.srisaicards.com",
      consumerKey: "ck_5afe1ec1d52fef326304ffb21a0fe11c9a436be5",
      consumerSecret: "cs_7d9e7f817d5f182770c3d044d0d2f5a43ad20a72"
    });
  }

  initialize(){
    return this.WooCommerce;
  }

}
