export function randomScreenPos(width: number, height: number) {
    return { x: random(0, width), y: random(0, height) };
}
export function random(mn: number, mx: number): number {
    return mn + Math.random() * (mx - mn);
}
export function randomWord() {
    return pick(
        "dog cat house water drink lunch sleep read book shop cycle run".split(
            " "
        )
    );
}
export function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function randomColour() {
    return pick(["yellow", "pink", "orange", "magenta", "gainsboro"]);
}
