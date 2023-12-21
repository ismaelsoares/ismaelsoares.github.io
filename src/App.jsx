import './App.css';
import { Buttons } from './components/Buttons';
import { Footer } from './components/Footer';
import { Profile } from './components/Profile';
import { SocialLinks } from './components/SocialLinks';
import { Switch } from './components/Switch';

export function App() {

  return (
    <>
      <div id="container" >
        <Profile />
        <Switch />
        <Buttons />
        <SocialLinks />
        <Footer />
      </div>
    </>
  )
}

