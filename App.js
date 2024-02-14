// core React feature
//createElement takes 3 parameters as compared to document.createElement which takes 1 argument
// App is an object 
// ReactElement(object) => HTML(Browser understands)

const App = React.createElement(
    'h1',
    { id: 'heading', xyz: 'abc' },
    "Ram Janm Bhoomi Mandir, Ayodhya"
)
// console.log(App) // object
// React DOM feature
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(App); // render method converts App into h1 tag that browser understands 



/*
    <div id="parent">
        <div id="child">
            <h1>
            </h1>
            <h2></h2>
        </div>
    </div>
    pass sibling elements in array in the 3rd argument
*/ 

// const parent = React.createElement(
//     'div', { id: 'parent' },
//     React.createElement(
//         'div', { id: 'child' },
//         [React.createElement(
//             'h1', {}, "Ram Janm Bhoomi Mandir, Ayodhyaa"),
//             React.createElement(
//                 'h1', {}, "Sri Ram Janm Bhoomi Mandir, Ayodhyaa")]
//     )
// )

// root.render(parent);