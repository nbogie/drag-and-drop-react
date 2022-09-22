import { randomWord, randomScreenPos, randomColour } from "./random";

export interface Position {
    x: number;
    y: number;
}
export interface IPostIt {
    id: string;
    title: string;
    pos: Position;
    colour: string;
}
export interface PostitProps {
    postIt: IPostIt;
}
export function Postit({ postIt }: PostitProps) {
    return (
        <div
            className="postit"
            id={postIt.id}
            style={{
                left: postIt.pos.x + "px",
                top: postIt.pos.y + "px",
                background: postIt.colour,
            }}
            draggable={true}
            onDragStart={(ev) => {
                //Store the id of the element in the dataTransfer object of the drag event.
                //So we can find the dragged element easily, later.
                const id = (ev.target as HTMLElement).id;
                // console.log("onDragStart: ", { id });
                ev.dataTransfer.setData("text/plain", id);
            }}
        >
            <h1>{postIt.title}</h1>
            <div>blah blah blah</div>
        </div>
    );
}

export function generateRandomPostIts(): { [key: string]: IPostIt } {
    const results: IPostIt[] = [];
    for (let i = 0; i < 5; i++) {
        const p1: IPostIt = {
            id: "postit" + i,
            title: randomWord(),
            pos: randomScreenPos(500, 300),
            colour: randomColour(),
        };
        results.push(p1);
    }
    return Object.fromEntries(results.map((p) => [p.id, p]));
}
