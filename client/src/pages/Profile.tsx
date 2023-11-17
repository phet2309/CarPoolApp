import React from 'react'
import './Profile.css';
import profileImage from '../assets/profileImage.jpg';
import Transition from '../components/Transition';
import ThreejsPlane from '../components/ImagePlane';
import Button from '../components/Button';

const Profile = () => {


  return (
    <>
      <Transition />
      <div className='min-h-screen w-full flex flex-col items-center'>
        <ThreejsPlane />
        <div className='w-full flex justify-center relative bg-transparent profile-header'>
          <img className='w-44 h-44 rounded-full absolute -bottom-20' src={profileImage}></img>
        </div>
        <div className='pt-24 z-10'>
          <div>@jd0912</div>
          <div className='text-4xl font-bold'>John Doe</div>
          <div className='text-lg'>5436768832 | jd0912@test.com</div>
          <div className='text-lg'></div>
          <div>Address: 105, Alan Ter Ave, Jersey City, NJ</div>
          <div className='flex justify-between mt-5'>
            <div className='flex flex-col items-center'>
              <div className='text-2xl font-bold'>5</div>
              <div>Published Rides</div>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-2xl font-bold'>7</div>
              <div>Booked Rides</div>
            </div>
          </div>
          <Button width='w-full' height='h-5' text='My Rides' onClick={() => console.log("Button Clicked")} />
        </div>
      </div>

    </>
  )
}

export default Profile