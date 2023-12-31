import { useNavigate } from 'react-router-dom'
import Button from './Button'
import CarpoolAnimation from './CarpoolAnimation'

const HomeContent = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-center items-center max-md:flex-col'>
            <div className='w-full flex items-center justify-center overflow-hidden max-sm:flex-col'>
                <CarpoolAnimation />
                <div className='w-[30%] ml-10 max-sm:w-[80%] max-sm:ml-0'>
                    <Button width='w-full' text='Search Ride' onClick={() => navigate('/ride-search')} />
                    <Button width='w-full' text='Publish Ride' onClick={() => navigate('/ride-publish')} />
                </div>
            </div>
            <div className="flex justify-between flex-wrap max-w-[80%] mx-auto pb-10 space-x-5 max-sm:flex-col max-sm:items-center">
                <div className="flex-1 max-w-[30%] text-left max-sm:text-center max-sm:max-w-[90%] max-sm:my-10">
                    <div className="text-3xl">Discover a Greener Way to Commute</div>
                    <div className='mt-5'>
                        Embark on a journey with CarpoolConnect, where our vision is to create a sustainable and connected campus community. By seamlessly connecting college students through shared rides, we're not just reducing carbon footprints; we're crafting a vibrant, eco-conscious college experience.
                    </div>
                </div>
                <div className="flex-1 max-w-[30%] text-left max-sm:text-center max-sm:max-w-[90%] max-sm:my-10">
                    <div className="text-3xl">Values That Drive Us Together</div>
                    <div className='mt-5'>
                        Carpool Connect unites individuals for shared journeys, reducing traffic congestion and environmental impact. Our values prioritize efficient route planning and timely pickups for user convenience. Join us in fostering community collaboration and promoting eco-friendly commuting.






                    </div>
                </div>
                <div className="flex-1 max-w-[30%] text-left max-sm:text-center max-sm:max-w-[90%] max-sm:my-10">
                    <div className="text-3xl">Empowering Your College Journey</div>
                    <div className='mt-5'>
                        Explore the forefront of transportation technology with us. CarpoolConnect is not just a ride-sharing platform; it's a hub of innovation, empowering you to shape the future of college commuting.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeContent