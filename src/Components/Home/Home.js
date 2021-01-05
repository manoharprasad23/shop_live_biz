import React from 'react';
import Header from './../Header/Header';
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <div id="fb-root"></div>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0" nonce="CuarFFHE"></script>
            </Helmet>
            <Header />
            <div class="fb-video fb-live-video" data-href="https://www.facebook.com/facebook/videos/10153231379946729/" data-width="500" data-show-text="false"><blockquote cite="https://developers.facebook.com/facebookapp/videos/10153231379946729/" class="fb-xfbml-parse-ignore"><a href="https://developers.facebook.com/facebookapp/videos/10153231379946729/">How to Share With Just Friends</a><p>How to share with just friends.</p>Posted by <a href="https://www.facebook.com/facebookapp/">Facebook App</a> on Friday, December 5, 2014</blockquote></div>
        </div>
    )
}

export default Home
