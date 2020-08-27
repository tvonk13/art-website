import Pattern from "./artwork/pattern-in-d-minor.png";
import PatternThumb from "./artwork/pattern-in-d-minor-thumb.png";
import Gecko from "./artwork/gecko.png";
import GeckoThumb from "./artwork/gecko-thumb.png";
import Beetle from "./artwork/japanese-beetle.png";
import BeetleThumb from "./artwork/japanese-beetle-thumb.png";
import Lion from "./artwork/lion.png";
import LionThumb from "./artwork/lion-thumb.png";
import PuzzlePieces from "./artwork/puzzle-pieces.jpg";
import PuzzlePiecesThumb from "./artwork/puzzle-pieces-thumb.jpg";
import Deer from "./artwork/deer.jpg";
import DeerThumb from "./artwork/deer-thumb.jpg";
import Amanita from "./artwork/amanita.png";
import AmanitaThumb from "./artwork/amanita-thumb.png";
import AmanitaRound from "./artwork/amanita-round.png";
import AmanitaRoundThumb from "./artwork/amanita-round-thumb.png";
import BodiesCollide from "./artwork/bodies-collide.png";
import BodiesCollideThumb from "./artwork/bodies-collide-thumb.png";
import ColorfulLines from "./artwork/colorful-lines.jpg";
import ColorfulLinesThumb from "./artwork/colorful-lines-thumb.jpg";
import Drips from "./artwork/drips.png";
import DripsThumb from "./artwork/drips-thumb.png";
import Elephant from "./artwork/elephant.jpg";
import ElephantThumb from "./artwork/elephant-thumb.jpg";
import Geometrics from "./artwork/geometrics.jpg";
import GeometricsThumb from "./artwork/geometrics-thumb.jpg";
import Iris from "./artwork/iris.jpg";
import IrisThumb from "./artwork/iris-thumb.jpg";
import Polyphemus from "./artwork/polyphemus.png";
import PolyphemusThumb from "./artwork/polyphemus-thumb.png";
import Roses from "./artwork/roses.png";
import RosesThumb from "./artwork/roses-thumb.png";
import Koi from "./artwork/koi.png";
import KoiThumb from "./artwork/koi-thumb.png";
import Dandelions from "./artwork/dandelions.png";
import DandelionsThumb from "./artwork/dandelions-thumb.png";
import TheWiseMansFear from "./artwork/the-wise-mans-fear.jpg"
import TheWiseMansFearThumb from "./artwork/the-wise-mans-fear-thumb.jpg"

const wiseMan = {
    img: TheWiseMansFear,
    thumb: TheWiseMansFearThumb,
    title: "The Wise Man's Fear",
    id: "the_wise_mans_fear",
    subtitle: "Digital"
}

const dandelions = {
    img: Dandelions,
    thumb: DandelionsThumb,
    title: "Dandelions",
    id: "dandelions",
    subtitle: "Digital"
}

const koi = {
    img: Koi,
    thumb: KoiThumb,
    title: "Koi",
    id: "koi",
    subtitle: "Digital"
}

const pattern = {
    img: Pattern,
    thumb: PatternThumb,
    title: "Pattern In D Minor",
    id: "pattern_in_d_minor",
    subtitle: "Digital"
}

const gecko = {
    img: Gecko,
    thumb: GeckoThumb,
    title: "Gecko",
    id: "gecko",
    subtitle: "Digital"
}

const beetle = {
    img: Beetle,
    thumb: BeetleThumb,
    title: "Japanese Beetle",
    id: "beetle",
    subtitle: "Digital",
}

const lion = {
    img: Lion,
    thumb: LionThumb,
    title: "Lion",
    id: "lion",
    subtitle: "Digital",
}

const puzzlePieces = {
    img: PuzzlePieces,
    thumb: PuzzlePiecesThumb,
    title: "Puzzle Pieces",
    id: "puzzle_pieces",
    subtitle: "Posca paint markers and watercolor on 140lb cold pressed paper"
}

const deer = {
    img: Deer,
    thumb: DeerThumb,
    title: "Deer",
    id: "deer",
    subtitle: "Ink pen on paper"
}

const amanita = {
    img: Amanita,
    thumb: AmanitaThumb,
    title: "Amanita",
    id: "amanita",
    subtitle: "Digital"
}

const amanitaRound = {
    img: AmanitaRound,
    thumb: AmanitaRoundThumb,
    title: "Amanita",
    id: "amanitaRound",
    subtitle: "Digital"
}

const bodiesCollide = {
    img: BodiesCollide,
    thumb: BodiesCollideThumb,
    title: "Our Bodies Will Collide",
    id: "our_bodies_will_collide",
    subtitle: "Digital",
    description: "Inspired by \"Our Bodies Will Collide\" by Emil Landman"
}

const colorfulLines = {
    img: ColorfulLines,
    thumb: ColorfulLinesThumb,
    title: "Colorful Lines",
    id: "colorful_lines",
    subtitle: "Posca paint pen"
}

const drips = {
    img: Drips,
    thumb: DripsThumb,
    title: "Abstract Drips",
    id: "drips",
    subtitle: "Ink pen on paper"
}

const geometrics = {
    img: Geometrics,
    thumb: GeometricsThumb,
    title: "Geometrics",
    id: "geometrics",
    subtitle: "Posca paint pen"
}

const iris = {
    img: Iris,
    thumb: IrisThumb,
    title: "Iris",
    id: "iris",
    subtitle: "Unmounted lino block and water-based ink"
}

const elephant = {
    img: Elephant,
    thumb: ElephantThumb,
    title: "Elephant",
    id: "elephant",
    subtitle: "Ink pen on paper"
}

const polyphemus = {
    img: Polyphemus,
    thumb: PolyphemusThumb,
    title: "Polyphemus",
    id: "polyphemus",
    subtitle: "Digital"
}

const roses = {
    img: Roses,
    thumb: RosesThumb,
    title: "Stop And Smell The Roses",
    id: "roses",
    subtitle: "Digital"
}

// ---------- Page lists and maps ----------

export const artList = [
    wiseMan,
    koi,
    dandelions,
    pattern,
    gecko,
    beetle,
    lion,
    puzzlePieces,
    amanita,
    deer,
    bodiesCollide,
    roses,
    drips,
    geometrics,
    iris,
    polyphemus,
    elephant,
    colorfulLines,
]

export const artMap = {
    the_wise_mans_fear: wiseMan,
    dandelions: dandelions,
    koi: koi,
    pattern_in_d_minor: pattern,
    gecko: gecko,
    beetle: beetle,
    lion: lion,
    puzzle_pieces: puzzlePieces,
    amanita: amanita,
    deer: deer,
    our_bodies_will_collide: bodiesCollide,
    roses: roses,
    drips: drips,
    geometrics: geometrics,
    iris: iris,
    polyphemus: polyphemus,
    elephant: elephant,
    colorful_lines: colorfulLines,
}