import React from 'react'
import {gsap} from 'gsap';

export const LoaderComponent = () => {
    gsap.from('.loader', {y:15, duration: 0.2,  ease: 'ease.out'})
    .then(()=> gsap.to('.loader', {y:30, duration: 1,  ease: 'ease.out', repeat: -1, yoyo: true}))
 
    gsap.delayedCall(1, ()=> gsap.to('.loader1', {  opacity: 0, duration: 0.2,  ease: 'ease.out' , onComplete: ()=> gsap.to('.loader1', {opacity: 1, duration: 0.2,  ease: 'ease.out'})}))
    gsap.delayedCall(2, ()=> gsap.to('.loader2', {  opacity: 0, duration: 0.2,  ease: 'ease.out' , onComplete: ()=> gsap.to('.loader2', {opacity: 1, duration: 0.2,  ease: 'ease.out'})}))
    gsap.delayedCall(3, ()=> gsap.to('.loader3', {  opacity: 0, duration: 0.2,  ease: 'ease.out' , onComplete: ()=> gsap.to('.loader3', {opacity: 1, duration: 0.2,  ease: 'ease.out'})}))
    gsap.delayedCall(4, ()=> gsap.to('.loader4', {  opacity: 0, duration: 0.2,  ease: 'ease.out' , onComplete: ()=> gsap.to('.loader4', {opacity: 1, duration: 0.2,  ease: 'ease.out'})}))
    gsap.delayedCall(5, ()=> gsap.to('.loader5', {  opacity: 0, duration: 0.2,  ease: 'ease.out' , onComplete: ()=> gsap.to('.loader5', {opacity: 1, duration: 0.2,  ease: 'ease.out'})}))
    gsap.delayedCall(6, ()=> gsap.to('.loader6', {  opacity: 0, duration: 0.2,  ease: 'ease.out' , onComplete: ()=> gsap.to('.loader6', {opacity: 1, duration: 0.2,  ease: 'ease.out'})}))
 
  return (
    <div> <h4 className='loader' >Loading
    <span className='loader1'>.</span>
    <span className='loader2'>.</span>
    <span className='loader3'>.</span>
    <span className='loader4'>.</span>
    <span className='loader5'>.</span>
    <span className='loader6'>.</span>
    
    </h4>
    </div>
  )
}
