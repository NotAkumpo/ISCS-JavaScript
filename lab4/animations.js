export class Animations {
    static animateElement(dfnentry) {
        dfnentry.animate(
            [
                { transform: "rotate(120deg)"},
                { transform: "rotate(-360deg)"},
            ],
            {
                duration: 3000,
                iterations: 1,
            }
        );
    }

    static animateHeaderElement(dfn) {
        dfn.animate(
            [
                { transform: "rotate(120deg)"},
                { transform: "rotate(360deg)"},
            ],
            {
                duration: 3000,
                iterations: 1,
            }
        );
    }
}