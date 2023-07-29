import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Today's Weather is Very good for your journey...`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Our tour guides can make U explore the WoW...`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Easy to access...`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList