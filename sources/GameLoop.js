var tutorial = ["To use the Fingerprint Scanner, insert evidence with detected fingerprints and press Scan to identify prints.",
    "To use the Thin Layer Chromatographer, insert mixture evidence to seperate and identify elements.",
    "To use the DNA Fingerprint Scanner, insert DNA Sample to seperate sample into DNA Fragments, and match the fingerprint given with the list of suspects.",
    "To use the DNA Sequencer, insert DNA Sample to identify the DNA sequence code. Then insert the DNA Code to the BLAST Processor following the tutorial provided.\t"
]

var roomList;

document.addEventListener("DOMContentLoaded", () => {
    roomList = loadMysterySet();
    traverse("right");
});

function loadMysterySet() {
    var labObjs = [];
    var studyObjs = [];
    var fireplaceObjs = [];
    var kitchenObjs = [];

    for (var i = 0; i < labObjNames.length; i++) {
        var newObject = new GameObject(labObjNames[i], labObjImgs[i], labObjLocs[i][0], labObjLocs[i][1], labObjClues[i], true);
        labObjs.push(newObject);
    }
    for (var i = 0; i < studyObjNames.length; i++) {
        var newObject = new GameObject(studyObjNames[i], studyObjImgs[i], studyObjLocs[i][0], studyObjLocs[i][1], studyObjClues[i], false);
        studyObjs.push(newObject);
    }
    for (var i = 0; i < fireplaceObjNames.length; i++) {
        var newObject = new GameObject(fireplaceObjNames[i], fireplaceObjImgs[i], fireplaceObjLocs[i][0], fireplaceObjLocs[i][1], fireplaceObjClues[i], false);
        fireplaceObjs.push(newObject);
    }
    for (var i = 0; i < kitchenObjNames.length; i++) {
        var newObject = new GameObject(kitchenObjNames[i], kitchenObjImgs[i], kitchenObjLocs[i][0], kitchenObjLocs[i][1], kitchenObjClues[i], false);
        kitchenObjs.push(newObject);
    }

    var theRoomList = [
        ["Lab.jpg", labObjs],
        ["Study.jpg", studyObjs],
        ["Fireplace.jpg", fireplaceObjs],
        ["Kitchen.jpg", kitchenObjs]
    ];

    return theRoomList;
}

var rooms = ["Lab", "Study", "Fireplace", "Kitchen"];
var roomsImg = ["imgs/Lab/Lab.jpg", "imgs/1_ProfessorLogan/rooms/Study.jpg", "imgs/1_ProfessorLogan/rooms/Fireplace.jpg", "imgs/1_ProfessorLogan/rooms/Kitchen.jpg"];
var roomsObj = [
    [],
    [],
    [],
    []
];

var labObjNames = ["FPS", "TLC", "DNA", "BLAST"];
// Yellow FPS, Blue - TLC, Red - DNA, Green - BLAST, 
var labObjImgs = ["imgs/Lab/fps.jpg", "imgs/Lab/tlc.jpg", "imgs/Lab/dna.jpg", "imgs/Lab/blast.jpg"];
var labObjLocs = [
    [11, 28],
    [60, 40],
    [69, 86],
    [13, 69]
];
var labObjClues = [
        ["FPS"],
        ["TLC"],
        ["DNA"],
        ["BLAST"],
];

var studyObjNames = ["Book", "Plate", "Pipe", "Teacup"];
var studyObjImgs = ["imgs/1_ProfessorLogan/items/Book.png", "imgs/1_ProfessorLogan/items/Plate.png", "imgs/1_ProfessorLogan/items/Pipe.png", "imgs/1_ProfessorLogan/items/Teacup.png"];
var studyObjLocs = [
    [80, 27],
    [58, 75],
    [80, 15],
    [80, 60]
];
var studyObjClues = [
    ["Kenya", "Rhodesia"],
    ["TLC", "FPS"],
    ["DNA", "FPS"],
    ["DNA", "FPS"],
];

var fireplaceObjNames = ["Vial", "Photo", "Mask", "Photo1"];
var fireplaceObjImgs = ["imgs/1_ProfessorLogan/items/Vial.png", "imgs/1_ProfessorLogan/items/Warbuddies.png", "imgs/1_ProfessorLogan/items/Mask.png", "imgs/1_ProfessorLogan/items/Photograph.png"];
var fireplaceObjLocs = [
    [50, 15],
    [50, 53],
    [50, 87],
    [50, 32]
];
var fireplaceObjClues = [
        ["Vial Contents", "DNA"],
        ["War Buddies"],
        ["Mask"],
        ["Son"],
];

var kitchenObjNames = ["Tea"];
var kitchenObjImgs = ["imgs/1_ProfessorLogan/items/KenyaAjiri.png"];
var kitchenObjLocs = [
    [30, 85]
];
var kitchenObjClues = [
        ["TLC"],
        ["DNA"]
];