import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Card from '../Card/Index';
import { Highlight, Info } from '../Card/styles';
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import { SectionHeading } from '../Title/styles';
import { Sections } from './styles';

const Section = ({ profile }) => (
  <>
    <Sections id="about">
      <Title text="Hi everyone, I'm" />
      <SectionHeading>
        {profile.name} <Highlight>{profile.surname}</Highlight>
      </SectionHeading>
      <Info>
        {profile.city} - {profile.state} - {profile.phone} -{' '}
        <Highlight> {profile.email}</Highlight>
      </Info>
      <p>{profile.biography}</p>
      <div id="contacts">
        <Title text="Contacts" />
        <h2>
          {profile.phone}
          <p/>
          {profile.email}
        </h2>
      </div>
    </Sections>
    <Sections id="experience">
      <Title text="Experience" />
      {profile.experience.map((val) => (
        <Card
          key={val.id}
          subTitle={val.job}
          subTitleH3={val.company}
          date={val.period}
          info={val.activity}
        />
      ))}
    </Sections>
    <Sections id="skills">
      <Title text="Skills" />
      {profile.skills.map((val) => (
        <Card
          key={val.id}
          subTitle={val.skill}
          subTitleH3={val.company}
          data={val.period}
          info={val.activity}
        />
      ))}
    </Sections>
    <Sections id="projects">
      <Title text="Projects" />
      {profile.projects.map((val) => (
        <Card
          key={val.id}
          subTitle={val.project}
          subTitleH3={
            <a
            href={val.link}
            target="_blank">
              {val.link}
            </a>
          }
          data={val.period}
          info={val.summary}
        />
      ))}
    </Sections>
    <a
    target="_blank"
    href={profile.linkedin}>
      <FaLinkedin />
    </a>
    <a
    target="_blank"
    href={profile.github}>
      <FaGithub />
    </a>
  </>
);

export default Section;
