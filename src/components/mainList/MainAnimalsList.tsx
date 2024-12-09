import { IAnimal } from '../../../Interface/data';
import './MainAnimalsList.css'


interface AnimalList {
    animalList: IAnimal;
}

const MainAnimalsList: React.FC<AnimalList> = (props) => {
    return ( 
        <div className='mainAnimalList'>
            <h2>{props.animalList.emoji}</h2>
            <h3>{props.animalList.name}</h3>
            <p>{props.animalList.species}</p>
            <p>{props.animalList.habitat}</p>
            <p>{props.animalList.diet}</p>
            <p>Lifespan: {props.animalList.lifespan} years</p>
            <ul>
                {
                    props.animalList.funFacts.map((fact) =>(
                        <li>{fact}</li>
                    ))
                }
            </ul>
        </div>
     );
}


export default MainAnimalsList;