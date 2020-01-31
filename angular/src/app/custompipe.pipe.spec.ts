import { CustompipePipe } from './custompipe.pipe';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

// describe('CustompipePipe', () => {
  // it('create an instance', () => {
  //   const pipe = new CustompipePipe();
  //   expect(pipe).toBeTruthy();
  // });
// 
function Greeeting(){
  return 'Good Mornimg'

 }

 describe('Greeeting Message',()=>{
   let expected ='';
   beforeEach(()=>{
     expected='Greeting Message'
   });

   afterEach(()=>{
   expected ='';
 });
 it('my Greeting message',()=>{
expect(Greeeting()).toEqual(expected)
 });
 it('Good bye',()=>{
  expect(Greeeting()).toEqual(expected)
   });

});
