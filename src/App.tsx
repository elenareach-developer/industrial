import React,{useState} from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Provider } from 'react-redux';
import ImageSlider from './components/ImageSlider';
import DataTable from './components/DataTable';
import TextForm from './components/TextForm';
import TimerSimple from './components/TimerSimple';
import Player from './components/Player';
import store from './redux/store';
import audio_energy from "./assets/audio/audio_energy.mp3"
import img1 from './assets/images/img1.jpg'
import img2 from './assets/images/img2.jpg'
import img3 from './assets/images/img3.jpg'
import img4 from './assets/images/img4.jpg'

const images = [img1,img2,img3,img4]

function App(): JSX.Element {

  return (
    <>
    <Provider store={store}>

      <div className="min-h-screen flex flex-col w-full dark:bg-gray-900 dark:text-white">
        <div className="w-full p-4 text-center bg-gray-800 text-gray-400">
          <div className="container mx-auto">
            <div>React Tutorial</div>
          </div>
        </div>
        <div className="w-full p-4 text-center text-gray-400">
          <Hero />
          <Player url={audio_energy}/>
          <br/>
          <ImageSlider images={images}/>
          <TimerSimple />
          <TextForm/>
          <DataTable/>
        </div>
        <Footer />

        
      </div>
    </Provider>
    </>
  );
}

export default App
