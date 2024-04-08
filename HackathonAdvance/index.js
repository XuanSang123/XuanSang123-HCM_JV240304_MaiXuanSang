const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const numberPhone = document.getElementById("numberPhone");
const address = document.getElementById("address");
const male = document.getElementById("male");
const female = document.getElementById("female");
const errorpassword = document.getElementById("errorpassword");
const erroremail = document.getElementById("erroremail");
const erroraddress = document.getElementById("erroraddress");
// Lấy giá trị của radio button giới tính
var maleRadio = document.getElementById("male");
var femaleRadio = document.getElementById("female");
var selectedGenderValue;

// // Kiểm tra xem radio button nào được chọn và lấy giá trị tương ứng
// if (maleRadio.checked) {
//   selectedGenderValue = maleRadio.value;
// } else if (femaleRadio.checked) {
//   selectedGenderValue = femaleRadio.value;
// } else {
//   selectedGenderValue = null;
// }

// // Kiểm tra giá trị được chọn và hiển thị thông báo tương ứng
// if (selectedGenderValue === "male") {
//   console.log("Male selected");
// } else if (selectedGenderValue === "female") {
//   console.log("Female selected");
// } else {
//   console.log("No gender selected");
// }
let gender = document.getElementsByName("gender");
console.log(gender[0]);
let tbody = document.getElementById("tbody");
let students = JSON.parse(localStorage.getItem("students")) || [];
function displayData() {
  let html = "";
  for (let i in students) {
    html += `
        <tr>
        <td>${students[i].id}</td>
        <td>${students[i].fullName}</td>
        <td>${students[i].email}</td>
        <td>${students[i].numberPhone}</td>
        <td>${students[i].address}</td>
        <td>${students[i].gender}</td>
          <td> <button onclick="editStudent('${students[i].id}')">Edit</button> <button onclick="deleteStudent('${students[i].id}')">Delete</button></td>
        </tr>`;
  }
  tbody.innerHTML = html;
  fullName.value = "";
  email.value = "";
  numberPhone.value = "";
  address.value = "";
  gender[0].checked = true;
}
displayData();
function addStudent() {
  let gender = document.getElementsByName("gender");
  for (let i in gender) {
    if (gender[i].checked) genderValue = gender[i].value;
  }
  const newStudent = {
    id: Math.floor(Math.random() * 1000),
    fullName: fullName.value,
    email: email.value,
    numberPhone: numberPhone.value,
    address: address.value,
    gender: genderValue,
  };
  students.push(newStudent);
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  alert("Thêm học sinh mới thành công!!!!");
}

// function displaySelectedValue() {
//   let selected = document.querySelector(
//     "input[type=radio][name=gender]:checked"
//   ).value;
//   localStorage.setItem("gender", selected);
// }

// window.onload = function () {
//   localStorage.removeItem("gender");
// };

function editStudent(studentId) {
  console.log(studentId, "ID");
  localStorage.setItem("studentId", studentId);
  document.getElementById("button").style.display = "none";
  document.getElementById("save").style.display = "block";
  let index = students.findIndex((student) => student.id == studentId);
  console.log(students[index].gender);
  for (let i in gender) {
    if (gender[i].value == students[index].gender) gender[i].checked = true;
  }
  fullName.value = students[index].fullName;
  email.value = students[index].email;
  numberPhone.value = students[index].numberPhone;
  address.value = students[index].address;
  // gender.value = students[index].gender;
}

function saveStudent() {
  document.getElementById("button").style.display = "block";
  document.getElementById("save").style.display = "none";
  let index = students.findIndex(
    (student) => student.id == localStorage.getItem("studentId")
  );
  const gender = document.querySelector('input[name="gender"]:checked').value;
  console.log(index, "index");
  students[index] = {
    id: students[index].id,
    fullName: fullName.value,
    email: email.value,
    numberPhone: numberPhone.value,
    address: address.value,
    gender: gender,
  };

  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  alert("Chỉnh sửa thông tin thành công!!!");
}

// Delete student:
function deleteStudent(studentId) {
  console.log(studentId);
  // 2 bước để xóa
  // B1: Tìm được vị trí của phần tử có id trong mảng
  const index = students.findIndex((student) => student.id == studentId);
  students.splice(index, 1);
  // B2: Xóa phần. tử bằng splice
  //   Lưu dữ liệu vào localStorage
  localStorage.setItem("students", JSON.stringify(students));
  displayData();
  alert("Xóa student thành công!");
  console.log(index);
}
function sortByName() {
  students.sort((a, b) => {
    if (a.fullName < b.fullName) return -1; // `a` đứng trước `b`
    if (a.fullName > b.fullName) return 1; // // `a` đứng sau `b`
    return 0; // Hai chuỗi bằng nhau
  });
  displayData();
}

// Tìm kiếm sinh viên theo tên:
let filterStudent = document.getElementById("filterStudent");

function searchStudents() {
  let searchQuery = filterStudent.value.trim().toLowerCase(); // trim(): loại bỏ khoảng trắng ở đầu và cuối chuỗi, toLowerCase(): chuyển chuỗi thành chữ thường

  // Lọc danh sách sinh viên theo tên, includes(): kiểm tra chuỗi có chứa chuỗi con không
  let filteredStudents = students.filter((student) =>
    student.fullName.toLowerCase().includes(searchQuery)
  );

  let html = "";
  for (let i = 0; i < filteredStudents.length; i++) {
    let student = filteredStudents[i];
    html += `
      <tr>
        <td>${student.id}</td>
        <td>${student.fullName}</td>
        <td>${student.email}</td>
        <td>${student.numberPhone}</td>
        <td>${student.address}</td>
    <td></td>
        <td><button onclick="editStudent('${student.id}')">Edit</button>
<button onclick="deleteStudent('${student.id}')">Delete</button></td>
      </tr>
    `;
  }

  // Hiển thị kết quả lọc trực tiếp trong tbody
  document.getElementById("tbody").innerHTML = html;
  filterStudent.value = "";
}

function handleInputfullname() {
  if (fullName.value === "") {
    errorfullname.innerHTML = "FullName can not empry";
    errorfullname.style.color = "red";
  } else errorfullname.innerHTML = "";
}
function handleInputemail() {
  let emailFormat = /@/;
  if (emailFormat.test(email.value)) {
    erroremail.innerHTML = "";
  } else erroremail.innerHTML = "invalid email format";
  erroremail.style.color = "red";
}
function handleInputaddress() {
  if (address.value === "") {
    erroraddress.innerHTML = "Address can not empry";
    erroraddress.style.color = "red";
  } else erroraddress.innerHTML = "";
}
