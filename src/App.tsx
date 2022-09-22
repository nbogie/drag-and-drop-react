import { useState } from "react";
import "./App.css";
import { generateRandomPostIts, IPostIt, Postit } from "./PostIt";

function App() {
    const [postIts, setPostIts] = useState(() => generateRandomPostIts());

    return (
        <div
            className="App"
            onDragOver={(ev) => {
                ev.preventDefault(); //NEED this
            }}
            onDrop={(ev) => {
                ev.preventDefault();

                const postItID = ev.dataTransfer.getData("text/plain");
                // const draggedEl = document.getElementById(postItID);
                // if (draggedEl === null) {
                //     return;
                // }

                //TODO: get the upper-left corner of the draggedEl element
                //rather than the ev.clientX, ev.clientY which is just the mouse pos.
                const postItData = postIts[postItID];
                const clonePostit: IPostIt = { ...postItData };
                clonePostit.pos = { x: ev.clientX, y: ev.clientY };
                setPostIts({ ...postIts, [clonePostit.id]: clonePostit });
            }}
        >
            {Object.values(postIts).map((p) => (
                <Postit postIt={p} key={p.id} />
            ))}
        </div>
    );
}

export default App;
