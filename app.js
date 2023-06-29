{/* <div id = "parent"> --Parent
 <div id = "child"> --Child 
    <h1>I am h1 tag</h1> --Child
    <h2> I am h2 tag </h2> --sibling of h1 -- now we will make array for h1 and h2;
 </div>
</div> */}


const parent = React.createElement("div" , {id: "parent"}, React.createElement("div" , {id: "child"} ,[

    React.createElement("h1" , {}, "I am h1 tag"), React.createElement("h2" , {} , "i am h2 tag")]));
 

const root = ReactDOM . createRoot(document.getElementById("root"));
root.render(parent);