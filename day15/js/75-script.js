import { students } from "../data/students.js";

document.querySelector("#btnShow").addEventListener("click", () => {
	let pointEl = document.querySelectorAll(
		"#tblStudents  tbody tr td:last-child"
	);
	//console.log(pointEl)

	pointEl.forEach((point, index) => {
		let pointText = point.innerText;
		if (pointText < 50) {
			document
				.querySelector(`#tblStudents  tbody tr:nth-child(${index + 1})`)
				.classList.add("table-danger");
		}else{
            document
				.querySelector(`#tblStudents  tbody tr:nth-child(${index + 1})`)
				.classList.add("table-success");
        }
	});
});
//önce burayı yaptık tabloyu olusturduk: 
const loadData = () => {
	let listEl = "";
	students.forEach((student, index) => {
		listEl += `    <tr>
    <td>${index + 1}</td>
    <td>${student.name}</td>
    <td>${student.point}</td>
</tr>`;
	});

	document.querySelector("#tblStudents tbody").innerHTML = listEl;
};



loadData();
