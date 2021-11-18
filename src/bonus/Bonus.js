import { useState } from 'react';


function Bonus (){
    //3d
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    //3f 
    const [nextLetter, upOneLetter] = useState(0);

    //const [index, setIndex] = useState(0);

    //3e
    return(
        <div>
            <h1>{letters[nextLetter]}</h1>
                <button onClick={() => upOneLetter (nextLetter +1)}>NEXT LETTER</button>
        </div>
    );
}

export default Bonus;