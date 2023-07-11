import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 1,
      name: "Clark",
      age: 30,
      skill: "Angular",
    },
    {
      id: 1,
      name: "Diana",
      age: 30,
      skill: "Vue",
    },
  ]
  const personList = persons.map(person => <Person person={person} />)
  return <div>{personList}</div>
}

export default NameList
