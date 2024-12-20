/**
 * Navigation params for the main stack
 */
export type MainStackParamList = {
  Splash: undefined;
  BuyerLogin: undefined;
  SellerLogin: undefined;
  BuyerHome: undefined;
  SellerHome: undefined;
  PlaceOrder: undefined;
  BidsList: { orderId: string };
  LoadingMonitor: { orderId: string };
};