var tutorial = ["To use the Fingerprint Scanner, insert evidence with detected fingerprints and press Scan to identify prints.",
    "To use the Thin Layer Chromatographer, insert mixture evidence to seperate and identify elements.",
    "To use the DNA Fingerprint Scanner, insert DNA Sample to seperate sample into DNA Fragments, and match the fingerprint given with the list of suspects."
]

var FPSdata = [
    ["FPS", "TextAboutFPS"],
    ["Use Fingerprint Scanner", tutorial[0]]
];
//var FPS = new FingerprintScanner("FPS", "imgs/Lab/fps.jpg", 40, 75, FPSdata);
var FPS = new GameObject("FPS", "imgs/Lab/fps.jpg", 40, 75, FPSdata);

var TLCdata = [
    ["TCL", "TextAboutTCL"],
    ["Use Thin Layer Chromatographor", tutorial[1]]
];
//var TLC = new ThinLayerChromatographer("TLC", "imgs/Lab/tlc.jpg", 70, 65, TLCdata);
var TLC = new GameObject("TLC", "imgs/Lab/tlc.jpg", 70, 65, TLCdata);

var DNAdata = [
    ["DNA", "TextAboutDNA"],
    ["Use DNA Fingerprint Scanner", tutorial[2]]
];
//var DNA = new DNAFingerprintScanner("DNA", "imgs/Lab/dna.jpg", 65, 30, TLCdata);
var DNA = new GameObject("DNA", "imgs/Lab/dna.jpg", 65, 30, TLCdata);

var photoClues = [
    ["War Buddies", "TextAboutBeinBuddies"]
];
var Photo = new GameObject("Photo", "imgs/1_ProfessorLogan/items/Warbuddies.svg", 50, 50, photoClues);

var bookClues = [
    ["Flag of Kenya", "TextAboutKenya"],
    ["Flag of Rhodesia", "TextAboutRhodesia"]
];
var Book = new GameObject("Book", "imgs/1_ProfessorLogan/items/Book.svg", 80, 18, bookClues);

var KenyaAjiriClues = [
    ["KenyaAjiri", "This couldn't be poisioned"],
    ["Thin Layer Chrom", "Why is there ricin in here?"],
    ["DNA Seq", "TextAboutDNASeq"]
];
var KenyaAjiri = new GameObject("KenyaAjiri", "imgs/1_ProfessorLogan/items/KenyaAjiri.svg", 30, 80, KenyaAjiriClues);

var roomList = [
    ["Lab.jpg", []],
    ["Study.jpg", []],
    ["Fireplace.jpg", []],
    ["Kitchen.jpg", []]
];


document.addEventListener("DOMContentLoaded", () => {
    roomList[0][1].push(FPS);
    roomList[0][1].push(TLC);
    roomList[0][1].push(DNA);
    roomList[1][1].push(Book);
    roomList[2][1].push(Photo);
    roomList[3][1].push(KenyaAjiri);

    console.log(roomList);

    traverse(0);
});