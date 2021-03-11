var roomList;
var testDialog = ["The Republic of Kenya is a country in Africa with 47 semiautonomous counties governed by elected governors. Kenya stretches 580,367 square kilometres and has a population of more than 52.2 million people.",
                  "Kenya's capital and largest city is Nairobi while its oldest city and first capital is the coastal city of Mombasa. Kisumu City is the third largest city and also an inland port on Lake Victoria.",
                  "Kenya is the source of Ajiri tea, which the Professor enjoys. Kenya is also known for its production of castor oil from the castor bean plant."];

document.addEventListener("DOMContentLoaded", () => {
    roomList = loadMysterySet();
    traverse(0);
    startDialog();
    loadDialog(testDialog);
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
    [47, 14],
    [69, 63],
    [49, 60],
    [41, 82]
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
    [80, 27],
    [58, 75],
    [80, 15],
    [80, 60]
];
var studyObjClues = [
            [
              ["Kenya", "TextAboutKenya", "descriptionBook"],
              ["Rhodesia", "TextAboutRhodesia", "descriptionBook"]
            ],
            [
              ["TLC", "PointsToCake", "tlcCollect"],
              ["FP", "PointsToJeeves","fpsCollect" ]
            ],
            [
              ["DNA", "DNASeqData", "dnaCollect"],
              ["FP", "PointsToPlum", "fpsCollect"]
            ],
            [
              ["DNA", "PointsToLogan", "dnaCollect"],
              ["FP", "PointsToLogan", "fpsCollect"]
            ]
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
            [
              ["DNA", "DNASeqData", "dnaCollect"]
            ],
            [
              ["War Buddies", "PointsToMustard", "description"]
            ],
            [
              ["Mask", "PointsToPeru", "description"]
            ],
            [
              ["Son", "PointsToSon", "description"]
            ]
];

var kitchenObjNames = ["Tea"];
var kitchenObjImgs = ["imgs/1_ProfessorLogan/items/KenyaAjiri.png"];
var kitchenObjLocs = [
    [30, 85]
];
var kitchenObjClues = [
            [
              ["TLC", "PointsToRicin", "tlcCollect"],
              ["DNA", "DNASeqData", "dnaCollect"]
            ]
];
