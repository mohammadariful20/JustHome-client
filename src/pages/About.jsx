import { Marker, Popup } from "leaflet";
import PropTypes from 'prop-types';
import { MapContainer, TileLayer } from 'leaflet';
import BannerImg from "../components/BannerImg";
import ComminBanner from "../components/ComminBanner";
import Map from "../components/Map";
import { Helmet } from "react-helmet-async";


const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function About() {


  return (
    <>
      <ComminBanner location={'About'}></ComminBanner>
      <Helmet>
        <title>Light School House | About</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row lg:p-10 mx-auto">
        <div className="max-w-2xl lg:p-20">
          <h1 className="text-5xl font-bold font-sotify text-[#43CEC6] my-6 text-center animate__animated animate__backInDown">SAY HELLO!</h1>
          <h4 className="text-2xl italic font-semibold font-sotify text-[#162C5A] lg:max-w-md p-9 animate__animated animate__backInLeft animate__delay-1s">Make a difference in the life of a child with special needs, create an inclusive community and improve yourself!</h4>
          <small className="text-[#ADA4A1] my-8 block text-sm animate__animated animate__backInLeft animate__delay-2s">Types of special needs vary in severity. People with autism, Down syndrome, dyslexia, blindness, ADHD, or cystic fibrosis, for example, may be considered to have special needs. However, special needs can also include cleft lips, or missing limbs.</small>
          <button className="btn bg-[#FFD223] rounded-2xl animate__animated animate__backInLeft animate__delay-2s">More About Us</button>
        </div>
        <div className="animate__fadeInRight animate__animated animate__delay-1s">
          <img src='https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/img_hello2.jpg' alt="" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#43CEC6] my-4 font-sotify italic">ABOUT US</h1>
        <h4 className="text-2xl  font-semibold text-[#162C5A] max-w-3xl p-9 font-sotify mx-auto">Our goal is to provide every individual with special needs the
          support, friendship and inclusion that they deserve.</h4>

        <div className="flex flex-col lg:flex-row justify-around">
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-7-740x466.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify">Our Mission</h2>
              <p className="my-6">Lighthouse founded upon the idea that within each person is a soul; and that soul is equal and worthy of boundless love.</p>
              <div className="card-actions">
                <button className="btn bg-[#FFD223] rounded-3xl px-5">DETAILS</button>
              </div>
            </div>
          </div>
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-6-740x466.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify">What We Do</h2>
              <p className="my-6">Lighthouse founded upon the idea that within each person is a soul; and that soul is equal and worthy of boundless love.</p>
              <div className="card-actions">
                <button className="btn bg-[#FFD223] rounded-3xl px-5">DETAILS</button>
              </div>
            </div>
          </div>
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-8-740x466.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify">Our Values</h2>
              <p className="my-6">Lighthouse founded upon the idea that within each person is a soul; and that soul is equal and worthy of boundless love.</p>
              <div className="card-actions">
                <button className="btn bg-[#FFD223] rounded-3xl px-5">DETAILS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerImg />
      <div className=" bg-[#43CEC6]">
        <h1 className="text-5xl font-bold text-white py-8 text-center font-sotify">OUR STAFF</h1>
        <h4 className="text-2xl italic font-semibold text-[#162C5A] my-5 text-center font-sotify">Meet our the best and executive
          management team</h4>

        <div className="grid grid-cols-2 lg:grid-cols-4 p-0  lg:p-14">
          <div className="lg:w-44">
            <img className="w-32 mx-auto rounded-full" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/team1-760x760.jpg" />
            <h2 className="text-center text-[#162C5A] my-3 font-bold hover:text-[#FFD223]">Janet Green</h2>
            <p className="text-white text-sm text-center font-sotify">EXECUTIVE DIRECTOR</p>
          </div>
          <div className="lg:w-44">
            <img className="w-32 mx-auto rounded-full" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/team2-760x760.jpg" />
            <h2 className="text-center text-[#162C5A] my-3 font-bold hover:text-[#FFD223]">Michael Jones</h2>
            <p className="text-white text-sm text-center font-sotify">SUPERVISOR</p>
          </div>
          <div className="lg:w-44">
            <img className="w-32 mx-auto rounded-full" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/team3-760x760.jpg" />
            <h2 className="text-center text-[#162C5A] my-3 font-bold hover:text-[#FFD223]">Anna Dowson</h2>
            <p className="text-white text-sm text-center font-sotify">PRESCHOOL TEACHER</p>
          </div>
          <div className="lg:w-44">
            <img className="w-32 mx-auto rounded-full" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/team4-760x760.jpg" />
            <h2 className="text-center text-[#162C5A] my-3 font-bold hover:text-[#FFD223]">Christina Smith</h2>
            <p className="text-white text-sm text-center font-sotify">MASTER INSTRUCTOR</p>
          </div>
        </div>
      </div>

      <div className=" bg-base-200 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center lg:gap-10">

          <div className="lg:p-9 col-span-3">
            <Map />
          </div>

          <div className="col-span-2 my-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#43CEC6] m-4 font-sotify">CONTACT INFO</h1>
            <p className="sm:py-6 mb-20 text-[#162C5A] text-xl lg:text-3xl font-semibold font-sotify">We are a non-profit organization.<br />
              Our goal is to provide help</p>
            <label htmlFor="address">ADDRESS</label>
            <p className="text-[#A1A1AA] p-2">8500, Lorem Street, Chicago, IL, 55030</p>
            <div className="my-4">
              <label htmlFor="address">Phone</label>
              <p className="text-[#A1A1AA] p-2">(123) 456-78-90 <br />(123) 456-78-90</p>
            </div>
            <label htmlFor="address">EMAIL</label>
            <p className="text-[#A1A1AA] p-2">info@example.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired,
};