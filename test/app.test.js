import { expect, it, jest } from '@jest/globals';
import app, {endserver} from '../src/app.js';
// import '@babel/polyfill';

const axios = require('axios');


describe('post request testing', () => {
    
  it('status for callback',async () => {
        const res = await axios({
            url: 'http://localhost:3000/callback',
            method: 'post'
        });
        expect(res.status).toBe(202);
       
    });
    it('status for promises',async () => {
        const res = await axios({
            url: 'http://localhost:3000/promises',
            method: 'post'
        });
        expect(res.status).toBe(202);
    });
    
    it('status for async',async () => {
        const res = await axios({
            url: 'http://localhost:3000/asaw',
            method: 'post'
        });
        expect(res.status).toBe(202);
    });
 });

 afterAll(() => setTimeout(() => process.exit(), 1))

