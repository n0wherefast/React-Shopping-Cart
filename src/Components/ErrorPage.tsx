import Lottie from 'react-lottie';
import animationData from '../assets/animation/111131-404-page-animation.json'
import { Link } from 'react-router-dom';


function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center h-[300px]'>
        <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },}}
                width={350}
                height={200} 
              />
      <div className="font-black text-2xl text-pink-600 p-2">NOT FOUND!</div>
      <Link to="/" className=' font-bold text-white bg-pink-500 p-2 m-1 rounded-2xl hover:bg-pink-700'>
      Back To Home
      </Link>
      
    </div>
  )
}

export default ErrorPage
