import './MainAnimals.css'
import ZooList from '../../../Interface/data'
import MainAnimalsList from '../mainList/MainAnimalsList';

const MainAnimals = () => {
    return ( 
        <section className='animalContainer'>
            {
                ZooList.map((singleAnimal, index) => (
                    <MainAnimalsList key={index} 
                    animalList={singleAnimal}/>
                ))
            }
        </section>
    );
}

export default MainAnimals;