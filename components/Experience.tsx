"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <VerticalTimeline lineColor="black">
      <VerticalTimelineElement
        visible
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        date="2010 - 2011"
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>

      {experiencesData.map((item, i) => (
        <VerticalTimelineElement
          key={i}
          visible
          date={item.date}
          icon={item.icon}
          iconStyle={{ background: "rgb(0,0,0)", color: "#fff" }}
        >
          <h3>{item.title}</h3>
          <h3>{item.location}</h3>
          <p>{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
