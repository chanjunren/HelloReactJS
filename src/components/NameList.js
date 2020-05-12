import React from 'react' 
import Person from './Person'

function NameList() {
    // const names = ['Name 1', 'Name 2', 'Name 3']
    // const nameList = names.map(name => <h2>{name}</h2>)

    const persons = [
        {id: 1, name: 'tootie', skill: 'butterfly'},
        {id: 2, name: 'tootie2', skill: 'back toe wheeling'},
        {id: 3, name: 'tootie3', skill: 'guo fang style combo'}
    ]

    const personList=persons.map(person => <Person person={person}/>)

    return (<div>
            {personList}
        </div>)
}


export default NameList