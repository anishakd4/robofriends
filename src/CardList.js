import React from "react";
import Card from './Card';

// const CardList = () => {
//     return(
//         <div>
//             <Card id={robots[0].id} email={robots[0].email} name={robots[0].username} />
//             <Card id={robots[1].id} email={robots[1].email} name={robots[1].username} />
//             <Card id={robots[2].id} email={robots[2].email} name={robots[2].username} />
//         </div>
//     );
// }

// const CardList = () => {
//     const cardComponent = robots.map((user, i) => {
//         return (
//             <Card 
//                 key={robots[i].id}
//                 id={robots[i].id} 
//                 email={robots[i].email} 
//                 name={robots[i].username} 
//                 />
//             )
//     })
//     return(
//         <div>
//             {cardComponent}
//         </div>
//     );
// }

const CardList = ({robots}) => {
    return(
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={robots[i].id}
                            id={robots[i].id} 
                            email={robots[i].email} 
                            name={robots[i].username} 
                            />
                        )
                })
            }
        </div>
    );
}

export default CardList;