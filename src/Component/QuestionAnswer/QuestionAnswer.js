import React from "react";
import './QuestionAnswer.css'

const QuestionAnswer = () => {
    return (
        <div className="questions-container">
            <h2>Difference between props and states:</h2>
            <p>
                <span  style={{fontWeight:'bold'}}>Props: </span> <br />
                -> props are read only. We can only read the value of props <br />
                -> props can not be modified <br />
                -> props works as parameter fo a function  <br /> <br/>

                <span  style={{fontWeight:'bold'}}>State: </span> <br />
                -> state changes can be asynchronous <br />
                -> state can be modified using this.setState <br />
                -> state can works as function <br />
            </p>

            <h2>How useSate works?</h2>
            <p>
                -> useState is a Hook that allows us to have state variables in functional components.We pass the initial state to this function and it returns a variable with the current state value and another function to update this value. It accepts an argument which is the initial value of the state property and returns the current value of state property and a method which is capable of updating that state property. When something is updateable or changeable we declare useState. useSate has 2 things a initial value & a set Function. like const [product, setProduct] = useSate([]). We update set Function and get the value. Here if we will use setProduct function to update product's value and we can access these value using product variable.
                 
            </p>
        </div>
    )
}
export default QuestionAnswer;