var tutorial = ["To use the Fingerprint Scanner, insert evidence with detected fingerprints and press Scan to identify prints.",
    "To use the Thin Layer Chromatographer, insert mixture evidence to seperate and identify elements.",
    "To use the DNA Fingerprint Scanner, insert DNA Sample to seperate sample into DNA Fragments, and match the fingerprint given with the list of suspects."
]

var roomList;

document.addEventListener("DOMContentLoaded", () => {
    roomList = loadMysterySet();
    traverse(0);
});

function loadMysterySet() {
    var labObj = [];
    var studyObj = [];
    var fireplaceObj = [];
    var kitchenObj = [];

    for (var i = 0; i < labObjNames.length; i++) {
        var newObject = new GameObject(labObjNames[i], labObjImgs[i], labObjLocs[i][0], labObjLocs[i][1], labObjClues[i], true);
        labObj.push(newObject);
    }
    for (var i = 0; i < studyObjNames.length; i++) {
        var newObject = new GameObject(studyObjNames[i], studyObjImgs[i], studyObjLocs[i][0], studyObjLocs[i][1], studyObjClues[i], false);
        studyObj.push(newObject);
    }
    for (var i = 0; i < fireplaceObjNames.length; i++) {
        var newObject = new GameObject(fireplaceObjNames[i], fireplaceObjImgs[i], fireplaceObjLocs[i][0], fireplaceObjLocs[i][1], fireplaceObjClues[i], false);
        fireplaceObj.push(newObject);
    }
    for (var i = 0; i < kitchenObjNames.length; i++) {
        var newObject = new GameObject(kitchenObjNames[i], kitchenObjImgs[i], kitchenObjLocs[i][0], kitchenObjLocs[i][1], kitchenObjClues[i], false);
        kitchenObj.push(newObject);
    }

    var theRoomList = [
        ["Lab.jpg", labObj],
        ["Study.jpg", studyObj],
        ["Fireplace.jpg", fireplaceObj],
        ["Kitchen.jpg", kitchenObj]
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
var labObjImgs = ["imgs/Lab/fps.jpg", "imgs/Lab/tlc.jpg", "imgs/Lab/dna.jpg", "imgs/Lab/blast.jpg"];
var labObjLocs = [
    [47, 4],
    [69, 58],
    [49, 55],
    [41, 77]
];
var labObjClues = [
    [
        ["FPS"]
    ],
    [
        ["TLC"]
    ],
    [
        ["DNA"]
    ],
    [
        ["BLAST"]
    ]
];

var studyObjNames = ["Book", "Plate", "Pipe", "Teacup"];
var studyObjImgs = ["imgs/1_ProfessorLogan/items/Book.png", "imgs/1_ProfessorLogan/items/Plate.png", "imgs/1_ProfessorLogan/items/Pipe.png", "imgs/1_ProfessorLogan/items/Teacup.png"];
var studyObjLocs = [
    [80, 18],
    [58, 70],
    [80, 10],
    [80, 55]
];
var studyObjClues = [
            [["Kenya", "TextAboutKenya", "descriptionBook"], ["Rhodesia", "TextAboutRhodesia", "descriptionBook"]],
            [["TLC", "PointsToCake", "tlcCollect"], ["FP", "PointsToJeeves","fpsCollect" ]],
            [["DNA", "DNASeqData", "dnaCollect"], ["FP", "PointsToPlum", "fpsCollect"]],
            [["DNA", "PointsToLogan", "dnaCollect"], ["FP", "PointsToLogan", "fpsCollect"]]
                    ];

var fireplaceObjNames = ["Vial", "Photo", "Mask", "Photo1"];
var fireplaceObjImgs = ["imgs/1_ProfessorLogan/items/Vial.png", "imgs/1_ProfessorLogan/items/Warbuddies.png", "imgs/1_ProfessorLogan/items/Mask.png", "imgs/1_ProfessorLogan/items/Photograph.png"];
var fireplaceObjLocs = [
    [50, 5],
    [50, 48],
    [50, 85],
    [50, 20]
];
var fireplaceObjClues = [
            [["DNA", "DNASeqData", "dnaCollect"]],
            [["War Buddies", "PointsToMustard", "description"]],
            [["Mask", "PointsToPeru", "description"]],
            [["Son", "PointsToSon", "description"]]
                        ];

var kitchenObjNames = ["Tea"];
var kitchenObjImgs = ["imgs/1_ProfessorLogan/items/KenyaAjiri.png"];
var kitchenObjLocs = [
    [30, 80]
];
var kitchenObjClues = [
            [["TLC", "PointsToRicin", "tlcCollect"], ["DNA", "DNASeqData", "dnaCollect"]]
                      ];
