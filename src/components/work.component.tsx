import React from "react";
import { ReactElement } from "react";
import { HorizontalLine } from "./UI/horizontal-line.component";
import page from "../assets/HeisePages.jpg";
import meetings from "../assets/Meetings.jpg";
import study from "../assets/Study.jpg";
import { TaskCard } from "./UI/TaskCard.component";
import { SkillCard } from "./UI/skillcard.component";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-scroll";

export const Work = (): ReactElement => {
  return (
    <div className="relative">
      <div className="bg-blue-900 absolute z-10 top-0 left-0 right-2/3 bottom-1/2 md:visible invisible" />
      <Link
        activeClass="active"
        to="Workflow"
        spy={true}
        smooth={true}
        duration={400}
        className="flex flex-col items-center justify-center h-[100vh] flex-wrap relative"
        id="Work"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Meine Tätigkeiten</h1>
          <HorizontalLine className="z-20" isPulledThrough>
            <h4 className="text-lg"> Arbeiten in einem Agilen Arbeitsumfeld</h4>
          </HorizontalLine>
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 pt-5 px-5 z-10">
            <TaskCard url={page} title="Entwicklung">
              <div className="flex flex-wrap gap-2">
                <SkillCard text="React"></SkillCard>
                <SkillCard text="GraphQL"></SkillCard>
                <SkillCard text="NextJs"></SkillCard>
                <SkillCard text="Tailwind"></SkillCard>
                <SkillCard text="Contentful"></SkillCard>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex">
                  <BiChevronRight className="h-6 w-6 text-2xl"></BiChevronRight>
                  <p>Frontend & Backend Entwicklung</p>
                </div>
                <div className="flex">
                  <BiChevronRight className="text-2xl"></BiChevronRight>
                  <p>GIT & GitLab</p>
                </div>
                <div className="flex">
                  <BiChevronRight className="text-2xl"></BiChevronRight>
                  <p>DevOps</p>
                </div>
              </div>
            </TaskCard>
            <TaskCard url={meetings} title="Agiles Arbeiten">
              <div className="flex flex-wrap gap-2">
                <SkillCard text="Scrum"></SkillCard>
                <SkillCard text="Jira"></SkillCard>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex">
                  <BiChevronRight className="text-2xl"></BiChevronRight>
                  <p>Meetings</p>
                </div>
                <div className="flex">
                  <BiChevronRight className="text-2xl"></BiChevronRight>
                  <p>Arbeiten mit einem Ticketsystem</p>
                </div>
                <div className="flex">
                  <BiChevronRight className="text-2xl"></BiChevronRight>
                  <p>Spezifische Rollenverteilung im Team</p>
                </div>
                <div className="flex">
                  <BiChevronRight className="text-2xl"></BiChevronRight>
                  <p>Flexible Arbeitsbedingungen</p>
                </div>
              </div>
            </TaskCard>
            <TaskCard url={study} title="Weiterbildung">
              <div className="flex flex-wrap gap-2">
                <SkillCard text="Udemy"></SkillCard>
                <SkillCard text="Heise Academy"></SkillCard>
                <SkillCard text="Docs"></SkillCard>
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <div className="flex">
                  <BiChevronRight className="text-2xl"></BiChevronRight>
                  <p>
                    Selbstständige Weiterbildung durch Kurse und Dokumentationen
                  </p>
                </div>
              </div>
            </TaskCard>
          </div>
        </div>
      </Link>
    </div>
  );
};
