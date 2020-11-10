var FPSdata = [["FPS","BioTech Sim"]];
var FPS = new GameObject("FPS", "imgs/Lab/fps.jpg", 50, 55, FPSdata);

var photoClues = [["War Buddies", "TextAboutBeinBuddies"]];
var Photo = new GameObject("Photo", "imgs/1_ProfessorLogan/items/Warbuddies.svg", 50, 50, photoClues);
                 
var bookClues = [["Flag of Kenya", "TextAboutKenya"],
                 ["Flag of Rhodesia", "TextAboutRhodesia"]];
var Book = new GameObject("Book", "imgs/1_ProfessorLogan/items/Book.svg", 80, 18, bookClues);

var KenyaAjiriClues = [["KenyaAjiri", "This couldn't be poisioned"],
                       ["Thin Layer Chrom", "Why is there ricin in here?"],
                       ["DNA Seq", "TextAboutDNASeq"]];
var KenyaAjiri = new GameObject("KenyaAjiri", "imgs/1_ProfessorLogan/items/KenyaAjiri.svg", 30, 80, KenyaAjiriClues);

var roomList = [["Lab.jpg",[]],
                ["Study.jpg",[]],
                ["Fireplace.jpg",[]],
                ["Kitchen.jpg",[]]];


document.addEventListener("DOMContentLoaded", () => {
    roomList[0][1].push(FPS);
    roomList[1][1].push(Book);
    roomList[2][1].push(Photo);
    roomList[3][1].push(KenyaAjiri);

    traverse(0);
});