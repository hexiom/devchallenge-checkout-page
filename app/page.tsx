/* eslint-disable @next/next/no-img-element */
/* The NextJS <Image> element sucks, so I am using <img> element */
/* NextJS, please fix your stupid Image component */

import CheckoutItem from "./components/CheckoutItem";
import WithLabel from "./components/WithLabel";
import InputField from "./components/InputField";
import CountryDropdown from "./components/CountryDropdown";
import NumericInputField from "./components/NumericInputField";
import Stepper from "./components/Stepper";
import Step from "./components/Step";

export default function App() { 
  return (
    <>
    <header className="checkout-header">
      <img className="checkout-img" srcSet="/background-image.png 960w, /background-image@2x.png 1280w" sizes="(max-width: 620px) 960px, 1280px" src="/background-image.png" alt="" />
    </header>

    <main className="checkout-main">
      <div className="title-wrapper padding-y-largest">
        <h1 className="bold text-large">Checkout</h1>
        <span className="badge">3 Items</span>
      </div>

      <div className="checkout-modal grid-half">
        <div className="items-panel padding-x-larger">
          <div className="items">
            <CheckoutItem img={{qualityMid: "/Gold.png", qualityHigh: "/Gold@2x.png"}} name="iPhone 12 Pro" price={999.00} color="Golden" quantity={1} />
            <CheckoutItem img={{qualityMid: "/Apple-watch.png", qualityHigh: "/Apple-watch@2x.png"}} name="Apple Watch" price={399.00} color="Blue" quantity={1} />
            <CheckoutItem img={{qualityMid: "/iMac.png", qualityHigh: "/iMac@2x.png"}} name="iMac" price={1199.00} color="Green" quantity={1} />
          </div>

          <div className="inline-flex padding-top-medium full-width gap-small">
            <InputField type="text" placeholder="Enter coupon code" />
            <button className="btn">Apply Coupon</button>
          </div>

          <div className="flex-column gap-medium text-close padding-y-large">
            <div className="flex-between semi-bold text-secondary">
              <p>Sub total</p>
              <p>$2597.00</p>
            </div>

            <div className="text-secondary semi-bold flex-between">
              <p>Tax</p>
              <p>$623.28</p>
            </div>

            <div className="flex-between bold">
              <p>Total</p>
              <p>$3220.28</p>
            </div>
          </div>
        </div>

        <div className="contact-side padding-x-larger">
          <div>
            <p className="bold padding-bottom-large">Contact Information</p>

            <div className="flex-column gap-large">
              <WithLabel labelId="name-label">
                First & Last name
                <InputField className="contact-field" type="text" aria-labelledby="" placeholder="Enter first & last name" />
              </WithLabel>
              
              <WithLabel labelId="email-label">
                Email address
                <InputField className="contact-field" type="text" placeholder="Enter email address" />
              </WithLabel>

              <div className="grid-half gap-medium">
                <WithLabel labelId="country-label">
                  Country
                  <CountryDropdown className="contact-field" />
                </WithLabel>

                
                <WithLabel labelId="postal-label">
                  Country
                  <NumericInputField className="contact-field text-secondary" placeholder="00270" />
                </WithLabel>
              </div>

              <button className="btn btn-large">Continue</button>

              <Stepper>
                <Step completed>
                  Shipping information
                </Step>

                <Step>
                  Personal information
                </Step>
                
                <Step>
                  Banking details
                </Step>
              </Stepper>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
