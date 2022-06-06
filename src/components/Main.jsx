function Main(props){

    return (
        <div className="main-wrapper">
            <h1>Test {props.test} </h1>
            <h1>Test 1 {props.test1} </h1>
            <h1>Test 2 {props.test2} </h1>
        </div>
    )
}

export default Main;



// props = {
//     test:50,
//     test1:20,
//     test2:54
// }


// props.test2 =>54