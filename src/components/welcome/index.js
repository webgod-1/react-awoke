import React from 'react';

import Intro from './introduction';
import Mission from './mission';
import CallToAction from '../call-to-action';
import Stepper from './stepper';
import QuickInfo from './quick-info';

const Welcome = () => (
  <div id="welcome">
    <Intro />
    <Mission />
    <Stepper />
    <QuickInfo />
    <CallToAction/>
  </div>
);

export default Welcome;