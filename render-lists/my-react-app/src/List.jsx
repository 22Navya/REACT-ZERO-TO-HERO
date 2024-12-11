import PropTypes from 'prop-types';
function List(props){
    // const fruits= [{id:1,name:"apple",calories:95},
    //                 {id:5,name:"orange",calories:30},
    //                 {id:2,name:"banana",calories:45},
    //                 {id:3,name:"coconut",calories:105},
    //                 {id:4,name:"pineapple",calories:37}];

    // fruits.sort();
    // fruits.sort((a,b) => a.name.localeCompare(b.name));  //ALPHABETICAL
    //fruits.sort((a,b) => b.name.localeCompare(a.name));     //REVERSE ALPHABETICAL

    // fruits.sort((a,b) => a.calories - b.calories)  //NUMERIC
    // fruits.sort((a,b) => b.calories - a.calories)      //REVERSE NUMERIC

    // const lowCalFruits=fruits.filter(fruits => fruits.calories <100);
    // const highCalFruits=fruits.filter(fruits => fruits.calories >100);
    // const listItems= lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>{lowCalFruits.name} : &nbsp; <b>{lowCalFruits.calories}</b></li>)
    // const listItems= highCalFruits.map(highCalFruits => <li key={highCalFruits.id}>{highCalFruits.name} : &nbsp; <b>{highCalFruits.calories}</b></li>)
    const category=props.category;
    const itemList=props.items;
    // const listItems= fruits.map(fruits => <li key={fruits.id}>{fruits.name} : &nbsp; <b>{fruits.calories}</b></li>)
    const listItems= itemList.map(item => <li key={item.id}>{item.name} : &nbsp; <b>{item.calories}</b></li>)
    return(
        <>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
        </>
    );

}

List.PropTypes ={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,name:PropTypes.string,calories:PropTypes.number})),
}

List.defaultProps = {
    category:"category",
    items:[],
}


export default List