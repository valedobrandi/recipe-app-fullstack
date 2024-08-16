import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';


import { token, user, userReturnDB } from './mocks/login';
import SequelizeUser from '../database/models/SequelizeUsers';

chai.use(chaiHttp);

const { expect } = chai;

describe('LOGIN ROUTE', () => {
  beforeEach(sinon.restore)

});
