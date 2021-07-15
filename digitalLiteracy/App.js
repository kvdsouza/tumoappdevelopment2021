import * as React from 'react';


import FirstScreen from './screens/firstScreen';
import SecondScreen from './screens/secondScreen';
import ThirdScreen from './screens/erord';
import ThirdScreen1 from './screens/erord1';
import Third1Screen from './screens/erord1.1';
import ThirddScreen from './screens/erord1.2';
import ThirdScreen2 from './screens/erord2';
import Third2Screen from './screens/erord2.1';
import Third3Screen from './screens/erord2.2';
import FourthScreen from './screens/4Screen';
import Fourth1Screen from './screens/4.1screen';
import Fourth2Screen from './screens/4.2screen';
import FifthScreen from './screens/5fifthScreen';
import Fifth1Screen from './screens/5fifthScreen1';
import Fifth2Screen from './screens/5fifthScreen2';
import SixthScreen from './screens/6screen';
import Sixth1Screen from './screens/6.1screen';
import Sixth2Screen from './screens/6.2screen';
import EighthScreen from './screens/8';
import Eighth1Screen from './screens/8.1';
import Eighth2Screen from './screens/8.2';
import NinthScreen from './screens/Ninth';
import Ninth1Screen from './screens/Ninth1';
import Ninth2Screen from './screens/Ninth2';
import TenthScreen from './screens/Tenth';
import Tenth1Screen from './screens/Tenth1';
import Tenth2Screen from './screens/Tenth2';
import TwentySecondScreen from './screens/22screen';
import TwentySecond1Screen from './screens/22.1screen';
import TwentySecond2Screen from './screens/22.2screen';
import TwentyThirdScreen from './screens/23screen';
import TwentyThird1Screen from './screens/23.1screen';
import TwentyThird2Screen from './screens/23.2screen';
import TwentyFourthScreen from './screens/24screen';
import TwentyFourth1Screen from './screens/24.1screen';
import TwentyFourth2Screen from './screens/24.2screen';
import TwentyFifthScreen from './screens/25screen';
import TwentyFifth1Screen from './screens/25.1screen';
import TwentyFifth2Screen from './screens/25.2screen';
import EresunutScreen from './screens/38screen';
import EresunyotScreen from './screens/37screen';
import Eresunyot1Screen from './screens/37.1screen';
import TwentyOneScreen from './screens/21screen';
import TwentyOne1Screen from './screens/21.1screen';
import TwentyOne2Screen from './screens/21.2screen';
import EresunHingScreen from './screens/35screen';
import EresunHingerordScreen from './screens/35';
import EresunHing1Screen from './screens/35.1screen';
import EresunHing2Screen from './screens/35.2screen';
import EresunHing3Screen from './screens/35.3screen';
import EresunHing4Screen from './screens/35.4screen';
import EresunHing5Screen from './screens/35.5screen';
import Eresunyot2Screen from './screens/37.2screen';
import Eresunyot3Screen from './screens/37.3screen';
import Eresunyot4Screen from './screens/37.4screen';
import Eresunyot5Screen from './screens/37.5screen';
import EresunErkuScreen from './screens/32screen';
import EresunErku1Screen from './screens/32.1screen';
import EresunErku2Screen from './screens/32.2screen';

import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppStack = createStackNavigator({
  First: FirstScreen,
  Second: SecondScreen,
  Third: ThirdScreen,
  Third1: ThirdScreen1,
  Third2: ThirdScreen2,
  Thirdd: ThirddScreen,
  Thir1d: Third1Screen,
  Thir2d: Third2Screen,
  Thir3d: Third3Screen,
  Fourth: FourthScreen,
  Fourth1: Fourth1Screen,
  Fourth2: Fourth2Screen,
  Fifth: FifthScreen,
  Fifth1: Fifth1Screen,
  Fifth2: Fifth2Screen,
  Sixth: SixthScreen,
  Sixth1: Sixth1Screen,
  Sixth2: Sixth2Screen,
  Eighth: EighthScreen,
  Eighth1: Eighth1Screen,
  Eighth2: Eighth2Screen,
  Ninth: NinthScreen,
  Ninth1: Ninth1Screen,
  Ninth2: Ninth2Screen,
  Tenth: TenthScreen,
  Tenth1: Tenth1Screen,
  Tenth2: Tenth2Screen,
  TwentySecond: TwentySecondScreen,
  TwentySecond1: TwentySecond1Screen,
  TwentySecond2: TwentySecond2Screen,
  TwentyThird: TwentyThirdScreen,
  TwentyThird1: TwentyThird1Screen,
  TwentyThird2: TwentyThird2Screen,
  TwentyFourth: TwentyFourthScreen,
  TwentyFourth1: TwentyFourth1Screen,
  TwentyFourth2: TwentyFourth2Screen,
  TwentyFifth: TwentyFifthScreen,
  TwentyFifth1: TwentyFifth1Screen,
  TwentyFifth2: TwentyFifth2Screen,
  Eresunut: EresunutScreen,
  Eresunyot: EresunyotScreen,
  Eresunyot1: Eresunyot1Screen,
  TwentyOne: TwentyOneScreen,
  TwentyOne1: TwentyOne1Screen,
  TwentyOne2: TwentyOne2Screen,
  Eresunhing: EresunHingScreen,
  Eresunhing1: EresunHing1Screen,
  Eresunhing2: EresunHing2Screen,
    Eresunhing3: EresunHing3Screen,
    Eresunhing4: EresunHing4Screen,
    Eresunhing5: EresunHing5Screen,
   Eresunyot2: Eresunyot2Screen,
   Eresunyot3: Eresunyot3Screen,
     Eresunyot4: Eresunyot4Screen,
       Eresunyot5: Eresunyot5Screen,
 EresunHingerord: EresunHingerordScreen, 
  EresunErku: EresunErkuScreen,
  EresunErku1: EresunErku1Screen,
  EresunErku2: EresunErku2Screen,
});

const App = createAppContainer(AppStack);
export default App;
