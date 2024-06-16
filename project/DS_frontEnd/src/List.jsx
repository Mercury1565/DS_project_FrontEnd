import PropTypes from 'prop-types';

function List(props)
{
    // const fruits = [{id: 1 , name: "appple" , calories: 38}, 
    //                 {id: 2 , name: "banana" , calories: 282}, 
    //                 {id: 3 , name:"cherry" , calories: 383},
    //                 {id: 4 , name: "shir" , calories: 10},];
    
    // fruits.sort((a , b) => a.name.localeCompare(b.name)); // sort by name
    // fruits.sort((a , b) => a.calories - b.calories); // sort by calories
    
    // const lowCalFruits = fruits.filter(
    //     fruit => fruit.calories < 100
    // )

    // const listItems = lowCalFruits.map(lowCalFruits => <li key = {lowCalFruits.id}>
    //     {lowCalFruits.name}:  &nbsp;
    //     {lowCalFruits.calories}
    //     </li>);

    const catagory = props.catagory;
    const itemList = props.items;

     const listItems = itemList.map(itemList  => <li key = {itemList.id}>
        {itemList.name}:  &nbsp;
        {itemList.calories}
        </li>);

    return (
        <>
            <h1>{catagory}</h1>
            <ol>{listItems}</ol>
        </>
    )
}

List.defaultProps = {
    catagory: "Category",
    items: []
}

List.propTypes = {
    catagory: PropTypes.string,
    items: PropTypes.arrayOf(
                PropTypes.shape(
                    {id: PropTypes.number, 
                    name: PropTypes.string, 
                    calories: PropTypes.number}))
}

export default List;    