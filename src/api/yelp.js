import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers:{
      Authorization:'Bearer 3E9PSzeimi57X-RsSTrnyXz0InOx5Hv2Zmkr-AdczvrvdVCxeHAd92UjWtHq-t2qCmP2sYFFPhqKKTpVvgz1WLX7xPAAa3Lo1lFbru_b06Xbp--TLSt_7ybmGE0nXnYx'
  }
});