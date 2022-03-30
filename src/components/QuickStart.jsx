import BannerLanding from "./BannerLanding";
import OurWallet from "./our-wallet";
import WhyChoose from "./why-choose";
import { Tweet, Timeline } from 'react-twitter-widgets';

export default function QuickStart() {

  return (
    <div>
      <BannerLanding />
      <OurWallet />
      <WhyChoose />
      <Tweet 
        tweetId="1481984297917718529"  
        options={{ align: "center", width: "200 "}}
        />
        <Timeline
    dataSource={{ sourceType: "profile", screenName: "ClimateGuards" }}
    options={{ width: "400", height: "600" }}
  />
    </div>
  );
}
