import Kiwi from "./doodles/kiwi.png";
import Duncan from "./doodles/duncan.png";
import Harper from "./doodles/harper.png";
import SquigglyLines from "./doodles/squiggly-lines.png";
import SquigglyLinesThumb from "./doodles/squiggly-lines-thumb.png";
import Jack from "./doodles/jack.jpg";
import JackThumb from "./doodles/jack-thumb.jpg";
import StarrySky from "./doodles/starry-sky.jpg";
import StarrySkyThumb from "./doodles/starry-sky-thumb.jpg";

const kiwi = {
    img: Kiwi,
    thumb: Kiwi,
    title: "Kiwi",
    id: "kiwi",
    subtitle: "Digital"
}

const duncan = {
    img: Duncan,
    thumb: Duncan,
    title: "Duncan",
    id: "duncan",
    subtitle: "Digital"
}

const harper = {
    img: Harper,
    thumb: Harper,
    title: "Harper",
    id: "harper",
    subtitle: "Digital"
}

const squigglyLines = {
    img: SquigglyLines,
    thumb: SquigglyLinesThumb,
    title: "Squiggly Lines",
    id: "squiggly_lines",
    subtitle: "Digital"
}

const jack = {
    img: Jack,
    thumb: JackThumb,
    title: "Jack",
    id: "jack",
    subtitle: "Digital"
}

const starrySky = {
    img: StarrySky,
    thumb: StarrySkyThumb,
    title: "Starry Sky",
    id: "starry_sky",
    subtitle: "Ink pen on paper"
}

// ---------- Page lists and maps ----------

export const doodleList = [
    duncan,
    kiwi,
    harper,
    jack,
    squigglyLines,
    starrySky,
]

export const doodleMap = {
    duncan: duncan,
    kiwi: kiwi,
    harper: harper,
    jack: jack,
    squiggly_lines: squigglyLines,
    starry_sky: starrySky,
}