// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/core';

import { get } from '@loopback/rest';


export class HelloController {
  // Map to 'GET /hello'
  @get('/hello')
  hello(): String{
    return "Hello world"
  }
}
