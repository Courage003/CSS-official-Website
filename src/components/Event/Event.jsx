import React, { useState } from 'react'
import Loading from "../Loading";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {eventData} from "./eventData"

export default function Event() {
    const [load, setLoad] = useState(true);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  
    return load ? (
      <Loading />
    ) : (
    <div className="mb-6">
      <div className="w-full p-24 text-center text-white"
        style={{ background: "#000" }}>
        <h4 className="text-5xl font-semibold pb-2">#Activities</h4>
        <p>DEDICATION. DISCIPLINE. DETERMINATION</p>
      </div>
      <VerticalTimeline lineColor='#000'>
        {eventData.map((event)=>(
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          key={event.id}
        >
          <h3 className="vertical-timeline-element-title text-2xl font-bold">{event.eventName}</h3>
          <p className="vertical-timeline-element-subtitle font-semibold text-md">
          {event.description}
          </p>
          <h4 className="vertical-timeline-element-subtitle font-bold pt-5">{event.date}</h4>
        </VerticalTimelineElement>
        ))}

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  />
</VerticalTimeline>
    </div>
  )
}
