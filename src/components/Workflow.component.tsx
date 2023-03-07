import React from "react";
import { WorkflowItem } from "./UI/WorkflowItem.component";

export const Workflow = () => {
  return (
    <div className="relative">
      <div className="bg-blue-900 absolute z-10 top-1/2 left-2/3 right-0 bottom-0 md:visible invisible" />
      <div
        className="flex flex-col p-32 items-center justify-center h-[100vh] flex-wrap"
        id="Workflow"
      >
        <div className="w-full md:w-7/12 ">
          <h3 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 dark:text-white">
            Workflow
          </h3>
          <WorkflowItem text="Offen" title="Anfang des Sprints">
            Es werden die Tickets des letzten Sprintes besprochen und wenn nötig
            in den neuen Sprint nachgezogen. Neue Tickets werden aus dem Product
            Backlog, je nach priorität in den Sprint Backlog hinzugefügt.
          </WorkflowItem>
          <WorkflowItem title="Planing">
            Die Tickets werden besprochen und entsprechend den Fachkenntnissen
            der Mitarbeiter zugeteilt.
          </WorkflowItem>
          <WorkflowItem
            text="In Arbeit"
            title="Experten-Detail Seite erstellen"
          >
            Es wird ein Slug mit enstrechender Datei für die Seite angelegt. Für
            die Experten-Detail Seite werden vorerst Statische frontend
            Komponenten erstellt oder bereits vorhandende Komponenten in die
            Seite eingepfelgt.
          </WorkflowItem>
          <WorkflowItem title="Backend implementieren">
            Eine GraphQl query wird geschrieben, welche Daten, wie angebotene
            Formaten, Schwerpunkte, Namen und details der Experten abfragt.
            Diese Daten werden per API aufruf für Frontend Komponenten verfügbar
            gestellt.
          </WorkflowItem>
          <WorkflowItem text="Geschlossen" title="Ende des Sprintes">
            Die fertigen Tickets werdem geschlossen und in einem Meeting mit dem
            Projektteam besprochen. Tickets werden wenn notwendig verteilt und
            der nächste Sprint fängt an.
          </WorkflowItem>
        </div>
      </div>
    </div>
  );
};
