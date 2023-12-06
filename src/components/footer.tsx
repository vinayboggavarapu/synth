

import {Link} from "react-router-dom"
const Footer = () => {
    return (<footer className=" text-center lg:text-left">
    {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
    <div className="mx-6 py-10 text-center md:text-left">
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="">
          <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            Synth
          </h6>

          <p>
            Transforming data collaboration. Contribute, download, create
            datasets seamlessly.
          </p>
        </div>
        <div className="">
          <h6 className="text-indigo-500 mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Pages
          </h6>

<Link to="/home">

   
          <p className="mb-4">
            <a className="">Home</a>
          </p>
          </Link>
          <Link to="/collections">

                    <p className="mb-4">
            <a className="">
              Collection
            </a>
          </p>
          </Link>
          <Link to="/create">

          <p className="mb-4">
            <a className="">Create</a>
          </p>
          </Link>
        </div>
        <div className="">
          <h6 className="text-indigo-500 mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Services
          </h6>
          <p className="mb-4">
            <a className="">
              Create Collection
            </a>
          </p>
          <p className="mb-4">
            <a className="">
              Add to existing collection
            </a>
          </p>
          <p className="mb-4">
            <a className="">
              Request a collection
            </a>
          </p>
        </div>

        <div>
          <h6 className="text-indigo-500 mb-4 flex gap-4 justify-center font-semibold uppercase md:justify-start">
            Connect
          </h6>
          <p className="mb-4 flex items-center gap-2 justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="16"
              viewBox="0 0 21 16"
              fill="none"
            >
              <path
                d="M17.7682 1.32785C16.4382 0.707849 14.9982 0.257849 13.4982 -0.00215127C13.485 -0.00257187 13.4719 -0.000103788 13.4598 0.00507949C13.4477 0.0102628 13.4369 0.0180354 13.4282 0.0278489C13.2482 0.357849 13.0382 0.787849 12.8982 1.11785C11.3072 0.877849 9.68916 0.877849 8.09816 1.11785C7.95816 0.777849 7.74816 0.357849 7.55816 0.0278489C7.54816 0.00784894 7.51816 -0.00215127 7.48816 -0.00215127C5.98816 0.257849 4.55816 0.707849 3.21816 1.32785C3.20816 1.32785 3.19816 1.33785 3.18816 1.34785C0.468164 5.41785 -0.281836 9.37785 0.0881641 13.2978C0.0881641 13.3178 0.0981641 13.3378 0.118164 13.3478C1.91816 14.6678 3.64816 15.4678 5.35816 15.9978C5.38816 16.0078 5.41816 15.9978 5.42816 15.9778C5.82816 15.4278 6.18816 14.8478 6.49816 14.2378C6.51816 14.1978 6.49816 14.1578 6.45816 14.1478C5.88816 13.9278 5.34816 13.6678 4.81816 13.3678C4.77816 13.3478 4.77816 13.2878 4.80816 13.2578C4.91816 13.1778 5.02816 13.0878 5.13816 13.0078C5.15816 12.9878 5.18816 12.9878 5.20816 12.9978C8.64816 14.5678 12.3582 14.5678 15.7582 12.9978C15.7782 12.9878 15.8082 12.9878 15.8282 13.0078C15.9382 13.0978 16.0482 13.1778 16.1582 13.2678C16.1982 13.2978 16.1982 13.3578 16.1482 13.3778C15.6282 13.6878 15.0782 13.9378 14.5082 14.1578C14.4682 14.1678 14.4582 14.2178 14.4682 14.2478C14.7882 14.8578 15.1482 15.4378 15.5382 15.9878C15.5682 15.9978 15.5982 16.0078 15.6282 15.9978C17.3482 15.4678 19.0782 14.6678 20.8782 13.3478C20.8982 13.3378 20.9082 13.3178 20.9082 13.2978C21.3482 8.76785 20.1782 4.83785 17.8082 1.34785C17.7982 1.33785 17.7882 1.32785 17.7682 1.32785ZM7.01816 10.9078C5.98816 10.9078 5.12816 9.95785 5.12816 8.78785C5.12816 7.61785 5.96816 6.66785 7.01816 6.66785C8.07817 6.66785 8.91816 7.62785 8.90816 8.78785C8.90816 9.95785 8.06816 10.9078 7.01816 10.9078ZM13.9882 10.9078C12.9582 10.9078 12.0982 9.95785 12.0982 8.78785C12.0982 7.61785 12.9382 6.66785 13.9882 6.66785C15.0482 6.66785 15.8882 7.62785 15.8782 8.78785C15.8782 9.95785 15.0482 10.9078 13.9882 10.9078Z"
                fill="#D9D9D9"
              />
            </svg>
              Discord
          </p>
          <p className="mb-4 flex items-center gap-2 justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M19.5556 1.93666C18.8283 2.25566 18.0534 2.46711 17.2456 2.56978C18.0767 2.07355 18.711 1.29378 19.0092 0.353886C18.2343 0.815886 17.3788 1.14222 16.467 1.32433C15.7312 0.540886 14.6826 0.0556641 13.5386 0.0556641C11.319 0.0556641 9.53211 1.85722 9.53211 4.06578C9.53211 4.38355 9.559 4.68911 9.625 4.98C6.292 4.81744 3.34278 3.22 1.36156 0.786553C1.01567 1.38666 0.812778 2.07355 0.812778 2.813C0.812778 4.20144 1.52778 5.43222 2.59356 6.14478C1.94944 6.13255 1.31756 5.94555 0.782222 5.651C0.782222 5.66322 0.782222 5.67911 0.782222 5.695C0.782222 7.64322 2.17189 9.26144 3.99422 9.63422C3.66789 9.72344 3.31222 9.76622 2.94311 9.76622C2.68644 9.76622 2.42733 9.75155 2.18411 9.69777C2.70356 11.2854 4.17756 12.4527 5.93022 12.4906C4.56622 13.5576 2.83433 14.2004 0.959444 14.2004C0.630667 14.2004 0.315333 14.1858 0 14.1454C1.77589 15.2907 3.88056 15.9446 6.15022 15.9446C13.5276 15.9446 17.5609 9.83344 17.5609 4.53633C17.5609 4.35911 17.5548 4.188 17.5462 4.01811C18.3419 3.45344 19.0104 2.74822 19.5556 1.93666Z"
                fill="#D9D9D9"
              />
            </svg>
              Twitter
          </p>
          <p className="mb-4 flex items-center gap-2 justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.25 0H13.75C17.2013 0 20 2.79875 20 6.25V13.75C20 17.2013 17.2013 20 13.75 20H6.25C2.79875 20 0 17.2013 0 13.75V6.25C0 2.79875 2.79875 0 6.25 0ZM13.75 18.125C16.1625 18.125 18.125 16.1625 18.125 13.75V6.25C18.125 3.8375 16.1625 1.875 13.75 1.875H6.25C3.8375 1.875 1.875 3.8375 1.875 6.25V13.75C1.875 16.1625 3.8375 18.125 6.25 18.125H13.75Z"
                fill="#D9D9D9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 10C5 7.23875 7.23875 5 10 5C12.7613 5 15 7.23875 15 10C15 12.7613 12.7613 15 10 15C7.23875 15 5 12.7613 5 10ZM6.875 10C6.875 11.7225 8.2775 13.125 10 13.125C11.7225 13.125 13.125 11.7225 13.125 10C13.125 8.27625 11.7225 6.875 10 6.875C8.2775 6.875 6.875 8.27625 6.875 10Z"
                fill="#D9D9D9"
              />
              <circle cx="15.375" cy="4.62499" r="0.66625" fill="#D9D9D9" />
            </svg>
              Instagram
          </p>
        </div>
      </div>
    </div>

    <div className="p-6 text-center">
      <span>© 2023 Copyright</span>
    </div>
  </footer>);
};
export default Footer;