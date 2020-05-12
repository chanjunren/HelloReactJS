import React from 'react' 
import Person from './Person'

function NameList() {
    const names = ['Name 1', 'Name 2', 'Name 3']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    // const persons = [
    //     {id: 1, name: 'tootie', skill: 'butterfly'},
    //     {id: 2, name: 'tootie2', skill: 'back toe wheeling'},
    //     {id: 3, name: 'tootie3', skill: 'guo fang style combo'}
    // ]

    // const personList=persons.map(person => <Person key={person.id} person={person}/>)

    return (<div>
            {nameList}
        </div>)
}


export default NameList